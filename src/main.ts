/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { CoWebsite, UIWebsite } from "@workadventure/iframe-api-typings";
import { DialogueInterface, dialogues } from "./dialogues";

console.log('Script started successfully');

//let popupHopital: any;
//let popupBuilding: any;
//let link: any;

let dialogueBox: UIWebsite|null
let coWebsite: CoWebsite|null
let root: string

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');

    const mapUrl = WA.room.mapURL
    root = mapUrl.substring(0, mapUrl.lastIndexOf("/"))

    WA.ui.actionBar.removeButton("roomListIcon");
    WA.ui.actionBar.removeButton("invite-btn");

    WA.controls.disableInviteButton();
    WA.controls.disableRoomList();

    WA.controls.disablePlayerProximityMeeting();
    WA.controls.disableScreenSharing();
    WA.controls.disableWebcam();
    WA.controls.disableMicrophone();

/*
    WA.room.onEnterLayer("roofZone").subscribe(() => {
        WA.room.hideLayer("Roof/roof1");
        WA.room.hideLayer("Roof/roof2");
    });

    WA.room.onLeaveLayer("roofZone").subscribe(() => {
        WA.room.showLayer("Roof/roof1");
        WA.room.showLayer("Roof/roof2");
    });

    if ('Entry' in WA.room.hashParameters) {
        WA.room.hideLayer("Roof/roof1");
        WA.room.hideLayer("Roof/roof2");
    }
    */
    WA.ui.actionBar.addButton({
        id: 'postuler-btn',
        // @ts-ignore
        label: 'Postuler',
        callback: () => {
            WA.nav.openCoWebSite("https://www.inmind.fr/forum/90e535");
        }
    });
    /*
    WA.player.state.tutorialDone = true;
    WA.ui.modal.closeModal();
    setTimeout(() => {
        WA.ui.modal.closeModal();
        WA.ui.modal.openModal({
            src: "https://hugoaverty.github.io/eiffage-UI/src/",
            allow: "fullscreen",
            title: "Bienvenue",
            allowApi: true,
            position: "center",
        });
    }, 1000);
    */

    for (const id of dialogues.map(dialogue => dialogue.id)) {
        listenNPCAreas(id);
    }

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');

        interface CloseDialogueBoxVariable {
            forceChange: number;
            npc: DialogueInterface|null;
        }
    
        // When the dialogue box is closed, this event is fired
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        WA.player.state.onVariableChange('closeDialogueBoxEvent').subscribe(async (value) => {
            const dialogueData = value as CloseDialogueBoxVariable;
            const npc = dialogueData.npc;
    
            if (npc) {
                console.log('Variable "closeDialogueBoxEvent" changed. New value: ', npc);
                // If the NPC has a content to show after the dialogue box is closed, open the content
                if (npc.url) {
                    console.log("Open URL",npc.url)
                    await openWebsite(npc.url)
                }
            }
        });
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

// NPCs function (executed for each area)

function listenNPCAreas(npcArea: string) {
    WA.room.area.onEnter(npcArea).subscribe(async () => {
        console.log("onEnter",npcArea)
        await openDialogueBox(npcArea)
    });

    WA.room.area.onLeave(npcArea).subscribe(async () => {
        console.log("onLeave",npcArea)
        await closeDialogueBox()
        await closeWebsite()
    });
}

// UI functions

async function openDialogueBox(npcId: string) {
    console.log("openDialogueBox")
    dialogueBox = await WA.ui.website.open({
        url:  root + `/dialogue-box/index.html?id=${npcId}`,
        visible: true,
        allowApi: true,
        allowPolicy: "",   // The list of feature policies allowed
        position: {
            vertical: "bottom",
            horizontal: "middle",
        },
        size: {            // Size on the UI (available units: px|em|%|cm|in|pc|pt|mm|ex|vw|vh|rem and others values auto|inherit)
            height: "auto",
            width: "350px",
        },
        margin: {              // Website margin (available units: px|em|%|cm|in|pc|pt|mm|ex|vw|vh|rem and others values auto|inherit)
            bottom: "70px",
        },
    })
}

async function closeDialogueBox() {
    const localDialogueBox = dialogueBox;
    if (localDialogueBox) {
        await localDialogueBox.close();
        // Avoid race condition by using a reference instead of dialogueBox directly
        if (dialogueBox === localDialogueBox) {
            dialogueBox = null;
        }
    }
}

async function openWebsite(url: string) {
    coWebsite = await WA.nav.openCoWebSite(
        url,
        true,
        "accelerometer; autoplay; camera; encrypted-media; gyroscope; picture-in-picture",
        75,
        1,
        true,
        false
    )
}

async function closeWebsite() {
    const localCoWebsite = coWebsite;
    if (localCoWebsite) {
        console.log("coWebsite",coWebsite)
        await localCoWebsite.close();
        // Avoid race condition by using a reference instead of coWebsite directly
        if (coWebsite === localCoWebsite) {
            coWebsite = null;
        }
    }
}

export {};

/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

//let popupHopital: any;
//let popupBuilding: any;
//let link: any;

// Waiting for the API to be ready
WA.onInit().then(() => {

    WA.ui.actionBar.removeButton("roomListIcon");
    WA.ui.actionBar.removeButton("invite-btn");

    console.log('Scripting API ready');

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
    WA.ui.actionBar.addButton({
        id: 'postuler-btn',
        // @ts-ignore
        label: 'Postuler',
        callback: () => {
            WA.nav.openCoWebSite("https://hugoaverty.github.io/eiffage-UI/src/help.pdf");
        }
    });

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

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};

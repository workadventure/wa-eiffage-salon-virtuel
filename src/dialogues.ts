export interface DialogueInterface {
    id: string;
    npcName: string;
    message: string;
    url: string;
}

/**
 * All NPCs messages
 * @constant
 */
export function getDialogues(): DialogueInterface[] {
    return [
        {
            id: "NPC_1",
            npcName: "Aria",
            message: WA.state.loadVariable('text_NPC1') as string,
            url: WA.state.loadVariable('url_NPC1') as string
        },
        {
            id: "NPC_2",
            npcName: "Aria",
            message: WA.state.loadVariable('text_NPC2') as string,
            url: WA.state.loadVariable('url_NPC2') as string
        },
        {
            id: "NPC_3",
            npcName: "Aria",
            message: WA.state.loadVariable('text_NPC3') as string,
            url: WA.state.loadVariable('url_NPC3') as string
        },
        {
            id: "NPC_4",
            npcName: "Aria",
            message: WA.state.loadVariable('text_NPC4') as string,
            url: WA.state.loadVariable('url_NPC4') as string
        },
        {
            id: "NPC_5",
            npcName: "Aria",
            message: WA.state.loadVariable('text_NPC5') as string,
            url: WA.state.loadVariable('url_NPC5') as string
        },
        {
            id: "NPC_6",
            npcName: "Aria",
            message: WA.state.loadVariable('text_NPC6') as string,
            url: WA.state.loadVariable('url_NPC6') as string
        },
        {
            id: "NPC_7",
            npcName: "Aria",
            message: WA.state.loadVariable('text_NPC7') as string,
            url: WA.state.loadVariable('url_NPC7') as string
        },
        {
            id: "NPC_8",
            npcName: "Aria",
            message: WA.state.loadVariable('text_NPC8') as string,
            url: WA.state.loadVariable('url_NPC8') as string
        },
    ]
};

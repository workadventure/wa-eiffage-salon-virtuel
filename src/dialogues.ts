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
export const dialogues: DialogueInterface[] = [
    {
        id: "NPC_1",
        npcName: "Aria",
        message: "Bonjour, je suis Thomas, conducteur de travaux. Je vous propose de répondre à 4 questions pour découvrir les valeurs que nous partageons chez Eiffage Énergie Systèmes.",
        url: "https://gp3cqgic8pa.typeform.com/to/QNcEwOZt"
    },
    {
        id: "NPC_2",
        npcName: "Aria",
        message: "Bonjour, je suis Nadia, responsable d’affaires. Je vous propose de répondre à 5 questions pour nous partager votre état d'esprit !",
        url: "https://gp3cqgic8pa.typeform.com/to/dAQZLV5F"
    },
    {
        id: "NPC_3",
        npcName: "Aria",
        message: "Bonjour, Je suis Hélène, la DRH de la région Hauts-de-France. Vous avez découvert notre univers, je vous invite maintenant à explorer tous nos métiers! ",
        url: "https://hugoaverty.github.io/eiffage-UI/src/jobs.html"
    },
    {
        id: "NPC_4",
        npcName: "Aria",
        message: "Salut ! Moi, c’est Anaïs, je suis responsable d’affaires. Découvrez en vidéo mon expérience chez Eiffage Énergie Systèmes. ",
        url: "https://player.vimeo.com/video/1010142327?h=56d96805b0"
    },
    {
        id: "NPC_5",
        npcName: "Aria",
        message: "Salut, je suis Thibaut, responsable d’études de prix. Découvrez en vidéo mon métier chez Eiffage Énergie Systèmes.",
        url: "https://player.vimeo.com/video/1010143782?h=53ec2a4f4bq"
    },
    {
        id: "NPC_6",
        npcName: "Aria",
        message: "Salut moi c’est Romain, je suis conducteur de travaux chez Eiffage Énergie Systèmes. Découvrez mon métier en vidéo.",
        url: "https://player.vimeo.com/video/1010142360?h=5921d0cd05q"
    },
    {
        id: "NPC_7",
        npcName: "Aria",
        message: "Salut, moi c'est Sylvain, mon métier est technicien de maintenance SSI. Découvrez en vidéo mon expérience chez Eiffage Énergie Systèmes.",
        url: "https://player.vimeo.com/video/1013059518"
    },
    {
        id: "NPC_8",
        npcName: "Aria",
        message: " Salut, moi c'est Thibaut, je suis technicien de maintenance CVC. Découvrez en vidéo mon métier chez Eiffage Énergie Systèmes.",
        url: "https://player.vimeo.com/video/1013053367"
    },
]

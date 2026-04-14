export const values = {
    ranks: [
        { title: "C", upgrade: 250, color: "#29aa56" },
        { title: "B", upgrade: 1000, color: "#b3ff31" },
        { title: "A", upgrade: 3000, color: "#fff421" },
        { title: "S", upgrade: 5000, color: "#ff8800" },
        { title: "SS", upgrade: 7500, color: "#ff0019" },
        { title: "SSS", upgrade: 10000, color: "#ff005d" },
        { title: "Ω", upgrade: 20000, color: "#ff00aa" }
    ],
    battles: [
        //Standard Battles - Just the basic batles with no twists, the opponents will be randomly generated based on your rank.
        //Series Battles, these are standard battles strung together back to back, five five and gain rewards, lose three and your out.
        { name: "Basic Battle", description: "A basic battle with basic opponents.", unlockRank: 0, clash: true, type: "standard", color: "#36f75d" },
        { name: "Basic Series", description: "A series of battles against a variety of basicopponents", unlockRank: 0, clash: true, type: "series", color: "#36f75d" },

        { name: "Team Battle",  description: "A battle with team opponents, you may select up to 3 cards for this battle.", unlockRank: 1, clash: true, type: "standard", color: "#6d68ff" },
        { name: "Team Series",  description: "A series of battles against teams of opponents, you may select up to 3 cards for each battle.", unlockRank: 1, clash: true, type: "series", color: "#6d68ff" },
        
        { name: "Pro Battle",   description: "A challenging battle with experienced and difficult opponents.", unlockRank: 2, clash: true, type: "standard", color: "#ffbe28" },
        { name: "Pro Series",   description: "A series of battles against experienced and difficult opponents.", unlockRank: 2, clash: true, type: "series", color: "#ffbe28" },
        
        { name: "Elite Battle", description: "An elite battle with the toughest opponents, massive gains if won but if lost your rank will be reduced.", unlockRank: 3, clash: true, type: "standard", color: "#ff006a" },
        { name: "Elite Series", description: "A series of battles against the toughest opponents, massive gains if won but if lost your rank will be reduced.", unlockRank: 3, clash: true, type: "series", color: "#00ffcc" }

        //Anarchy Battles These battles have special rules that challenge you in different ways.
    ],
};

console.log("✅ Values Loaded", values);
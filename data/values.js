var seriesAdd = "win 5 and gain rewards, lose 3 and your out."
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
        { name: "Basic Battle", description: "A basic battle with basic opponents, basic XP gain.", unlockRank: 0, clash: true, type: "standard", color: "#36f75d", cloutKey: "basic" },
        { name: "Basic Series", description: "A series of battles against a variety of basic opponents, (NOTE: You may switch your card during the serires). "+seriesAdd, unlockRank: 0, clash: true, type: "series", color: "#36f75d"},

        { name: "Team Battle",  description: "You may select up to 3 cards for this battle as your team, our oponets will also be a team.", unlockRank: 1, clash: true, type: "standard", color: "#6d68ff", cloutKey: "team" },
        { name: "Team Series",  description: "A series of battles against teams of opponents, (NOTE: Your team will not change throughout the sieres, but will heal slightly before the next battle). "+seriesAdd, unlockRank: 1, clash: true, type: "series", color: "#6d68ff", },
        
        { name: "Pro Battle",   description: "A challenging battle with devius opponents, large XP gain.", unlockRank: 2, clash: true, type: "standard", color: "#ffbe28", cloutKey: "pro" },
        { name: "Pro Series",   description: "A series of battles against experienced and difficult opponents,  (NOTE: You may switch your card during the serires). "+seriesAdd, unlockRank: 2, clash: true, type: "series", color: "#ffbe28" },
        
        { name: "Elite Battle", description: "An elite battle with the toughest opponents, massive gains if won but if lost your rank will be reduced.", unlockRank: 3, clash: true, type: "standard", color: "#ff006a", cloutKey: "elite" },
        { name: "Elite Series", description: "A series of difficalut battles, with the same rules (NOTE: Any lost seires battles will just remove XP from the seires total). "+seriesAdd, unlockRank: 3, clash: true, type: "series", color: "#ff006a" },

        //Anarchy Battles These battles have special rules that challenge you in different ways.
        { name: "Mirror Battle", description: "A battle where you face off against a copy of your own card.", unlockRank: 1, clash: false, type: "anarchy", color: "#b9e1ff", cloutKey: "mirror" },
        //{ name: "Relic Battle", description: "Start the game with a random relic, if you win you might just get to keep it....", unlockRank: 1, clash: false, type: "anarchy", color: "#d483ff" },
        { name: "Chaos Battle", description: "Each turn triggers new effects to be applied constatnly. You might just find yourself stugling to hit hard enught due to weakness, but you oponet cant hit anything due too blindness! Good luck...", unlockRank: 2, clash: false, type: "anarchy", color: "#e0d100", cloutKey: "chaos" },
        { name: "Trivia Battle", description: "Answer questions to gain advantages in battle, bu tif you get it wrong.. your opponent may buzz in for a steal...", unlockRank: 2, clash: false, type: "anarchy", color: "#0073ff", cloutKey: "trivia" },
        { name: "Double Trouble Battle", description: "You and your opponent each select two cards to battle with, but at the start of the battl eyou an dyour oponet with swap one card. Pick your cards carfuly so you dont get stuck with a bad hand, do you think you could win in the chaos?", unlockRank: 3, clash: false, type: "anarchy", color: "#b95b12", cloutKey: "doubleTrouble" },
        { name: "Clover Club Battle", description: "You will be delt a random card from you deck, during the battle your card may be randomly switched out for another in your decking, keeping all damage receved. Make ure to pay attentine or you may just lose everything...", unlockRank: 3, clash: false, type: "anarchy", color: "#00ff15", cloutKey: "cloverClub" },
        { name: "??? Battle", description: "A mysterious team battle with unknown variations and opponents, enter at your own risk. Select three cards to enter. NOTE: Your picked cards may turn against you, so choose wisely.", unlockRank: 4, clash: false, type: "anarchy", color: "#1a0228", cloutKey: "mystery" },

    ],
};

console.log("✅ Values Loaded", values);
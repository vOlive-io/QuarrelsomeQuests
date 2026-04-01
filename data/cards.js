//Classes: Warrior, Mage, Cleric, & Ranger.
//Each class has 20+ cards, each with a unique move set.
export const cards = [
    {
        name: "Squire",
        class: "Warrior",
        selected: false,  
        attack: 1.5,      
        prestigeLevel: 1,
        moveSet: ["knight"]
    },
    {
        name: "Knight",
        class: "Warrior",
        selected: false,  
        attack: 1.8,      
        prestigeLevel: 1,
        moveSet: ["knight"]
    },
    {
        name: "Royal Guard",
        class: "Warrior",
        selected: false,
        attack: 2.0,
        prestigeLevel: 1,
        moveSet: ["knight", "noble"]
    },
    {
        name: "King",
        class: "Warrior",
        selected: false,
        attack: 1.2,
        prestigeLevel: 1,
        moveSet: ["royal"]
    },
    {
        name: "Queen",
        class: "Warrior",
        selected: false,
        attack: 1.8,
        prestigeLevel: 1,
        moveSet: ["royal", "rogue"]
    },
    {
        name: "Noble",
        class: "Warrior",
        selected: false,
        attack: 1.5,
        prestigeLevel: 1,
        moveSet: ["noble"]
    },
    {
        name: "Dirty Fighter",
        class: "Warrior",
        selected: false,
        attack: 1.7,
        prestigeLevel: 1,
        moveSet: ["dirtyFighter", "rogue"]
    },
    {
        name: "Rogue",
        class: "Warrior",
        selected: false,
        attack: 1.6,
        prestigeLevel: 1,
        moveSet: ["rogue"]
    },
    {
        name: "Sword Master",
        class: "Warrior",
        selected: false,
        attack: 2.0,
        prestigeLevel: 1,
        moveSet: ["knight", "dirtyFighter"]
    },
    {
        name: "Spear Master",
        class: "Warrior",
        selected: false,
        attack: 1.9,
        prestigeLevel: 1,
        moveSet: ["spearman", "dirtyFighter"]
    },



    //Ranger cards    
    {
        name: "Sniper",
        class: "Ranger",
        selected: false,
        attack: 1.9,
        prestigeLevel: 1,
        moveSet: ["sniper", "rogue"]
    },



 ];
console.log("✅ Cards loaded");

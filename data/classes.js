export const classes = {

    "Warrior": {
        path: ["Warrior", "Brute", "Berserker"],
        selected: true,
        unlocked: true,
        attack: 1.5,
    },
    "Mage": {
        path: ["Mage", "Sorcerer", "Archmage"],
        selected: false,
        unlocked: true,
        attack: 1.5,
    },
    "Ranger": {
        path: ["Ranger", "Sharpshooter", "Stringer"],
        selected: false,
        unlocked: true,
        attack: 1.5,
    },
    "Cleric": {
        path: ["Cleric", "Priest", "Crusader"],
        selected: false,
        unlocked: false,
        attack: 1.5,
    }
};
console.log("✅ Classes loaded");

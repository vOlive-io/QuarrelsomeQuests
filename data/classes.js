export const classes = {

    "Warrior": {
        path: ["Warrior", "Brute", "Berserker"],
        selected: true,
        unlocked: true,
        stats : {
            health: 150,
            attack: 10,
            defense: 5,
            mana: 50,
        }
    },
    "Mage": {
        path: ["Mage", "Sorcerer", "Archmage"],
        selected: false,
        unlocked: true,
        stats : {
            health: 100,
            attack: 7,
            defense: 8,
            mana: 250,
        }
    },
    "Ranger": {
        path: ["Ranger", "Sharpshooter", "Stringer"],
        selected: false,
        unlocked: true,
        stats : {
            health: 80,
            attack: 9,
            defense: 6,
            mana: 100,
        },
    },
    "Cleric": {
        path: ["Cleric", "Priest", "Crusader"],
        selected: false,
        unlocked: false,
        stats : {
            health: 200,
            attack: 5,
            defense: 10,
            mana: 150,
        },
    }
};
console.log("✅ Classes loaded");

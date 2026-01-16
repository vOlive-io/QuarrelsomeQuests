export const classes = [
    {
        //////////////////////////////////
        ///        BASIC CLASSES        //
        //////////////////////////////////
        //Adds to 15
        name: "Warrior",
        selected: true,
        unlocked: true,
        stats : {
            health: 150,
            attack: 10,
            defense: 5,
            mana: 50,
            energy: 100,
            saturation: 100,
            luck: 5,
            complexity: "Easy",
        },
        weaponBuff: "Sword",
        bonusMoves: ["Sword Swing", "Sword Leap", "Injured Stife", "Power Strike", "Whirlwind"],
        spells: [],
    },
    {
        name: "Mage",
        selected: false,
        unlocked: true,
        stats : {
            health: 100,
            attack: 7,
            defense: 8,
            mana: 250,
            energy: 75,
            saturation: 125,
            luck: 10,
            complexity: "Moderate",
        },
        weaponBuff: "Staff",
        bonusMoves: [],
        spells: [],
    },
    {
        name: "Ranger",
        selected: false,
        unlocked: true,
        stats : {
            health: 80,
            attack: 9,
            defense: 6,
            mana: 100,
            energy: 150,
            saturation: 100,
            luck: 2,
            complexity: "Easy",
        },
        weaponBuff: "Bow",
        bonusMoves: [],
        spells: [],
    },
    {
        name: "Cleric",
        selected: false,
        unlocked: false,
        stats : {
            health: 200,
            attack: 5,
            defense: 10,
            mana: 150,
            energy: 150,
            saturation: 200,
            luck: 15,
            complexity: "Moderate",
        },
        weaponBuff: "Bow",
        bonusMoves: [],
        spells: [],
    },
];
console.log("✅ Classes loaded:", classes);

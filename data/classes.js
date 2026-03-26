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
        },
        weaponBuff: "Sword",
        bonusMoves: ["Injured Stife"],
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
        },
        weaponBuff: "Bow",
        bonusMoves: [],
        spells: [],
    },
];
console.log("✅ Classes loaded:", classes);

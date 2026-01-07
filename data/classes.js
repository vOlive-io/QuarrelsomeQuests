export const classes = [
    {
        name: "Warrior",
        selected: true,
        stats : {
            health: 150,
            attack: 10,
            defense: 8,
            mana: 50,
            energy: 100,
            saturation: 100,
            luck: 5,
            complexity: "Easy",
        },
        bonusMoves: [],
        spells: [],
    },
    {
        name: "Mage",
        selected: false,
        stats : {
            health: 100,
            attack: 6,
            defense: 5,
            mana: 200,
            energy: 75,
            saturation: 125,
            luck: 10,
            complexity: "Moderate",
        },
        bonusMoves: [],
        spells: [],
    },
];
console.log("✅ Classes loaded:", classes);
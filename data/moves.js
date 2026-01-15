export const moves = {
    "Sword Swing": (attacker, target) => {
        const damage = attacker.attack;
        target.hp -= damage;
        console.log(
        `${attacker.name} swings sword for ${damage} damage!`
        );
    },
    "Sword Leap": (attacker, target) => {
        const damage = attacker.attack;
        target.hp -= damage;
        console.log(
        `${attacker.name} leaps with sword for ${damage} damage!`
        );
    },


};
console.log("✅ Moves loaded:", moves);
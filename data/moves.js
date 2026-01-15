export const moves = {
    "Sword Swing": (player, target) => {
        if(player.energy < 10) {
            console.log(`${player.name} does not have enough energy to perform Sword Swing!`);
            return;
        } else {
            player.energy -= 10;
            const damage = player.attack;
            target.hp -= damage;
            console.log(`${player.name} swings sword for ${damage} damage!`);
        }
    },
    "Sword Leap": (player, target) => {
        const damage = player.attack;
        target.hp -= damage;
        console.log(
        `${player.name} leaps with sword for ${damage} damage!`
        );
    },


};
console.log("✅ Moves loaded:", moves);
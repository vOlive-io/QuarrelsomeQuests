export const moves = {
    "Sword Swing": (player) => {
        if(player.energy < 10) {
            console.log(`${player.name} does not have enough energy to perform Sword Swing!`);
            return;
        } else {
            player.energy -= 10;
            const buff = 1.0;
            if(player.weaponBuff === "Sword") {buff += player.buff;}
            if(player.potionBuff === "Attack") {buff += player.buff;}
            if(player.companionBuffAttack == true) {buff += player.buff;}
            const damage = player.attack * buff;
            return damage;
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
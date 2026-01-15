export const moves = {
    "Sword Swing": (player) => {
        if(player.energy < 10) {
            console.log("You do not have enough energy to perform Sword Swing!");
            return;
        } else {
            player.energy -= 10;
            return player.attack * calculateBuff(player, "Sword");   
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

function calculateBuff(player, weapon) {
    let buff = 1.0;
    if(player.weaponBuff === weapon) {buff += player.buff;}   
    if(player.potionBuff === "Attack") {buff += player.buff;}
    if(player.companionBuffAttack) {buff += player.buff;}
    return buff;
}

console.log("✅ Moves loaded:", moves);
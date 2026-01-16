export const moves = {
    "Sword Swing": (player) => {
        if(player.energy < 10) {
            console.log("You do not have enough energy to perform Sword Swing!");
            return;
        } else {
            let attackBaseDamage = 1.0;
            player.energy -= 10;
            return (attackBaseDamage * player.attack) * calculateBuff(player, "Sword");   
        }
    },
    "Sword Leap": (player) => {
        if(player.energy < 15) {
            console.log("You do not have enough energy to perform Sword Leap!");
            return;
        } else {
            let attackBaseDamage = 1.2;
            player.energy -= 15;
            return (attackBaseDamage * player.attack) * calculateBuff(player, "Sword");   
        }
    },
    "Injured Stife": (player) => {
        if((player.energy > 20 && player.energy > 10)|| player.health < player.maxHealth/10) {
            console.log("You are not injured enough to perform Injured Strife!");
            return;
        } else {
            let attackBaseDamage = 2;
            player.energy -= 10;
            return (attackBaseDamage * player.attack) * calculateBuff(player, "Sword");   
        }
    },
    "Power Strike": (player) => {
        if(player.energy < 20) {
            console.log("You do not have enough energy to perform Power Strike!");
            return;
        } else {
            let attackBaseDamage = 2.5;
            player.energy -= 20;
            return (attackBaseDamage * player.attack) * calculateBuff(player, "Sword");   
        }
    },
     "Whirlwind": (player) => {
        if(player.energy < 25) {
            console.log("You do not have enough energy to perform Whirlwind!");
            return;
        } else {
            let attackBaseDamage = 3;
            player.energy -= 25;
            return (attackBaseDamage * player.attack) * calculateBuff(player, "Sword");   
        }
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

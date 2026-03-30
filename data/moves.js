export const moves = {
    "Sword Miss": {
          baseDamage: 0,
          specialText: (player) => {
               player.stats.swordMissCount = (player.stats.swordMissCount || 0) + 1;
               return `${player.ActiveCard.name} tries to swing their sword at ${player.ActiveEvil}, but MISSES!`;
          }
     },
    "Sword Swing": {
        baseDamage: 10,
        specialText: (player) => {
            player.stats.swordSwingCount = (player.stats.swordSwingCount || 0) + 1;
            return `${player.ActiveCard.name} swings their sword at ${player.ActiveEvil}!`;
        }
    },
    "Sword Strike": {
        baseDamage: 10,
        specialText: (player) => {
            player.stats.swordStrikeCount = (player.stats.swordStrikeCount || 0) + 1;
            return `${player.ActiveCard.name} strikes ${player.ActiveEvil} with their sword!`;
        }
    },
    "Sword Leap": {
        baseDamage: 15,
        specialText: (player) => {
            player.stats.swordLeapCount = (player.stats.swordLeapCount || 0) + 1;
            return `${player.ActiveCard.name} leaps into the air and strikes ${player.ActiveEvil} with their sword!`;
        }
    },
    "Sword Charge": {
        baseDamage: 15,
        specialText: (player) => {
            player.stats.swordChargeCount = (player.stats.swordChargeCount || 0) + 1;
            return `${player.ActiveCard.name} charges forward, hitting ${player.ActiveEvil} with their sword!`;
        }
    },
    "Sword Spin": {
        baseDamage: 15,
        specialText: (player) => {
            player.stats.swordSpinCount = (player.stats.swordSpinCount || 0) + 1;
            return `${player.ActiveCard.name} spins around with thier sword, striking ${player.ActiveEvil}!`;
        }
    },
    "Fake Out (Sword)": {
        baseDamage: 20,
        specialText: (player) => {
            player.stats.swordFakeOutCount = (player.stats.swordFakeOutCount || 0) + 1;
            let bodyParts = ["arm", "guts", "butt", "leg", "foot", "hand", "toe"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} fakes out ${player.ActiveEvil}, and then stabs them in the ${bodyPart}!`;
        }
    },
    "Sword Block": {
        baseDamage: 20,
        specialText: (player) => {
            player.stats.swordBlockCount = (player.stats.swordBlockCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "hair", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `{player.ActiveEvil} tries to attack ${player.ActiveCard.name}, but ${player.ActiveCard.name} blocks them and chops off their ${bodyPart}!`;
        }
    },
    "Sword Impale": {
        baseDamage: 25,
        specialText: (player) => {
            player.stats.swordImpaleCount = (player.stats.swordImpaleCount || 0) + 1;
            let bodyParts = ["arm", "guts", "butt", "leg", "foot", "hand", "toe"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} impales ${player.ActiveEvil} in the ${bodyPart}!`;
        }
    },
    "Sword Flurry": {
        baseDamage: 30,
        specialText: (player) => {
            player.stats.swordFlurryCount = (player.stats.swordFlurryCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "hair", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} swings their sword in a flury of rage, chopping off ${player.ActiveEvil}'s ${bodyPart}!`;
        }
    },
    "Spear Miss": {
        baseDamage: 0,
        specialText: (player) => {
            player.stats.spearMissCount = (player.stats.spearMissCount || 0) + 1;
            return `${player.ActiveCard.name} jabs their spear forward, but misses!`;
        }
    },
    "Spear Lunge": {
        baseDamage: 10,
        specialText: (player) => {
            player.stats.spearLungeCount = (player.stats.spearLungeCount || 0) + 1;
            return `${player.ActiveCard.name} lunges forward with their spear, stabbing ${player.ActiveEvil}!`;
        }
    },
    "Spear Charge": {
        baseDamage: 10,
        specialText: (player) => {
            player.stats.spearChargeCount = (player.stats.spearChargeCount || 0) + 1;
            return `${player.ActiveCard.name} charges forward with their spear, stabbing ${player.ActiveEvil}!`;
        }
    },
    "Spear Stab": {
        baseDamage: 10,
        specialText: (player) => {
            player.stats.spearStabCount = (player.stats.spearStabCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "hair", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} jabs their spear forward, stabbing ${player.ActiveEvil}'s ${bodyPart}!`;
        }
    },
    "Spear Impale": {
        baseDamage: 20,
        specialText: (player) => {
            player.stats.spearImpaleCount = (player.stats.spearImpaleCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} jabs their spear forward, ripping through ${player.ActiveEvil}'s ${bodyPart}!`;
        }
    },
    "Spear Flurry": {
        baseDamage: 30,
        specialText: (player) => {
            player.stats.spearFlurryCount = (player.stats.spearFlurryCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose",, "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length-1)];
            let bodyPart2 = bodyParts[Math.floor(Math.random() * bodyParts.length-1)+1];
            return `${player.ActiveCard.name} charges forward in a flurry of strikes, ripping off ${player.ActiveEvil}'s ${bodyPart}, and stabbing ${player.ActiveEvil}'s ${bodyPart2}!`;
        }
    },
}

console.log("✅ Moves Loaded");

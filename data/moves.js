export const moves = {
    /////    Sword    /////
    "Sword Miss": {
          baseDamage: 0,
          damageType: "sword",
          specialText: (player) => {
               player.stats.swordMissCount = (player.stats.swordMissCount || 0) + 1;
               return `${player.ActiveCard.name} tries to swing their sword at ${player.ActiveEvil}, but MISSES!`;
          }
     },
    "Sword Swing": {
        baseDamage: 10,
        damageType: "sword",
        specialText: (player) => {
            player.stats.swordSwingCount = (player.stats.swordSwingCount || 0) + 1;
            return `${player.ActiveCard.name} swings their sword at ${player.ActiveEvil}!`;
        }
    },
    "Sword Strike": {
        baseDamage: 10,
        damageType: "sword",
        specialText: (player) => {
            player.stats.swordStrikeCount = (player.stats.swordStrikeCount || 0) + 1;
            return `${player.ActiveCard.name} strikes ${player.ActiveEvil} with their sword!`;
        }
    },
    "Sword Leap": {
        baseDamage: 15,
        damageType: "sword",
        specialText: (player) => {
            player.stats.swordLeapCount = (player.stats.swordLeapCount || 0) + 1;
            return `${player.ActiveCard.name} leaps into the air and strikes ${player.ActiveEvil} with their sword!`;
        }
    },
    "Sword Charge": {
        baseDamage: 15,
        damageType: "sword",
        specialText: (player) => {
            player.stats.swordChargeCount = (player.stats.swordChargeCount || 0) + 1;
            return `${player.ActiveCard.name} charges forward, hitting ${player.ActiveEvil} with their sword!`;
        }
    },
    "Sword Spin": {
        baseDamage: 15,
        damageType: "sword",
        specialText: (player) => {
            player.stats.swordSpinCount = (player.stats.swordSpinCount || 0) + 1;
            return `${player.ActiveCard.name} spins around with thier sword, striking ${player.ActiveEvil}!`;
        }
    },
    "Fake Out (Sword)": {
        baseDamage: 20,
        damageType: "sword",
        specialText: (player) => {
            player.stats.swordFakeOutCount = (player.stats.swordFakeOutCount || 0) + 1;
            let bodyParts = ["arm", "guts", "butt", "leg", "foot", "hand", "toe"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} fakes out ${player.ActiveEvil}, and then stabs them in the ${bodyPart}!`;
        }
    },
    "Sword Block": {
        baseDamage: 20,
        damageType: "sword",
        specialText: (player) => {
            player.stats.swordBlockCount = (player.stats.swordBlockCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "hair", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `{player.ActiveEvil} tries to attack ${player.ActiveCard.name}, but ${player.ActiveCard.name} blocks them and chops off their ${bodyPart}!`;
        }
    },
    "Sword Impale": {
        baseDamage: 25,
        damageType: "sword",
        specialText: (player) => {
            player.stats.swordImpaleCount = (player.stats.swordImpaleCount || 0) + 1;
            let bodyParts = ["arm", "guts", "butt", "leg", "foot", "hand", "toe"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} impales ${player.ActiveEvil} in the ${bodyPart}!`;
        }
    },
    "Sword Flurry": {
        baseDamage: 30,
        damageType: "sword",
        specialText: (player) => {
            player.stats.swordFlurryCount = (player.stats.swordFlurryCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "hair", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} swings their sword in a flury of rage, chopping off ${player.ActiveEvil}'s ${bodyPart}!`;
        }
    },

    /////    Spear    /////
    "Spear Miss": {
        baseDamage: 0,
        damageType: "spear",
        specialText: (player) => {
            player.stats.spearMissCount = (player.stats.spearMissCount || 0) + 1;
            return `${player.ActiveCard.name} jabs their spear forward, but misses!`;
        }
    },
    "Spear Lunge": {
        baseDamage: 10,
        damageType: "spear",
        specialText: (player) => {
            player.stats.spearLungeCount = (player.stats.spearLungeCount || 0) + 1;
            return `${player.ActiveCard.name} lunges forward with their spear, stabbing ${player.ActiveEvil}!`;
        }
    },
    "Spear Charge": {
        baseDamage: 10,
        damageType: "spear",
        specialText: (player) => {
            player.stats.spearChargeCount = (player.stats.spearChargeCount || 0) + 1;
            return `${player.ActiveCard.name} charges forward with their spear, stabbing ${player.ActiveEvil}!`;
        }
    },
    "Spear Stab": {
        baseDamage: 10,
        damageType: "spear",
        specialText: (player) => {
            player.stats.spearStabCount = (player.stats.spearStabCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "hair", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} jabs their spear forward, stabbing ${player.ActiveEvil}'s ${bodyPart}!`;
        }
    },
    "Spear Impale": {
        baseDamage: 20,
        damageType: "spear",
        specialText: (player) => {
            player.stats.spearImpaleCount = (player.stats.spearImpaleCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} jabs their spear forward, ripping through ${player.ActiveEvil}'s ${bodyPart}!`;
        }
    },
    "Fake Out (Spear)": {
        baseDamage: 20,
        damageType: "spear",
        specialText: (player) => {
            player.stats.spearFakeOutCount = (player.stats.spearFakeOutCount || 0) + 1;
            let bodyParts = ["arm", "guts", "butt", "leg", "foot", "hand", "toe"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} fakes out ${player.ActiveEvil}, and then stabs them in the ${bodyPart}!`;
        }
    },
    "Spear Flurry": {
        baseDamage: 30,
        damageType: "spear",
        specialText: (player) => {
            player.stats.spearFlurryCount = (player.stats.spearFlurryCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let num = Math.floor(Math.random() * bodyParts.length-1);
            let bodyPart = bodyParts[num];
            let bodyPart2 = bodyParts[num+1];
            return `${player.ActiveCard.name} charges forward in a flurry of strikes, ripping off ${player.ActiveEvil}'s ${bodyPart}, and stabbing ${player.ActiveEvil}'s ${bodyPart2}!`;
        }
    },

    /////    Bow    /////
    "Bow Miss": {
        baseDamage: 0,
        damageType: "bow",
        specialText: (player) => {
            player.stats.bowMissCount = (player.stats.bowMissCount || 0) + 1;
            return `${player.ActiveCard.name} shoots an arrow at ${player.ActiveEvil}, but misses!`;
        }
    },
    "Bow Shot": {
        baseDamage: 10,
        damageType: "bow",
        specialText: (player) => {
            player.stats.bowShotCount = (player.stats.bowShotCount || 0) + 1;
            return `${player.ActiveCard.name} shoots an arrow at ${player.ActiveEvil}!`;
        }
    },
    "Bow Power Shot": {
        baseDamage: 15,
        damageType: "bow",
        specialText: (player) => {
            player.stats.bowPowerShotCount = (player.stats.bowPowerShotCount || 0) + 1;
            return `${player.ActiveCard.name} takes careful aim and shoots a powerful arrow at ${player.ActiveEvil}!`;
        }
    },
    "Bow Flurry": {
        baseDamage: 20,
        damageType: "bow",
        specialText: (player) => {
            player.stats.bowFlurryCount = (player.stats.bowFlurryCount || 0) + 1;
            return `${player.ActiveCard.name} shoots a flurry of arrows at ${player.ActiveEvil}!`;
        }
    },
    "Bow Sniper Shot": {
        baseDamage: 25,
        damageType: "bow",
        specialText: (player) => {
            player.stats.bowSniperShotCount = (player.stats.bowSniperShotCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} takes careful aim and shoots a precise sniper shot at ${player.ActiveEvil} ripping through their ${bodyPart}!`;
        }
    },
    "Bow Headshot": {
        baseDamage: 30,
        damageType: "bow",
        specialText: (player) => {
            player.stats.bowHeadshotCount = (player.stats.bowHeadshotCount || 0) + 1;
            return `${player.ActiveCard.name} takes careful aim and shoots a precise sniper shot at ${player.ActiveEvil}'s head!`;
        }
    },
    "Arrow Storm": {
        baseDamage: 40,
        damageType: "bow",
        specialText: (player) => {
            player.stats.arrowStormCount = (player.stats.arrowStormCount || 0) + 1;
            return `${player.ActiveCard.name} sends arrow after arrow into the sky, creating an arrow storm raining down on ${player.ActiveEvil}, hitting them multiple times!`;
        }
    },
    "Bow Trick Shot": {
        baseDamage: 30,
        damageType: "bow",
        specialText: (player) => {
            player.stats.bowTrickShotCount = (player.stats.bowTrickShotCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} shoots an arrow, then shoots another arrow, hitting the first arrow making it speed up and impale ${player.ActiveEvil}'s ${bodyPart}!`;
        }
    },

    /////    Dagger    /////
    "Dagger Miss": {
        baseDamage: 0,
        damageType: "dagger",
        specialText: (player) => {
            player.stats.daggerMissCount = (player.stats.daggerMissCount || 0) + 1;
            return `${player.ActiveCard.name} tries to stab ${player.ActiveEvil} with their dagger, but misses!`;
        }
    }, 
    "Dagger Stab": {
        baseDamage: 10,
        damageType: "dagger",
        specialText: (player) => {
            player.stats.daggerStabCount = (player.stats.daggerStabCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} quickly stabs ${player.ActiveEvil}'s ${bodyPart} with their dagger!`;
        }
    },
    "Dagger Quick Stab": {
        baseDamage: 15,
        damageType: "dagger",
        specialText: (player) => {
            player.stats.daggerQuickStabCount = (player.stats.daggerQuickStabCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} quickly stabs ${player.ActiveEvil} in the ${bodyPart}!`;
        }
    },
    "Dagger Flurry": {
        baseDamage: 20,
        damageType: "dagger",
        specialText: (player) => {
            player.stats.daggerFlurryCount = (player.stats.daggerFlurryCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let num = Math.floor(Math.random() * bodyParts.length-1);
            let bodyPart1 = bodyParts[num];
            let bodyPart2 = bodyParts[num+1];
            return `${player.ActiveCard.name} quickly stabs ${player.ActiveEvil}'s ${bodyPart1}, then quickly stabs their ${bodyPart2}!`;
        }
    },
    "Dagger Swagger": {
        baseDamage: 20,
        damageType: "dagger",
        specialText: (player) => {
            player.stats.daggerSwaggerCount = (player.stats.daggerSwaggerCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} swaggers around ${player.ActiveEvil}, then quickly stabs them in the ${bodyPart}!`;
        }
    },
    "Fake Out (Dagger)": {
        baseDamage: 20,
        damageType: "dagger",
        specialText: (player) => {
            player.stats.daggerFakeOutCount = (player.stats.daggerFakeOutCount || 0) + 1;
            let bodyParts = ["arm", "guts", "butt", "leg", "foot", "hand", "toe"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} fakes out ${player.ActiveEvil}, and then stabs them in the ${bodyPart}!`;
        }
    },
    "Curse of the Bloodthirsty Dagger": {
        baseDamage: 30,
        damageType: "dagger",
        specialText: (player) => {
            player.stats.daggerCurseCount = (player.stats.daggerCurseCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            player.ActiveCard.health += Math.floor(player.ActiveCard.health * 1.5);
            return `${player.ActiveCard.name} curses their dagger with bloodthirsty magic, then stabs ${player.ActiveEvil} in the ${bodyPart}, causing them to bleed profusely healing $${player.ActiveCard}'s health!`;
        }
    },

    /////    Axe    /////
    "Axe Miss": {
        baseDamage: 0,
        damageType: "axe",
        specialText: (player) => {
            player.stats.axeMissCount = (player.stats.axeMissCount || 0) + 1;
            return `${player.ActiveCard.name} tries to swing their axe at ${player.ActiveEvil}, but MISSES!`;
        }
    },
    "Axe Swing": {
        baseDamage: 15,
        damageType: "axe",
        specialText: (player) => {
            player.stats.axeSwingCount = (player.stats.axeSwingCount || 0) + 1;
            return `${player.ActiveCard.name} swings their axe at ${player.ActiveEvil}!`;
        }
    },
    "Axe Strike": {
        baseDamage: 15,
        damageType: "axe",
        specialText: (player) => {
            player.stats.axeStrikeCount = (player.stats.axeStrikeCount || 0) + 1;
            return `${player.ActiveCard.name} strikes ${player.ActiveEvil} with their axe!`;
        }
    },
    "Axe Chop": {
        baseDamage: 20,
        damageType: "axe",
        specialText: (player) => {
            player.stats.axeChopCount = (player.stats.axeChopCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} chops ${player.ActiveEvil}'s ${bodyPart} with their axe!`;
        }
    },
    "Axe Flurry": {
        baseDamage: 25,
        damageType: "axe",
        specialText: (player) => {
            player.stats.axeFlurryCount = (player.stats.axeFlurryCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let num = Math.floor(Math.random() * bodyParts.length-1);
            let bodyPart1 = bodyParts[num];
            let bodyPart2 = bodyParts[num+1];
            return `${player.ActiveCard.name} swings their axe in a flury of rage, chopping off ${player.ActiveEvil}'s ${bodyPart1}, and chopping off ${player.ActiveEvil}'s ${bodyPart2}!`;
        }
    },
    "Fake Out (Axe)": {
        baseDamage: 25,
        damageType: "axe",
        specialText: (player) => {
            player.stats.axeFakeOutCount = (player.stats.axeFakeOutCount || 0) + 1;
            let bodyParts = ["arm", "guts", "butt", "leg", "foot", "hand", "toe"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} fakes out ${player.ActiveEvil}, and then chops them in the ${bodyPart}!`;
        }
    },
    "Axe Throw": {
        baseDamage: 30,
        damageType: "axe",
        specialText: (player) => {
            player.stats.axeThrowCount = (player.stats.axeThrowCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} throws their axe at ${player.ActiveEvil}, hitting them in the ${bodyPart}!`;
        }
    },
     "Axe Impale": {
        baseDamage: 35,
        damageType: "axe",
        specialText: (player) => {
            player.stats.axeImpaleCount = (player.stats.axeImpaleCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} throws their axe at ${player.ActiveEvil}, impaling them in the ${bodyPart}!`;
        }
    },
    "Axe Spin": {
        baseDamage: 30,
        damageType: "axe",
        specialText: (player) => {
            player.stats.axeSpinCount = (player.stats.axeSpinCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let num = Math.floor(Math.random() * bodyParts.length-1);
            let bodyPart1 = bodyParts[num];
            let bodyPart2 = bodyParts[num+1];
             return `${player.ActiveCard.name} spins around with thier axe, chopping off ${player.ActiveEvil}'s ${bodyPart1}, and chopping off ${player.ActiveEvil}'s ${bodyPart2}!`;
        } 
    },
    "Axe Rampage": {
        baseDamage: 40,
        damageType: "axe",
        specialText: (player) => {
            player.stats.axeRampageCount = (player.stats.axeRampageCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers", "ear", "tongue", "hair"];
            let num = Math.floor(Math.random() * bodyParts.length-2);
            let bodyPart1 = bodyParts[num];
            let bodyPart2 = bodyParts[num+1];
            let bodyPart3 = bodyParts[num+2];
             return `${player.ActiveCard.name} goes on a rampage with their axe, chopping off ${player.ActiveEvil}'s ${bodyPart1}, chopping off ${player.ActiveEvil}'s ${bodyPart2}, and slicing off ${player.ActiveEvil}'s ${bodyPart3}!`;
        }
    },

    /////    Pocket Tools   /////
    "Pocket Knife Stab": {
        baseDamage: 8,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.pocketKnifeStabCount = (player.stats.pocketKnifeStabCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} pulls out a pocket knife, to quickly stabs ${player.ActiveEvil} in the ${bodyPart}!`;
        }
    },
    "Pocket Screwdriver Jab": {
        baseDamage: 8,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.pocketScrewdriverJabCount = (player.stats.pocketScrewdriverJabCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} pulls out a pocket screwdriver, to quickly jab ${player.ActiveEvil} in the ${bodyPart}!`;
        }
    },
    "Pocket Scissors Slash": {
        baseDamage: 8,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.pocketScissorsSlashCount = (player.stats.pocketScissorsSlashCount || 0) + 1;
            return `${player.ActiveCard.name} pulls out a pair of scissors, to quickly slash ${player.ActiveEvil}!`;
        }
    },
    "Fishing Pole Throw": {
        baseDamage: 15,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.fishingPoleThrowCount = (player.stats.fishingPoleThrowCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} grabs a fishing pole off the ground, and gends out its string hooking ${player.ActiveEvil} in the ${bodyPart}!`;
        }
    },
    "Pocket Tool Flurry": {
        baseDamage: 20,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.pocketToolFlurryCount = (player.stats.pocketToolFlurryCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let num = Math.floor(Math.random() * bodyParts.length-1);
            let bodyPart1 = bodyParts[num];
            let bodyPart2 = bodyParts[num+1];
            return `${player.ActiveCard.name} quickly uses a pocket knife, screwdriver, and scissors to slash ${player.ActiveEvil}'s ${bodyPart1}, and stab ${player.ActiveEvil}'s ${bodyPart2}!`;
        }
    },
    "Fake Out (Pocket Tool)": {
        baseDamage: 15,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.pocketToolFakeOutCount = (player.stats.pocketToolFakeOutCount || 0) + 1;
            let bodyParts = ["arm", "guts", "butt", "leg", "foot", "hand", "toe"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} fakes out ${player.ActiveEvil}, and then quickly uses a pocket knife to attack their ${bodyPart}!`;
        }
    },

    /////   Unarmed    /////
    "Punch Miss": {
        baseDamage: 0,
        damageType: "physical",
        specialText: (player) => {
            player.stats.punchMissCount = (player.stats.punchMissCount || 0) + 1;
            return `${player.ActiveCard.name} tries to punch ${player.ActiveEvil}, but MISSES!`;
        }
    },
    "Punch": {
        baseDamage: 5,
        damageType: "physical",
        specialText: (player) => {
            player.stats.punchCount = (player.stats.punchCount || 0) + 1;
            return `${player.ActiveCard.name} punches ${player.ActiveEvil}!`;
        }
    },
    "Kick": {
        baseDamage: 8,
        damageType: "physical",
        specialText: (player) => {
            player.stats.kickCount = (player.stats.kickCount || 0) + 1;
            return `${player.ActiveCard.name} kicks ${player.ActiveEvil}!`;
        }
    },
    "Headbutt": {
        baseDamage: 10,
        damageType: "physical",
        specialText: (player) => {
            player.stats.headbuttCount = (player.stats.headbuttCount || 0) + 1;
            return `${player.ActiveCard.name} headbutts ${player.ActiveEvil}!`;
        }
    },
    "Elbow Strike": {
        baseDamage: 10,
        damageType: "physical",
        specialText: (player) => {
            player.stats.elbowStrikeCount = (player.stats.elbowStrikeCount || 0) + 1;
            return `${player.ActiveCard.name} strikes ${player.ActiveEvil} with their elbow!`;
        }
    },
    "Knee Strike": {
        baseDamage: 10,
        damageType: "physical",
        specialText: (player) => {
            player.stats.kneeStrikeCount = (player.stats.kneeStrikeCount || 0) + 1;
            return `${player.ActiveCard.name} strikes ${player.ActiveEvil} with their knee!`;
        }
    },
    "Fake Out (Unarmed)": {
        baseDamage: 10,
        damageType: "physical",
        specialText: (player) => {
            player.stats.unarmedFakeOutCount = (player.stats.unarmedFakeOutCount || 0) + 1;
            let bodyParts = ["arm", "guts", "butt", "leg", "foot", "hand", "toe"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} fakes out ${player.ActiveEvil}, and then quickly strikes their ${bodyPart}!`;
        }
    },
    "Bite": {
        baseDamage: 15,
        damageType: "physical",
        specialText: (player) => {
            player.stats.biteCount = (player.stats.biteCount || 0) + 1;
            return `${player.ActiveCard.name} bites ${player.ActiveEvil}, making them scream!`;
        }
    },
    "Unarmed Flurry": {
        baseDamage: 15,
        damageType: "physical",
        specialText: (player) => {
            player.stats.unarmedFlurryCount = (player.stats.unarmedFlurryCount || 0) + 1;
            return `${player.ActiveCard.name} goes into a frenzy, attacking ${player.ActiveEvil} with a flurry of unarmored strikes!`;
        }
    },
    "Grapple": {
        baseDamage: 20,
        damageType: "physical",
        specialText: (player) => {
            player.stats.grappleCount = (player.stats.grappleCount || 0) + 1;
            return `${player.ActiveCard.name} grapples ${player.ActiveEvil}, squeezing them tightly!`;
        }
    },

    /////   Makeshift Weapons    /////
    "Makeshift Weapon Miss": {
        baseDamage: 0,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.makeshiftWeaponMissCount = (player.stats.makeshiftWeaponMissCount || 0) + 1;
            return `${player.ActiveCard.name} tries to attack ${player.ActiveEvil} with a stick from the ground, but MISSES!`;
        }
    },
    "Stick Strike": {
        baseDamage: 10,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.stickStrikeCount = (player.stats.stickStrikeCount || 0) + 1;
            return `${player.ActiveCard.name} picks up a stick from the ground and strikes ${player.ActiveEvil}!`;
        }
    },
    "Rock Throw": {
        baseDamage: 15,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.rockThrowCount = (player.stats.rockThrowCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} picks up a rock from the ground and throws it at ${player.ActiveEvil}, hitting them in the ${bodyPart}!`;
        }
    },
    "Sandbag Swing": {
        baseDamage: 20,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.sandbagSwingCount = (player.stats.sandbagSwingCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} picks up a sandbag from the ground and swings it at ${player.ActiveEvil}, hitting them in the ${bodyPart}!`;
        }
    },
    "Backpack Spin": {
        baseDamage: 20,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.backpackSpinCount = (player.stats.backpackSpinCount || 0) + 1;
            return `${player.ActiveCard.name} quickly spins around with their backpack, hitting ${player.ActiveEvil} multiple times!`;
        }
    },
    "Pencil Jab": {
        baseDamage: 10,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.pencilJabCount = (player.stats.pencilJabCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} quickly jabs ${player.ActiveEvil} in the ${bodyPart} with a pencil!`;
        }
    },
    "Umbrella Block": {
        baseDamage: 15,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.umbrellaBlockCount = (player.stats.umbrellaBlockCount || 0) + 1;
            return `${player.ActiveCard.name} quickly opens their umbrella and blocks ${player.ActiveEvil}'s attack, jabbing them in the process!`;
        }
    },
    "Trash Can Lid Bash": {
        baseDamage: 15,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.trashCanLidBashCount = (player.stats.trashCanLidBashCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} quickly picks up a trash can lid and bashes ${player.ActiveEvil} in the ${bodyPart}!`;
        }
    },
    "Hot Coffee Splash": {
        baseDamage: 15,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.hotCoffeeSplashCount = (player.stats.hotCoffeeSplashCount || 0) + 1;
            return `${player.ActiveCard.name} quickly splashes hot coffee on ${player.ActiveEvil}!`;
        }
    },
    "Laptop Slam": {
        baseDamage: 25,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.laptopSlamCount = (player.stats.laptopSlamCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} quickly slams a laptop down on ${player.ActiveEvil}'s ${bodyPart}!`;
        }
    },
    "Quick Chair Swing": {
        baseDamage: 25,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.quickChairSwingCount = (player.stats.quickChairSwingCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} quickly swings a chair at ${player.ActiveEvil}, hitting them in the ${bodyPart}!`;
        }
    },
    "Makeshift Flurry (Stick & Rock)": {
        baseDamage: 25,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.makeshiftFlurrySARCount = (player.stats.makeshiftFlurrySARCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let num = Math.floor(Math.random() * bodyParts.length-1);
            let bodyPart1 = bodyParts[num];
            let bodyPart2 = bodyParts[num+1];
            return `${player.ActiveCard.name} quickly picks up a stick and a rock, striking ${player.ActiveEvil}'s ${bodyPart1} with the stick, and throwing the rock at ${player.ActiveEvil}'s ${bodyPart2}!`;
        }
    },
    "Fake Out (Makeshift)": {
        baseDamage: 20,
        damageType: "miscellaneous",
        specialText: (player) => {
            player.stats.makeshiftFakeOutCount = (player.stats.makeshiftFakeOutCount || 0) + 1;
            let bodyParts = ["arm", "guts", "butt", "leg", "foot", "hand", "toe"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} fakes out ${player.ActiveEvil}, and then quickly picks up a stick and strikes their ${bodyPart}!`;
        }
    },

    /////     Crossbow    /////
    "Crossbow Miss": {
        baseDamage: 0,
        damageType: "crossbow",
        specialText: (player) => {
            player.stats.crossbowMissCount = (player.stats.crossbowMissCount || 0) + 1;
            return `${player.ActiveCard.name} shoots a bolt from their crossbow at ${player.ActiveEvil}, but MISSES!`;
        }
    },
    "Crossbow Shot": {
        baseDamage: 15,
        damageType: "crossbow",
        specialText: (player) => {
            player.stats.crossbowShotCount = (player.stats.crossbowShotCount || 0) + 1;
            return `${player.ActiveCard.name} shoots a bolt from their crossbow at ${player.ActiveEvil}!`;
        }
    },
    "Crossbow Power Shot": {
        baseDamage: 20,
        damageType: "crossbow",
        specialText: (player) => {
            player.stats.crossbowPowerShotCount = (player.stats.crossbowPowerShotCount || 0) + 1;
            return `${player.ActiveCard.name} takes careful aim and shoots a powerful bolt from their crossbow at ${player.ActiveEvil}!`;
        }
    },
    "Crossbow Flurry": {
        baseDamage: 25,
        damageType: "crossbow",
        specialText: (player) => {
            player.stats.crossbowFlurryCount = (player.stats.crossbowFlurryCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let num = Math.floor(Math.random() * bodyParts.length-1);
            let bodyPart1 = bodyParts[num];
            let bodyPart2 = bodyParts[num+1];
            return `${player.ActiveCard.name} shoots a flurry of bolts from their crossbow at ${player.ActiveEvil}, hitting them in the ${bodyPart1} and ${bodyPart2}!`;
        }
    },
    "Crossbow Trick Shot": {
        baseDamage: 30,
        damageType: "crossbow",
        specialText: (player) => {
            player.stats.crossbowTrickShotCount = (player.stats.crossbowTrickShotCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} fires a speeding arrow into the air, then one right at ${player.ActiveEvil}, it hits them, making them stager, then the air in the sky coming raining down and snaps them to the ground!`;
        }
    },
    "Crossbow Ricochet": {
        baseDamage: 35,
        damageType: "crossbow",
        specialText: (player) => {
            player.stats.crossbowRicochetCount = (player.stats.crossbowRicochetCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let num = Math.floor(Math.random() * bodyParts.length-1);
            let bodyPart1 = bodyParts[num];
            let bodyPart2 = bodyParts[num+1];
            return `${player.ActiveCard.name} shoots a bolt from their crossbow at a nearby wall, it ricochets off a nearby surface and hits ${player.ActiveEvil} in the ${bodyPart1} and ${bodyPart2}!`;
        }
    },
    "Crossbow Pindown": {
        baseDamage: 40,
        damageType: "crossbow",
        specialText: (player) => {
            player.stats.crossbowPindownCount = (player.stats.crossbowPindownCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let num = Math.floor(Math.random() * bodyParts.length-2);
            let bodyPart1 = bodyParts[num];
            let bodyPart2 = bodyParts[num+1];
            let bodyPart3 = bodyParts[num+2];     
            return `${player.ActiveCard.name} shoots a powerful bolt from their crossbow, pinning ${player.ActiveEvil} to the wall by their ${bodyPart1}, ${bodyPart2}, and ${bodyPart3}!`;
        }
    },

    /////   Fire    /////
    "Lighter Miss": {
        baseDamage: 0,
        damageType: "fire",
        specialText: (player) => {
            player.stats.lighterMissCount = (player.stats.lighterMissCount || 0) + 1;
            return `${player.ActiveCard.name} tries to light a lighter on fire to burn ${player.ActiveEvil}, but no sparks appear, MISS!`;
        }
    },
    "Lighter Flick": {
        baseDamage: 10,
        damageType: "fire",
        specialText: (player) => {
            player.stats.lighterFlickCount = (player.stats.lighterFlickCount || 0) + 1;
            return `${player.ActiveCard.name} flicks a lighter on, burning ${player.ActiveEvil}!`;
        }
    },
    "Pipette Burn": {
        baseDamage: 15,
        damageType: "fire",
        specialText: (player) => {
            player.stats.pipetteBurnCount = (player.stats.pipetteBurnCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} quickly grabs a pipette, fills it with lighter fluid, and throws it at ${player.ActiveEvil}, hitting them in the ${bodyPart} and burning them!`;
        }
    },
    "Molotov Cocktail Miss": {
        baseDamage: 0,
        damageType: "fire",
        specialText: (player) => {
            player.stats.molotovCocktailMissCount = (player.stats.molotovCocktailMissCount || 0) + 1;
            return `${player.ActiveCard.name} tries to throw a molotov cocktail at ${player.ActiveEvil}, but it explodes in their hand, burning them instead!`;
        }   
    },
    "Molotov Cocktail Throw": {
        baseDamage: 20,
        damageType: "fire",
        specialText: (player) => {
            player.stats.molotovCocktailThrowCount = (player.stats.molotovCocktailThrowCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} throws a molotov cocktail at ${player.ActiveEvil}, hitting them in the ${bodyPart} and setting them on fire!`;
        }
    },
    "Gasoline Splash": {
        baseDamage: 25,
        damageType: "fire",
        specialText: (player) => {
            player.stats.gasolineSplashCount = (player.stats.gasolineSplashCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} quickly splashes gasoline on ${player.ActiveEvil}, hitting them in the ${bodyPart} and soaking them in flammable liquid, and doubling any fire damage!`;
        }
    },
    "Burning Barrage": {
        baseDamage: 30,
        damageType: "fire",
        specialText: (player) => {
            player.stats.burningBarrageCount = (player.stats.burningBarrageCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let num = Math.floor(Math.random() * bodyParts.length-1);
            let bodyPart1 = bodyParts[num];
            let bodyPart2 = bodyParts[num+1];
            return `${player.ActiveCard.name} unleashes a barrage of mini molotovs at ${player.ActiveEvil}, hitting them in the ${bodyPart1} and ${bodyPart2}, and setting them on fire!`;
        }
    },
    "Flame Thrower": {
        baseDamage: 40,
        damageType: "fire",
        specialText: (player) => {
            player.stats.flameThrowerCount = (player.stats.flameThrowerCount || 0) + 1;
            return `${player.ActiveCard.name} unleashes a stream of fire from a makeshift flame thrower, engulfing ${player.ActiveEvil} in flames!`;
        }
    },
    "Flame Thrower Flurry": {
        baseDamage: 50,
        damageType: "fire",
        specialText: (player) => {
            player.stats.flameThrowerFlurryCount = (player.stats.flameThrowerFlurryCount || 0) + 1;
            return `${player.ActiveCard.name} unleashes a powerful stream of fire from a makeshift flame thrower, engulfing ${player.ActiveEvil} in a flurry of flames!`;
        }
    },
    
    /////   Royal   /////
    "Royal Scepter Strike": {
        baseDamage: 30,
        damageType: "royal",
        specialText: (player) => {
            player.stats.royalScepterStrikeCount = (player.stats.royalScepterStrikeCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} strikes ${player.ActiveEvil} with a royal scepter, hitting them in the ${bodyPart}!`;
        }
    },
    "Royal Sword Slash": {
        baseDamage: 35,
        damageType: "royal",
        specialText: (player) => {
            player.stats.royalSwordSlashCount = (player.stats.royalSwordSlashCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} slashes ${player.ActiveEvil} with a royal sword, hitting them in the ${bodyPart}!`;
        }
    },
    "Crown Strike": {
        baseDamage: 25,
        damageType: "royal",
        specialText: (player) => {
            player.stats.crownStrikeCount = (player.stats.crownStrikeCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} strikes ${player.ActiveEvil} with their royal crown, hitting them in the ${bodyPart}!`;
        }
    },
    "Robe Whip": {
        baseDamage: 20,
        damageType: "royal",
        specialText: (player) => {
            player.stats.robeWhipCount = (player.stats.robeWhipCount || 0) + 1;
            let bodyParts = ["left arm", "right arm", "left leg", "right leg", "butt", "hand", "toe", "nose", "fingers"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} whips ${player.ActiveEvil} with their royal robe, hitting them in the ${bodyPart}!`;
        }
    },
    "Fake Out (Royal)": {
        baseDamage: 25,
        damageType: "royal",
        specialText: (player) => {
            player.stats.royalFakeOutCount = (player.stats.royalFakeOutCount || 0) + 1;
            let bodyParts = ["arm", "guts", "butt", "leg", "foot", "hand", "toe"];
            let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
            return `${player.ActiveCard.name} fakes out ${player.ActiveEvil}, and then quickly strikes their ${bodyPart} with a royal weapon!`;
        }
    },
    
    //Wild weapons like gas + fire, chainsaws, power tools, etc. 
    //Legendary weapons like Excalibur, the Spear of Destiny, the Bow of Apollo, etc.
    //I need spells and potions as well,
};


export const moveSets = {
  knight: ["Sword Miss", "Sword Swing", "Sword Strike", "Sword Charge", "Sword Block", "Sword Impale", "Spear Miss", "Spear Stab", "Spear Lunge", "Spear Charge"],
  noble: ["Royal Sword Slash", "Sword Miss", "Sword Swing", "Sword Strike", "Sword Charge", "Sword Block"],
  royal: ["Royal Scepter Strike", "Royal Sword Slash", "Crown Strike", "Robe Whip", "Fake Out (Royal)"],
  spearman: ["Spear Miss", "Spear Stab", "Spear Lunge", "Spear Charge", "Spear Block", "Spear Impale"],
  dirtyFighter: ["Sword Impale", "Spear Impale", "Dagger Stab", "Dagger Flurry", "Dagger Backstab", "Bow Sniper Shot", "Crossbow Trick Shot", "Molotov Cocktail Throw", "Gasoline Splash", "Flame Thrower"],
  alchemist: ["Pipette Burn", ],
  wild: ["Rock Throw", "Sandbag Swing", "Backpack Spin", "Pencil Jab", "Umbrella Block", "Trash Can Lid Bash", "Hot Coffee Splash", "Laptop Slam", "Quick Chair Swing"],
  sneaker: [],
  rouge: ["Dagger Miss","Dagger Stab", "Dagger Backstab", "Grapple", "Punch Miss", "Punch", "Kick", "Headbutt", "Elbow Strike", "Knee Strike"],
  arsonist: ["Molotov Cocktail Miss", "Molotov Cocktail Throw", "Flame Thrower", "Burning Barrage"],
  assassin: ["Dagger Stab", "Dagger Flurry", "Dagger Backstab", "Bow Sniper Shot", "Crossbow Trick Shot"],
  archer: ["Bow Miss", "Bow Shot", "Bow Power Shot", "Bow Trick Shot", "Bow Sniper Shot", "Arrow Storm", "Bow Headshot"],
}

console.log("✅ Move & Move Sets Loaded");

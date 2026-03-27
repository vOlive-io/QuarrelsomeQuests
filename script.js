///////////////////////////
//       IMPORTS         //
///////////////////////////

import { cards } from "./data/cards.js";
import { values } from "./data/values.js";
import { classes } from "./data/classes.js";
import { stats } from "./data/player.js";
import { store } from "./data/store.js";
import { effects } from "./data/effects.js";
//import { weapons } from "./data/weapons.js";
//import { moves } from "./data/moves.js";

console.log("VALUES:", values);
console.log("RANKS:", values.ranks);

///////////////////////////
//       PLAYER DEF      //
///////////////////////////
var userInfo = {
    playerName: "",
    chosenClass: null,
}
var player = {
    xp: 1,
    rankTitle: "",
    health: 0,
    maxHealth: 0,
    attack: 0,
    defense: 0,
    mana: 0,
    energy: 0,
    saturation: 0,
    luck: 0,
};
function resetPlayerStats() {
    const chosenClass = getClassStats(userInfo.chosenClass);
    player.maxHealth = stats.extraHealth+chosenClass.stats.health;
    player.health = player.maxHealth;
    player.attack = stats.extraAttack+chosenClass.stats.attack;
    player.defense = stats.extraDefense+chosenClass.stats.defense;
    player.mana = stats.extraMana+chosenClass.stats.mana;
    player.energy = stats.extraEnergy+chosenClass.stats.energy;
    player.saturation = stats.extraSaturation+chosenClass.stats.saturation;
    player.luck = stats.extraLuck+chosenClass.stats.luck;
}
function updatePlayerStats() {
    const chosenClass = getClassStats(userInfo.chosenClass);
    player.maxHealth = stats.extraHealth+chosenClass.stats.health;
    player.attack = stats.extraAttack+chosenClass.stats.attack;
    player.defense = stats.extraDefense+chosenClass.stats.defense;
    player.mana = stats.extraMana+chosenClass.stats.mana;
    player.energy = stats.extraEnergy+chosenClass.stats.energy;
    player.saturation = stats.extraSaturation+chosenClass.stats.saturation;
    player.luck = stats.extraLuck+chosenClass.stats.luck;
}


///////////////////////////
//   HELPER FUNCTIONS    //
///////////////////////////

function setXp(amount) {
    player.xp = amount;
}
function getClassStats(className) {
    for (let i = 0; i < classes.length; i++) {
        if (classes[i].name === className) {
            return classes[i].stats;
        }
    }
}

function getPlayerRank() {
    const xpScaled = player.xp / 100;
    let ranks = values.ranks;
    for (let rank of values.ranks) {
        if (xpScaled >= rank.value) {
            return player.rankTitle = rank.title;
        }
    }
}

function getRankImage() {
    const xpScaled = player.xp / 100;
    let ranks = values.ranks;
    for (let rank of values.ranks) {
        if (xpScaled >= rank.value) {
            return rank.image;
        }
    }
}

function getNextRankValue() {
    const xpScaled = player.xp / 100;
    let nextRankValue = 0;
    for (let rank of values.ranks) {
        if (xpScaled < rank.value) {
            nextRankValue = rank.value;
        } else {
            break;
        }
    }
    return (nextRankValue*100);
}


//////////////////////////////////
//    RANK DISPLAY FUNCTIONS    //
//////////////////////////////////

function updateRankDisplay() {
    updateRankInfo();
    updateRankEmblum();
    updateRankBar();
}

function updateRankInfo() {
    const rankName = document.getElementById("rankTitle");
    const rankProgress = document.getElementById("rankProgress");
    rankName.innerHTML = getPlayerRank();
    rankProgress.innerHTML = (player.xp + " / " + getNextRankValue());
}

function updateRankEmblum() {
    const rankEmblum = document.getElementById("rankEmblum");
    var rankImg = getRankImage();
    rankEmblum.src = "data/" + rankImg;
}

function updateRankBar() {
    var rankDisplay = document.getElementById("rankBar");  
    var goal = getNextRankValue();
    console.log("goal:", goal);
    var progress = ((player.xp) / goal) * 100;
    var width = 0;
    var rep = setInterval(scale, 10);
    function scale() {
        if (width >= progress) {
            clearInterval(rep);
        } else {
            if(width+1 > progress) {
                width = progress;
            } else {
                width++;
            }
            rankDisplay.style.width = width + '%';
            rankDisplay.innerHTML = (width * 1  + '%');
        }
    }
}




Object.assign(window, { getClassStats, 
                        getPlayerRank, 
                        getRankImage, 
                        getNextRankValue, 
                        updateRankDisplay, 
                        updateRankInfo, 
                        updateRankEmblum, 
                        updateRankBar,
                        setXp
 });

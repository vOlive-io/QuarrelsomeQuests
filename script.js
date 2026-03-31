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
var rankBarWidth = 0;
var userInfo = {
    playerName: "",
    chosenClass: null,
}
var player = {
    xp: 1,
    rank: 0,
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
function getClassStats(className) {
    for (let i = 0; i < classes.length; i++) {
        if (classes[i].name === className) {
            return classes[i].stats;
        }
    }
}

function setXp(amount) {
    player.xp = amount;
}
function addXp(amount) {
    player.xp += amount;
    if (player.xp >= getPlayerRank().upgrade) {
        promotePlayer();
    } 
    updateRankDisplay();
}
function promotePlayer() {
    player.rank++;
    if(!(player.rank >= values.ranks.length)) {
        player.xp = Math.floor(getPlayerRank().upgrade / 5);
    } else {
        player.rank = values.ranks.length - 1; 
    }

}
function removeXp(amount) {
    player.xp -= amount;
    if (player.xp < 0) {
        demotePlayer();
    }
    updateRankDisplay();
}
function demotePlayer() {
    player.rank--;
    if (player.rank < 0) {
        player.rank = 0;
        player.xp = 0;
    } else {
        player.xp = Math.floor(values.ranks[player.rank-1].upgrade / 5) * 3;
    }
}
function getPlayerRank() {
    return values.ranks[player.rank];
}
function getRankTitle() {
    let playerRank = getPlayerRank();
    let title = playerRank.title;
    console.log(title);
    if((playerRank.upgrade/3) >= player.xp) {title += "-";}
    if((playerRank.upgrade/3)*2 <= player.xp) {title += "+";}
    console.log(title);
    return title;
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
    let playerRank = getPlayerRank();
    console.log(playerRank);
    rankName.innerHTML = getRankTitle();
    rankProgress.innerHTML = (player.xp + " / " + playerRank.upgrade);
}
function updateRankEmblum() {
    const rankEmblum = document.getElementById("rankEmblum");
    rankEmblum.src = "data/assets/ranks/" + getRankTitle() + ".png";
}
function updateRankBar() {
    var rankDisplay = document.getElementById("rankBar");  
    var goal = getPlayerRank().upgrade; //the xp needed to reach the next rank
    var progress = ((player.xp) / goal) * 100; //the percentage of completion
    var rep = setInterval(scale, 1); //the animation speed
    function scale() {
        if(rankBarWidth >= progress) {
            if(rankBarWidth-0.1 <= progress) {
                rankBarWidth = progress;
                clearInterval(rep);
            } else {
                rankBarWidth-=0.1;
            }
        } else if (rankBarWidth <= progress) {
            if(rankBarWidth+0.1 >= progress) {
                rankBarWidth = progress;
                clearInterval(rep);
            } else {
                rankBarWidth+=0.1;
            }
        }
        //for the max rank, the bar should be full but the xp can still increase,
        if (rankBarWidth >= 100) { 
            rankDisplay.style.width = 100 + '%';
        } else {
            rankDisplay.style.width = rankBarWidth + '%';
        }
        let nextRank = values.ranks[player.rank + 1] || values.ranks[player.rank];
        rankDisplay.style.background = `linear-gradient(90deg, ${getPlayerRank().color} 0%, ${getPlayerRank().color} 50%, ${nextRank.color} 100%)`
        rankDisplay.innerHTML = Math.floor(rankBarWidth*100) / 100+ '%';
    }
}

Object.assign(window, { setXp,
                        addXp,
                        removeXp,
                        promotePlayer,
                        demotePlayer,
                        getPlayerRank,
                        getRankTitle,
                        updateRankDisplay,
                        updateRankInfo,
                        updateRankEmblum,
                        updateRankBar,
                        
 });

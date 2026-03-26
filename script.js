///////////////////////////
//       IMPORTS         //
///////////////////////////

import { cards } from "./data/cards.js";
import { classes } from "./data/classes.js";
import { stats } from "./data/stats.js";
import { store } from "./data/store.js";
//import { weapons } from "./data/weapons.js";
//import { moves } from "./data/moves.js";
import { effects } from "./data/effects.js";

///////////////////////////
//       TAB NAV         //
///////////////////////////

function openBattle() { 
    document.getElementById("welcome").style.display = "none";
    document.getElementById("x").style.display = "block";
    document.getElementById("battle").style.display = "block";
    updateBattleTab();
}
function openStore() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("x").style.display = "block";
    document.getElementById("store").style.display = "block";
    updateStoreTab();
}
function openRanks() { 
    document.getElementById("welcome").style.display = "none";
    document.getElementById("x").style.display = "block";
    document.getElementById("ranks").style.display = "block";
    updateRanksTab();
}
function closeMenu(menu) {
    document.getElementById("battle").style.display = "none";
    document.getElementById("store").style.display = "none";
    document.getElementById("ranks").style.display = "none";
    document.getElementById("x").style.display = "none";
    document.getElementById("welcome").style.display = "block";
}
function updateBattleTab() {
    const battleTab = document.getElementById("battle");
    //to be implemented: display battle options and arena
}
function updateStoreTab() {
    const storeTab = document.getElementById("store");
    //to be implemented: display store items and purchasing options
}

///////////////////////////
//       PLAYER DEF      //
///////////////////////////
var userInfo = {
    playerName: "",
    chosenClass: null,
}
var player = {
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

function updateRank() {
    if(player.xp / 100 >= values.SSSPLusRankValue) {
        player.rankTitle = "SSS+";
    } else if(player.xp / 100 >= values.SSSRankValue) {
        player.rankTitle = "SSS";
    } else if(player.xp / 100 >= values.SSSMinusRankValue) {
        player.rankTitle = "SSS-";
    } else if(player.xp / 100 >= values.SSPlusRankValue) {
        player.rankTitle = "SS+";
    } else if(player.xp / 100 >= values.SSRankValue) {
        player.rankTitle = "SS";
    } else if(player.xp / 100 >= values.SSMinusRankValue) {
        player.rankTitle = "SS-";
    } else if(player.xp / 100 >= values.SPlusRankValue) {
        player.rankTitle = "S+";
    } else if(player.xp / 100 >= values.SRankValue) {
        player.rankTitle = "S";
    } else if(player.xp / 100 >= values.SMinusRankValue) {
        player.rankTitle = "S-";
    } else if(player.xp / 100 >= values.APlusRankValue) {
        player.rankTitle = "A+";
    } else if(player.xp / 100 >= values.ARankValue) {
        player.rankTitle = "A";
    } else if(player.xp / 100 >= values.AMinusRankValue) {
        player.rankTitle = "A-";
    } else if(player.xp / 100 >= values.BPlusRankValue) {
        player.rankTitle = "B+";
    } else if(player.xp / 100 >= values.BRankValue) {
        player.rankTitle = "B";
    } else if(player.xp / 100 >= values.BMinusRankValue) {
        player.rankTitle = "B-";
    } else if(player.xp / 100 >= values.CPlusRankValue) {
        player.rankTitle = "C+";
    } else if(player.xp / 100 >= values.CRankValue) {
        player.rankTitle = "C";
    } else {
        player.rankTitle = "C-";
    }
}

Object.assign(window, { openBattle, openStore, openRanks, 
                        updateBattleTab, updateStoreTab, updateRanksTab, closeMenu
 });

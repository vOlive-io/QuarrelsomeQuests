///////////////////////////
//       IMPORTS         //
///////////////////////////

import { cards } from "./data/cards.js";
import { classes } from "./data/classes.js";
import { stats } from "./data/stats.js";
import { store } from "./data/store.js";
import { effects } from "./data/effects.js";
//import { weapons } from "./data/weapons.js";
//import { moves } from "./data/moves.js";


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

function updateRankDisplay() {
    
}

Object.assign(window, { openBattle, openStore, openRanks, 
                        updateBattleTab, updateStoreTab, updateRanksTab, closeMenu
 });

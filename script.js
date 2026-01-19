///////////////////////////
//       IMPORTS         //
///////////////////////////

import { stats } from "./data/player.js";
import { store } from "./data/store.js";
import { classes } from "./data/classes.js";
import { weapons } from "./data/weapons.js";
import { moves } from "./data/moves.js";
import { spells } from "./data/spells.js";
import { statuses } from "./data/effects.js";

///////////////////////////
//       TAB NAV         //
///////////////////////////

function openClass() { 
    document.getElementById("welcome").style.display = "none";
    document.getElementById("x").style.display = "block";
    document.getElementById("classes").style.display = "block";
    updateClassTab();
}
function openStore() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("x").style.display = "block";
    document.getElementById("store").style.display = "block";
    updateStoreTab();
}
function openStats() { 
    document.getElementById("welcome").style.display = "none";
    document.getElementById("x").style.display = "block";
    document.getElementById("stats").style.display = "block";
    updateStatsTab();
}
function openExplore() { }
function closeMenu(menu) {
    document.getElementById("classes").style.display = "none";
    document.getElementById("store").style.display = "none";
    document.getElementById("stats").style.display = "none";
    document.getElementById("x").style.display = "none";
    document.getElementById("welcome").style.display = "block";
}
function updateClassTab() {
    const classTab = document.getElementById("classes");
    //to be implemented: display class selection and upgrades
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
function updatePlayerStats() {
    //definse the class chonse value
    player.maxHealth = stats.extraHealth+chosenClass.stats.health;
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



Object.assign(window, { openClass, openStore, openStats, openExplore, 
                        updateClassTab, updateStoreTab, closeMenu
 });

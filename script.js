///////////////////////////
//       IMPORTS         //
///////////////////////////

import { stats } from "./data/player.js";
import { store } from "./data/store.js";
import { classes } from "./data/classes.js";

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

function updateClassTab() {
    const classTab = document.getElementById("classes");
    //to be implemented: display class selection and upgrades
}
function updateStoreTab() {
    const storeTab = document.getElementById("store");
    //to be implemented: display store items and purchasing options
}

function openExplore() { }

function closeMenu(menu) {
    document.getElementById("classes").style.display = "none";
    document.getElementById("store").style.display = "none";
    document.getElementById("stats").style.display = "none";
    document.getElementById("x").style.display = "none";
    document.getElementById("welcome").style.display = "block";
}


Object.assign(window, { openClass, openStore, openStats, openExplore, 
                        updateClassTab, updateStoreTab
 });

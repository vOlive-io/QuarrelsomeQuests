import { stats } from "../data/player.js";
import { store } from "../data/store.js";
import { classes } from "../data/classes.js";

function openClass() { 
    document.getElementById("welcome").style.display = "none";
    document.getElementById("classes").style.display = "block";
    updateClassTab();
}
function updateClassTab() {
    const classTab = document.getElementById("classes");
    //to be implemented: display class selection and upgrades
}
function openStore() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("store").style.display = "block";
    updateStoreTab();
}
function openStats() { 
    document.getElementById("welcome").style.display = "none";
    document.getElementById("stats").style.display = "block";
    updateStatsTab();
}

function openExplore() { }



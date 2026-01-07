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
function openExplore() { }
function openStore() { }
function openStats() { }



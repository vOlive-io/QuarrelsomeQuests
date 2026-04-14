///////////////////////////
//       IMPORTS         //
///////////////////////////

import { cards } from "./data/cards.js";
import { values } from "./data/values.js";
import { classes } from "./data/classes.js";
import { stats } from "./data/player.js";
import { store } from "./data/store.js";
import { effects } from "./data/effects.js";
import { moves } from "./data/moves.js";
import { moveSets } from "./data/moves.js";

///////////////////////////
//       PLAYER DEF      //
///////////////////////////
var rankBarWidth = 0;
var player = {
    gold : 0,
    xp: 1,
    rank: 0,
    rankTitle: "",
    cardsUnlocked: [],
    activeCard: null,
    activeTeam: [],
    activeEvil: null,
    evilOnDeck: [],
    activeEffect: null,
    
};
console.log(values)
///////////////////////////
//   HELPER FUNCTIONS    //
///////////////////////////
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
function calculateDamage() {
    let baseDamage = player.activeCard.baseDamage;
    let classBonus = classes[player.activeCard.class].attack;
    let damgageTypeBonus = player.activeCard.damageType == player.activeEvil.weakness ? 2 : 1;
    let effectBonus = player.activeEffect == "Strength I" ? 1.5 : 1;
    let prestigeBonus = player.activeCard.prestigeLevel;
    return Math.floor(baseDamage * classBonus * damgageTypeBonus * effectBonus * prestigeBonus);
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


function updateUnlockedBattles() {
    document.getElementById("battleSelection").innerHTML = "";	
	for(let i = 0; i < values.battles.length; i++) {
        let battle = values.battles[i];
		if (battle.unlockRank <= player.rank) {
            //if the battle is standdard, maker its series vertion right next to it in a split screen format, thos will work because ecah standard battles's seires equivilant is i+1 from it.
            if(battle.type == "standard") {
                const battleBOX = document.createElement("div");

                const battleContainer = document.createElement("button");
                const battleh1 = document.createElement("h1");
                const battlep = document.createElement("p");
                battleContainer.classList.add("battleContainer");
                battleContainer.classList.add(battle.type+"Battle");
                battleContainer.classList.add("left");
                battleContainer.style.backgroundColor = battle.color;
                const battleh1Text = document.createTextNode(battle.name);
                const battle1Text = document.createTextNode(battle.description);
                battleh1.appendChild(battleh1Text);
                battlep.appendChild(battle1Text);
                battleContainer.appendChild(battleh1);
                battleContainer.appendChild(battlep);
                battleBOX.appendChild(battleContainer);

                let seriesBattle = values.battles[i+1];
                const seriesBattleContainer = document.createElement("button");
                const seriesBattleh1 = document.createElement("h1");
                const seriesBattlep = document.createElement("p");
                seriesBattleContainer.classList.add("battleContainer");
                seriesBattleContainer.classList.add(seriesBattle.type+"Battle");
                seriesBattleContainer.classList.add("right");
                seriesBattleContainer.style.backgroundColor = seriesBattle.color;
                const seriesBattleh1Text = document.createTextNode(seriesBattle.name);
                const seriesBattle1Text = document.createTextNode(seriesBattle.description);
                seriesBattleh1.appendChild(seriesBattleh1Text);
                seriesBattlep.appendChild(seriesBattle1Text);
                seriesBattleContainer.appendChild(seriesBattleh1);
                seriesBattleContainer.appendChild(seriesBattlep);
                battleBOX.appendChild(seriesBattleContainer);
                
                battleBOX.classList.add("battleBOX");
                document.getElementById("battleSelection").appendChild(battleBOX);
                i++;
            } else {
			    const battleContainer = document.createElement("button");
    	        const battleh1 = document.createElement("h1");
	            const battlep = document.createElement("p");
                battleContainer.classList.add("battleContainer");
                battleContainer.classList.add(battle.type+"Battle");
                battleContainer.style.backgroundColor = battle.color;
            	const battleh1Text = document.createTextNode(battle.name);
    	        const battle1Text = document.createTextNode(battle.description);
	            battleh1.appendChild(battleh1Text);
                battlep.appendChild(battle1Text);
	            battleContainer.appendChild(battleh1);
	            battleContainer.appendChild(battlep);
	            document.getElementById("battleSelection").appendChild(battleContainer);
		    }
		} 
	}
}

//////////////////////////////////
//      SAVE/LOAD FUNCTIONS     //
//////////////////////////////////
function savePlayerDataAsCookies() {
    const data = {
        playerStats: player,
	};
	localStorage.setItem('savedData', JSON.stringify(data));
} 
function loadPlayerDataFromCookies() {
    savedData = JSON.parse(localStorage.getItem('savedData'));
	if (savedData) {
		player = savedData.playerStats || player;
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
                        updateUnlockedBattles,
                        savePlayerDataAsCookies,
                        loadPlayerDataFromCookies,
                        
 });
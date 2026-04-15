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

function initiateGame() {
    loadPlayerDataFromCookies();
    updateRankDisplay();
    updateUnlockedBattles();
    
}
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
    battleClout: {
        basic: 0,
        team: 0,
        pro: 0,
        elite: 0,
        mirror: 0,
        chaos: 0,
        trivia: 0,
        doubleTrouble: 0,
        cloverClub: 0,
        mystery: 0
    }
    
    
};
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

//////////////////////////////////
//       BATTLE FUNCTIONS       //
//////////////////////////////////
function updateUnlockedBattles() {
    document.getElementById("battleSelection").innerHTML = "";	
	for(let i = 0; i < values.battles.length; i++) {
        let battle = values.battles[i];
		if (battle.unlockRank <= player.rank) {
            const battleBOX = document.createElement("div");
            battleBOX.classList.add("battleContainer");
            battleBOX.classList.add(battle.type+"Battle");
            battleBOX.classList.add("battleBOX");

            const battleh1 = document.createElement("h1");
            const battleh1Text = document.createTextNode(battle.name);
            battleh1.appendChild(battleh1Text);

            const battlDisc = document.createElement("p");
            const battlDiscText = document.createTextNode(battle.description);
            battlDisc.appendChild(battlDiscText);

            const cloutCount = document.createElement("b");
            const cloutCounterText = document.createTextNode("Clout: " + player.battleClout[battle.cloutKey] + "\n");
            const br1 = document.createElement("br");
            const br2 = document.createElement("br");
            cloutCount.appendChild(cloutCounterText);
            cloutCount.appendChild(br1);
            cloutCount.appendChild(br2);


            const enrollInBattle = document.createElement("button");
            const enrollInBattleText = document.createTextNode("Enroll in Battle");
            enrollInBattle.appendChild(enrollInBattleText);
            enrollInBattle.style.backgroundColor = battle.accent;


            battleBOX.appendChild(battleh1);
            battleBOX.appendChild(battlDisc);
        
            if(battle.type == "standard") {
                const seriesBattleNote = document.createElement("p");
                const seriesBattleNoteText = document.createTextNode(battle.seriesNote);
                seriesBattleNote.appendChild(seriesBattleNoteText);

                const enrollInSeries = document.createElement("button");
                const enrollInSeriesText = document.createTextNode("Enroll in Series");
                enrollInSeries.appendChild(enrollInSeriesText);
                enrollInSeries.style.backgroundColor = battle.accent;

                battleBOX.appendChild(seriesBattleNote);
                battleBOX.appendChild(cloutCount);
                battleBOX.appendChild(enrollInBattle);
                battleBOX.appendChild(enrollInSeries);

                                
            } else {
                battleBOX.appendChild(cloutCount);
                battleBOX.appendChild(enrollInBattle);
            }
            battleBOX.style.backgroundColor = battle.color;
	        document.getElementById("battleSelection").appendChild(battleBOX);
		    
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
    let savedData = JSON.parse(localStorage.getItem('savedData'));
	if (savedData) {
		player = savedData.playerStats || player;
	} else {return}
}
Object.assign(window, { initiateGame,
                        setXp,
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
initiateGame();
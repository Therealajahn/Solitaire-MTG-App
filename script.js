//it gets the type:
//String: either a Do nothing or a user action 
//Array: a series of actions to be handled recursively
//Object: an action for the app to change some data or make a roll 
//...on another table


function getActionText(action) {
	//TODO: Ill make a function that does the string object and array separation
	let actionText = "";
	switch(typeof action){
		case "string":
 			actionText = action;
    break;
		case "object":
			actionText = action.text;
		break;
	};

	return actionText;
}

function roll(multiplier){
	//needs to check beginningTurn  and firstRollMod  
	//if both are truthy, add firstRollMod to the roll, converting 
	//it to a ten if over ten
	
	return Math.ceil(Math.random() * multiplier);
};


function displayOptions(action,type){
};

function changeTable(action){
	deepProgress.currentTable += action.modifier;
	return action;
};

function createToken(action){
 const token = {
		baseStats: action.baseStats,
		abilities: [],
	}
	let tokenRoll = deepTables.token[roll(16)];
	switch(tokenRoll){ 
	//string
	//roll-for-effect
	//reroll-token-chart
	//reminder-effect(like 16, prompt player to remove their best card)
	};
	token.abilties.push(
	);
	deepProgress.token.push(token);		 
}

function executeAction(action){
	switch(action.type){
		case "token":
    	createToken(action);
		break;
		case "advance":    
			changeTable(action);
		break;
		case "first-roll-mod":
			deepProgress.firstRollMod += action.modifier;
		break;
	};
	return action;
};

function filterActions(action){
	//TODO: Ill make a function that does the string object and array separation
	switch(typeof action){
		case "string":
			displayOptions(action,"neutral");		
		break;
		case "object":
			if(action instanceof Array){
				action.forEach(instance => executeAction(instance));
				break;
			};
			executeAction(action);
		break;
	};
	//if last action, do an advancement roll
};

function initializeRoll(className,rollTable){

	const mainRoll = document.getElementsByClassName("main-roll-display")[0];

	function displayRollActions(){
		rollTable.table.forEach((action,i) => {

		mainRoll.innerHTML +=
			`<div class="${className} ${i + 1} border">
					<div class="border">
						<h2 class="number">${i + 1}</h2>
					</div>
					<div class="border">
						<p class="description">${getActionText(action)}</p>
				</div>`;
		});
	};
  displayRollActions();

	const mainTables = document.getElementsByClassName("main-table-display")[0];
	mainTables.children[deepProgress.currentTable].classList.add("highlight");

};
initializeRoll("main-roll-entry",deepTables[deepProgress.currentTable]);

function detectRollClicked() {
	const rollbutton = document.getElementsByClassName("main-header")[0];
	rollbutton.addEventListener("click",event => {
	 const uiActionList = document.getElementsByClassName("main-roll-entry"); 
	 const currentActionRoll = roll(10);
	 //highlight the action number affected, apply the class to it 
	 uiActionList[deepProgress.actionRoll]
			.firstElementChild.firstElementChild.classList.remove("highlight");
	 uiActionList[currentActionRoll - 1]
			.firstElementChild.firstElementChild.classList.add("highlight");
	 deepProgress.actionRoll = currentActionRoll - 1;
	 //change the main roll number in the header to match the roll
	 const mainRollNumber = document.getElementsByClassName("main-roll-number")[0];
	 mainRollNumber.firstElementChild.innerHTML = `${currentActionRoll}`;

	});
}
detectRollClicked();

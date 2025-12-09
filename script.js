//it gets the type:
//String: either a Do nothing or a user action 
//Array: a series of actions to be handled recursively
//Object: an action for the app to change some data or make a roll 
//...on another table

//function displayOptions(action,type){
//};

//function changeTable(action){
//	deepProgress.currentTable += action.modifier;
//	return action;
//};

//function createToken(action){
// const token = {
//		baseStats: action.baseStats,
//		abilities: [],
//	}
//	let tokenRoll = deepTables.token[roll(16)];
//	switch(tokenRoll){ 
//	//string
//	//roll-for-effect
//	//reroll-token-chart
//	//reminder-effect(like 16, prompt player to remove their best card)
//	};
//	token.abilties.push(
//	);
//	deepProgress.token.push(token);		 
//}

//function executeAction(action){
//	switch(action.type){
//		case "token":
//    	createToken(action);
//		break;
//		case "advance":    
//			changeTable(action);
//		break;
//		case "first-roll-mod":
//			deepProgress.firstRollMod += action.modifier;
//		break;
//	};
//	return action;
//};

//function filterActions(action){
//	//TODO: Ill make a function that does the string object and array separation
//	switch(typeof action){
//		case "string":
//			displayOptions(action,"neutral");		
//		break;
//		case "object":
//			if(action instanceof Array){
//				action.forEach(instance => executeAction(instance));
//				break;
//			};
//			executeAction(action);
//		break;
//	};
//	//if last action, do an advancement roll
//};

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

function updateRollDisplay({
	parentClass: parentClass,
	className: className,
	rollTable: rollTable,
	entryTagOne: entryTagOne,
	entryTagTwo: entryTagTwo
}){
	const parentElement = document.getElementsByClassName(`${parentClass}`)[0];
	let entryString = "";

		rollTable.forEach((action,i) => {

		 entryString +=
			`<div class="${className} ${i + 1} border">
					<div class="border">
						<${entryTagOne} class="number">${i + 1}</${entryTagOne}>
					</div>
					<div class="border">
						<${entryTagTwo} class="description">${getActionText(action)}</${entryTagTwo}>
				</div>
			</div>`;
		});
	 parentElement.innerHTML = entryString;
};


updateRollDisplay({
	parentClass: "main-roll-display",
	className: "main-roll-entry",
	rollTable: deepTables[deepProgress.currentTable].table,
	entryTagOne: "h2",
	entryTagTwo: "p",
});
updateRollDisplay({
	parentClass: "token-roll-display",
	className: "token-roll-entry",
	rollTable: deepTables.token,
	entryTagOne: "p",
	entryTagTwo: "p",
});
function advancementRoll(){
	const currentRoll = roll(10);
	const advancementUINumber = document.getElementsByClassName("tables-header")[0]
		.children[1]; 
	advancementUINumber.innerHTML = `${currentRoll}`;
	const advancementTarget =  deepTables[deepProgress.currentTable].advancement;
	const advancementRange = document.getElementById('advancement-range');
	advancementRange.innerText =`Advancement Roll: 1-${advancementTarget}`;
	//if advancement goes through, update the table display (highlight)
	//...and clear advancement table display
	//...and update advancement requirement display
	if(currentRoll <= advancementTarget){
	 deepProgress.currentTable += 1;
	 const uiList = document.getElementsByClassName("tables-entry"); 

	 if(deepProgress.currentTable > 1){
		 uiList[deepProgress.currentTable - 2]
				.classList.remove("highlight");
	 };

	 uiList[deepProgress.currentTable - 1]
			.classList.add("highlight");
	 //deepProgress.advancementRoll = currentRoll - 1;

		updateRollDisplay({
			parentClass: "main-roll-display",
			className: "main-roll-entry",
			rollTable: deepTables[deepProgress.currentTable].table,
			entryTagOne: "h2",
			entryTagTwo: "p",
		});
	};
};

function detectRollClicked({
	targetClass: targetClass,
	targetEntryClass: targetEntryClass,
	rollReference: rollReference,
  rollUINumber: rollUINumber,
	rollMax: rollMax,
	callback: callback,
}) {
	const rollbutton = document.getElementsByClassName(`${targetClass}`)[0];
	rollbutton.addEventListener("click",event => {
	 const currentActionRoll = roll(rollMax);

	 const uiActionList = document.getElementsByClassName(`${targetEntryClass}`); 
	 //highlight the action number affected, apply the class to it 
	 uiActionList[rollReference]
			.firstElementChild.firstElementChild.classList.remove("highlight");
	 uiActionList[currentActionRoll - 1]
			.firstElementChild.firstElementChild.classList.add("highlight");

	 rollReference = currentActionRoll - 1;
	 //change the main roll number in the header to match the roll
	 const mainRollNumber = document.getElementsByClassName(`${rollUINumber}`)[0];
	 mainRollNumber.firstElementChild.innerHTML = `${currentActionRoll}`;

	 if(callback){callback()};
	});
}

detectRollClicked({
  targetClass: "main-header",
	targetEntryClass: "main-roll-entry",
	rollReference: deepProgress.actionRoll,
	rollUINumber: "main-roll-number",
	rollMax: 10,
	callback: advancementRoll,
});
detectRollClicked({
  targetClass: "token-header",
	targetEntryClass: "token-roll-entry",
	rollReference: deepProgress.tokenRoll,
	rollUINumber: "token-roll-number",
	rollMax: 16
});

function roll(multiplier){
	//needs to check beginningTurn  and firstRollMod  
	//if both are truthy, add firstRollMod to the roll, converting 
	//it to a ten if over ten
	
	return Math.ceil(Math.random() * multiplier);
};

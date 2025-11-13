console.log(deepIQTables);
function roll(multiplier){
	return Math.floor(Math.random() * multiplier);
};
console.log("roll: ",roll(10));
console.log("isarray: ", Array.isArray(deepIQTables));
//it gets the type:
//String: either a Do nothing or a user action 
//Array: a series of actions to be handled recursively
//Object: an action for the app to change some data or make a roll 
//...on another table

function displayOptions(action,type?){
	return type;
};

function changeTable(action){
	deepProgress.currentTable += action.modifier;
};

function createToken(action){
 const token = {
		baseStats: action.baseStats,
		abilities: [],
	}
	deepProgress.token.push(token);		 
}

function executeAction(action){
	switch(action.type){
		case "token":
    	createToken(action);
		break;
		case "advance"
			changeTable(action);
		break;
		case "roll-mod":
			deepProgress.nextRollMod += action.modifier;
		break;
	};
	return action;
};

function filterActions(action){
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
};

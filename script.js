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
function displayOptions(type){
	return type;
};

function filterActions(action){
	switch(typeof action){
		case "string":
			displayOptions("neutral");		
		break;
		case "object":
			if(action instanceof Array){
				action.forEach(action => executeAction(action));
				break;
			};
			executeAction(action);
		break;
	};
};

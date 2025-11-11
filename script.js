console.log(deepIQTables);
function roll(){
	return Math.floor(Math.random() * multiplier);
};
//it gets the type:
//String: either a Do nothing or a user action 
//Array: a series of actions to be handled recursively
//Object: an action for the app to change some data or make a roll 
//...on another table

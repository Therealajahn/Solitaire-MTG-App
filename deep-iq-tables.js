const deepProgress = {
	currentTable: 1,
	health: 40,  
	beginningTurn:true,
	firstRollMod: 0, 
	tokens: [],
};

const deepTables = {
	"1":{
		table: [
			"Do nothing",
			"Do nothing",
			"Do nothing",
			"Do nothing",
			"Do nothing",
			"Do nothing",
			"Do nothing",
			"Do nothing",
			"Bury your best creature (you decide)",
			{
				type:"token",
				text:"Put 1/1 creature into play",
				baseStats:[1,1],
				modifier: -4,
			}, 
		],
		advancement: 9,
	},
	"2":{
		table: [
			"Do nothing",
			"Do nothing",
			"Do nothing",
			"Do nothing",
			{
				type:"token",
				text:"Put 2/2 creature into play",
				baseStats:[2,2],
				modifier: 0,
			},
			{
				type:"token",
				text:"Put 2/2 creature into play",
				baseStats:[2,2],
				modifier: 0,
			},
			{
				type:"token",
				text:"Put 2/2 creature into play",
				baseStats:[2,2],
				modifier: 0,
			},
			{
				type:"advance",
				text:"Move Deep IQ up to Table 4",
				modifier: 2,
			},
			"Remove your best creature from the game (you decide)",
			"Remove your best creature from the game (you decide)",
		],
		advancement: 9,
	},
	token:[],
	spooky:[],
}

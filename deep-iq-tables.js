const deepIQTables = {
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
				text:"Put 1/1 creature into play",
				baseStats:[1,1],
				roll:"token",
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
				text:"Put 2/2 creature into play",
				type:"token",
				baseStats:[2,2],
				modifier: 0,
			},
			{
				text:"Put 2/2 creature into play",
				type:"token",
				baseStats:[2,2],
				modifier: 0,
			},
			{
				text:"Put 2/2 creature into play",
				type:"token",
				baseStats:[2,2],
				modifier: 0,
			},
			{
				text:"Move Deep IQ up to Table 4",
				type:"advance",
				modifier: 2,
			},
			"Remove your best creature from the game (you decide)",
			"Remove your best creature from the game (you decide)",
		],
		advancement: 9,
	},
	"spooky":[],
	"token":[],
}

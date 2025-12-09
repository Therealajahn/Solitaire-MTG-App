const deepProgress = {
	currentTable: 1,
	health: 40,  
	beginningTurn:true,
	actionRoll: 0,
	//advancementRoll: 0,
	tokenRoll: 0,
	firstRollMod: 0, 
	tokenRollMod: 0,
	spookyRollMod: 0,
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
				basestats:[2,2],
				modifier: 0,
			},
			{
				type:"token",
				text:"Put 2/2 creature into play",
				basestats:[2,2],
				modifier: 0,
			},
			{
				type:"token",
				text:"Put 2/2 creature into play",
				basestats:[2,2],
				modifier: 0,
			},
			{
				type:"advance",
				text:"Move deep iq up to table 4",
				modifier: 2,
			},
			"Remove your best creature from the game (you decide)",
			"Remove your best creature from the game (you decide)",
		],
		advancement: 8,
	},
//  Table III
//
//1-3) Do nothing.
//4) Put a 2/2 token into play (+2).
//5) Put a 2/1 token into play (+4).
//6) Destroy your best land.
//7) Move Deep IQ up to Table 5 and put a 1/1 token into play (+0).
//8) Put a 1/1 token into play (+1) and Deep IQ gets a free roll on Table 2.
	"3":{
		table: [
			//1
			"Do nothing",
			//2
			"Do nothing",
			//3
			"Do nothing",
			//4
			{
				type:"token",
				text:"Put 2/2 creature into play",
				basestats:[2,2],
				modifier: 2,
			},
			//5
			{
				type:"token",
				text:"Put 2/1 creature into play",
				basestats:[2,1],
				modifier: 4,
			},
			//6
			"Destroy your best land",
			//7
			[
				"and",
				{
					type:"advance",
					text:"Move deep iq up to table 5",
					modifier: 0,
				},
				{
					type:"token",
					text:"Put 2/1 creature into play",
					basestats:[2,1],
					modifier: 4,
				},
			],
			//8
			[
				"and"
				{
					type:"advance",
					text:"Move deep iq up to table 5",
					modifier: 0,
				},
				{
					type:"token",
					text:"Put 2/1 creature into play",
					basestats:[2,1],
					modifier: 4,
				},
			],
			//9
			"Remove your best creature from the game (you decide)",
			"Remove your best creature from the game (you decide)",
		],
		advancement: 8,
	},
   
	token:[
		"No extra abilities.",
		"+1/+0 and flanking.",
		"Regeneration. If Deep IQ uses this ability, subtract 2 from its next roll.",
		"+0/+1 and banding.",
		"First strike.",
		"Protection from: Black (1-3), White (4-6), Red (7-8), Blue (9) or Green (10).",
		"Landwalk: Swamps (1-3), Mountains (4-6), Islands (7-8), Plains (9) or Forests (10).",
		"+2/+2, flying, phasing.",
		"Unaffected by summoning sickness and trample.",
		"(Roll two more times on this table, with no modifier.)",
		"Flying and T: Deal 1 damage to target creature or player.",
		"Protection from a color (see #6) and doesn't tap to attack.",
		"When creature comes into play, bury one of your creatures at random.",
		"Flanking and cannot be targeted by spells or effects.",
		"Protection from a color (see #6), landwalk (see #7), one more roll with the same modifier and your weakest creature becomes unblockable.",
		"Remove target permanent from the game.",
	],
	spooky:[],
}

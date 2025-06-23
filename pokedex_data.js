const pokemons = [
  {
    "num": "001",
    "name": "Bulbasaur",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Bulbasaur likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "002",
    "name": "Ivysaur",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Ivysaur likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "003",
    "name": "Venusaur",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Venusaur likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "004",
    "name": "Charmander",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Charmander can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "005",
    "name": "Charmeleon",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Charmeleon can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "006",
    "name": "Charizard",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Charizard can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "007",
    "name": "Squirtle",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Squirtle lives near water. It swims very fast."
  },
  {
    "num": "008",
    "name": "Wartortle",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Wartortle lives near water. It swims very fast."
  },
  {
    "num": "009",
    "name": "Blastoise",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Blastoise lives near water. It swims very fast."
  },
  {
    "num": "010",
    "name": "Caterpie",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Caterpie is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "011",
    "name": "Metapod",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Metapod is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "012",
    "name": "Butterfree",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Butterfree is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "013",
    "name": "Weedle",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Weedle is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "014",
    "name": "Kakuna",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Kakuna is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "015",
    "name": "Beedrill",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Beedrill is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "016",
    "name": "Pidgey",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Pidgey is a simple Pokémon. It is quick and active."
  },
  {
    "num": "017",
    "name": "Pidgeotto",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Pidgeotto is a simple Pokémon. It is quick and active."
  },
  {
    "num": "018",
    "name": "Pidgeot",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Pidgeot is a simple Pokémon. It is quick and active."
  },
  {
    "num": "019",
    "name": "Rattata",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Rattata is a simple Pokémon. It is quick and active."
  },
  {
    "num": "020",
    "name": "Raticate",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Raticate is a simple Pokémon. It is quick and active."
  },
  {
    "num": "021",
    "name": "Spearow",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Spearow is a simple Pokémon. It is quick and active."
  },
  {
    "num": "022",
    "name": "Fearow",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Fearow is a simple Pokémon. It is quick and active."
  },
  {
    "num": "023",
    "name": "Ekans",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Ekans has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "024",
    "name": "Arbok",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Arbok has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "025",
    "name": "Pikachu",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Pikachu stores electricity (电). It can give off sparks."
  },
  {
    "num": "026",
    "name": "Raichu",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Raichu stores electricity (电). It can give off sparks."
  },
  {
    "num": "027",
    "name": "Sandshrew",
    "type": "Ground",
    "skills": "Dig, Mud Slap",
    "about": "Sandshrew likes to dig in the dirt (泥土). It feels safe underground."
  },
  {
    "num": "028",
    "name": "Sandslash",
    "type": "Ground",
    "skills": "Dig, Mud Slap",
    "about": "Sandslash likes to dig in the dirt (泥土). It feels safe underground."
  },
  {
    "num": "029",
    "name": "Nidoran♀",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Nidoran♀ has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "030",
    "name": "Nidorina",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Nidorina has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "031",
    "name": "Nidoqueen",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Nidoqueen has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "032",
    "name": "Nidoran♂",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Nidoran♂ has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "033",
    "name": "Nidorino",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Nidorino has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "034",
    "name": "Nidoking",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Nidoking has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "035",
    "name": "Clefairy",
    "type": "Fairy",
    "skills": "Charm, Fairy Wind",
    "about": "Clefairy is a cute fairy Pokémon. Its charm brings smiles."
  },
  {
    "num": "036",
    "name": "Clefable",
    "type": "Fairy",
    "skills": "Charm, Fairy Wind",
    "about": "Clefable is a cute fairy Pokémon. Its charm brings smiles."
  },
  {
    "num": "037",
    "name": "Vulpix",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Vulpix can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "038",
    "name": "Ninetales",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Ninetales can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "039",
    "name": "Jigglypuff",
    "type": "Fairy",
    "skills": "Charm, Fairy Wind",
    "about": "Jigglypuff is a cute fairy Pokémon. Its charm brings smiles."
  },
  {
    "num": "040",
    "name": "Wigglytuff",
    "type": "Fairy",
    "skills": "Charm, Fairy Wind",
    "about": "Wigglytuff is a cute fairy Pokémon. Its charm brings smiles."
  },
  {
    "num": "041",
    "name": "Zubat",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Zubat has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "042",
    "name": "Golbat",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Golbat has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "043",
    "name": "Oddish",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Oddish likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "044",
    "name": "Gloom",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Gloom likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "045",
    "name": "Vileplume",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Vileplume likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "046",
    "name": "Paras",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Paras is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "047",
    "name": "Parasect",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Parasect is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "048",
    "name": "Venonat",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Venonat is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "049",
    "name": "Venomoth",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Venomoth is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "050",
    "name": "Diglett",
    "type": "Ground",
    "skills": "Dig, Mud Slap",
    "about": "Diglett likes to dig in the dirt (泥土). It feels safe underground."
  },
  {
    "num": "051",
    "name": "Dugtrio",
    "type": "Ground",
    "skills": "Dig, Mud Slap",
    "about": "Dugtrio likes to dig in the dirt (泥土). It feels safe underground."
  },
  {
    "num": "052",
    "name": "Meowth",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Meowth is a simple Pokémon. It is quick and active."
  },
  {
    "num": "053",
    "name": "Persian",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Persian is a simple Pokémon. It is quick and active."
  },
  {
    "num": "054",
    "name": "Psyduck",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Psyduck lives near water. It swims very fast."
  },
  {
    "num": "055",
    "name": "Golduck",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Golduck lives near water. It swims very fast."
  },
  {
    "num": "056",
    "name": "Mankey",
    "type": "Fighting",
    "skills": "Karate Chop, Punch",
    "about": "Mankey loves to train. It fights with power."
  },
  {
    "num": "057",
    "name": "Primeape",
    "type": "Fighting",
    "skills": "Karate Chop, Punch",
    "about": "Primeape loves to train. It fights with power."
  },
  {
    "num": "058",
    "name": "Growlithe",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Growlithe can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "059",
    "name": "Arcanine",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Arcanine can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "060",
    "name": "Poliwag",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Poliwag lives near water. It swims very fast."
  },
  {
    "num": "061",
    "name": "Poliwhirl",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Poliwhirl lives near water. It swims very fast."
  },
  {
    "num": "062",
    "name": "Poliwrath",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Poliwrath lives near water. It swims very fast."
  },
  {
    "num": "063",
    "name": "Abra",
    "type": "Psychic",
    "skills": "Confusion, Psybeam",
    "about": "Abra can use mind power (心灵力量). It can sense things far away."
  },
  {
    "num": "064",
    "name": "Kadabra",
    "type": "Psychic",
    "skills": "Confusion, Psybeam",
    "about": "Kadabra can use mind power (心灵力量). It can sense things far away."
  },
  {
    "num": "065",
    "name": "Alakazam",
    "type": "Psychic",
    "skills": "Confusion, Psybeam",
    "about": "Alakazam can use mind power (心灵力量). It can sense things far away."
  },
  {
    "num": "066",
    "name": "Machop",
    "type": "Fighting",
    "skills": "Karate Chop, Punch",
    "about": "Machop loves to train. It fights with power."
  },
  {
    "num": "067",
    "name": "Machoke",
    "type": "Fighting",
    "skills": "Karate Chop, Punch",
    "about": "Machoke loves to train. It fights with power."
  },
  {
    "num": "068",
    "name": "Machamp",
    "type": "Fighting",
    "skills": "Karate Chop, Punch",
    "about": "Machamp loves to train. It fights with power."
  },
  {
    "num": "069",
    "name": "Bellsprout",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Bellsprout likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "070",
    "name": "Weepinbell",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Weepinbell likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "071",
    "name": "Victreebel",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Victreebel likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "072",
    "name": "Tentacool",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Tentacool lives near water. It swims very fast."
  },
  {
    "num": "073",
    "name": "Tentacruel",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Tentacruel lives near water. It swims very fast."
  },
  {
    "num": "074",
    "name": "Geodude",
    "type": "Rock",
    "skills": "Rock Throw, Stone Edge",
    "about": "Geodude has a hard body like a rock (岩石). It is very strong."
  },
  {
    "num": "075",
    "name": "Graveler",
    "type": "Rock",
    "skills": "Rock Throw, Stone Edge",
    "about": "Graveler has a hard body like a rock (岩石). It is very strong."
  },
  {
    "num": "076",
    "name": "Golem",
    "type": "Rock",
    "skills": "Rock Throw, Stone Edge",
    "about": "Golem has a hard body like a rock (岩石). It is very strong."
  },
  {
    "num": "077",
    "name": "Ponyta",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Ponyta can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "078",
    "name": "Rapidash",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Rapidash can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "079",
    "name": "Slowpoke",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Slowpoke lives near water. It swims very fast."
  },
  {
    "num": "080",
    "name": "Slowbro",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Slowbro lives near water. It swims very fast."
  },
  {
    "num": "081",
    "name": "Magnemite",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Magnemite stores electricity (电). It can give off sparks."
  },
  {
    "num": "082",
    "name": "Magneton",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Magneton stores electricity (电). It can give off sparks."
  },
  {
    "num": "083",
    "name": "Farfetch'd",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Farfetch'd is a simple Pokémon. It is quick and active."
  },
  {
    "num": "084",
    "name": "Doduo",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Doduo is a simple Pokémon. It is quick and active."
  },
  {
    "num": "085",
    "name": "Dodrio",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Dodrio is a simple Pokémon. It is quick and active."
  },
  {
    "num": "086",
    "name": "Seel",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Seel lives near water. It swims very fast."
  },
  {
    "num": "087",
    "name": "Dewgong",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Dewgong lives near water. It swims very fast."
  },
  {
    "num": "088",
    "name": "Grimer",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Grimer has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "089",
    "name": "Muk",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Muk has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "090",
    "name": "Shellder",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Shellder lives near water. It swims very fast."
  },
  {
    "num": "091",
    "name": "Cloyster",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Cloyster lives near water. It swims very fast."
  },
  {
    "num": "092",
    "name": "Gastly",
    "type": "Ghost",
    "skills": "Lick, Shadow Ball",
    "about": "Gastly is a ghost Pokémon. It can pass through walls."
  },
  {
    "num": "093",
    "name": "Haunter",
    "type": "Ghost",
    "skills": "Lick, Shadow Ball",
    "about": "Haunter is a ghost Pokémon. It can pass through walls."
  },
  {
    "num": "094",
    "name": "Gengar",
    "type": "Ghost",
    "skills": "Lick, Shadow Ball",
    "about": "Gengar is a ghost Pokémon. It can pass through walls."
  },
  {
    "num": "095",
    "name": "Onix",
    "type": "Rock",
    "skills": "Rock Throw, Stone Edge",
    "about": "Onix has a hard body like a rock (岩石). It is very strong."
  },
  {
    "num": "096",
    "name": "Drowzee",
    "type": "Psychic",
    "skills": "Confusion, Psybeam",
    "about": "Drowzee can use mind power (心灵力量). It can sense things far away."
  },
  {
    "num": "097",
    "name": "Hypno",
    "type": "Psychic",
    "skills": "Confusion, Psybeam",
    "about": "Hypno can use mind power (心灵力量). It can sense things far away."
  },
  {
    "num": "098",
    "name": "Krabby",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Krabby lives near water. It swims very fast."
  },
  {
    "num": "099",
    "name": "Kingler",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Kingler lives near water. It swims very fast."
  },
  {
    "num": "100",
    "name": "Voltorb",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Voltorb stores electricity (电). It can give off sparks."
  },
  {
    "num": "101",
    "name": "Electrode",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Electrode stores electricity (电). It can give off sparks."
  },
  {
    "num": "102",
    "name": "Exeggcute",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Exeggcute likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "103",
    "name": "Exeggutor",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Exeggutor likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "104",
    "name": "Cubone",
    "type": "Ground",
    "skills": "Dig, Mud Slap",
    "about": "Cubone likes to dig in the dirt (泥土). It feels safe underground."
  },
  {
    "num": "105",
    "name": "Marowak",
    "type": "Ground",
    "skills": "Dig, Mud Slap",
    "about": "Marowak likes to dig in the dirt (泥土). It feels safe underground."
  },
  {
    "num": "106",
    "name": "Hitmonlee",
    "type": "Fighting",
    "skills": "Karate Chop, Punch",
    "about": "Hitmonlee loves to train. It fights with power."
  },
  {
    "num": "107",
    "name": "Hitmonchan",
    "type": "Fighting",
    "skills": "Karate Chop, Punch",
    "about": "Hitmonchan loves to train. It fights with power."
  },
  {
    "num": "108",
    "name": "Lickitung",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Lickitung is a simple Pokémon. It is quick and active."
  },
  {
    "num": "109",
    "name": "Koffing",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Koffing has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "110",
    "name": "Weezing",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Weezing has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "111",
    "name": "Rhyhorn",
    "type": "Ground",
    "skills": "Dig, Mud Slap",
    "about": "Rhyhorn likes to dig in the dirt (泥土). It feels safe underground."
  },
  {
    "num": "112",
    "name": "Rhydon",
    "type": "Ground",
    "skills": "Dig, Mud Slap",
    "about": "Rhydon likes to dig in the dirt (泥土). It feels safe underground."
  },
  {
    "num": "113",
    "name": "Chansey",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Chansey is a simple Pokémon. It is quick and active."
  },
  {
    "num": "114",
    "name": "Tangela",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Tangela likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "115",
    "name": "Kangaskhan",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Kangaskhan is a simple Pokémon. It is quick and active."
  },
  {
    "num": "116",
    "name": "Horsea",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Horsea lives near water. It swims very fast."
  },
  {
    "num": "117",
    "name": "Seadra",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Seadra lives near water. It swims very fast."
  },
  {
    "num": "118",
    "name": "Goldeen",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Goldeen lives near water. It swims very fast."
  },
  {
    "num": "119",
    "name": "Seaking",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Seaking lives near water. It swims very fast."
  },
  {
    "num": "120",
    "name": "Staryu",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Staryu lives near water. It swims very fast."
  },
  {
    "num": "121",
    "name": "Starmie",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Starmie lives near water. It swims very fast."
  },
  {
    "num": "122",
    "name": "Mr. Mime",
    "type": "Psychic",
    "skills": "Confusion, Psybeam",
    "about": "Mr. Mime can use mind power (心灵力量). It can sense things far away."
  },
  {
    "num": "123",
    "name": "Scyther",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Scyther is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "124",
    "name": "Jynx",
    "type": "Ice",
    "skills": "Ice Shard, Ice Beam",
    "about": "Jynx lives in cold places. It can make ice."
  },
  {
    "num": "125",
    "name": "Electabuzz",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Electabuzz stores electricity (电). It can give off sparks."
  },
  {
    "num": "126",
    "name": "Magmar",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Magmar can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "127",
    "name": "Pinsir",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Pinsir is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "128",
    "name": "Tauros",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Tauros is a simple Pokémon. It is quick and active."
  },
  {
    "num": "129",
    "name": "Magikarp",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Magikarp lives near water. It swims very fast."
  },
  {
    "num": "130",
    "name": "Gyarados",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Gyarados lives near water. It swims very fast."
  },
  {
    "num": "131",
    "name": "Lapras",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Lapras lives near water. It swims very fast."
  },
  {
    "num": "132",
    "name": "Ditto",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Ditto is a simple Pokémon. It is quick and active."
  },
  {
    "num": "133",
    "name": "Eevee",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Eevee is a simple Pokémon. It is quick and active."
  },
  {
    "num": "134",
    "name": "Vaporeon",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Vaporeon lives near water. It swims very fast."
  },
  {
    "num": "135",
    "name": "Jolteon",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Jolteon stores electricity (电). It can give off sparks."
  },
  {
    "num": "136",
    "name": "Flareon",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Flareon can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "137",
    "name": "Porygon",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Porygon is a simple Pokémon. It is quick and active."
  },
  {
    "num": "138",
    "name": "Omanyte",
    "type": "Rock",
    "skills": "Rock Throw, Stone Edge",
    "about": "Omanyte has a hard body like a rock (岩石). It is very strong."
  },
  {
    "num": "139",
    "name": "Omastar",
    "type": "Rock",
    "skills": "Rock Throw, Stone Edge",
    "about": "Omastar has a hard body like a rock (岩石). It is very strong."
  },
  {
    "num": "140",
    "name": "Kabuto",
    "type": "Rock",
    "skills": "Rock Throw, Stone Edge",
    "about": "Kabuto has a hard body like a rock (岩石). It is very strong."
  },
  {
    "num": "141",
    "name": "Kabutops",
    "type": "Rock",
    "skills": "Rock Throw, Stone Edge",
    "about": "Kabutops has a hard body like a rock (岩石). It is very strong."
  },
  {
    "num": "142",
    "name": "Aerodactyl",
    "type": "Rock",
    "skills": "Rock Throw, Stone Edge",
    "about": "Aerodactyl has a hard body like a rock (岩石). It is very strong."
  },
  {
    "num": "143",
    "name": "Snorlax",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Snorlax is a simple Pokémon. It is quick and active."
  },
  {
    "num": "144",
    "name": "Articuno",
    "type": "Ice",
    "skills": "Ice Shard, Ice Beam",
    "about": "Articuno lives in cold places. It can make ice."
  },
  {
    "num": "145",
    "name": "Zapdos",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Zapdos stores electricity (电). It can give off sparks."
  },
  {
    "num": "146",
    "name": "Moltres",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Moltres can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "147",
    "name": "Dratini",
    "type": "Dragon",
    "skills": "Dragon Breath, Twister",
    "about": "Dratini is a dragon Pokémon. It is rare and mighty."
  },
  {
    "num": "148",
    "name": "Dragonair",
    "type": "Dragon",
    "skills": "Dragon Breath, Twister",
    "about": "Dragonair is a dragon Pokémon. It is rare and mighty."
  },
  {
    "num": "149",
    "name": "Dragonite",
    "type": "Dragon",
    "skills": "Dragon Breath, Twister",
    "about": "Dragonite is a dragon Pokémon. It is rare and mighty."
  },
  {
    "num": "150",
    "name": "Mewtwo",
    "type": "Psychic",
    "skills": "Confusion, Psybeam",
    "about": "Mewtwo can use mind power (心灵力量). It can sense things far away."
  },
  {
    "num": "151",
    "name": "Mew",
    "type": "Psychic",
    "skills": "Confusion, Psybeam",
    "about": "Mew can use mind power (心灵力量). It can sense things far away."
  },
  {
    "num": "152",
    "name": "Chikorita",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Chikorita likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "153",
    "name": "Bayleef",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Bayleef likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "154",
    "name": "Meganium",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Meganium likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "155",
    "name": "Cyndaquil",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Cyndaquil can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "156",
    "name": "Quilava",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Quilava can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "157",
    "name": "Typhlosion",
    "type": "Fire",
    "skills": "Ember, Flame Wheel",
    "about": "Typhlosion can breathe little flames. It stays warm even in cold places."
  },
  {
    "num": "158",
    "name": "Totodile",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Totodile lives near water. It swims very fast."
  },
  {
    "num": "159",
    "name": "Croconaw",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Croconaw lives near water. It swims very fast."
  },
  {
    "num": "160",
    "name": "Feraligatr",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Feraligatr lives near water. It swims very fast."
  },
  {
    "num": "161",
    "name": "Sentret",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Sentret is a simple Pokémon. It is quick and active."
  },
  {
    "num": "162",
    "name": "Furret",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Furret is a simple Pokémon. It is quick and active."
  },
  {
    "num": "163",
    "name": "Hoothoot",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Hoothoot is a simple Pokémon. It is quick and active."
  },
  {
    "num": "164",
    "name": "Noctowl",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Noctowl is a simple Pokémon. It is quick and active."
  },
  {
    "num": "165",
    "name": "Ledyba",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Ledyba is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "166",
    "name": "Ledian",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Ledian is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "167",
    "name": "Spinarak",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Spinarak is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "168",
    "name": "Ariados",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Ariados is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "169",
    "name": "Crobat",
    "type": "Poison",
    "skills": "Poison Sting, Sludge",
    "about": "Crobat has poison (毒) in its body. It uses it to fight enemies."
  },
  {
    "num": "170",
    "name": "Chinchou",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Chinchou lives near water. It swims very fast."
  },
  {
    "num": "171",
    "name": "Lanturn",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Lanturn lives near water. It swims very fast."
  },
  {
    "num": "172",
    "name": "Pichu",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Pichu stores electricity (电). It can give off sparks."
  },
  {
    "num": "173",
    "name": "Cleffa",
    "type": "Fairy",
    "skills": "Charm, Fairy Wind",
    "about": "Cleffa is a cute fairy Pokémon. Its charm brings smiles."
  },
  {
    "num": "174",
    "name": "Igglybuff",
    "type": "Fairy",
    "skills": "Charm, Fairy Wind",
    "about": "Igglybuff is a cute fairy Pokémon. Its charm brings smiles."
  },
  {
    "num": "175",
    "name": "Togepi",
    "type": "Fairy",
    "skills": "Charm, Fairy Wind",
    "about": "Togepi is a cute fairy Pokémon. Its charm brings smiles."
  },
  {
    "num": "176",
    "name": "Togetic",
    "type": "Fairy",
    "skills": "Charm, Fairy Wind",
    "about": "Togetic is a cute fairy Pokémon. Its charm brings smiles."
  },
  {
    "num": "177",
    "name": "Natu",
    "type": "Psychic",
    "skills": "Confusion, Psybeam",
    "about": "Natu can use mind power (心灵力量). It can sense things far away."
  },
  {
    "num": "178",
    "name": "Xatu",
    "type": "Psychic",
    "skills": "Confusion, Psybeam",
    "about": "Xatu can use mind power (心灵力量). It can sense things far away."
  },
  {
    "num": "179",
    "name": "Mareep",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Mareep stores electricity (电). It can give off sparks."
  },
  {
    "num": "180",
    "name": "Flaaffy",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Flaaffy stores electricity (电). It can give off sparks."
  },
  {
    "num": "181",
    "name": "Ampharos",
    "type": "Electric",
    "skills": "Thunder Shock, Spark",
    "about": "Ampharos stores electricity (电). It can give off sparks."
  },
  {
    "num": "182",
    "name": "Bellossom",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Bellossom likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "183",
    "name": "Marill",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Marill lives near water. It swims very fast."
  },
  {
    "num": "184",
    "name": "Azumarill",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Azumarill lives near water. It swims very fast."
  },
  {
    "num": "185",
    "name": "Sudowoodo",
    "type": "Rock",
    "skills": "Rock Throw, Stone Edge",
    "about": "Sudowoodo has a hard body like a rock (岩石). It is very strong."
  },
  {
    "num": "186",
    "name": "Politoed",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Politoed lives near water. It swims very fast."
  },
  {
    "num": "187",
    "name": "Hoppip",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Hoppip likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "188",
    "name": "Skiploom",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Skiploom likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "189",
    "name": "Jumpluff",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Jumpluff likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "190",
    "name": "Aipom",
    "type": "Normal",
    "skills": "Tackle, Quick Attack",
    "about": "Aipom is a simple Pokémon. It is quick and active."
  },
  {
    "num": "191",
    "name": "Sunkern",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Sunkern likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "192",
    "name": "Sunflora",
    "type": "Grass",
    "skills": "Razor Leaf, Vine Whip",
    "about": "Sunflora likes bright sunlight (阳光). Its leaves help it make energy."
  },
  {
    "num": "193",
    "name": "Yanma",
    "type": "Bug",
    "skills": "Bug Bite, String Shot",
    "about": "Yanma is a small bug Pokémon. It can use sticky silk (丝) to protect itself."
  },
  {
    "num": "194",
    "name": "Wooper",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Wooper lives near water. It swims very fast."
  },
  {
    "num": "195",
    "name": "Quagsire",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Quagsire lives near water. It swims very fast."
  },
  {
    "num": "196",
    "name": "Espeon",
    "type": "Psychic",
    "skills": "Confusion, Psybeam",
    "about": "Espeon can use mind power (心灵力量). It can sense things far away."
  },
  {
    "num": "197",
    "name": "Umbreon",
    "type": "Dark",
    "skills": "Bite, Dark Pulse",
    "about": "Umbreon moves in the dark (黑暗). It can sneak up quietly."
  },
  {
    "num": "198",
    "name": "Murkrow",
    "type": "Dark",
    "skills": "Bite, Dark Pulse",
    "about": "Murkrow moves in the dark (黑暗). It can sneak up quietly."
  },
  {
    "num": "199",
    "name": "Slowking",
    "type": "Water",
    "skills": "Water Gun, Bubble",
    "about": "Slowking lives near water. It swims very fast."
  },
  {
    "num": "200",
    "name": "Misdreavus",
    "type": "Ghost",
    "skills": "Lick, Shadow Ball",
    "about": "Misdreavus is a ghost Pokémon. It can pass through walls."
  }
];

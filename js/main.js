let watts = 10
var generators = []
var lastUpdate = Date.now()
let prodRate = 0
let iron = 0
let boostedProduction = 0 

for(let i = 0; i < 10; i++)
{
	let generator = 
	{
		genName: i,
		cost: Math.pow(Math.pow(10, i), i) * 10,
		bought: 0,
		amount: 0,
		multiplier: 1
	}
	generators.push(generator)
}

function buyGen(i)
{
	let g = generators[i - 1]
	if (g.cost > watts) return
	watts -= g.cost
	g.amount += 1
	g.bought += 1
	g.multiplier *= 1.05
	g.cost *= 1.5
}
   
function ironPrestige()
{
	let ironEarned = watts * 0.1
	if (watts < 20) return
	iron += ironEarned
	document.getElementById("ironAmount").innerHTML = "Iron : " + format(iron)
	watts = 10
	for (let i = 0; i < 10; i++)
	{
		generators[i].cost = Math.pow(Math.pow(10, i), i) * 10,
		generators[i].amount = 0
		generators[i].bought = 0
		generators[i].multiplier = 1
	}
	hideAll()
	resetUpgrades()
}


function updateGUI() 
{
    document.getElementById("currency").textContent = format(watts) + " W";

    // Calculate and display the total production rate
    prodRate = 0;
	prodRate += boostedProduction;
	document.getElementById("prodRate").textContent = format(prodRate) + " W/s";

	// Display the generators
	for (let i = 0; i < 10; i++) 
	{
        let g = generators[i];
        document.getElementById("gen" + (i + 1)).innerHTML = "Gen " + (i + 1) + "<br>Amount: " + format(g.amount) + "<br>Cost: " + format(g.cost);
        if (g.cost > watts) document.getElementById("gen" + (i + 1)).classList.add("locked");
        else document.getElementById("gen" + (i + 1)).classList.remove("locked");
    }

	for (let i = 0; i < 4; i++)
	{
		let u = upgrades[i];
		document.getElementById("up" + (i + 1)).innerHTML = u.name + "<br>Cost: " + format(u.cost) + "<br>" + u.effect;
		if (u.cost > watts) document.getElementById("up" + (i + 1)).classList.add("locked");
		else document.getElementById("up" + (i + 1)).classList.remove("locked");
	}
	// checkUpgrades()
    checkAchieve();
	updateHealthText();
	updateWattsDisplay();
}

function productionLoop(diff)
{
	let productionMultiplier = 1 + (iron * 0.001);
	let baseProduction = generators[0].amount * generators[0].multiplier;
	boostedProduction = baseProduction * productionMultiplier;

	watts += boostedProduction * diff;
	for(let i = 1; i < 10; i++)
	{
		generators[i - 1].amount += generators[i].amount * generators[i].multiplier * diff / 10
	}
}

function format(amount)
{
	let power = Math.floor(Math.log10(amount))
	let mantissa = amount / Math.pow(10, power)
	if (power < 3 ) return amount.toFixed(2)
	return mantissa.toFixed(2) + "e" + power
}

function mainLoop()
{
	var diff = (Date.now() - lastUpdate) / 1000

	productionLoop(diff)
	updateGUI()

	lastUpdate = Date.now()
}

function debug()
{
	console.log(ironEarned)
}

setInterval(mainLoop, 50)

updateGUI()

function debug()
{
	console.log("cooucou")
}
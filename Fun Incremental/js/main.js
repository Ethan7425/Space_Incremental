var money = 10
var generators = []
var lastUpdate = Date.now()

function checkAchieve()
{
	document.getElementById("gen2").style.display = "block";
	document.getElementById("gen3").style.display = "block";
	document.getElementById("gen4").style.display = "block";
	document.getElementById("gen5").style.display = "block";
	if (money > 12)
	{
    document.getElementById("achiev").style.display = "block";
	} 
}
for(let i = 0; i < 5; i++)
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
	if (g.cost > money) return
	money -= g.cost
	g.amount += 1
	g.bought += 1
	g.multiplier *= 1.05
	g.cost *= 1.5
}

function updateGUI()
{
	document.getElementById("currency").textContent = "You have $" + format(money)
	for(let i = 0; i < 5; i++)
	{
		let g = generators[i]
		document.getElementById("gen" + (i + 1)).innerHTML = "Gen " + (i + 1) + "<br>Amount: " + format(g.amount) + "<br>Bought: " + g.bought + "<br>Mult: " + format(g.multiplier) + "x<br>Cost: " + format(g.cost)
		if (g.cost >  money) document.getElementById("gen" + (i + 1)).classList.add("locked")
		else document.getElementById("gen" + (i + 1)).classList.remove("locked") 
	}
	checkAchieve();
}

function productionLoop(diff)
{
	money += generators[0].amount * generators[0].multiplier * diff
	for(let i = 1; i < 5; i++)
	{
		generators[i - 1].amount += generators[i].amount * generators[i].multiplier * diff / 5
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


setInterval(mainLoop, 50)

updateGUI()
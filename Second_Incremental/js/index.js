var app = new Vue
({
el: "#app",

data:
{
	player: player
},

methods:
{
	buyMarketingGenerator(i)
	{
		let g = this.player.marketing[i]
		if (g.cost > this.player.money) return
		this.player.money -= g.cost
		this.player.marketing[i].cost *= 1 + (i + 1)*0.25
		this.player.marketing[i].amount += 1
		this.player.marketing[i].bought += 1
	},

	buyArtistGenerator(i)
	{
		let g = this.player.artists[i]
		if (g.cost > this.player.money) return
		this.player.money -= g.cost
		this.player.artists[i].cost *= 1 + (i + 1)*0.25
		this.player.artists[i].amount += 1
		this.player.artists[i].bought += 1
	},

	buyLootboxTeamGenerator(i)
	{
		let g = this.player.lootBoxTeam[i]
		if (g.cost > this.player.money) return
		this.player.money -= g.cost
		this.player.lootBoxTeam[i].cost *= 1 + (i + 1)*0.25
		this.player.lootBoxTeam[i].amount += 1
		this.player.lootBoxTeam[i].bought += 1
	},

	format(amount)
	{
		return format(amount)
	},

	gameLoop()
	{
		console.log(2)
		gameLoop(this)
	},

	mounted()
	{
		console.log(1)
		setInterval(this.gameLoop, 50)
	}
}
})
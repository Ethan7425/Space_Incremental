var upgrades = 
[
    {
        id: 'up1',
        name: "First Upgrade",
        cost: 50,
        effect: "Solar Panel 1 Efficiency x2",
        target: 1,
    },

    {
        id: 'up2',
        name: "Second Upgrade",
        cost: 500,
        effect: "Solar Panel 2 Efficiency x2",
        target: 2,
    },

    {
        id: 'up3',
        name: "Third Upgrade",
        cost: 5e5,
        effect: "Solar Panel 3 Efficiency x2",
        target: 3,
    },

    {
        id: 'up4',
        name: "Fourth Upgrade",
        cost: 5e10,
        effect: "Solar Panel 4 Efficiency x2",
        target: 4,
    },

    {
        id: 'up5',
        name: "Fifth Upgrade",
        cost: 6e17,
        effect: "Solar Panel 5 Efficiency x2",
        target: 5,
    },

    {
        id: 'up6',
        name: "Sixth Upgrade",
        cost: 4e26,
        effect: "Solar Panel 6 Efficiency x2",
        target: 6,
    },

    {
        id: 'up7',
        name: "Seventh Upgrade",
        cost: 2e37,
        effect: "Solar Panel 7 Efficiency x2",
        target: 7,
    },

    {
        id: 'up8',
        name: "Eight Upgrade",
        cost: 8e50,
        effect: "Solar Panel 8 Efficiency x2",
        target: 8,
    },

    {
        id: 'up9',
        name: "Ninth Upgrade",
        cost: 3e65,
        effect: "Solar Panel 8 Efficiency x2",
        target: 9,
    },

    {
        id: 'up10',
        name: "Tenth Upgrade",
        cost: 1e83,
        effect: "Solar Panel 10 Efficiency x2",
        target: 10,
    },

    {
        id: 'up11',
        name: "Test",
        cost: 1e3,
        effect: "Test"
    },
]

function upgradeHandler(upgradeId) 
{
    const upgrade = upgrades.find(u => u.id === upgradeId);

    if (upgrade) 
	{
        const { target, cost } = upgrade;
        if (cost > watts) return;
        generators[target - 1].multiplier *= 2;
        watts -= cost;
        upgrades.push(upgradeId);
        updateGUI();
        // Hide the button after the upgrade
        document.getElementById(upgradeId).style.display = 'none';
    }
}


function resetUpgrades() 
{
    upgrades = upgrades;
    const upgradeButtons = document.querySelectorAll('.upgradeButton');
    upgradeButtons.forEach(button => 
    {
        button.style.display = 'block'; 
    });
}
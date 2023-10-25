var upgrades = 
[
    {
        id: 'up1',
        name: "First Upgrade",
        cost: 35,
        effect: "Solar Panel 1 Efficiency x2",
    },

    {
        id: 'up2',
        name: "Second Upgrade",
        cost: 500,
        effect: "Make Gen 2 twice as efficient"
    },

    {
        id: 'up3',
        name: "Third Upgrade",
        cost: 1e3,
        effect: "Make Gen 3 twice as efficient"
    },

    {
        id: 'up4',
        name: "Fourth Upgrade",
        cost: 1e3,
        effect: "Make Gen 4 twice as efficient"
    },
]

function upgradeHandler(upgradeId) 
{

    const upgrade = upgrades.find(u => u.id === upgradeId);
    const cost = upgrade.cost;

    if (upgradeId === 'up1') 
    {
        if (cost > watts) return;
        generators[0].multiplier *= 2;
        watts -= cost;        
    }
    else if (upgradeId === 'up2') 
    {
        if (cost > watts) return;
        generators[1].multiplier *= 2;
        watts -= cost;  
    } 
    else if (upgradeId === 'up3') 
    {
        if (cost > watts) return;
        generators[2].multiplier *= 2;
        watts -= cost;  
    }
    else if (upgradeId === 'up4')
    {
        if (cost > watts) return;
        generators[3].multiplier *= 2;
        watts -= cost;  
    }
    upgrades.push(upgradeId);
    updateGUI();
    // Hide the button after the upgrade
    document.getElementById(upgradeId).style.display = 'none';
}

function checkUpgrades()
{
    upgradeHandler('all')
}

function resetUpgrades() 
{
    upgrades = [];
    const upgradeButtons = document.querySelectorAll('.upgradeButton');
    upgradeButtons.forEach(button => 
    {
        button.style.display = 'block'; 
    });
}
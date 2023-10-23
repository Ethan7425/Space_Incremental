var upgrades = 
[
    {
        name: "First Upgrade",
        cost: 20,
        effect: "coucou",
    },

    {
        name: "Second Upgrade",
        cost: 1e3,
        effect: "re coucou"
    },

    {
        name: "Second Upgrade",
        cost: 1e3,
        effect: "re coucou"
    },

    {
        name: "Second Upgrade",
        cost: 1e3,
        effect: "re coucou"
    },
]

function upgradeHandler(upgradeId) 
{
    if (upgradeId === 'up1') 
    {
        let cost = 20;
        if (cost > watts) return;
        generators[0].multiplier *= 1.5;
        watts -= cost;        
    }
    else if (upgradeId === 'up2') 
    {
        if (1000 > watts) return;
        generators[1].multiplier *= 2;
        watts -= 1000;  
    } 
    else if (upgradeId === 'test2') 
    {
       
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
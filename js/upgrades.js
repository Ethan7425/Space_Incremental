let upgrades = []

function upgradeHandler(upgradeId) 
{
    if (upgradeId === '2xGen1' || upgradeId === 'all') 
    {
        let cost = 20;
        if (cost > watts) return;
        generators[0].multiplier *= 2;
        watts -= cost;        
    }
    else if (upgradeId === '2xGen2' || upgradeId === 'all') 
    {
        if (1000 > watts) return;
        generators[1].multiplier *= 2;
        watts -= 1000;  
    } 
    else if (upgradeId === 'test2' || upgradeId === 'all') 
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
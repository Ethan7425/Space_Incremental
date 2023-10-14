function upgradeHandler(upgradeId) 
{
    if (upgradeId === '2xGen1' || upgradeId === 'all') 
    {
        let cost = 20;
        if (upgradeId === 'all')
        {
            if (cost > watts) document.getElementById("2xGen1").classList.add("locked");
            else document.getElementById("2xGen1").classList.remove("locked");
        }
        else
        {
            if (cost > watts) return;
            generators[0].multiplier *= 2;
            watts -= cost;        
        } 
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
    // if (g.cost > watts) document.getElementById("gen" + (i + 1)).classList.add("locked");
    // else document.getElementById("gen" + (i + 1)).classList.remove("locked");
    updateGUI();
    // Hide the button after the upgrade
    document.getElementById(upgradeId).style.display = 'none';
}

function checkUpgrades()
{
    upgradeHandler('all')
}
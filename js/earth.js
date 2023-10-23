let health = 10; 
let totalHealth = health; 

function clickEarth() 
{
    health--;
      // Update health bar width

    if(health === 0) 
    {
      health = totalHealth; // Reset
      
      // Give reward
        //ironPrestige();
      // giveIronOre(1); 
    }
    updateHealthText();
    let healthPercent = health / totalHealth * 100;
    document.querySelector('.health').style.width = healthPercent + '%';
}

function updateHealthText() 
{
  let healthText = document.querySelector('.health-text');
  healthText.innerText = `${health} / ${totalHealth} HP`; 
}
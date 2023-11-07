let health = 250; 
let totalHealth = health;
let clickPower = 1;

function clickEarth() 
{
    health -= clickPower;
    // Update health bar width

    if(health === 0) 
    {
      // Reset
      health = totalHealth; 
      // Give reward
      ironPrestige();
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
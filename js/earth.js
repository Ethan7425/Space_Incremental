let health = 10; 

function clickEarth() 
{
    health--;
      // Update health bar width

    if(health === 0) 
    {
      health = 10; // Reset
      
      // Give reward
      ironPrestige();
      // giveIronOre(1); 
    }
    let healthPercent = health / 10 * 100;
    document.querySelector('.health').style.width = healthPercent + '%';
}

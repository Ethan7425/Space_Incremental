function saveGame() 
{
    const saveData =
    {
      watts: watts,
      generators: generators, 
      // other state
    };
  
    // Save to localStorage
    localStorage.setItem('Interstellar_Incremental_Save', JSON.stringify(saveData));
}


function loadGame() 
{
    const saveData = JSON.parse(localStorage.getItem('Interstellar_Incremental_Save'));
  
    if (saveData) 
    {
      watts = saveData.watts;
      generators = saveData.generators;
      // restore state
    }
  }


function resetGame() 
{
    // Clear saved game data
    localStorage.removeItem('Interstellar_Incremental_Save');
  
    // Reload page to reset game
    location.reload(); 
}

window.onload = loadGame() 
{
};
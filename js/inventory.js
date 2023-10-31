// Get reference to div and Update text 
const wattsDiv = document.getElementById('watts');
wattsDiv.innerText = format(watts) + ' Watts'; 

const ironDiv = document.getElementById('iron');
ironDiv.innerText = format(iron) +' Iron';


function updateAllRessource()
{
  updateWattsDisplay();
  updateIronDisplay();
}

function updateWattsDisplay() 
{
  wattsDiv.innerText = format(watts) + ' Watts';
}

function updateIronDisplay()
{
  ironDiv.innerText = format(iron) +'Iron';
}
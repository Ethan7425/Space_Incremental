// Get reference to watts div 
const wattsDiv = document.getElementById('watts');

// Update watts text 
wattsDiv.innerText = format(watts) + ' Watts'; 

// Call this whenever watts amount changes
function updateWattsDisplay() 
{
  wattsDiv.innerText = format(watts) + ' Watts';
}

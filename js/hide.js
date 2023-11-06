const optionButton = document.getElementById('optionButton');
const statsButton = document.getElementById('statsButton');
const achieveButton = document.getElementById('achieveButton');
function showGen()
{
	const unlockGens = [50, 1e3, 1e9, 1e16, 1e25, 1e36, 1e49, 1e64, 1e81]
	unlockGens.forEach((gen, i) =>
	{
		if (watts > gen)
		{
			document.getElementById("gen"+(i+2)).style.display = "block";
		}
	});
}

function hideAll()
{
	document.getElementById("gen2").style.display = "none";
	document.getElementById("gen3").style.display = "none";
	document.getElementById("gen4").style.display = "none";
	document.getElementById("gen5").style.display = "none";
	document.getElementById("gen6").style.display = "none";
	document.getElementById("gen7").style.display = "none";
	document.getElementById("gen8").style.display = "none";
	document.getElementById("gen9").style.display = "none";
	document.getElementById("gen10").style.display = "none";
}

function hideExtra()
{
	// Toggle button visibility
	if(optionButton.style.display === 'none') 
	{
		optionButton.style.display = 'block';
		statsButton.style.display = 'block';
		achieveButton.style.display = 'block';
	} 
	else 
	{
		optionButton.style.display = 'none';
		statsButton.style.display = 'none';
		achieveButton.style.display = 'none';
	}
}

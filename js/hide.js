const optionButton = document.getElementById('optionButton');
const statsButton = document.getElementById('statsButton');
const achieveButton = document.getElementById('achieveButton');
function checkAchieve()
{
	if (watts > 50)
	{
	document.getElementById("gen2").style.display = "block";	
	}
	if (watts > 1e3)
	{
	document.getElementById("gen3").style.display = "block";
	}
	if (watts > 1e9)
	{
	document.getElementById("gen4").style.display = "block";
	}
	if (watts > 1e16)
	{
	document.getElementById("gen5").style.display = "block";
	}
	if (watts > 1e25)
	{
	document.getElementById("gen6").style.display = "block";
	}
	if (watts > 1e36)
	{
	document.getElementById("gen7").style.display = "block";
	}
	if (watts > 1e49)
	{
	document.getElementById("gen8").style.display = "block";
	}
	if (watts > 1e64)
	{
	document.getElementById("gen9").style.display = "block";
	}
	if (watts > 1e81)
	{
	document.getElementById("gen10").style.display = "block";
	}

	if (watts > 12)
	{
    document.getElementById("achiev").style.display = "block";
	} 
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

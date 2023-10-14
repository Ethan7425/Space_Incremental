function checkAchieve()
{
	if (watts > 50)
	{
	document.getElementById("gen2").style.display = "block";	
	}
	
	if (watts > 1000)
	{
	document.getElementById("gen3").style.display = "block";
	}
	// document.getElementById("gen4").style.display = "block";
	// document.getElementById("gen5").style.display = "block";
	// document.getElementById("gen6").style.display = "block";
	// document.getElementById("gen7").style.display = "block";
	// document.getElementById("gen8").style.display = "block";
	// document.getElementById("gen9").style.display = "block";
	// document.getElementById("gen10").style.display = "block";
	if (watts > 12)
	{
    document.getElementById("achiev").style.display = "block";
	} 
}
function checkAchievements() {

	const achievements = document.querySelectorAll('.achievement');
  
	if(watts >= 100) {
	  achievements[0].style.display = 'block'; 
	}
  
	if(watts >= 1000) {
	  achievements[1].style.display = 'block';
	}
  
	if(watts >= 10000) { 
	  achievements[2].style.display = 'block';
	}
  
  }
  
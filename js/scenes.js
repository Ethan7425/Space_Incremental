
function changeScene(sceneId) 
{

  // Get all buttons
  const buttons = document.querySelectorAll('.button');

  // Remove active class from all buttons
  buttons.forEach(button => 
  {
    button.classList.remove('active');
  });

  // Get clicked button and add active class
  const clickedButton = document.getElementById(sceneId + 'Button');
  clickedButton.classList.add('active');

  // Hide all scenes
  const scenes = document.querySelectorAll('.scene'); 
  scenes.forEach(scene => 
  {
    scene.style.display = 'none';
  });

  // Show clicked scene
  const desiredScene = document.getElementById(sceneId);
  desiredScene.style.display = 'block';
}


const upgradeButton = document.getElementById("upgradeBtn");
const upgradeOptions = document.querySelector(".upgrades");

upgradeButton.addEventListener("click", () => {
  if (upgradeOptions.style.display === "block") {
    upgradeOptions.style.display = "none";
  } else {
    upgradeOptions.style.display = "block";
  }
});

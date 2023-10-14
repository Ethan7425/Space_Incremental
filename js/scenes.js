
function changeScene(sceneId) 
{
    // Get references to all scene elements
    const scenes = document.querySelectorAll('.scene');
    const desiredScene = document.getElementById(sceneId);

    // Iterate through scenes and hide them
    scenes.forEach(scene => 
    {
        scene.style.display = 'none';
    });

    // Show the desired scene
    if (desiredScene) 
    {
        desiredScene.style.display = 'block';
    }
}

var header = document.getElementById("buttonContainer");
var buttons = header.getElementsByClassName("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () 
    {
        var current = document.getElementsByClassName("active");
        current[0].classList.remove("active");
        this.classList.add("active");
    });
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

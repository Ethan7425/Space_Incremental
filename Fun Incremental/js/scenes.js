
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


// var header = document.getElementById("buttonContainer");
// var buttons = header.getElementsByClassName ("button");
// for (var i = 0; i < buttons.length; i++) 
// {
//     buttons [i]. addEventListener ("click", function () 
//     {
//         var current = document. getElementsByClassName ("active");
//         current [0].className =
//         current [0]. className. replace("active", "");
//         this.className += " active"
// });
// }


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
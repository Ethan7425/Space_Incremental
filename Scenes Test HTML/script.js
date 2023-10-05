// script.js

// Get references to the scenes and the button
const scene1 = document.getElementById('scene1');
const scene2 = document.getElementById('scene2');
const changeSceneButton = document.getElementById('changeSceneButton');

// Add a click event listener to the button
changeSceneButton.addEventListener('click', function () 
{
    // Toggle the visibility of the scenes
    if (scene1.style.display === 'block') 
    {
        scene1.style.display = 'none';
        scene2.style.display = 'block';
    }
    else 
    {
        scene1.style.display = 'block';
        scene2.style.display = 'none';
    }
});

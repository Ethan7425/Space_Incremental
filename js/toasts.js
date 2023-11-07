function showToast(message, duration = 3000) 
{
    const container = document.getElementById('toast-container');

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;

    container.appendChild(toast);

    setTimeout(() => 
	{
        toast.classList.add('show');
    }, 100);

    setTimeout(() => 
	{
        toast.classList.remove('show');
        setTimeout(() => 
		{
            container.removeChild(toast);
        }, 500);
    }, duration);
}

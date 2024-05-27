document.addEventListener("DOMContentLoaded", function() {
    const switcher = document.querySelector('.btn');

    switcher.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        var className = document.body.className;
        if(className.includes('dark-theme')) {
            this.textContent = "Light";
        } else {
            this.textContent = "Dark";
        }

        console.log('current class name: ' + className);
    });
});

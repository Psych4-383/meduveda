window.onload = function() {
    var navLogo = document.getElementById('nav-logo');
    var navName = document.getElementById('nav-name');
    navLogo.addEventListener('mouseover', function() {
        navName.style.transitionDuration = '0.2s';
        navName.style.opacity = '1';
    });
    navLogo.addEventListener('mouseout', function() {
        navName.style.opacity = '0';
    });

}
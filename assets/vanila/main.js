document.getElementById("menu-mobile").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah tindakan default dari tag a
    var navMenu = document.getElementById("nav-menu");
    if (navMenu.classList.contains("menu-active")) {
        navMenu.classList.remove("menu-active");
        navMenu.classList.add("menu-non-active");
    } else {
        navMenu.classList.add("menu-active");
        navMenu.classList.remove("menu-non-active");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if(boxTop < triggerBottom) {
                box.classList.add('show');
                box.classList.remove('hidden');
            } else {
                box.classList.remove('show');
                box.classList.add('hidden');
            }
        });
    }

    window.addEventListener('scroll', checkBoxes);

    // Initial check
    checkBoxes();
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-menu-item-me');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});

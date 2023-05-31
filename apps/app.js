// make satellite move randomly around


window.onload = function () {
    var max_width = window.innerWidth;
    var max_height = window.innerHeight;

    var directions = { left: 1, up: 2, right: 3, down: 4 };
    var direction = getRandomDirection();
    var distance = getRandomDistance();

    var target = document.querySelector("#satellite");
    var target_pos = { top: 0, left: 0 };

    var i = 0;

    var render_rate = 4;
    var move_step = 1;

    setInterval(function () {
        i++;
        if (i > distance) {
            distance = getRandomDistance();
            direction = getRandomDirection();
            i = 0;
        }
        move(target, direction, move_step);
    }, render_rate);

    function getRandomDistance() {
        return Math.floor(Math.random() * 20 + 1) + 100;
    }

    function getRandomDirection() {
        return Math.floor(Math.random() * 4 + 1);
    }

    function move(el, direction, step) {
        switch (direction) {
            case directions.left: {
                if (target_pos.left < max_width) {
                    target_pos.left += step;
                    target.style.left = target_pos.left + "px";
                }
                break;
            }
            case directions.up: {
                if (target_pos.top < max_height) {
                    target_pos.top += step;
                    target.style.top = target_pos.top + "px";
                }
                break;
            }

            case directions.right: {
                if (target_pos.left > 0) {
                    target_pos.left -= step;
                    target.style.left = target_pos.left + "px";
                }
                break;
            }

            case directions.down: {
                if (target_pos.top > 0) {
                    target_pos.top -= step;
                    target.style.top = target_pos.top + "px";
                }
                break;
            }
        }
    }
};

// hamburger menu

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");
const navMenu = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        nav.classList.remove("active");
    })
);

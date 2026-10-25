// ===============================
// Typing Effect
// ===============================

const typingText = document.getElementById("typing-text");

const roles = [
    "Computer Science Engineer",
    "AI & ML Enthusiast",
    "Web Developer",
    "Problem Solver",
    "Data Science Learner"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent = currentRole.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingText.textContent = currentRole.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll", ()=>{

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,0.35)";

    }

    else{

        header.style.boxShadow="none";

    }

});


// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
".about-card,.skill,.project,.certificate,.timeline-item"
);

function reveal(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ===============================
// Back To Top Button
// ===============================

const button = document.createElement("button");

button.innerHTML = "↑";

button.id = "topBtn";

document.body.appendChild(button);

button.style.position="fixed";
button.style.right="25px";
button.style.bottom="25px";
button.style.width="50px";
button.style.height="50px";
button.style.border="none";
button.style.borderRadius="50%";
button.style.background="#38bdf8";
button.style.color="white";
button.style.fontSize="20px";
button.style.cursor="pointer";
button.style.display="none";
button.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        button.style.display="block";

    }

    else{

        button.style.display="none";

    }

});

button.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// Footer Year
// ===============================

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    "© " +
    new Date().getFullYear() +
    " Arzoo Thind | All Rights Reserved";

}
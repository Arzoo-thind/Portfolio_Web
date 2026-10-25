// ======================================
// PROJECT FILTERING
// ======================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category.includes(category)
            ) {

                card.style.display = "block";

                card.style.animation = "fadeUp .6s";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});


// ======================================
// PROJECT SEARCH
// ======================================

const searchInput = document.getElementById("projectSearch");

if(searchInput){

searchInput.addEventListener("keyup", ()=>{

const value = searchInput.value.toLowerCase();

projectCards.forEach(card=>{

const title =
card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

}


// ======================================
// PROJECT HOVER
// ======================================

projectCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ======================================
// GITHUB BUTTON
// ======================================

document.querySelectorAll(".github-btn").forEach(button=>{

button.addEventListener("click",()=>{

window.open(button.dataset.link);

});

});


// ======================================
// LIVE DEMO BUTTON
// ======================================

document.querySelectorAll(".demo-btn").forEach(button=>{

button.addEventListener("click",()=>{

window.open(button.dataset.link);

});

});


// ======================================
// COUNT PROJECTS
// ======================================

const totalProjects=document.getElementById("totalProjects");

if(totalProjects){

totalProjects.innerHTML=projectCards.length;

}


// ======================================
// SCROLL ANIMATION
// ======================================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

projectCards.forEach(card=>{

observer.observe(card);

});
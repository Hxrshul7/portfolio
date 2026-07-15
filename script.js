const words = [
    "BCA Student",
    "Web Developer",
    "C Programmer",
    "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function type(){

    if(charIndex < words[wordIndex].length){

        typingText.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex > 0){

        typingText.textContent =
        words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }

    else{

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

        setTimeout(type,500);

    }

}

type();

/* ===========================
   Scroll Reveal
=========================== */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    reveals.forEach((section)=>{

        const windowHeight = window.innerHeight;

        const sectionTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(sectionTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

revealSections();

/* ===========================
   Back To Top Button
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

    topBtn.classList.add("show");

}

else{

    topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ===========================
   Active Navbar
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach((section)=>{

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link)=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
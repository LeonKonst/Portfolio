// Info that will be displayed in the webpage

const personalInfo = {
    name:"Konstantinos",
    surname:"Leontiadis",
    location:{country:"Denmark",
    city:"Copenhagen",},
}

const titles = [
    ["Chemical Engineer", "CM"],
    ["Polymer Scientist","PS"],
    ["Material Scientist", "MS"],
    ["Web developer", "WD"],
];


// get HTML elements to display the info above
const myname = document.getElementById("name");
const mylocation = document.getElementById("location");
const mytitles = document.getElementById("titles");
const aboutme = document.getElementById("aboutme");

// Display info in the webpage

myname.innerText = `My name is ${personalInfo.name} ${personalInfo.surname}`;
mytitles.innerText = `I am a `
mylocation.innerHTML = `<a href="https://maps.app.goo.gl/mYKjR7nUGG9D9bMC6"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    // <g id="SVGRepo_bgCarrier" stroke-width="0">
    // </g>
    // <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
    // </g>
    // <g id="SVGRepo_iconCarrier"> 
        // <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        // </path>
        // <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        // </path>
    // </g>
// </svg>
${personalInfo.location.city}, ${personalInfo.location.country}
</a>`;

//about me paragraph
aboutme.innerText = "I am ";

titles.map((title)=>{
    mytitles.innerHTML += `<button class="title-tags" id="${title[1]}"> ${title[0]}</button>`;
})

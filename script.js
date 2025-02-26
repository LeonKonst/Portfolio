// Info that will be displayed in the webpage

const personalInfo = {
    name:"Konstantinos",
    surname:"Leontiadis",
    location:{country:"Denmark",
    city:"Copenhagen",},
    email:"le.kostas93@gmail.com",
    phonenumber:{prefix:"+45",
        number:"11 22 33 44",
    },
    linkedin:{profilelink:"https://www.linkedin.com/in/konleon/",
        name:"Konstantinos Leontiadis, Ph.D.",
    },
    github:{profilelink:"https://github.com/LeonKonst",
        name:"LeonKonst",
    },

}

const titles = [
    ["Chemical Engineer", "CM"],
    ["Polymer Scientist","PS"],
    ["Material Scientist", "MS"],
    ["Web developer", "WD"],
];


//publications

publications = [
    {artOrProc:"Article",
    title:"Solubility of CO<sub>2</sub> in 3-amino-1-propanol and in N-methyldiethanolamine aqueous solutions: Experimental investigation and correlation using the CPA equation of state",
    journal : "Fluid Phase Equilibria",
    volume : 500,
    issue: "",
    pages : "112254",
    year : 2019,
    doi :"https://doi.org/10.1016/j.fluid.2019.112254",
    url : "https://www.sciencedirect.com/science/article/pii/S0378381219303073",
    author : [["Konstantinos","Leontiadis"],
         ["Evangelos", "Tzimpilis"],
         ["Dimitra", "Aslanidou"], 
         ["Ioannis", "Tsivintzelis"]],
    titleTags:["CM"],
    keywords:["CO<sub>2</sub> capture", "Alkanolamines"],
    },
    
    {artOrProc:"Article",
        title:"Surface Response Analysis for the Optimization of Mechanical and Thermal Properties of Polypropylene Composite Drawn Fibers with Talc and Carbon Nanotubes",
        journal : "Polymers",
        volume : 14,
        issue: 7,
        pages : "1329",
        year : 2022,
        doi :"https://doi.org/10.3390/polym14071329",
        url : "https://www.mdpi.com/2073-4360/14/7/1329",
        author : [["Konstantinos","Leontiadis"],
             ["Costas", "Tsioptsias"],
             ["Stavros", "Messaritakis"], 
             ["Aikaterini", "Terzaki"],
             ["Panagiotis", "Xidas"],
             ["Kyriakos", "Mystikos"],
             ["Evangelos", "Tzimpilis"],
             ["Ioannis", "Tsivintzelis"]],
        titleTags:["CM","MS","PS"],
        keywords:["Polymer Composites", "Polypropylene"],
    },

    {artOrProc:"Article",
        title:"Optimization of Thermal and Mechanical Properties of Polypropylene-Wollastonite Composite Drawn Fibers Based on Surface Response Analysis",
        journal : "Polymers",
        volume : 14,
        issue: 5,
        pages : "924",
        year : 2022,
        doi :"https://doi.org/10.3390/polym14050924",
        url : "https://www.mdpi.com/2073-4360/14/5/924",
        author : [["Konstantinos","Leontiadis"],
             ["Costas", "Tsioptsias"],
             ["Stavros", "Messaritakis"], 
             ["Aikaterini", "Terzaki"],
             ["Panagiotis", "Xidas"],
             ["Kyriakos", "Mystikos"],
             ["Evangelos", "Tzimpilis"],
             ["Ioannis", "Tsivintzelis"]],
        titleTags:["CM","MS","PS"],
        keywords:["Polymer Composites", "DoE"],
    },

    {artOrProc:"Article",
        title:"Effect of the Filler Modification on the Thermal and Mechanical Properties of Composite Polypropylene/Wollastonite Drawn Fibers",
        journal : "Polymers",
        volume : 15,
        issue: 14,
        pages : "2986",
        year : 2023,
        doi :"https://doi.org/10.3390/polym15142986",
        url : "https://www.mdpi.com/2073-4360/15/14/2986",
        author : [["Konstantinos","Leontiadis"],
             ["Dimitris", "Achilias"],
             ["Ioannis", "Tsivintzelis"]],
        titleTags:["CM","MS","PS"],
        keywords:["Polymer Composites", "Wollastonite"],
    },
    
    {artOrProc:"Article",
        title:"Effect of an Antioxidant and a Compatibilizer on the Mechanical Properties of Virgin and Thermally Aged Polypropylene Drawn Fibers",
        journal : "Textiles",
        volume : 2,
        issue: 3,
        pages : "499-510",
        year : 2022,
        doi :"https://doi.org/10.3390/textiles2030028",
        url : "https://www.mdpi.com/2673-7248/2/3/28",
        author : [["Costas","Tsioptsias"],
            ["Georgia", "Gkouzouma"],
            ["Konstantinos", "Leontiadis"],
             ["Ioannis", "Tsivintzelis"]],
        titleTags:["CM","MS","PS"],
        keywords:["Polymer Composites", "Aging"],
    },

    {artOrProc:"Article",
        title:"Properties Optimization of Polypropylene/Montmorillonite Nanocomposite Drawn Fibers",
        journal : "Nanomaterials",
        volume : 14,
        issue: 2,
        pages : "223",
        year : 2024,
        doi :"https://doi.org/10.3390/nano14020223",
        url : "https://www.mdpi.com/2079-4991/14/2/223",
        author : [["Konstantinos","Leontiadis"],
            ["Katerina", "Theodoratou"],
            ["Costas", "Tsioptsias"],
             ["Ioannis", "Tsivintzelis"]],
        titleTags:["CM","MS","PS"],
        keywords:["Polymer Composites", "Aging"],
        abstract:"In this study, the mechanical properties and thermal stability of composite polypropylene (PP) drawn fibers with two different organically modified montmorillonites were experimentally investigated and optimized using a response surface methodology. Specifically, the Box-Behnken Design of Experiments method was used in order to investigate the effect of the filler content, the compatibilizer content, and the drawing temperature on the tensile strength and the onset decomposition temperature of the PP composite drawn fibers. The materials were characterized by tensile tests, thermogravimetry, and X-ray diffraction. Two types of composites were investigated with the only difference being the type of filler, namely, Cloisite&reg; 10A or Cloisite&reg; 15A. In both cases, statistically significant models were obtained regarding the effect of design variables on tensile strength, while poor significance was observed for the onset decomposition temperature. Nanocomposite fibers with tensile strength up to 540 MPa were obtained. Among the design variables, the drawing temperature exhibited the most notable effect on tensile strength, while the effect of both clays was not significant."
    },
        
    //     @Article{Tsioptsias2024,
    //     AUTHOR = {Tsioptsias, Costas and Leontiadis, Konstantinos and Ntampou, Xanthi and Tsivintzelis, Ioannis},
    //     TITLE = {Modification of Talc and Mechanical Properties of Polypropylene-Modified Talc Composite Drawn Fibers},
    //     JOURNAL = {Journal of Composites Science},
    //     VOLUME = {8},
    //     YEAR = {2024},
    //     NUMBER = {3},
    //     ARTICLE-NUMBER = {91},
    //     URL = {https://www.mdpi.com/2504-477X/8/3/91},
    //     ISSN = {2504-477X},
    //     %ABSTRACT = {A large amount of the polypropylene (PP) produced worldwide is used in the form of fibers. In this work, a new modification route for talc and PP is investigated, which is based on the in situ polymerization of a silane–siloxane monomer mixture on the surface of talc particles or PP pellets, respectively. The obtained modified talc and PP samples were used for the development of PP-talc composite drawn fibers. Tensile tests, thermogravimetry (TGA), and X-ray diffraction (XRD) were used for the characterization of the materials. It was observed that such a modification procedure resulted in the exfoliation of some talc particles. Enhanced tensile strength was observed for composite drawn fibers of a low talc content (1% with respect to PP) and a low modifier content (2% with respect to talc), while co-aggregation of talc and silicone may occur at high silicone and talc contents, resulting in the inferior mechanical performance of the corresponding composites. It was concluded that the produced silicone polymer simultaneously acts as a modifier, antioxidant, and compatibilizer. The proposed modification route is promising and should be further optimized.},
    //     DOI = {10.3390/jcs8030091}
    //     }
        
    //     @article{KONTOS2023113800,
    //     title = {CO2 solubility in aqueous solutions of blended amines: Experimental data for mixtures with MDEA, AMP and MPA and modeling with the modified Kent-Eisenberg model},
    //     journal = {Fluid Phase Equilibria},
    //     volume = {570},
    //     pages = {113800},
    //     year = {2023},
    //     issn = {0378-3812},
    //     doi = {https://doi.org/10.1016/j.fluid.2023.113800},
    //     url = {https://www.sciencedirect.com/science/article/pii/S037838122300081X},
    //     author = {Giannis Kontos and Konstantinos Leontiadis and Ioannis Tsivintzelis},
    //     keywords = {CO capture, Alkanolamines, Chemical absorption, Phase equilibrium, MDEA, AMP, MPA}
    //     }       
        
    //     @article{polym14020260,
    //     AUTHOR = {Tsioptsias, Costas and Leontiadis, Konstantinos and Messaritakis, Stavros and Terzaki, Aikaterini and Xidas, Panagiotis and Mystikos, Kyriakos and Tzimpilis, Evangelos and Tsivintzelis, Ioannis},
    //     TITLE = {Experimental Investigation of Polypropylene Composite Drawn Fibers with Talc, Wollastonite, Attapulgite and Single-Wall Carbon Nanotubes},
    //     JOURNAL = {Polymers},
    //     VOLUME = {14},
    //     YEAR = {2022},
    //     NUMBER = {2},
    //     ARTICLE-NUMBER = {260},
    //     URL = {https://www.mdpi.com/2073-4360/14/2/260},
    //     PubMedID = {35054667},
    //     ISSN = {2073-4360}
    //     }
        
    //     @article{Tsioptsias2021b,
    //     author = {C Tsioptsias and K Leontiadis and E Tzimpilis and I Tsivintzelis},
    //     title ={Polypropylene nanocomposite fibers: A review of current trends and new developments},
    //     journal = {Journal of Plastic Film \& Sheeting},
    //     volume = {37},
    //     number = {3},
    //     pages = {283-311},
    //     year = {2021},
    //     doi = {10.1177/8756087920972146},
    //     URL = {https://doi.org/10.1177/8756087920972146},
    //     eprint = {https://doi.org/10.1177/8756087920972146}
    //     }
                        
    //     @INPROCEEDINGS{Leontiadis2022,
    //       author = {Leontiadis, Konstantinos and Tsioptsias, Costas and Messaritakis, Stavros and Terzaki, Aikaterini and Xidas, Panagiotis and Mystikos, Kyriakos and Tzimpilis, Evangelos and Tsivintzelis, Ioannis},
    //       title = {\emph{Optimization of polypropylene-wollastonite nanocomposite drawn
    //     fibers through response surface methodology}},
    //       booktitle = {13th Panhellenic Scientific conference of Chemical
    //     Engineering},
    //       year = {2022},
    //       address = {Patra, Greece}
    //     }
        
    //     @INPROCEEDINGS{Tsioptsias2022,
    //     author = {Tsioptsias, Costas and Leontiadis, Konstantinos and Messaritakis, Stavros and Terzaki, Aikaterini and Xidas, Panagiotis and Mystikos, Kyriakos and Tzimpilis, Evangelos and Tsivintzelis, Ioannis},
    //     title = {\emph{Development and characterization of composite drawn polypropylene fibers}},
    //     booktitle = {13th Panhellenic Scientific conference of Chemical Engineering},
    //     year = {2022},
    //     address = {Patra, Greece}
    //     }
        
    //     @INPROCEEDINGS{Tsioptsias2021,
    //       author = {Tsioptsias, Costas and Leontiadis, Konstantinos and Messaritakis, Stavros and Terzaki, Aikaterini and Xidas, Panagiotis and Mystikos, Kyriakos and Tzimpilis, Evangelos and Tsivintzelis, Ioannis},
    //       title = {\emph{Nanocomposite polypropylene drawn fibers with various inorganic fillers}},
    //     booktitle = {13th Hellenic Polymer Society International Conference},
    //       year = {2021},
    //       address = {Virtual Event}
    //     }
        
    //     @INPROCEEDINGS{Leontiadis2021,
    //       author = {Leontiadis, Konstantinos and Tsioptsias, Costas  and Tzimpilis, Evangelos and  Karatasos Kostas and Tsivintzelis, Ioannis},
    //       title = {\emph{Nanocomposite polypropylene drawn fibers with high tensile strength}},
    //     booktitle = {18th International Conference on Nanosciences \&
    //     Nanotechnologies (NN21)},
    //       year = {2021},
    //       address = {Thessaloniki, Greece}
    //     }
        
    //     @INPROCEEDINGS{Leontiadis2021b,
    //       author = {Leontiadis, Konstantinos and Tsioptsias, Costas  and Tzimpilis, Evangelos and Tsivintzelis, Ioannis},
    //       title = {\emph{Development of nanocomposite polypropylene-wollastonite fibers}},
    //     booktitle = {1st Online
    //     Conference for new scientists “Mineral resources- Environment-Chemical Engineering”},
    //       year = {2021},
    //       address = {Kozani, Greece}
    //     }
        
    //     @INPROCEEDINGS{Kontos2019,
    //       author = {Kontos, Giannis and Leontiadis, Konstantinos and Tzimpilis, Evangelos and Tsivintzelis, Ioannis},
    //       title = {\emph{Experimental definition of CO2 solubility in aqueous alkanolamine
    //     solutions}},
    //     booktitle = {12th Panhellenic Scientific conference of Chemical
    //     Engineering},
    //       year = {2019},
    //       address = {Athens, Greece}
    //     }
        
        

           
];




// get HTML elements to display the info above
const myname = document.getElementById("name");
const mylocation = document.getElementById("location");
const mytitles = document.getElementById("titles");
const mylinkedin = document.getElementById("linkedin");
const mygithub = document.getElementById("github");
const aboutme = document.getElementById("aboutme");
const track = document.getElementById("carousel-track");

// Display info in the webpage

myname.innerText = `My name is ${personalInfo.name} ${personalInfo.surname}`;
mytitles.innerText = `I am a `;


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

mylinkedin.innerHTML = `<a href="${personalInfo.linkedin.profilelink}">
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0">
                            </g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                            </g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#000000">
                                </path> 
                            </g>
                        </svg>
${personalInfo.linkedin.name}
</a>`;

mygithub.innerHTML = `<a href="${personalInfo.github.profilelink}">
<svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0">
                            </g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                            </g>
                            <g id="SVGRepo_iconCarrier">
                                <title>
                                    github [#142]
                                </title>
                                <desc>
                                    Created with Sketch.
                                </desc>
                                <defs>
                                </defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
                                        <g id="icons" transform="translate(56.000000, 160.000000)"> 
                                        <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                                        </path> 
                                        </g> 
                                    </g> 
                                </g> 
                            </g>
                        </svg>
${personalInfo.github.name}
</a>`;

publications.forEach(element => {
    track.innerHTML += `
    <button class="publication">
        <p>${element.artOrProc}</p>
        <h4>${element.title}</h4>
    </button>
    <div class="panel">
        <a href="${element.url}">Link</a>
    </div>
    `;
});


//about me paragraph
aboutme.innerText = "Lorem";

titles.map((title)=>{
    mytitles.innerHTML += `<button class="title-tags" id="${title[1]}"> ${title[0]}</button>`;
})


function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}



const currentYear = new Date().getFullYear();
            // Insert the current year into the footer
document.getElementById('current-year').textContent = currentYear;

// TODO
// -from at the end of the page. 
// - Na valo ta papers. 
// - Na skefto se poia tha anoigei extra selida sta deksia kai se poia oxi 
// - na valo se kapoia auto to parathiro poy anaptisete. 
// - Otan einai mikro to platos tis othonis na dimourgeite clickable menu me ta sections to opoio kai auto na akolouthei me to scroll 



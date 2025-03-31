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
    ["Chemical Engineer", "CE"],
    ["Polymer Scientist","PS"],
    ["Material Scientist", "MS"],
    ["Developer//Coder", "DC"],
];

//aboutme 

const aboutMeHtml = `
<h2>About me</h2>
<p>I'm a multidisciplinary researcher and engineer with a strong background in chemical engineering, composite materials, and coatings technology. 
Currently, I work as an R&D Scientist at Hempel A/S, where I focus on developing innovative solutions in materials science.</p>
<p> My academic journey includes a PhD in the development and characterization of (micro and nano) composite polymeric materials, complemented by hands-on experience in research, teaching, and statistical analysis (Design of Experiments, ANOVA etc.)
Over the years, I've developed expertise in material characterization (DSC, DMA, TGA, Tensile testing, XRD etc.)</p> 
<p>Beyond my scientific career, I have a passion for technology and problem-solving.
I’ve worked as a freelance sound engineer and lighting technician, blending technical knowledge with creativity.
Recently, I’ve taken on a new challenge—teaching myself web development.
I’m currently building my first project: <strong>this very portfolio!</strong></p>`

//Work experience

const workExperience = [
    {
        id:1,
        company:"Hempel A/S",
        link:"https://www.hempel.com/",
        position:"Scientist 1",
        startYear:2024,
        endYear:"Present",
        description:`<p>Wind Blades in the R&D department.</p>
        <ul>
            <li>Exploring materials with better performance against rain erosion.</li>
            <li>Cross-segment assistance with data analysis.</li>
        </ul>`,
        titleTags:["CE", "PS", "MS"],
    },
    {
        id:2,
        company:"Hempel A/S",
        link:"https://www.hempel.com/",
        position:"Scientist 1",
        startYear:2023,
        endYear:2024,
        description:`<p>Technology Centers in the R&D department.</p>
        <ul>
            <li>Exploring sustainable epoxies. </li>
            <li>Responsible for design of experiments (statistical approach of experimentation).</li>
        </ul>`,
        titleTags:["CE", "PS", "MS"],
    },
    {
        id:3,
        company:"AUTH",
        link:"https://cheng.auth.gr/en/",
        position:"Teaching Assistant",
        startYear:2019,
        endYear:2023,
        description:"<p> Teaching assistant for compulsory laboratory course “Physical Chemistry II” as a PhD student.</p>",
        titleTags:["CE"],
    },
    {
        id:4,
        company:"AUTH",
        link:"https://cheng.auth.gr/en/",
        position:"Researcher",
        startYear:2019,
        endYear:2022,
        description:"<p>Part of research group (as PhD student) for the project “NAno-Reinforced Polypropylene multifilament Yarns” (NAPRY) within operational programme “Competitiveness, Enterpreneurship and Innovation 2014-2020” and special act «AQUACULTURE» - «INDUSTRIAL MATERIALS» - «OPEN INNOVATION IN CULTURE».</p>",
        titleTags:["CE", "PS", "MS"],
    },
];

//Education

const education = [
    {
        id:1,
        institution:"AUTH",
        city:"Thessaloniki",
        country:"Greece",
        degree:"Integrated Master",
        startYear:2011,
        endYear:2017,
        field:"Chemical Engineering",
        description:"Thesis title: Experimental study of CO<sub>2</sub> solubility in aqueous alkanolamine solutions",
        titleTags:["CE", "PS", "MS"],
    },
    {
        id:2,
        institution:"AUTH",
        city:"Thessaloniki",
        country:"Greece",
        degree:"Master",
        startYear:2020,
        endYear:2022,
        field:"Processes and Technology of Advanced Materials",
        description:"Thesis title: Mechanical and thermal properties of composite polypropylene / modified wollastonite fibers",
        titleTags:["CE", "PS", "MS"],
    },
    {
        id:3,
        institution:"AUTH",
        city:"Thessaloniki",
        country:"Greece",
        degree:"PhD",
        startYear:2019,
        endYear:2024,
        field:"Chemical Engineering",
        description:"Thesis title: Development, characterization and optimization of  the properties of micro- and nano- composite drawn polypropylene fibers.",
        titleTags:["CE", "PS", "MS"],
    },
    {
        id:4,
        institution:"AUTH",
        city:"Thessaloniki",
        country:"Greece",
        degree:"Integrated Master",
        startYear:2022,
        endYear:"Present",
        field:"Electrical and Computer Engineering",
        description:"Suspended since December 2023",
        titleTags:["DC"],
    },
];

//publications

const publications = [
    {
        id:1,
        artOrProc:"Article",
        title:"Solubility of CO<sub>2</sub> in 3-amino-1-propanol and in N-methyldiethanolamine aqueous solutions: Experimental investigation and correlation using the CPA equation of state",
        journal : "Fluid Phase Equilibria",
        volume : 500,
        issue: "",
        pages : "112254",
        year : 2019,
        doi :"https://doi.org/10.1016/j.fluid.2019.112254",
        url : "https://www.sciencedirect.com/science/article/pii/S0378381219303073",
        authors : [["Konstantinos","Leontiadis"],
            ["Evangelos", "Tzimpilis"],
            ["Dimitra", "Aslanidou"], 
            ["Ioannis", "Tsivintzelis"]],
        titleTags:["CE"],
        keywords:["CO<sub>2</sub> capture", "Alkanolamines"],
        abstract:"The solubility of CO<sub>2</sub> in 1.3M and 2M aqueous N-methyldiethanolamine (MDEA) and 3-amino-1-propanol (MPA) solutions was experimentally measured at 298, 313, 323 and 333 K, using a pressure decay method. Since only limited experimental data exist in literature for MPA aqueous systems, the results of this study were compared with literature data mainly for 2M MDEA solutions, showing satisfactory agreement. The obtained new experimental data were used to parameterize the Cubic-plus-Association (CPA) equation of state using a pseudo chemical reaction approach, i.e. to account for chemical interactions as very strong specific intermolecular interactions, which is a crude approximation, but is necessary for applying equation of state models. It was found that the model satisfactorily describes the experimental data using six or four binary parameters for the CO<sub>2</sub>-MPA or CO<sub>2</sub>-MDEA interactions, respectively, which, however, are less than the number of adjustable parameters in similar literature models.", 
        },
        
    {
        id:2,
        artOrProc:"Article",
        title:"Surface Response Analysis for the Optimization of Mechanical and Thermal Properties of Polypropylene Composite Drawn Fibers with Talc and Carbon Nanotubes",
        journal : "Polymers",
        volume : 14,
        issue: 7,
        pages : "1329",
        year : 2022,
        doi :"https://doi.org/10.3390/polym14071329",
        url : "https://www.mdpi.com/2073-4360/14/7/1329",
        authors : [["Konstantinos","Leontiadis"],
             ["Costas", "Tsioptsias"],
             ["Stavros", "Messaritakis"], 
             ["Aikaterini", "Terzaki"],
             ["Panagiotis", "Xidas"],
             ["Kyriakos", "Mystikos"],
             ["Evangelos", "Tzimpilis"],
             ["Ioannis", "Tsivintzelis"]],
        titleTags:["CE","MS","PS"],
        keywords:["Polymer Composites", "DoE"],
        abstract:"A large portion of the produced Polypropylene (PP) is used in the form of fibers. In this industrially oriented study, the development of composite PP drawn fibers was investigated. Two types of fillers were used (ultra-fine talc and single-wall carbon nanotubes). Optimization of the thermal and mechanical properties of the produced composite drawn fibers was performed, based on the Box-Behnken design of experiments method (surface response analysis). The effect of additives, other than the filler, but typical in industrial applications, such as an antioxidant and a common compatibilizer, was investigated. The drawing ratio, the filler, and the compatibilizer or the antioxidant content were selected as design variables, whereas the tensile strength and the onset decomposition temperature were set as response variables. Fibers with very high tensile strength (up to 806 MPa) were obtained. The results revealed that the maximization of both the tensile strength and the thermal stability was not feasible for composites with talc due to multiple interactions among the used additives (antioxidant, compatibilizer, and filler). Additionally, it was found that the addition of talc in the studied particle size improved the mechanical strength of fibers only if low drawing ratios were used. On the other hand, the optimization targeting maximization of both tensile strength and thermal stability was feasible in the case of SWCNT composite fibers. It was found that the addition of carbon nanotubes improved the tensile strength; however, such improvement was rather small compared with the tremendous increase of tensile strength due to drawing.",
    },

    {
        id:3,
        artOrProc:"Article",
        title:"Optimization of Thermal and Mechanical Properties of Polypropylene-Wollastonite Composite Drawn Fibers Based on Surface Response Analysis",
        journal : "Polymers",
        volume : 14,
        issue: 5,
        pages : "924",
        year : 2022,
        doi :"https://doi.org/10.3390/polym14050924",
        url : "https://www.mdpi.com/2073-4360/14/5/924",
        authors : [["Konstantinos","Leontiadis"],
             ["Costas", "Tsioptsias"],
             ["Stavros", "Messaritakis"], 
             ["Aikaterini", "Terzaki"],
             ["Panagiotis", "Xidas"],
             ["Kyriakos", "Mystikos"],
             ["Evangelos", "Tzimpilis"],
             ["Ioannis", "Tsivintzelis"]],
        titleTags:["CE","MS","PS"],
        keywords:["Polymer Composites", "DoE"],
        abstract:"The thermal and mechanical properties of polypropylene-wollastonite composite drawn fibers were optimized via experiments selected with the Box-Behnken approach. The drawing ratio, the filler and the compatibilizer content were chosen as design variables, while the tensile strength, the melting enthalpy and the onset decomposition temperature were set as response variables. Drawn fibers with tensile strength up to 535 MPa were obtained. Results revealed that the drawing ratio is the most important factor for the enhancement of tensile strength, followed by the filler content. All the design variables slightly affected the melting temperature and the crystallinity of the matrix. Also, it was found that the addition of polypropylene grafted with maleic anhydride as compatibilizer has a multiple effect on the final properties, i.e., it induces the dispersion of both the antioxidant and the filler, tending to increase thermal stability and tensile strength, while, on the same time, deteriorates mechanical and thermal properties due to its lower molecular weight and thermal stability. Such behavior does not allow for simultaneous maximization of thermal stability and tensile strength. Optimization based on a compromise, i.e., targeting maximization of tensile strength and onset decomposition temperature higher than 300 °C, yields high desirability values and predictions in excellent agreement with verification experiments."
    },

    {
        id:4,
        artOrProc:"Article",
        title:"Effect of the Filler Modification on the Thermal and Mechanical Properties of Composite Polypropylene/Wollastonite Drawn Fibers",
        journal : "Polymers",
        volume : 15,
        issue: 14,
        pages : "2986",
        year : 2023,
        doi :"https://doi.org/10.3390/polym15142986",
        url : "https://www.mdpi.com/2073-4360/15/14/2986",
        authors : [["Konstantinos","Leontiadis"],
             ["Dimitris", "Achilias"],
             ["Ioannis", "Tsivintzelis"]],
        titleTags:["CE","MS","PS"],
        keywords:["Polymer Composites", "Filler modification"],
        abstract:"Polypropylene (PP) is one of the most commercially used thermoplastics, while a significant amount of PP is used in the form of fibers. In this study, the effects of modification of the filler on the thermal and mechanical properties of composite polypropylene/wollastonite drawn fibers were investigated. In this direction, the surface modification of wollastonite with various organic acids, such as myristic, maleic, malonic glutaric, pimelic, and suberic acid, and the use of two solvents were studied. The surface-modified wollastonite particles were used to produce composite polypropylene drawn fibers. The modification efficiency was found to be slightly better when a non-polar solvent (carbon tetrachloride) was used instead of a polar one (ethanol). FTIR experiments showed that myristic, maleic, malonic, and pimelic acid can strongly interact with wollastonite’s surface. However, the mechanical strength of the composite fibers was not increased compared to that of the neat PP fibers, suggesting inadequate interactions between PP and wollastonite particles. Furthermore, it was observed that the drawing process increased around 10% the crystallinity of all samples. Wollastonite modified with malonic acid acted as a nucleating agent for β-crystals. The onset decomposition temperature increased by 5–10 °C for all samples containing 2% wollastonite, either modified or not. The suggested modifications of wollastonite might be more suitable for less hydrophobic polymers.",
    },
    
    {
        id:5,
        artOrProc:"Article",
        title:"Effect of an Antioxidant and a Compatibilizer on the Mechanical Properties of Virgin and Thermally Aged Polypropylene Drawn Fibers",
        journal : "Textiles",
        volume : 2,
        issue: 3,
        pages : "499-510",
        year : 2022,
        doi :"https://doi.org/10.3390/textiles2030028",
        url : "https://www.mdpi.com/2673-7248/2/3/28",
        authors : [["Costas","Tsioptsias"],
            ["Georgia", "Gkouzouma"],
            ["Konstantinos", "Leontiadis"],
             ["Ioannis", "Tsivintzelis"]],
        titleTags:["CE","MS","PS"],
        keywords:["Polymer Composites", "Aging"],
        abstract:"Polypropylene (PP), like all polymers, is susceptible to various forms of aging. Drawn fibers exhibit increased mechanical properties; however, the drawing results in non-equilibrium (decreased entropy) structures, due to the orientation of the polymer chains. Consequently, the drawn fibers are susceptible to an additional form of physical aging. In this work, the effect of common industrial additives on the mechanical strength of virgin and thermally aged PP fibers was studied. Thermogravimetry and tensile strength tests were used to characterize the drawn fibers, before and after physical thermal aging. PP drawn at 120 °C and at a drawing ratio of 7 exhibited a tensile strength of 549 MPa, while the incorporation of an antioxidant and a compatibilizer lowered the tensile strength down to 449 MPA. This reduction was related to the constraint of chain alignment due to the low molecular weight and poor dispersion of the additives. Depending on the aging temperature, shrinking occurred to different extents in pure PP fibers, accompanied by a 6–7% reduction in tensile strength. The fibers with incorporated additives exhibited higher rate and degree of shrinking. Briefly, the incorporation of such additives in drawn PP resulted in the deterioration of the fibers’ mechanical tensile properties. Since such additives have an indisputable value for non-drawn samples and their usage is necessary for various reasons also in drawn samples, e.g., for their protection from chemical aging/decomposition, additives specific for drawn samples should be developed.",
    },

    {
        id:6,
        artOrProc:"Article",
        title:"Properties Optimization of Polypropylene/Montmorillonite Nanocomposite Drawn Fibers",
        journal : "Nanomaterials",
        volume : 14,
        issue: 2,
        pages : "223",
        year : 2024,
        doi :"https://doi.org/10.3390/nano14020223",
        url : "https://www.mdpi.com/2079-4991/14/2/223",
        authors : [["Konstantinos","Leontiadis"],
            ["Katerina", "Theodoratou"],
            ["Costas", "Tsioptsias"],
             ["Ioannis", "Tsivintzelis"]],
        titleTags:["CE","MS","PS"],
        keywords:["Polymer Composites", "DoE"],
        abstract:"In this study, the mechanical properties and thermal stability of composite polypropylene (PP) drawn fibers with two different organically modified montmorillonites were experimentally investigated and optimized using a response surface methodology. Specifically, the Box-Behnken Design of Experiments method was used in order to investigate the effect of the filler content, the compatibilizer content, and the drawing temperature on the tensile strength and the onset decomposition temperature of the PP composite drawn fibers. The materials were characterized by tensile tests, thermogravimetry, and X-ray diffraction. Two types of composites were investigated with the only difference being the type of filler, namely, Cloisite&reg; 10A or Cloisite&reg; 15A. In both cases, statistically significant models were obtained regarding the effect of design variables on tensile strength, while poor significance was observed for the onset decomposition temperature. Nanocomposite fibers with tensile strength up to 540 MPa were obtained. Among the design variables, the drawing temperature exhibited the most notable effect on tensile strength, while the effect of both clays was not significant."
    },

    {
        id:7,
        artOrProc:"Article",
        title:"Modification of Talc and Mechanical Properties of Polypropylene-Modified Talc Composite Drawn Fibers",
        journal : "Journal of Composites Science",
        volume : 8,
        issue: 3,
        pages : "91",
        year : 2024,
        doi :"https://doi.org/10.3390/jcs8030091",
        url : "https://www.mdpi.com/2504-477X/8/3/91",
        authors : [["Costas","Tsioptsias"],
            ["Konstantinos", "Leontiadis"],
            ["Xanthi", "Ntampou"],
             ["Ioannis", "Tsivintzelis"]],
        titleTags:["CE","MS","PS"],
        keywords:["Polymer Composites", "Filler modification"],
        abstract:"A large amount of the polypropylene (PP) produced worldwide is used in the form of fibers. In this work, a new modification route for talc and PP is investigated, which is based on the in situ polymerization of a silane–siloxane monomer mixture on the surface of talc particles or PP pellets, respectively. The obtained modified talc and PP samples were used for the development of PP-talc composite drawn fibers. Tensile tests, thermogravimetry (TGA), and X-ray diffraction (XRD) were used for the characterization of the materials. It was observed that such a modification procedure resulted in the exfoliation of some talc particles. Enhanced tensile strength was observed for composite drawn fibers of a low talc content (1% with respect to PP) and a low modifier content (2% with respect to talc), while co-aggregation of talc and silicone may occur at high silicone and talc contents, resulting in the inferior mechanical performance of the corresponding composites. It was concluded that the produced silicone polymer simultaneously acts as a modifier, antioxidant, and compatibilizer. The proposed modification route is promising and should be further optimized."
    },
      
    {
        id:8,
        artOrProc:"Article",
        title:"Experimental Investigation of Polypropylene Composite Drawn Fibers with Talc, Wollastonite, Attapulgite and Single-Wall Carbon Nanotubes",
        journal : "Polymers",
        volume : 14,
        issue: 2,
        pages : "260",
        year : 2022,
        doi :"https://www.mdpi.com/2073-4360/14/2/260",
        url : "https://www.mdpi.com/2073-4360/14/2/260",
        authors : [["Costas","Tsioptsias"],
            ["Konstantinos", "Leontiadis"],
            ["Stavros", "Messaritakis"], 
            ["Aikaterini", "Terzaki"],
            ["Panagiotis", "Xidas"],
            ["Kyriakos", "Mystikos"],
            ["Evangelos", "Tzimpilis"],
            ["Ioannis", "Tsivintzelis"]],
        titleTags:["CE","MS","PS"],
        keywords:["Polymer Composites", "Polypropylene"],
        abstract:"Isotactic polypropylene (PP) composite drawn fibers were prepared using melt extrusion and high-temperature solid-state drawing at a draw ratio of 7. Five different fillers were used as reinforcement agents (microtalc, ultrafine talc, wollastonite, attapulgite and single-wall carbon nanotubes). In all the prepared samples, antioxidant was added, while all samples were prepared with and without using PP grafted with maleic anhydride as compatibilizer. Material characterization was performed by tensile tests, differential scanning calorimetry, thermogravimetric analysis and Fourier transform infrared spectroscopy. Attapulgite composite fibers exhibited poor results in terms of tensile strength and thermal stability. The use of ultrafine talc particles yields better results, in terms of thermal stability and tensile strength, compared to microtalc. Better results were observed using needle-like fillers, such as wollastonite and single-wall carbon nanotubes, since, as was previously observed, high aspect ratio particles tend to align during the drawing process and, thus, contribute to a more symmetrical distribution of stresses. Competitive and synergistic effects were recognized to occur among the additives and fillers, such as the antioxidant effect being enhanced by the addition of the compatibilizer, while the antioxidant itself acts as a compatibilizing agent."
    },

    {
        id:9,
        artOrProc:"Article",
        title:"CO<sub>2</sub> solubility in aqueous solutions of blended amines: Experimental data for mixtures with MDEA, AMP and MPA and modeling with the modified Kent-Eisenberg model",
        journal : "Fluid Phase Equilibria",
        volume : 570,
        issue: 2,
        pages : "113800",
        year : 2023,
        doi :"https://doi.org/10.1016/j.fluid.2023.113800",
        url : "https://www.sciencedirect.com/science/article/pii/S037838122300081X",
        authors : [["Giannis","Kontos"],
            ["Konstantinos", "Leontiadis"],
            ["Ioannis", "Tsivintzelis"]],
        titleTags:["CE"],
        keywords:["CO<sub>2</sub> capture", "Alkanolamines"],
        abstract:"Recently, a vast quantity of new amine-based solvent systems, alternative to aqueous ethanolamine solutions, have been suggested for CO2 capture applications. In numerous cases amine blends are used, since a careful selection of the amine ratio may effectively alter the absorption capacity, the absorption kinetics and the regeneration efficiency. In this direction accurate experimental data are needed for screening applications, but most importantly for parameterizing and evaluating theoretical models used in design applications. In this work, new experimental data are presented for the CO2 solubility in aqueous solutions of amine blends containing N-methyldiethanolamine (MDEA), 2-amino-2-methyl-1-propanol (AMP) and 3-amino-1-propanol (MPA) at 298, 313, 323 and 333 K and pressures up to approximately 800 kPa. The modified Kent-Eisenberg model, parameterized using experimental data solely for single amine solutions, is subsequently applied to predict the CO2 absorption in blended amine solutions. Satisfactory model predictions are observed. The average absolute deviations from the experimental data of this study range between 2 and 5%."
    },     
      
    {   
        id:10,
        artOrProc:"Article",
        title:"Polypropylene nanocomposite fibers: A review of current trends and new developments",
        journal : "Journal of Plastic Film & Sheeting",
        volume : 37,
        issue: 3,
        pages : "283-311",
        year : 2021,
        doi :"https://doi.org/10.1177/8756087920972146",
        url : "https://journals.sagepub.com/doi/10.1177/8756087920972146",
        authors : [["Costas","Tsioptsias"],
            ["Konstantinos", "Leontiadis"],
            ["Evangelos", "Tzimpilis"],
            ["Ioannis", "Tsivintzelis"]],
        titleTags:["CE"],
        keywords:["Polymer Composites", "Review"],
        abstract:"In this review, traditional and novel techniques for producing micro- and nano- fibers are discussed and various nanofillers, their modifications and polypropylene (PP) functionalization routes are presented. Their influence on PP properties is discussed and new PP composite fiber applications are presented. This review reveals interesting conclusions, such as that in terms of mechanical reinforcement, there is no nano-filler that can improve tensile strength to the extent that it is improved by drawing. However, in some cases, composite drawn fibers are characterized by higher tensile strength than drawn neat PP. With some notable exceptions, the PP nanocomposites lack of “dramatic” properties improvement is mainly due to the non-polar nature of the hydrocarbon chain, which does not favor strong intermolecular interactions with most popular (mainly inorganic) nano-fillers. However, other properties such as electric conductivity, water contact angle and others can be effectively altered using various nanofillers in PP matrices."
    },         
];

//projects

const projects = [
    {
        name:"Spill The Beans",
        shortDescription:"Discord bot",
        longDescription:"Spill the Beans is a Discord bot that lets users send private messages to a dedicated server channel, with a configurable probability of revealing the sender’s name. It supports English and Greek and allows server admins to customize settings like anonymity probability, message cooldown, and relay channel via the Settings.py file. The bot requires no commands—users simply DM it, and messages are forwarded accordingly.",
        toolsUsed:["python","discord.py","fly.io"],
        imageUrl:"https://github.com/LeonKonst/Spill-The-Beans",
        projectLink:"",
        titleTags:["DC"],
    },
    {
        name:"PhD thesis template",
        shortDescription:"LaTeX template",
        longDescription:"This is a LaTeX template for PhD theses in the Chemical Engineering Department of Aristotle University of Thessaloniki. It is written in Greek and can also be adapted for theses at the bachelor’s and master’s levels, as well as for other departments. The template is officially published on the Chemical Engineering Department’s website for student use (https://cheng.auth.gr/phd/)",
        toolsUsed:["LaTeX","Overleaf"],
        imageUrl:"",
        projectLink:"https://www.overleaf.com/latex/templates/phd-template-cheng-auth/xfhzjtmhmdwk",
        titleTags:["DC"],
    },
    {
        name:"My Portfolio",
        shortDescription:"This exact webpage",
        longDescription:"",
        toolsUsed:["HTML","CSS","JS"],
        imageUrl:"",
        projectLink:"https://leonkonst.github.io/Portfolio",
        titleTags:["DC"],
    },
]



//Certifications

const certifications = [
    {
        id:1,
        issuingOrganization:"freeCodeCamp",
        organizationLink:"https://www.freecodecamp.org/",
        month:"February",
        year:"2025",
        credentialId:"leonkonst-jaads",
        credentialUrl:"https://freecodecamp.org/certification/LeonKonst/javascript-algorithms-and-data-structures-v8",
        title:"JavaScript Algorithms and Data Structures",
        titleTags:["DC"],
    },
    {
        id:2,
        issuingOrganization:"freeCodeCamp",
        organizationLink:"https://www.freecodecamp.org/",
        month:"February",
        year:"2025",
        credentialId:"leonkonst-jaads",
        credentialUrl:"https://freecodecamp.org/certification/LeonKonst/javascript-algorithms-and-data-structures-v8",
        title:"JavaScript Algorithms and Data Structures",
        titleTags:["DC"],
    },
    {
        id:3,
        issuingOrganization:"GreekLUG",
        organizationLink:"https://www.greeklug.gr",
        month:"May",
        year:"2023",
        credentialId:"",
        credentialUrl:"",
        title:"Git Course",
        titleTags:["DC"],
    },
    {
        id:4,
        issuingOrganization:"GreekLUG",
        organizationLink:"https://www.greeklug.gr",
        month:"May",
        year:"2023",
        credentialId:"",
        credentialUrl:"",
        title:"Python Course",
        titleTags:["DC"],
    },
    {
        id:5,
        issuingOrganization:"Encode Club",
        organizationLink:"https://www.encode.club/",
        month:"September",
        year:"2022",
        credentialId:"",
        credentialUrl:"https://opensea.io/assets/matic/0xdBf2138593aeC61d55d86E80b8ed86D7b9ba51F5/1686",
        title:"Solidity foundation Bootcamp",
        titleTags:["DC"],
    },
    {
        id:5,
        issuingOrganization:"Dassault Systèmes",
        organizationLink:"https://www.solidworks.com/",
        month:"May",
        year:"2012",
        credentialId:"C-NDN5HCN8ZV",
        credentialUrl:"",
        title:"SolidWorks Associate - Mechanical Design",
        titleTags:["CE","MS"],
    },
];


//other skills

const skiils = [
    {
        skillName:"Python",
    },
]


// get HTML elements to display the info above
const myname = document.getElementById("name");
const mytitles = document.getElementById("titles");

const mylocation = document.getElementById("location");
const mylinkedin = document.getElementById("linkedin");
const mygithub = document.getElementById("github");

const aboutme = document.getElementById("aboutme");

const workExpContainer = document.getElementById("work-experience");
const educationContainer = document.getElementById("education");
const publicationsContainer = document.getElementById("publications-container")

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const certificationContainer = document.getElementById("certificates")
let activeTitleFilters = []; // Track active filters globally


// Display info in the webpage
myname.innerText = `My name is ${personalInfo.name} ${personalInfo.surname}`;
mytitles.innerText = `I am a `;

//create the Title buttons
titles.map((title,i)=>{
    if(i === titles.length -1){
        mytitles.innerHTML += ` and a<button class="title-tags" data-active="on" id="${title[1]}"> ${title[0]}</button> `;
    }
    else{
        mytitles.innerHTML += `<button class="title-tags" data-active="on" id="${title[1]}"> ${title[0]}</button>`;
    }
})

mylocation.innerHTML = `<a target="_blank" href="https://maps.app.goo.gl/mYKjR7nUGG9D9bMC6"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

mylinkedin.innerHTML = `<a  target="_blank" href="${personalInfo.linkedin.profilelink}">
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

mygithub.innerHTML = `<a target="_blank" href="${personalInfo.github.profilelink}">
                        <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0">
                            </g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                            </g>
                            <g id="SVGRepo_iconCarrier">
                                <title>
                                    github [#142]
                                </title>
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


//about me paragraph
aboutme.innerHTML = aboutMeHtml;

const printWorkExperience = () => {
    workExperience.forEach((element,i) => {
        workExpContainer.innerHTML += `
        <div class="work-tab" data-tags="${element.titleTags.join(' ')}">
            <div class="work-info">
                <div class="work-position"> ${element.position} at</div>
                <div class="work-company"> <a target="_blank" href="${element.link}">${element.company}</a></div>
            </div>
            <div class="work-duration"> ${element.startYear} - ${element.endYear}</div>
            <div class="work-description"> ${element.description}</div>
            ${i !== workExperience.length - 1 ? '<hr class="work-hr">' : ''}
        </div>`
    });
};

printWorkExperience();

const printEducation = ()=> {
    education.forEach((element, i) => {
        educationContainer.innerHTML += `
        <div class="edu-tab" data-tags="${element.titleTags.join(' ')}">
            <div class="edu-duration"> ${element.startYear} - ${element.endYear}</div>
            <div class="edu-field">${element.field} - ${element.institution}</div>
            <div class="edu-degree"> ${element.degree}</div>
            <div class="edu-description"> ${element.description}</div>
        ${i !== education.length - 1 ? '<hr class="edu-hr">' : ''}
        </div>`
    });
};

printEducation();

const printPublications = () => {
    // Αuthors display logic
    const sortedPublications = publications.sort((a, b) => b.year - a.year);;
    sortedPublications.forEach((element, i) => {
        let authorsDisplayed = "";
        const authorLength = element.authors.length - 1;
        element.authors.forEach((author,index)=>{  
            if(index < 2){
                authorsDisplayed += `${author[0].charAt(0)}. ${author[1]}, `;
            } else if (index === 2) {
                if(index === authorLength){
                    authorsDisplayed += `and ${author[0].charAt(0)}. ${author[1]}.`;
                }
                else{
                    authorsDisplayed += `${author[0].charAt(0)}. ${author[1]}. et al.`;
                }
            } 
        });

        let keywords = "";
        element.keywords.forEach(keyword =>{
            keywords += `<div class="pub-keyword">${keyword}</div>`
        })

    
        publicationsContainer.innerHTML += `
        <div class="pub-tab" data-tags="${element.titleTags.join(' ')}">
            <div class="pub-header"><div class="pub-year">${element.year}</div><div class="pub-journal">${element.journal}</div></div>
            <hr>
            <div class="pub-title"> ${element.title}</div>
            <div class="pub-authors"> ${authorsDisplayed}</div>
            <div class="pub-keywords">Keywords: ${keywords}</div>
            <p class="pub-abstract-tooltip hidden" >
            <strong>Abstract: </strong>${element.abstract.split(" ",50).join(" ")}...</p>
            <a class="pub-btn-tooltip hidden" target="_blank" href="${element.url}">Link</a>
        </div>`
    });    

    document.querySelectorAll('.pub-tab').forEach(tab => {
        const abstractTooltip = tab.querySelector('.pub-abstract-tooltip');
        const btnTooltip = tab.querySelector('.pub-btn-tooltip');

        tab.addEventListener('mousemove', (e) => {
            // Position both tooltips near the cursor
            abstractTooltip.style.left = `${e.clientX + 15}px`;
            abstractTooltip.style.top = `${e.clientY + 15}px`;
            btnTooltip.style.left = `${e.clientX - 15}px`;
            btnTooltip.style.top = `${e.clientY -15}px`; // Offset below abstract
        });

        tab.addEventListener('mouseenter', () => {
            abstractTooltip.classList.remove('hidden');
            btnTooltip.classList.remove('hidden');
        });

        tab.addEventListener('mouseleave', () => {
            abstractTooltip.classList.add('hidden');
            btnTooltip.classList.add('hidden');
        });
    });
};


printPublications();

//printProjects

const printCertifications = ()=> {
    certifications.forEach((element,i) => {
        certificationContainer.innerHTML += `
        <div class="certification-tab" data-tags="${element.titleTags.join(' ')}">
            <div class="certification-info">
                <div class="certification-title"> ${element.title}</div>
                <div class="certification-company">by <a target="_blank" href="${element.organizationLink}">${element.issuingOrganization}</a></div>
                <div class="certification-date"> ${element.month} of ${element.year}</div>
            </div>
            ${i !== certifications.length - 1 ? '<hr class="certification-hr">' : ''}
        </div>`
    });
};

printCertifications();



//printOthers


//footer year generation
const currentYear = new Date().getFullYear();
            // Insert the current year into the footer
document.getElementById('current-year').textContent = currentYear;


const titlesDispaly = (e) => {
    if (e.target.classList.contains("title-tags")) {
        const titleBtn = e.target;
        
        // Toggle button state
        const isActive = titleBtn.getAttribute("data-active") === "on";
        titleBtn.setAttribute("data-active", isActive ? "off" : "on");
        
        // Update global filters
        activeTitleFilters = Array.from(document.querySelectorAll('.title-tags[data-active="on"]'))
                               .map(btn => btn.id);
        
        // Apply filtering to existing DOM
        const allTabs = document.querySelectorAll('[class*="-tab"]');
        allTabs.forEach(tab => {
            const tabTags = tab.getAttribute('data-tags').split(' ').filter(Boolean);
            const shouldShow = activeTitleFilters.length === 0 || 
                            tabTags.some(tag => activeTitleFilters.includes(tag));
            tab.style.display = shouldShow ? "block" : "none";
        });
    }
}



mytitles.addEventListener("click", (e) => {
    titlesDispaly(e)
});


document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        const menu = button.nextElementSibling; // The dropdown menu

        // Ensure menu is hidden initially
        menu.style.display = "none";

        // Set ARIA attributes
        button.setAttribute("aria-haspopup", "true");
        button.setAttribute("aria-expanded", "false");
        menu.setAttribute("tabindex", "0");

        button.addEventListener("mouseover", function (event) {
            event.stopPropagation(); // Prevent click from reaching document listener
            toggleDropdown(button, menu);
        });

        // Close dropdown when clicking outside
        document.addEventListener("mouseout", function (event) {
            if (!button.contains(event.target) && !menu.contains(event.target)) {
                closeDropdown(button, menu);
            }
        });

        // Close dropdown with ESC key
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeDropdown(button, menu);
            }
        });

        // Allow keyboard navigation
        menu.addEventListener("keydown", function (event) {
            if (event.key === "Tab" && !menu.contains(event.target)) {
                closeDropdown(button, menu);
            }
        });
    });

    function toggleDropdown(button, menu) {
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        if (isExpanded) {
            closeDropdown(button, menu);
        } else {
            openDropdown(button, menu);
        }
    }

    function openDropdown(button, menu) {
        button.setAttribute("aria-expanded", "true");
        menu.style.display = "block";
    }

    function closeDropdown(button, menu) {
        button.setAttribute("aria-expanded", "false");
        menu.style.display = "none";
    }
})
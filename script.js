//----------------------------------
//INFORMATION THAT WILL BE DISPLAYED
//----------------------------------

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

//ABOUT ME

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
            <li>Responsible for design of experiments (statistical approach of experimentation).</li>
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

//Academic publications

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
        titleTags:["MS","PS"],
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
        titleTags:["MS","PS"],
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
        titleTags:["PS","MS"],
        keywords:["Polymer Composites", "Review"],
        abstract:"In this review, traditional and novel techniques for producing micro- and nano- fibers are discussed and various nanofillers, their modifications and polypropylene (PP) functionalization routes are presented. Their influence on PP properties is discussed and new PP composite fiber applications are presented. This review reveals interesting conclusions, such as that in terms of mechanical reinforcement, there is no nano-filler that can improve tensile strength to the extent that it is improved by drawing. However, in some cases, composite drawn fibers are characterized by higher tensile strength than drawn neat PP. With some notable exceptions, the PP nanocomposites lack of “dramatic” properties improvement is mainly due to the non-polar nature of the hydrocarbon chain, which does not favor strong intermolecular interactions with most popular (mainly inorganic) nano-fillers. However, other properties such as electric conductivity, water contact angle and others can be effectively altered using various nanofillers in PP matrices."
    },         
];

//Projects

const projects = [
    {
        name:"Spill The Beans",
        shortDescription:"Discord bot",
        longDescription:"Spill the Beans is a Discord bot that lets users send private messages to a dedicated server channel, with a configurable probability of revealing the sender’s name. It supports English and Greek and allows server admins to customize settings like anonymity probability, message cooldown, and relay channel via the Settings.py file. The bot requires no commands—users simply DM it, and messages are forwarded accordingly.",
        toolsUsed:["Python","discord.py","Fly.io"],
        imageUrl:"https://static.vecteezy.com/system/resources/previews/018/930/500/non_2x/discord-logo-discord-icon-transparent-free-png.png",
        imgAlt:"Discord Logo",
        projectLink:"https://github.com/LeonKonst/Spill-The-Beans",
        titleTags:["DC"],
    },
    {
        name:"Quote this",
        shortDescription:"Discord bot",
        longDescription:"Quote this is a discord bot that creates a quote image from discord messages.",
        toolsUsed:["Python","discord.py"],
        imageUrl:"https://static.vecteezy.com/system/resources/previews/018/930/500/non_2x/discord-logo-discord-icon-transparent-free-png.png",
        imgAlt:"Discord Logo",
        projectLink:"https://github.com/LeonKonst/Quote_this_bot",
        titleTags:["DC"],
    },
    {
        name:"PhD thesis template",
        shortDescription:"LaTeX template",
        longDescription:`This is a LaTeX template for PhD theses in the Chemical Engineering Department of Aristotle University of Thessaloniki. It is written in Greek and can also be adapted for theses at the bachelor’s and master’s levels, as well as for other departments. The template is officially published on the Chemical Engineering Department’s <a class="text-link" href="https://cheng.auth.gr/phd/">website</a> for student use`,
        toolsUsed:["LaTeX","Overleaf"],
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/1200px-LaTeX_logo.svg.png",
        imgAlt:"LaTeX Logo",
        projectLink:"https://www.overleaf.com/latex/templates/phd-template-cheng-auth/xfhzjtmhmdwk",
        titleTags:["DC"],
    },
    {
        name:"My Portfolio",
        shortDescription:"This exact webpage",
        longDescription:`The design of the portfolio is based on Neobrutalism. "Neubrutalism in web design is a trend characterized by minimalist aesthetics, stark typography, and a raw, unpolished appearance." <a class="text-link" href="https://www.designstudiouiux.com/blog/what-is-neubrutalism-web-design-trend/">More info here</a> `,
        toolsUsed:["HTML","CSS","JavaScript"],
        imageUrl:"Images/Portfolio.jpg",
        imgAlt:"Portfolio screenshot",
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
        month:"December",
        year:"2024",
        credentialId:"leonkonst-rwd",
        credentialUrl:"https://www.freecodecamp.org/certification/LeonKonst/responsive-web-design",
        title:"Responsive Web Design",
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

const skills = [
    {   
        typeOfSkill:"Coding",
        generate:1,
        opacity:100,
        skillName:"HTML",
        svgOfSkill:`<svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><title>HTML</title><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b0011b2"> <path display="inline" d="M30.713,0.501L71.717,460.42l184.006,51.078l184.515-51.15L481.287,0.501H30.713z M395.754,109.646 l-2.567,28.596l-1.128,12.681h-0.187H256h-0.197h-79.599l5.155,57.761h74.444H256h115.723h15.201l-1.377,15.146l-13.255,148.506 l-0.849,9.523L256,413.854v0.012l-0.259,0.072l-115.547-32.078l-7.903-88.566h26.098h30.526l4.016,44.986l62.82,16.965l0.052-0.014 v-0.006l62.916-16.977l6.542-73.158H256h-0.197H129.771l-13.863-155.444l-1.351-15.131h141.247H256h141.104L395.754,109.646z"> </path> </g> </g></svg>`,
    },
    {   
        typeOfSkill:"Coding",
        generate:1,
        opacity:100,
        skillName:"CSS",
        svgOfSkill:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><title>CSS</title><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H12.2344L8.50386 9.13176C8.11017 9.35672 7.91712 9.81842 8.0335 10.2567C8.14988 10.6949 8.54657 11 9 11H13.8C13.9105 11 14 11.0895 14 11.2V13.5029C14 13.556 13.9789 13.6069 13.9414 13.6444L12.1414 15.4444C12.0633 15.5225 11.9367 15.5225 11.8586 15.4444L9.70711 13.2929C9.31658 12.9024 8.68342 12.9024 8.2929 13.2929C7.90237 13.6834 7.90237 14.3166 8.2929 14.7071L11.2929 17.7071C11.6834 18.0976 12.3166 18.0976 12.7071 17.7071L15.7071 14.7071C15.8946 14.5196 16 14.2652 16 14V10C16 9.44772 15.5523 9 15 9H12.7656L16.4961 6.86824C16.8898 6.64328 17.0829 6.18158 16.9665 5.74333C16.8501 5.30509 16.4534 5 16 5H8Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.30602 1C2.48038 1 1.07799 2.61696 1.33617 4.42426L2.90519 15.4074C3.00668 16.1178 3.35946 16.7683 3.89953 17.2409L10.0245 22.6002C11.1556 23.5899 12.8444 23.5899 13.9755 22.6002L20.1005 17.2409C20.6405 16.7683 20.9933 16.1178 21.0948 15.4074L22.6638 4.42426C22.922 2.61696 21.5196 1 19.694 1H4.30602ZM3.31607 4.14142C3.23001 3.53899 3.69747 3 4.30602 3H19.694C20.3025 3 20.77 3.53899 20.6839 4.14142L19.1149 15.1245C19.0811 15.3613 18.9635 15.5782 18.7835 15.7357L12.6585 21.095C12.2815 21.4249 11.7185 21.4249 11.3415 21.095L5.21653 15.7357C5.03651 15.5782 4.91892 15.3613 4.88509 15.1245L3.31607 4.14142Z" fill="#0F0F0F"></path> </g></svg>`,
    },
    {   
        typeOfSkill:"Coding",
        generate:1,
        opacity:100,
        skillName:"Javascript",
        svgOfSkill:`<svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Javascript</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -7479.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M379.328,7337.432 C377.583,7337.432 376.455,7336.6 375.905,7335.512 L375.905,7335.512 L377.435,7334.626 C377.838,7335.284 378.361,7335.767 379.288,7335.767 C380.066,7335.767 380.563,7335.378 380.563,7334.841 C380.563,7334.033 379.485,7333.717 378.724,7333.391 C377.368,7332.814 376.468,7332.089 376.468,7330.558 C376.468,7329.149 377.542,7328.075 379.221,7328.075 C380.415,7328.075 381.275,7328.491 381.892,7329.578 L380.429,7330.518 C380.107,7329.941 379.758,7329.713 379.221,7329.713 C378.67,7329.713 378.321,7330.062 378.321,7330.518 C378.321,7331.082 378.67,7331.31 379.476,7331.659 C381.165,7332.383 382.443,7332.952 382.443,7334.814 C382.443,7336.506 381.114,7337.432 379.328,7337.432 L379.328,7337.432 Z M375,7334.599 C375,7336.546 373.801,7337.575 372.136,7337.575 C370.632,7337.575 369.731,7337 369.288,7336 L369.273,7336 L369.266,7336 L369.262,7336 L370.791,7334.931 C371.086,7335.454 371.352,7335.825 371.996,7335.825 C372.614,7335.825 373,7335.512 373,7334.573 L373,7328 L375,7328 L375,7334.599 Z M364,7339 L384,7339 L384,7319 L364,7319 L364,7339 Z" id="javascript-[#155]"> </path> </g> </g> </g> </g></svg>`,
    },
    {   
        typeOfSkill:"Coding",
        generate:1,
        opacity:100,
        skillName:"Python",
        svgOfSkill:`<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Python</title><path d="m11.727 0c-.967.001-1.914.086-2.834.248l.098-.014c-2.423.428-2.862 1.324-2.862 2.976v2.182h5.726v.727h-7.874c-.02 0-.043-.001-.066-.001-1.737 0-3.184 1.239-3.507 2.881l-.004.023c-.256.872-.403 1.874-.403 2.91s.147 2.038.422 2.985l-.019-.076c.407 1.695 1.379 2.902 3.04 2.902h1.969v-2.616c.045-1.953 1.622-3.523 3.574-3.557h.003 5.719c1.584-.013 2.863-1.299 2.863-2.885 0-.009 0-.017 0-.026v.001-5.452c-.104-1.561-1.314-2.81-2.848-2.975l-.014-.001c-.866-.149-1.863-.234-2.879-.234-.036 0-.071 0-.107 0h.005zm-3.096 1.755h.017c.603 0 1.091.489 1.091 1.091s-.489 1.091-1.091 1.091c-.601 0-1.089-.487-1.091-1.088 0-.002 0-.005 0-.008 0-.596.48-1.08 1.074-1.086h.001z"></path><path d="m18.287 6.119v2.542c-.022 1.977-1.604 3.578-3.572 3.63h-.005-5.719c-1.584.033-2.856 1.322-2.862 2.909v5.453c0 1.551 1.349 2.464 2.862 2.91.855.277 1.839.437 2.86.437s2.005-.16 2.927-.456l-.068.019c1.44-.417 2.862-1.258 2.862-2.91v-2.184h-5.719v-.727h8.582c1.664 0 2.284-1.161 2.863-2.902.28-.87.441-1.871.441-2.91s-.161-2.04-.46-2.979l.019.07c-.411-1.656-1.2-2.902-2.863-2.902zm-3.216 13.807h.017c.603 0 1.091.489 1.091 1.091s-.489 1.091-1.091 1.091c-.603 0-1.091-.489-1.091-1.091 0-.001 0-.003 0-.004 0-.002 0-.005 0-.007 0-.595.48-1.077 1.074-1.08z"></path></g></svg>`,
    },
    {   
        typeOfSkill:"Coding",
        generate:1,
        opacity:100,
        skillName:"LaTeX",
        svgOfSkill:`<svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
        <title>LaTeX</title>
        <path d="M2.901 3.749c0.312 0.563 0.635 1.043 0.973 1.453h-0.005c-0.156-0.020-0.312-0.036-0.473-0.031-0.36 0-0.713 0.063-1.052 0.172 0.656 0.552 1.213 0.953 1.703 1.265 1.208 0.391 2.552 1.041 3.699 1.771 0.567 0.365 1.077 0.724 1.484 1.041 0.401 0.313 0.755 0.625 0.823 0.767 0.073 0.135 0 0.181-0.104 0.077-0.109-0.104-0.407-0.427-0.803-0.739-0.473-0.365-0.968-0.709-1.473-1.032-1.036-0.651-2.645-1.281-3.625-1.885-0.755-0.245-1.573-0.276-2.531 0.183 0.697 0.437 1.287 0.755 1.801 0.995 1.475 0.203 3.011 0.921 4.303 1.74 0.64 0.411 1.203 0.823 1.625 1.161 0.208 0.167 0.385 0.312 0.52 0.437 0.131 0.12 0.235 0.203 0.261 0.276 0.041 0.099-0.027 0.14-0.109 0.077-0.048-0.031-0.115-0.135-0.245-0.255-0.167-0.151-0.339-0.297-0.516-0.432-0.411-0.333-0.968-0.74-1.609-1.147-1.192-0.749-2.979-1.348-4.235-1.859-0.801-0.151-1.629-0.084-2.541 0.516 0.599 0.265 1.12 0.468 1.579 0.619-0.756 0.027-1.505 0.261-2.235 0.953 0.635 0.161 1.183 0.265 1.656 0.333-0.583 0.12-1.156 0.401-1.719 0.964 0.432 0.093 0.823 0.161 1.183 0.213-0.443 0.213-0.855 0.541-1.235 1.047 0.495 0.041 0.937 0.057 1.333 0.057-0.479 0.219-0.927 0.573-1.328 1.136 0.708 0.031 1.307 0.031 1.817 0-0.563 0.229-1.083 0.62-1.525 1.292 0.724 0.015 1.452-0.016 2.172-0.105l-0.011 0.005c1.323-0.099 3.068 0.167 3.953 1.131 0.067 0.079-0.032 0.156-0.1 0.099-0.859-0.776-1.989-1.104-3.853-1.229-0.724 0.199-1.396 0.595-1.948 1.433 0.713 0.009 1.307-0.016 1.817-0.063-0.625 0.339-1.156 0.859-1.516 1.739 0.647-0.12 1.188-0.255 1.652-0.391-0.485 0.355-0.891 0.849-1.161 1.595 0.432-0.1 0.812-0.199 1.156-0.297-0.344 0.421-0.579 0.927-0.683 1.464 0.469-0.177 0.875-0.344 1.235-0.511h0.005c0.375-0.308 0.943-0.609 1.719-0.828 0.672-0.193 1.443-0.38 2.197-0.401 
        0.109-0.005 0.219-0.005 0.328 0 0.136 0.005 0.084 0.14 0.005 0.136-0.968-0.011-1.735 0.176-2.495 0.395-0.604 0.193-1.187 0.428-1.755 0.704-0.385 0.453-0.636 1-0.735 1.583 0.656-0.26 1.197-0.515 1.645-0.755-0.411 0.443-0.724 1.016-0.844 1.807 0.663-0.287 1.303-0.615 1.923-0.989-0.579 0.484-1.021 1.125-1.172 2.115 0.823-0.349 1.609-0.776 2.355-1.271-0.245 0.495-0.376 1.073-0.313 1.797 1.016-0.781 1.661-1.407 2.141-1.964-0.037 0.396 0 0.797 0.099 1.183 0.599-1.032 1.197-1.459 1.803-1.813-0.751 0.495-0.615 0.896-0.615 1.355 0.905-0.964 2.176-1.979 2.567-2.62-0.52 0.781-0.729 1.521-0.864 2.177-2.661 1.407-4.281 1.771-6.093 2.333 0.703 0.26 1.457 0.511 1.145 0.869l-0.833 0.828c0.531-0.161 1.073-0.396 1.541-0.072-0.041 0.432-0.593 0.656-1.063 0.905 0.824-0.296 1.005-0.229 1.224-0.156 0.109 0.521-0.271 0.803-0.515 1.147 2.088-1.589 4.807-2.839 6.728-3.365 2.693-0.907 6.172-1.849 7.12-4.151 0.313-1.265 0.636-2.541 0.943-3.792-0.151-0.047-0.328-0.083-0.468-0.177-0.141-0.099-0.251-0.239-0.313-0.401-0.333 0.089-0.583 0.043-0.744-0.113-0.156-0.157-0.224-0.391-0.271-0.657-0.271 0.057-0.485 0.027-0.625-0.099-0.151-0.135-0.229-0.349-0.265-0.588l-0.005-0.057 0.047-0.021c0.151-0.052 0.287-0.14 0.401-0.255 0.077-0.084 0.115-0.193 0.093-0.303l-0.011-0.052 0.041-0.021c0.22-0.119 0.464-0.224 0.573-0.369 0.063-0.079 0.084-0.183 0.068-0.281-0.031-0.172-0.104-0.339-0.203-0.479l-0.043-0.052 0.057-0.037c0.157-0.119 0.328-0.233 0.412-0.343 0.041-0.052 0.063-0.105 0.063-0.147s-0.021-0.093-0.089-0.161l-0.129-0.125 0.181 0.011c0.281 0.011 0.527-0.011 0.72-0.073 0.161-0.041 0.301-0.151 0.389-0.296-0.004-0.032-0.004-0.068-0.004-0.099 0-0.333 0.271-0.605 0.609-0.605 0.333 0 0.604 0.272 0.604 0.605 0 0.061-0.011 0.119-0.032 0.176 0.251 
        0.021 0.48 0.011 0.704-0.083l0.047-0.021c0.312-0.109 0.443 0.063 0.959-0.609-2.251-2.921-5.543-0.844-6.636 2.167-0.281 0.771-1.875 0.771-2.339-0.005-1.823-3.932-7.369-8.088-12.093-9.62zM3.875 5.203c0.339-0.009 1.511 0.604 1.751 0.699 0.713 0.401 1.411 0.828 2.088 1.287 0.672 0.448 1.281 0.885 1.699 1.203 0.208 0.161 0.369 0.292 0.468 0.38 0.047 0.047 0.084 0.079 0.104 0.109 0.011 0.011 0.011 0.021 0.016 0.032 0.005 0.015 0.005 0.041-0.005 0.057-0.016 0.025-0.041 0.041-0.057 0.041-0.011 0-0.025 0-0.036 0-0.079 0-0.271-0.219-0.661-0.552-1.167-0.901-2.396-1.713-3.677-2.437-0.672-0.376-1.276-0.719-1.688-0.819zM2.355 8.921c1.083 0 2.52 0.485 3.905 1.224 1.391 0.745 2.724 1.625 3.371 2.376 0.088 0.099-0.027 0.161-0.104 0.088-0.693-0.661-1.948-1.604-3.329-2.344-0.848-0.448-2.864-1.339-3.843-1.344zM1.787 10.208c1.484 0.021 3.131 0.599 4.573 1.328 0.723 0.371 1.364 0.761 1.859 1.109 0.5 0.355 0.901 0.699 0.979 0.881 0.084 0.176-0.020 0.171-0.115 0.067-0.28-0.307-0.593-0.588-0.937-0.833-0.588-0.411-1.208-0.776-1.843-1.099-1.287-0.64-3.048-1.235-4.516-1.453zM2 11.297c0.088-0.005 0.177 0 0.265 0.009 1.099 0.095 2.297 0.485 3.38 0.996 1.448 0.676 2.715 1.541 3.245 2.224 0.047 0.057-0.016 0.176-0.104 0.083-0.573-0.588-1.76-1.511-3.199-2.183-1.213-0.563-3.041-1.161-4.348-1.041 0.249-0.031 0.5-0.079 0.76-0.088zM24.052 11.312c-0.484 0.636-0.703 0.568-0.932 0.62 0.125 0.579 0.468 0.787 0.781 1.032 2.692-0.495 5.719-0.365 8.109-0.303l-7.953-1.344zM22.984 11.973c-0.255 0.105-0.515 0.105-0.781 0.079-0.104 0.188-0.301 0.297-0.515 0.303-0.24 0-0.459-0.141-0.552-0.36-0.105 0.131-0.245 0.229-0.401 0.281-0.213 0.057-0.437 0.084-0.656 0.073 0.025 0.047 0.067 0.088 0.067 0.135 0 0.084-0.031 0.167-0.093 0.229-0.093 0.125-0.249 
        0.235-0.391 0.333 0.099 0.147 0.167 0.313 0.199 0.484 0.020 0.136-0.016 0.272-0.095 0.381-0.14 0.181-0.38 0.281-0.583 0.391 0.005 0.129-0.037 0.26-0.12 0.353-0.115 0.115-0.251 0.204-0.401 0.265 0.036 0.209 0.099 0.376 0.208 0.475 0.115 0.099 0.281 0.135 0.568 0.063l0.073-0.021 0.016 0.073c0.041 0.276 0.113 0.516 0.244 0.645 0.136 0.131 0.328 0.183 0.672 0.073l0.068-0.021 0.016 0.068c0.052 0.151 0.151 0.287 0.28 0.375 0.115 0.079 0.333 0.152 0.48 0.199 1.068-1.161 2.036-2.365 2.516-3.819-0.303-0.233-0.677-0.443-0.819-1.057zM1.921 12.464c1.276 0.015 2.537 0.307 3.693 0.853 1.224 0.573 2.208 1.251 2.631 1.745 0.099 0.115-0.027 0.161-0.095 0.093-0.781-0.692-1.656-1.271-2.599-1.719-1.203-0.552-2.927-0.859-4.213-0.959 0.192-0.009 0.391-0.015 0.583-0.015zM2.495 13.552c0.812 0.027 1.656 0.208 2.412 0.469 1.005 0.348 1.891 0.817 2.328 1.307 0.057 0.068-0.005 0.172-0.099 0.093-0.464-0.405-1.281-0.927-2.276-1.271-0.767-0.26-2.152-0.489-3.027-0.525 
        0.26-0.032 0.391-0.084 0.661-0.073zM3.688 15.927c0.067 0 0.135 0.005 0.208 0.011 0.563 0.047 1.183 0.177 1.787 0.541 0.057 0.037 0.067 0.183-0.063 0.12-1.147-0.536-1.771-0.651-3.281-0.411 0.453-0.152 0.869-0.267 1.349-0.261zM4.24 16.973c0.4 0.005 0.817 0.079 1.333 0.287 0.057 0.027 0.104 0.167-0.047 0.125-1.141-0.323-1.553-0.437-3.048 0.141 0.376-0.308 0.824-0.491 1.36-0.543 0.135-0.011 0.265-0.015 0.401-0.011zM6.188 17.88c0.208 0 0.411 0.011 0.615 0.037 0.067 0.004 0.072 0.135-0.011 0.129-0.823-0.041-1.647 0.005-2.453 0.151-0.323 0.063-0.563 0.063-1.869 0.615 0.38-0.312 1.057-0.599 1.848-0.744 0.589-0.109 1.245-0.193 1.871-0.188zM7.969 19.088c0.047-0.005 0.14 0.109 0.020 0.131-0.973 0.183-1.656 0.36-2.391 0.609-0.292 0.099-0.776 0.276-1.656 0.787 0.344-0.36 0.869-0.661 1.615-0.917 0.787-0.271 1.593-0.479 2.412-0.609zM8.38 19.765c0.099-0.016 0.136 0.115 0.032 0.136-1.625 0.317-2.349 0.739-3.391 1.525 0.672-0.697 1.728-1.4 3.359-1.661zM9.177 20.36c0.011 0 0.025 0 0.036 0 0.084 0.015 0.093 0.119-0.011 0.135-1.161 0.172-1.968 0.74-3.009 1.776 0.395-0.656 1.343-1.656 2.984-1.911zM9.672 20.88c0.063-0.005 0.151 0.099 0.031 0.136-0.255 0.072-0.577 0.197-0.891 0.4-0.244 0.157-0.405 0.272-0.801 0.677 0.151-0.328 0.401-0.577 0.729-0.787 0.328-0.213 0.676-0.389 0.932-0.427z"></path> </g></svg>`,
    },
    {   
        typeOfSkill:"Coding",
        generate:0,
        skillName:"MATLAB",
        svgOfSkill:`<svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><title>MATLAB</title><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51fbe2a"> <path display="inline" d="M343.158,24.759l0.009-0.74c-0.096,0-0.191-0.004-0.287-0.004c-1.318,0-2.604,0.116-3.867,0.312 c-2.013,0.108-3.984,0.665-5.931,1.68c-14.695,6.03-26.281,25.28-40.275,48.589c-20.493,34.142-45.993,76.629-89.724,87.313 c-17.25,4.208-37.639,28.647-57.046,53.32c-1.771,2.245-3.402,4.316-4.857,6.138l-0.482,0.599L0.5,279.95l113.657,80.011 c47.719-22.41,62.32,20.51,101.834,128.024c79.515-8.925,132.87-136.009,177.182-144.359 c54.955-10.351,59.563,31.729,118.327,67.983C452.449,283.864,389.775,36.669,343.158,24.759z M172.019,316.313l-56.789,28.785 l-88.381-62.224L145.99,233.6l23.125,17.184l35.397,26.847C194.62,291.332,183.845,304.365,172.019,316.313z M212.078,266.797 l-35.264-26.206l-21.595-16.381c0.283-0.357,0.565-0.72,0.856-1.085c12.451-15.832,35.63-45.291,50.04-48.81 c40.188-9.817,65.588-41.959,85.416-73.182C272.418,149.307,248.71,212.35,212.078,266.797z"> </path> </g> </g></svg>`,
    },
    {   
        typeOfSkill:"Language",
        generate:1,
        skillName:"Greek",
        svgOfSkill:`<svg viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_503_4112)"> <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"></rect> <mask id="mask0_503_4112" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"> <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"></rect> </mask> <g mask="url(#mask0_503_4112)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 0H0V5.33333H5.33333V0ZM13.3333 0H8V5.33333H13.3333V0ZM13.3335 0H28.0002V2.66667H13.3335V0ZM28.0002 5.33331H13.3335V7.99998H28.0002V5.33331ZM13.3335 10.6667H28.0002V13.3334H13.3335V10.6667ZM28 16H0V18.6667H28V16ZM8 8H13.3333V13.3333H8V8ZM5.33333 8H0V13.3333H5.33333V8Z" fill="#1C6DC1"></path> </g> </g> <defs> <clipPath id="clip0_503_4112"> <rect width="28" height="20" rx="2" fill="white"></rect> </clipPath> </defs> </g></svg>`,
    },
    {   
        typeOfSkill:"Language",
        generate:1,
        skillName:"English",
        svgOfSkill:`<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#00247D" d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"></path><path fill="#CF1B2B" d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"></path><path fill="#EEE" d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"></path><path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"></path></g></svg>`,
    },
    {   
        typeOfSkill:"Software",
        generate:1,
        opacity:100,
        skillName:"Microsoft Office",
        svgOfSkill:`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Microsoft Office</title> <rect width="24" height="24" fill="none"></rect> <path d="M3,18l4-1.25V7l7-2V19.5L3.5,18.25,14,22l6-1.25V3.5L14,2,3,5.75Z"></path> </g></svg>`,
    },
    {   
        typeOfSkill:"Software",
        generate:1,
        opacity:100,
        skillName:"SolidWorks",
        svgOfSkill:`<svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><title>SolidWorks</title><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e04100d"> <path display="inline" d="M511.48,198.149c-0.49,3.747-4.809,5.925-25.622,5.771c-101.008-0.876-113.669,14.367-113.669,14.367 s-8.52,4.931-2.677,16.214c6.242,12.035,82.003,100.599,98.417,131.066c10.66,19.771,25.618,54.013-33.825,74.291 c-58.168,20.261-167.269,0.19-167.989,0c-26.44-6.646-25.8-11.16-25.505-13.111c0.521-3.737,4.763-5.752,25.564-5.743 c95.817,0.082,142.136-6.687,153.346-13.687c6.868-4.251,8.021-10.774,7.386-16.5c-1.393-12.493-31.066-48.904-55.587-77.575 c-25.174-29.497-78.751-80.96-42.631-112.189c43.325-37.454,138.793-20.986,157.465-16.967 C505.95,188.322,511.894,195.055,511.48,198.149z M198.447,35.444c42.177-0.055,74.967,2.69,97.415,6.714 c45.665,8.243,34.913,31.289,21.935,53.346c-31.493,53.7-116.545,114.113-121.486,117.525c-6.483,4.464-2.936,7.067,2.735,4.963 c68.965-25.65,138.458-69.891,166.525-123.631c23.804-45.583,6.741-67.205-29.547-77.394 c-64.791-18.228-131.965-1.529-137.618,0.136c-8.057,2.363-24.293,6.832-22.924,12.757 C176.363,33.652,179.588,35.458,198.447,35.444z M239.589,253.051c-67.224-19.875-140.508-2.595-151.694,0.363 c-16.922,4.491-26.834,9.014-26.14,14.317c0.521,3.919,4.85,6.614,25.645,6.088c49.571-1.198,90.642,0.485,116.604,7.748 c32.15,8.982,36.11,25.541,20.188,58.068c-7.363,15.034-18.246,30.567-34.736,47.09c-32.913,33.026-74.056,54.512-97.233,66.243 c-22.533,11.441-30.776,5.362-28.276-5.925c3.085-13.81,67.015-124.438,67.015-124.438c4.813-8.401,5.661-16.286,0-18.649 c-4.845-2.064-13.633,4.745-22.76,15.306C70.892,362.601,2.063,494.456,0.783,498.784c-1.252,4.142,1.982,4.668,3.216,4.695 c29.134-0.227,208.016-53.133,265.736-161.267C300.13,285.274,284.746,266.429,239.589,253.051z"> </path> </g> </g></svg>`,
    },
    {   
        typeOfSkill:"Software",
        generate:1,
        opacity:100,
        skillName:"JMP",
        svgOfSkill:`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
        <title>JMP</title>
        <path fill="#181921" d="M39.719,92.766c-0.384,0-0.744-0.222-0.909-0.584C36.281,86.651,35,80.702,35,74.5 c0-9.415,3.098-18.524,8.616-25.633C39.768,50.27,35.651,51,31.5,51c-10.015,0-19.424-4.164-25.816-11.424 c-0.319-0.363-0.333-0.903-0.032-1.282c0.301-0.379,0.828-0.49,
        1.256-0.26c9.676,5.186,22.831,4.512,34.331-1.757 c11.054-6.028,18.706-16.335,19.97-26.9c0.055-0.459,0.417-0.82,0.876-0.875c0.453-0.046,0.895,0.213,1.055,0.646 C64.374,12.485,65,15.968,65,19.5c0,6.338-2.02,12.469-5.755,17.653C63.006,35.723,66.943,35,71,35 c8.646,0,17.01,
        3.422,23.55,9.636c0.321,0.305,0.403,0.786,0.202,1.18c-0.201,0.394-0.637,0.61-1.074,0.528 c-10.028-1.875-20.584-0.164-29.725,4.821c-15.044,8.203-24.164,24.118-23.236,40.544c0.027,0.48-0.291,0.912-0.758,1.027 C39.879,92.756,39.798,92.766,39.719,92.766z M47.347,45.126c0.309,
        0,0.61,0.143,0.805,0.405c0.294,0.397,0.254,0.948-0.094,1.299 C41.03,53.922,37,64.008,37,74.5c0,4.109,0.59,8.101,1.758,11.922c1.064-15.207,10.174-29.344,24.238-37.013 c8.502-4.636,18.18-6.561,27.604-5.539C84.887,39.418,78.04,37,71,37c-5.204,0-10.202,1.267-14.855,3.765 c-0.435,0.233-0.973,0.115-1.269-0.276c-0.298-0.392-0.267-0.941,0.074-1.297C60.141,33.773,63,26.78,63,19.5 c0-1.94-0.203-3.865-0.604-5.755c-2.586,
        9.688-10.023,18.738-20.2,24.287c-10.189,5.557-21.659,6.91-31.16,3.897 C16.697,46.469,23.912,49,31.5,49c5.382,0,10.701-1.3,15.383-3.759C47.03,45.164,47.189,45.126,47.347,45.126z"></path><path fill="#181921" d="M33,27c-6.065,0-11-4.935-11-11S26.935,5,33,5s11,4.935,11,11S39.065,27,33,27z M33,7 c-4.963,0-9,4.038-9,9s4.037,9,9,9s9-4.038,9-9S37.963,7,33,7z"></path><path fill="#181921" d="M55.404,63.415c-0.116,0-0.232-0.04-0.327-0.121c-0.209-0.181-0.231-0.497-0.052-0.706 C60.482,56.268,67.48,52.032,75.828,50c0.273-0.065,0.539,0.1,0.604,0.368c0.065,0.268-0.099,0.539-0.367,0.604 c-8.141,1.982-14.965,6.11-20.281,12.27C55.684,63.356,55.544,63.415,55.404,63.415z"></path><path fill="#181921" d="M93.319,50.394c-0.036,0-0.072-0.004-0.109-0.012c-2.707-0.607-7.536-0.98-12.981-0.208 c-0.272,0.036-0.527-0.152-0.565-0.425c-0.039-0.273,0.151-0.526,0.425-0.565c5.576-0.792,10.549-0.404,13.341,0.223 c0.27,0.061,0.438,0.328,0.379,0.597C93.755,50.235,93.549,50.394,93.319,50.394z"></path><path fill="#181921" d="M24.829,37.543c-0.26,0-0.479-0.202-0.498-0.465c-0.02-0.276,0.188-0.515,0.464-0.534 c4.851-0.34,9.122-1.64,12.696-3.863c0.234-0.144,0.543-0.074,0.688,0.161s0.074,0.543-0.161,0.689 c-3.714,2.31-8.14,3.659-13.153,4.01C24.854,37.542,24.841,37.543,24.829,37.543z"></path><path fill="#181921" d="M21.477,37.621c-0.004,0-0.008,0-0.012,0c-2.125-0.048-4.241-0.272-6.289-0.665 c-0.271-0.052-0.448-0.314-0.396-0.585s0.31-0.45,0.586-0.397c1.992,0.383,4.053,0.601,6.123,0.647 c0.275,0.006,0.494,0.235,0.488,0.511C21.971,37.404,21.748,37.621,21.477,37.621z"></path><path fill="#181921" d="M12.677,36.358c-0.044,0-0.09-0.006-0.135-0.019c-2.555-0.713-4.588-1.654-5.575-2.582 c-0.202-0.189-0.212-0.505-0.022-0.707c0.19-0.202,0.508-0.211,0.706-0.022c0.862,0.809,2.791,1.687,5.161,2.348 c0.266,0.074,0.421,0.35,0.347,0.616C13.097,36.214,12.896,36.358,12.677,36.358z"></path>
        </svg>`,
    },
    {   
        typeOfSkill:"Software",
        generate:1,
        opacity:100,
        skillName:"Minitab",
        svgOfSkill:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <!-- Main black shape (replaces green base) -->
                <title>Minitab</title>
                <path fill="#000000" d="M41 128L14.8 106.3l19.8-53.9 19.2 17.9V19.4h7.9l21 23.5 6.1-5.3L113.9 70l2.1-1.5 12 16.1v43.2H41z"/>
                
                <!-- White rectangular blocks -->
                <path fill="#FFFFFF" d="M42 19.4h19.7v86.9H42z"/>
                <path fill="#FFFFFF" d="M69.1 37.6h19.7v68.7H69.1z"/>
                <path fill="#FFFFFF" d="M96.3 68.5H116v37.8H96.3z"/>
                <path fill="#FFFFFF" d="M14.8 52.4h19.7v53.9H14.8z"/>
                
                <!-- Gray accents (for depth) -->
                <path fill="#888888" d="M14.8 100.3l19.8-7.4v13.4H14.8z"/>
                <path fill="#888888" d="M61.7 71.9v34.4H42V89.1l19.7-17.2z"/>
                <path fill="#888888" d="M69.1 71.9l19.7 14.5v19.9H69.1V71.9z"/>
                <path fill="#888888" d="M96.3 86.2l19.7-7.6v27.7H96.3V86.2z"/>
                </svg>`,
    },
]

//----------------------------------
//---GET ELEMENTS FROM HTML---------
//----------------------------------

const myname = document.getElementById("name");
const mytitles = document.getElementById("titles");

const mylocation = document.getElementById("location");
const mylinkedin = document.getElementById("linkedin");
const mygithub = document.getElementById("github");

const aboutme = document.getElementById("aboutme");

//Main sections containers
const workExpContainer = document.getElementById("work-experience");
const educationContainer = document.getElementById("education");
const publicationsContainer = document.getElementById("publications-container")
const projectsContainer = document.getElementById("projects-container");
const certificationContainer = document.getElementById("certificates")

//Other skill containers
const codingContainer = document.getElementById("coding");
const softwareContainer = document.getElementById("software");
const languageContainer = document.getElementById("languages");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Track active filters globally
let activeTitleFilters = []; 

//------------------------------
//----DISPLAYING INFO ON PAGE---
//------------------------------

myname.innerText = `My name is ${personalInfo.name} ${personalInfo.surname}`;
mytitles.innerText = `I am a `;

//create the Title buttons

titles.map((title,i)=>{
    if(i === titles.length -1){
        mytitles.innerHTML += ` and a<button class="title-tags" data-active="on" id="${title[1]}"> ${title[0]}</button> and this is my portfolio!`;
    }
    else{
        mytitles.innerHTML += `<button class="title-tags" data-active="on" id="${title[1]}"> ${title[0]}</button>`;
    }
})

//Create a constant for the title buttons to add functionality later.
const titleBtns = document.querySelectorAll(".title-tags");

//Social media links

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
// </svg><span class="social-media">
${personalInfo.location.city}, ${personalInfo.location.country}</span>
</a>`;

mylinkedin.innerHTML = `<a  target="_blank" href="${personalInfo.linkedin.profilelink}">
<svg viewBox="4 4 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.72 4H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.25V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.25C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 4ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.13C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.9C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.67C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.9C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.13ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 10C16.2 10 17.34 11 17.34 13.13V17.34Z" fill="#000000"/>
</svg>
<span class="social-media">${personalInfo.linkedin.name}</span>
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
                        <span class="social-media">${personalInfo.github.name}</span>
                    </a>`;

//about me paragraph

aboutme.innerHTML = aboutMeHtml;

//----------------------------------
//---Logic to populate containers---
//----------------------------------

// WORK EXPERIENCE 

const printWorkExperience = (filters) => {
    workExpContainer.innerHTML = ``;
    let count = 0;
    workExperience.forEach((element,i) => {
        if(!element.titleTags.every(item => filters.includes(item))){
            count++;
            workExpContainer.innerHTML += `
            <div class="work-tab" data-tags="${element.titleTags.join(' ')}">
                <div class="work-info">
                    <div class="work-position"> ${element.position} at</div>
                    <div class="work-company"> <a target="_blank" href="${element.link}">${element.company}</a></div>
                </div>
                <div class="work-duration"> ${element.startYear} - ${element.endYear}</div>
                <div class="work-description"> ${element.description}</div>
                <hr class="work-hr" id="work ${count}">
            </div>`
        }
    });
    if(count){
    document.getElementById(`work ${count}`).style.display = "none";
    }
};

//EDUCATIONS

const printEducation = (filters)=> {
    educationContainer.innerHTML = ``;
    let count = 0;
    education.forEach((element, i) => {
        if(!element.titleTags.every(item => filters.includes(item))){
            count++;
            educationContainer.innerHTML += `
            <div class="edu-tab" data-tags="${element.titleTags.join(' ')}">
                <div class="edu-duration"> ${element.startYear} - ${element.endYear}</div>
                <div class="edu-field">${element.field} - ${element.institution}</div>
                <div class="edu-degree"> ${element.degree}</div>
                <div class="edu-description"> ${element.description}</div>
                <hr class="edu-hr" id="edu ${count}">
            </div>`
        }
    });
    if(count){
    document.getElementById(`edu ${count}`).style.display = "none";
    }
};

//PUBLICATIONS

const printPublications = (filters) => {
    publicationsContainer.innerHTML =``;
    // Αuthors display logic
    const sortedPublications = publications.sort((a, b) => b.year - a.year);;
    sortedPublications.forEach((element, i) => {
        if(!element.titleTags.every(item => filters.includes(item))){
            let authorsDisplayed = "";
            const authorLength = element.authors.length - 1;

            //Creating the authors string
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

            //Creating the keywords element
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
        }
    });    
};

//PROJECTS

const printProjects = (filters) =>{
    projectsContainer.innerHTML = ``;

    //Creating the keywords element


    projects.forEach((element, i) => {
        let tools = "";
        element.toolsUsed.forEach(tool =>{
            tools += `<div class="proj-tool">${tool}</div>`
        });

        if(!element.titleTags.every(item => filters.includes(item))){
        projectsContainer.innerHTML += `
        
        <div class="proj-tab" data-tags="${element.titleTags.join(' ')}">  
            <div class="proj-name">${element.name}</div>
            <div class="proj-short"> ${element.shortDescription}</div>
            <img class="proj-img" src="${element.imageUrl}" alt="${element.imgAlt}"/>
            <div class="proj-description"> ${element.longDescription}</div>
            <div class="proj-tools">Tools:${tools}</div>
            <a class="proj-link" target="_blank" href="${element.projectLink}">Link</a>
        </div>`
        }
    });
};

//CERTIFICATIONS

const printCertifications = (filters) => {
    let count = 0;
    certificationContainer.innerHTML = ``;
    certifications.forEach((element,i) => {
        if(!element.titleTags.every(item => filters.includes(item))){
            count++;
            certificationContainer.innerHTML += `
            <div class="certification-tab" data-tags="${element.titleTags.join(' ')}">
                <div class="certification-info">
                    <div class="certification-title"> ${element.title}</div>
                    <div class="certification-company">by <a target="_blank" href="${element.organizationLink}">${element.issuingOrganization}</a></div>
                    <div class="certification-date"> ${element.month} of ${element.year}</div>
                </div>
                <hr class="certification-hr" id="cert ${count}">
            </div>`
        };
    });
    if(count){
    document.getElementById(`cert ${count}`).style.display = "none";
    }
};

//OTHER SKILLS

const printOthers = () =>{
    codingContainer.innerHTML = `<h2>Coding</h2>`;
    softwareContainer.innerHTML = `<h2>Softwares</h2>`;
    languageContainer.innerHTML = `<h2>Languages</h2>`;
    
    let coding = ``;
    let software = ``;
    let languages = ``;

    skills.forEach((element,i) => {
        if(element.typeOfSkill === "Coding"){
            coding += element.svgOfSkill;
        } else if(element.typeOfSkill === "Software"){
            software += element.svgOfSkill;
        } else if(element.typeOfSkill === "Language"){
            languages += element.svgOfSkill;
        }
    });

    codingContainer.innerHTML += `<div>${coding}</div>`;
    softwareContainer.innerHTML += `<div>${software}</div>`;
    languageContainer.innerHTML += `<div>${languages}</div>`;
}

//Populate website calling all the prints

const populateWebsite = (filters) =>{
    printWorkExperience(filters);
    printEducation(filters);
    printPublications(filters);
    printProjects(filters);
    printCertifications(filters);
    printOthers();
}

//footer year generation
const currentYear = new Date().getFullYear();
            // Insert the current year into the footer
document.getElementById('current-year').textContent = currentYear;


//Logic of title buttons.
titleBtns.forEach(titleBtn =>{
    titleBtn.addEventListener("click",()=>{
        //every time a title button is pressed
        //activeTitleFilters list is refreshed by
        // either adding the id of the button to the list if
        // it isnt in the filters list or removes it if it is 
        //there. 
        const index = activeTitleFilters.indexOf(titleBtn.id);
        if(index !==-1){
            activeTitleFilters.splice(index,1);
        } else {
            activeTitleFilters.push(titleBtn.id);
        }

        // Also, this changes the attribute of the titleBtn element "data-active"
        // and toggles among off and on. 
        const isActive = titleBtn.getAttribute("data-active") === "on";
        titleBtn.setAttribute("data-active", isActive ? "off" : "on");

        //resets the filters if all are deactivated
        if(activeTitleFilters.length === titleBtns.length){
            activeTitleFilters = [];
            titleBtns.forEach((btn)=>{
                btn.setAttribute("data-active", "on" );
            });
        }

        //After the press of the button the page is being repopulated 
        //based on the new active filters.
        console.log(activeTitleFilters);
        populateWebsite(activeTitleFilters); 
    });
});

//accesibility related to Dropdown menus on navigation bar, FULLY generated by
//deep seek. 
document.addEventListener("DOMContentLoaded", function () {
    
    //Also populates the website when the DOM is loaded. 
    populateWebsite(activeTitleFilters);
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

export const jobs = [{
    id: "0",
    name: "Undergraduate Research Assistant",
    subtitle:"Advised by Professor Lane Hemaspaandra",
    company: "National Science Foundation REU",

    start: "September\xA02023",
    end: "June\xA02024",

    description: "Studied the resistances and vulnerabilities of different election schemes via computational complexity approaches. Critiqued published papers claiming to resolve the P=NP problem in order to improve professional writing techniques.",
    skills: ["Algorithm Analysis", "Problem-Solving", "Computational Complexity", "Research"],

},
{
    id: "1",
    name: "Undergraduate Researcher",
    subtitle:"Advised by Professor Jiebo Luo",
    company: "University of Rochester",

    start: "May\xA02023",
    end: "December\xA02023",

    description: "Created and investigated the ability of classifiers built from CFA based methods on identifying artificially generated images vs genuinely captured images. Researched the effectiveness of CFA-based classifiers vs deep learning classifiers on this task.",
    skills: ["Deep Learning", "Computer Vision", "Formal Writing", "Research"],

},
{
    id: "2",
    name: "Teaching Assistant",
    subtitle:"CSC 172: Data Structures and Algorithms",
    company: "University of Rochester",

    start: "January\xA02023",
    end: "May\xA02023",

    description: "Aided students in transitioning from a theoretical understanding of data structures to practical implementations. Helped students understand both course concepts and good coding practices. Performed various organizational tasks such as grading and proctoring. ",
    skills: ["Teaching", "Organization", "Practical Implementation"],
},
{
    id: "3",
    name: "Workshop Leader",
    subtitle:"CSC 172: Data Structures and Algorithms",
    company: "University of Rochester",

    start: "September\xA02022",
    end: "December\xA02022",


    description: "Created and executed lesson plans to improve student comprehension and engagement. Fostered an environment where students worked to answer sample questions as a group to improve their problem solving abilities. Additionally investigated the impact of recall questions on student performance.",

    skills: ["Teaching", "Communication", "Organization"],

}]

export const Projects = [
    {
        title: "You're Ready",
        image: "urready.png",
        description: "A public class selector and schedule creator for students at the University of Rochester. Many students have expressed their dissatisfaction with the university's current scheduling applications, and how different resources (such as schedule builders, class availability checkers, and class time offerings) are disconnected from each other. This project connects all of these tasks together in one easy-to-use app!",
        skills:["Python","Tkinter", "Data Scraping","Data Organization"],
        link:"https://github.com/notred27/youre-ready"
    },
    {
        title: "CFA Interpolation Classifiers on AIGC",
        image: "AIGC.png",
        description: "Created novel classifiers to identify AI-generated content (AIGC) based on Color Filter Array interpolation methods. This was done by estimating the amount of error in an image's RGB channels by converting the image to a raw image and re-interpolating (based on standard interpolation algorithms). By creating both a thresholding classifier and a 3-dimensional feature for use in neural networks, my classifiers were able to achieve higher than human levels of accuracy (73.55%).",
        skills:["Research", "MATLAB", "Deep Learning", "Bayer Arrays", "Computer Vision"],
        link:"https://github.com/notred27/CFA-Interpolation-Classifiers-on-Identifying-AIGC"
    },
    
    {
        title: "Catan",
        image: "catan.png",
        description: "An implementation of the classic board game Catan! Play with other people over a local network to see who can build the most prosperous settlement! Created using Python and Pygame, as well as web sockets to connect players over a local connection. Designed using Figma.",
        skills:["Python", "Pygame", "Web Sockets", "Networking","Figma"],
        link:"https://github.com/notred27/Catan"
    },
    {
        title: "This website!",
        image: "breakdance2.gif",
        description: "This website was created using React (as well as standard JS and CSS) to showcase my portfolio and career history. Additionally, it is hosted using AWS Amplify. I've had fun creating this website and tried to structure it using a cohesive and stylish UI. Thank you for visiting my site!",
        skills:["React", "JavaScript", "CSS", "HTML", "UI Design"],
        link:""
    },
    {
        title: "Turing Trouble",
        image: "c1.png",
        description: "A game about defining functions to guide a Turing Machine to the end of a tape! Coded by Me and my friends Tiago Davies and Anu Kumar in C# using Unity. We created a modular design (using Scriptable Objects) to dynamically load level information into the GameObjects that appear on your screen! Won 1st place in entertainment track during DandyHacks '23.",
        skills:["C#", "Unity","Game Design", "Turing Machines"],
        link:"https://devpost.com/software/turing-trouble#updates"
    },
    {
        title: "2-Tris",
        image: "2tris.png",
        description: "As a reimagining of Tetris as a two-person shooter, 2-Tris brings a new twist to a classic game! Play with a friend and try to time your shots to push and rotate the pieces into place! This game was created using Python using the Pygame library, and fully scored using MuseScore. This game was created by myself and my friends Tiago Davies, Cole Henslee, and Alvin Jiang for DandyHacks '22. Won 1st place in the entertainment track, as well as Best UI/UX.",
        skills:["Python", "Pygame", "Game Design"],
        link:"https://devpost.com/software/2-tris"
    },
    
]


export const Papers = [
    {
        title:"Investigating the Effectiveness of Deep Learning and CFA Interpolation Based Classifiers on Identifying AIGC",
        image:"paper1.png",
        authors:["Michael\xA0Reidy", "Henry\xA0Mallon", "Jiebo\xA0Luo"],
        link:"https://ieeexplore.ieee.org/document/10386096",
        description:["Proposed two novel shallow classifiers for identifying AI-generated content (AIGC) based on the structure of Bayer arrays found in physical cameras.",
                     "Tested our models on a sparse dataset of human faces and a diverse dataset of faces, cats, and dogs to test model generalizability.",
                     "When tested on our diverse dataset, our CNN's achieved an accuracy of 83.15%, and our shallow CFA thresholding models achieved an accuracy of 73.55%."],
        appearsIn:"Published in",
        location:"IEEE 2023 International Conference on Big Data"
    },
    {
        title:"On Czerwinski's \"P≠NP relative to a P-complete oracle\"",
        image:"paper2.png",
        authors:["Michael\xA0C.\xA0Chavrimootoo", "Tran\xA0Duy\xA0Ahn\xA0Le", "Michael\xA0Reidy", "Eliot\xA0J.\xA0Smith"],
        link:"https://arxiv.org/abs/2312.04395",
        description:["A critique of a paper by Reiner Czerwinski that (perhaps unknowingly) claims to give an oracle where P=NP.",
                    "We argue that Czerwinski's Corollary 1 is false through Turing reductions, and thus disprove the author's separation argument.",
                    "We rework some of Czerwinski's original proofs to show that despite their technical flaws, the author's underlying idea cannot prove the separation."],
        appearsIn:"Located in",
        location:"arxiv's Computational Complexity Archive"
    },
    {
        title:"A Critique of Chen's \"The 2-MAXSAT Problem Can Be Solved in Polynomial Time\"",
        image:"paper3.png",
        authors:["Tran\xA0Duy\xA0Ahn\xA0Le", "Michael\xA0Reidy", "Eliot\xA0J.\xA0Smith"],
        link:"https://arxiv.org/abs/2404.00006",
        description:["A critique of a paper by Yangjun Chen that claims to give an algorithm to solve an NP‑complete problem (2-MAXSAT) in polynomially-bounded time.",
                    "Provide 4 counterexamples where the author's algorithm fails to give proper solutions, thus proving that their algorithm is invalid.",
                    "Point out concerns that the author's definitions are ambiguous and inconsistent."],
        appearsIn:"Located in",
        location:"arxiv's Computational Complexity Archive"
    },
    {
        title:"More Natural Models of Electoral Control by Partition",
        image:"paper_placeholder.png",
        authors:["Multiple Authors"],
        link:"",
        description:[],
        appearsIn:"Currently in progress",
        location:""
    },

    {
        title:"BotOrNot: A Real-Time Bot Detector for X (Formerly Twitter)",
        image:"paper_placeholder.png",
        authors:["Michael\xA0Reidy", "Daniel\xA0Reilly"],
        link:"",
        description:[],
        appearsIn:"Currently in progress",
        location:""
    },
]

export const Info = {
        images:["people.png", "hackathon.png", "snowman.png", "galla.png"]
    }


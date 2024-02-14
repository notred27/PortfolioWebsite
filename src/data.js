
export const jobs = [{
    id: "0",
    name: "Undergraduate Research Assistant",
    company: "NSF REU",

    start: "September 2023",
    end: "Current",

    description: "Studied the resistances and vulnerabilities of different election schemes via computational complexity approaches. Critiqued published papers claiming to resolve the P=NP problem in order to improve professional writing techniques.",
    skills: ["Algorithm Analysis", "Problem-Solving", "Computational Complexity", "Research"],

},
{
    id: "1",
    name: "Undergraduate Researcher",
    company: "University of Rochester",

    start: "May 2023",
    end: "December 2023",

    description: "Created and investigated the ability of classifiers built from CFA based methods on identifying artificially generated images vs genuinely captured images. Researched the effectiveness of CFA-based classifiers vs deep learning classifiers on this task.",
    skills: ["Deep Learning", "Computer Vision", "Formal Writing", "Research"],

},
{
    id: "2",
    name: "Teaching Assitant (Data Structures and Algorithms)",
    company: "University of Rochester",

    start: "January 2023",
    end: "May 2023",

    description: "this is a bio about the job",
    skills: ["skill2", "skill_3"],
},
{
    id: "3",
    name: "Workshop Leader (Data Structures and Algorithms)",
    company: "University of Rochester",

    start: "September 2022",
    end: "December 2022",


    description: "Created and executed lesson plans to improve student comprehension and engagement. Fostered an environment where students worked to answer sample questions as a group to improve their problem solving abilities. Additionally investigated the impact of recall questions on student performance.",

    skills: ["Communication", "Organization"],

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
        description: "Created novel classifiers to identify AI-generated content (AIGC) based on Color Filter Array interpolation methods. This was done by estimating the amount of error in an image's RGB channels by converting the image to a raw image and re-interpolating (based on standard interpolation algorithms). By creating both a thresholding classifier and a 3-dimensional feature for use in neural networks, my classifiers were able to achieve higher than human levels of accuracy (73.55%). Resulted in a publication in the 2023 IEEE International Conference on Big Data.",
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
        description: "This website was created using React (as well as standard JS and CSS) to showcase my portfolio and career history. I've had fun creating this website and tried to structure it using a cohesive and stylish UI. Thank you for visiting my site!",
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
        title:"On Czerwinski's \"P≠NP relative to a P‑complete oracle\"",
        image:"paper2.png",
        link:"https://arxiv.org/abs/2312.04395",
        description:["In this paper, we critique a paper by Reiner Czerwinski that (perhaps unknowingly) claims to give an oracle where P=NP.",
                    "We argue that Czerwinski's Corollary 1 is provably false through Turing reductions, and thus we disprove the author's separation argument.",
                    "Additionally, we rework some of Czerwinski's original proofs to show that despite technical flaws in the paper, the author's underlying idea cannot prove the separation."]
    },
    {
        title:"Investigating the Effectiveness of Deep Learning and CFA Interpolation Based Classifiers on Identifying AIGC",
        image:"paper1.png",
        link:"https://ieeexplore.ieee.org/document/10386096",
        description:["In this paper, we propose novel shallow classifiers for identifying AI‑generated content (AIGC) that are based on Bayer arrays found in physical cameras.",
                     "Tested our models on a sparse dataset (1,289 images) of human faces, and a diverse dataset (2,800 images) of faces, cats, and dogs to test generalizability.",
                     "Our best deep learning CNN and CFA thresholding models achieved a respective 83.15% and 73.55% accuracy on the diverse dataset."]
    },
    
    {
        title:"On Chen's \"The 2-MAXSAT Problem Can Be Solved in Polynomial Time\"",
        image:"paper3.png",
        link:"",
        description:["In this paper, we critique a paper by Yangjun Chen that claims to give an algorithm that solves an NP‑complete problem in polynomially-bounded time.",
                    "We give 4 counterexamples where the author's algorithm fails to give proper solutions to 2-MAXSAT to prove that the algorithm is invalid.",
                    "We also point out concerns that the definitions the author creates for their algorithm are ambiguous and inconsistent."]
    },
]
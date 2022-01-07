import emoji from "react-easy-emoji";

export const greetings = {
	name: "Himanshu Vashisht",
	title: "Hi all, I'm Himanshu",
	description:
		"A passionate Data Analyst, having an experience of  Python, DBMS, SQL, Excel,Tableau and Stats.",
	resumeLink: "https://drive.google.com/file/d/13-3aOYP-8TDulcwprh33e59_XWFKkhyO/view?usp=sharing",
};

export const openSource = {
	githubUserName: "himanshuvashisht878",
};

export const contact = {};

export const socialLinks = {
	
	instagram: "https://www.instagram.com/ihimanshuvashisht/",
	twitter: "https://twitter.com/Himansh18420367",
	github: "https://github.com/himanshuvashisht878",
	linkedin: "https://www.linkedin.com/in/himanshu-vashisht-887071172/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY DATA ANALYST WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
	],

	softwareSkills: [
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		
		
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "AWS",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "Tableau",
			fontAwesomeClassname: "logos:firebase",
		},
		
	],
};

export const SkillBars = [
	{
		Stack: "Python", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "SQL",
		progressPercentage: "80",
	},
	{
		Stack: "Tableau",
		progressPercentage: "60",
	},
	{
		Stack: "Excel",
		progressPercentage: "75",
	},
	{
		Stack: "Frontend",
		progressPercentage: "65",
	},

];

export const educationInfo = [
	{
		schoolName: "Benett University",
		subHeader: "B-Tech in Electronics and Communication Engineering",
		duration: "August 2018 - July 2022",
		desc: "CGPA - 8.1",
		descBullets: [
			"Top 5 in North region - Capgemini Tech challenge - 2021",
			"Top 3 in Smart India Hackathon - 2020 (College Level)",
		],
	},
	{
		schoolName: "S.D Vidya School",
		subHeader: "12th - Science - CBSE",
		duration: "May 2016 - June 2017",
		desc: "Percentage - 73.5",
		descBullets: [
			"Active in sports - Basketball,Badminton",
			
		],
	},
	
];

export const experience = [
	{
		role: "Summer Internship",
		company: "Bennett University",
		companylogo: "/img/icons/bennett_logo.jpeg",
		date: "June 2020 – July 2020",
		desc: "Smart hand sanitizer that not only detect hand but also detect if there is need to refill sanitizer.",
		descBullets: [
			"Just place your hand near the bottle. the bottle will automatically trigger.",
			"Cheap alternative",
		],
	},
	{
		role: "Cybersecurity Internship",
		company: "Gurugram Police",
		companylogo: "img/icons/common/police_logo.png",
		date: "June 2021 – July 2021",
		desc: "It is a great opportunity for the cybersecurity enthusiasts. It is directed by Rakshit tondon sir.",
		descBullets: [
			"Learnt about Cloud Security, Cryptocurrency Investigation,Cyber forensics, VAPT",
			"I got theoretical as well as practical knowledge.",
		],
	},
	
	
];

export const projects = [
	{
		name: "Onyx V1.0 Motherboard",
		desc: "The Arduino UNO + CNC shield has been the go-to setup for several CNC machines, robotic arms, drawing machines and what not! It's about time we replace the 8-bit microcontroller, with a powerful 32-bit, Wifi + BLE enabled ESP32!",
		link: "https://curiousmotor.com/2021/12/27/designing-the-onyx-v1-0-motherboard/",
		github: "https://github.com/CuriousMotor/Onyx-Stepper-Motherboard",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/himanshuvashisht878",
		link: "",
	},
	
];

export const feedbacks = [
	{
		name: "Elon musk",
		feedback:
			"Very hard working and dedicated person. He is very good at what he does. I recommend him for any job.",
	},
	{
		name: "Sundar Pichai",
		feedback:
			"Need to work hard and keep up the good work. He is a good person and I wish him good luck in all his future endeavors.",
	},
];

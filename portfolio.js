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
			"⚡ Identify.bold() the data you want to analyze"
		),
		emoji(
			"⚡ Collect.bold() the data"
		),
		emoji(
			"⚡ Clean.bold() the data in preparation for analysis"
		),
		emoji(
			"⚡ Analyze.bold() the data"
		),
		emoji(
			"⚡ Interpret.bold() the results of the analysis"
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
			"Participated in school fest - Science and Technology",
			
		],
	},
	
	
];

export const experience = [
	{
		role: "Summer Internship",
		company: "Bennett University",
		companylogo: "img/icons/common/bennett_logo.png",
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
	{
		role: "Cybersecurity Virtual Internship Program",
		company: "CISCO",
		companylogo: "img/icons/common/cisco_logo-modified.png",
		date: "May 2021 – July 2021",
		desc: "Cisco Networking Academy offers the Virtual Internship Program to third-year engineering students to bridge the gap between industry and academia.",
		descBullets: [
			"Learned to use the powerful network simulation tool - Packet Tracer",
			"Gained knowledge about Cyber Security Essentials",
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
	
	
];

export const feedbacks = [
	{
		name: "Capgemini Tech challenge - 2021",
		feedback:
			"Got in Top 5 in North region and was awarded cash prize of 35K",
	},
	{
		name: "Smart India Hackathon (SIH) - 2020",
		feedback:
			"Top 3 team at college level",
	},
];

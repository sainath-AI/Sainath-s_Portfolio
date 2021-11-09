/* Change this file to get your personal Porfolio */

/*
TODO:
1. Edit all the texts in Homepage, Education tab, contact me tab, projects tab, Experience tab.
2. Remove opensource tab
3. Remove git projects integration from projects tab
4. Add a component to display all my projects in card components, which will contain project name, description, live link & github link
5. Design the splash screen
6. Update resume link with updated resume
7. Update svg illustrations as I like
8. Play with theme color customizations
*/

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sainath's Portfolio",
  description:
    "A passionate Software Engineer with 4+ years of experience in Software Industry. Skilled in designing, building & maintaining highly scalable and available software applications.",
  og: {
    title: "sainath reddy Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Sainath Reddy",
  logo_name: "SainathReddy",
  nickname: "",
  subTitle:
    "A passionate full stack Android developer. Skilled in designing, building & maintaining highly scalable and available Android applications.",
  secondSubtitle:
    "Love to learn new technologies everyday and apply them through building new projects.",
  resumeLink:
    "https://drive.google.com/file/d/19KCYS17hz3fklth777WMLP-n3hCL6T_T/view?usp=sharing",
  portfolio_repository: "https://github.com/sainath-AI",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/sainath-AI",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sainath-reddy-19b2391aa/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:dukedustine123@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Sainath18060196",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/sainath.reddy.90281943",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sainath__red.e/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full stack Android Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive Android Applications front end using Android studio",
        "⚡ Developing highly scalable and maintainable REST APIs and  MVVM Architecture",
        "⚡ Creating application backend using Java, Spring Boot along with integration of databases such as  SQL & Firebase",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "fa-android",
          style: {
            color: "#5CB230",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#3498db",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "ant-design:console-sql-outlined",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#f0932b",
          },
        },
        {
          skillName: "postman",
          fontAwesomeClassname: "logos:postman",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Abobe-xd",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#ff61f6",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Spring boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6ab04c",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining dynamic Android applications, wordpress",
    //     "⚡ Setting up application backend in Firebase, Cloud Firestore",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "Cloud Firestore",
    //       fontAwesomeClassname: "vscode-icons:file-type-firestore",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    // ],
    //},
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ As mentioned above, I like to learn new technologies and as a developer everyone should be familiar with latest trending tools & technologies. Data Science and Machine Learning is popular & trending nowadays, and I found it quite interesting.",
    //     "⚡ So far, I've done a few courses related to the same from Coursera, such as \"Python for Everybody Specialization\", \"Introduction to Data Science in Python\", and learned data computing & manipulating libraries such as Numpy & Pandas.",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "logos:python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Pandas",
    //       fontAwesomeClassname: "simple-icons:pandas",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#130654",
    //       },
    //     },
    //     {
    //       skillName: "Numpy",
    //       fontAwesomeClassname: "logos:numpy",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page

// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Masai school",
      subtitle: "Full stack android development",
      logo_path: "masailogo.png",
      alt_name: "masai. Logo",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ I have studied full stack Android  Development with subjects like Java, DS, Algorithms, Android, Kotlin,flutter,firebase.",
      ],
      website_link: "https://www.masaischool.com/",
    },
    {
      title: "Karnataka college of management & science",
      subtitle: "Bachelor's in Computer Application",
      logo_path: "logo-kcms.png",
      alt_name: "kcms. Logo",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ Graduated with First Class  with a score of 65 Percentile.",
        "⚡ I have studied Computer Applications subjects like C, C++, java ,Database management system,microproccessor,Computer Architecture and System programming etc",
      ],
      website_link: "https://kcmsbangalore.com/",
    },
    {
      title: "Reva",
      subtitle: "Pre-University education",
      logo_path: "revalogo.png",
      alt_name: "reva. Logo",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ I have studied Puc with subjects Physics,chemistry maths and computer science",
      ],
      website_link: "https://reva.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    //     {
    //       title: "Object Oriented Programming in Java",
    //       subtitle: "- Mia Minnes, Leo Porter, Christine Alvarado",
    //       logo_path: "UC-San-Diego-logo.png",
    //       certificate_link:
    //         "https://coursera.org/share/95c54b141d11cc638fabef63b5908f09",
    //       alt_name: "University of California San Diego",
    //       color_code: "#02447B",
    //     },
    //     {
    //       title: "Java Multithreading",
    //       subtitle: "- John Purcell",
    //       logo_path: "udemy-logo.png",
    //       certificate_link:
    //         "http://ude.my/UC-2029a6c9-08b6-4622-8427-48a8c111d061",
    //       alt_name: "IBM",
    //       color_code: "#FFB6C1",
    //     },
    //     {
    //       title: "Building Scalable Java Microservices with Spring Boot and Spring Cloud on GCP",
    //       subtitle: "- GCP Training",
    //       logo_path: "google_logo.png",
    //       certificate_link:
    //         "https://coursera.org/share/7f8702e5879631b6cf9da7f04beb04e1",
    //       alt_name: "Google",
    //       color_code: "#0C9D5899",
    //     },
    //     {
    //       title: "Front-End Web Development with React",
    //       subtitle: "- Jogesh Muppala",
    //       logo_path: "HKUST-logo.png",
    //       certificate_link:
    //         "https://coursera.org/share/59ea7b7b3b5574f799db0dfae4ac6f7b",
    //       alt_name: "Hong Kong University of Science and Technology",
    //       color_code: "#F7F7F7",
    //     },
    //     {
    //       title: "Server-side Development with NodeJS, Express and MongoDB",
    //       subtitle: "- Jogesh Muppala",
    //       logo_path: "HKUST-logo.png",
    //       certificate_link:
    //         "https://coursera.org/share/24ed6b1f8d080df344a55d13af690777",
    //       alt_name: "Hong Kong University of Science and Technology",
    //       color_code: "#F7F7F7",
    //     },
    //     {
    //       title: "Front-End Web UI Frameworks and Tools",
    //       subtitle: "- Jogesh Muppala",
    //       logo_path: "HKUST-logo.png",
    //       certificate_link:
    //         "https://coursera.org/share/ff017bf02797713d395c83998c2edc21",
    //       alt_name: "Hong Kong University of Science and Technology",
    //       color_code: "#F7F7F7",
    //     },
    //     {
    //       title: "HTML, CSS and JavaScript",
    //       subtitle: "- Jogesh Muppala",
    //       logo_path: "HKUST-logo.png",
    //       certificate_link:
    //         "https://coursera.org/share/684fb4b1b2aca4b3c10b36ec159eae85",
    //       alt_name: "Hong Kong University of Science and Technology",
    //       color_code: "#F7F7F7",
    //     },
    //     {
    //       title: "Python for Everybody Specialization",
    //       subtitle: "- Charles Russell Severance",
    //       logo_path: "uni-of-michigan-logo.png",
    //       certificate_link:
    //         "https://coursera.org/share/b77cc1012bd3ced36c00d31501a6e28d",
    //       alt_name: "University of Michigan",
    //       color_code: "#02447B",
    //     },
    //     {
    //       title: "Introduction to Data Science in Python",
    //       subtitle: "- Christopher Brooks",
    //       logo_path: "uni-of-michigan-logo.png",
    //       certificate_link:
    //         "https://coursera.org/share/ad10f0212cd4eecc3704a002a693d4ea",
    //       alt_name: "University of Michigan",
    //       color_code: "#02447B",
    //     },
    //     {
    //       title: "Python for Data Science, AI & Development",
    //       subtitle: "- Joseph Santarcangelo",
    //       logo_path: "ibm_logo.png",
    //       certificate_link:
    //         "https://coursera.org/share/684c81a4e8f93d65a1462bdfc5b6ffc9",
    //       alt_name: "IBM",
    //       color_code: "#1F70C199",
    //     },
    //     {
    //       title: "AI For Everyone",
    //       subtitle: "- Andrew Ng",
    //       logo_path: "deeplearning-logo.png",
    //       certificate_link:
    //         "https://coursera.org/share/34d86df65b1b4db906edb601dee26910",
    //       alt_name: "Deeplearning.ai",
    //       color_code: "#333333",
    //     },
    //     {
    //       title: "The Science of Success: What Researchers Know that You Should Know",
    //       subtitle: "- Paula Caproni",
    //       logo_path: "uni-of-michigan-logo.png",
    //       certificate_link:
    //         "https://coursera.org/share/2c5ac2f17afb3b941d55bf51321cfc1f",
    //       alt_name: "University of Michigan",
    //       color_code: "#02447B",
    //     },
  ],
};

// Experience Page
const experience = {
  title: "Training Experience",
  subtitle: "",
  description:
    "I have trained and got skilled in Masai school as full stack Android developer for 8 months . Over these months I've worked on multiple projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Projects",
      experiences: [
        {
          title: "Android developer",
          company: "Masai school",
          company_url: "https://www.masaischool.com/",
          logo_path: "masailogo.png",
          duration: "December 2020 - 2021",
          location: "Bangalore, Karnataka",
          description: "",
          color: "#0879bf",
          projects: [
            {
              projectName: "Rentomojo",
              clientName: "Judge- Lloyd Dcosta",
              projectDescription:
                "A furniture renting Android Application used to rent furniture in mothly rental basis. In this application I mainly developed the frontend part with my team Ishwar and sanjay",
            },
            {
              projectName: "Licious",
              clientName: "judge- Nrupul Dev",
              projectDescription:
                "A meat delivery application -cloned with variety of meats foods.In this Application i have integrated the frontend UI with Data communition between Activities and Cart functionalty",
            },
            {
              projectName: "Notes App",
              clientName: "Hobby project",
              projectDescription:
                "In this application i have implemented the MVVM architecture with livedata and Room database integration to observe the live insertion, deletion and updating of data on main UI",
            },
          ],
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "",
    //     },
    //     {
    //       title: "",
    //       company: "",
    //       company_url:
    //         "",
    //       logo_path: "intel_logo.jpg",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "",
    //     },
    //     {
    //       title: "",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Android Applications and deploy them to Google Play store.",
  avatar_image_path: "projects_image.svg",
};

const projectsData = {
  myProjects: [
    {
      id: 1,
      name: "ChatWith-me App",
      description:
        "A firebase backed messageing system with Authentication and Realtime database ",
      createdAt: "2021-03-06",
      //liveUrl: "https://www.subhamraoniar.com/",
      gitUrl: "https://github.com/sainath-AI/ChatWithMe",
    },
    {
      id: 2,
      name: "WallPaperX",
      description:
        "A firebase firestore cloud wallpapers application to download and set wallpaper inbuilt system Application.",
      createdAt: "2021-03-06",
        liveUrl: "https://play.google.com/store/apps/details?id=com.masai.sainath.wallpaperx",
      gitUrl: "https://github.com/sainath-AI/WallpaperX",
    },
    {
      id: 3,
      name: "Write_Notes App",
      description:
        "A simple notes Application with decent UI for daily todo list as well as taking notes system for students.",
      createdAt: "2021-07-06",
       liveUrl: "https://play.google.com/store/apps/details?id=com.masai.sainath.writenotesapp",
      gitUrl: "https://github.com/sainath-AI?tab=repositories",
    },
    {
      id: 4,
      name: "Licious",
      description:
        "A meat delivery application -cloned with variety of meats foods  ",
      createdAt: "2021-20-07",
      //liveUrl: "https://www.subhamraoniar.com/",
      gitUrl: "https://github.com/sainath-AI/Licious",
    },
    {
      id: 5,
      name: "RentoMojo",
      description:
        "A Furniture renting App for monthly rental furnished goods  ",
      createdAt: "2021-1-28",
      //liveUrl: "https://www.subhamraoniar.com/",
      gitUrl: "https://github.com/ishu260596/RentoMojo",
    },
    {
      id: 6,
      name: "Poetry",
      description:
        "A dating application with user friendly UI implemnting the fronted Clone of Tagged",
      createdAt: "2020-31-12",
      //liveUrl: "https://www.subhamraoniar.com/",
      gitUrl: "https://github.com/sainath-AI/Poetry",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpg",
    description:
      "I am available on almost every social media. You can message me anytime, I will reply within 24 hours. I can help you with Java, Kotlin, Android ,Firebase cloud Development system.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write blogs to explain solutions of digital & technical problems in much simpler way.",
    link: "https://hashnode.com/@sainath01",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Yelhanka, Bangalore, Karnataka, 560063",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7619374117",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  //competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projectsData,
  contactPageData,
};

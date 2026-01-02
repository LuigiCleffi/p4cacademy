import { CoursesInfo } from ".";

const courses = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/250px-Unofficial_JavaScript_logo_2.svg.png",
    title: "JavaScript",
    description: "Entenda sobre o mundo de JavaScript",
    badges: ["Typescript"],
    courseModules: [
      {
        title: "Introdução ao JavaScript",
        description: "Aprenda os conceitos básicos do JavaScript",
        content: [
          {
            title: "Introduction to Course",
            description: "Learn the basics of the course.",
          },
          {
            title: "Advanced Topics",
            description: "Dive deeper into advanced subjects.",
          },
          {
            title: "Practical Applications",
            description: "Apply what you've learned in real-world scenarios.",
          },
          {
            title: "Final Project",
            description: "Showcase your knowledge with a final project.",
          },
        ],
      },
    ],
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Java_programming_language_logo.svg/500px-Java_programming_language_logo.svg.png?20190828223431",
    title: "Java",
    description: "Entenda sobre Java",
    badges: [
      "Spring Boot",
      "Hibernate",
      "Gradle",
      "JPA",
      "Mockito",
      "Cucumber",
    ],
    courseModules: [
      {
        title: "Introdução ao Java",
        description: "Aprenda os conceitos básicos do Java",
      },
    ],
  },
] satisfies CoursesInfo[];

export { courses };

interface ProjectProps {
  description: string;
  techStack: string;
  gitHubLink: string;
  websiteLink?: string;
}

export const projects: Record<string, ProjectProps> = {
  PetWatch: {
    description:
      "PetWatch is an application created to reunite lost pets with their owners through QR code identification, instant chat, and location-based map pins. Built with a Vue.js front-end, Node.js back-end, and Nuxt3 framework.",
    techStack:
      "Vue.js, Node.js, Nuxt3, MongoDB, GCP, Auth0 API, Gooogle Maps API",
    gitHubLink: "https://github.com/SFU-CMPT372-Team5/PetWatch",
    websiteLink: "https://petwatch.website/",
  },
  CRADLE: {
    description:
      "The Cradle VSA System is a life-saving healthcare solution designed to enhance prenatal healthcare in underserved regions like Uganda. Built with React (TypeScript) front-end and Flask(Python) back-end.",
    techStack: "React, TypeScript, Python, Flask, MySQL, AWS Cognito",
    gitHubLink: "https://github.com/drbfraser/CRADLE-Platform",
  },
  PlantCare: {
    description:
      "PlantCare is an Android app built with Kotlin to help users manage houseplants, providing care instructions, watering reminders, and Firebase-powered data storage.",
    techStack: "Kotlin, Android SDK, Firebase Database, Firebase Storage",
    gitHubLink: "https://github.com/CMPT362-PlantCare/PlantCare",
  },
};

export type SocialLink = {
  network: string;
  url: string; 
};

export type User = {
  firstName: string; 
  lastName: string; 
  city: string;
  country: string; 
  description: string; 
  socialLinks: SocialLink[]; 
};

export const users: User[] = [
  {
    firstName: "Jessica",
    lastName: "Randall",
    city: "London",
    country: "United Kingdom",
    description: "Front-end developer and avid reader",
    socialLinks: [
      {
        network: "Github",
        url: "https://github.com/",
      },
      {
        network: "Frontend Mentor",
        url: "https://Frontendmentor.com/",
      },
      {
        network: "Linkedin",
        url: "https://linkedin.com/",
      },
      {
        network: "LinkedIn",
        url: "https://twitter.com/",
      },
      {
        network: "Instagram",
        url: "https://instagram.com/",
      },
    ],
  },
];
import {
  mobile,
  backend,
  creator,
  web,
  linkedin,
  avm,
  roblox,
  aftereffects,
  blender,
  premiere,
  illustrator,
  photoshop,
  cardimage,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "3D Animator",
    icon: web,
  },
  {
    title: "Video Editor",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Roblox",
    icon: roblox,
  },
  {
    name: "After Effects",
    icon: aftereffects,
  },
  {
    name: "Premiere Pro",
    icon: premiere,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
];

const experiences = [
  {
    title: "3D Animator and Video Editor",
    company_name: "SourceSoft Solutions Pvt. Ltd.",
    icon: avm,
    iconBg: "#383E56",
    date: "2022 -  2023",
    points: [
      "Crafting engaging and dynamic 3D animations that align with client visions and project requirements.",
      "Editing and refining video content to ensure seamless storytelling and visual coherence.",
      "Implementing cutting-edge animation and editing techniques to enhance visual appeal and effectiveness.",
      "Gathering and incorporating feedback to continuously improve the quality and impact of animations and videos.",
    ],
  },
];

const testimonials = [
  {
    key: 2,
    testimonial: "Connect with me on Linkedin.",
    name: "Piyush Kashyap",
    image: linkedin,
    link: "https://www.linkedin.com/in/piyush-kashyap-aa55b5244/",
  },
];

const projects = [
  {
    name: "3D Animations",
    description: "Checkout my all work on 3D Animations and Video Editor.",
    tags: [
      {
        name: "3DAnimations",
        color: "blue-text-gradient",
      },
      {
        name: "videoeditor",
        color: "pink-text-gradient",
      },
      {
        name: "designer",
        color: "orange-text-gradient",
      },
    ],
    image: cardimage,

    netlify_link:
      "https://drive.google.com/drive/folders/1Rz9g27uCVbbha8uz21dzXINVAxbktIPz",
  },
];

export { services, technologies, experiences, testimonials, projects };

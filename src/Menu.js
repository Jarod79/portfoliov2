import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export const menuList = [
  {
    nameFr: "Accueil",
    nameEn: "Home",
    pathFr: "/accueil",
    pathEn: "/home",
    component: <Home />
  },
  {
    nameFr: "A propos",
    nameEn: "About",
    pathFr: "/a-propos",
    pathEn: "/about",
    component: <About />
  },
  {
    nameFr: "Compétences",
    nameEn: "Skills",
    pathFr: "/competences",
    pathEn: "/skills",
    component: <Skills />
  },
  {
    nameFr: "Projets",
    nameEn: "Projects",
    pathFr: "/portfolio",
    pathEn: "/portfolio",
    component: <Portfolio />
  },
  {
    nameFr: "Contact",
    nameEn: "Contact",
    pathFr: "/contact",
    pathEn: "/contact",
    component: <Contact />
  }
];

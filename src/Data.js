import {  FaCss3, FaNodeJs, FaReact, FaSass, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import {TiHtml5} from 'react-icons/ti'
import {} from 'react-icons/si'

import { TbBrandJavascript,TbBrandAngular } from "react-icons/tb";
import { SiTypescript ,SiStyledcomponents,SiTailwindcss,SiJest,SiWhatsapp,SiWebpack,SiEslint,SiFigma,SiFlutter} from "react-icons/si";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "sobre", " habilidades", "portfolio", "contato"]

export const socialIcons = [
  <FaGithubAlt />,
  <FaLinkedin />,
  <SiWhatsapp/>
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Uenis Santos"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "(21)994305914"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "uenisprogramador@gmail.com"
  }
]

export const icons = [<TiHtml5 />, <FaCss3 />,  <TbBrandJavascript />, 
<SiTypescript />,<SiJest/>,<SiFlutter/>, <SiStyledcomponents/>, <SiTailwindcss/>, <FaReact />,
 <FaNodeJs />, <FaSass />, <TbBrandAngular />  ,<SiWebpack/>,<SiEslint/>, <SiFigma/>]

export const experiences = [
  {
    id: 1,
    year: "2021 -atual",
    position: "Developer Front-End",
    company: "99Freelas"
  },
  {
    di: 2,
    year: "2020-2021",
    position: " Developer Front-End Junior",
    company: " Outlar Serviços "
  },

]
export const finishes = [
  {
    id: 1,
    number: '1 +',
    itemName: "Anos de experiência "
  },
  {
    id: 2,
    number: "20+",
    itemName: "Clientes satisfeitos"
  },
  {
    id: 3,
    number: "40+",
    itemName: "Itens projetados "
  },
  {
    id: 4,
    number: "30+",
    itemName: "Clientes atendidos "
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "todos", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Nova Iguacu RJ"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "uenisprogramador@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "(21)994305914"
  }
]

import React from 'react'
import portfolio from "../../../assets/portfolio.png"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'> Olá, sou<span>Uenis Santos</span> </h3>
        <span className='job'>Cursando analise e Desenvolvimento de sistemas</span>
        <span className='text'>Gosto <br /> de criar e inovar <br />  sites e aplicativos.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
         conecte-se comigo</motion.a>
        <div
          className="web"
        >
          Desenvolvedor Front-End
        </div>
        <div
          className="mobile"
        >
        Desenvolvedor Flutter
        </div>
        <div
          className="freelance"
        >
          Freelancer
        </div>
      </div>
    </motion.div>
  )
}

export default Home
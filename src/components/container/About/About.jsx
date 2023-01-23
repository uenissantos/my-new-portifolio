import React, { useState } from 'react'
import "./About.scss";

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/portfolio.png"
import curriculo from "../../../assets/curriculo.pdf"

const About = () => {
  const [pdfView, setpdfView] = useState(false);





  return (
    <div className="container " id='sobre'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Quem sou eu? </span>
        <h1>Sobre mim </h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p>Meu nome é Uenis de jesus Santos sou uma pessoa otimista que acredita no poder do propósito .
 Sou proativo, estratégico , processual e enérgico.Gosto de mim sentir util na equipe e manter um bom posicionamento na liderança em grupo.
 A liberdade de atuação com foco em geração de resultado mim motiva,
 afinal o sucesso da organização não é negociável''

Maiores informações ,me chame pra conversar</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'> <a href="/">{bio.value}</a> </span>
              </div>
            )
          })}
          <motion.a href={curriculo} download
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >             
           Baixar Curriculo
          </motion.a>
 <div onMouseOver={  ()=>  setpdfView(true)} onMouseOut={  ()=>  setpdfView(false) } className='on_mouse_over'>

</div> 

        </motion.div>
 { pdfView&& <motion.div  className='curriculo   '  onMouseOver={  ()=>  setpdfView(true)} onMouseOut={  ()=>  setpdfView(false)  }   >
   <iframe 
  className='view_curriculo'  title='curriculo' src={`${curriculo}`} >
    curriculo</iframe> 
 </motion.div>} 
      </div  >

    </div>
  )
}

export default About
import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>entrar em contato </span>
            <h1>Contate-Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Apenas diga oi</h3>
          <p className='contact_text'>A vida sem sonhos, sejam eles pequenos ou enormes,
não tem a menor graça.
Por isso, a cada nova conquista, coloque uma nova meta.
Trace planos para o dia, para a semana, este mês.
para este ano e os próximos 10 anos.i</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Entrar em contato</h3>
          <div className="row">
            <input type="text" placeholder=' nome' />
          </div>
          <div className="row">
            <input type="email" placeholder='Email' />
          </div>
          <div className="row">
            <textarea placeholder='mensagem'></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
            <a href="/">enviar</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
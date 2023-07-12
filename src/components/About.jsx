import React from 'react'
import  { Tilt }  from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-full shadow-card'
      >
        <div
          options={
            {
              max: 45,
              scale: 1,
              speed: 450,
            }
          }
          className='bg-[#FFA500] rounded-full py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col'
        >
              <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>


      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>


      <motion.p variants={fadeIn("", "", 0.1, 1)} 
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Divine astrological research center MAHASHAKTI JYOTISH KENDRA  was started in the
 year 1996 at holy place Haridwar (uttarakhand) in INDIA by an eminent
<span className='text-black font-bold'> AACHARYA SHRI </span>
 have a excellence knowledge of Vedic Astrology, ayurveda and all kind of vedic pujan as a hobby since childhood. He pursued
 Jyotish studies from Banaras (Kashi). He was also awarded as a 
Jyotish Samrat, Jyotish Ratna & Jyotish Bhaskar. He has 35 yrs experience in the field 
of Astrology, Occult science, Tantra, Mantra, Yantra etc.

He has made thousands of successful predictions to let people understand the power of vedic astrology.


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
      ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
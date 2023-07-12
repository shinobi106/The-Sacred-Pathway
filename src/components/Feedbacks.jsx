import React from 'react'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({index, testimonial, name, designation, company, image}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-[#E7E7E7] p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-black font-black text-[48px]'>"</p>

    <div className='mt-1'>
    <p className='text-black tracking-wider text-[18px]'>{testimonial}</p>

    <div className='mt-7 flex justify-between items-center gap-1'>
      <div className='flex-1 flex flex-col'>
        <p className='text-black font-medium text-[16px]'>
          <span className='text-[#FFA500]'></span>
          {name}
        </p>
        <p className='mt-1 text-secondary text-[12px]'>{designation}{company} </p>
      </div>
      <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover'/>
    </div>
    </div>
    
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-[#D8D8D8] rounded-[20px]'>
      <div className={`${styles.padding} bg-white rounded-2xl min-h-[300px]`}>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>SERVICES OF</p>
          <h2 className={styles.sectionHeadText}>Vedic Pujan.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
              key={testimonial.name}
              index={index}
              {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");
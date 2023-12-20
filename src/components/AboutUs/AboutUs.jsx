import React from 'react'
import "./AboutUs.css"
import { motion } from 'framer-motion'

const contaainerAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  })
}

const AboutUs = React.forwardRef((_, ref) => {
  return (
    <div ref={ref}>
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        className='about-us'>
        <motion.h2
          custom={1}
          variants={contaainerAnimation}
          className='aboutUsTitle'>Մեր մասին</motion.h2>
        <div
          className='about-us-block'>
          <motion.p
            custom={2}
            variants={contaainerAnimation}
            className='about-us-block-text'>
            LigtCode ծրագրավորման դպրոցը հիմնադրվել է 2023 թվականին։ Մեր դպրոցի առաքելությունն է զարգացնել IT ոլորտը Հայաստանում, նպաստել մրցունակ շուկայի ստեղծմանը՝ պատրաստելով բարձր որակավորում ունեցող մասնագետներ, որոնցից յուրաքանչյուրը հետագայում իր տեղը կգտնի IT աշխարհում: Մեր դասերն անցկացվում են փորձառու մասնագետների կողմից, ովքեր միշտ պատրաստ են տարիների ընթացքում կուտակած իրենց գիտելիքներն ու մասնագիտական հմտությունները փոխանցել Ձեզ՝ հասցնելով բուն նպատակին:
            Մեր դասերն անց են կացվում օնլայն ռեժիմով, որը բացառիկ հնարավորություն է տալիս մարզերում բնակվող մարդկանց նույնպես ստանալ կրթություն՝ առանց ժամանակի կորստի: Իդեպ, ուսման պրոցեսի արդյունավետությունը դրանից ամենևին էլ չի կորչում, քանի որ յուրաքանչյուր դասապրոցեսից հետո մենք տրամադրում ենք տվյալ վիդեոդասի ձայնագրությունը, ինչը թույլ է տալիս ուսանողներին վերանայել բաց թողնված պահերը, կամ ուղղակի կրկնել արդեն իսկ անցած նյութը ուսուցման ողջ ընթացքում:
            Դասընթացները մշակված են բարձր որակավորում ունեցող մասնագետների կողմից և պարբերաբար թարմացվում են՝ ըստ շուկայի պահանջի: Մեր դպրոցը համագործակցում է մի շարք IT ընկերությունների հետ, որոնցում լավագույն ուսանողները կարող են անցնել իրենց փորձաշրջանը՝ դասընթացն ավարտելուց անմիջապես հետո:
          </motion.p>
          <motion.div
            custom={3}
            variants={contaainerAnimation}>
            <img className='about-us-block-img' src='./img/cursePage.png' />
          </motion.div>

        </div>
      </motion.section>
    </div>
  )
})

export default AboutUs
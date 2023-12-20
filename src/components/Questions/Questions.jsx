import React from 'react'
import './Questions.css'
import QuestionsBlock from './QuestionsBlock'
import { motion } from 'framer-motion'
const QUESTIONS = [
    {
        id: 1,
        title: 'Ու՞մ համարեն դասընթացները:',
        description: 'Դասընթացները նախատեսված են սկսնակների համար, բոլոր մասնագիտություննրը մեզ հետ կուսումնասիրեք 0-ից: '
    },
    {
        id: 2,
        title: 'Քանի՞ տարեկանից է ընդունելությունը։',
        description: 'Դասընթացներին կարող են գրանցվել 15-տարեկանից բարձր անձինք, ինչպես նաև ունենք ծրագրավորման կուրսեր հատու երեխաների համար որին կարող են գրանցվել 7 տարեկանից բարձր երեխաները:'
    },
    {
        id: 3,
        title: 'Դասերն անհատակա՞ն են, թե՞ խմբային։',
        description: 'Դասերն անցկացվում են խմբային և անհատական տարբերակով:'
    },
    {
        id: 4,
        title: 'Դասընթացի ավարտից հետո սերտիֆիկատ տրամադրու՞մ եք։',
        description: 'Մասնագիտական ուղղվածության որևէ դասընթացի ամբողջական ավարտից հետո տրամադրում ենք սերտիֆիկատ՝ համապատասխան որակավորմամբ։'
    },
    {
        id: 4,
        title: 'Ձեզ մոտ սովորելուց հետո կարո՞ղ եմ ընդունվել աշխատանքի։',
        description: 'Դասընթացի ավարտից հետո բոլոր ուսանողները կունենան իրենց անհատական պորտֆոլիոն որը կարողեն ներկայացնել գործատուին։'
    },
]

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

const Questions = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            className='questions'>
            <motion.h4
                custom={1}
                variants={contaainerAnimation}
                className='questions-title'>հաճախ տրվող հարցեր</motion.h4>
            {
                QUESTIONS.map((question) => {
                    return (
                        <motion.div
                        key={question.id}
                        custom={1}
                        variants={contaainerAnimation}
                        >
                            <QuestionsBlock question={question} />
                        </motion.div>)
                })
            }
        </motion.section>
    )
}

export default Questions
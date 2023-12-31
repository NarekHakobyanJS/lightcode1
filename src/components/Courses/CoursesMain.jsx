import React from 'react'
import CoursesCard from './CoursesCard/CoursesCard'
import { motion } from 'framer-motion'
import './CoursesMain.css'

const COURSES = [
    {
        id: 1,
        title: 'Web (Front-End) ծրագրավորում',
        month: '8 ամիս',
        image: './img/courses/js.png',
        description: 'Այս դասընթացը հնարավորություն կտա ձեզ կարճ ժամանակում տիրապետել բոլոր այն տեխնոլոգիաներին, որոնք անհրաժեշտ են պրոֆեսիոնալ web կայքեր պատրաստելու համար և դառնալ պահանջված ու մրցունակ մասնագետ ՏՏ աշխատաշուկայում:',
        stage: 'Դասընթացը կազմված է 3 փուլից',
        stages: ['HTML5, CSS3, SASS', "JavaScript", 'React.js (Redux)'],
        value: '35.000',
        certificate: 'Դասընթացի ավարտին բոլոր ուսանողներին կտրվի վկայական։',
        hour: "Դասընթացի տևողություն՝ 8 ամիս, շաբաթական՝ 3 պարապմունք (1.30-ից 2 ժամ տևողությամբ)։",
        video: 'Յուրաքանչյուր դասի ավարտին կստանաք նաև դասի տեսագրությունը՝',
    },
    {
        id: 2,
        title: 'JavaScript ծրագրավորում',
        month: '3 ամիս',
        image: './img/courses/js.png',
        description: `Լինելով web ծրագրավորման մեջ կիրառվող հիմնական լեզուներից մեկը՝ JavaScript-ը լայնորեն օգտագործվում է նաև Mobile, Desktop հավելվածների և տարբեր խաղերի մշակման մեջ։ Երկար տարիներ շարունակ այն համարվում է աշխարհում ամենապահանջված ծրագրավորման լեզուներից մեկը: Ի տարբերություն մյուս այլ ծրագրավորման լեզուների JavaScript-ը համեմատաբար ավելի հեշտ է յուրացնել:`,
        stage: 'Դասընթացը կազմված է 2 փուլից',
        stages: ["JavaScript in depth", 'DOM (Document Obejcet Model)'],
        value: '35.000',
        certificate: 'Դասընթացի ավարտին բոլոր ուսանողներին կտրվի վկայական։',
        hour: "Դասընթացի տևողություն՝ 3 ամիս, շաբաթական՝ 3 պարապմունք (1.30-ից 2 ժամ տևողությամբ)։",
        video: 'Յուրաքանչյուր դասի ավարտին կստանաք նաև դասի տեսագրությունը՝',
    },
    {
        id: 3,
        title: 'React.js ծրագրավորում',
        month: '3 ամիս',
        image: './img/courses/react.svg',
        description: `ReactJS-ը հանդիսանում է Front-End ծրագրավորման ամենապահանջված և թրենդային գրադարանը, որը կիրառվում է ժամանակակից Web հավելվածների ստեղծման մեջ: Տիրապետելով ReactJS-ին դուք հնարավորություն կստանաք դառնալ պահանջված և մրցունակ Front-End մասնագետ: Ավելին, ReactJS-ը յուրացնելուց հետո դուք կարող եք հետագայում ստեղծել Mobile հավելվածներ React-Native գրադարանի օգնությամբ:`,
        value: '35.000',
        stage: 'Դասընթացը կազմված է 3 փուլից',
        stages: ["ReactJS", 'Redux & Redux/Toolkit', 'TypeScript'],
        certificate: 'Դասընթացի ավարտին բոլոր ուսանողներին կտրվի վկայական։',
        hour: "Դասընթացի տևողություն՝ 3 ամիս, շաբաթական՝ 3 պարապմունք (1.30-ից 2 ժամ տևողությամբ)։",
        video: 'Յուրաքանչյուր դասի ավարտին կստանաք նաև դասի տեսագրությունը՝',
    },
    {
        id: 4,
        title: 'Երեխաների ծրագրավորում',
        month: '3 ամիս',
        image: './img/courses/html.jpg',
        description: `Մեր դպրոցն առաջարկում է ծրագրավորման հատուկ դասընթաց ձեր փոքրիկների համար: Այն թույլ կտա ձեր երեխային կատարել առաջին քայլերը ՏՏ ոլորտում, ծանոթանալ ծրագրավորման գայթակղիչ աշխարհին: Դասընթացը հիմք կդնի փոքրիկի մեջ տվյալ ոլորտում հետագա հաստատուն քայլերն անելու համար: `,
        value: '35.000',
        stage: 'Դասընթացը կազմված է 2 փուլից',
        stages: ["HTML", 'CSS'],
        certificate: 'Դասընթացի ավարտին բոլոր ուսանողներին կտրվի վկայական։',
        hour: "Դասընթացի տևողություն՝ 3 ամիս, շաբաթական՝ 2 պարապմունք (1.30 ժամ տևողությամբ)։",
        video: 'Յուրաքանչյուր դասի ավարտին կստանաք նաև դասի տեսագրությունը՝',
    },
    {
        id: 5,
        title: 'Manual QA',
        month: '2 ամիս',
        image: './img/courses/qa.jpg',
        description: 'Այս դասընթացի ընթացքում դուք կծանոթանաք թեստավորման հիմնական գաղափարներին և հիմունքներին, ամբողջական պատկերացում կկազմեք թեստավորման փուլերի ու տեսակների մասին և գործնականորեն կկիրառեք այդ գիտելիքներն իրական ծրագրերը ստուգելու համար:',
        certificate: 'Դասընթացի ավարտին բոլոր ուսանողներին կտրվի վկայական։',
        value: '45.000',
        certificate: 'Դասընթացի ավարտին բոլոր ուսանողներին կտրվի վկայական։',
        hour: "Դասընթացի տևողություն՝ 2 ամիս, շաբաթական՝ 2 պարապմունք (1.30-ից 2 ժամ տևողությամբ)։",
        video: 'Յուրաքանչյուր դասի ավարտին կստանաք նաև դասի տեսագրությունը՝',
    },
    {
        id: 6,
        title: 'UX/UI',
        month: '2 ամիս',
        image: './img/courses/uxui.png',
        description: 'Դասընթացը հնարավորություն կտա ձեզ ստանալ UX/UI դիզայնի մասին հիմնարար գիտելիքներ, լիովին տիրապետել Figma ծրագրով աշխատելու համար անհրաժեշտ բոլոր գործիքներին և տեխնոլոգիաներին: Բացի այդ դասընթացից հետո դուք կունենաք պատրաստի աշխատանքներ (պորտֆոլիո), որոնք կարող եք ներկայացնել աշխատանքի ընդունվելիս:',
        certificate: 'Դասընթացի ավարտին բոլոր ուսանողներին կտրվի վկայական։',
        value: '45.000',
        certificate: 'Դասընթացի ավարտին բոլոր ուսանողներին կտրվի վկայական։',
        hour: "Դասընթացի տևողություն՝ 2 ամիս, շաբաթական՝ 3 պարապմունք (1.30-ից 2 ժամ տևողությամբ)։",
        video: 'Յուրաքանչյուր դասի ավարտին կստանաք նաև դասի տեսագրությունը՝',
    },
    // {
    //     id: 7,
    //     title: 'Project Management',
    //     image: './img/courses/pm.jpg',
    //     month: '2 ամիս',
    //     description: 'Project Management բնորոշվում է որպես նախագծերի պլանավորման, վերահսկման և լայնածավալ խնդիրների լուծման գործընթաց։ Խնդիրները ունեն հստակ նպատակ, սահմանված են ժամկետների մեջ և ունեն սահմանափակ ռեսուրսներ: Այս մոտեցումը թույլ է տալիս համատեղել ընկերության մեջ մշտական ​​(գծային) գործընթացները և նպատակային (միանգամյա) նախաձեռնությունները մեկ ընդհանուրի մեջ:',
    //     certificate: 'Դասընթացի ավարտին բոլոր ուսանողներին կտրվի վկայական։',
    //     value: '45.000',
    //     certificate: 'Դասընթացի ավարտին բոլոր ուսանողներին կտրվի վկայական։',
    //     hour: "Դասընթացի տևողություն՝ 2 ամիս, շաբաթական՝ 3 պարապմունք (1.30 2 ժամ տևողությամբ)։",
    //     video: 'Յուրաքանչյուր դասի ավարտին կստանաք նաև դասի տեսագրությունը՝',
    // },

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

const CoursesMain = React.forwardRef(({ setCourse }, ref) => {
    return (
        <div ref={ref}>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: true }}
                className='CoursesMain'>
                <motion.h2
                    custom={1}
                    variants={contaainerAnimation}
                    className='CoursesMainTitle'>Դասընթացներ</motion.h2>
                <div
                    className='CoursesMainBlock'>
                    {
                        COURSES.map((c) => {
                            return <CoursesCard key={c.id} course={c} setCourse={setCourse} />
                        })
                    }
                </div>
            </motion.div>
        </div>
    )
}
)

export default CoursesMain
import React from 'react'
import './AdvantagesLeft.css';
import AdvantagesLeftDecription from './AdvantagesLeftDecription/AdvantagesLeftDecription';


const AdvantagesData = [
  {
    id : "1",
    title : "Ցածր գներ հասանելի բոլորին",
    description : "Մենք առաջարկում ենք անհամեմատ ցածր գներ, որի հետ մեկտեղ ապահովում ենք ուսման բարձր որակ:",
    icon : ''
  },
  {
    id : "2",
    title : "Փորձառու մասնագետներ",
    description : "Մեր փորձառու մասնագետները դասընթացի ողջ ընթացքում, և դրանից դուրս կլինեն ձեզ հետ միշտ օգնելով ձեզ հասնել ցանկալի արդյունքի:",
    icon : ''
  },
  {
    id : "3",
    title : "Փոքր խմբեր անհատական մոտեցում",
    description : "Դասընթացները անցկացվում են՝ 5-7 ուսանողից կազմված խմբերից, ապահովելով անհատական մոտեցում յուրաքանչյուր ուսանողին:",
    icon : ''
  },
  {
    id : "4",
    title : "1 դասի անվճար մասնակցություն",
    description : "Բոլոր ուսանողներին կտրամադրվի 1 փարձնական անվճար դաս:",
    icon : ''
  },
  {
    id : "5",
    title : "Դասընթացներ ձայնագրություն",
    description : "Մեր բոլոր դասընթացները ձայնագրվում են, դասընթացից հետո տրամադրվում են ձեզ, որպեսզի միշտ կարողանաք կրկնել թեմաները:",
    icon : ''
  },
  {
    id : "6",
    title : "Տրամադրվում է վկայական",
    description : "Դասընթացների ավարտից հետո բոլոր ոսանողներին տրամադրվում է վկայական:",
    icon : ''
  },
  {
    id : "7",
    title : "Օնլայն",
    description : "Դասընթացները անցկացվում են օնլայն ֆորմատով թույլ տալով մարզերում բնակվողներին նույնպես մասնակցել դասընթացներին խնայելով ժամանակը:",
    icon : ''
  },
]

const AdvantagesLeft = () => {
  return (
    <div className='AdvantagesLeft'>
      {
        AdvantagesData.map((advantages) => {
          return <AdvantagesLeftDecription key={advantages.id} advantages={advantages}/>
         })
      }
    </div>
  )
}

export default AdvantagesLeft
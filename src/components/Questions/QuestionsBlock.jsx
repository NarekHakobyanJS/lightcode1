import React, { useState } from 'react'
import './QuestionsBlock.css'

const QuestionsBlock = ({ question }) => {

    const [openDescription, setOpenDescription] = useState(false)

    const openPopup = () => {
        setOpenDescription((prev) => !prev)
    }

    return (
        <div className='QuestionsBlock'>
            <div className='QuestionsBlockOne' onClick={() => openPopup(question.id)}>
                <div className='QuestionsBlockOneOne'>
                    <h5>{question.title}</h5>
                    <b>{ openDescription ? "-" : "+"}</b>
                </div>{
                    openDescription && <p className='QuestionsBlockTwo'>{question.description}  </p>
                }

            </div>
        </div>
    )
}

export default QuestionsBlock
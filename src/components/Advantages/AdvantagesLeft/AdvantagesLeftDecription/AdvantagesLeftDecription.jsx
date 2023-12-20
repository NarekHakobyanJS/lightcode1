import React, { useState } from 'react'
import './AdvantagesLeftDecription.css'

const AdvantagesLeftDecription = ({ advantages }) => {

    const [openDescription, setOpenDescription] = useState(false)

    const openPopup = () => {
        setOpenDescription((prev) => !prev)
    }

    return (
        <div className='AdvantagesBlock'>
            <div className='AdvantagesBlockOne' onClick={() => openPopup(advantages.id)}>
                <div className='AdvantagesBlockOneOne'>
                    <h5>{advantages.title}</h5>
                    <b>{openDescription ? "-" : "+"}</b>
                </div>{
                    openDescription && <p className='AdvantagesBlockTwo'>{advantages.description}  </p>
                }

            </div>
        </div>
    )
}

export default AdvantagesLeftDecription
import React from 'react'
import './Footer.css'
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from "react-icons/ai"
import { ImYoutube } from "react-icons/im"
const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='footer-one'>
                    <h4>Հետադարձ կապ</h4>
                    <ul>
                        <li>
                            <FiPhoneCall />
                            <a href="tel:+37455263313">+37455263313</a>
                        </li>
                        <li>
                            <MdOutlineMarkEmailRead />
                            <a href='mailto:hakobyan95narek@gmail.com'>lightcode.am@gmail.com</a>
                        </li>
                    </ul>

                </div>
                <div className='footer-logo'>
                    <img width={80} src='./img/logo.png' />
                    <p>© Բոլոր իրավունքները պաշտպանված են</p>
                </div>
                <div className='footer-two'>
                    <h4>Սոց. կայքեր</h4>

                    <ul className='social'>
                        <li>
                            <a href='https://www.facebook.com/profile.php?id=100095400020992' target="_blank">
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/lightcode_am/' target="_blank">
                                < AiFillInstagram />
                            </a>

                        </li>
                        <li>
                            <a href='https://www.youtube.com/channel/UCdMkuMUhkMBIYf9kqZ-y9EQ' target="_blank">
                                < ImYoutube />
                            </a>

                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className='cBlock'>
                <b className='c'>© Բոլոր իրավունքները պաշտպանված են</b>
            </div> */}
        </footer>
    )
}

export default Footer
import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {

    return (
        <>

        <div className='footer'>
        <div className='footersub'>
            <div className='footer1'>
                <AiOutlineInstagram/>
                <FaFacebookF style={{ fontSize: '80%', marginLeft: '20px'}}/>
            </div>
            <div className='footer2'>
            INFO@KIMIAVIATION.COM
            </div>
            <div className='footer3'>
            © 2022 KIMI AVIATION
            </div>
            <div className='footer3'>
            SITE BY DE JONGENS VAN BOVEN
            </div>
        </div>

        </div>

        </>
    )

}

export default Footer;
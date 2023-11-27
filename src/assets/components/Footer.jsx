import React from 'react'
import './styles/Footer.css'

const Footer = () => {
    return (
        <>
        
            <div className="footer">
                <ul className="footer-links">
                    <li className='footer__ul__li'>
                        <a className="footer__icon" href="https://github.com/SergioByte23" target="blank">
                            <img className='footer__img github' src="/public/git.png" alt="github" />
                        </a>
                    </li>
                    <li className='footer__ul__li'>
                        <a className="footer__icon" href="https://www.linkedin.com/in/sergio-delgado-maco-397583165/" target="blank">
                            <img className='footer__img linkedin' src="/public/in.png" alt="linkedin" />
                        </a>
                    </li>
                    <li className='footer__ul__li'>
                        <a className="footer__icon" href="https://www.instagram.com/sergiodelgadomaco/" target="blank">
                            <img className='footer__img ig' src="/public/ig.png" alt="instagram" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='footer__box'>
            <div className="footer-text">
                <h3 className="ff-family-poppins-semi-b">Web Designer</h3>
                <p className="ff-family-sen"><span className="full ff-family-poppins-semi-b">FULL</span> Stack</p>
            </div>
            </div>
        </>
    )
}

export default Footer
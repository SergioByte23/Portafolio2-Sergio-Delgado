import './styles/Main.css'

const Main = () => {
    return (
        <>
            <section className='main__section__major main--last-proyects' id='portfolio' >

                <div className='section__div__mayor'>
                    <h3 className="main__subtitle" >My last proyects</h3>
                    <img className="main__img img--triangle" src="/public/imagen3.svg" alt="" />
                </div>
                <section className="main__Section main--last-proyects-box" >
                    <section className="main__section__section" >
                        <div className="main__section__div">
                            <h3 className='section__subtitle'>Wiki app</h3>
                            <a className="section__a" href="https://trabajo03-react.vercel.app/" target="_blank">
                                <img className="main__section__img" src="/wiki-rickandmorty.png" alt="f" />
                            </a>
                        </div>
                        <div className="main__section__div">
                            <h3 className='section__subtitle'>Weather app</h3>
                            <a className="section__a" href="https://trabajo02-react.vercel.app/" target="_blank">
                                <img className="main__section__img" src="/weatherapp.png" alt="g" />
                            </a>
                        </div>
                        <div className="main__section__div">
                            <h3 className='section__subtitle'>Ecomerce</h3>
                            <a className="section__a" href="https://ecomerce-nu.vercel.app/" target="_blank">
                                <img className="main__section__img" src="/ecomer.png" alt="h" />
                            </a>
                        </div>
                        <div className="main__section__div">
                            <h3 className='section__subtitle'>Galleta de la fortuna</h3>
                            <a className="section__a" href="https://trabajo012-react.vercel.app/" target="_blank">
                                <img className="main__section__img" src="/galletadelafortuna.png" alt="j" />
                            </a>
                        </div>
                        <div className="main__section__div">
                            <h3 className='section__subtitle'>Galleta de la fortuna</h3>
                            <a className="section__a" href="https://trabajo012-react.vercel.app/" target="_blank">
                                <img className="main__section__img" src="/galletadelafortuna.png" alt="j" />
                            </a>
                        </div>
                    </section>
                </section>
            </section>
            <section className='main__section__major main__section--square' id='contact'>

                <div className='section__div__mayor'>
                    <h3 className="main__subtitle__form">Let's talk</h3>
                    <img className="main__img img--square" src="/imagen4.svg" alt="" />
                </div>
                <section className="main__Section main__Section--form">
                    <section className="section__section--form">
                        <form className="form-contact" name="contact" netlify>
                            <div className="form-group form-group1 ">
                                <label for="">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-group form-group2">
                                <label for="">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="form-group form-group3">
                                <label for="">Message</label>
                                <textarea maxlength="200" rows="4" name="message" id="message"></textarea>
                            </div>
                            <div className="form-group form-group4">
                                <button name="submit" id="submit">Send</button>
                            </div>
                        </form>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Main
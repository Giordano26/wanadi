import Fade from 'react-reveal/Fade';

import img from '../../assets/PicsArt_11-20-11.51.28.png'

const Home = () => {
    return (
        <main className="l-main">
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <Fade top ><h1 className="home__title">Olá,<br />Somos a <span className="home__title-color">Wanadi</span>,<br />uma empresa de social media</h1></Fade>
                    <Fade top><a href="https://api.whatsapp.com/send?phone=5511980833440" className="button">Contato</a></Fade>
                </div>


                <div className="home__img">
                <Fade top> <img src={img} alt="My pic"></img> </Fade>
                </div>
            </section>
        </main>
    )
}

export default Home;
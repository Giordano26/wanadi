
import Fade from 'react-reveal/Fade';



import aboutImage from '../../assets/photoimg.png'

const About = () => {
    return (
        <section className="about section" id="about" >
            <h2 className="section-title">Quem Somos</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                   <Fade top><img alt="images" src={aboutImage} /></Fade>
                </div>

                <div>
                    <Fade top>
                    <h2 className="about__subtitle">Mucho texto</h2>
                    <p className="about__text">Mucho textoMucho textoMucho textoMucho textoMucho textoMucho textoMucho textoMucho textoMucho textoMucho texto</p>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default About;
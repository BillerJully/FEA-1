import './personal.css'
import userImage from '../files/user-img.jpg'
import tg from '../files/tg.svg'
import lin from '../files/in.svg'

const Personal = () => {
    return (
        <section className="personal">
            <h1>Software engineer</h1>
            <div className="img-area">
                <img src={userImage} alt="" />
            </div>
            <div className="personal-description">
                <h2>Bulat Zinnurov</h2>
                <div className="personal-description-block">
                    <span className="info-key">Age:</span>
                    <span className="info-value">24 y.o.</span>
                </div>
                <div className="personal-description-block">
                    <span className="info-key">Location:</span>
                    <span className="info-value">Kazan</span>
                </div>
                <div className="personal-description-block">
                    <span className="info-key">Experience:</span>
                    <span className="info-value">2 years</span>
                </div>
            </div>
            <div className="personal-social-links">
                <h3>Social links</h3>
                <div className="personal-social-links-block">
                    <div className="personal-social-link">
                        <a href="" className="social-link-a">
                            <img src={tg} className="link-img" alt="" />
                        </a>
                    </div>
                    <div className="personal-social-link">
                        <a href="" className="social-link-a">
                            <img
                                src={lin}
                                className="link-img"
                                alt=""
                                title="GitHub"
                            />
                        </a>
                    </div>
                    <div className="personal-social-link">
                        <a href="" className="social-link-a">
                            <img src="" alt="" />
                        </a>
                    </div>
                    <div className="personal-social-link">
                        <a href="" className="social-link-a">
                            <img src="" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Personal

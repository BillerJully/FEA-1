import './personal.css'
import userImage from '../files/user-img.jpg'
import tg from '../files/tg.png'
import lin from '../files/lin.png'
import github from '../files/github.png'
import gitlab from '../files/gitlab.png'
import userData from '../files/user.json'

const Personal = () => {
    return (
        <section className="personal">
            <h1>{userData.profession}</h1>
            <div className="img-area">
                <img src={userImage} alt="" />
            </div>
            <div className="personal-description">
                <h2>{userData.userName}</h2>
                <div className="personal-description-block">
                    <span className="info-key">Age:</span>
                    <span className="info-value">{userData.age}</span>
                </div>
                <div className="personal-description-block">
                    <span className="info-key">Location:</span>
                    <span className="info-value">{userData.location}</span>
                </div>
                <div className="personal-description-block">
                    <span className="info-key">Experience:</span>
                    <span className="info-value">{userData.experience}</span>
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
                            <img src={github} className="link-img" alt="" />
                        </a>
                    </div>
                    <div className="personal-social-link">
                        <a href="" className="social-link-a">
                            <img src={gitlab} className="link-img" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Personal

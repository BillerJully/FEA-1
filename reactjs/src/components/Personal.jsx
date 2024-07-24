import './personal.css'
const Personal = () => {
    return (
        <section className="personal">
            <h1>This is personal</h1>
            <div className="img-area">
                <img src="" alt="" />
            </div>
            <div className="personal-description">
                <h2>Bulat Zinnurov</h2>
                <div className="personal-description-block">24 y.o.</div>
                <div className="personal-description-block">Kazan</div>
            </div>
            <div className="personal-social-links">
                <div className="personal-social-link">num1</div>
                <div className="personal-social-link">num2</div>
                <div className="personal-social-link">num3</div>
                <div className="personal-social-link">num4</div>
            </div>
        </section>
    )
}

export default Personal

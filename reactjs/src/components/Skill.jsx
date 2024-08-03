import React from 'react'
import './skill.css'
import RadarChart from './Radar'

export default function Skill({ skillData }) {
    const skillQty = skillData.map((item) => item.skillQty)
    const skill = skillData.map((item) => item.skill)

    return (
        <div className="skill-block">
            <div className="skills-container">
                {skill.map((skillName, index) => (
                    <p className="skill-name" key={index}>
                        {skillName}
                    </p>
                ))}
            </div>
            <div className="skills-map">
                <RadarChart labels={skill} data={skillQty} />
            </div>
        </div>
    )
}

import React from 'react'
import './skill.css'
import RadarChart from './Radar'

export default function Skill() {
    const data = [85, 75, 90, 80, 70, 20]
    const labels = ['1', '2', '3', '4', '5', '6']
    return (
        <div className="skill-block">
            <div className="skills-map">
                <RadarChart labels={labels} data={data} />
            </div>
            <div className="skills-container"></div>
        </div>
    )
}

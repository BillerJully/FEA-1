import React, { useRef, useEffect } from 'react'

const RadarChart = ({ data, labels }) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        if (data && labels && data.length === labels.length) {
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')
            drawRadarChart(ctx, data, labels)
        }
    }, [data, labels])

    const drawRadarChart = (ctx, data, labels) => {
        const numPoints = labels.length
        const radius = 150
        const centerX = canvasRef.current.width / 2
        const centerY = canvasRef.current.height / 2

        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

        ctx.strokeStyle = '#ddd'
        ctx.beginPath()
        for (let i = 0; i < numPoints; i++) {
            const angle = ((2 * Math.PI) / numPoints) * i
            const x = centerX + radius * Math.cos(angle)
            const y = centerY + radius * Math.sin(angle)
            ctx.moveTo(centerX, centerY)
            ctx.lineTo(x, y)
        }
        ctx.stroke()

        for (let j = 0; j < 5; j++) {
            ctx.beginPath()
            for (let i = 0; i < numPoints; i++) {
                const angle = ((2 * Math.PI) / numPoints) * i
                const x = centerX + ((radius * (j + 1)) / 5) * Math.cos(angle)
                const y = centerY + ((radius * (j + 1)) / 5) * Math.sin(angle)
                if (i === 0) ctx.moveTo(x, y)
                else ctx.lineTo(x, y)
            }
            ctx.closePath()
            ctx.stroke()
        }

        ctx.strokeStyle = 'rgba(31, 122, 202, 1)'
        ctx.fillStyle = 'rgba(34, 202, 236, 0.2)'
        ctx.beginPath()
        data.forEach((point, i) => {
            const angle = ((2 * Math.PI) / numPoints) * i
            const x = centerX + radius * (point / 100) * Math.cos(angle)
            const y = centerY + radius * (point / 100) * Math.sin(angle)
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
        })
        ctx.closePath()
        ctx.stroke()
        ctx.fill()

        ctx.fillStyle = '#111'
        ctx.font = '14px Arial'
        labels.forEach((label, i) => {
            const angle = ((2 * Math.PI) / numPoints) * i
            const x = centerX + (radius + 20) * Math.cos(angle)
            const y = centerY + (radius + 20) * Math.sin(angle)
            ctx.fillText(label, x, y)
        })
    }

    return (
        <div>
            <canvas ref={canvasRef} width="600" height="400" />
        </div>
    )
}

export default RadarChart

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { motion } from 'framer-motion'
import { CirclePicker } from 'react-color'
const useStyles = makeStyles({
    titlediv: {
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'column',
    },
    colorSquare: {
        animation: '$spin infinite 20s linear',
    },
    '@keyframes spin': {
        '0%': {
            transform: 'rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(360deg)',
        },
    },
    blockArea: {
        width: '80%',
        height: '45rem',
        backgroundColor: 'rgba(255,255,255,0.3)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    card: {
        width: '15rem',
        height: '15rem',
        backgroundColor: 'rgba(0,0,0,0.5)',
        '&:hover': {
            transform: 'scale(1.1)',
            transitionDuration: '0.5s',
        },
    },
})
const Works = (props) => {
    const classes = useStyles()
    const [color, setColor] = useState('#FFF')
    const [shadow, setShadow] = useState('rgba(255,255,255,0.7)')
    const handleChangeColor = (color, event) => {
        setColor(color.hex)
        setShadow(`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},0.7)`)
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            exit={{
                opacity: 0,
                y: -100,
                transition: {
                    ease: 'easeIn',
                },
            }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                color: '#FFF',
            }}
        >
            <div className={classes.titlediv}>
                <h1>專案作品</h1>
                <div className={classes.blockArea}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <div
                    className={classes.colorSquare}
                    style={{
                        backgroundColor: color,
                        boxShadow: '0px 0px 15px ' + shadow,
                        width: '100px',
                        height: '100px',
                        borderRadius: '10px',
                        position: 'absolute',
                        top: 100,
                        right: 40,
                        // opacity: 0.5,
                    }}
                />
                <div
                    className={classes.colorSquare}
                    style={{
                        backgroundColor: color,
                        boxShadow: '0px 0px 15px ' + shadow,
                        width: '100px',
                        height: '100px',
                        borderRadius: '10px',
                        position: 'absolute',
                        top: 100,
                        left: 40,
                        // opacity: 0.5,
                    }}
                />

                <div
                    className={classes.colorSquare}
                    style={{
                        backgroundColor: color,
                        boxShadow: '0px 0px 15px ' + shadow,
                        width: '100px',
                        height: '100px',
                        borderRadius: '10px',
                        position: 'absolute',
                        bottom: 10,
                        left: 40,
                        // opacity: 0.5,
                    }}
                />

                <div style={{ position: 'absolute', bottom: 10, right: 20 }}>
                    <CirclePicker onChangeComplete={handleChangeColor} />
                </div>
            </div>
        </motion.div>
    )
}

const Card = (props) => {
    const classes = useStyles()
    return <div className={classes.card}>Card</div>
}

export default Works

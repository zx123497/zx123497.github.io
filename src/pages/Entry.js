/* eslint-disable max-len */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Hana from '../assets/hana.png'
import Family from '../assets/family.png'
import Mise from '../assets/mise.png'
import FilterVintageIcon from '@material-ui/icons/FilterVintage'
import Input from '@material-ui/core/Input'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0E073C',
    },
})

const Home = (props) => {
    const [text, setText] = useState('')
    const classes = useStyles()

    return (
        <motion.div
            style={{ position: 'relative' }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: -100 }}
        >
            <div className={classes.root}>
                <div
                    style={{
                        backgroundColor: 'rgba(255,255,255,.2)',
                        padding: '20px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',

                        flexDirection: 'column',
                        borderRadius: '10px',
                    }}
                >
                    <img
                        src={Hana}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: '20%',
                            width: '15%',
                            filter: 'drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))',
                        }}
                        alt="img"
                    />
                    <img
                        src={Hana}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '20%',
                            right: '45%',
                            filter: 'drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))',
                        }}
                        alt="img"
                    />
                    <img
                        src={Hana}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '22%',
                            right: '30%',
                            filter: 'drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))',
                        }}
                        alt="img"
                    />
                    <img
                        src={Mise}
                        style={{
                            position: 'absolute',
                            bottom: -15,
                            width: '22%',
                            left: 0,
                            filter: 'drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))',
                        }}
                        alt="img"
                    />
                    <img
                        src={Family}
                        style={{
                            position: 'absolute',
                            bottom: -33,
                            width: '30%',
                            right: '50%',
                            filter: 'drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))',
                        }}
                        alt="img"
                    />
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <FilterVintageIcon style={{ margin: '0 1rem', color: '#FFF' }} />
                        <h1 style={{ color: 'red', margin: '0' }}>花</h1>
                        <h1 style={{ color: 'yellow', margin: '0' }}>火</h1>
                        <h1 style={{ color: 'pink', margin: '0' }}>大</h1>
                        <h1 style={{ color: 'aqua', margin: '0' }}>会</h1>
                        <FilterVintageIcon style={{ margin: '0 1rem', color: '#FFF' }} />
                    </div>

                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            style={{
                                color: '#FFF',
                                borderColor: '#FFF',
                                margin: '30px',
                            }}
                        >
                            <Input
                                style={{
                                    color: '#FFF',

                                    '&.MuiInput-underline:before': {
                                        borderBottom: '1px solid #FFF',
                                    },
                                }}
                                value={text}
                                placeholder="輸入暱稱"
                                inputProps={{ 'aria-label': 'description' }}
                                onChange={(evt) => {
                                    setText(evt.target.value)
                                }}
                            />
                        </div>

                        <NavLink
                            to={`/hanabi/${text}`}
                            style={{
                                width: '100%',

                                color: '#FFF',
                                textAlign: 'center',
                                border: '2px rgba(255,255,255,.2) solid',
                                marginTop: '20px',
                            }}
                        >
                            加入
                        </NavLink>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Home

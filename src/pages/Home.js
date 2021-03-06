/* eslint-disable max-len */
import React, { useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Title from '../assets/title.svg'
import HomeImage from '../assets/HomeImage.JPG'

import UX from '../assets/ux.svg'
import TutorGirl from '../assets/tutor_girl.gif'
import Engineer from '../assets/engineer.svg'
import Paint from '../assets/paint-palette.svg'
import Baseball from '../assets/baseball.jpg'
import Draw from '../assets/Draw.JPG'

const FadeInWhenVisible = ({ children, delay }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('show')
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3 }}
            variants={{
                whileHover: { scale: 1.1 },
                hidden: { opacity: 0, scale: 0, y: 300 },
                show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 1, ease: 'backOut', delay: delay },
                },
            }}
        >
            {children}
        </motion.div>
    )
}

const Home = () => {
    const ref = useRef(null)
    // const scrollToNext = () => {
    //   ref.current.scrollIntoView({ behavior: "smooth" });
    // };
    useEffect(() => {}, [])
    const classes = useStyles()
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
        >
            <div className="flex flex-col">
                <div
                    style={{
                        background: 'linear-gradient(rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1) 95%)',
                        // backgroundColor: "#FFF",
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div className="flex flex-col m-auto min-h-screen text-white justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1,
                                    delay: 1,
                                    ease: 'easeInOut',
                                },
                            }}
                            style={{ width: '100%' }}
                        >
                            <div>
                                <img src={Title} style={{}} alt="img" />
                            </div>
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, x: 100 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1,
                                    delay: 1.5,
                                    ease: 'easeInOut',
                                },
                            }}
                            style={{ color: '#999' }}
                        >
                            Record my Life and Journey
                        </motion.h3>
                    </div>
                    <div className={classes.bar}>
                        <div
                            style={{
                                fontSize: '18px',
                                color: '#FFF',
                                letterSpacing: '2px',
                                fontFamily: '-moz-initial',
                                fontWeight: 'bold',
                            }}
                        >
                            Scroll
                        </div>
                        <div className="scroll"></div>
                    </div>
                </div>
                {/* second section start */}
                <div id="2" ref={ref} className={classes.serviceContainer}>
                    <div style={{ position: 'relative' }}>
                        <h2 style={{ marginBottom: '3rem', color: '#555' }}>???????????? My Services</h2>
                        <motion.div
                            className={classes.blockContainer}
                            variants={{
                                hidden: { opacity: 0, y: 0 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            initial="hidden"
                            animate="show"
                        >
                            <FadeInWhenVisible delay={0.25}>
                                <div className={classes.block}>
                                    <div>
                                        <img
                                            src={UX}
                                            style={{
                                                width: '5rem',
                                                marginBottom: '2rem',
                                            }}
                                            alt="img"
                                        />
                                    </div>
                                    <div>
                                        <h3>UI/UX ??????</h3>
                                    </div>
                                    <div>
                                        <div className="flex">
                                            ?????????UI/UX???????????????Adobe
                                            XD????????????Pinterest?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                        </div>
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible delay={0.5}>
                                <div className={classes.block}>
                                    <div>
                                        <img
                                            src={Engineer}
                                            style={{
                                                width: '5rem',
                                                marginBottom: '2rem',
                                            }}
                                            alt="img"
                                        />
                                    </div>
                                    <div>
                                        <h3>????????????</h3>
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                lineHeight: '1.5rem',
                                            }}
                                        >
                                            ????????????????????????React???React native????????????????????????Framer
                                            Motion??????????????????????????????????????????????????????????????????????????????
                                        </div>
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible delay={0.75}>
                                <div className={classes.block}>
                                    <div>
                                        <img
                                            src={Paint}
                                            style={{
                                                width: '5rem',
                                                marginBottom: '2rem',
                                            }}
                                            alt="img"
                                        />
                                    </div>
                                    <div>
                                        <h3>????????????</h3>
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                lineHeight: '1.5rem',
                                            }}
                                        >
                                            ????????? Adobe Photoshop???Adobe
                                            Aftereffect???Procreate???????????????????????????????????????GIF??????????????????????????????
                                        </div>
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        </motion.div>
                    </div>
                </div>
                {/* third section  */}
                <div className={classes.thirdSection}>
                    <div className="dot1" style={{ left: '5%' }} />
                    <div className="dot1" style={{ left: '20%', top: '40%' }} />
                    <div
                        className="dot2"
                        style={{
                            left: '10%',
                            top: '10%',
                            width: '4rem',
                            height: '4rem',
                        }}
                    />
                    <div
                        className="dot2"
                        style={{
                            left: '25%',
                            top: '50%',
                            width: '3rem',
                            height: '3rem',
                        }}
                    />
                    <div
                        className="dot1"
                        style={{
                            left: '15%',
                            bottom: '10%',
                            width: '5rem',
                            height: '5rem',
                        }}
                    />
                    <span className="img">
                        <img src={TutorGirl} alt="img" style={{ width: '100%' }} />
                    </span>
                    <div>
                        <h2 className="title">????????????????????? A little bit Myself</h2>
                        <div className="block">
                            <div className="imgCirc">
                                <img src={Draw} alt="img" style={{ width: '100%' }} />
                            </div>
                            <div className="desc">
                                <h4>??????????????????</h4>
                                <p>
                                    ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????Procreate?????????????????????Blender????????????????????????????????????????????????????????????????????????
                                    ...
                                </p>
                            </div>
                        </div>
                        <div className="block">
                            <div className="desc">
                                <h4>??????????????????</h4>
                                <p>?????????????????????????????????????????????????????????????????????????????????????????????????????????!!!</p>
                            </div>
                            <div className="imgCirc2">
                                <img src={Baseball} alt="img" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div className="block">
                            <div className="imgCirc">
                                <img src={Baseball} alt="img" style={{ width: '100%' }} />
                            </div>
                            <div className="desc">
                                <h4>???????????????</h4>
                                <p>
                                    ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????!!!
                                </p>
                            </div>
                        </div>
                        <div className="block">
                            <div className="desc">
                                <h4>??????????????????</h4>
                                <p>
                                    ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                </p>
                            </div>
                            <div className="imgCirc2">
                                <img src={HomeImage} alt="img" style={{ width: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        '@media (-width:768px)': {},
        '& .nextBut': {
            width: '50px',
            height: '50px',
            position: 'absolute',
            backgroundColor: 'rgba(255,255,255,0.4)',
            bottom: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            left: '50%',
        },
    },
    '@keyframes down': {
        '0%': {
            transform: 'translateY(-200%)',
        },
        '100%': {
            transform: 'translateY(0)',
        },
    },

    bar: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        zIndex: 3,
        textAlign: 'center',
        '& .scroll': {
            height: '60px',
            margin: ' 0.6rem auto 0',
            width: '2px',
            overflow: 'hidden',
            position: 'relative',
            background: '#000',
        },
        '& .scroll::after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2px',
            height: '100%',
            backgroundColor: '#750DFC',
            animation: '$down 2s cubic-bezier(0.6, 0, 0.2, 1) 1s infinite',
            willChange: 'transform',
        },
    },
    thirdSection: {
        display: 'flex',
        backgroundColor: '#222',
        position: 'relative',
        justifyContent: 'center',
        padding: '5rem',
        '& .title': {
            color: '#FFF',
            textAlign: 'center',
            marginBottom: '3rem',
            position: 'relative',
        },
        '& .img': {
            position: 'absolute',
            bottom: 0,
            right: '5%',
            width: '20%',
            display: 'flex',
        },
        '& .desc': {
            flex: 1,
            color: '#ccc',
        },
        '& .block': {
            display: 'flex',
            margin: '1rem auto',
            width: '50%',
            minWidth: '30rem',
            padding: '1rem 3rem',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        },
        '& .imgCirc': {
            margin: '0 2rem',
            display: 'flex',
            width: '7rem',
            height: '7rem',
            borderRadius: '50%',
            overflow: 'hidden',
            // boxShadow: "3px 3px 6px rgba(0,0,0,0.3)",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
            // animation: "$radio 1.5s ease-out .75s infinite",
        },
        '& .imgCirc2': {
            margin: '0 2rem',
            display: 'flex',
            width: '7rem',
            height: '7rem',
            borderRadius: '50%',
            overflow: 'hidden',
            // boxShadow: "3px 3px 6px rgba(0,0,0,0.3)",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
            // animation: "$radio2 1.5s ease-out .75s infinite",
        },
        '& .imgCirc:hover': {
            transform: 'scale(1.1)',
            transition: 'all 400ms cubic-bezier(.47,2,.6,.8) ',
        },
        '& .imgCirc2:hover': {
            transform: 'scale(1.1)',
            transition: 'all 400ms cubic-bezier(.47,2,.6,.8) ',
        },
        '& .dot1': {
            width: '2rem',
            height: '2rem',
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,217,24,.7)',
            animation: '$radio 1.5s ease-out .75s infinite',
        },
        '& .dot2': {
            width: '2rem',
            height: '2rem',
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: 'rgba(117, 13, 252,.7)',
            animation: '$radio2 1.5s ease-out .75s infinite',
        },
    },
    '@keyframes radio': {
        '0%': {
            boxShadow: '0 0 0px rgba(255,217,24,1)',
        },
        '100%': {
            boxShadow: '0 0 100px rgba(255,217,24,0)',
        },
    },
    '@keyframes radio2': {
        '0%': {
            boxShadow: '0 0 0px rgba(117, 13, 252,.9)',
        },
        '100%': {
            boxShadow: '0 0 50px rgba(117, 13, 252,0)',
        },
    },
    serviceContainer: {
        backgroundColor: '#eee',
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        width: '100%',
        padding: '5rem',
    },
    blockContainer: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    block: {
        marginRight: '2rem',
        padding: '2rem',
    },
}))

export default Home

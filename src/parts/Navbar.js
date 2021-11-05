/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Grid } from '@material-ui/core'
import useScrollPosition from '@react-hook/window-scroll'
import { NavLink } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    Navbar: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        backdropFilter: 'blur(5px)',
        boxShadow: '0 0 0 rgba(0,0,0,0)',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.2s',
        '&.atTop': {
            backgroundColor: 'transparent',
            transform: 'scaleY(1.05)',
            height: '90px',
        },
    },
    middle: {
        display: 'flex',

        alignItems: 'center',
        margin: 8,
    },
    Brandname: {
        flexGrow: 1,
        display: 'flex',

        alignItems: 'center',
        margin: 8,
    },
}))

const ButtonAppBar = (props) => {
    const classes = useStyles()
    const scrollY = useScrollPosition(60 /* fps*/)
    const [atTop, setAtTop] = useState(true)
    if (scrollY > 50 && atTop === true) {
        setAtTop(false)
    }
    if (scrollY <= 50 && atTop === false) {
        setAtTop(true)
    }
    return (
        <AppBar position="fixed" className={classes.Navbar + (atTop ? ' atTop' : '')}>
            <Grid display="inline" container justify="flex-start" alignItems="center">
                <NavLink style={{ flex: 1, marginLeft: '5rem' }} to="/">
                    <h3 style={{ color: 'white', fontFamily: 'monospace' }}>Bubble Dragon</h3>
                </NavLink>

                <IconButton onClick={props.func} style={{ marginRight: '2rem' }}>
                    <MenuIcon style={{ color: '#FFF' }} />
                </IconButton>
            </Grid>
        </AppBar>
    )
}
export default ButtonAppBar

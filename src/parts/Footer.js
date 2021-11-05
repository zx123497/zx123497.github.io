import React from 'react'
import Title from '../assets/Group 1.png'
import { IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
const Footer = (props) => {
    return (
        <div
            style={{
                width: '100%',
                margin: '0 auto',
                backgroundColor: '#333',
                height: '15rem',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={Title}
                    style={{ width: '20rem', height: 'auto' }}
                    alt="img"
                />
                <div style={{ display: 'flex', marginTop: '2rem' }}>
                    <IconButton
                        style={{ backgroundColor: '#FFF', margin: '0 .5rem' }}
                    >
                        <GitHubIcon
                            style={{ fontSize: '1.5rem', color: '#750DFC' }}
                        />
                    </IconButton>
                    <IconButton
                        style={{ backgroundColor: '#FFF', margin: '0 .5rem' }}
                    >
                        <FacebookIcon
                            style={{ fontSize: '1.5rem', color: '#750DFC' }}
                        />
                    </IconButton>
                    <IconButton
                        style={{ backgroundColor: '#FFF', margin: '0 .5rem' }}
                    >
                        <InstagramIcon
                            style={{ fontSize: '1.5rem', color: '#750DFC' }}
                        />
                    </IconButton>
                    <IconButton
                        style={{ backgroundColor: '#FFF', margin: '0 .5rem' }}
                    >
                        <LinkedInIcon
                            style={{ fontSize: '1.5rem', color: '#750DFC' }}
                        />
                    </IconButton>
                </div>
            </div>
            <div style={{}}>
                <h3 style={{ color: '#FFF', marginBottom: '2rem' }}>
                    About website
                </h3>
                <div style={{ display: 'flex', minWidth: 'max-content' }}>
                    <div
                        style={{
                            color: '#ccc',
                            display: 'flex',

                            marginBottom: '1rem',
                            marginLeft: '1rem',
                        }}
                    >
                        <h4>首頁</h4>
                    </div>
                    <div
                        style={{
                            color: '#ccc',
                            display: 'flex',

                            marginBottom: '1rem',
                            marginLeft: '1rem',
                        }}
                    >
                        <h4>關於我</h4>
                    </div>
                    <div
                        style={{
                            color: '#ccc',
                            display: 'flex',
                            marginLeft: '1rem',
                        }}
                    >
                        <h4>花火大會</h4>
                    </div>
                    <div
                        style={{
                            color: '#ccc',
                            display: 'flex',
                            marginLeft: '1rem',
                        }}
                    >
                        <h4>網頁作品專案</h4>
                    </div>
                </div>
            </div>
            <div style={{}}>
                <h3 style={{ color: '#FFF', marginBottom: '2rem' }}>
                    Contact me
                </h3>
                <div
                    style={{
                        color: '#FFF',
                        display: 'flex',
                        marginBottom: '1rem',
                        marginLeft: '1rem',
                    }}
                >
                    <MailIcon style={{ marginRight: '1rem' }} />
                    <h5>leo000111444@gmail.com</h5>
                </div>
                <div
                    style={{
                        color: '#FFF',
                        display: 'flex',
                        marginLeft: '1rem',
                    }}
                >
                    <PhoneIphoneIcon style={{ marginRight: '1rem' }} />
                    <h5>0912-820-036</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer

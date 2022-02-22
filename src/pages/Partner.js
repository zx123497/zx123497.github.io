import React, { useState, useEffect } from 'react'
import pttService from '../services/pttService'
const Partner = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        pttService.getArticles().then((res) => {
            console.log(res)
            setList(res)
        })
    }, [])
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <h1 style={{ color: '#FFF' }}>大家好</h1>
            <div>
                {list ? (
                    list.map((item, i) => (
                        <div
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.3)',
                                padding: '15px',
                                borderRadius: '10px',
                                maxWidth: '20rem',
                                margin: '10px',
                            }}
                            key={i}
                        >
                            <div style={{ color: '#FFF', fontSize: '1.5rem' }}>{item.title}</div>
                            <div style={{ color: '#FFF' }}>{item.board}</div>
                            <div style={{ color: '#FFF' }}>{item.author}</div>
                            <div style={{ color: '#FFF' }}>{item.date}</div>
                            <div style={{ color: '#FFF' }}>{item.content}</div>
                        </div>
                    ))
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default Partner

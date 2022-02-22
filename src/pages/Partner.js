import React, { useState, useEffect } from 'react'
import pttService from '../services/pttService'
const Partner = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        pttService.getArticles().then((res) => {
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
            }}
        >
            <h1 style={{ color: '#FFF' }}>大家好</h1>
            {list ? list.map((item, i) => <div key={i}>{item.title}</div>) : <></>}
        </div>
    )
}

export default Partner

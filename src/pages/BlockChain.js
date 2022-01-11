import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Marigold from '../assets/marigold.png'
import Web3 from 'web3'

const useStyles = makeStyles((theme) => ({
    transaction_area: {
        width: '100%',
        height: '23rem',
        backgroundColor: '#ccc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '90px',
    },
    textarea: {
        width: '50rem',
    },
    moneyarea: {
        width: '7rem',
        marginLeft: '1rem',
    },
    submit: {
        backgroundColor: 'rgb(117, 13, 252)',
        color: '#FFF',
        boxShadow: '0 3px 3px rgba(0,0,0,0.3)',
        marginLeft: '10px',
        marginTop: '1rem',
        width: '10rem',
        fontSize: '1rem',
    },
    record_area: {
        width: '100%',
        minHeight: '25rem',
        backgroundColor: '#eee',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 0',
    },
    card: {
        width: 'max-content',
        borderRadius: '10px',
        height: '5rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '0 0 1rem 0',
    },
    title: {
        marginRight: '2rem',
        fontWeight: 'bold',
    },
    list: {
        display: 'flex',
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    bigTitle: {
        fontSize: '2rem',
        width: 'max-content',
    },
    num: {
        width: '5rem',
        borderRight: '5px rgb(117, 13, 252) solid',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        color: 'rgb(117, 13, 252)',
    },
    cardInfo: {
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}))

const BlockChain = () => {
    const classes = useStyles()
    const [account, setAccount] = useState()

    const [record, setRecord] = useState([])
    const [input, setInput] = useState()
    const [inputMoney, setInputMoney] = useState()

    useEffect(() => {
        /**
         * Adds two numbers together.
         * @param {int} num1 The first number.
         * @param {int} num2 The second number.
         * @return {int} The sum of the two numbers.
         */
        async function load() {
            const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
            const accounts = await web3.eth.requestAccounts()

            setAccount(accounts[0])
        }
        load()
    }, [])

    const addRecord = () => {
        const newRecord = input
        const money = inputMoney

        setRecord(record.concat({ address: newRecord, money: money }))
        setInput('')
        setInputMoney('')
    }
    const onInputChange = (event) => {
        setInput(event.target.value)
    }
    const onMoneyChange = (event) => {
        setInputMoney(event.target.value)
    }

    return (
        <div>
            <div className={classes.transaction_area}>
                <div className={classes.bigTitle}>領取你的MariGold</div>
                <div className={classes.flexCenter}>
                    <div>
                        <TextField
                            id="outlined-basic"
                            className={classes.textarea}
                            label="交易對象錢包地址"
                            value={input}
                            onChange={onInputChange}
                        ></TextField>
                    </div>
                    <TextField
                        id="outlined-basic"
                        className={classes.moneyarea}
                        label="金額(MRG)"
                        value={inputMoney}
                        onChange={onMoneyChange}
                    ></TextField>
                </div>
                <div>你的帳戶是: {account}</div>
                <Button
                    className={classes.submit}
                    onClick={() => {
                        addRecord()
                    }}
                >
                    轉出
                </Button>
            </div>
            <div className={classes.record_area}>
                <span className={classes.flexCenter}>
                    {/* <img src={Marigold} alt="marigold" />
                    <div className={classes.bigTitle}>交易紀錄</div>
                    <img src={Marigold} alt="marigold" /> */}
                </span>

                {record.map((row, id) => (
                    <Card key={id} num={id + 1} address={row.address} money={row.money} />
                ))}
            </div>
        </div>
    )
}

const Card = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.card}>
            <div className={classes.num}>{props.num}</div>
            <div className={classes.cardInfo}>
                <div className={classes.list}>
                    <span className={classes.title}>交易地址</span>
                    <span style={{ fontWeight: 'bold' }}>{props.address}</span>
                </div>
                <div className={classes.list}>
                    <span className={classes.title}>交易金額</span>
                    <span className={classes.flexCenter} style={{ margin: 0 }}>
                        <img src={Marigold} alt="marigold" />
                        {props.money} MariGold
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BlockChain

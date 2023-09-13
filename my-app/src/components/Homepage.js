import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage({}) {
    // const navigate = useNavigate()

    // useEffect(()=>{
    //     if(user === 588) {
    //         return navigate("/")
    //     }
    // })

    return (
        <div style={{ justifyContent: 'center', display: 'flex', paddingTop: 50, backgroundColor: '#e2e8f0', height: '590px', color: 'gray', fontFamily: "cursive" }}>
            <h2>″You can always change your plan,<br /> but only if you have one.<br /> I’m a big believer in to-do lists.<br /> It helps us break life into small steps.<br /> I once put “get tenure” on my to-do list. <br />That was naïve.<br /> The most useful to-do list breaks<br /> tasks into small steps. <br />It’s like when I encourage Logan <br />to clean his room by picking up<br /> one thing at a time.″<br /> <h3 style={{ paddingLeft: 400, color: 'black' }}><strong>~Randy Pausch</strong></h3></h2>
        </div>
    )
}

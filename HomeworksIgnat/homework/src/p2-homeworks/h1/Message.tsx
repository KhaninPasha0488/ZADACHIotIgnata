import React from 'react'
import s from './Message.module.css'
type MessagePropsType = {
    avatar:string
    name:string
    message:string
    time:string
}
function Message(props:MessagePropsType) {
    return (
        <div className={s.messagebloc}>
           <img src={props.avatar} className={s.imges}/>
            <div className={s.message}>
                <div className={s.names}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.times}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message

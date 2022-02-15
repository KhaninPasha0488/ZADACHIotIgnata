import React from 'react'
import {AffairType} from "./HW2";
import  s from "./Affairs.module.css"
type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.comLine}>
           <span className={s.spans}>{props.affair.name} </span>
            <span className={s.spansi}> [ {props.affair.priority}]</span>


            <button className={s.someClass} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair

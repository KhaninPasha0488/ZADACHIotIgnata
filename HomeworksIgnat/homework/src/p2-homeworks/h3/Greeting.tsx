import React, {ChangeEvent, KeyboardEvent}  from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name:string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: ()=> void // need to fix any
    onEnter:(e: KeyboardEvent<HTMLInputElement>)=> void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onEnter} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyDown={onEnter}
                   onBlur={setNameCallback}
            />
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            <div>
                <span>{error}</span>
            </div>
        </div>
    )
}

export default Greeting

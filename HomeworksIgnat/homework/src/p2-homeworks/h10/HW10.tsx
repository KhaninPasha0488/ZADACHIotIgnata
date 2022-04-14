import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW10.module.css'
function HW10() {
    // useSelector, useDispatch
    const [loading, setLoadings]  = useState(false)
// const loading = false
    const setLoading = () => {
        setLoadings(true)
        setTimeout(()=>setLoadings(false),2000,)
    }

        // dispatch




    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.preloader}>
                        <div className={s.preloader__row}>
                            <div className={s.preloader__item}></div>
                            <div className={s.preloader__item}></div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

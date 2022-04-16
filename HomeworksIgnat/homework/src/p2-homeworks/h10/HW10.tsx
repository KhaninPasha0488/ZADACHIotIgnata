import React  from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW10.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
function HW10() {
    const isLoading = useSelector<AppStoreType,boolean>(state => state.loading.isLoading)
   const dispatch = useDispatch()
//     const [loading, setLoadings]  = useState(false)
// // const loading = false
    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(()=>dispatch(loadingAC(false)),2000,)
    }



    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
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

import React from 'react'
import Header from './Header'

import {HashRouter} from "react-router-dom";
import Routess from "./Routess";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

                {/* eslint-disable-next-line react/jsx-no-undef */}
            <Routess/>

            </HashRouter>
        </div>
    )
}

export default HW5

import axios from 'axios'
import React, { useEffect } from 'react'

export default function auth(SpecificComponent, option, adminRoute = null) {
    // for option params
    // null => 아무나 출입이 가능한 페이지
    // true => 로그인한 유저만 출입이 가능한 페이지
    // false => 로그인한 유저는 출입 불가능한 페이지
    function AuthenticationCheck(props) {
        useEffect(() => {
            const OriginServer = window.location.origin.replace(window.location.port, "5000");
            axios.get(OriginServer + '/api/users/auth')
            .then(response => {
                console.log(response)

                // 로그인 하지 않은 상태
                if(!response.data.isAuth) {
                    if(option) {
                        props.history.push('/login')
                    }
                } else {
                    // 로그인 한 상태
                    if(adminRoute && !response.data.isAdmin) {
                        props.history.push('/')
                    } else {
                        if(option === false)
                        props.history.push('/')
                    }
                }
            })
        }, [props])

        return (
            <SpecificComponent />   
        )
    }
    return AuthenticationCheck
}

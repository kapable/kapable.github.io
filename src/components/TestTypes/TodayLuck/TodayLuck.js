import React, { useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const TodayLuck = () => {
    const saju_url = 'https://saju.ktestone.com';
    const instance = axios.create({headers: {
        'Content-Type': 'application/json',
        'access-control-allow-origin': '*',
        'x-powered-by': 'Express' 
    },});

    useEffect(() => {
        instance.get(saju_url+`/today/total`)
        .then((res) => {
            console.log(res);
        })
        .catch(() => {
            alert('메시지를 보내는 중에 에러가 발생했어요 ㅠㅠ')
        })
        // const sayHello = async () => {
        //     await axios.get(saju_url + `/today/total`)
        //     .then(res => {
        //         console.log(res);
        //     })
        // }
        // sayHello();
    }, [instance, saju_url]);

    return (
        <div>TodayLuck</div>
    );
};

export default TodayLuck;
import React, { useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const TodayLuck = () => {
    const saju_url = 'https://saju.ktestone.com';
    const headerOptions = {
        'Content-Type': 'application/json',
        'x-powered-by': 'Express' 
    };
    const instance = axios.create({headers: headerOptions,});

    useEffect(() => {
        // instance.get(dev_url+`/today/total`)
        // .then((res) => {
        //     console.log(res);
        // })
        // .catch(() => {
        //     alert('메시지를 보내는 중에 에러가 발생했어요 ㅠㅠ')
        // })
        const sayHello = async () => {
            try {
                await axios.get(saju_url + `/today/total`)
                .then(res => {
                    console.log(res);
                })
            } catch (error) {
                console.error(error);
                alert('메시지를 보내는 중에 에러가 발생했어요 ㅠㅠ')
            }
        }
        sayHello();
    }, [instance, saju_url, headerOptions]);

    return (
        <div>TodayLuck</div>
    );
};

export default TodayLuck;
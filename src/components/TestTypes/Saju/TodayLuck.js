import React, { useEffect } from 'react';
import axios from 'axios';

const TodayLuck = () => {
    const saju_url = 'https://saju.ktestone.com';
    useEffect(() => {
        const getToday = async () => {
            await axios.get(
                saju_url + '/today/total'
            )
            .then((res) => {
                console.log(res);
            });
        }
        getToday();
    }, [saju_url]);

    return (
        <div>TodayLuck</div>
    );
};

export default TodayLuck;
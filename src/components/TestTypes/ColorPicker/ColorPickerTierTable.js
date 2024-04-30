import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';

const ColorPickerTierTable = ({ currentTier, totalTime, tierRange, lang }) => {
    const [nowTier, setNowTier] = useState();
    const [nowTotalTime, setNowTotalTime] = useState();
    const [nowTierRange, setNowTierRange] = useState(tierRange);
    const [langComments, setLangComments] = useState(['초', '', '초 이내']);

    useEffect(() => {
        if (lang === 'Eng') {
            setLangComments(['sec', 'under ', 'sec'])
        }
    }, [lang]);
    useEffect(() => {
        if(tierRange.length > 1)  {
            setNowTier(currentTier);
            setNowTotalTime(totalTime);
            setNowTierRange(tierRange);
        }
    }, [currentTier, totalTime, tierRange]);
    return (
        <div className='tier-table-div'>
            <div className='tier-table-row'>
                <div className='picker-result-info-highlight tier-table-highlight'>{nowTier}</div>
                <div className='tier-table-highlight'>{nowTotalTime}{langComments[0]}</div>
            </div>
            <Divider />
            {nowTierRange.map((tier) => (
                <div
                    key={`${tier.sec}-key`}
                    className='tier-table-row'
                    style={{
                        backgroundColor: nowTier === tier.tier ? '#E62383' : 'white',
                        color: nowTier === tier.tier ? 'white' : 'black',
                        fontWeight: nowTier === tier.tier ? 'bold' : null,
                    }}
                >
                    <div>{tier.tier}</div>
                    <div>{langComments[1]}{tier.sec}{langComments[2]}</div>
                </div>
            ))}
        </div>
    );
};

export default ColorPickerTierTable;
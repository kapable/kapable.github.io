import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';

const ColorPickerTierTable = ({ currentTier, totalTime, tierRange }) => {
    const [nowTier, setNowTier] = useState();
    const [nowTotalTime, setNowTotalTime] = useState();
    const [nowTierRange, setNowTierRange] = useState(tierRange);
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
                <div className='tier-table-highlight'>{nowTotalTime}초</div>
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
                    <div>{tier.sec}초 이내</div>
                </div>
            ))}
        </div>
    );
};

export default ColorPickerTierTable;
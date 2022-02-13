import React from 'react';
import styled from 'styled-components';

function PctMBTIBar(props) {
    const pct_units = 21;
    const bar_height = 14;
    const bar_margin = .69;
    const font_size = 1;
    const visible_threshold = 1;

    const scoreE = parseInt(props.result_score[0]);
    const scoreI = parseInt(props.result_score[1]);
    const scoreS = parseInt(props.result_score[2]);
    const scoreN = parseInt(props.result_score[3]);
    const scoreT = parseInt(props.result_score[4]);
    const scoreF = parseInt(props.result_score[5]);
    const scoreP = parseInt(props.result_score[6]);
    const scoreJ = parseInt(props.result_score[7]);

    const mainColor = props.result_color;

    const BackGroundImg = styled.img`
        width: 23rem;
        position: absolute;
        top: 0.9rem;
    `

    const LeftBars = styled.div`
        float: left;
        width: ${pct_units * 5}px;
        border-right: solid 0.5px black;
        align-items: right;

        font-weight: bold;
        font-family: "NanumSquare", "Noto Sans";
        font-size: ${font_size}rem;

        div {
            display: table;
            height: ${bar_height}px;
            margin: ${bar_margin}rem 0 ${bar_margin}rem auto;
        }

        p {
            display: table-cell;
            vertical-align: middle;
        }

        .pct-mbti-left-e {
            width: ${scoreE * pct_units}px;
            opacity: ${scoreE > scoreI ? null : .5};
            background-color: ${scoreE >= visible_threshold ? mainColor : null};
        }

        .pct-mbti-left-s {
            width: ${scoreS * pct_units}px;
            opacity: ${scoreS > scoreN ? null : .5};
            background-color: ${scoreS >= visible_threshold ? mainColor : null};
        }
        
        .pct-mbti-left-t {
            width: ${scoreT * pct_units}px;
            opacity: ${scoreT > scoreF ? null : .5};
            background-color: ${scoreT >= visible_threshold ? mainColor : null};
        }

        .pct-mbti-left-p {
            width: ${scoreP * pct_units}px;
            opacity: ${scoreP > scoreJ ? null : .5};
            background-color: ${scoreP >= visible_threshold ? mainColor : null};
        }
    `

    const RightBar = styled.div`
        float: left;
        width: ${pct_units * 5}px;
        border-left: solid 0.5px black;

        font-weight: bold;
        font-family: "NanumSquare", "Noto Sans";
        font-size: ${font_size}rem;

        div {
            display: table;
            height: ${bar_height}px;
            margin : ${bar_margin}rem auto ${bar_margin}rem 0;
        }

        p {
            display: table-cell;
            vertical-align: middle;
        }


        .pct-mbti-right-i {
            width: ${scoreI * pct_units}px;
            opacity: ${scoreI > scoreE ? null : .5};
            background-color: ${scoreI >= visible_threshold ? mainColor : null};
        }

        .pct-mbti-right-n {
            width: ${scoreN * pct_units}px;
            opacity: ${scoreN > scoreS ? null : .5};
            background-color: ${scoreN >= visible_threshold ? mainColor : null};
        }
        
        .pct-mbti-right-f {
            width: ${scoreF * pct_units}px;
            opacity: ${scoreF > scoreT ? null : .5};
            background-color: ${scoreF >= visible_threshold ? mainColor : null};
        }

        .pct-mbti-right-j {
            width: ${scoreJ * pct_units}px;
            opacity: ${scoreJ > scoreP ? null : .5};
            background-color: ${scoreJ >= visible_threshold ? mainColor : null};
        }
    `

    const BarsDiv = styled.div`
        position: relative;
        margin: 3rem auto;
        top: .29rem;
    `

    return (
        <>
            <BackGroundImg src={props.bg_img_src} alt="backGround" />
            <BarsDiv>
                <LeftBars className="pct-mbti-left-bar">
                    <div className='pct-mbti-left-e'><p>{scoreE * 20}%</p></div>
                    <div className='pct-mbti-left-s'><p>{scoreS * 20}%</p></div>
                    <div className='pct-mbti-left-t'><p>{scoreT * 20}%</p></div>
                    <div className='pct-mbti-left-p'><p>{scoreP * 20}%</p></div>
                </LeftBars>
                <RightBar className="pct-mbti-right-bar">
                    <div className='pct-mbti-right-i'><p>{scoreI * 20}%</p></div>
                    <div className='pct-mbti-right-n'><p>{scoreN * 20}%</p></div>
                    <div className='pct-mbti-right-f'><p>{scoreF * 20}%</p></div>
                    <div className='pct-mbti-right-j'><p>{scoreJ * 20}%</p></div>
                </RightBar>
            </BarsDiv>
        </>
    )
}

export default PctMBTIBar
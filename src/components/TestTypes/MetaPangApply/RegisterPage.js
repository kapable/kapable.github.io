import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { _eventSenderGA } from '../../../tools/tools';

function RegisterPage(props) {
    const [nickname, setNickname] = useState("");
    const [id, setID] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreeInfoState, setAgreeInfoState] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const api_url = 'https://api.ktestone.com';
    
    const infoState = <div className="metapang-popup">
                        <div className="metapang-popup-inner">
                            <button onClick={() => setShowPopup(false)} className='metapang-popup-close-btn'>X</button>
                            <p className="metapang-popup-title">개인정보 처리 방침</p>
                            <div className="metapang-popup-article-div">
                                <article>
                                    <h3>1. 개인정보 수집 이용 보유 파기</h3>
                                    <p>쿠키로켓은 다음과 같이 개인정보를 수집∙이용하고 있습니다. 개인정보가 필요한 시점에 최소한의 정보만을 수집하며, 고지한 범위 내에서만 사용합니다. 또한 사전 동의 없이 고지한 범위를 초과하여 이용하거나 외부에 공개하지 않습니다.</p>
                                    <h5>필수 항목</h5>
                                    <p>회원가입 시: 닉네임, 아이디, 이메일 주소, 비밀번호, 연락처</p>
                                    <h5>1.1. 개인정보 수집 방법</h5>
                                    <p>회원 가입 및 사이트 일부 서비스 이용을 위해 필수적인 정보를 직접 입력</p>
                                    <h5>1.2 법령에 의하여 수집∙이용되는 회원 정보</h5>
                                    <p>통신비밀보호법에 근거한 3개월 내 서비스 방문 기록</p>
                                    <h3>2. 개인정보 제3자 제공</h3>
                                    <p>응모 등과 같은 일부 서비스 이용시 원활한 시행을 위하여 관련된 정보를 필요한 범위 내에서 제3자에게 전달합니다.</p>
                                    <h3>3. 수집한 개인정보 취급 위탁</h3>
                                    <p>쿠키로켓은 개인정보를 안전하게 처리하고 있는지 지속적으로 관리 감독하고 있으며, 필요사항이 종료된 때에 보유하고 있는 개인정보는 즉시 파기하게 하고 있습니다.</p>
                                    <h3>4. 개인정보 파기</h3>
                                    <p>수집∙이용목적이 달성된 개인정보의 경우 별도의 DB에 옮겨져 내부 규정 및 관련 법령을 준수하여 안전하게 보관되며, 정해진 기간이 종료되었을 때 지체 없이 파기됩니다. 이때 별도의 DB로 옮겨진 개인정보는 이용자가 동의한 목적 또는 법률에 정해진 경우 외 다른 목적으로 이용되지 않습니다. 단, 개인정보 도용 등 원치 않는 탈퇴에 대비하기 위하여 회원탈퇴 요청 후 7일 간 개인정보를 별도의 DB에서 보존 후 완전 파기합니다.</p>
                                    <h3>5. 이용자의 권리</h3>
                                    <p>쿠키로켓 이용자 본인 및 법정대리인은 언제든지 수집 정보에 대해 수정, 동의, 철회, 삭제, 열람 등을 요청할 수 있습니다. 다만 동의 철회, 삭제 시 서비스의 일부 또는 전부 이용이 제한될 수 있습니다.</p>
                                    <h3>6. 이용자의 의무</h3>
                                    <p>이용자 본인은 자신의 개인정보를 보호할 의무가 있습니다. 쿠키로켓의 귀책사유 없이 ID(이메일), 비밀번호, 접근매체 등의 양도∙대여∙분실이나 로그인 상태에서 이석 등 본인의 부주의, 또는 관계법령에 의한 보안조치로 차단할 수 없는 방법이나 기술을 사용한 해킹 등 쿠키로켓가 통제할 수 없는 인터넷상의 문제 등으로 개인정보가 유출되어 발생한 문제에 대해서 쿠키로켓는 책임을 지지 않습니다.</p>
                                </article>
                            </div>
                        </div>
                    </div>;

    function onNicknameHandler(e) {
        e.preventDefault();
        setNickname(e.target.value);
    }

    function onIDHandler(e) {
        e.preventDefault();
        setID(e.target.value);
    }

    function onEmailHandler(e) {
        e.preventDefault();
        setEmail(e.target.value);
    }

    function onPhoneNumberHandler(e) {
        e.preventDefault();
        
        setPhoneNumber(
            e.target.value
            .replace(/[^0-9]/, '')
            .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
        );
    }

    function onPasswordHandler(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    function onConfirmPasswordHandler(e) {
        e.preventDefault();
        setConfirmPassword(e.target.value);
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        if(nickname.length > 20) {
            return alert("닉네임의 길이는 20자 이하여야 합니다.")
        }

        if(password.length < 8) {
            return alert("비밀번호의 길이는 여덟 글자 이상이어야 합니다.")
        }

        if(password !== confirmPassword) {
            return alert("비밀번호와 일치하지 않습니다.")
        }

        if(agreeInfoState !== true) {
            return alert("개인정보 처리방침에 동의해주세요.")
        }

        let body = {
            "id": id,
            "password": password,
            "nickname": nickname,
            "email": email,
            "phone": phoneNumber
        }

        await axios.post(api_url+`/auth/join`, body)
        .then(() => {
            alert("회원가입에 성공했습니다!!!\n로그인 후 응모해주세요!!!");
            _eventSenderGA("Submitting", "Click User-Register Button", "register page");
            props.setMode("login");
        })
        .catch((err) => {
            if(err.response.data.errors[0].type === `unique violation`) {
                alert('이미 존재하는 아이디예요 ㅠㅠ');
            } else {
                alert("회원가입에 실패했습니다 ㅠㅠ");;
            }
        })
    }

    return (
        <div className="metapang-register-page-bg-div">
                    <div className='metapang-register-page-btn-div'>
                        <button onClick={() => {props.setMode("register")}} className="metapang-register-page-rgbtn" style={{'color':'black'}}>회원가입</button>
                        <button onClick={() => {props.setMode("login")}} className="metapang-register-page-loginbtn" style={{'color':'black'}}>로그인</button>
                    </div>
                    <form
                        className='metapang-register-submit-form'
                        onSubmit={onSubmitHandler}
                    >
                        <p className='metapang-register-page-memo-comment'>* 한번 가입한 아이디와 비밀번호는 다시 찾기가<br></br>불가능하니 꼭 메모해주세요!</p>
                        <label>닉네임*</label>
                        <input
                            type="text"
                            value={nickname}
                            onChange={onNicknameHandler}
                            placeholder='20자 이하'
                            required
                        />
                        <label>아이디*</label>
                        <input
                            type="text"
                            value={id}
                            onChange={onIDHandler}
                            placeholder='영문 소문자, 숫자4~20자'
                            pattern='[A-Za-z0-9+]{4,12}'
                            required
                        />
                        <label>이메일*</label>
                        <input
                            type="email"
                            value={email}
                            onChange={onEmailHandler}
                            placeholder='metapang@metapang.com'
                            required
                        />
                        <label>연락처*</label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={onPhoneNumberHandler}
                            placeholder='ex) 01012345678'
                            pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
                            maxLength={13}
                            required
                        />
                        <label>비밀번호*</label>
                        <input
                            type="password"
                            value={password}
                            onChange={onPasswordHandler}
                            placeholder='8자 이상 입력해주세요'
                            required
                        />
                        <label>비밀번호 확인*</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={onConfirmPasswordHandler}
                            placeholder='한번 더 입력해주세요'
                            required
                        />
                        <div class="metapang-register-agree-info-div" >
                            <input
                                type='checkbox'
                                value={agreeInfoState}
                                onChange={() => {
                                    setAgreeInfoState(!agreeInfoState);
                                }}
                                required
                            />
                            <label>개인정보 처리방침 동의* <p style={{ cursor: 'pointer' }} onClick={() => {setShowPopup(!showPopup)}}>보기</p></label>
                        </div>
                        <button type="submit" className="metapang-register-submit-btn">
                            회원가입
                        </button>
                    </form>
                    <div className="metapang-info-state-div">
                        {showPopup ? 
                            infoState
                            : null}
                    </div>
                </div>
    );
}

export default withRouter(RegisterPage);

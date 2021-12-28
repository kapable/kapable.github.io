import React, { useState } from 'react';

function PostWrite() {
    const [message, setMessage] = useState("");

    function onMessageHandler(e) {
        e.preventDefault();
        setMessage(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert('제출 되었습니다!')
    }

    return (
        <div>
            <form
                className='write-submit-form'
                onSubmit={onSubmitHandler}
            >
                <textarea
                    placeholder='마음을 전달하세요(100자 이하)'
                    autoFocus
                    cols={40}
                    rows={10}
                    onChange={onMessageHandler}
                    maxLength={100}
                />
                <button type="submit" className='write-submit-btn'>
                    편지 보내기
                </button>
            </form>
            
        </div>
    )
}

export default PostWrite

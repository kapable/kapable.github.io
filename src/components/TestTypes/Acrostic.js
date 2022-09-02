import axios from 'axios';
import React, { useState } from 'react';

const Acrostic = () => {
    const [userInput, setUserInput] = useState(""); // input by the user
    const [isLoading, setIsLoading] = useState(false); // set is loading
    const [acrosticResult, setAcrosticResult] = useState([]); // the outputs

    const handleSubmit = async (e) => {
        e.preventDefault();

        // check length of userInput
        if(userInput.length < 1) return alert("최소 한 글자 이상 넣어주세요!");
        if(userInput.length > 5) return alert("최대 다섯 글자까지 입력할 수 있습니다!"); 

        try {
            // loading start
            setIsLoading(true);

            // POST request to API
            await axios.post(
                'https://demo.tunib.ai/api/text/nverse',
                {
                    user_input: userInput
                },
                {'Content-Type' : 'application/json'}
            )
            .then(res => {
                // loading ending
                setIsLoading(false);

                // set outputs
                setAcrosticResult(res.data.outputs);

                // reset userInput
                setUserInput("");
                console.log(res.data.outputs);
            });
        } catch (error) {
            console.log(error);
            return alert("에러가 발생했습니다ㅠㅠ 다시 시도해주세요ㅠㅠ");
        };
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" minLength={1} maxLength={5} value={userInput} placeholder='최대 다섯 글자까지 넣어주세요!' onChange={(e) => setUserInput(e.target.value)} />
                <button type="submit" >Submit</button>
            </form>
            {isLoading ? ("로딩중..") : (
                acrosticResult.map((v, i) => (<div key={`acrostic-${i}`}>{v}</div>))
            )}
            <p>*출처: tunib</p>
        </div>
    );
};

export default Acrostic;
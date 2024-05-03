import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const DadJokeIntro = ({ setMode, currentTest }) => {
    
    return (
        <div className='loveCharacter-intro-images-container'>
            <img src="https://images.ktestone.com/meta/dadJoke/dadJoke-intro-upper-banner.jpg" alt="dadJoke-upper-banner" style={{width: '100%', maxWidth: '456px', margin: '0 auto'}} />
            <img onClick={() => setMode('quiz')} loading="lazy" className='loveCharacter-intro-left-img' src={`https://images.ktestone.com/meta/dadJoke/dadJoke-game-start-button.jpg`} alt={`left`}/>
            <Link to={`/${currentTest.title}/answers/`}>
                <img loading="lazy" className='loveCharacter-intro-right-img' src={`https://images.ktestone.com/meta/dadJoke/dadJoke-goto-answer-button.jpg`} alt={`right`}/>
            </Link>
        </div>
    );
};

export default DadJokeIntro;
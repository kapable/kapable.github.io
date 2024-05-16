import React from 'react';
import { Link } from 'react-router-dom';

export default function OhterLangIconsMain() {
  return (
    <div className='go-to-each-language-main'>
      <h3>Other Languages</h3>
      <Link to={'/Kor/'} key={'Kor'} className='to-other-lang-test-banner-text'>
        <img
          loading='lazy'
          src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
          className='language-icon'
          alt='[ 한국어로 하러 가기 ]'
        />
      </Link>
      <Link to={'/Eng/'} key={'Eng'} className='to-other-lang-test-banner-text'>
        <img
          loading='lazy'
          src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
          className='language-icon'
          alt='[ Go to the English version ]'
        />
      </Link>
      <Link to={'/CN/'} key={'CN'} className='to-other-lang-test-banner-text'>
        <img
          loading='lazy'
          src='https://images.ktestone.com/default/languageIcon/china-icon.png'
          className='language-icon'
          alt='[ 汉语版本试 ]'
        />
      </Link>
      <Link to={'/JP/'} key={'JP'} className='to-other-lang-test-banner-text'>
        <img
          loading='lazy'
          src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
          className='language-icon'
          alt='[ 日本語バージョンをやりに行く。 ]'
        />
      </Link>
      <Link to={'/Ger/'} key={'Ger'} className='to-other-lang-test-banner-text'>
        <img
          loading='lazy'
          src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
          className='language-icon'
          alt='[ Gehen Sie zur deutschen Version. ]'
        />
      </Link>
      <Link to={'/ES/'} key={'ES'} className='to-other-lang-test-banner-text'>
        <img
          loading='lazy'
          src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
          className='language-icon'
          alt='[ paso a la versión española ]'
        />
      </Link>
      <Link to={'/IT/'} key={'IT'} className='to-other-lang-test-banner-text'>
        <img
          loading='lazy'
          src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
          className='language-icon'
          alt='[ Passiamo alla versione italiana ]'
        />
      </Link>
      <Link to={'/Rus/'} key={'Rus'} className='to-other-lang-test-banner-text'>
        <img
          loading='lazy'
          src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
          className='language-icon'
          alt='[ 日本語バージョンをやりに行く。 ]'
        />
      </Link>
      <Link
        to={'/Others/'}
        key={'Others'}
        className='to-other-lang-test-banner-text'
      >
        <img
          loading='lazy'
          src='https://images.ktestone.com/default/languageIcon/etc-icon.png'
          className='language-icon'
          alt='[ Перейти на российскую версию ]'
        />
      </Link>
    </div>
  );
}

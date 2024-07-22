import React from 'react';
import { Fragment } from 'react';

export default function OtherLangIcons(props) {
  function factBTILinkRenderer() {
    if (props.currentTest === 'personalColorFact') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorFactEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorFactInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColorFactEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorFact/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorFactInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColorFactInd') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorFactEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorFact/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function dringkingHabitLinkRenderer() {
    if (props.currentTest === 'dringkingHabit') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/dringkingHabitEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/dringkingHabitJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'dringkingHabitEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/dringkingHabit/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/dringkingHabitJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'dringkingHabitJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/dringkingHabit/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/dringkingHabitEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function personalColorLinkRenderer() {
    if (props.currentTest === 'personalColor') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorArb/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/arab-icon.png'
              className='language-icon'
              alt='[ اذهب إلى النسخة العربية ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorMalay/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png'
              className='language-icon'
              alt='[ Pergi ke versi Bahasa Inggeris ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/france-icon.png'
              className='language-icon'
              alt='[ Aller à la version française. ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColorJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorArb/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/arab-icon.png'
              className='language-icon'
              alt='[ اذهب إلى النسخة العربية ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorMalay/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png'
              className='language-icon'
              alt='[ Pergi ke versi Bahasa Inggeris ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/france-icon.png'
              className='language-icon'
              alt='[ Aller à la version française. ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColorEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorArb/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/arab-icon.png'
              className='language-icon'
              alt='[ اذهب إلى النسخة العربية ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorMalay/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png'
              className='language-icon'
              alt='[ Pergi ke versi Bahasa Inggeris ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/france-icon.png'
              className='language-icon'
              alt='[ Aller à la version française. ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColorCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorArb/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/arab-icon.png'
              className='language-icon'
              alt='[ اذهب إلى النسخة العربية ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorMalay/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png'
              className='language-icon'
              alt='[ Pergi ke versi Bahasa Inggeris ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/france-icon.png'
              className='language-icon'
              alt='[ Aller à la version française. ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColorES') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorArb/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/arab-icon.png'
              className='language-icon'
              alt='[ اذهب إلى النسخة العربية ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorMalay/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png'
              className='language-icon'
              alt='[ Pergi ke versi Bahasa Inggeris ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/france-icon.png'
              className='language-icon'
              alt='[ Aller à la version française. ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColorArb') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorMalay/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png'
              className='language-icon'
              alt='[ Pergi ke versi Bahasa Inggeris ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/france-icon.png'
              className='language-icon'
              alt='[ Aller à la version française. ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColorInd') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorArb/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/arab-icon.png'
              className='language-icon'
              alt='[ اذهب إلى النسخة العربية ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorMalay/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png'
              className='language-icon'
              alt='[ Pergi ke versi Bahasa Inggeris ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/france-icon.png'
              className='language-icon'
              alt='[ Aller à la version française. ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColorRus') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorArb/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/arab-icon.png'
              className='language-icon'
              alt='[ اذهب إلى النسخة العربية ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorMalay/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png'
              className='language-icon'
              alt='[ Pergi ke versi Bahasa Inggeris ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/france-icon.png'
              className='language-icon'
              alt='[ Aller à la version française. ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColorMalay') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorArb/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/arab-icon.png'
              className='language-icon'
              alt='[ اذهب إلى النسخة العربية ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/france-icon.png'
              className='language-icon'
              alt='[ Aller à la version française. ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColorGer') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorArb/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/arab-icon.png'
              className='language-icon'
              alt='[ اذهب إلى النسخة العربية ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorMalay/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png'
              className='language-icon'
              alt='[ Pergi ke versi Bahasa Inggeris ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/france-icon.png'
              className='language-icon'
              alt='[ Aller à la version française. ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColorFra') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorArb/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/arab-icon.png'
              className='language-icon'
              alt='[ اذهب إلى النسخة العربية ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorInd/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/india-icon.png'
              className='language-icon'
              alt='[ हिंदी में भी देखें ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorMalay/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/malaysia-icon.png'
              className='language-icon'
              alt='[ Pergi ke versi Bahasa Inggeris ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColorGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
        </div>
      );
    }
  }

  function personalColor2022LinkRenderer() {
    if (props.currentTest === 'personalColor2022') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor2022Eng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor2022CN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColor2022Eng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor2022/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor2022CN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalColor2022CN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor2022/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalColor2022Eng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function flowerBTILinkRenderer() {
    if (props.currentTest === 'flowerBTI') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flowerBTIEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flowerBTIJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'flowerBTIEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flowerBTI/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flowerBTIJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'flowerBTIJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flowerBTI/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flowerBTIEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function personalIncenseLinkRenderer() {
    if (props.currentTest === 'personalIncense') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalIncenseEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalIncenseJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalIncenseJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalIncense/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalIncenseEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'personalIncenseEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalIncense/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/personalIncenseJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    }
  }

  function hanbokBTILinkgRenderer() {
    if (props.currentTest === 'hanbokBTI') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/hanbokBTIEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/hanbokBTIJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'hanbokBTIJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/hanbokBTI/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/hanbokBTIEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'hanbokBTIEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/hanbokBTI/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/hanbokBTIJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    }
  }

  function oneSidedLoveLinkRenderer() {
    if (props.currentTest === 'oneSidedLove') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'oneSidedLoveJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'oneSidedLoveRus') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'oneSidedLoveCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'oneSidedLoveEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveRus/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/russia-icon.png'
              className='language-icon'
              alt='[ Перейти на российскую версию ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/oneSidedLoveCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    }
  }

  function idealTypeLinkRenderer() {
    if (props.currentTest === 'idealType') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/idealTypeEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'idealTypeEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/idealType/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function fruitAltLinkRenderer() {
    if (props.currentTest === 'fruitAlt') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/fruitAltEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'fruitAltEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/fruitAlt/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function lovejewerlyLinkRenderer() {
    if (props.currentTest === 'lovejewerly') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/lovejewerlyEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'lovejewerlyEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/lovejewerly/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function auditionBTILinkRenderer() {
    if (props.currentTest === 'auditionBTI') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/auditionBTIEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/auditionBTICn/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/auditionBTIJp/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'auditionBTIEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/auditionBTI/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/auditionBTICn/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/auditionBTIJp/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'auditionBTICn') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/auditionBTI/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/auditionBTIEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/auditionBTIJp/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'auditionBTIJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/auditionBTI/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/auditionBTIEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/auditionBTICn/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    }
  }

  function snowflakeLinkRenderer() {
    if (props.currentTest === 'snowflake') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/snowflakeEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'snowflakeEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/snowflake/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function smileColorTestLinkRenderer() {
    if (props.currentTest === 'smileColorTest') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestCn/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'smileColorTestEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTest/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestCn/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'smileColorTestJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTest/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestCn/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'smileColorTestCn') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTest/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'smileColorTestES') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTest/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/smileColorTestCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    }
  }

  function fishShapedBunTestLinkRenderer() {
    if (props.currentTest === 'fishShapedBun') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/fishShapedBunEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'fishShapedBunEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/fishShapedBun/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function musicNoteEngTestLinkRenderer() {
    if (props.currentTest === 'musicNote') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/musicNoteEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'musicNoteEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/musicNote/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function waterLoveTestLinkRenderer() {
    if (props.currentTest === 'waterLove') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/waterLoveEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'waterLoveEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/waterLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveCharacterTestLinkRenderer() {
    if (
      ['loveCharacter', 'loveCharacterFemale', 'loveCharacterMale'].includes(
        props.currentTest
      )
    ) {
      return (
        <div className='go-to-each-language' style={{ marginTop: '1rem' }}>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (
      [
        'loveCharacterEng',
        'loveCharacterFemaleEng',
        'loveCharacterMaleEng',
      ].includes(props.currentTest)
    ) {
      return (
        <div className='go-to-each-language' style={{ marginTop: '1rem' }}>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (
      [
        'loveCharacterCN',
        'loveCharacterFemaleCN',
        'loveCharacterMaleCN',
      ].includes(props.currentTest)
    ) {
      return (
        <div className='go-to-each-language' style={{ marginTop: '1rem' }}>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (
      [
        'loveCharacterGer',
        'loveCharacterFemaleGer',
        'loveCharacterMaleGer',
      ].includes(props.currentTest)
    ) {
      return (
        <div className='go-to-each-language' style={{ marginTop: '1rem' }}>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (
      [
        'loveCharacterES',
        'loveCharacterFemaleES',
        'loveCharacterMaleES',
      ].includes(props.currentTest)
    ) {
      return (
        <div className='go-to-each-language' style={{ marginTop: '1rem' }}>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (
      [
        'loveCharacterJP',
        'loveCharacterFemaleJP',
        'loveCharacterMaleJP',
      ].includes(props.currentTest)
    ) {
      return (
        <div className='go-to-each-language' style={{ marginTop: '1rem' }}>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (
      [
        'loveCharacterIT',
        'loveCharacterFemaleIT',
        'loveCharacterMaleIT',
      ].includes(props.currentTest)
    ) {
      return (
        <div className='go-to-each-language' style={{ marginTop: '1rem' }}>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCharacterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    }
  }

  function meGuideTestLinkRenderer() {
    if (props.currentTest === 'meGuide') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/meGuideEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/meGuideJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'meGuideEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/meGuide/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/meGuideJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'meGuideJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/meGuide/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/meGuideEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveWarningTestLinkRenderer() {
    if (props.currentTest === 'loveWarning') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveWarningEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarning/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveWarningJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarning/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveWarningCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarning/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveWarningES') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarning/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveWarningCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    }
  }

  function characteristicChracterTestLinkRenderer() {
    if (props.currentTest === 'characteristicChracter') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'characteristicChracterEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'characteristicChracterJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'characteristicChracterCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'characteristicChracterES') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'characteristicChracterGer') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'characteristicChracterIT') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterES/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/spain-icon.png'
              className='language-icon'
              alt='[ paso a la versión española ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/characteristicChracterGer/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/ger-icon.png'
              className='language-icon'
              alt='[ Gehen Sie zur deutschen Version. ]'
            />
          </a>
        </div>
      );
    }
  }

  function mailForMeTestLinkRenderer() {
    if (props.currentTest === 'mailForMe') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mailForMeEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mailForMeCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'mailForMeEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mailForMe/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mailForMeCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'mailForMeCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mailForMe/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mailForMeEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function readyToBoneTestLinkRenderer() {
    if (props.currentTest === 'readyToBone') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'readyToBoneCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBone/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'readyToBoneEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBone/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'readyToBoneJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBone/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'readyToBoneIT') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBone/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/readyToBoneJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveFlameTestLinkRenderer() {
    if (props.currentTest === 'loveFlame') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveFlameCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlame/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveFlameEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlame/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveFlameIT') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlame/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveFlameJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlame/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveFlameIT/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/italy-icon.png'
              className='language-icon'
              alt='[ Passiamo alla versione italiana ]'
            />
          </a>
        </div>
      );
    }
  }

  function bondeeTestLinkRenderer() {
    if (props.currentTest === 'bondee') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bondeeEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bondeeCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'bondeeEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bondee/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bondeeCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'bondeeCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bondee/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bondeeEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function speechHabitTestLinkRenderer() {
    if (props.currentTest === 'speechHabit') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/speechHabitCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bondeeEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/speechHabitJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'speechHabitEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/speechHabit/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/speechHabitCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/speechHabitJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'speechHabitCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/speechHabit/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bondeeEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/speechHabitJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'speechHabitJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/speechHabit/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bondeeEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/speechHabitCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    }
  }

  function coupleCharacterTestLinkRenderer() {
    if (
      [
        'coupleCharacter',
        'coupleCharacterFemale',
        'coupleCharacterMale',
      ].includes(props.currentTest)
    ) {
      return (
        <div className='go-to-each-language' style={{ marginTop: '1rem' }}>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/coupleCharacterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/coupleCharacterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/coupleCharacterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (
      [
        'coupleCharacterEng',
        'coupleCharacterFemaleEng',
        'coupleCharacterMaleEng',
      ].includes(props.currentTest)
    ) {
      return (
        <div className='go-to-each-language' style={{ marginTop: '1rem' }}>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/coupleCharacter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/coupleCharacterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/coupleCharacterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (
      [
        'coupleCharacterCN',
        'coupleCharacterFemaleCN',
        'coupleCharacterMaleCN',
      ].includes(props.currentTest)
    ) {
      return (
        <div className='go-to-each-language' style={{ marginTop: '1rem' }}>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/coupleCharacter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/coupleCharacterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/coupleCharacterJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (
      [
        'coupleCharacterJP',
        'coupleCharacterMaleJP',
        'coupleCharacterFemaleJP',
      ].includes(props.currentTest)
    ) {
      return (
        <div className='go-to-each-language' style={{ marginTop: '1rem' }}>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/coupleCharacter/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/coupleCharacterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/coupleCharacterCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveSpringFlowerTestLinkRenderer() {
    if (props.currentTest === 'loveSpringFlower') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpringFlowerEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpringFlowerCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpringFlowerJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveSpringFlowerCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpringFlower/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpringFlowerEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpringFlowerJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveSpringFlowerEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpringFlower/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpringFlowerCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpringFlowerJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveSpringFlowerJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpringFlowerEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpringFlowerCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpringFlower/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function cantWaitTestLinkRenderer() {
    if (props.currentTest === 'cantWait') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/cantWaitCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/cantWaitEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'cantWaitCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/cantWait/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/cantWaitEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'cantWaitEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/cantWait/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/cantWaitCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveSpicyTestLinkRenderer() {
    if (props.currentTest === 'loveSpicy') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpicyCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpicyEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveSpicyCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpicy/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpicyEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveSpicyEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpicy/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpicyCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveInMyHeadTestLinkRenderer() {
    if (props.currentTest === 'loveInMyHead') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveInMyHeadEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveInMyHeadEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveInMyHead/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveMagazineTestLinkRenderer() {
    if (props.currentTest === 'loveMagazine') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveMagazineyCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveMagazineEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveMagazineCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveMagazine/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveMagazineEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveMagazineEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveMagazine/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveMagazineCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    }
  }

  function labelStickerTestLinkRenderer() {
    if (props.currentTest === 'labelSticker') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/labelStickerEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/labelStickerJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'labelStickerEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/labelSticker/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/labelStickerJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'labelStickerJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/labelStickerEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/labelStickerJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    }
  }

  function cloudLoveTestLinkRenderer() {
    if (props.currentTest === 'cloudLove') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/cloudLoveyCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'cloudLoveCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/cloudLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function emotionGraphTestLinkRenderer() {
    if (props.currentTest === 'emotionGraph') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/emotionGraphEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/emotionGraphJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'emotionGraphEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/emotionGraph/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/emotionGraphJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'emotionGraphJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/emotionGraphEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/emotionGraph/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveTicketTestLinkRenderer() {
    if (props.currentTest === 'loveTicket') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveTicketEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveTicketJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveTicketEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveTicket/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveTicketJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveTicketJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveTicketEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveTicket/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function polaroidCharacteristicTestLinkRenderer() {
    if (props.currentTest === 'polaroidCharacteristic') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/polaroidCharacteristicEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/polaroidCharacteristicJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'polaroidCharacteristicEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/polaroidCharacteristic/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/polaroidCharacteristicJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'polaroidCharacteristicJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/polaroidCharacteristicEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/polaroidCharacteristicJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveCellTestLinkRenderer() {
    if (props.currentTest === 'loveCell') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCellEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCellJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCellCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveCellEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCell/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCellJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCellCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveCellJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCellEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCellJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCellCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveCellCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCell/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCellEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveCellJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveSpeedTestLinkRenderer() {
    if (props.currentTest === 'loveSpeed') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpeedEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpeedJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveSpeedEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpeed/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpeedJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveSpeedJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpeedEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveSpeed/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function puzzleLoveTestLinkRenderer() {
    if (props.currentTest === 'puzzleLove') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/puzzleLoveEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/puzzleLoveJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'puzzleLoveEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/puzzleLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/puzzleLoveJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'puzzleLoveJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/puzzleLoveEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/puzzleLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function earthCharacteristicTestLinkRenderer() {
    if (props.currentTest === 'earthCharacteristic') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/earthCharacteristicEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/earthCharacteristicJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'earthCharacteristicEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/earthCharacteristic/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/earthCharacteristicJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'earthCharacteristicJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/earthCharacteristicEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/earthCharacteristic/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function mbtiFeaturesTestLinkRenderer() {
    if (props.currentTest === 'mbtiFeatures') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mbtiFeaturesEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mbtiFeaturesJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'mbtiFeaturesEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mbtiFeatures/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mbtiFeaturesJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'mbtiFeaturesJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mbtiFeaturesEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mbtiFeatures/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function DIYTestLinkRenderer() {
    if (props.currentTest === 'DIY') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/DIYEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'DIYEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/DIY/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function colorLabelStickerTestLinkRenderer() {
    if (props.currentTest === 'colorLabelSticker') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/colorLabelStickerEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'colorLabelStickerEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/colorLabelSticker/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function mazeHeartTestLinkRenderer() {
    if (props.currentTest === 'mazeHeart') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mazeHeartEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mazeHeartJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'mazeHeartEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mazeHeart/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mazeHeartJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'mazeHeartJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mazeHeartEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mazeHeart/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function postCardTestLinkRenderer() {
    if (props.currentTest === 'postCard') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/postCardEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'postCardEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/postCard/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function flowerGardenTestLinkRenderer() {
    if (props.currentTest === 'flowerGarden') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flowerGardenJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flowerGardenEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'flowerGardenJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flowerGarden/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flowerGardenEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'flowerGardenEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flowerGarden/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flowerGardenJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    }
  }

  function digitalCharTestLinkRenderer() {
    if (props.currentTest === 'digitalChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/digitalCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'digitalCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/digitalChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function rainDropTestLinkRenderer() {
    if (props.currentTest === 'rainDrop') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/rainDropEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/rainDropJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'rainDropEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/rainDrop/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/rainDropJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'rainDropJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/rainDrop/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/rainDropEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function hologramLoveTestLinkRenderer() {
    if (props.currentTest === 'hologramLove') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/hologramLoveJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'hologramLoveJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/hologramLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function scrapBookCharTestLinkRenderer() {
    if (props.currentTest === 'scrapBookChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/scrapBookCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'scrapBookCharJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/scrapBookChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveTVTestLinkRenderer() {
    if (props.currentTest === 'loveTV') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveTVEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveTVJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveTVEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveTV/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveTVJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveTVJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveTV/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveTVEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function charRoadTestLinkRenderer() {
    if (props.currentTest === 'charRoad') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/charRoadJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'charRoadJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/charRoad/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function whyLoveTestLinkRenderer() {
    if (props.currentTest === 'whyLove') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/whyLoveJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'whyLoveJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/whyLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveLotteryTestLinkRenderer() {
    if (props.currentTest === 'loveLottery') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveLotteryEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveLotteryEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveLottery/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function alienCharTestLinkRenderer() {
    if (props.currentTest === 'alienChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/alienCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/alienCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'alienCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/alienChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/alienCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'alienCharJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/alienChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/alienCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function bubbleCharTestLinkRenderer() {
    if (props.currentTest === 'bubbleChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bubbleCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bubbleCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'bubbleCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bubbleChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bubbleCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'bubbleCharJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bubbleChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bubbleCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function unlockMyHeartTestLinkRenderer() {
    if (props.currentTest === 'unlockMyHeart') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/unlockMyHeartJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'unlockMyHeartJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/unlockMyHeart/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function bloodTransfusionTestLinkRenderer() {
    if (props.currentTest === 'bloodTransfusion') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bloodTransfusionEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bloodTransfusionJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'bloodTransfusionJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bloodTransfusionEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bloodTransfusion/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'bloodTransfusionEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bloodTransfusion/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bloodTransfusionJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    }
  }

  function colorPaletteTestLinkRenderer() {
    if (props.currentTest === 'colorPalette') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/colorPaletteEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/colorPaletteJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'colorPaletteEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/colorPalette/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/colorPaletteJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'colorPaletteJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/colorPalette/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/colorPaletteEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function iPhoneMemoTestLinkRenderer() {
    if (props.currentTest === 'iPhoneMemo') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/iPhoneMemoEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/iPhoneMemoJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'iPhoneMemoEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/iPhoneMemo/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/iPhoneMemoJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'iPhoneMemoJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/iPhoneMemo/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/iPhoneMemoEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function egoProfileTestLinkRenderer() {
    if (props.currentTest === 'egoProfile') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/egoProfileEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/egoProfileJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'egoProfileEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/egoProfile/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/egoProfileJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'egoProfileJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/egoProfile/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/egoProfileEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function deepOceanOutlawTestLinkRenderer() {
    if (props.currentTest === 'deepOceanOutlaw') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/deepOceanOutlawJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'deepOceanOutlawJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/deepOceanOutlaw/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function meOtherTestLinkRenderer() {
    if (props.currentTest === 'meOther') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/meOtherEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/meOtherJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'meOtherEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/meOther/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/meOtherJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'meOtherJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/meOther/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/meOtherEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function mindFlowTestLinkRenderer() {
    if (props.currentTest === 'mindFlow') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mindFlowEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'mindFlowEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/mindFlow/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function bitcoinCharTestLinkRenderer() {
    if (props.currentTest === 'bitcoinChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bitcoinCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bitcoinCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bitcoinCharCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'bitcoinCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bitcoinChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bitcoinCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bitcoinCharCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'bitcoinCharJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bitcoinChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bitcoinCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bitcoinCharCN/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/china-icon.png'
              className='language-icon'
              alt='[ 汉语版本试 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'bitcoinCharCN') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bitcoinChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bitcoinCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/bitcoinCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    }
  }

  function whatRightTestLinkRenderer() {
    if (props.currentTest === 'whatRight') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/whatRightEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'whatRightEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/whatRight/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function pokerCharTestLinkRenderer() {
    if (props.currentTest === 'pokerChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/pokerCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'pokerCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/pokerChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function onigiriCharTestLinkRenderer() {
    if (props.currentTest === 'onigiriChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/onigiriCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/onigiriCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'onigiriCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/onigiriChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/onigiriCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'onigiriCharJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/onigiriChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/onigiriCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function ethereumCharTestLinkRenderer() {
    if (props.currentTest === 'ethereumChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/ethereumCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'ethereumCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/ethereumChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function loveDiceLoveTestLinkRenderer() {
    if (props.currentTest === 'loveDiceLove') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveDiceLoveEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'loveDiceLoveEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/loveDiceLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function flyJjackCharTestLinkRenderer() {
    if (props.currentTest === 'flyJjackChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flyJjackCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flyJjackCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'flyJjackCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flyJjackChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flyJjackCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'flyJjackCharJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flyJjackChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/flyJjackCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    }
  }

  function degreeWeatherCharTestLinkRenderer() {
    if (props.currentTest === 'degreeWeatherChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/degreeWeatherCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'degreeWeatherCharJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/degreeWeatherChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function blockYouTestLinkRenderer() {
    if (props.currentTest === 'blockYou') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/blockYouJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/blockYouEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'blockYouJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/blockYou/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/blockYouEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'blockYouEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/blockYou/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/blockYouJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    }
  }

  function talkAlotLoveTestLinkRenderer() {
    if (props.currentTest === 'talkAlotLove') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/talkAlotLoveJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'talkAlotLoveJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/talkAlotLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function eggCharTestLinkRenderer() {
    if (props.currentTest === 'eggChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/eggCharJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'eggCharJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/eggChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function knittingTestLinkRenderer() {
    if (props.currentTest === 'knitting') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/knittingEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'knittingEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/knitting/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function monsterAttackTestLinkRenderer() {
    if (props.currentTest === 'monsterAttack') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/monsterAttackEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'monsterAttackEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/monsterAttack/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function highteenStickerTestLinkRenderer() {
    if (props.currentTest === 'highteenSticker') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/highteenStickerEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'highteenStickerEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/highteenSticker/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function plopPoolCharTestLinkRenderer() {
    if (props.currentTest === 'plopPoolChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/plopPoolCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'plopPoolCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/plopPoolChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function receiptCharTestLinkRenderer() {
    if (props.currentTest === 'receiptChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/receiptCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'receiptCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/receiptChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function fruitSilhouetteCharTestLinkRenderer() {
    if (props.currentTest === 'fruitSilhouetteChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/fruitSilhouetteCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'fruitSilhouetteCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/fruitSilhouetteChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function webCharTestLinkRenderer() {
    if (props.currentTest === 'webChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/webCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'webCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/webChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function paintDoodleCharTestLinkRenderer() {
    if (props.currentTest === 'paintDoodleChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/paintDoodleCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'paintDoodleCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/paintDoodleChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function heartWindowTestLinkRenderer() {
    if (props.currentTest === 'heartWindow') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/heartWindowEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'heartWindowEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/heartWindow/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function colorThemeTestLinkRenderer() {
    if (props.currentTest === 'colorTheme') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/colorThemeEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'colorThemeEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/colorTheme/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function colorBubbleLoveTestLinkRenderer() {
    if (props.currentTest === 'colorBubbleLove') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/colorBubbleLoveEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'colorBubbleLoveEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/colorBubbleLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function profilePosterTestLinkRenderer() {
    if (props.currentTest === 'profilePoster') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/profilePosterEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'profilePosterEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/profilePoster/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function insideEmotionControlTestLinkRenderer() {
    if (props.currentTest === 'insideEmotionControl') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/insideEmotionControlJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/insideEmotionControlEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'insideEmotionControlJP') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/insideEmotionControl/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/insideEmotionControlEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'insideEmotionControlEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/insideEmotionControl/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/insideEmotionControlJP/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/japan-icon.png'
              className='language-icon'
              alt='[ 日本語バージョンをやりに行く。 ]'
            />
          </a>
        </div>
      );
    }
  }

  function doodleGlassBoardCharTestLinkRenderer() {
    if (props.currentTest === 'doodleGlassBoardChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/doodleGlassBoardCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'doodleGlassBoardCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/doodleGlassBoardChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function charPartnerConnTestLinkRenderer() {
    if (props.currentTest === 'charPartnerConn') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/charPartnerConnEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'charPartnerConnEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/charPartnerConn/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function popcornCharLoveTestLinkRenderer() {
    if (props.currentTest === 'popcornCharLove') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/popcornCharLoveEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'popcornCharLoveEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/popcornCharLove/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function todayBentoCharTestLinkRenderer() {
    if (props.currentTest === 'todayBentoChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/todayBentoCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'todayBentoCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/todayBentoChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function glitchCharTestLinkRenderer() {
    if (props.currentTest === 'glitchChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/glitchCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'glitchCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/glitchChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function charFactPokPickTestLinkRenderer() {
    if (props.currentTest === 'charFactPokPick') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/charFactPokPickEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'charFactPokPickEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/charFactPokPick/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function cabinetCharTestLinkRenderer() {
    if (props.currentTest === 'cabinetChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/cabinetCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'cabinetCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/cabinetChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function zigzagCharTestLinkRenderer() {
    if (props.currentTest === 'zigzagChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/zigzagCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'zigzagCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/zigzagChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function christmasSleighTestLinkRenderer() {
    if (props.currentTest === 'christmasSleigh') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/christmasSleighEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'christmasSleighEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/christmasSleigh/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function teruterubozuTestLinkRenderer() {
    if (props.currentTest === 'teruterubozu') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/teruterubozuEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'teruterubozuEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/teruterubozu/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function tanghuluTestLinkRenderer() {
    if (props.currentTest === 'tanghulu') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/tanghuluEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'tanghuluEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/tanghulu/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function watercolorCharTestLinkRenderer() {
    if (props.currentTest === 'watercolorChar') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/watercolorCharEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'watercolorCharEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/watercolorChar/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  function systemErrorTestLinkRenderer() {
    if (props.currentTest === 'systemError') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/systemErrorEng/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/usa-icon.png'
              className='language-icon'
              alt='[ Go to the English version ]'
            />
          </a>
        </div>
      );
    } else if (props.currentTest === 'systemErrorEng') {
      return (
        <div className='go-to-each-language'>
          <h3>▼OTHER LANGUAGES▼</h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ktestone.com/kapable.github.io/systemError/'
            className='to-personalColorOut-test-banner-text'
          >
            <img
              loading='lazy'
              src='https://images.ktestone.com/default/languageIcon/kor-icon.png'
              className='language-icon'
              alt='[ 한국어 버전으로 하러가기 ]'
            />
          </a>
        </div>
      );
    }
  }

  return (
    <Fragment>
      {factBTILinkRenderer()}
      {dringkingHabitLinkRenderer()}
      {personalColorLinkRenderer()}
      {personalColor2022LinkRenderer()}
      {personalIncenseLinkRenderer()}
      {hanbokBTILinkgRenderer()}
      {oneSidedLoveLinkRenderer()}
      {idealTypeLinkRenderer()}
      {fruitAltLinkRenderer()}
      {lovejewerlyLinkRenderer()}
      {auditionBTILinkRenderer()}
      {flowerBTILinkRenderer()}
      {snowflakeLinkRenderer()}
      {smileColorTestLinkRenderer()}
      {fishShapedBunTestLinkRenderer()}
      {musicNoteEngTestLinkRenderer()}
      {waterLoveTestLinkRenderer()}
      {loveCharacterTestLinkRenderer()}
      {meGuideTestLinkRenderer()}
      {loveWarningTestLinkRenderer()}
      {characteristicChracterTestLinkRenderer()}
      {mailForMeTestLinkRenderer()}
      {readyToBoneTestLinkRenderer()}
      {loveFlameTestLinkRenderer()}
      {bondeeTestLinkRenderer()}
      {speechHabitTestLinkRenderer()}
      {coupleCharacterTestLinkRenderer()}
      {loveSpringFlowerTestLinkRenderer()}
      {cantWaitTestLinkRenderer()}
      {loveSpicyTestLinkRenderer()}
      {loveInMyHeadTestLinkRenderer()}
      {loveMagazineTestLinkRenderer()}
      {labelStickerTestLinkRenderer()}
      {loveTicketTestLinkRenderer()}
      {cloudLoveTestLinkRenderer()}
      {emotionGraphTestLinkRenderer()}
      {polaroidCharacteristicTestLinkRenderer()}
      {loveCellTestLinkRenderer()}
      {loveSpeedTestLinkRenderer()}
      {puzzleLoveTestLinkRenderer()}
      {earthCharacteristicTestLinkRenderer()}
      {mbtiFeaturesTestLinkRenderer()}
      {DIYTestLinkRenderer()}
      {colorLabelStickerTestLinkRenderer()}
      {mazeHeartTestLinkRenderer()}
      {postCardTestLinkRenderer()}
      {flowerGardenTestLinkRenderer()}
      {digitalCharTestLinkRenderer()}
      {rainDropTestLinkRenderer()}
      {hologramLoveTestLinkRenderer()}
      {scrapBookCharTestLinkRenderer()}
      {loveTVTestLinkRenderer()}
      {charRoadTestLinkRenderer()}
      {whyLoveTestLinkRenderer()}
      {loveLotteryTestLinkRenderer()}
      {alienCharTestLinkRenderer()}
      {bubbleCharTestLinkRenderer()}
      {colorPaletteTestLinkRenderer()}
      {unlockMyHeartTestLinkRenderer()}
      {bloodTransfusionTestLinkRenderer()}
      {iPhoneMemoTestLinkRenderer()}
      {egoProfileTestLinkRenderer()}
      {deepOceanOutlawTestLinkRenderer()}
      {meOtherTestLinkRenderer()}
      {mindFlowTestLinkRenderer()}
      {bitcoinCharTestLinkRenderer()}
      {whatRightTestLinkRenderer()}
      {pokerCharTestLinkRenderer()}
      {onigiriCharTestLinkRenderer()}
      {ethereumCharTestLinkRenderer()}
      {loveDiceLoveTestLinkRenderer()}
      {flyJjackCharTestLinkRenderer()}
      {degreeWeatherCharTestLinkRenderer()}
      {blockYouTestLinkRenderer()}
      {talkAlotLoveTestLinkRenderer()}
      {eggCharTestLinkRenderer()}
      {knittingTestLinkRenderer()}
      {monsterAttackTestLinkRenderer()}
      {highteenStickerTestLinkRenderer()}
      {plopPoolCharTestLinkRenderer()}
      {receiptCharTestLinkRenderer()}
      {fruitSilhouetteCharTestLinkRenderer()}
      {webCharTestLinkRenderer()}
      {paintDoodleCharTestLinkRenderer()}
      {heartWindowTestLinkRenderer()}
      {colorThemeTestLinkRenderer()}
      {colorBubbleLoveTestLinkRenderer()}
      {profilePosterTestLinkRenderer()}
      {insideEmotionControlTestLinkRenderer()}
      {doodleGlassBoardCharTestLinkRenderer()}
      {charPartnerConnTestLinkRenderer()}
      {popcornCharLoveTestLinkRenderer()}
      {todayBentoCharTestLinkRenderer()}
      {glitchCharTestLinkRenderer()}
      {charFactPokPickTestLinkRenderer()}
      {cabinetCharTestLinkRenderer()}
      {zigzagCharTestLinkRenderer()}
      {christmasSleighTestLinkRenderer()}
      {teruterubozuTestLinkRenderer()}
      {tanghuluTestLinkRenderer()}
      {watercolorCharTestLinkRenderer()}
      {systemErrorTestLinkRenderer()}
    </Fragment>
  );
}

import React from 'react';

const Footer = () => {
  return (
    <div className='intro-footer'>
      <h5>
        광고 및 후원 문의<br></br>Advertising and Sponsorship Contact
      </h5>
      <p>soumy21@naver.com</p>
      <p className='mbtiImgGen-intro-biz-info-p'>
        주식회사 쿠키로켓 | 사업자등록번호 : 582-88-01697 | 대표 김정빈
        <br />
        주소 : 서울특별시 송파구 송파대로 409 4층
        <br />
        호스팅 서비스 : AWS | 통신판매업
        <br />
        유선번호 : 01084542518
        <br />
        신고번호 2020-경기하남-0706호
      </p>
      <p>
        Disclaimer:<br></br>All content is provided for fun and entertainment
        purposes only
      </p>
      <p>©주식회사 쿠키로켓 All Rights Reserved. 2024.</p>
      <p>
        <a
          style={{ color: 'lightGrey' }}
          target='_blank'
          rel='noopener noreferrer'
          href={'https://ktestone.com/privacy/'}
        >
          개인정보 처리방침
        </a>
      </p>
    </div>
  );
};

export default Footer;

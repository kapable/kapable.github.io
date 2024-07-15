import React, { useEffect, useState } from 'react';
import styles from './resultModal.module.css';
import { Button } from 'antd';
import Modal from 'react-modal';

const ResultModal = () => {
  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(189, 195,199, 0.7)',
    },
    content: {
      backgroundColor: 'white',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      height: '70%',
      width: '85%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '1rem',
      border: '3px solid white',
    },
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);
  return (
    <>
      <Button
        style={{ backgroundColor: '#e62182', color: 'white' }}
        onClick={showModal}
      >
        워치 페이스 다운로드
      </Button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCancel}
        style={modalStyles}
        contentLabel='#AppElement'
        ariaHideApp={false}
      >
        <div className={styles.modalCloseButton} onClick={handleOk}>
          X
        </div>
        <div className={styles.modalTopAlertDiv}>
          <p>
            <aside>
              ‼️ 모든 워치 페이스는 “케이테스트” 캐릭터를 이용해
              <br /> 직접 제작한 페이스입니다.
              <br />
              <aside>🚫 수정 및 재배포를 절대 금합니다 🚫</aside>
              <br />
              <aside>©️ 2024 KTESTONE All Rights Reserved.</aside>
              <br />
              The character and design of this Apple Watch face are original
              creations by KTESTONE. Unauthorized use, distribution, or
              reproduction of this design is prohibited.
            </aside>
          </p>
        </div>
        <div>
          <img
            src='https://calm-astrodon-3f9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fccda8eb7-75d0-4ed5-b76f-49468ff607db%2F3f54bf32-cc87-4b58-bf62-e3e9da56baeb%2FENFJ_%25EA%25B8%25B0%25EC%2581%25A8%25EC%259D%25B4.png?table=block&id=a4ebf53b-2eb3-43c0-bc5c-1e8e09ca9419&spaceId=ccda8eb7-75d0-4ed5-b76f-49468ff607db&width=1500&userId=&cache=v2'
            alt='sample'
            width={'100%'}
          />
        </div>
        <div className={styles.modalTutorialDiv}>
          <h4>🌟애플워치 페이스 적용 방법🌟</h4>
          <p>🔗 App Store Clockology</p>
          <img
            src='https://calm-astrodon-3f9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fccda8eb7-75d0-4ed5-b76f-49468ff607db%2Fcb8368b3-b6fa-4f9c-96db-31488b87f30d%2FKakaoTalk_20240715_100727179_01.jpg?table=block&id=a413c55c-c73b-414a-9a80-042113cd27e4&spaceId=ccda8eb7-75d0-4ed5-b76f-49468ff607db&width=1440&userId=&cache=v2'
            alt='asfd'
            width={'100%'}
          />
        </div>
        <div style={{ width: '50%', display: 'inline-block' }}>
          <button
            key={'okay'}
            onClick={handleOk}
            className={styles.modalOkButton}
          >
            Okay
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ResultModal;

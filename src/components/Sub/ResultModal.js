import React, { useCallback, useState } from 'react';
import styles from './resultModal.module.css';
import { Button, ConfigProvider } from 'antd';
import Modal from 'react-modal';
import { DownloadOutlined } from '@ant-design/icons';
import { _eventSenderGA } from '../../tools/tools';

const ResultModal = ({ testTitle, testResultContents }) => {
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
      maxWidth: '30rem',
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
  // const onDownLoadClick = (url) => {
  //   fetch(url, { mode: 'no-cors' })
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       const url = window.URL.createObjectURL(new Blob([blob]));
  //       const a = document.createElement('a');
  //       a.href = url;
  //       a.download = 'watchFace.clock2';
  //       document.body.appendChild(a);
  //       a.click();
  //       window.URL.revokeObjectURL(url);
  //       document.body.removeChild(a);
  //     })
  //     .catch((error) => {
  //       console.error('파일 다운로드 오류:', error);
  //     });
  // };

  const onDownLoadClick = useCallback(() => {
    _eventSenderGA(
      'Download',
      'Click watchFace-download Button',
      'result page modal'
    );
  }, []);

  if (testTitle === 'insideEmotionControl') {
    return (
      <>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultHoverBorderColor: '#e62182',
                defaultHoverColor: '#e62182',
              },
            },
          }}
        >
          <div>
            <img
              src={`https://images.ktestone.com/resultImages/${testTitle}/${testTitle}-modal-header.jpg`}
              alt={`${testTitle}`}
              className='result-img'
              onClick={showModal}
              style={{ cursor: 'pointer' }}
            />
          </div>

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
                <span>
                  ❗️❗️ 모든 워치 페이스는 “케이테스트” 캐릭터를 이용해 직접
                  제작한 페이스입니다.
                  <br />
                  <span>🚫 수정 및 재배포를 절대 금합니다 🚫</span>
                  <br />
                  <span>©️ 2024 KTESTONE All Rights Reserved.</span>
                  <br />
                  The character and design of this Apple Watch face are original
                  creations by KTESTONE. Unauthorized use, distribution, or
                  reproduction of this design is prohibited.
                </span>
              </p>
            </div>
            <div>
              <p className={styles.downloadComment}>
                * 인스타그램 내에서 다운로드가 안될 수 있어서 다른 웹
                브라운저(사파리, 크롬, 네이버, 카카오톡 등)를 이용해서 다운로드
                받아주세요
              </p>
              <a
                href={testResultContents?.watch_face_link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  style={{ marginTop: '1.5rem' }}
                  className={styles.downloadButton}
                  onClick={onDownLoadClick}
                >
                  <DownloadOutlined /> 워치 페이스 다운로드
                </Button>
              </a>
              <img
                src={`https://images.ktestone.com/resultImages/${testTitle}/watchFaceImage/${testResultContents?.type}.png`}
                alt='sample'
                width={'100%'}
              />
            </div>
            <div className={styles.modalTutorialDiv}>
              <h3>🌟애플워치 페이스 적용 방법🌟</h3>
              <h4>1. App Store 에서 Clockology 설치</h4>
              <a
                href='https://apps.apple.com/kr/app/clockology/id1456386228'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.appstoreLink}
              >
                <p>🔗 App Store Clockology</p>
              </a>
              <p>❗️❗️반드시 애플워치에도 설치 해야 함 ❗️❗️</p>
              <img
                src='https://calm-astrodon-3f9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fccda8eb7-75d0-4ed5-b76f-49468ff607db%2Fcb8368b3-b6fa-4f9c-96db-31488b87f30d%2FKakaoTalk_20240715_100727179_01.jpg?table=block&id=a413c55c-c73b-414a-9a80-042113cd27e4&spaceId=ccda8eb7-75d0-4ed5-b76f-49468ff607db&width=1440&userId=&cache=v2'
                alt='asfd'
                width={'100%'}
              />
              <h4>2. 원하는 페이스 다운 후 📁파일에서 클릭!</h4>
              <img
                src='https://calm-astrodon-3f9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fccda8eb7-75d0-4ed5-b76f-49468ff607db%2F9e7b0f7e-80c3-4bdc-baf5-7ef6275c7108%2FArtboard_1.png?table=block&id=8829e0e1-314a-41fe-bff8-b92682be45b5&spaceId=ccda8eb7-75d0-4ed5-b76f-49468ff607db&width=1460&userId=&cache=v2'
                alt='asfd'
                width={'100%'}
              />
              <h4>3. 연결되는 앱에서 Sync 버튼 누르면 완료!</h4>
              <img
                src='https://calm-astrodon-3f9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fccda8eb7-75d0-4ed5-b76f-49468ff607db%2F81570189-dce7-47f2-8a63-dede7d2b9c16%2FArtboard_1.png?table=block&id=08754ab2-fca0-49a3-9437-ff778904ccec&spaceId=ccda8eb7-75d0-4ed5-b76f-49468ff607db&width=1440&userId=&cache=v2'
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
        </ConfigProvider>
      </>
    );
  }
  return;
};

export default ResultModal;

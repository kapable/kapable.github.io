import React, { Fragment, useCallback } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { _eventSenderGA } from '../../tools/tools';

const GoToHomeBtn = ({ page }) => {
  const _onButtonClick = useCallback(() => {
    _eventSenderGA('Paging', 'Click Bottom to Home Button', `${page} page`);
  }, [page]);

  return (
    <Fragment>
      <div className='go-to-home-btn-container' onClick={_onButtonClick}>
        <a href='/' rel='noopener noreferrer'>
          <HomeOutlined
            className='bottom-fixed-go-to-home-button'
            style={{ color: '#E71C83' }}
          />
        </a>
      </div>
    </Fragment>
  );
};

export default GoToHomeBtn;

import React, { Fragment } from 'react';
import { _eventSenderGA } from '../../tools/tools';

const CoupangDynamicBanner = ({ page, originAdProb }) => {
  const coupangLink = originAdProb
    ? 'https://ads-partners.coupang.com/widgets.html?id=643134&template=carousel&trackingCode=AF4396324&subId=&width=300&height=300'
    : 'https://ads-partners.coupang.com/widgets.html?id=743253&template=carousel&trackingCode=AF7106359&subId=&width=300&height=300';
  return (
    <Fragment>
      <iframe
        title='ads-partners-coupang'
        src={coupangLink}
        width='300'
        height='300'
        frameBorder='0'
        scrolling='no'
        referrerPolicy='unsafe-url'
        onClick={() =>
          _eventSenderGA(
            'Clicking',
            'Click Coupang Dynamic Banner',
            `${page} page`
          )
        }
      ></iframe>
    </Fragment>
  );
};

export default CoupangDynamicBanner;

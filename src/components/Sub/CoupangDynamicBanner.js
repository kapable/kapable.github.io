import React, { Fragment } from 'react';
import { _eventSenderGA } from '../../tools/tools';

const CoupangDynamicBanner = ({ page }) => {
  const coupangLink =
    'https://ads-partners.coupang.com/widgets.html?id=743253&template=carousel&trackingCode=AF7106359&subId=&width=300&height=300';
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

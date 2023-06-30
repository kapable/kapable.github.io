import React, { Fragment } from 'react';
import ReactGA from 'react-ga';
import ReactGA4 from 'react-ga4';

const CoupangDynamicBanner = ({ page }) => {
    const _eventSenderGA = (category, action, label) => {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
        ReactGA4.event({
            category: category,
            action: action,
            label: label
        });
    };

    return (
        <Fragment>
            <iframe
                title='ads-partners-coupang' src="https://ads-partners.coupang.com/widgets.html?id=643134&template=carousel&trackingCode=AF4396324&subId=&width=300&height=300" width="300" height="300" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"
                onClick={() => _eventSenderGA("Clicking", "Click Coupang Dynamic Banner", `${page} page`)}
            ></iframe>
        </Fragment>
    );
};

export default CoupangDynamicBanner;
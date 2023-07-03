import ReactGA4 from 'react-ga4';

export const _eventSenderGA = (category, action, label) => {
    ReactGA4.event({
        category: category,
        action: action,
        label: label
    });
};
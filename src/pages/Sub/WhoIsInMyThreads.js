import React from 'react';
import { buildGraphAPIURL } from '../../tools/tools';

const WhoIsInMyThreads = () => {
  const APP_ID = process.env.REACT_APP_THREADS_APP_ID;
  const REDIRECT_URI = process.env.REACT_APP_THREADS_REDIRECT_URL;

  const AUTHORIZATION_BASE_URL = 'https://www.threads.net';
  const PARAMS__CLIENT_ID = 'client_id';
  const PARAMS__REDIRECT_URI = 'redirect_uri';
  const PARAMS__RESPONSE_TYPE = 'response_type';
  const PARAMS__SCOPE = 'scope';
  const SCOPES = [
    'threads_basic',
    'threads_content_publish',
    'threads_manage_insights',
    'threads_manage_replies',
    'threads_read_replies',
  ];

  async function onSubmitHandler(e) {
    e.preventDefault();
    const url = buildGraphAPIURL(
      'oauth/authorize',
      {
        [PARAMS__SCOPE]: SCOPES.join(','),
        [PARAMS__CLIENT_ID]: APP_ID,
        [PARAMS__REDIRECT_URI]: REDIRECT_URI,
        [PARAMS__RESPONSE_TYPE]: 'code',
      },
      null,
      AUTHORIZATION_BASE_URL
    );
    window.location.href = url;
  }
  return (
    <div>
      {console.log(APP_ID, REDIRECT_URI)}
      <button onClick={onSubmitHandler}>로그인해요</button>
    </div>
  );
};

export default WhoIsInMyThreads;

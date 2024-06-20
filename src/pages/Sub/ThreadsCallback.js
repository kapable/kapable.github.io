import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { buildGraphAPIURL } from '../../tools/tools';

const ThreadsCallback = () => {
  const navigator = useNavigate();
  const APP_ID = process.env.REACT_APP_THREADS_APP_ID;
  const API_SECRET = process.env.REACT_APP_THREADS_API_SECRET;
  const GRAPH_API_BASE_URL = process.env.REACT_APP_THREADS_GRAPH_API_BASE_URL;
  const REDIRECT_URI = process.env.REACT_APP_THREADS_REDIRECT_URL;

  useEffect(() => {
    async function main() {
      const params = new URL(document.URL).searchParams;
      const code = params.get('code');

      const uri = buildGraphAPIURL(
        'oauth/access_token',
        {},
        null,
        GRAPH_API_BASE_URL
      );
      try {
        const response = await axios.post(
          uri,
          new URLSearchParams({
            client_id: APP_ID,
            client_secret: API_SECRET,
            grant_type: 'authorization_code',
            redirect_uri: REDIRECT_URI,
            code,
          }).toString(),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
        console.log('Callback RESPONSE', response.data);
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('user_id', response.data.user_id);
        navigator(`/myThreads`);
      } catch (err) {
        console.error(err?.response?.data);
      }
    }
    main();
  }, [navigator, APP_ID, API_SECRET, GRAPH_API_BASE_URL, REDIRECT_URI]);

  return <div></div>;
};

export default ThreadsCallback;

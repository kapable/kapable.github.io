import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { buildGraphAPIURL } from '../../tools/tools';

const MyThreads = () => {
  const PARAMS__FIELDS = 'fields';
  const FIELD__THREADS_BIOGRAPHY = 'threads_biography';
  const FIELD__THREADS_PROFILE_PICTURE_URL = 'threads_profile_picture_url';
  const FIELD__USERNAME = 'username';

  const [user, setUser] = useState();

  useEffect(() => {
    async function main() {
      const getUserDetailsUrl = buildGraphAPIURL(
        'me',
        {
          [PARAMS__FIELDS]: [
            FIELD__USERNAME,
            FIELD__THREADS_PROFILE_PICTURE_URL,
            FIELD__THREADS_BIOGRAPHY,
          ].join(','),
        },
        localStorage.getItem('access_token')
      );

      let userDetails = {};
      try {
        const response = await axios.get(getUserDetailsUrl);
        userDetails = response.data;
        userDetails.user_profile_url = `https://www.threads.net/@${userDetails.username}`;
        setUser(userDetails);
      } catch (e) {
        console.error(e);
      }
    }
    main();
  }, []);
  return (
    <div>
      {console.log(user)}
      MyThreads
    </div>
  );
};

export default MyThreads;

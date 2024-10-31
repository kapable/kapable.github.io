import React from 'react';
import { _eventSenderGA } from '../../tools/tools';

const UserDoneTestRenderer = ({ testList }) => {
  return (
    <div>
      {testList
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map((test) => (
          <div key={test.test_query}>
            <a
              href={`/kapable.github.io/${test.test_query}`}
              onClick={() =>
                _eventSenderGA(
                  'Paging',
                  'Click Go-another-Test-Banner Button',
                  'myReport page'
                )
              }
            >
              <img
                style={{ width: '20rem' }}
                src={test.thumbImage}
                alt={test.testName}
              />
            </a>
          </div>
        ))}
    </div>
  );
};

export default UserDoneTestRenderer;

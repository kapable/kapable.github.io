import React from 'react';

const UserDoneTestRenderer = ({ testList }) => {
  return (
    <div>
      {testList
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map((test) => (
          <div key={test.test_query}>
            <a href={`/kapable.github.io/${test.test_query}`}>
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

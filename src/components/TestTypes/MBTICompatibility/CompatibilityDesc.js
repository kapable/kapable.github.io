import React from 'react';

const CompatibilityDesc = ({ result }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: '1rem',
        padding: '0.7rem',
        margin: '2rem auto',
      }}
    >
      <p style={{ lineHeight: '1.5rem', textAlign: 'left' }}>
        {result?.desc
          ?.replaceAll('"', '')
          ?.replaceAll('”', '')
          ?.replaceAll('“', '')
          ?.split('.')
          .map((sentence, index) => (
            <React.Fragment key={index}>
              {sentence.trim()}
              {index < result.desc.split('.').length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
      </p>
    </div>
  );
};

export default CompatibilityDesc;

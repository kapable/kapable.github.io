import React, { useCallback, useState } from 'react';
import { ConfigProvider, FloatButton } from 'antd';
import { supabase } from '../../tools/supabaseClient';
import { USER_INFO_TABLE } from '../../tools/auth';

const languageMapper = {
  Kor: 'kor',
  Eng: 'usa',
  CN: 'china',
  JP: 'japan',
};

const LanguageSettingBtn = ({
  currentLanguage,
  setCurrentLanguage,
  isMyPage,
  userid,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const onClickLanguageIcons = useCallback(
    async (lang) => {
      setIsOpened((prev) => !prev);
      if (lang) {
        setCurrentLanguage(lang);
        if (isMyPage) {
          await supabase
            .from(USER_INFO_TABLE)
            .update({ language: lang })
            .eq('email', `${userid}@gmail.com`);
        }
      }
    },
    [setIsOpened, setCurrentLanguage, isMyPage, userid]
  );
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'white',
            colorTextLightSolid: '#E71C83',
          },
        }}
      >
        <FloatButton.Group
          trigger='click'
          type='primary'
          icon={
            <img
              src={`https://images.ktestone.com/default/languageIcon/${languageMapper[currentLanguage]}-icon.png`}
              alt='Korean Flag'
              style={{ width: '100%' }}
            />
          }
          badge={{
            count: Object.keys(languageMapper).length,
            color: '#E71C83',
          }}
          open={isOpened}
          onClick={() => onClickLanguageIcons()}
        >
          {Object.keys(languageMapper).map((lang) => (
            <FloatButton
              key={lang}
              icon={
                <img
                  src={`https://images.ktestone.com/default/languageIcon/${languageMapper[lang]}-icon.png`}
                  alt={`${lang} Flag`}
                  style={{ width: '100%' }}
                />
              }
              onClick={() => onClickLanguageIcons(lang)}
            />
          ))}
        </FloatButton.Group>
      </ConfigProvider>
    </div>
  );
};

export default LanguageSettingBtn;

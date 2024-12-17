import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Helmet } from 'react-helmet-async';
import { difficulties } from '../../api/COLORPICKING';
import { balanceTests } from '../../api/BALANCEGAME';
import { Link } from 'react-router-dom';
import OhterLangIconsMain from '../../components/Sub/OhterLangIconsMain';
import CategoryIconsMain from '../../components/Sub/CategoryIconsMain';
import AdsenseAdvertiser from '../../components/Sub/AdsenseAdvertiser';
import { dual_qurie_test_list, TESTS } from '../../api/TESTS';
import { bingo } from '../../api/BINGO';
import { shortAnswerQuizes } from '../../api/SHORTANSWERQUIZ';
import { supabase } from '../../tools/supabaseClient';
import UserProfileFloatingBtn from '../../components/Sub/UserProfileFloatingBtn';
import { USER_INFO_TABLE } from '../../tools/auth';

const MainPage = ({ lang, category }) => {
  const render_range_points = [20, 31];
  const mainImgRef = useRef(null);
  const [currentCategory, setCurrentCategory] = useState(category);
  const [currentTestList, setCurrentTestList] = useState(
    TESTS.filter((test) => test.info.lang === 'Kor')
  );
  const [user, setUser] = useState(null);

  // Check Is User Logged In?
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const { data } = await supabase.auth.getUser();
      if (data) {
        const { data: userInfo } = await supabase
          .from(USER_INFO_TABLE)
          .select('*')
          .eq('user_id', data?.user?.id);
        return userInfo ? setUser(userInfo[0]) : setUser(null);
      }
    };
    checkUserLoggedIn();
  }, []);

  useEffect(() => {
    // reloadPage();
    return mainImgRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mainImgRef]);
  useEffect(() => {
    let local_lang = 'Kor';
    let local_category = 'All';
    if (lang) {
      local_lang = lang;
    }
    if (category) {
      local_category = category;
    }
    const setted_test_list = TESTS.filter(
      (test) =>
        test.info.lang === local_lang &&
        (local_category === 'All' ? true : test.info.category === category)
    );
    setCurrentTestList(setted_test_list);
  }, [lang, category]);

  const dualQurieTestRenderer = useCallback(() => {
    if (!currentCategory || currentCategory === 'love') {
      const tests = dual_qurie_test_list.filter((item) => item.lang === lang);
      return (
        <>
          {tests.map((elem, idx) => (
            <Link
              className='main-link-block'
              to={`/${elem.mainUrl}/`}
              key={elem?.mainUrl}
            >
              <img
                loading='lazy'
                className='test-main-img'
                src={`https://images.ktestone.com/main-thumbnail/${elem.mainUrl}-thumb.png`}
                alt={`${elem.mainUrl}-thumb-img`}
              />
            </Link>
          ))}
        </>
      );
    }
  }, [lang, currentCategory]);
  const colorPickerRenderer = useCallback(() => {
    if (
      (lang === 'Kor' || !lang) &&
      (!currentCategory || currentCategory === 'etc')
    ) {
      const renderingArray = difficulties
        .filter((item) => item.lang === 'Kor')
        .reverse();
      return (
        <>
          {renderingArray.map((elem) => (
            <Link
              to={`/colorPicker${elem.difficulty}/`}
              className='main-link-block'
              key={`colorPicker${elem.difficulty}-banner`}
            >
              <img
                loading='lazy'
                className='test-main-img'
                src={`https://images.ktestone.com/main-thumbnail/colorPicker-${elem.difficulty}-thumb.png`}
                alt={`colorPicker${elem.difficulty}-banner`}
              />
            </Link>
          ))}
        </>
      );
    } else if (
      lang === 'Eng' &&
      (!currentCategory || currentCategory === 'etc')
    ) {
      const renderingArray = difficulties
        .filter((item) => item.lang === 'Eng')
        .reverse();
      return (
        <>
          {renderingArray.map((elem) => (
            <Link
              to={`/colorPicker${elem.difficulty}/`}
              className='main-link-block'
              key={`colorPicker${elem.difficulty}-banner`}
            >
              <img
                loading='lazy'
                className='test-main-img'
                src={`https://images.ktestone.com/main-thumbnail/colorPicker-${elem.difficulty}-thumb.png`}
                alt={`colorPicker${elem.difficulty}-banner`}
              />
            </Link>
          ))}
        </>
      );
    }
  }, [lang, currentCategory]);

  const balanceTestRenderer = useCallback(() => {
    if (!currentCategory || currentCategory === 'etc') {
      const filterLang = lang ? lang : 'Kor';
      const renderingArray = balanceTests
        .filter((item) => item.info.lang === filterLang)
        .reverse();
      return (
        <>
          {renderingArray.map((elem) => (
            <Link
              to={`/${elem.info.mainUrl}/`}
              className='main-link-block'
              key={`${elem.info.mainUrl}-banner`}
            >
              <img
                loading='lazy'
                className='test-main-img'
                src={`https://images.ktestone.com/main-thumbnail/${elem.info.mainUrl}-thumb.png`}
                alt={`${elem.info.mainUrl}-banner`}
              />
            </Link>
          ))}
        </>
      );
    }
  }, [lang, currentCategory]);

  const bingoGameRenderer = useCallback(() => {
    if (!currentCategory || currentCategory === 'etc') {
      const filterLang = lang ? lang : 'Kor';
      const renderingArray = bingo
        .filter((item) => item.lang === filterLang)
        .reverse();
      return (
        <>
          {renderingArray.map((elem) => (
            <Link
              to={`/${elem.title}/`}
              className='main-link-block'
              key={`${elem.title}-banner`}
            >
              <img
                loading='lazy'
                className='test-main-img'
                src={`https://images.ktestone.com/main-thumbnail/${elem.title}-thumb.png`}
                alt={`${elem.title}-banner`}
              />
            </Link>
          ))}
        </>
      );
    }
  }, [lang, currentCategory]);
  const shortAnswerQuizRenderer = useCallback(
    ({ start, end }) => {
      if (!currentCategory || currentCategory === 'etc') {
        const renderingArray = shortAnswerQuizes
          .filter((item) => item.info.lang === lang)
          .reverse()
          .slice(start, end);
        return (
          <>
            {renderingArray.map((elem) => (
              <Link
                to={`/${elem.info.mainUrl}/`}
                className='main-link-block'
                key={`${elem.info.mainUrl}-banner`}
              >
                <img
                  loading='lazy'
                  className='test-main-img'
                  src={`https://images.ktestone.com/main-thumbnail/${elem.info.mainUrl}-thumb.png`}
                  alt={`${elem.info.mainUrl}-banner`}
                />
              </Link>
            ))}
          </>
        );
      }
    },
    [lang, currentCategory]
  );

  const compatibilityRenderer = useCallback(() => {
    if (lang === 'Kor') {
      return (
        <Link
          to={`/compatibility/`}
          className='main-link-block'
          key={`compatibility-banner`}
        >
          <img
            loading='lazy'
            className='test-main-img'
            src={`https://images.ktestone.com/main-thumbnail/compatibility-thumb.png`}
            alt={`compatibility-banner`}
          />
        </Link>
      );
    }
  }, [lang]);

  const mainMetaTagRenderer = (lang) => {
    const _metaTagKor = (
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          케이테스트 - 취향분석 테스트(MBTI 검사,연애 성격 검사,MBTI
          궁합,사주,맞추기게임)
        </title>
        <meta
          name='title'
          content='케이테스트 - 취향분석 테스트(MBTI 검사,연애 성격 검사,MBTI 궁합,사주,맞추기게임)'
        />
        <meta
          name='description'
          content='진짜 내 모습을 찾아가는 심리 분석 테스트 : 케이테스트,MBTI검사,성격유형검사,무료성격테스트,MBTI궁합,16personalities, 심리테스트, 연애성격테스트,MBTI유형,엠비티아이검사,MBTI성격 테스트'
          data-react-helmet='true'
        />
        <meta
          name='purpleads-verification'
          content='67e5e9a6f3495f65f6b05cee'
        />
        <link rel='main-url' href={`https://ktestone.com`} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ktestone.com/' />
        <meta
          property='og:title'
          content='케이테스트 - 취향분석 테스트(MBTI 검사,연애 성격 검사,MBTI 궁합,사주,맞추기게임)'
        />
        <meta
          property='og:description'
          content='진짜 내 모습을 찾아가는 심리 분석 테스트 : 케이테스트,MBTI검사,성격유형검사,무료성격테스트,MBTI궁합,16personalities, 심리테스트, 연애성격테스트,MBTI유형,엠비티아이검사,MBTI성격 테스트'
        />
        <meta
          property='og:image'
          content='https://images.ktestone.com/default/main-header-2023.png'
        />
        <meta
          property='og:image:alt'
          content='진짜 내 모습을 찾아가는 심리 분석 테스트 : 퍼스널 컬러 테스트'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://ktestone.com/' />
        <meta
          property='twitter:title'
          content='케이테스트 - 취향분석 테스트(MBTI 검사,연애 성격 검사,MBTI 궁합,사주,맞추기게임)'
        />
        <meta
          property='twitter:description'
          content='진짜 내 모습을 찾아가는 심리 분석 테스트 : 케이테스트,MBTI검사,성격유형검사,무료성격테스트,MBTI궁합,16personalities, 심리테스트, 연애성격테스트,MBTI유형,엠비티아이검사,MBTI성격 테스트'
        />
        <meta
          property='twitter:image'
          content='https://images.ktestone.com/default/main-header-2023.png'
        />
        <meta
          property='twitter:image:alt'
          content='진짜 내 모습을 찾아가는 심리 분석 테스트 : 퍼스널 컬러 테스트'
        />
      </Helmet>
    );
    const _metaTagEng = (
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>KTEST - Personality Test & Games</title>
        <meta name='title' content='KTEST - Personality Test & Games' />
        <meta
          name='description'
          content='Find you real you with Personality Tests!: Personal Color Test, Love Character Tests, 16 Personality Tests, KTEST'
          data-react-helmet='true'
        />
        <meta
          name='purpleads-verification'
          content='67e5e9a6f3495f65f6b05cee'
        />
        <link rel='main-url' href={`https://ktestone.com/Eng/`} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ktestone.com/Eng/' />
        <meta property='og:title' content='KTEST - Personality Test & Games' />
        <meta
          property='og:description'
          content='Find you real you with Personality Tests!: Personal Color Test, Love Character Tests, 16 Personality Tests, KTEST'
        />
        <meta
          property='og:image'
          content='https://images.ktestone.com/default/main-header-2023Eng.png'
        />
        <meta
          property='og:image:alt'
          content='Find you real you with Personality Tests!: Personal Color Test, Love Character Tests, 16 Personality Tests, KTEST'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://ktestone.com/Eng/' />
        <meta
          property='twitter:title'
          content='KTEST - Personality Test & Games'
        />
        <meta
          property='twitter:description'
          content='Find you real you with Personality Tests!: Personal Color Test, Love Character Tests, 16 Personality Tests, KTEST'
        />
        <meta
          property='twitter:image'
          content='https://images.ktestone.com/default/main-header-2023Eng.png'
        />
        <meta
          property='twitter:image:alt'
          content='Find you real you with Personality Tests!: Personal Color Test, Love Character Tests, 16 Personality Tests, KTEST'
        />
      </Helmet>
    );
    const _metaTagJP = (
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>ケイテスト ケーテスト KTEST - 趣向分析MBTIテスト</title>
        <meta
          name='title'
          content='ケイテスト ケーテスト KTEST - 趣向分析MBTIテスト'
        />
        <meta
          name='description'
          content='あなたの本当の性格をテストで探してみてください！: パーソナルカラーテスト、性格診断, 愛の性格テスト、16の性格テストがあります, 診断 MBTI, えむ びー て ぃ ー あい'
          data-react-helmet='true'
        />
        <meta
          name='purpleads-verification'
          content='67e5e9a6f3495f65f6b05cee'
        />
        <link rel='main-url' href={`https://ktestone.com/JP/`} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ktestone.com/JP/' />
        <meta
          property='og:title'
          content='ケイテスト ケーテスト KTEST - 趣向分析MBTIテスト'
        />
        <meta
          property='og:description'
          content='あなたの本当の性格をテストで探してみてください！: パーソナルカラーテスト、愛の性格テスト、16の性格テストがあります, MBTI'
        />
        <meta
          property='og:image'
          content='https://images.ktestone.com/default/main-header-2023JP.png'
        />
        <meta
          property='og:image:alt'
          content='あなたの本当の性格をテストで探してみてください！: パーソナルカラーテスト、愛の性格テスト、16の性格テストがあります, MBTI'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://ktestone.com/JP/' />
        <meta
          property='twitter:title'
          content='ケイテスト ケーテスト KTEST - 趣向分析MBTIテスト'
        />
        <meta
          property='twitter:description'
          content='あなたの本当の性格をテストで探してみてください！: パーソナルカラーテスト、愛の性格テスト、16の性格テストがあります, MBTI'
        />
        <meta
          property='twitter:image'
          content='https://images.ktestone.com/default/main-header-2023JP.png'
        />
        <meta
          property='twitter:image:alt'
          content='あなたの本当の性格をテストで探してみてください！: パーソナルカラーテスト、愛の性格テスト、16の性格テストがあります, MBTI'
        />
      </Helmet>
    );
    if (lang === 'Kor' || lang === '') {
      return _metaTagKor;
    } else if (lang === 'Eng') {
      return _metaTagEng;
    } else if (lang === 'JP') {
      return _metaTagJP;
    }
    return _metaTagEng;
  };
  return (
    <Fragment>
      <>{mainMetaTagRenderer(lang)}</>
      {/* Language Converting */}
      <>
        <div ref={mainImgRef}>
          <OhterLangIconsMain />
        </div>
        <div>
          <img
            loading='lazy'
            className='main-header'
            src={
              lang === 'Eng' || lang === 'JP' || lang === 'CN'
                ? `https://images.ktestone.com/default/main-header-2023${lang}.png`
                : `https://images.ktestone.com/default/main-header-2023${
                    lang === 'Kor' || !lang ? '' : 'Eng'
                  }.png`
            }
            alt='K-test'
          />
        </div>
      </>

      {/* Category Converting */}
      <CategoryIconsMain lang={lang} setCurrentCategory={setCurrentCategory} />
      <AdsenseAdvertiser
        client={`ca-pub-2382342018701919`}
        slot={'9210802615'}
        format='auto'
        responsive='true'
        style={{ display: 'block' }}
      />
      {compatibilityRenderer()}
      {/* Main Test Banners(Top) */}
      <div className='main-link-div'>
        {currentTestList.slice(0, render_range_points[0]).map((item, idx) => {
          return (
            <Fragment key={`${item.info.mainUrl}-thumb-frag`}>
              <Link className='main-link-block' to={`/${item.info.mainUrl}/`}>
                <img
                  loading='lazy'
                  className='test-main-img'
                  src={item.info.thumbImage}
                  alt={`${item.info.mainUrl}-thumb-img`}
                />
              </Link>
              {idx % 2 === 0 ? (
                <AdsenseAdvertiser
                  client={`ca-pub-2382342018701919`}
                  slot={'9210802615'}
                  format='auto'
                  responsive='true'
                  style={{ display: 'block' }}
                />
              ) : null}
            </Fragment>
          );
        })}
      </div>

      {dualQurieTestRenderer()}
      {lang === 'Kor' ? (
        <Link
          to={'/alcoholGames/'}
          className='main-link-block'
          key='alcoholGames-banner'
        >
          <img
            loading='lazy'
            className='test-main-img'
            src={`https://images.ktestone.com/main-thumbnail/alcoholGame-thumb.png`}
            alt='alcoholGames'
          />
        </Link>
      ) : null}

      {shortAnswerQuizRenderer({ start: 3, end: 40 })}
      {bingoGameRenderer()}
      {balanceTestRenderer()}
      {colorPickerRenderer()}

      {/* Main Test Banners(Middle) */}
      <div className='main-link-div'>
        {currentTestList
          .slice(render_range_points[0], render_range_points[1])
          .map((item, idx) => {
            return (
              <Fragment key={`${item.info.mainUrl}-thumb-frag`}>
                <Link className='main-link-block' to={`/${item.info.mainUrl}/`}>
                  <img
                    loading='lazy'
                    className='test-main-img'
                    src={item.info.thumbImage}
                    alt={`${item.info.mainUrl}-thumb-img`}
                  />
                </Link>
                {idx % 2 === 0 ? (
                  <AdsenseAdvertiser
                    client={`ca-pub-2382342018701919`}
                    slot={'9210802615'}
                    format='auto'
                    responsive='true'
                    style={{ display: 'block' }}
                  />
                ) : null}
              </Fragment>
            );
          })}
      </div>

      {shortAnswerQuizRenderer({ start: 0, end: 3 })}

      {/* Main Test Banners(Bottom) */}
      <div className='main-link-div'>
        {currentTestList.slice(render_range_points[1]).map((item, idx) => {
          return (
            <Fragment key={`${item.info.mainUrl}-thumb-frag`}>
              <Link className='main-link-block' to={`/${item.info.mainUrl}/`}>
                <img
                  loading='lazy'
                  className='test-main-img'
                  src={item.info.thumbImage}
                  alt={`${item.info.mainUrl}-thumb-img`}
                />
              </Link>
              {idx % 2 === 0 ? (
                <AdsenseAdvertiser
                  client={`ca-pub-2382342018701919`}
                  slot={'9210802615'}
                  format='auto'
                  responsive='true'
                  style={{ display: 'block' }}
                />
              ) : null}
            </Fragment>
          );
        })}
      </div>
      <UserProfileFloatingBtn user={user} />
    </Fragment>
  );
};

export default MainPage;

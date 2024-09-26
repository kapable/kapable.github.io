import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Basic/MainPage';
import Privacy from './pages/Basic/Privacy';
import { useEffect, useState } from 'react';
import { mbti_tests_list, TESTS } from './api/TESTS';
import { randomGamesRoutes } from './api/RANDOMGAME';
import { difficulties } from './api/COLORPICKING';
import { balanceTestsTitle } from './api/BALANCEGAME';
import { bingoList } from './api/BINGO';
import ReactGA4 from 'react-ga4';
import Intro from './pages/Basic/Intro';
import Result from './pages/Basic/Result';
import BalanceTest from './components/TestTypes/BalanceTest/BalanceTest';
import BalanceTestResult from './components/TestTypes/BalanceTest/BalanceTestResult';
import RandomGame from './components/TestTypes/RandomGame/RandomGame';
import RandomGameAnswer from './components/TestTypes/RandomGame/RandomGameAnswer';
import ColorPicking from './components/TestTypes/ColorPicker/ColorPicking';
import ColorPickerResult from './components/TestTypes/ColorPicker/ColorPickerResult';
import TwoSplitedIntro from './components/TestTypes/TwoSplitedIntro/TwoSplitedIntro';
import LifeInterpreting from './components/TestTypes/Saju/LifeInterpreting';
import LifeInterpretingResult from './components/TestTypes/Saju/LifeInterpretingResult';
import LifetimeSaju from './components/TestTypes/Saju/LifetimeSaju';
import LifetimeSajuResult from './components/TestTypes/Saju/LifetimeSajuResult';
import TodayLuck from './components/TestTypes/Saju/TodayLuck';
import TodayLuckResult from './components/TestTypes/Saju/TodayLuckResult';
import FortuneCookie from './components/TestTypes/FortuneCookie/FortuneCookie';
import FactPok from './components/TestTypes/FactPok/FactPok';
import Acrostic from './components/TestTypes/Acrostic/Acrostic';
import BingoMain from './components/TestTypes/Bingo/BingoMain';
import BingoResult from './components/TestTypes/Bingo/BingoResult';
import Page404 from './pages/Basic/Page404';
import AlcoholGames from './components/TestTypes/AlcoholGames';
import WhoIsInMyThreads from './pages/Sub/WhoIsInMyThreads';
import ThreadsCallback from './pages/Sub/ThreadsCallback';
import MyThreads from './pages/Sub/MyThreads';
import SignUp from './pages/Auth/SignUp';
import MyPage from './pages/Auth/MyPage';
import ShortAnswerQuiz from './components/TestTypes/ShortAnswerQuiz/ShortAnswerQuiz';
import ShortAnswerQuizResult from './components/TestTypes/ShortAnswerQuiz/ShortAnswerQuizResult';
import { shortAnswerQuizesTitle } from './api/SHORTANSWERQUIZ';

let mbti_results_set = [];

TESTS.map((test) =>
  test.results.map((result) =>
    mbti_results_set.push({
      mainUrl: test.info.mainUrl,
      resultQuery: result.query,
    })
  )
);

function App() {
  useEffect(() => {
    ReactGA4.initialize([
      {
        trackingId: 'G-W3LQWJVJLX',
        gaOptions: {
          siteSpeedSampleRate: 100,
        },
      },
    ]);
  }, []);
  const [lang_list] = useState([
    'Kor',
    'JP',
    'Eng',
    'CN',
    'Ger',
    'ES',
    'IT',
    'Rus',
    'Others',
  ]);
  const [category_list] = useState([
    'saju',
    'characteristic',
    'love',
    'ai',
    'etc',
  ]);

  return (
    <Routes>
      {/* Main Page */}
      <Route path='/' element={<MainPage lang={'Kor'} />} />
      <Route path='/kapable.github.io/' element={<MainPage lang={'Kor'} />} />

      {/* Each Langs Main page */}
      {lang_list.map((lang) => (
        <Route
          path={`/${lang}/`}
          key={lang}
          element={<MainPage lang={lang} />}
        />
      ))}
      {lang_list.map((lang) => (
        <Route
          path={`/kapable.github.io/${lang}/`}
          key={`${lang}-kap`}
          element={<MainPage lang={lang} />}
        />
      ))}
      {/* Each Category and Langs page */}
      {lang_list.map((lang) =>
        category_list.map((cat) => (
          <Route
            path={`/${lang}/${cat}/`}
            element={<MainPage lang={lang} category={cat} />}
            key={`${lang}-${cat}`}
          />
        ))
      )}
      {lang_list.map((lang) =>
        category_list.map((cat) => (
          <Route
            path={`/kapable.github.io/${lang}/${cat}/`}
            element={<MainPage lang={lang} category={cat} />}
            key={`${lang}-${cat}-kap`}
          />
        ))
      )}

      {/* Intro Page */}
      {mbti_tests_list.map((test) => (
        <Route
          path={test.mainUrl}
          element={<Intro test={test.mainUrl} />}
          key={`${test.mainUrl}-intro`}
        />
      ))}
      {mbti_tests_list.map((test) => (
        <Route
          path={`/kapable.github.io/${test.mainUrl}`}
          element={<Intro test={test.mainUrl} />}
          key={`${test.mainUrl}-intro-kap`}
        />
      ))}

      {/* Result Page */}
      {mbti_results_set.map((set) => (
        <Route
          element={<Result />}
          key={`${set.mainUrl}-${set.resultQuery}-result`}
          path={`/${set.mainUrl}/result/${set.resultQuery}/`}
        />
      ))}
      {mbti_results_set.map((set) => (
        <Route
          element={<Result />}
          key={`${set.mainUrl}-${set.resultQuery}-result-kap`}
          path={`/kapable.github.io/${set.mainUrl}/result/${set.resultQuery}/`}
        />
      ))}

      {/* Privacy */}
      <Route path='/privacy' element={<Privacy />} />

      {/* ------------------GAME ROUTES------------------ */}

      {/* Short Answer Quiz */}
      {shortAnswerQuizesTitle.map(({ title, length }) => (
        <Route
          path={`/${title}/`}
          key={`${title}-route`}
          element={<ShortAnswerQuiz title={title} length={length} />}
        />
      ))}
      {shortAnswerQuizesTitle.map(({ title }) => (
        <Route
          path={`/${title}/result/`}
          key={`${title}-route`}
          element={<ShortAnswerQuizResult />}
        />
      ))}

      <Route path='/alcoholGames/' element={<AlcoholGames />} />

      {/* Bingo */}
      {bingoList.map((title) => (
        <Route
          path={`/${title}/`}
          key={`${title}-route`}
          element={<BingoMain title={title} />}
        />
      ))}
      {bingoList.map((title) => (
        <Route
          path={`/${title}/result/`}
          key={`${title}-route`}
          element={<BingoResult />}
        />
      ))}

      {/* Balance Test */}
      {balanceTestsTitle.map((title) => (
        <Route
          path={`/${title}/`}
          key={`${title}-route`}
          element={<BalanceTest title={title} />}
        />
      ))}
      {balanceTestsTitle.map((title) => (
        <Route
          path={`/${title}/result/`}
          key={`${title}-result-route`}
          element={<BalanceTestResult title={title} />}
        />
      ))}

      {/* Random Games */}
      {randomGamesRoutes.map((route, idx) => (
        <Route
          path={`/${route}/`}
          key={`randomGame-${idx}`}
          element={<RandomGame testTitle={route} />}
        />
      ))}
      {randomGamesRoutes.map((route, idx) => (
        <Route
          path={`/${route}/answers/`}
          key={`randomGame-${idx}`}
          element={<RandomGameAnswer testTitle={route} />}
        />
      ))}

      {/* ColorPicker */}
      {difficulties.map((item) => (
        <Route
          key={`colorPicker${item.difficulty}-intro`}
          path={`/colorPicker${item.difficulty}/`}
          element={
            <ColorPicking difficulty={item.difficulty} lang={item.lang} />
          }
        />
      ))}
      {difficulties.map((item) => (
        <Route
          key={`colorPicker${item.difficulty}-result`}
          path={`/colorPicker${item.difficulty}/result`}
          element={<ColorPickerResult lang={item.lang} />}
        />
      ))}

      {/* Dual Quries Tests */}

      {/* go to "HaGender" page */}
      <Route
        path='/haGender/'
        element={
          <TwoSplitedIntro
            test={'haGender'}
            lang={'Kor'}
            info={{
              title: '하남자 하여자 테스트 - 남자편 | 여자편 - 케이테스트',
              subTitle:
                '나는 과연 몇% 확률로 하남자/하여자 일까? - 남자편 | 여자편 - 케이테스트',
            }}
          />
        }
      />

      {/* go to "CoupleCharacter" page */}
      <Route
        path='/coupleCharacter/'
        element={
          <TwoSplitedIntro
            test={'coupleCharacter'}
            lang={'Kor'}
            info={{
              title: '커플 캐릭터 테스트 - 케이테스트',
              subTitle:
                '커플 캐릭터로 보는 나의 연애 성향은? - 커플 캐릭터 테스트 여자편 남자편 - 케이테스트',
            }}
          />
        }
      />
      <Route
        path='/coupleCharacterEng/'
        element={
          <TwoSplitedIntro
            test={'coupleCharacter'}
            lang={'Eng'}
            info={{
              title: 'Couple character test - Male | Female - KTEST',
              subTitle:
                'Your dating personality as couple character? - Male | Female - KTEST',
            }}
          />
        }
      />
      <Route
        path='/coupleCharacterCN/'
        element={
          <TwoSplitedIntro
            test={'coupleCharacter'}
            lang={'CN'}
            info={{
              title: '情侣性格测试 - 女方,男方 - KTEST',
              subTitle: '以情侣类型看我在恋爱中的性格是？ - 女方,男方 - KTEST',
            }}
          />
        }
      />
      <Route
        path='/coupleCharacterJP/'
        element={
          <TwoSplitedIntro
            test={'coupleCharacter'}
            lang={'JP'}
            info={{
              title: 'カップルキャラクターテスト - 女方,男方 - KTEST',
              subTitle:
                '私が花びらだったら、果たしてどんな花びらだろう？ - 女方,男方 - KTEST',
            }}
          />
        }
      />
      <Route
        path='/coupleCharacterIT/'
        element={
          <TwoSplitedIntro
            test={'coupleCharacter'}
            lang={'IT'}
            info={{
              title: 'Test del carattere della coppia - KTEST',
              subTitle:
                'Quali sono le mie tendenze romantiche come personaggio di coppia? - KTEST',
            }}
          />
        }
      />

      {/* go to "LoveCharacter" page */}
      <Route
        path='/loveCharacter/'
        element={
          <TwoSplitedIntro
            test={'loveCharacter'}
            lang={'Kor'}
            info={{
              title: '연애 캐릭터 테스트 - 케이테스트',
              subTitle:
                '캐릭터로 보는 나의 연애 성향은? - 연애 캐릭터 테스트 남자편 여자편 - 케이테스트',
            }}
          />
        }
      />
      <Route
        path='/loveCharacterEng/'
        element={
          <TwoSplitedIntro
            test={'loveCharacter'}
            lang={'Eng'}
            info={{
              title: 'Love Character Test - KTEST',
              subTitle:
                'What kind of my character is my love character? - Male | Love chracter test - male female boyfriend girlfriend - KTEST',
            }}
          />
        }
      />
      <Route
        path='/loveCharacterCN/'
        element={
          <TwoSplitedIntro
            test={'loveCharacter'}
            lang={'CN'}
            info={{
              title: '恋爱角色测试 - KTEST',
              subTitle:
                '我的爱情角色是什么样的角色？ | 恋爱角色测试 - 女方,男方 - KTEST',
            }}
          />
        }
      />
      <Route
        path='/loveCharacterGer/'
        element={
          <TwoSplitedIntro
            test={'loveCharacter'}
            lang={'Ger'}
            info={{
              title: 'Beziehungstypen Test - KTEST',
              subTitle:
                'Was für ein Charakter ist mein Liebescharakter? | BeziehungstypenTest - Freund, Freundin - KTEST',
            }}
          />
        }
      />
      <Route
        path='/loveCharacterES/'
        element={
          <TwoSplitedIntro
            test={'loveCharacter'}
            lang={'ES'}
            info={{
              title: 'Test de Personalidad en noviazgo. - KTEST',
              subTitle:
                '¿Cuál es mi inclinación a enamorarme como personaje? | para hombres, para mujeres - KTEST',
            }}
          />
        }
      />
      <Route
        path='/loveCharacterJP/'
        element={
          <TwoSplitedIntro
            test={'loveCharacter'}
            lang={'JP'}
            info={{
              title: '恋愛キャラクターテスト - KTEST',
              subTitle: '私の恋愛キャラクターはどんなキャラクターかな? - KTEST',
            }}
          />
        }
      />
      <Route
        path='/loveCharacterIT/'
        element={
          <TwoSplitedIntro
            test={'loveCharacter'}
            lang={'IT'}
            info={{
              title: "Test sul carattere dell'amore - KTEST",
              subTitle:
                'Quali sono le mie tendenze romantiche come personaggio? - KTEST',
            }}
          />
        }
      />

      {/* go to "MaleFemaleChar" page */}
      <Route
        path='/maleFemaleChar/'
        element={
          <TwoSplitedIntro
            test={'maleFemaleChar'}
            lang={'Kor'}
            info={{
              title: '남녀 성격 풀이법 테스트 - 남자편 | 여자편 - 케이테스트',
              subTitle:
                '내 성격 풀이법을 알려줄게! - 남자편 | 여자편 - 케이테스트',
            }}
          />
        }
      />
      <Route
        path='/maleFemaleCharEng/'
        element={
          <TwoSplitedIntro
            test={'maleFemaleChar'}
            lang={'Eng'}
            info={{
              title: 'Personality solving method test - Male | Female - KTEST',
              subTitle:
                "I'll teach you how to solve my personality! - Male | Female - KTEST",
            }}
          />
        }
      />

      {/* go to "lifeInterpreting" page */}
      <Route path='/lifeInterpreting/' element={<LifeInterpreting />} />
      <Route
        path='/lifeInterpreting/:query/'
        element={<LifeInterpretingResult />}
      />

      {/* go to "lifetimeSaju" page */}
      <Route path='/lifetimeSaju/' element={<LifetimeSaju />} />
      <Route path='/lifetimeSaju/:query/' element={<LifetimeSajuResult />} />

      {/* go to "todayLuck" page */}
      <Route path='/todayLuck/' element={<TodayLuck />} />
      <Route path='/todayLuck/:query/' element={<TodayLuckResult />} />

      {/* go to "FortuneCookie" page */}
      <Route path='/fortuneCookie/' element={<FortuneCookie />} />

      {/* go to "FactPok" page */}
      <Route path='/factPok/' element={<FactPok />} />

      {/* go to "Acroistic" page */}
      <Route path='/acrostic/' element={<Acrostic />} />

      <Route path='/whoisinmyThreads/' element={<WhoIsInMyThreads />} />
      <Route path='/threadsCallback/' element={<ThreadsCallback />} />
      <Route path='/myThreads/' element={<MyThreads />} />

      <Route path='/*' element={<Page404 />} />

      {/* Auth */}
      <Route path='/auth/signup' element={<SignUp />} />
      <Route path='/auth/mypage' element={<MyPage />} />
    </Routes>
  );
}

export default App;

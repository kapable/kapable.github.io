function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

var TESTS = [
    // order tests with newly date order
    // Cyworld
    {
        info : {
            mainTitle:"케이테스트 도토리테스트",
            subTitle:"나의 도토리력은? , 싸이월드테스트, 도토리테스트",
            mainUrl:"dotori",
            scoreType:"numberScoringImg",
            mainImage:"https://lh3.googleusercontent.com/pw/ACtC-3fM5S4H21uL3IZ4int1tZqB0qT_CaDRc2x6BUKGR3QT00QFrH7FIUa2vlnUlHI-tXDGSbhIvuDAVtSWjzJcgH52wt_qPEqpQCGfq4uI8VtAHIpcqb8YLN9PZMg5RHXGZprvGj3BjriUo8LWC-yGy-c=w768-h489-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/pw/ACtC-3dN6dRP9vszZ1xY8bqEpYC-tRKt5mwkunyivb8rG0XKv6AnPivgAdwiKHsPGOHPdVxa2MF0CFP5aOWEkuA_dS2gdC9ghaf85RjGSIo-8Ff1LhDAQdkv2-CA-IVudqKcZH7UasUpcuWEqD2BXjBLSUk=w768-h620-no?authuser=4"
        },
        questions:[
            {
                question: '싸이월드의 캐쉬는?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 0,
                        content: '도토리묵'
                    },
                    {
                        type: "치와와",
                        score: 0,
                        content: '밤'
                    },
                    {
                        type: "포메라니안",
                        score: 0,
                        content: '쿠키'
                    },
                    {
                        type: "치와와",
                        score: 1,
                        content: '도토리'
                    },
                ],
                questionImage:'',
            },
            {
                question: "다음중 미니홈피에서 서로 친구를 맺는 단어는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 0,
                        content: "이종사촌"
                    },
                    {
                        type: "웰시코기",
                        score: 0,
                        content: "버디버디"
                    },
                    {
                        type: "포메라니안",
                        score: 1,
                        content: "일촌"
                    },
                    {
                        type: "웰시코기",
                        score: 0,
                        content: "서이추"
                    },
                ],
                questionImage:'',
            },
            {
                question: "'ㅈㅉ ㅈㅅ'의 뜻은 무엇인가?",
                answers:[
                    {
                        type: "치와와",
                        score: 0,
                        content: "진짜 죄송합니다"
                    },
                    {
                        type: "웰시코기",
                        score: 1,
                        content: "전체쪽지 죄송합니다"
                    },
                    {
                        type: "웰시코기",
                        score: 0,
                        content: "전체쪽지 조심하세요"
                    },
                ],
                questionImage:'',
            },
            {
                question: "박태준이 유명해진 이유는?",
                answers:[
                    {
                        type: "비글",
                        score: 0,
                        content: "외모지상주의 웹툰"
                    },
                    {
                        type: "리트리버",
                        score: 1,
                        content: "가캐 주인공이라"
                    },
                    {
                        type: "리트리버",
                        score: 0,
                        content: "잘생긴 웹툰 작가라서"
                    },
                ],
                questionImage:'',
            },
            {
                question: "다음 중 가끔 눈물 흘리는 사람은?",
                answers:[
                    {
                        type: "리트리버",
                        score: 0,
                        content: '광수'
                    },
                    {
                        type: "웰시코기",
                        score: 0,
                        content: "지석진"
                    },
                    {
                        type: "리트리버",
                        score: 1,
                        content: '채연'
                    },
                    {
                        type: "웰시코기",
                        score: 0,
                        content: "홍록기"
                    },
                ],
                questionImage:'',
            },
            {
                question: "다음중 미니홈피 bgm과 어울리지 않는 노래는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 0,
                        content: "에픽하이 LoveLoveLove"
                    },
                    {
                        type: "비글",
                        score: 1,
                        content: "방탄소년단 피땀눈물"
                    },
                    {
                        type: "포메라니안",
                        score: 0,
                        content: "프리스타일 Y"
                    },
                    {
                        type: "비글",
                        score: 0,
                        content: "엠씨몽 I Love u Oh Thank U"
                    },
                ],
                questionImage:'',
            },
            {
                question: "다음중 빈칸에 들어갈 순서로 알맞는 것은?",
                answers:[
                    {
                        type: "비글",
                        score: 0,
                        content: "교실, 교복, 출소"
                    },
                    {
                        type: "웰시코기",
                        score: 0,
                        content: "집, 유니폼, 출소"
                    },
                    {
                        type: "비글",
                        score: 1,
                        content: "교실, 교복, 석방"
                    },
                ],
                questionImage:'https://lh3.googleusercontent.com/pw/ACtC-3eNcHwMwOfx8nBSimWn5SKmT9CkVYQ5cMRDMFpadDU2eAwNRjDYrXs0dvP5ltGGjf0JT7xuK-qDf0jE7irjuY0xwe0P3ALUuJHwF7y9ZDkJhrhGeXkF-rDv9YHzVmuDDNoBByPBux4WHvTOjqmpyls=w482-h470-no?authuser=4',
            },
            {
                question: "다음 사진의 명칭은?",
                answers:[
                    {
                        type: "치와와",
                        score: 0,
                        content: "플로피"
                    },
                    {
                        type: "리트리버",
                        score: 1,
                        content: "플로피디스켓"
                    },
                    {
                        type: "리트리버",
                        score: 0,
                        content: "디스켓플로피"
                    },
                ],
                questionImage:'https://lh3.googleusercontent.com/pw/ACtC-3djamT8LRMzomz93GICBAHg-tKvxH3cmX5glUFOcwXQtEeU9SkC5yXF4VuyFKabYSbhrdMGmt7vpMHSQdVXqLG9WGUBqDePbJGt4pJaKRcRFjtvBoF4_2n3uKQJZgXw7bsv16PXtXGP9XafHowU4mc=w414-h279-no?authuser=4',
            },
            {
                question: "쥬니어 네이버의 슈 게임이 아닌것은? \n (슈의는 생략)",
                answers:[
                    {
                        type: "치와와",
                        score: 0,
                        content: "미용실"
                    },
                    {
                        type: "리트리버",
                        score: 0,
                        content: "신속배달"
                    },
                    {
                        type: "치와와",
                        score: 0,
                        content: "라면가게"
                    },
                    {
                        type: "리트리버",
                        score: 1,
                        content: "동물농장"
                    },
                ],
                questionImage:'',
            },
            {
                question: "도토리 한 개의 가격은?",
                answers:[
                    {
                        type: "치와와",
                        score: 0,
                        content: "10원"
                    },
                    {
                        type: "리트리버",
                        score: 0,
                        content: "90원"
                    },
                    {
                        type: "치와와",
                        score: 1,
                        content: "100원"
                    },
                    {
                        type: "리트리버",
                        score: 0,
                        content: "110원"
                    },
                ],
                questionImage:'',
            },
        ],
        results:[
            {
                type: "20%",
                desc: ``,
                query: "alemdfhr",
                score_range:range(2),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3cOQDfzpXn6i9cVnORUNk8HdNj-b0NM1Zx3wkLAJJBI02q9bMv9oiHHhFue-1jGOVPcmy29PgPNO8JpdBWrH7XgTakY0BNjCDtTLyQBvawNHXNjnQa1o0yUZeVJqgTgb7N1sCR6T00zY925Wjtxs1g=w768-h940-no?authuser=4'
            },
            {
                type: "40%",
                desc: ``,
                query: "ghldnjsrkdlq",
                score_range:range(2, 4),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3fCrUAub8INwW5dxA8bFsmTEBGVTK_bG6EpzrR0VOyXDYNDnuRpIU9PCe7LsZLreBxPfs4Qm_V7XNUpV8A2ByeF7pQnvgSGUTPn2U7YCc79TKysQZD5IdW7lTGMxkZPvJbmo9VI_bnDRcfC9q07c-8=w768-h940-no?authuser=4'
            },
            {
                type: "60%",
                desc: ``,
                query: "gmrdurtk",
                score_range:range(4, 6),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3eakB5MqyJCsRSl9L9ZlcKEgJHcAzheakK7G8Ix7FIFOlkz1fGeFf4BXji5mrkjo9ENdL4npu52SOfO-xG3B-TPSXKw02IFZsuUiHZab8nojHilsyT_fbPY7vdHmrh5PiWsB6VgqyEYZOh3pkoZLgc=w768-h940-no?authuser=4'
            },
            {
                type: "80%",
                desc: ``,
                query: "rkRmasnsanf",
                score_range:range(6, 8),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3dITLOe3DwzBH98lAEkfEK3f8msIhtyLF6BDnPaUUJDVC4zNK6t0VVnQL2637azzaaWhjb07FFFjJyf9Xbui8uv2d4HMIrmE5R0l8J5qaSpY_YxbMbhozKAh1bTB2kLMe4PcXSswh8icNd0LOmZV7w=w768-h940-no?authuser=4'
            },
            {
                type: "100%",
                desc: ``,
                query: "vmfhaktmxj",
                score_range:range(8, 11),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3eYTS4tZ5RmdLNc7ATiRiEL2fXfbnP4_ES2PlT--tuUSIfaEQYmj-1klb_bNZ4mSFCG0xNTjYl_FTq9Hczp5TcYEhOid5QWLiRNC4TeBjnCUf9ryfoPIzc-BqPmxi_jxjVsVW0ZhM24fFc0tYZmY5M=w768-h940-no?authuser=4'
            },
        ]
    },
    // // peopleColor
    // {
    //     info : {
    //         mainTitle:"퍼스널 컬러 궁합 테스트",
    //         subTitle:"우리에게 어울리는 컬러는 무엇일까?",
    //         mainUrl:"peopleColor",
    //         scoreType:"dualMBTI",
    //         mainImage:"https://lh3.googleusercontent.com/CiTsbA9L_U7L76vG0CFN9_AfwuzbCqSti6Z9qHcjf6VUZQsML0o1-OLYyuu4JOJ5WuYyg15c9PQTsbG5dGlHSW94rkLSXf4EaozgeY1eSM4etFYILcWoqqGRImor8ONC7CyOAvTxckFseGUK23pMgB08iSnBFeUQuluPl1mek5pr_-4vYcQbH9JfletfakmGe1Al_PaLjyTs2xuSNAbukezJ2EPos580nX7ZOAmAQXSN5jtFcJHy_ulg_n_-JFhGiftXUw1mvlPcOglh-QUuxvyj3MpoUiuLx09hVJySlvRfWkLP02coAfjQUR-nrvvNnNG5ZH3K3r87jWh-NQauRrofRe17_lKMiQKLh-bSITqjSQN3E3msB1WTyfPtEFVn2FJJ5B91ZS_bEmiyswoEIT_fkx2SYxMy-wW30CTqF2NgEIFtNtru8Yrt7jrKn0aGrJUTiBMfwP_ncyh62NCjg2_3e-QGuJwgyYTUQMeR_WtLL9rITctydxqhux7mGQYFZFhIbNXugOIWby4xq_myQlEN6Z7noln7xxzkXr5_P5yOq0uG-PU-3gqZ3NtzpH1LxpFdMbXJ93GDuMCb8SOfx_IKYsrUGN2-2t-yIfn9qDN0QTDBA40AvvdyMgR208u4ieOsTINpnYyAXkzUmbKDvtQHrU7ZcbHI_YFMC1OcMAdIqZ7YjgkJ=w768-h944-no?authuser=4",
    //         thumbImage:"https://lh3.googleusercontent.com/viEp-tOHfnWBvSolDuJNFAihApGS_FE_dbnLyoEJ-S-e6Q4AhEv0TjRadNbG2EQO4jgxMd40aT0ckKqvFuOC4B95SUgBxQuAR88sm8EUh4v_VYm5DPj2so-kQJ-7dDs-T5IeTssblDDLNbpkYVojf8rBoQ7xDKTuNg-Mk0niiyrRfNoTbnV2zRuTXrqaEdwD8Fwyw4Bec_zZ16_aeJufVo_2ac_Rilbr18ZU2ybSgD_2SpWHMrm0ar9dOh5pviAw4K7HiH9RKkW8RsCpePylvuubCA_VLtD4OSAqhOjQTn5K98CEdq0UdFup7dtxu3GKlFkAJeZL-9fkWhBreCtahEabi7EUaHiOn2b4l5nx-iCP4v71ZMqtv1sqiaT43W4r-i_iS7aKbp6t7mOQikJq2JZdM3lytUTQ7k4kvoxO-BeKclcRg5Np8OG8MJupcBgMU3p_GiuqRBjlqcbXXGh8ocOUeUXPHRUIkE8MHOxpN4Cii5hupojKNWXy-rwboSx7ai0S_fB8YJpmW3dsxWVNtfZieF-2VXrj3UUom8_P4k_YNBmoNMiUYFx0IWKeZRBY4L6vCu7_N0LaCYXuExFqfaWYHMkUHPjwjVdX9F1323HKC9jjO9ul5Sxgkz3RB-PqQCUzr1wIyQH8ODyl_psV9nsfolvFDLDZqESyA4Uu1MFajn9X7sIS=w768-h620-no?authuser=4"
    //     },
    //     questions:[
    //         {
    //             which:"EI",
    //             question: '처음 보는 친구들에게 나는?',
    //             answers:[
    //                 {
    //                     type: "E",
    //                     score: 2,
    //                     content: '내가 먼저 말을 건낸다.'
    //                 },
    //                 {
    //                     type: "I",
    //                     score: 5,
    //                     content: '대부분 다른 친구가 먼저 말을 건낸다. '
    //                 },
    //             ],
    //         },
    //     ],
    //     results:[
    //         {type: 'ENFJENFJ',
    //             desc: '',
    //             query: 'ENFJENFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/48/47/SmSkS45c_o.png'},
    //         {type: 'ENFJENFP',
    //             desc: '',
    //             query: 'ENFJENFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/07/90/BFjToDFl_o.png'},
    //         {type: 'ENFJENTJ',
    //             desc: '',
    //             query: 'ENFJENTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/8b/c3/SCYb83tN_o.png'},
    //         {type: 'ENFJENTP',
    //             desc: '',
    //             query: 'ENFJENTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/b4/51/6zjsgIao_o.png'},
    //         {type: 'ENFJESFJ',
    //             desc: '',
    //             query: 'ENFJESFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/64/33/I3UR8J1i_o.png'},
    //         {type: 'ENFJESFP',
    //             desc: '',
    //             query: 'ENFJESFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/b1/34/bZEkwLsd_o.png'},
    //         {type: 'ENFJESTJ',
    //             desc: '',
    //             query: 'ENFJESTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/bc/c1/wJHJE3k2_o.png'},
    //         {type: 'ENFJESTP',
    //             desc: '',
    //             query: 'ENFJESTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/4a/f7/cIhh5beS_o.png'},
    //         {type: 'ENFJINFJ',
    //             desc: '',
    //             query: 'ENFJINFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/a0/6e/1ppyBzeh_o.png'},
    //         {type: 'ENFJINFP',
    //             desc: '',
    //             query: 'ENFJINFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/1c/71/CrtccNKr_o.png'},
    //         {type: 'ENFJINTJ',
    //             desc: '',
    //             query: 'ENFJINTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/80/09/ENeXRrVn_o.png'},
    //         {type: 'ENFJINTP',
    //             desc: '',
    //             query: 'ENFJINTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/60/66/jCWrdOES_o.png'},
    //         {type: 'ENFJISFJ',
    //             desc: '',
    //             query: 'ENFJISFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/fe/02/dnKiyPAe_o.png'},
    //         {type: 'ENFJISFP',
    //             desc: '',
    //             query: 'ENFJISFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/dd/94/w960F4K8_o.png'},
    //         {type: 'ENFJISTJ',
    //             desc: '',
    //             query: 'ENFJISTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/28/4e/5T1h8VEP_o.png'},
    //         {type: 'ENFJISTP',
    //             desc: '',
    //             query: 'ENFJISTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/48/18/2SqzfNg2_o.png'},
    //         {type: 'ENFPENFJ',
    //             desc: '',
    //             query: 'ENFPENFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/0f/fa/7QmkNI9G_o.png'},
    //         {type: 'ENFPENFP',
    //             desc: '',
    //             query: 'ENFPENFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/63/2b/kjhkZayy_o.png'},
    //         {type: 'ENFPENTJ',
    //             desc: '',
    //             query: 'ENFPENTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/0e/fc/GsmAJ585_o.png'},
    //         {type: 'ENFPENTP',
    //             desc: '',
    //             query: 'ENFPENTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/32/26/pG2aJHHz_o.png'},
    //         {type: 'ENFPESFJ',
    //             desc: '',
    //             query: 'ENFPESFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/66/cf/nAxBF11G_o.png'},
    //         {type: 'ENFPESFP',
    //             desc: '',
    //             query: 'ENFPESFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/48/f6/uTqr3jm1_o.png'},
    //         {type: 'ENFPESTJ',
    //             desc: '',
    //             query: 'ENFPESTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/98/b6/oUJyb1d0_o.png'},
    //         {type: 'ENFPESTP',
    //             desc: '',
    //             query: 'ENFPESTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/c2/5a/JKidTl2U_o.png'},
    //         {type: 'ENFPINFJ',
    //             desc: '',
    //             query: 'ENFPINFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/8e/01/acsdQV0M_o.png'},
    //         {type: 'ENFPINFP',
    //             desc: '',
    //             query: 'ENFPINFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/99/ab/CGY7n2zQ_o.png'},
    //         {type: 'ENFPINTJ',
    //             desc: '',
    //             query: 'ENFPINTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/a8/a1/4k8iJkyk_o.png'},
    //         {type: 'ENFPINTP',
    //             desc: '',
    //             query: 'ENFPINTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/8a/9b/E6O3cdj6_o.png'},
    //         {type: 'ENFPISFJ',
    //             desc: '',
    //             query: 'ENFPISFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/26/7f/GDAHt265_o.png'},
    //         {type: 'ENFPISFP',
    //             desc: '',
    //             query: 'ENFPISFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/08/c8/HBaqOZHu_o.png'},
    //         {type: 'ENFPISTJ',
    //             desc: '',
    //             query: 'ENFPISTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/6e/5c/erp0gcrD_o.png'},
    //         {type: 'ENFPISTP',
    //             desc: '',
    //             query: 'ENFPISTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/1e/d2/9LVjdaSK_o.png'},
    //         {type: 'ENTJENFJ',
    //             desc: '',
    //             query: 'ENTJENFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/32/44/znqVZzUp_o.png'},
    //         {type: 'ENTJENFP',
    //             desc: '',
    //             query: 'ENTJENFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/74/0c/CGSirPJc_o.png'},
    //         {type: 'ENTJENTJ',
    //             desc: '',
    //             query: 'ENTJENTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/9a/4f/oH5rKjN1_o.png'},
    //         {type: 'ENTJENTP',
    //             desc: '',
    //             query: 'ENTJENTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/9b/7f/yTiZxSOM_o.png'},
    //         {type: 'ENTJESFJ',
    //             desc: '',
    //             query: 'ENTJESFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/12/58/hmnhOSg7_o.png'},
    //         {type: 'ENTJESFP',
    //             desc: '',
    //             query: 'ENTJESFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/8e/8c/5Gnt0sN4_o.png'},
    //         {type: 'ENTJESTJ',
    //             desc: '',
    //             query: 'ENTJESTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/57/74/OH3FrKRb_o.png'},
    //         {type: 'ENTJESTP',
    //             desc: '',
    //             query: 'ENTJESTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/3d/84/odDGKuOA_o.png'},
    //         {type: 'ENTJINFJ',
    //             desc: '',
    //             query: 'ENTJINFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/65/d3/RfaUXAnf_o.png'},
    //         {type: 'ENTJINFP',
    //             desc: '',
    //             query: 'ENTJINFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/78/71/O1CHydaL_o.png'},
    //         {type: 'ENTJINTJ',
    //             desc: '',
    //             query: 'ENTJINTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/89/f9/WW4Wtie1_o.png'},
    //         {type: 'ENTJINTP',
    //             desc: '',
    //             query: 'ENTJINTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/1c/5d/WshQ4ztg_o.png'},
    //         {type: 'ENTJISFJ',
    //             desc: '',
    //             query: 'ENTJISFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/fc/0c/YD474g0P_o.png'},
    //         {type: 'ENTJISFP',
    //             desc: '',
    //             query: 'ENTJISFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/24/62/7238W08Z_o.png'},
    //         {type: 'ENTJISTJ',
    //             desc: '',
    //             query: 'ENTJISTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/5d/bc/nNOkRa9T_o.png'},
    //         {type: 'ENTJISTP',
    //             desc: '',
    //             query: 'ENTJISTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/92/26/ZNsDlmUB_o.png'},
    //         {type: 'ENTPENFJ',
    //             desc: '',
    //             query: 'ENTPENFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/e7/a9/smf5Qkhd_o.png'},
    //         {type: 'ENTPENFP',
    //             desc: '',
    //             query: 'ENTPENFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/ea/6f/v1l6d6Xb_o.png'},
    //         {type: 'ENTPENTJ',
    //             desc: '',
    //             query: 'ENTPENTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/90/d6/kQcwcDjg_o.png'},
    //         {type: 'ENTPENTP',
    //             desc: '',
    //             query: 'ENTPENTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/da/51/ikNA7T0A_o.png'},
    //         {type: 'ENTPESFJ',
    //             desc: '',
    //             query: 'ENTPESFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/ce/de/JIxXPi26_o.png'},
    //         {type: 'ENTPESFP',
    //             desc: '',
    //             query: 'ENTPESFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/1f/9c/oDyKN5ZA_o.png'},
    //         {type: 'ENTPESTJ',
    //             desc: '',
    //             query: 'ENTPESTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/b9/b9/3M7V1R4c_o.png'},
    //         {type: 'ENTPESTP',
    //             desc: '',
    //             query: 'ENTPESTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/c8/c8/8HaLzGSg_o.png'},
    //         {type: 'ENTPINFJ',
    //             desc: '',
    //             query: 'ENTPINFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/20/b5/ZnQXDZrw_o.png'},
    //         {type: 'ENTPINFP',
    //             desc: '',
    //             query: 'ENTPINFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/2d/d1/zLnw2b7F_o.png'},
    //         {type: 'ENTPINTJ',
    //             desc: '',
    //             query: 'ENTPINTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/95/15/WLZ5O5W2_o.png'},
    //         {type: 'ENTPINTP',
    //             desc: '',
    //             query: 'ENTPINTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/1f/d4/oYUURy4G_o.png'},
    //         {type: 'ENTPISFJ',
    //             desc: '',
    //             query: 'ENTPISFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/91/e7/CHZJGLea_o.png'},
    //         {type: 'ENTPISFP',
    //             desc: '',
    //             query: 'ENTPISFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/db/07/NYY6tJMq_o.png'},
    //         {type: 'ENTPISTJ',
    //             desc: '',
    //             query: 'ENTPISTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/5a/d0/xS72ioyO_o.png'},
    //         {type: 'ENTPISTP',
    //             desc: '',
    //             query: 'ENTPISTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/af/3c/5P1TlROr_o.png'},
    //         {type: 'ESFJENFJ',
    //             desc: '',
    //             query: 'ESFJENFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/52/b9/SzId3Xxy_o.png'},
    //         {type: 'ESFJENFP',
    //             desc: '',
    //             query: 'ESFJENFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/e1/c3/Enee0zej_o.png'},
    //         {type: 'ESFJENTJ',
    //             desc: '',
    //             query: 'ESFJENTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/59/58/mlC61DCj_o.png'},
    //         {type: 'ESFJENTP',
    //             desc: '',
    //             query: 'ESFJENTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/71/e7/iubqVkjY_o.png'},
    //         {type: 'ESFJESFJ',
    //             desc: '',
    //             query: 'ESFJESFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/6c/78/iCbLbk3z_o.png'},
    //         {type: 'ESFJESFP',
    //             desc: '',
    //             query: 'ESFJESFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/fb/7d/4CgWzgaM_o.png'},
    //         {type: 'ESFJESTJ',
    //             desc: '',
    //             query: 'ESFJESTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/03/cf/Yv5J7djk_o.png'},
    //         {type: 'ESFJESTP',
    //             desc: '',
    //             query: 'ESFJESTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/90/bd/DBc5gTNJ_o.png'},
    //         {type: 'ESFJINFJ',
    //             desc: '',
    //             query: 'ESFJINFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/57/f9/kgxb2ypz_o.png'},
    //         {type: 'ESFJINFP',
    //             desc: '',
    //             query: 'ESFJINFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/07/75/4khg8s4A_o.png'},
    //         {type: 'ESFJINTJ',
    //             desc: '',
    //             query: 'ESFJINTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/5c/4b/6FG9fBHA_o.png'},
    //         {type: 'ESFJINTP',
    //             desc: '',
    //             query: 'ESFJINTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/d0/01/2OrPAGxK_o.png'},
    //         {type: 'ESFJISFJ',
    //             desc: '',
    //             query: 'ESFJISFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/1e/5b/3UIXm8g0_o.png'},
    //         {type: 'ESFJISFP',
    //             desc: '',
    //             query: 'ESFJISFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/4d/d0/ZPGHCTCm_o.png'},
    //         {type: 'ESFJISTJ',
    //             desc: '',
    //             query: 'ESFJISTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/7e/3d/ewMDgBCU_o.png'},
    //         {type: 'ESFJISTP',
    //             desc: '',
    //             query: 'ESFJISTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/7a/16/JNdn7J4M_o.png'},
    //         {type: 'ESFPENFJ',
    //             desc: '',
    //             query: 'ESFPENFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/8e/b5/Kt73B0no_o.png'},
    //         {type: 'ESFPENFP',
    //             desc: '',
    //             query: 'ESFPENFP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/da/2e/va03wgTx_o.png'},
    //         {type: 'ESFPENTJ',
    //             desc: '',
    //             query: 'ESFPENTJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/08/c1/BycOPVzc_o.png'},
    //         {type: 'ESFPENTP',
    //             desc: '',
    //             query: 'ESFPENTP',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/cb/f4/wyLCmvCu_o.png'},
    //         {type: 'ESFPESFJ',
    //             desc: '',
    //             query: 'ESFPESFJ',
    //             score_range: range(0, 26),
    //             img_src: 'https://images2.imgbox.com/05/46/adxkK0bN_o.png'},
    //         {type: 'INTJINTJ',
    //         desc: '',
    //         query: 'INTJINTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/73/55/qVw9dV2U_o.png'},
    //         {type: 'INTJINTP',
    //         desc: '',
    //         query: 'INTJINTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/62/2f/iM1hHZZF_o.png'},
    //         {type: 'INTJISFJ',
    //         desc: '',
    //         query: 'INTJISFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/33/da/8ianBhcr_o.png'},
    //         {type: 'INTJISFP',
    //         desc: '',
    //         query: 'INTJISFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/74/e3/UaK0b4dH_o.png'},
    //         {type: 'INTJISTJ',
    //         desc: '',
    //         query: 'INTJISTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/aa/56/SZZElC3g_o.png'},
    //         {type: 'INTJISTP',
    //         desc: '',
    //         query: 'INTJISTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/24/8e/eBZuNo0s_o.png'},
    //         {type: 'INTPENFJ',
    //         desc: '',
    //         query: 'INTPENFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/a0/84/ZaDHjW0R_o.png'},
    //         {type: 'INTPENFP',
    //         desc: '',
    //         query: 'INTPENFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/a0/f2/bfoygVrt_o.png'},
    //         {type: 'INTPENTJ',
    //         desc: '',
    //         query: 'INTPENTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/7e/30/SfctuFL8_o.png'},
    //         {type: 'INTPENTP',
    //         desc: '',
    //         query: 'INTPENTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/f7/f8/d5npwAId_o.png'},
    //         {type: 'INTPESFJ',
    //         desc: '',
    //         query: 'INTPESFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/af/2b/vJlLtr0n_o.png'},
    //         {type: 'INTPESFP',
    //         desc: '',
    //         query: 'INTPESFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/c3/ec/s2WZS7XT_o.png'},
    //         {type: 'INTPESTJ',
    //         desc: '',
    //         query: 'INTPESTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/1c/23/1pYKTN6s_o.png'},
    //         {type: 'INTPESTP',
    //         desc: '',
    //         query: 'INTPESTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/6f/76/2RkGm25y_o.png'},
    //         {type: 'INTPINFJ',
    //         desc: '',
    //         query: 'INTPINFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/9e/f7/PTLlcQw8_o.png'},
    //         {type: 'INTPINFP',
    //         desc: '',
    //         query: 'INTPINFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/f5/9a/tViS9cgb_o.png'},
    //         {type: 'INTPINTJ',
    //         desc: '',
    //         query: 'INTPINTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/bd/4a/xnUduVfw_o.png'},
    //         {type: 'INTPINTP',
    //         desc: '',
    //         query: 'INTPINTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/fc/69/Qj5e6TAo_o.png'},
    //         {type: 'INTPISFJ',
    //         desc: '',
    //         query: 'INTPISFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/19/8e/1W7wZMRj_o.png'},
    //         {type: 'INTPISFP',
    //         desc: '',
    //         query: 'INTPISFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/ab/27/fysq7vNu_o.png'},
    //         {type: 'INTPISTJ',
    //         desc: '',
    //         query: 'INTPISTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/4d/50/kXUgxgX5_o.png'},
    //         {type: 'INTPISTP',
    //         desc: '',
    //         query: 'INTPISTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/09/bd/MEcV9UrD_o.png'},
    //         {type: 'ISFJENFJ',
    //         desc: '',
    //         query: 'ISFJENFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/ff/05/qbjhcHhi_o.png'},
    //         {type: 'ISFJENFP',
    //         desc: '',
    //         query: 'ISFJENFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/80/73/tkCN9KOj_o.png'},
    //         {type: 'ISFJENTJ',
    //         desc: '',
    //         query: 'ISFJENTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/d0/8c/13Bd0SMI_o.png'},
    //         {type: 'ISFJENTP',
    //         desc: '',
    //         query: 'ISFJENTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/6b/66/33a56SN4_o.png'},
    //         {type: 'ISFJESFJ',
    //         desc: '',
    //         query: 'ISFJESFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/5a/90/Vsks390c_o.png'},
    //         {type: 'ISFJESFP',
    //         desc: '',
    //         query: 'ISFJESFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/53/ac/VjTl3w9P_o.png'},
    //         {type: 'ISFJESTJ',
    //         desc: '',
    //         query: 'ISFJESTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/b3/4f/1gj2tY6O_o.png'},
    //         {type: 'ISFJESTP',
    //         desc: '',
    //         query: 'ISFJESTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/13/e2/2HlWcnvy_o.png'},
    //         {type: 'ISFJINFJ',
    //         desc: '',
    //         query: 'ISFJINFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/b3/4f/1gj2tY6O_o.png'},
    //         {type: 'ISFJINFP',
    //         desc: '',
    //         query: 'ISFJINFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/cc/a8/WD7rbn5R_o.png'},
    //         {type: 'ISFJINTJ',
    //         desc: '',
    //         query: 'ISFJINTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/13/6b/7nUsJUQ4_o.png'},
    //         {type: 'ISFJINTP',
    //         desc: '',
    //         query: 'ISFJINTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/fd/bc/h9tg4lMx_o.png'},
    //         {type: 'ISFJISFJ',
    //         desc: '',
    //         query: 'ISFJISFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/83/33/L5vFO8b4_o.png'},
    //         {type: 'ISFJISFP',
    //         desc: '',
    //         query: 'ISFJISFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/38/3a/4VrYBZoh_o.png'},
    //         {type: 'ISFJISTJ',
    //         desc: '',
    //         query: 'ISFJISTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/53/d2/ntUIrK3Q_o.png'},
    //         {type: 'ISFJISTP',
    //         desc: '',
    //         query: 'ISFJISTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/c0/45/NRssoaUT_o.png'},
    //         {type: 'ISFPENFJ',
    //         desc: '',
    //         query: 'ISFPENFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/ba/5e/Fz3SlVeu_o.png'},
    //         {type: 'ISFPENFP',
    //         desc: '',
    //         query: 'ISFPENFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/1e/1e/20o9E3Ro_o.png'},
    //         {type: 'ISFPENTJ',
    //         desc: '',
    //         query: 'ISFPENTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/68/f8/Yl1C6paf_o.png'},
    //         {type: 'ISFPENTP',
    //         desc: '',
    //         query: 'ISFPENTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/b6/09/WGv41c3y_o.png'},
    //         {type: 'ISFPESFJ',
    //         desc: '',
    //         query: 'ISFPESFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/2d/d2/tesmQZzM_o.png'},
    //         {type: 'ISFPESFP',
    //         desc: '',
    //         query: 'ISFPESFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/e7/f5/vkVQKYbf_o.png'},
    //         {type: 'ISFPESTJ',
    //         desc: '',
    //         query: 'ISFPESTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/62/5e/5jAklNyJ_o.png'},
    //         {type: 'ISFPESTP',
    //         desc: '',
    //         query: 'ISFPESTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/f1/6b/AZApQvqe_o.png'},
    //         {type: 'ISFPINFJ',
    //         desc: '',
    //         query: 'ISFPINFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/c6/88/VuMiRfEn_o.png'},
    //         {type: 'ISFPINFP',
    //         desc: '',
    //         query: 'ISFPINFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/6a/35/i878ewsu_o.png'},
    //         {type: 'ISFPINTJ',
    //         desc: '',
    //         query: 'ISFPINTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/95/72/vF5somU5_o.png'},
    //         {type: 'ISFPINTP',
    //         desc: '',
    //         query: 'ISFPINTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/46/1d/8XCkNf8W_o.png'},
    //         {type: 'ISFPISFJ',
    //         desc: '',
    //         query: 'ISFPISFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/34/85/18Z4NtzQ_o.png'},
    //         {type: 'ISFPISFP',
    //         desc: '',
    //         query: 'ISFPISFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/c5/e3/G0NLO9Yn_o.png'},
    //         {type: 'ISFPISTJ',
    //         desc: '',
    //         query: 'ISFPISTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/e7/cf/GGiA5GFc_o.png'},
    //         {type: 'ISFPISTP',
    //         desc: '',
    //         query: 'ISFPISTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/e3/e0/gLRrYeBz_o.png'},
    //         {type: 'ISTJENFJ',
    //         desc: '',
    //         query: 'ISTJENFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/d0/95/cBFJ36pX_o.png'},
    //         {type: 'ISTJENFP',
    //         desc: '',
    //         query: 'ISTJENFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/a9/af/wMR7fFOa_o.png'},
    //         {type: 'ISTJENTJ',
    //         desc: '',
    //         query: 'ISTJENTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/99/83/M6b507AY_o.png'},
    //         {type: 'ISTJENTP',
    //         desc: '',
    //         query: 'ISTJENTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/b8/5a/rqL5VdRC_o.png'},
    //         {type: 'ISTJESFJ',
    //         desc: '',
    //         query: 'ISTJESFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/d6/3c/1BEr8bod_o.png'},
    //         {type: 'ISTJESFP',
    //         desc: '',
    //         query: 'ISTJESFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/d5/89/wCUAdCv2_o.png'},
    //         {type: 'ISTJESTJ',
    //         desc: '',
    //         query: 'ISTJESTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/72/68/GxHYqx8y_o.png'},
    //         {type: 'ISTJESTP',
    //         desc: '',
    //         query: 'ISTJESTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/7e/db/YWHsIomL_o.png'},
    //         {type: 'ISTJINFJ',
    //         desc: '',
    //         query: 'ISTJINFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/4b/9b/52bXn5Qi_o.png'},
    //         {type: 'ISTJINFP',
    //         desc: '',
    //         query: 'ISTJINFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/5b/a0/ReQdzcTg_o.png'},
    //         {type: 'ISTJINTJ',
    //         desc: '',
    //         query: 'ISTJINTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/6e/28/RiR69DMB_o.png'},
    //         {type: 'ISTJINTP',
    //         desc: '',
    //         query: 'ISTJINTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/14/1b/dhorX23t_o.png'},
    //         {type: 'ISTJISFJ',
    //         desc: '',
    //         query: 'ISTJISFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/77/89/bnyff17X_o.png'},
    //         {type: 'ISTJISFP',
    //         desc: '',
    //         query: 'ISTJISFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/90/e7/P3uUBDEJ_o.png'},
    //         {type: 'ISTJISTJ',
    //         desc: '',
    //         query: 'ISTJISTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/b3/e9/i4nZk2Dw_o.png'},
    //         {type: 'ISTJISTP',
    //         desc: '',
    //         query: 'ISTJISTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/fd/55/4CaNssLJ_o.png'},
    //         {type: 'ISTPENFJ',
    //         desc: '',
    //         query: 'ISTPENFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/a2/fc/IgGE5ail_o.png'},
    //         {type: 'ISTPENFP',
    //         desc: '',
    //         query: 'ISTPENFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/35/39/TDQVJOnT_o.png'},
    //         {type: 'ISTPENTJ',
    //         desc: '',
    //         query: 'ISTPENTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/0a/28/BtshzsDa_o.png'},
    //         {type: 'ISTPENTP',
    //         desc: '',
    //         query: 'ISTPENTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/f3/3d/aPY9iYVt_o.png'},
    //         {type: 'ISTPESFJ',
    //         desc: '',
    //         query: 'ISTPESFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/da/b9/n3BrX9ut_o.png'},
    //         {type: 'ISTPESFP',
    //         desc: '',
    //         query: 'ISTPESFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/be/75/Mo8Yn50v_o.png'},
    //         {type: 'ISTPESTJ',
    //         desc: '',
    //         query: 'ISTPESTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/bb/5e/VScimGcn_o.png'},
    //         {type: 'ISTPESTP',
    //         desc: '',
    //         query: 'ISTPESTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/11/5b/RCUUBHUc_o.png'},
    //         {type: 'ISTPINFJ',
    //         desc: '',
    //         query: 'ISTPINFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/26/17/pOfTM06i_o.png'},
    //         {type: 'ISTPINFP',
    //         desc: '',
    //         query: 'ISTPINFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/6b/84/ItJckarI_o.png'},
    //         {type: 'ISTPINTJ',
    //         desc: '',
    //         query: 'ISTPINTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/c8/7f/XUkn8Cdo_o.png'},
    //         {type: 'ISTPINTP',
    //         desc: '',
    //         query: 'ISTPINTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/f6/84/nAae2vnJ_o.png'},
    //         {type: 'ISTPISFJ',
    //         desc: '',
    //         query: 'ISTPISFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/e5/f5/pQKYtvCc_o.png'},
    //         {type: 'ISTPISFP',
    //         desc: '',
    //         query: 'ISTPISFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/70/2b/5ei47CC8_o.png'},
    //         {type: 'ISTPISTJ',
    //         desc: '',
    //         query: 'ISTPISTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/f9/75/lp7QwCbV_o.png'},
    //         {type: 'ISTPISTP',
    //         desc: '',
    //         query: 'ISTPISTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/d9/67/ieVg5IW0_o.png'},
    //         {type: 'ESFPESFP',
    //         desc: '',
    //         query: 'ESFPESFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/6b/b5/LmLn8T1t_o.png'},
    //         {type: 'ESFPESTJ',
    //         desc: '',
    //         query: 'ESFPESTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/93/a8/Yn9NeuZC_o.png'},
    //         {type: 'ESFPESTP',
    //         desc: '',
    //         query: 'ESFPESTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/54/29/G52uIjfC_o.png'},
    //         {type: 'ESFPINFJ',
    //         desc: '',
    //         query: 'ESFPINFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/61/ec/BVZvLqiV_o.png'},
    //         {type: 'ESFPINFP',
    //         desc: '',
    //         query: 'ESFPINFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/e0/99/dTyPeNGJ_o.png'},
    //         {type: 'ESFPINTJ',
    //         desc: '',
    //         query: 'ESFPINTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/ab/bf/dj26DznQ_o.png'},
    //         {type: 'ESFPINTP',
    //         desc: '',
    //         query: 'ESFPINTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/18/df/AfqJf6Wr_o.png'},
    //         {type: 'ESFPISFJ',
    //         desc: '',
    //         query: 'ESFPISFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/4a/60/Sji6vBsA_o.png'},
    //         {type: 'ESFPISFP',
    //         desc: '',
    //         query: 'ESFPISFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/a5/9a/CVQSstW0_o.png'},
    //         {type: 'ESFPISTJ',
    //         desc: '',
    //         query: 'ESFPISTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/32/49/8Aodjynk_o.png'},
    //         {type: 'ESFPISTP',
    //         desc: '',
    //         query: 'ESFPISTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/d5/02/ZG8nc2wP_o.png'},
    //         {type: 'ESTJENFJ',
    //         desc: '',
    //         query: 'ESTJENFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/4b/ea/tdWmQrhA_o.png'},
    //         {type: 'ESTJENFP',
    //         desc: '',
    //         query: 'ESTJENFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/1d/00/JQCYziUW_o.png'},
    //         {type: 'ESTJENTJ',
    //         desc: '',
    //         query: 'ESTJENTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/dd/e4/q80A2bWz_o.png'},
    //         {type: 'ESTJENTP',
    //         desc: '',
    //         query: 'ESTJENTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/7f/d9/AdWQD5jb_o.png'},
    //         {type: 'ESTJESFJ',
    //         desc: '',
    //         query: 'ESTJESFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/5c/46/en0auJhE_o.png'},
    //         {type: 'ESTJESFP',
    //         desc: '',
    //         query: 'ESTJESFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/7e/63/AzqXao4G_o.png'},
    //         {type: 'ESTJESTJ',
    //         desc: '',
    //         query: 'ESTJESTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/15/fc/uVs9GqSO_o.png'},
    //         {type: 'ESTJESTP',
    //         desc: '',
    //         query: 'ESTJESTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/92/12/EGrE1mgq_o.png'},
    //         {type: 'ESTJINFJ',
    //         desc: '',
    //         query: 'ESTJINFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/21/c5/DziKD2kN_o.png'},
    //         {type: 'ESTJINFP',
    //         desc: '',
    //         query: 'ESTJINFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/5d/0c/IlH5TmoH_o.png'},
    //         {type: 'ESTJINTJ',
    //         desc: '',
    //         query: 'ESTJINTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/42/4e/hnXqJbY1_o.png'},
    //         {type: 'ESTJINTP',
    //         desc: '',
    //         query: 'ESTJINTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/44/2c/Rs2ADbtK_o.png'},
    //         {type: 'ESTJISFJ',
    //         desc: '',
    //         query: 'ESTJISFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/a5/e4/ezGRC0uc_o.png'},
    //         {type: 'ESTJISFP',
    //         desc: '',
    //         query: 'ESTJISFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/c8/0a/yyrRq762_o.png'},
    //         {type: 'ESTJISTJ',
    //         desc: '',
    //         query: 'ESTJISTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/fd/64/0ED0GmkP_o.png'},
    //         {type: 'ESTJISTP',
    //         desc: '',
    //         query: 'ESTJISTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/64/cd/gejiWIiy_o.png'},
    //         {type: 'ESTPENFJ',
    //         desc: '',
    //         query: 'ESTPENFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/7c/e2/Ye2OS7Ud_o.png'},
    //         {type: 'ESTPENFP',
    //         desc: '',
    //         query: 'ESTPENFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/03/74/qsdAhSXU_o.png'},
    //         {type: 'ESTPENTJ',
    //         desc: '',
    //         query: 'ESTPENTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/2e/e7/Lv2UWgCv_o.png'},
    //         {type: 'ESTPENTP',
    //         desc: '',
    //         query: 'ESTPENTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/19/1c/RPozTENf_o.png'},
    //         {type: 'ESTPESFJ',
    //         desc: '',
    //         query: 'ESTPESFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/2a/92/eSf0QgsQ_o.png'},
    //         {type: 'ESTPESFP',
    //         desc: '',
    //         query: 'ESTPESFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/05/43/bMfIWvcc_o.png'},
    //         {type: 'ESTPESTJ',
    //         desc: '',
    //         query: 'ESTPESTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/53/4b/DthRm4b4_o.png'},
    //         {type: 'ESTPESTP',
    //         desc: '',
    //         query: 'ESTPESTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/0c/c3/w17H3B0n_o.png'},
    //         {type: 'ESTPINFJ',
    //         desc: '',
    //         query: 'ESTPINFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/fa/d2/j6G6MT0p_o.png'},
    //         {type: 'ESTPINFP',
    //         desc: '',
    //         query: 'ESTPINFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/c3/97/BYUn0Rnf_o.png'},
    //         {type: 'ESTPINTJ',
    //         desc: '',
    //         query: 'ESTPINTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/6d/a3/3Te4b1WG_o.png'},
    //         {type: 'ESTPINTP',
    //         desc: '',
    //         query: 'ESTPINTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/8f/e8/wx0XMta2_o.png'},
    //         {type: 'ESTPISFJ',
    //         desc: '',
    //         query: 'ESTPISFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/92/7b/16QClwaA_o.png'},
    //         {type: 'ESTPISFP',
    //         desc: '',
    //         query: 'ESTPISFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/ab/83/arVOcb1P_o.png'},
    //         {type: 'ESTPISTJ',
    //         desc: '',
    //         query: 'ESTPISTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/1e/18/AhRiZHoZ_o.png'},
    //         {type: 'ESTPISTP',
    //         desc: '',
    //         query: 'ESTPISTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/c4/69/5sZOVL0a_o.png'},
    //         {type: 'INFJENFJ',
    //         desc: '',
    //         query: 'INFJENFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/6e/da/20CvAvyn_o.png'},
    //         {type: 'INFJENFP',
    //         desc: '',
    //         query: 'INFJENFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/b7/90/IAfsWQDx_o.png'},
    //         {type: 'INFJENTJ',
    //         desc: '',
    //         query: 'INFJENTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/33/96/5Csaquk5_o.png'},
    //         {type: 'INFJENTP',
    //         desc: '',
    //         query: 'INFJENTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/ca/44/CUhGVy9h_o.png'},
    //         {type: 'INFJESFJ',
    //         desc: '',
    //         query: 'INFJESFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/71/17/tjuluqPl_o.png'},
    //         {type: 'INFJESFP',
    //         desc: '',
    //         query: 'INFJESFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/85/05/i9Cmgzn4_o.png'},
    //         {type: 'INFJESTJ',
    //         desc: '',
    //         query: 'INFJESTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/65/6e/tREdLhrs_o.png'},
    //         {type: 'INFJESTP',
    //         desc: '',
    //         query: 'INFJESTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/43/17/HewmxUfG_o.png'},
    //         {type: 'INFJINFJ',
    //         desc: '',
    //         query: 'INFJINFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/f3/cc/7fgKu36s_o.png'},
    //         {type: 'INFJINFP',
    //         desc: '',
    //         query: 'INFJINFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/71/4d/Ve4A7Dfi_o.png'},
    //         {type: 'INFJINTJ',
    //         desc: '',
    //         query: 'INFJINTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/52/96/7Ng7quF8_o.png'},
    //         {type: 'INFJINTP',
    //         desc: '',
    //         query: 'INFJINTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/d5/ab/oNDMutgx_o.png'},
    //         {type: 'INFJISFJ',
    //         desc: '',
    //         query: 'INFJISFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/2d/26/3LBhotDY_o.png'},
    //         {type: 'INFJISFP',
    //         desc: '',
    //         query: 'INFJISFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/20/e3/4wlvwU4X_o.png'},
    //         {type: 'INFJISTJ',
    //         desc: '',
    //         query: 'INFJISTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/fd/4e/5mBxtGZZ_o.png'},
    //         {type: 'INFJISTP',
    //         desc: '',
    //         query: 'INFJISTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/4f/ab/R4t1iXZ3_o.png'},
    //         {type: 'INFPENFJ',
    //         desc: '',
    //         query: 'INFPENFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/ef/69/jHNKtPXg_o.png'},
    //         {type: 'INFPENFP',
    //         desc: '',
    //         query: 'INFPENFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/3a/6c/37oehQdA_o.png'},
    //         {type: 'INFPENTJ',
    //         desc: '',
    //         query: 'INFPENTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/2b/79/j4yFwCV4_o.png'},
    //         {type: 'INFPENTP',
    //         desc: '',
    //         query: 'INFPENTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/f4/03/iehkdApO_o.png'},
    //         {type: 'INFPESFJ',
    //         desc: '',
    //         query: 'INFPESFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/b0/e4/ouRZ7Sy6_o.png'},
    //         {type: 'INFPESFP',
    //         desc: '',
    //         query: 'INFPESFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/01/84/j3seR5io_o.png'},
    //         {type: 'INFPESTJ',
    //         desc: '',
    //         query: 'INFPESTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/fd/2c/qmAq2Bey_o.png'},
    //         {type: 'INFPESTP',
    //         desc: '',
    //         query: 'INFPESTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/62/a2/YXlkfFVL_o.png'},
    //         {type: 'INFPINFJ',
    //         desc: '',
    //         query: 'INFPINFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/d3/b9/7DzDXsF9_o.png'},
    //         {type: 'INFPINFP',
    //         desc: '',
    //         query: 'INFPINFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/e1/c2/P1Xo0ITU_o.png'},
    //         {type: 'INFPINTJ',
    //         desc: '',
    //         query: 'INFPINTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/e5/5c/AQVYeveF_o.png'},
    //         {type: 'INFPINTP',
    //         desc: '',
    //         query: 'INFPINTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/9d/e8/szVIjgik_o.png'},
    //         {type: 'INFPISFJ',
    //         desc: '',
    //         query: 'INFPISFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/a3/ab/EVPreGWc_o.png'},
    //         {type: 'INFPISFP',
    //         desc: '',
    //         query: 'INFPISFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/a0/2f/EJdjXHpI_o.png'},
    //         {type: 'INFPISTJ',
    //         desc: '',
    //         query: 'INFPISTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/c4/c3/5mqmYa84_o.png'},
    //         {type: 'INFPISTP',
    //         desc: '',
    //         query: 'INFPISTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/c7/12/zcAFIHal_o.png'},
    //         {type: 'INTJENFJ',
    //         desc: '',
    //         query: 'INTJENFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/3c/c4/Ed7RIAae_o.png'},
    //         {type: 'INTJENFP',
    //         desc: '',
    //         query: 'INTJENFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/21/87/daeay6Dd_o.png'},
    //         {type: 'INTJENTJ',
    //         desc: '',
    //         query: 'INTJENTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/06/3e/1aYwER7z_o.png'},
    //         {type: 'INTJENTP',
    //         desc: '',
    //         query: 'INTJENTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/f8/4c/JAx6Kx7n_o.png'},
    //         {type: 'INTJESFJ',
    //         desc: '',
    //         query: 'INTJESFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/bb/8a/wpuLwCd6_o.png'},
    //         {type: 'INTJESFP',
    //         desc: '',
    //         query: 'INTJESFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/8f/b6/7Y8vlWl3_o.png'},
    //         {type: 'INTJESTJ',
    //         desc: '',
    //         query: 'INTJESTJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/40/5e/gFJw4qFu_o.png'},
    //         {type: 'INTJESTP',
    //         desc: '',
    //         query: 'INTJESTP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/0b/41/SEScECq0_o.png'},
    //         {type: 'INTJINFJ',
    //         desc: '',
    //         query: 'INTJINFJ',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/d3/1c/fIgRSTVT_o.png'},
    //         {type: 'INTJINFP',
    //         desc: '',
    //         query: 'INTJINFP',
    //         score_range: range(0, 26),
    //         img_src: 'https://images2.imgbox.com/b8/6a/hpTeIuvC_o.png'},
    //     ]
    // },
    // persoanlColor
    {
        info : {
            mainTitle:"퍼스널 컬러 테스트",
            subTitle:"나에게 어울리는 컬러는 무엇일까?",
            mainUrl:"personalColor",
            scoreType:"typeCountingMBTI",
            mainImage:"https://lh3.googleusercontent.com/pw/ACtC-3fiNa0jjnQ8bdFWWw_AwXEECn-sr9I_Ax3OAVmBU0ecQg6dRjfHP064U9DyTE2WA0gMkKv1wl_fcJamkOCV3stEkgGukVvXnhZCF8sgnL1r2dma3_7fbF33CxUVwuhcNQjO959f__0XxYqxeHR_Nrk=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/pw/ACtC-3eUWOaxrfwL-GLnzJjvc5kE09dbz8a3X_fGZmptsiWm6cteYFFYLGe4tgpcEFKBvMejlMSz5ohghkysl763y25e4pvSHJZ99_QfbS66PSSjcbN5isSSRhjhdX-13RzdmS4qkkX6duWRLi3U_Z54EFQ=w768-h620-no?authuser=4"
        },
        questions:[
            {
                which:"EI",
                question: '처음 보는 친구들에게 나는?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '내가 먼저 말을 건낸다.'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '대부분 다른 친구가 먼저 말을 건낸다. '
                    },
                ],
            },
            {
                which:"EI",
                question: "주말에 난?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "사람들과 만나는 것을 즐긴다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "혼자 있는 게 싫지 않은 편이다."
                    },
                ]
            },
            {
                which:"EI",
                question: "친구들과 놀 때 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "왁자지껄한 신나는 분위기를 좋아한다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "소수의 친구들과 소소하게 대화하는 것을 좋아한다. "
                    },
                ]
            },
            {
                which:"SN",
                question: "내가 더 중요하게 생각하는 것은?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "현재가 없으면 미래도 없다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "미래를 생각하지 않으면 발전이 없다."
                    },
                ]
            },
            {
                which:"SN",
                question: "일할 때 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "남들이 하는 대로 따라 가는 것이 좋다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "스스로 나만의 방법을 만드는 게 좋다. "
                    },
                ]
            },
            {
                which:"SN",
                question: "주변 사람들이 나에게 하는 말은?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "꾸준하고 참을성이 있다는 말을 자주한다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "창의적이고 독창적이라는 말을 자주한다."
                    },
                ]
            },
            {
                which:"TF",
                question: "거절해야 하는 상황이 오면 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "강력하게 할 수 없다고 말한다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "고민하다가 대부분 들어주는 편이다."
                    },
                ]
            },
            {
                which:"TF",
                question: "화났을 때 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "논리적으로 잘 말하면서 따진다. "
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "할말이 많지만 너무 분해서 눈물부터 난다."
                    },
                ]
            },
            {
                which:"TF",
                question: "고민을 얘기하는 친구, 듣다 보니 친구의 잘못인 것 같다. 그럴 때 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "친구의 잘못된 점을 말해준다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "직접적으로 말하면 친구가 그래 할까봐 돌려 말한다."
                    },
                ]
            },
            {
                which:"JP",
                question: "준비물을 준비할 때 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "하루 전 날 미리 준비한다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "‘내일 챙겨야지’ 하다가 까먹고 놓고 오는 일이 많다."
                    },
                ]
            },
            {
                which:"JP",
                question: "끝나고 집에 가서 공부하려 했는데, 친구들이 놀자고 붙잡는다. 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "계획에 없던 일인데…매우 당황스럽다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "오케이! 역시 계획대로 안 되는 것이 인생! 놀자!!!!"
                    },
                ]
            },
            {
                which:"JP",
                question: "내가 가고싶은 여행지 스타일은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "내가 계획한대로! 계획적으로 일의 순서대로 진행하는 것을 좋아해!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "그때그때 생각나는 대로 일 처리! 융통성 있게 하는 것을 좋아해!"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3fz0OTqHAeJ6fUTm2oC8G9gGNrChVJOOLicA1_KDj_Zvu2ReIeZOW7fNQZU34R0Baf9HCmQTLSbNt8q4XsgdYAuL6U0XNaxya8ZGuDwUdCpjubKWnV4prUsXQbtNkNkptskofVOqpiJwZjiiuzd_io=w533-h1329-no?authuser=4'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3d6DJCaNLVnG5N-AXfdY6ZPYZbUpMw600uQfVRjz3-6gXaKdWGTamUM5zUyKWLJgrw4Eu90vXlKWr59oTKq5LCZd7nW3kGIFYE6Oc9-PJxJDgWT6fT8D2aS75bO_pn59eel_5Y0cIUj30w8fnEyu6o=w533-h1329-no?authuser=4'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3fe4QJzgxEhUAudMibORSoJ9X7S-oud0IbDTEYSK0oD11iE-DSM1IlkybNW_z05_J10oFZ89DVnuD4FBTXgJMC_1uQbbXR2-qMnwZy34uSwctOMNd9qqx4I84DKtsYQ_OYobauJRfQmPqnn5khi0KA=w533-h1329-no?authuser=4'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3cmv-jGdNrNwCRpTemgfniAi4w736ojXq0rOyT9_U5kPL1Tn2QnDQLaTNWokce3RxgkJFrBgGNmSOTKVKWrp2bpc5YOsggKCzb6imQzXNf_M9sWJTVo_aYP-jeLvbfZq9Z-EuOeyzDXLSdwFWk2muY=w533-h1329-no?authuser=4'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3f9aINVaEWHTQyv20c7rXoWY9kJiyzrOgLIPplsAPor3Mu99NFd5iJnuqmnducpd-7wWwfC_Jaiq1IpFC1-EU0qZFEVHjxv-TY3JqnNXIaYCz0NqHJyIPfO46uq9z_xI5BFeoJUDZGX7QzstdGl228=w533-h1329-no?authuser=4'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3ds740hVgNBnwUFPWKcIHv-t68J2kFZNRWi5a1DyL0hoesmAOdEy_r1sS6uPEG8DIuM-dkgDrZow0UnibbBR8woZmif1kyGToI56kAxO51qOOWKJ1a9IoBHfPPKu-mka-b3NsdJ3Ey2PuOMXxGnHlw=w533-h1329-no?authuser=4'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3eKbR-C7Q0Jc2WLb_w64K3qv0asNnVLYk-tcq95DM7oHIC8TEXsvA5Rti-gR_dRWweqpB2-K6s-_p1yi-0_PGwIUcfM9gjD-U4GTMEwc6pWT3cS56BXkokmd12xL8b2Mp-9Ga-fx2Zjlvw0lKxWQaQ=w533-h1329-no?authuser=4'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3c14JoXRptYUjwt5weSoacgX1VUkARhxm4fSY6wPgKdIqNkH92W1xHDNHArQfmncevh2_o67jTYyB3NHCyAGROElYDbRRja9UpbR1-pWa2Ag7iIwESyFJgfP9WKbIIBZeRQnIjo-2-c3Z7gmgSchxA=w533-h1329-no?authuser=4'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3dYEV7AITVBep7veBxl5IFZfvpl2XrRAbNAoaFwJH2pLt2yQJZFcRK92PCf6GywLfh78nLmNARx4tC1UaKGS7VAqbX1h6zffutnBL4vGLR-kW1TEAKgfq_AQI3s3XncNypG1gHjK4DfnKXwCEDOeSM=w533-h1329-no?authuser=4'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3dlIfT5AI3sJ7Nnix_7_Da0ils6Sc1Rgv_R_w4Ypfr3k6zu2VvMlyrs6-7CGoXDjYqZXQqMVCZFCv9KbEiYFGetXgjvrdfZLl8LaLAmALalOrubbjKHOs-GqcMWDHOOqpEnX6H7z6HrOBxfBr4ZQtw=w533-h1329-no?authuser=4'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3f44lPfCfiYthqKXTWcryGBlCrnxdmiM_W9TxNL0P8QDmhuwmEafzRSCKYbfxlG188M4kznzqxPZqNjFYtH69xEVrhCnpOUaSO0NuG5cSZBxLFXZvOWGFNVKHmpcaFlfaro88Zjq2fCx-Amtq3mkks=w533-h1329-no?authuser=4'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3eqHqgVsDzoSOr_S-NlALWkio8ix-nNXjHEFIFGBsAk2jQ01qBGGV0_sHuG4Dw31zmiEBsPlEZTbFaRJnaBGy_A01lQJMGfquJ6qi5Tq5b6qO5xsm_ogHLQJQxr35Bqw3jkIGfcg9rS02BPgblf2O4=w533-h1329-no?authuser=4'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3c1bE3YaGgn1Ue1SvSszXzI4YLawh8ZBem5AQWlOmhxf6m-tKjjIaTLmJIbCeUe6MxeDgPm6Mmk0PhKEtTBfwJQrQh6cwrV11GQ4PPDH2S93tOScEOdWGITMsz3YhlZ6-BcSbatf9Elr5YUkTJNl0g=w533-h1329-no?authuser=4'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3dT9KmSW8Hl4MCGdAxTLruuw7Exa3abuEZTs-_Tyh0zcm7nRsuK1rnTsG3GrVFE3Jse_9Mr0rLbRG_Td_vkF_cf2XfawAWScmdCcRrsvoLjP-WTw-5O8C79mVP8iDU6sRaqOemFnOMvvDvwk375rgI=w533-h1329-no?authuser=4'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3fXfsMsOqIEEGvNBlhP9HGcF82X-esdf665TqW-Y4zBskAu0KkfAXPuv48-J-8x4yOmsdRe685_48N6vOCM-49MdtTdgTMta67QUReTjrLrYJipEz06ZQRyuOVl0HWbajmaHJ1zexJ0_2IOYx5_Oj4=w533-h1329-no?authuser=4'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3edXNcBuo-muKk1H2PuuC0ppKYxwA85MbXJzuJz-VWAWfDYEA8eNaupxYyx7Rod0j-frwOIgkNn2q-zMjPc7n55ISqPyUgMVltbGHuGI9TgqK-tsVCkl8_cl6GAVQpocGC0ZzopelluYyxa-LMmdGk=w533-h1329-no?authuser=4'
            },
        ]
    },
    // otherLookMe
    {
        info : {
            mainTitle:"남들이 보는 나는?",
            subTitle:"남들이 보는 나는 과연 어떤 모습일까?",
            mainUrl:"otherlookme",
            scoreType:"numberScoring",
            mainImage:"https://lh3.googleusercontent.com/pw/ACtC-3d3jT4fHl5I04weA_g60jLofJBMR83YM1N5nPgDVzd339nhH3PkN2fU8jhlXXoCt1kZ4XNAwPNscZwzRQmfmcbQV48VgbM8FUMtAYcUoNz8t4QPeYIwDpWXSlbdAT2shKtZD0CJaZMb7L4vfqsJ2vc=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/pw/ACtC-3ce42kHIv4CHF02MF7MnAzgtwPpmDzhZ_kxbPuYsxgLHfL7rOTdE5KpbnJh_WJFoBB_OCcj0wgyefTJj-MWlqQ9n25SS6PLr2iWSZPZ3jaHyt_VxXlnqRewVbpDMep8BVDUZFn7DL-3lYXvHcSQJL0=w768-h620-no?authuser=4"
        },
        questions:[
            {
                question: '내가 가장 좋아하는 색깔은?',
                answers:[
                    {
                        type: "사자",
                        score: 1,
                        content: '갈색 or 회색'
                    },
                    {
                        type: "너구리",
                        score: 2,
                        content: '화이트'
                    },
                    {
                        type: "펭귄",
                        score: 3,
                        content: '진파랑 or 보라'
                    },
                    {
                        type: "사자",
                        score: 4,
                        content: '녹색'
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: '노랑 or 연파랑'
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: '빨강 or 주황'
                    },
                    {
                        type: "펭귄",
                        score: 7,
                        content: '검정'
                    },
                ],
            },
            {
                question: "파티 날 나의 등장은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "최대한 시선이 집중되지 않도록 조용히 들어간다."
                    },
                    {
                        type: "너구리",
                        score: 4,
                        content: "차분하게 들어가 주변을 두리번거린다."
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: "화려하게 모두가 날 볼 수 있도록 등장"
                    },
                ]
            },
            {
                question: "잠들기 전 나의 포즈는?",
                answers:[
                    {
                        type: "사자",
                        score: 1,
                        content: "이불을 머리 끝까지 덮고 자는 자세"
                    },
                    {
                        type: "너구리",
                        score: 2,
                        content: "한 팔을 베고 있는 자세"
                    },
                    {
                        type: "펭귄",
                        score: 3,
                        content: "옆으로 누워 웅크린 자세"
                    },
                    {
                        type: "너구리",
                        score: 4,
                        content: "엎드려서 자는 자세"
                    },
                    {
                        type: "펭귄",
                        score: 5,
                        content: "몸을 바르게 펴고 누운 자세"
                    },
                ]
            },
            {
                question: "간만에 집중하고 있는 날 누군가 방해한다.",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "나 지금 짜증났다고 투덜거린다"
                    },
                    {
                        type: "너구리",
                        score: 4,
                        content: "속으로 짜증내지만 티 안내기"
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: "오케이! 이 기회에 휴식타임"
                    },
                ]
            },
            {
                question: "편히 앉으라고 했을 때 나는?",
                answers:[
                    {
                        type: "사자",
                        score: 1,
                        content: "한 쪽 다리를 접어 깔고 앉기"
                    },
                    {
                        type: "너구리",
                        score: 2,
                        content: "다리를 쭉 펴고 앉기"
                    },
                    {
                        type: "펭귄",
                        score: 4,
                        content: "정자세로 앉기 (지하철에서의 자세) "
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: "다리 꼬고 앉기"
                    },
                ]
            },
            {
                question: "배꼽이 빠질 듯 재밌는 일이 있을 때 나는?",
                answers:[
                    {
                        type: "사자",
                        score: 3,
                        content: "미소 천사처럼 웃음 소리 내지 않기"
                    },
                    {
                        type: "너구리",
                        score: 4,
                        content: "조용한 소리로 웃기"
                    },
                    {
                        type: "펭귄",
                        score: 5,
                        content: "적당한 웃음 소리로 별로 크지 않게 웃기"
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: "나 지금 웃고 있다는 사실을 알리는 것처럼 숨기지 않고 크게 웃기"
                    },
                ]
            },
            {
                question: "사람들과 대화할 때 나는",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "두 손을 잡으면서"
                    },
                    {
                        type: "너구리",
                        score: 4,
                        content: "셀프 팔짱 끼고 서서"
                    },
                    {
                        type: "펭귄",
                        score: 5,
                        content: "한 손이나 양손을 허리에 올리고"
                    },
                    {
                        type: "너구리",
                        score: 6,
                        content: "내 몸이나 머리카락은 만지작거리며"
                    },
                    {
                        type: "펭귄",
                        score: 7,
                        content: "상대를 터치하며"
                    },
                ]
            },
            {
                question: "나는 평소 걸을 때",
                answers:[
                    {
                        type: "사자",
                        score: 1,
                        content: "느리게 걷기"
                    },
                    {
                        type: "너구리",
                        score: 2,
                        content: "바닥을 보며 빠르지 않게"
                    },
                    {
                        type: "펭귄",
                        score: 4,
                        content: "보폭은 좁게 빨리"
                    },
                    {
                        type: "너구리",
                        score: 6,
                        content: "보폭은 넓고 빨리"
                    },
                    {
                        type: "펭귄",
                        score: 7,
                        content: "정면을 바라보며 너무 빠르지 않게"
                    },
                ]
            },
            {
                question: "하루 중 가장 기분이 좋을 때",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "아침"
                    },
                    {
                        type: "너구리",
                        score: 4,
                        content: "오후나 이른 저녁"
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: "늦은 밤"
                    },
                ]
            },
            {
                question: "내가 주로 꾸는 꿈은?",
                answers:[
                    {
                        type: "사자",
                        score: 1,
                        content: "기분 좋은 느낌인 꿈"
                    },
                    {
                        type: "너구리",
                        score: 2,
                        content: "싸우는 꿈"
                    },
                    {
                        type: "펭귄",
                        score: 3,
                        content: "계속 찾는 꿈"
                    },
                    {
                        type: "사자",
                        score: 4,
                        content: "어디서 떨어지는 꿈"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "날거나 떠오르는 그런 꿈?"
                    },
                    {
                        type: "펭귄",
                        score: 6,
                        content: "꿈은 잘..."
                    },
                ]
            },
        ],
        results:[
            {
                type: "나는야 소심쟁이",
                desc: `나는야 소심쟁이\n
                ✓   남들이 보는 당신은 부끄럼이 많고, 조금 소심하며 우유부단해 보입니다.\n
                ✓   본인의 일을 잘 결정을 못하는 선택장애라 조금 답답해 보이고 뭔가 대신해줘야 할 것 같은…\n
                ✓   보호본능을 일으킨 달까?\n
                ✓   또한 걱정을 사서하는 타입!\n
                ✓   그래서 친해지면 아니라는 걸 알지만,\n
                ✓   당신과 친해지기 전까지 잘 모르는 사람은 당신을 조금 지루한 사람이라고 생각하기도 합니다.
                `,
                query: "thtlawoddl",
                score_range:range(21),
                img_src:'https://lh3.googleusercontent.com/ZNBa5W6S8TMJ9wCqS4_fgnTInyrvZq3novpRg5P-dV1Bl3_6oL3p-LdBYhzD3CHBGEe18bTItTpg0joU5STvpUu8TNWwZT8_WjG8jNjfyZsywXSLbi8V1LGoIBEZ8BC900BYgX4JHEOV9e56xH5AwIqatA8AGJb-7da9YP1sHPOzzLM8JlsYFQUgoX59R_FzvL7AOGh4UCAPIqGekV4cghnZw833RQhB6vwm2bHmC_MjlqNhbQ78z1oLGhvYtAXtIU8QHXgikCUsz3Ad34Ykv7Q1X8JT4zWrRH_Kr25FUeZazo7WZ0yFM9_rEJeuDPxGUz-y-62Dgip91N4rulbwWPoAUtcxFJNoogi_shu0N8H2vDcp2EMfIEV3KrnYaL-xDX-2nFzuAvToe4VbrfxMz8LlYhhiFIAj37DecNaHyXAn6_C0g6MuDmAYKFyzyNFNgQUGIY4sN4WM9q_TMrtsSuKRJwOfXG_3vf7gbogs8jMKrHEEsqh3a05BgjpVODVt03cEpZzuy-ibZ0GPUoO5rZhp0Za1miXDwp34o1ox8IH3jQjg4XowXefSHH-IcCiEWTLmdVZOpZ5WcTZuXpkH3rvfduBzHzMHupft8itrqRUjT-jifgjBkYMNbJRFqaJAdrjCDcLHVDTisCxy65NbrLdQ2OYc6qVkkJhUr67KEEUBJmz80LKGTg=w768-h193-no?authuser=4'
            },
            {
                type: "나는야 깐깐쟁이",
                desc: `나는야 깐깐쟁이\n
                ✓   남들이 보는 당신은 조금 집요하고 고집 센 깐깐쟁이로 보입니다.\n
                ✓   상당히 신중하고 조심스러운 사람이라 조금 느릴 수 있지만 꾸준하게 성실하고 전진하는 사람.\n
                ✓   그래서 당신의 충동적인 행동은 주변 친구들에게 충격으로 다가온다고요!\n
                ✓   무슨 일이든 꼼꼼하게 계획하며 결정하는 것을 선호하는 당신!\n
                ✓   No!라고 당당하게 말하기 때문에 대부분 퇴짜 놓는 사람이 되어버리는…
                `,
                query: "RksRkswoddl",
                score_range:range(21, 31),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3dAGruKC9wrveKxTluBP7LskPyDgj_vc8gECKsoRvJxgy-rtDUwGW-NuMYPgmhObpqaAKDDyDp78SPqtUDGmkn3vkjdgQw6fNhCBycmp0-yuH0wey1H8s_kNHRlEnaobTWhODbct7wyCx_7t-rUEcI=w768-h193-no?authuser=4'
            },
            {
                type: "나는야 겸손쟁이",
                desc: `나는야 겸손쟁이\n
                ✓   남들이 보는 당신은 현명하고 신중한 겸손쟁이입니다.\n
                ✓   당신은 똑똑하고 재능과 능력이 있지만 겸손한 자세로 주변에서 인정받는 사람이네요.\n
                ✓   그러한 당신은 사람을 사귈 때 다급하게 결정하지 않고 가볍게 접근하지 않으며,\n
                ✓   나의 사람들에겐 매우 잘해주고 자신도 그만큼의 대우를 받기 원합니다!\n
                ✓   신뢰는 인간관계에서 가장 중요한 것!\n
                ✓   그 신뢰가 무너지면 극복이 힘들어요…
                `,
                query: "ruathswoddl",
                score_range:range(31, 41),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3dNacjenpNzcYet7tAkC_zG2e7ig2oB6q4L3tHmXbc6JhKPX60OwtD6ujWDSEmQSkv3QaNcqNFu_ETBgeg2V9BYZawklj_UPlmPHXLnIbNelov8LtSzC0hXttfE-aohc-aLcv7XPwJPdF8e_dvINsg=w768-h193-no?authuser=4'
            },
            {
                type: "나는야 매력쟁이",
                desc: `나는야 매력쟁이\n
                ✓   남들이 보는 당신은 매우 발랄하고, 매력적이며, 재밌고 현실적인 사람이라고 생각해요.\n
                ✓   어디서든 주목을 사로잡는 사람이라고 생각하고 적당한 눈치도 가지고 있어,\n
                ✓   교만해지지 않고 주위를 잘 살핀다고 느껴요.\n
                ✓   다정한 부분도 있고 친절하며 이해심이 많아 다른 사람을 잘 도와줍니다!\n
                ✓   그런 당신은 늘 분위기 메이커!
                `,
                query: "aofurwoddl",
                score_range:range(41, 51),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3fVGKcdB_UBWpFEg5HE41kRENSt_cppG2Yl3msWzIXYFWDzB4hYvho-jWFER3balVwbqZx_qdjwPw6mNp0kYEUKV-Io7io9Oigw3Oer5zCRFMQUH76jOHZOCT7obvia7lKWjcW8lI0Z-g5hStPXhTc=w768-h193-no?authuser=4'
            },
            {
                type: "나는야 행동쟁이",
                desc: `나는야 행동쟁이\n
                ✓   남들이 보는 당신은 잘 흥분하고, 변덕스러우며 충동적인 사람이라고 생각해요.\n
                ✓   그래서 리더형으로 빠른 결정을 내릴 수 있고 과감하고 모험성이 있는 타입~\n
                ✓   호기심이 매우 있는 편이라 모든 해보려고 하는 당신!\n
                ✓   그런 당신의 친구들은 당신이 발하는 강렬하고 진취적인 모습에 강력하게 끌립니다!
                `,
                query: "godehdwoddl",
                score_range:range(51, 61),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3cuemgcugLmcvXIdDAvkYnH3VSBM1AtTYuoUR7vD079wRghFtxPITeOyUCq7KscAsYkH4jcl3CTIeGpfXR0IcgCidFVSm7WJk_ejbgijvWGRIxtK5WviEX3zRu1VooT-hKvwFOkaKggvQKUA-bpDms=w768-h193-no?authuser=4'
            },
            {
                type: "나는야 지배쟁이",
                desc: `태양처럼 주위를 밝게 비추는 타입\n
                ✓   남들이 보는 당신은 약간의 허영심이 있고,\n
                ✓   남을 지배하고 싶은 욕구가 강해 보입니다.\n
                ✓   남이 해주는 칭찬을 좋아하고 칭찬에 약하지만,\n
                ✓   남에게 칭찬을 잘 못해주는 양면적인 성격!\n
                ✓   그런 당신의 당당한 성격을 부러워하고 우러러보는,\n
                ✓   사람들이 있지만 정작 그렇게 될까 두려워할 수도 있어요!
                `,
                query: "wlqowoddl",
                score_range:range(61, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3di84hRLdB4DNWjF9gxhi7eGy2sdSgheY9MX8U484FF5JqeTtPaOWNjFKzZeZpn70zfcU8wP1FFTlmVBnlUuTSJsq7suo_SQ_BA5Ta0qrTzG2hI4MUs0h-_XaY_COQVl3X_V1OJFww6ijc3od9sdTg=w768-h193-no?authuser=4'
            },
        ]
    },
    // latte
    {
        info : {
            mainTitle:"라떼 테스트",
            subTitle:"과연 나는 라떼일까?",
            mainUrl:"latte",
            scoreType:"numberScoring",
            mainImage:"https://lh3.googleusercontent.com/pw/ACtC-3fiNa0jjnQ8bdFWWw_AwXEECn-sr9I_Ax3OAVmBU0ecQg6dRjfHP064U9DyTE2WA0gMkKv1wl_fcJamkOCV3stEkgGukVvXnhZCF8sgnL1r2dma3_7fbF33CxUVwuhcNQjO959f__0XxYqxeHR_Nrk=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/pw/ACtC-3df-3z3426qtEbDLyjS2p2BT_Q_s_0f5zk4b8AT6IHU2myGu1J2-4I3MWsn_SF4wEy2oEdBfkJKg_EhzfiD76L6wtQ-pin6PCq1v-maPSnkGTn3bSGiWC8cewg1k6QAUjDulw3xS9hKCsH3cK9R8R0=w768-h620-no?authuser=4"
        },
        questions:[
            {
                question: '누군가 내 의견에 반대하면?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 1,
                        content: '그럴 수도 있지! '
                    },
                    {
                        type: "치와와",
                        score: 2,
                        content: '가슴속에서 분노가…'
                    },
                ],
            },
            {
                question: "처음 만나는 사람을 보면?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 1,
                        content: "나이부터 확인한다."
                    },
                    {
                        type: "웰시코기",
                        score: 2,
                        content: "상대방이 먼저 나이를 물어본다."
                    },
                ]
            },
            {
                question: "여러 사람들과 밥을 먹을 때",
                answers:[
                    {
                        type: "치와와",
                        score: 1,
                        content: "가위/바위/보나 분할해 계좌 이체하기"
                    },
                    {
                        type: "웰시코기",
                        score: 2,
                        content: "연장자가 계산한다"
                    },
                ]
            },
            {
                question: "회식 때 나의 모습은?",
                answers:[
                    {
                        type: "비글",
                        score: 1,
                        content: "마지막까지 남아 있어야지!"
                    },
                    {
                        type: "리트리버",
                        score: 2,
                        content: "눈치껏 집에 가서 쉬어야지!"
                    },
                ]
            },
            {
                question: "고기 먹을 때",
                answers:[
                    {
                        type: "리트리버",
                        score: 1,
                        content: '제일 어린 사람이 굽지 않고 먹기만 하면 화가나!'
                    },
                    {
                        type: "웰시코기",
                        score: 2,
                        content: "그냥 누가 구워도 상관 노노!"
                    },
                ]
            },
            {
                question: "회사에서 보너스를 받았다.",
                answers:[
                    {
                        type: "포메라니안",
                        score: 1,
                        content: "나를 위해 써야지~사고 싶은 거 구입하기!"
                    },
                    {
                        type: "비글",
                        score: 2,
                        content: "미래를 위해 저축해두자! 통장에 입금하기!"
                    },
                ]
            },
            {
                question: "퇴근할 때 나는?",
                answers:[
                    {
                        type: "비글",
                        score: 1,
                        content: "바로 퇴근한다."
                    },
                    {
                        type: "웰시코기",
                        score: 2,
                        content: "주변 눈치를 보며 퇴근 타이밍을 본다."
                    },
                ]
            },
            {
                question: "식당에 가면?",
                answers:[
                    {
                        type: "치와와",
                        score: 1,
                        content: "수저, 젓가락을 먼저 세팅한다."
                    },
                    {
                        type: "리트리버",
                        score: 2,
                        content: "누군가 늘 미리 먼저 세팅해 놓는다."
                    },
                ]
            },
        ],
        results:[
            {
                type: "따뜻한 우유",
                desc: ``,
                query: "milk",
                score_range:range(11),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3ct1jA5ulDNkrvtSpLk6DSd3lVetjv7IFe4Vd2pVxk6xIEP8LmOsBI5KgkjUDGaFRtSJB5_KtNQ2SiKAIXzTcsEYvjxFdg1gYXeK3aNlpzq3zpFcdbmiPmt8ey3E1jvpa4PCNUbein4D9xkAbeFPXQ=w768-h946-no?authuser=4'
            },
            {
                type: "밀크 커피",
                desc: ``,
                query: "milkCoffee",
                score_range:range(11, 14),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3eRmD8NeSTbyHnY6qxhWmixt0qv5nyIYVb4ZcOfxqAvwIDZS3Q_c3RF1BZgJKf_hS6PhGnyqycJbFX3Qa9HcI6pz55rZVv9iN5SeSLN5UKAJKEk93vfvnhIxkIfVhNlLqNH5uvjQ_te47ocNHIgEno=w768-h946-no?authuser=4'
            },
            {
                type: "라떼",
                desc: ``,
                query: "latte",
                score_range:range(14, 20),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3dMrGAoY1EyAvCGSTDRLpJigUaTMAwUdRBqQLH-3xqCRumf_D-KVyKBhbVKiDjknjDRnUvKNfp5cEcY-oB4WD40Ip2Tq-vwLpVjCtAIhCEb9dgjl4lSFacIutqqn6LJz7JI5dsSoqr-cI7laY7PqfI=w768-h946-no?authuser=4'
            },
        ]
    },
    // whosFault
    {
        info : {
            mainTitle:"누구의 잘못일까?",
            subTitle:"도대체 누구의 잘못일까?",
            mainUrl:"whosFault",
            scoreType:"storyTelling",
            mainImage:"https://lh3.googleusercontent.com/pw/ACtC-3egLgzkcDus41oZ2c03_rR-W80mA57e_IOqzab3WIJcv7qUIb9qLMTC-p-Z2yl_7VOYPMJDGpwuWpUhlk8B-485NX1uanNRL0VaHFhowJGK11cCT3IOFsyDMIsEBBIhhTP1GHUYtkRjh6A0EYRGtYs=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/pw/ACtC-3dflu75Lpqwlp1aj8VoiAsGjmwn2l0exmAcgUskYhyFclAHGW0C6bELi3lGucuYo0QA-aJvx0yzJ2gZ2YXeXfoCSmCl-Qk67WL-LVd42CEtUlFnnxg_mVnLfBuct2pO0mBuILWiReqj-TgbdpNh_Eo=w768-h620-no?authuser=4"
        },
        questions:[
            {
                question: 'whosFault-0',
                answers:[
                    {
                        type: "whosFault-0",
                        score: 0,
                        content: 'https://lh3.googleusercontent.com/pw/ACtC-3dD5369syTGV7Ucqi7CnOFlTMCtPqEZ1w7m8mm6wydAVW5fa7Wj_w3SM6dRPiHEcCXo5NN_WvEpkdfu4f3zZ98gR3q3l002s-GOthmAUXaWtDsARjaHbteU3mlfhiHNNVnI2zOm1DIAFAA0goJn-AI=w1188-h1000-no?authuser=4'
                    }
                ]
            },
            {
                question: "whosFault-1",
                answers:[
                    {
                        type: "whosFault-1",
                        score: 0,
                        content: "https://lh3.googleusercontent.com/pw/ACtC-3cO6pqL8zis7usb-PSe70rKcfGb1-YjWR-iLCuGo-UigfYCcn411xbkQttqz8_RYUnM3pn8wWqKx4KQAYx-J1JsjRERVwXcmmkG6PA2ikkISnk1I_32WPosLBULTV56hRYVKlr4Z1m5Aw4s1GGDgtE=w1188-h1000-no?authuser=4"
                    }
                ]
            },
            {
                question: "whosFault-2",
                answers:[
                    {
                        type: "whosFault-2",
                        score: 0,
                        content: "https://lh3.googleusercontent.com/pw/ACtC-3eRkfPt8xGwKpqFzb5dqdv08mOSg9nZOoxRRAov3pVFgad5I7RIXlfuB9tK9wWpv1x8lw6uAY1tNqdhEkHC6MjlR4Est1a3BR7xB5m72rtIPr_brQB0osTZjJPleFt8WLrffSetuUCtkN21iaboUZw=w1188-h1000-no?authuser=4"
                    }
                ]
            },
            {
                question: "whosFault-3",
                answers:[
                    {
                        type: "whosFault-3",
                        score: 0,
                        content: "https://lh3.googleusercontent.com/pw/ACtC-3foK9ciPjLGVO8W-HfIlGHCX4Kh6xYxmx6MhO2oPDGDlpPzJ-QjbJl-nKskrKHdTXhu58ItVjGbzmQJNnO4Gbhxi5gEdbdwfxRX5Mf2nr1Uq2k8fhngyhbZ2p031AXN7a3Ga87jbW8zu8TNNefEl50=w1188-h1000-no?authuser=4"
                    }
                ]
            },
            {
                question: "whosFault-4",
                answers:[
                    {
                        type: "whosFault-4",
                        score: 0,
                        content: 'https://lh3.googleusercontent.com/pw/ACtC-3ccZp72kVx0AJacH64FUY9cOjPyYqlhT2wJ26z-nlMuMwaunRuO7-8RW90OCdSFXYN1hv9hJBaMqdGCVWN5gMSnps7j719zeqtugWX1OSeKs2xtwdM-MupVE6Upr_q-NBVDNjnPEesb3JNLDZbVwLg=w1188-h1000-no?authuser=4'
                    }
                ]
            },
            {
                question: "whosFault-5",
                answers:[
                    {
                        type: "whosFault-5",
                        score: 0,
                        content: "https://lh3.googleusercontent.com/pw/ACtC-3dGWjWTfR7kSMHN3tJNIVMG-oA3mPKob103FBGg8G_5POY46TVzofUjcpVNMpGu5AFCW4sStguSWT-DSpI1Bv9162R6r4BK7ovRF0cwX8L0bwmlblhcP4YNJYgXYQgbwRKyZpcKx_UYkwd3eSCp6ts=w1188-h1000-no?authuser=4"
                    }
                ]
            },
            {
                question: "whosFault-6",
                answers:[
                    {
                        type: "whosFault-6",
                        score: 0,
                        content: "https://lh3.googleusercontent.com/pw/ACtC-3dLFovTEtYG_PQiKjYAy2BXK6Fuqbw0oQIz1e9ehtWrvQhV6idXHcNqhLvBxHNMURUjpE8W4AqBaq-NihOhsUvJT5jD18aR7yA4VKwiWPD6gefGL8nwh342REEa7n_W35tRrW7UEbwsXjD9Y6bjVDo=w1188-h1000-no?authuser=4"
                    }
                ]
            },
            {
                question: "whosFault-7",
                answers:[
                    {
                        type: "whosFault-7",
                        score: 0,
                        content: "https://lh3.googleusercontent.com/pw/ACtC-3f2CeKMg3EJrGvlfJ27dol0czOt7O86xOP29BFdXO5Q0NZKDZboNpnhWueaKfUhT6jNTeOKYQaZczwoNz-A09xF2Q-4Cyz_UI1OeXux6poJOdFgqWyHwaYsOpjNIZZ2XalvXLxxAsa8ShsbukYbpg0=w1188-h1000-no?authuser=4"
                    }
                ]
            },
        ],
        results:[
            {
                type: "whosFault-result",
                desc: `whosFault-result`,
                query: "snrndmlwkfaht",
                score_range:range(2),
                img_src:'https://lh3.googleusercontent.com/FXHZ8XRaWCySIgkgQu7ncxDfjUQti_3YkckBObuyRd2DbqfYJCRQOvtjx8vl29MNHWJc5ZgbONmqnqXvqEdyDdgXH-7ewY41qfGE3VAAq7RKymValm_vj7vcDAG1lkvKdHv3nwnmWuprMyw-uDkIYxxINccu6ELVEpv_sMPUkgYFZ7tojtwm9WmwRHZUyqGqlrY5WEbEwmtZ9ZF7iBpUdb24AkG_JaKuuUDmCHdHzP_o4rqyG8i-TbcyN0UUt6l_D3MD3mFXpjzA-oVmHk9luFbrMPKa_L0HI8peYLn7q5SG0_iJ-qLBpO3hb7kfGHoGVNWmODZI8Ep-zsss44A9hgUOxYsHa6emCGWJJluBP8rT_p-JHZJFU_4xvPzDZEajwxXK89BJZ-TrNsSN1fkapSLvn6-HZCYQ7zMEulUqttRZLxiL6j7hDiywmLtal-0pGJWwemnoxKf9hB8zBBDXUFuuWLAA_CfhBkyizb2lpm_h71F3frKVdKlYOrK05hHo7qoFRS4tiTYhy3FvRj_13puPsCFyMQ7SeT64pYYFRtWqE4JlNhOab1Fi1f3SZJVVO58v609TWuHhOBW95Ic8lqh_wLF4YvxJTcGnWio5_l3yICCxl00TvKBxDsodD1dJdcO4TcWEkF1TXzfCnbrpWLjlxi0OYvxphprZXUepp9q-OQsBlZtZpA=w1188-h1000-no?authuser=4'
            }
        ]
    },
    // birthNum
    {
        info : {
            mainTitle:"탄생수 테스트",
            subTitle:"탄생숫자로 알아보는 숨겨진 나의 성격",
            mainUrl:"birthNum",
            scoreType:"birthdayCalc",
            mainImage:"https://lh3.googleusercontent.com/pw/ACtC-3eXMfdKH2Pe-J6oQH0mF77fRnkzl4oKmBWAp-OmKUSBDsi8CYbg64rQcJ4-znLh8y17rSwiFiKCXLL8xcqlgggLGZZcSMa8gan0t4_qc8eHYqMHLckKcHGn6K3tncPLHtlgDJFtvRSrSXuApywDHCw=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/pw/ACtC-3coCY2HGiTskA1ECcJ-EV7tfn1ZTPXwKiHrXB7omv5pDeWq4qDTtJ7ZLjoTTOf1sEtUX0seAL0xSoeSe4x591mspXYiJ-eGghtd2vGP5YseLmIKUGf_V9RaogBRswApUchi3QKk9NLdMnYO_DDR5TI=w768-h620-no?authuser=4"
        },
        questions:[
            {
                question: '데이트 전 날 나의 모습은?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '나가기 직전 마음에 드는 옷을 입는다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '자기 전 머릿속으로 나의 스타일링을 생각하고 잔다.'
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '전 날 머리부터 발끝까지 스타일링과 옷을 미리 준비한다.'
                    },
                ],
            },
            {
                question: "갑자기 자취방에 놀러 온다는 애인!\n그때의 나는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "아아... 왜 갑자기 오는 거야?! 보이는 곳만 치워 둔다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "모아둔 쓰레기를 버리고 바로 청소를 시작한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 미리미리 해 두었기 때문에 바로 주소를 보낸다."
                    },
                ]
            },
            {
                question: "좋아하는 이성이 생겼을 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "상대의 SNS을 탐방하며, 미래의 우리 모습을 상상해본다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "좋아하는 이성의 친구에게 도움을 요청한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "먼저 연락할 거리를 만들며 적극적으로 대시한다."
                    },
                ]
            },
            {
                question: "카페 안에 이상형인 사람과 계속 눈이 마주친다.\n 눈웃음까지 보내는데...?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "지금 말하면 좋은 말이 안 나올 것 같아. 좀 이따 연락할게."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "아!!!!!!!짜증나!!!!!진짜!!!!!! 도대체 왜 그러는 거야?!?!"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "이런 점에서 나는 화가 난 거야. 그런 부분은 고쳐줬으면 좋겠어."
                    },
                ]
            },
            {
                question: "쉬고 있는데 갑자기 걸려온 남사친/여사친의 전화, \n친구들이 같이 놀고 싶다며 나올 수 있냐고 물어보는데...?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: '귀찮은데… 아쉽긴 하지만 “시간이 너무 늦었어… 나 집에서 쉴래!”'
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "일단 끊고 수십 번 고민 끝에 나가기로 한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '오케이~ 인연 한 번 만들어보자~ “갈게~~~~”'
                    },
                ]
            },
            {
                question: "다가온 기념일! 나는 어떤 선물을 준비할까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "정성 어린 편지와 기억에 남을 만한 선물을 준비한다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "커플로 착용할 수 있는 아이템을 선물한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 사고 싶다거나 필요한 물건을 기억해 두었다가 서프라이즈로 선물한다."
                    },
                ]
            },
            {
                question: "내가 하고 싶은 연애 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "다이나믹한 화려한 연애 (단, 너무 화려해서 바람 피울 가능성 50%)"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "나만 바라보는 연애 (단, 너무 좋아해서 집착 대마왕)"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구같이 편안한 연애 (단, 가끔 친구인지 애인인지 헷갈림)"
                    },
                ]
            },
            {
                question: "애인과 대화할 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 5,
                        content: "장난치고 티키타카가 잘 되는 대화가 좋다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "서로의 생각을 공유하는 대화가 너무 좋다."
                    },
                ]
            },
            {
                question: "친구가 나에게 고민상당을 한다. 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "고민에 대한 구체적인 해결책을 제시한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "고민에 대해 빠져들어 감정적으로 같이 공감해준다."
                    },
                ]
            },
            {
                question: "기다려왔던 짝사랑하던 그/그녀와의 데이트 날..\n갑자기 급한 일이 생겼다며 다음에 만나자고 한다.\n과연 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "어쩔 수 없지… 알겠어 다음에 보자!"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "알겠어…근데 심각한 일이야?"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "아 진짜? 그럼 날짜 다시 조정하자! 언제가 괜찮아?"
                    },
                ]
            },
        ],
        results:[
            {
                type: "탄생수 1",
                desc: `태양처럼 주위를 밝게 비추는 타입\n
                ✓   넘치는 열정과 자신감이 최대 장점, 상황이 어떻든 당당하게 자신의 의견을 말하는 용감한 사람\n
                ✓   강력하고 개인적이며 창조적인 인간.\n
                ✓   정의로운 성격이기에 목적을 위해 편법을 쓰거나 비굴하게 굴지 않는다.\n
                ✓   리더십/행동력/포용력 어느 하나 빠지는 것이 없이 리더감으로 최고\n
                ✓   지배적인 리더십…하지만 폭군일 가능성이 크다.\n
                ✓   무뚝뚝하고 개인적인 관계보다 사회적 활동에 많은 에너지를 쏟는다.
                `,
                query: "xkstodtn1",
                score_range:range(2),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3fcAfOEGkhfN3xMI0fM-rUbyIbfGHnslNCGqWnJA7oPx1tNdo1DY0ltw1Pvmetgm7-b-aJAr60SY7UzDRjwCm-wCPPjAVhwOEJ6uykv55Cz4w7lqqoBo_PLwB05FB-E714Io9dxoVe_lwfdQA8zmdI=w1000-h397-no?authuser=4'
            },
            {
                type: "탄생수 2",
                desc: `부드러운 여성스러운 타입\n
                ✓   친절함/섬세함을 장점으로 여러 사람들과 잘 어울린다.\n
                ✓   하지만 속으로는 강한 소유욕과 뚜렷한 호 불호를 지닌…\n
                ✓   행동보다는 생각을 많이 하는 타입 \n
                ✓   평화주의자, 본인의 원래 성격을 숨기는데 스트레스 받아서 집에서 폭발. \n
                ✓   예민 보스, 변덕스럽다. 감수성이 풍부, 모성/부성애가 강한 스타일\n
                ✓   풍부한 상상력, 너무 매력적인 스타일이지만 과하면 최악, 스스로 컨트롤해야 함.
                `,
                query: "xkstodtn2",
                score_range:range(2, 3),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3eodJXVo9M365VYQ-nrK696uZTuoOAsjdg3RSQHpfWOdPh-TiTPujNRH-UVT4cVaqTW-Wi34WejX_DLUTo0m1fCuwe5uvUgPltr4k4qSf3Mjqa-0fwEaiHG5TwJZGQ7jClwntbLC0OLffq0L8seeHA=w1000-h397-no?authuser=4'
            },
            {
                type: "탄생수 3",
                desc: `자유로운 영혼 스타일 \n
                ✓   구속받는 것을 싫어하는 낙천적이고 쾌활한 타입, 엔터 쪽 분야에서 많이 보임. \n
                ✓   다재다능해 어떤 일이든 보통 이상의 성공을 이룰 가능성이 큼.\n
                ✓   하지만 너무 자유분방해서 가끔 스스로 수습하기 힘든 상황인 데도 주변에 도와 달라는 말 잘 안 함.\n
                ✓   특출난 재능인들이 많음 \n
                ✓   자존심 강하고 독립적인 성향 그렇지만 매우 활발 \n
                ✓   교제를 좋아하고 친절하며 우정이 두터워 인기쟁이임!
                `,
                query: "xkstodtn3",
                score_range:range(3, 4),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3ctHYO9a-DMCAPAUh2-hsVgU0eqJmsjDNEiCCoCf5Vs9828pCmXkGvlVY-Fyi4cO7aOzYx1SgqYAzA5hUxTiUciej7A72mGNSfRCX4aG2XYrNIXyqwtNs7rgXCGE5v7uL5uNXSHJNnnb1lVgjqf8ak=w1000-h397-no?authuser=4'
            },
            {
                type: "탄생수 4",
                desc: `근면/성실 노력파 타입 \n
                ✓   겉보기에는 소극적인 것처럼 보이지만 내면은 열정과 냉철함 \n
                ✓   아니면 아닌 거지 라는 마음으로 내가 좋아하는 상대방에게 표현하는 사람들이에요. \n
                ✓   목표 있으면 끈질기고 신중하게 전진하는 타입 \n
                ✓   착실하고 성실하지만 집순이/집돌이 \n
                ✓   가까운 사람에겐 누구보다 잘해주고 다정하지만 낯가림 \n
                ✓   다른 사람보다 조금 느긋하고 느리지만 독립적으로 나아가 최종적으로 상장한 발전을 이루는 타입 \n
                ✓   참을성이 많고, 실용적인 성격
                `,
                query: "xkstodtn4",
                score_range:range(4, 5),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3fPlR3p6vpIr_sCnh5K8cNbfG5MWLDPsffQJWkkqQcwtulETqt41hgtt-yzzuZUsg2-1HmkqNS6-dvyc-ENjeMGyo1xktoEfeGW5zvMvR-hSTw7EWGuZ5rzs95fzSqlWDBfBRakH2Uy9SpxAx3AgZM=w1000-h397-no?authuser=4'
            },
            {
                type: "탄생수 5",
                desc: `날카로운 지성이 빛나는 타입 \n
                ✓   재치 있고 활기찬 성격으로 감각적이며 즐거움을 추구 \n
                ✓   그래서인지 단순하고 반복적인 일상은 못 견디는 타입 \n
                ✓   늘 신선한 거, 지적인 것을 채울 수 있도록 도전하지만 얼마 못가 질려 하는 스타일 \n
                ✓   미지의 영역을 손대는… 덕분에 업적이라도 남길 수도… \n
                ✓   특유의 친화력과 재치로 인싸 중 인싸 \n
                ✓   붙임성이 좋지만 반대로 마음은 비판적이고 분석적인 사고 지님 \n
                ✓   마음속 여러 가치관이 공존해서 때로 혼란과 분열의 원인이 된다. \n
                ✓   압도적인 개성, 아무도 생각하지 못한 아이디어와 대처능력의 소유자.
                `,
                query: "xkstodtn5",
                score_range:range(5, 6),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3cFd1mycvhFH0gDs41-Zxu18Je4Mv1XOZs2KHops9nWuuG_88R0kGvgMKY8r1_OiB7FlUUWOv1w6uFZQjamvX50rRMsad7g0su2vJ1oHH_QDUwM-mhKCX1ut5WQHPo4k0xC0uAK6EKPRy00xUHxMWg=w1000-h397-no?authuser=4'
            },
            {
                type: "탄생수 6",
                desc: `센스와 배려를 타고난 천사표 타입 \n
                ✓   봄처럼 온화한 성품으로 다른 이의 어려움도 자기 일처럼 나섬. 믿음직스럽고 신뢰 가는 타입 \n
                ✓   학교나 회사 동료들에게 인기1이 될 것 같은 사람 \n
                ✓   스스로 만든 룰 때문에 괴로워함. \n
                ✓   거절해야 할 필요성을 매우 느끼고 있지만 누군가 도와 달라고 하면 거절 못 하고 도와주고 있음. \n
                ✓   한번 화나면 주변에서 손댈 수 없을 정도로 몹시 거침. \n
                ✓   분노가 가장 오를 경우는 강렬한 나의 소유욕을 건드렸을 때 \n
                ✓   이성으로 사람으로서 너무 매력적이며 미적 센스와 언제나 자신감이 넘친다. \n
                ✓   책임감도 있어 인내 강해, 하지만 큰 변화를 싫어한다. \n
                ✓   하지만 고집 센 금사빠인 사랑의 사냥꾼
                `,
                query: "xkstodtn6",
                score_range:range(6, 7),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3cUxhR9IWk55uD6pZW_SpKjaB1_aiDtWJtBmLcLRu5XVlAc_mxuUkUKbTg7FPEgiNowB8GvI9csWS1QwLYvy1inhZ6mZOaoA29T-4RTAXfgdjR2NE4BZ9Y4vX53eY5Sb2IfMCYzotiNduoNSxTB9Xc=w1000-h397-no?authuser=4'
            },
            {
                type: "탄생수 7",
                desc: `외로운 천재 타입 \n
                ✓   정신적으로 색채가 강하고 신비한 느낌 \n
                ✓   매우 날카로운 통찰력과 비판력, 풍부한 독창성을 가지고 있지만 극단적일 경우는 괴짜 \n
                ✓   무슨 생각을 하는지 파악이 어려움. \n
                ✓   모순된 행동으로 인해 주변인을 당황시키고는 날 이해해 주는 사람 없다며 외로워함. \n
                ✓   천재적인 독창성, 발명, 영감이 마구 떠오름. \n
                ✓   너무 앞선 미래를 생각해 비로소 나중에야 빛을 바람. \n
                ✓   친구, 애인 누구에게나 평등하고 박애에 가까운 애정의 소유자 \n
                ✓   지위나 돈보다는 꿈보다 희망. 가치관을 이해해 주는 사람과 만나면 행복함. \n
                ✓   학문이나 연구적인 분야에서의 재능이 매우 뛰어남. 호기심 덩어리
                `,
                query: "xkstodtn7",
                score_range:range(7, 8),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3ffS0YOOYd8cHQE5nYjMhj5II6cab_QTdH7ewiY71Fue3qNVscUPHTmCQQiLtmH8Wash0MRZaZuaCBsXZF7W5MqQjt4U1tozWQ9riSK0umSbDRZgOeS-qza5Zq1a96eiNsZE_PKpKEEiogcMp-3L4k=w1000-h397-no?authuser=4'
            },
            {
                type: "탄생수 8",
                desc: `폼생폼사에 죽는 유아독존 타입 \n
                ✓   큰 의지력과 개성이 있는 삶에 위험이 없으면 짜릿한 스릴을 느낄 수 없다는 대담한 타입 \n
                ✓   무언가 꽂히면 자신의 판단이 옳다는 자신감으로 몰두하기 때문에 아랫사람으로부터 신뢰감 뿜뿜 \n
                ✓   타인을 지배하려는 타입과 급한 성격, 굽히는 걸 싫어하려는 성격, 우유부단/애매모호 극혐 \n
                ✓   냉혹한 면모가 있어 다른 사람이 오해할 수도… \n
                ✓   매우 적극적이다. 야망이 큰 편, 목표 달성을 위한 전진 \n
                ✓   성공에 대한 욕심이 있다 \n
                ✓   내 안은 자기중심적인 나와 남을 위한 내가 존재 
                `,
                query: "xkstodtn8",
                score_range:range(8, 9),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3eYtbHNREWZQik9GYLHfKRaOt9yqOLD5ijHcbymmZQ-QRpi8Fs29dKPgXbueiLMlk4Ek_a5E5wp1PFdK1M9Ov4hZtK4g_bC2Rv1q6jST0uWKj5oJVb50AQEuQkZ1WSHjrAhgrbpgTkelgCgVdRJVSI=w1000-h397-no?authuser=4'
            },
            {
                type: "탄생수 9",
                desc: `부끄러움이 많은 포커페이스 \n
                ✓   되고 싶은 성격에 따라 기분에 따라 표정을 연기하고 숨길 수 있음. \n
                ✓   자신을 드러내기 꺼려 하는 부끄럼쟁이지만 때로는 자신의 의견을 강력하게 말하는 .. 고집도… \n
                ✓   불의 보면 못 참아, 투쟁의 중심… 대체로 성공하는 케이스 \n
                ✓   사람을 도울 때 기쁨을 느끼고 자신을 희생하는 봉사정신 \n
                ✓   머리가 좋고 박식하며 이해력이 좋아 다양한 가능성을 숨기고 있는 사람 \n
                ✓   성격이 불같아 감정 변화 크지만 봉사정신이 투철하고 영웅적인 면모도! \n
                ✓   로맨티시스트, 이상을 꿈꾸는 걸 좋아하지만 계산적인 현실적인 면도 있는…
                `,
                query: "xkstodtn9",
                score_range:range(9, 10),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3cl63wSK0O8HPvh5OZG4urFgK2w2MqOCJ6A7gIzH9fcMSxXj5nS--3gzEUBgWGOjCQPkQTCEhCzyLlEKgz4J30HY0TtCmMhxYkXgCaN76spP8z36lBkHmDB0xlMfvcqSdj9VgU9qmcxiiI2W6rO3r4=w1000-h397-no?authuser=4'
            },
        ]
    },
    // loveLevel
    {
        info : {
            mainTitle:"연애고수 테스트",
            subTitle:"나의 연애 점수는?",
            mainUrl:"lovelevel",
            scoreType:"numberScoring",
            mainImage:"https://lh3.googleusercontent.com/pw/ACtC-3fciur24kn_7wsh1g1xG-zKlOe8Wbvu0YSYIeyVb_cYKEaOPMTo0OehMoqzWtv0lqW3rvmXX4qjpBC7nZ0UoaeSD1wFcufd5oOijlTFwcMhlgmg5VNUkxfrT7BLPpxPyPSMuatyouyOVCjs57e7U-o=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/pw/ACtC-3fKqDiZ56Mj_V78qpiR9dK1vORJU6NNYLABBdEoDGPZRYOe7Erv4b4-I8jxryjszI0ixOTbSrWIuINb85tZNE-puPrw-jP1aCu3lz8mh2NJP-g7ctoueQgG--U8JeVaTdOjl1jRCqpvLp-Q7Tbuz9g=w768-h620-no?authuser=4"
        },
        questions:[
            {
                question: '데이트 전 날 나의 모습은?',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '나가기 직전 마음에 드는 옷을 입는다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '자기 전 머릿속으로 나의 스타일링을 생각하고 잔다.'
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '전 날 머리부터 발끝까지 스타일링과 옷을 미리 준비한다.'
                    },
                ],
            },
            {
                question: "갑자기 자취방에 놀러 온다는 애인!\n그때의 나는?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "아아... 왜 갑자기 오는 거야?! 보이는 곳만 치워 둔다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "모아둔 쓰레기를 버리고 바로 청소를 시작한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 미리미리 해 두었기 때문에 바로 주소를 보낸다."
                    },
                ]
            },
            {
                question: "좋아하는 이성이 생겼을 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "상대의 SNS을 탐방하며, 미래의 우리 모습을 상상해본다."
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "좋아하는 이성의 친구에게 도움을 요청한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "먼저 연락할 거리를 만들며 적극적으로 대시한다."
                    },
                ]
            },
            {
                question: "카페 안에 이상형인 사람과 계속 눈이 마주친다.\n 눈웃음까지 보내는데...?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "지금 말하면 좋은 말이 안 나올 것 같아. 일단 모르는 척 침묵."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "나?! 진짜 나?! 하면서 흘깃흘깃 몰래보기"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "나도 눈웃음 보내다가, 바로 번호 물어보기!"
                    },
                ]
            },
            {
                question: "쉬고 있는데 갑자기 걸려온 남사친/여사친의 전화, \n친구들이 같이 놀고 싶다며 나올 수 있냐고 물어보는데...?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: '귀찮은데… 아쉽긴 하지만 “시간이 너무 늦었어… 나 집에서 쉴래!”'
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "일단 끊고 수십 번 고민 끝에 나가기로 한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '오케이~ 인연 한 번 만들어보자~ “갈게~~~~”'
                    },
                ]
            },
            {
                question: "다가온 기념일! 나는 어떤 선물을 준비할까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "정성 어린 편지와 기억에 남을 만한 선물을 준비한다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "커플로 착용할 수 있는 아이템을 선물한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "평소 사고 싶다거나 필요한 물건을 기억해 두었다가 서프라이즈로 선물한다."
                    },
                ]
            },
            {
                question: "내가 하고 싶은 연애 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "다이나믹한 화려한 연애 (단, 너무 화려해서 바람 피울 가능성 50%)"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "나만 바라보는 연애 (단, 너무 좋아해서 집착 대마왕)"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구같이 편안한 연애 (단, 가끔 친구인지 애인인지 헷갈림)"
                    },
                ]
            },
            {
                question: "애인과 대화할 때 나는?",
                answers:[
                    {
                        type: "치와와",
                        score: 5,
                        content: "장난치고 티키타카가 잘 되는 대화가 좋다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "서로의 생각을 공유하는 대화가 너무 좋다."
                    },
                ]
            },
            {
                question: "친구가 나에게 고민상당을 한다. 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "고민에 대한 구체적인 해결책을 제시한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "고민에 대해 빠져들어 감정적으로 같이 공감해준다."
                    },
                ]
            },
            {
                question: "기다려왔던 짝사랑하던 그/그녀와의 데이트 날..\n갑자기 급한 일이 생겼다며 다음에 만나자고 한다.\n과연 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "어쩔 수 없지… 알겠어 다음에 보자!"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "알겠어…근데 심각한 일이야?"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "아 진짜? 그럼 날짜 다시 조정하자! 언제가 괜찮아?"
                    },
                ]
            },
        ],
        results:[
            {
                type: "프로망상러",
                desc: `연애는 어케하세요...? \n
                ✓   연애 시작도 전에 상상만으로 연애부터 이별까지 다하는 프로망상러들!\n
                ✓   감정 표현이 서툴러서 늘 고민하고 짝사랑만 하다가 끝나는 경우가 많아요.\n
                ✓   애정표현도 스킨십도 너무 북흐북흐! \n
                ✓   다가오는 사람이 있어도 나도 모르게 철벽을 치는! \n
                ✓   본인은 표현한다고 하지만… \n
                ✓   그런 식이면 상대방은 절대 알지 못해요. \n
                ✓   싫은 건 싫다! 좋은 건 좋다! \n
                ✓   의사 표현을 잘 해야 합니다.  \n
                ✓   안 그럼 나만 힘들어~ 계속 의심만 하지 말고 이제 마음을 열고 연애해봐요~ \n
                ✓   안나 언니가 말하잖아요! 사랑은 열린 문이라고 !! \n
                `,
                query: "vmfhakdtkdfj",
                score_range:range(31),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3ecoYjNt5TQw1QWVusJgHv1jnEf4Mq1dGwgvhj28BbuGRCnrikszoYqlrl4aURySfije0AE-zlqUn_mnwqLfTjAVSpFpiKwCblO_2Lf5kr3snT_wIEzcWytGXSCv7xSbi5U2scFhHiS2EsBC2wnYFE=w690-h603-no?authuser=4'
            },
            {
                type: "연애꾸러기",
                desc: `이제 밀당은 가능해요 \n
                ✓   나 나름 연애 잘하는데?라고 생각하는 연애 꾸러기들!\n
                ✓   하지만 현실은 아기에 불과하죠.\n
                ✓   표현을 잘하긴 하지만 가끔은 너무 감정적이어서 상대방이 지칠 수 있어요. \n
                ✓   이제 연애하기 시작하는데 이 사람을 놓치기 싫은 마음에 많은 사랑을 요구하죠. \n
                ✓   그런 부분이 상대방을 지치게 할 수 있어요! \n
                ✓   너무 상대방만 바라보지 말고 나 자신도 돌봐주세요! \n
                ✓   내가 아니라고 하는 사람에게 굳이 노력할 필요 없잖아요! \n
                ✓   가끔은 나 자신도 소중하게 생각해 봐요~  \n
                ✓   세상은 넓고 내 사람은 분명 찾을 수 있으니까요! 걱정하지 마세요!
                `,
                query: "dusdoRNfjrl",
                score_range:range(31, 66),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3eA0Pp5gwAw2fcr-WdsnzX6l5lJPv2R8mcUIi7UBy3DW9DfPOvK-wY3ttO_apuI0-ess0rkgtmtYGEGxsZKejuD6YkQceDZRRW3TGiGK3ma1Lo_1Tq_QF0Vg1jwXDe36o387ythYMgv8BelneQl0Xc=w690-h603-no?authuser=4'
            },
            {
                type: "아수라백작",
                desc: `눈치 만렙 보스?! 오늘은 어떤모습을? \n
                ✓   연애는 연애! 나는 나! \n
                ✓   애정표현이나 스킨십에도 적극적인 친구들! \n
                ✓   때로는 수줍게 때로는 직진러로 상황에 맞게 아수라 백작 같은!! \n
                ✓   서로의 생활은 소중하게~ 연애할 땐 연애에 충실하게! \n
                ✓   컨트롤이 가능한 나! 사이보그 아닌가요? \n
                ✓   좋아하는 사람이 다가오면 포커페이스 유지 가능한 나란 사람~ \n
                ✓   관심 없는 척하지만 뒤에선 아주아주 사람을 잘 유혹하는 엄청난 능력이 있는 사람들이랍니다! \n
                ✓   과거에 속앓이 하던 나에서 안녕~~~~ \n
                ✓   다 나를 위함이다~ 상처는 덜 받자! \n
                ✓   표현은 잘하자~ 연애 학습형 결과랍니다!
                `,
                query: "dusdoRnfjrl",
                score_range:range(66, 86),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3c6sl6J6d5uXgd4LHemWRTCj-O1INnuu6QV7pARr9E-up8bJXOm8TXoiRmqtNjf0V9W7-LQsTq6IAhC5ULaZUrD6yulK5f8S2_Ce_fTjg_YfqRTJSkBCjHPMTprT7Qzdnd5ScZrJvo0iXI1GZyVH1M=w690-h603-no?authuser=4'
            },
            {
                type: "프로직진러",
                desc: `연애하고 싶으면 표현해 \n
                ✓   쿨내 풀풀 나는 프로직진러들은 표현하는 것에 대해 혹은 거절에 대해 두려워하지 않아요! \n
                ✓   아니면 아닌 거지 라는 마음으로 내가 좋아하는 상대방에게 표현하는 사람들이에요. \n
                ✓   왜냐면 말하지 않으면 알 수가 없으니까요. \n
                ✓   주변에 친구들도 많은 인싸력! 이상형을 만나면 어떻게든 성공시키는! \n
                ✓   열 번 찍어 안 넘어가는 나무 없잖아요! \n
                ✓   상대방의 눈치를 잘 보지 않고 표현하는 직진러! \n
                ✓   하지만 너무 나에게 집착하는 건 싫어요! \n
                ✓   외로운 것도 싫어서 늘 연애를 하고 있는 사람들! \n
                ✓   사람은 사람으로 잊는 거죠! 
                `,
                query: "vmfhwlrwlsfj",
                score_range:range(86, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3ftTEL3xZmElQbQNNtVm472Pv1rzgaHmESKG2ydvdBq9Zox_Uaj5U4od21bb--lZiGYocUL-8PKV4_efyyRM_oDmEDRdreO1Dhk8NjXY-p7fv0aDpszVXLf96Etuph7m3dXyIDhopZKzCOKEwi8pD4=w690-h603-no?authuser=4'
            },
        ]
    },
    // humanWall
    {
        info : {
            mainTitle:"철벽남녀 테스트",
            subTitle:"이성이 다가올 때 나의 반응은?",
            mainUrl:"humanwall",
            scoreType:"typeCounting",
            mainImage:"https://lh3.googleusercontent.com/pw/ACtC-3eqfRZZkCZcNK55XU4dt2xjLsJWPKXWK2pf3czkAXPej6nTjWcsGZBPheKcF0jsY0oAY14AT7nJKfrIaCNTo6T1dBK3e_C7n8yv6WSak5nLgnDVD5chMVYZgeVAWpjjN0uGQh6AWSHs7M5mdgzLkgI=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/pw/ACtC-3fTuFma9GF62NTMSP2of81uUR5IcrSfrlHFmrL3fxEM-4SJvyk3hI7GLQ8xxalpXYjF9uWqLExivzb81OF72awW8rHQNYOnz-c1H8gN9TfMsOnniTjvs3dOC-C9Sl0V_BjVoRAw8mFdX_gnwe1Ksv4=w768-h620-no?authuser=4"
        },
        questions:[
            {
                question: '남녀사이에 우정이란?',
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: '있을 수 없어. 같이 있으면 있을수록 감정은 생기기 마련!'
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: '친구는 친구지. 이성으로 생각한 적 1도 없다! '
                    },
                ],
            },
            {
                question: "마음에 드는 이성과 함께 있을 때 나는?",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: "표현하지 않지만 이미 머릿속으로 이 사람과 사귀게 됐을 때 모습을 상상한다."
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "적극적으로 리액션 하며 호감을 표현하려고 노력한다."
                    },
                ]
            },
            {
                question: "좋아하는 이성이 다가올 때 나는?",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: "너무 좋아했지만 막상 나에게 다가오면 피하게 된다."
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "서로의 마음이 어느 정도 확인했으니 적극적으로 표현한다."
                    },
                ]
            },
            {
                question: "헤어질 것이 뻔한 인연이라는 걸 알고 있을 때 나의 선택은?",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: "헤어질 인연이라면 시작하지도 않겠다."
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "헤어질 걸 알아도 시작은 해본다."
                    },
                ]
            },
            {
                question: "마음에 들지 않는 상대에게 계속 연락이 온다.",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: '연락을 그만 했으면 좋겠다는 의사를 확실하게 표현한다.'
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "드문드문 답장하거나 안읽씹한다."
                    },
                ]
            },
            {
                question: "생전 처음 보는 사람과 과제를 같이 하게 되었다.",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: "상대방이 먼저 말 걸어줄 때까지 가만히 있는 편이다."
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "먼저 다가가 말을 걸며 인사하는 편이다."
                    },
                ]
            },
            {
                question: "소개팅을 제안하는 친구!",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: "소개팅…하고는 싶지만 어색함 너무 싫어 난 자만추 스타일!"
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "무조건 오케이~ 사람 인연이라는 것이 어디서 만날지 몰라~"
                    },
                ]
            },
            {
                question: "내가 더 선호하는 연애스타일은?",
                answers:[
                    {
                        type: "철벽인",
                        score: 5,
                        content: "친구 같은 편안한 연애"
                    },
                    {
                        type: "자동문",
                        score: 10,
                        content: "매 순간에 설렘이 가득한 연애 "
                    },
                ]
            },
            {
                question: "연애할 때 나는?",
                answers:[
                    {
                        type: "철벽인",
                        score: 5,
                        content: "사주나 타로 어플을 자주 이용한다."
                    },
                    {
                        type: "자동문",
                        score: 10,
                        content: "나는 내 스타일대로~ 내 맘대로 해야지!"
                    },
                ]
            },
            {
                question: "나는 연애의 대한 고민상담을",
                answers:[
                    {
                        type: "철벽인",
                        score: 2,
                        content: "들어주는 편이다."
                    },
                    {
                        type: "자동문",
                        score: 5,
                        content: "친구들에게 요청하는 편이다."
                    },
                ]
            },
        ],
        results:[
            {
                type: "철벽인",
                desc: `접근금지 확실한 철벽수비수 \n
                ✓   연애는 하고 싶지만 연애에 대한 환상이 크고,\n
                ✓   자존심이 높아 자신의 이상형에 미치지 못하는 사람들이 아예 접근하지 못하도록 방어하는 당신은 ‘철벽인’\n
                ✓   만리장성은 저리 가라 할 정도로 엄청난 철벽을 치고 있는 당신! \n
                ✓   남들의 연애 상담은 빠삭하지만 실전은 너무 약한... \n
                ✓   상대방을 너무 좋아하지만 정작 상대방이 적극적으로 다가오면 부담스러워서 피하고, \n
                ✓   상대방의 이상한 오점을 발견하면 바로 마음을 접어버려요. \n
                ✓   나는 눈이 낮다고 하지만 높은 거랍니다. \n
                ✓   이제 너무 철벽만 치지 마세요! \n
                ✓   그 벽 얼른 허무시고 행복하고 즐거운 연애해야죠!
                `,
                query: "cjfqurdls",
                score_range:range(31),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3d_oRRgK93tTZhp2bgWWWYxZm1VI4cBvGW7b8CCVOOSBddH55E7R4GV6nbtkNkgcfgWAFyjdLcu_Z473mZz0GJM0r1p8QdZ-zl92nbAUYaKYGxKjcxy9mdmRn7gBk7v2IIfLNNc5oTWNti8EvfZdeI=w1000-h547-no?authuser=4'
            },
            {
                type: "자동문",
                desc: `철벽이 뭐죠? 오픈마인드의 소유자 \n
                ✓   철벽이 뭐죠?\n
                ✓   연애 경험은 많을수록 좋은 거라고 했어요~ \n
                ✓   철벽이라는 단어 자체가 어울리지 않는 당신! \n
                ✓   들어오는 소개팅, 미팅은 다 받는데! \n
                ✓   인연이면 만나는 거고 아니면 친구로 만들어버리는~ \n
                ✓   살짝 금사빠 기질도? \n
                ✓   한번 사랑에 빠지면 간이고 쓸개고 다 줄 것처럼 직진하는 직진인!  \n
                ✓   하지만 포인트 하나 나가면 식는 것도 한순간인 당신! \n
                ✓   공백기가 짧은 타입이랍니다! \n
                ✓   세상은 넓고 인연은 많으니 이쁜 사랑 많이 하자~ \n
                ✓   많이 만나야 미래의 배우자를 잘 만나지! ><
                `,
                query: "wkehdans",
                score_range:range(31, 66),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3d5Un_MgrokzGWWjUcuIy6q-V8YWxUqKcIiOj3RmRtzZkBsx-6pkVnhCS6dQWBrroc8kI2-eE70sZciQ0AYvdJNTwKOqw2_6vO9RqADH18_WrzNzq30SgGf3ChiyZx-y3a__wKuA9BO8BPS1DKICFw=w1000-h547-no?authuser=4'
            },
        ]
    },
    // wind
    {
        info : {
            mainTitle:"바람끼 테스트",
            subTitle:"내 애인의 바람끼는 어느 정도일까.?",
            mainUrl:"wind",
            scoreType:"numberScoring",
            mainImage:"https://lh3.googleusercontent.com/pw/ACtC-3fXTH_qo-BZi0zWdugyTGl_fjBLcQ4e4uthJj6DFmAgHj6jfVShKmHQQ_tcqtAiyOu8hhvn_ECMi63vGDfqBMGlWYCWwuxP_EEVwsdTu6LDAEoPq5CpaUJ6pVCjfeckH0GnWVXRJE4EDxZImhYkgFI=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/pw/ACtC-3cmld-Ja2We4zNt5mCd-Z_0P5depSOYtCMUaf0z4KRImoz82pwrhyTbTWqPk_5kRFXfGp_taQuYgpdlUzRK8JD8c7DeUV2QMnypsstgJHqaYPpzBJDf2ekDn7Vg2HjhuDmsagvpYomvZv9Q-oyhD7o=w768-h620-no?authuser=4"
        },
        questions:[
            {
                question: '난 친구들의 기분 변화를 잘 캐치한다.',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '기분이 좋지 않을 땐 혼자 있다가 기분이 나아 질 때 힘차게 돌아온다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '음 때에 따라 다른 것 같아요.'
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '넹, 친구들이 기분이 나쁘거나 안 좋은 거 있음 먼저 눈치채는 편이죠.'
                    },
                ],
            },
            {
                question: "회사 내 사내연애 커플이 탄생했다. \n 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "엥??? 둘이요???? 그 둘이 사귄다고요???"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "아 진짜? 나는 그냥 친한 사이인 줄 알았는데. "
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "모두가 아는 그 비밀연애?! 알고 있었어! 티 나더라."
                    },
                ]
            },
            {
                question: "놀이공원에 간 당신! \n친구들이 제일 스릴넘치는 롤러코스터를 타자고 한다!",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "아 미안 난 여기서 기다리고 있을게 타고와..!"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "아 싫은데...그래도 타자니까 다같이 타야지ㅜ"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "그렇지~ 놀이공원 왔으면 타야지~"
                    },
                ]
            },
            {
                question: "카페 안에 이상형인 사람과 계속 눈이 마주친다.\n 눈웃음까지 보내는데...?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "부끄럽기 때문에 그냥 수줍게 눈을 피한다."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "그냥 똑같이 눈을 보며 웃어준다."
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "너무 떨리지만 용기를 내 먼저 가서 번호를 물어본다."
                    },
                ]
            },
            {
                question: "친구들과 있을 때 나의 포지션은??",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: "내가 중심! 말을 먼저 꺼내고 분위기를 으쌰 하게 만드는 분위기메이커~!"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "리액션을 많이 하고 잘 웃으며, 박수친다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: "웃긴 웃지만 대부분 조용조용한 편이다."
                    },
                ]
            },
            {
                question: "친구들과의 약속에 늦은 당신! \n준비도 하나도 못했는데..\n이 때 당신은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "꾸미는 건 사치, 일단 집에서 나간다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "먼저 사과하고, 최소한의 준비만 한 뒤 나간다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "카톡이나 전화로 먼저 가라고 말한 뒤, 모든 준비를 다 하고 나간다."
                    },
                ]
            },
            {
                question: "소개팅을 할 때 가장 많이 보는 것은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "음 나는 외모도 외모! 성격도 성격! 둘다 중요한 것같아! 평범한게 최고!"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "외모도 외모인데 나는 성격이 더 좋아야해! 잘생기고 이쁘면 인물값 한다잖아."
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "첫인상의 90%는 외모지! 외모가 호감이 가야 좋아지는거지!"
                    },
                ]
            },
            {
                question: "너무 좋아했던 짝사랑이 애인때문에 \n 힘들어 헤어진다는데 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "그래도 마지막으로 대화는 한번 더 해봐 라고 하며 위로해준다."
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "그래! 헤어져버려!!"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "너 마음가는대로 해..."
                    },
                ]
            },
            {
                question: "나의 이별 유형은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "그동안 못 만난 친구들을 만나고 나만의 시간을 갖는다."
                    },
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "새로운 사랑...? 난 이제 사랑 같은 거 못해..\n슬픔에 잠기는 스타일이다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "이별의 아픔은 새로운 사랑으로 치유하는 것, 소개를 받는다."
                    },
                ]
            },
            {
                question: "오늘부터 운동을 시작한 당신! 당신의 복장은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "운동하기 편안한 티셔츠와 신기 편한 운동화"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "유행을 따라간 스타일의 운동복과 포인트인 운동화"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "전문가의 느낌이 나는 트레이닝복"
                    },
                ]
            },
        ],
        results:[
            {
                type: "해바라기",
                desc: `밀당이 뭔데? '해바라기' 그것이 바로 나야 \n
                ✓   바람이 뭐야? 해바라기 스타일\n
                ✓   한 사람에게 빠지면 그 사람만 바라보는 당신은 해바라기 같은 사람! \n
                ✓   자기도 바쁘면서 남을 도우려고 먼저 양보하는 사람! \n
                ✓   이런 사람과 만나면 늘 사람 자체만으로 힐링 된다고 하는 사람들이 많아~ \n
                ✓   가끔 사랑을 주는 것만큼 되돌려 받지 못해 서운해하거나 속상해 하는 일이 많은 사람들이야. \n
                ✓   사랑을 바라는 것뿐인데 상대방이 떠나갈 때도 있지.  \n
                ✓   사랑을 더 주는건 손해가 아닌데도 손해를 보는 것같은 느낌이 들곤 하지.\n
                ✓   모두 나와 같은 사람들이면 좋을텐데! \n
                ✓   하지만 말하지 않으면 몰라! 더 표현해야해. \n
                ✓   싫은건 싫다 좋은 건 좋다고 말해보자~ \n
                ✓   같이 사랑하는 거니까! \n
                `,
                query: "goqkfkrl",
                score_range:range(51),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3e4Dt1pXDrsWNPjdmIgSqnKtUfm595y5JEdZI1WHy_sXq-SqFpKp0hXsHUeV36mI8h3qkOj9gJKLRRKDAZKDpUu0viUlUhr4pYwtzo1DHQkz-6m4rlO4e3mRc0VNMFZh7X0h61_GspnCft-UM1WNZ8=w1000-h340-no?authuser=4'
            },
            {
                type: "관심러",
                desc: `애인이 있을 땐 눈 안돌리는 스타일 \n 친화력은 100점 바람기는 50점! \n
                ✓   바람은 아니지만 주변에 관심이 많아요~ \n
                ✓   잘생긴 사람! 이쁜 사람 좋아하는 건 그냥 좋아하는 것 뿐이지 내 사랑은 너야! \n
                ✓   그들은 그들인거고! 이쁜걸 누가 안좋아해? \n
                ✓   절대 바람은 피지 않지만 속으로는 여러 관심이 많은 사람들이죠! \n
                ✓   누구나 다 그렇잖아요~ 그냥 평범한 사랑을 하는 사람들이에요! \n
                ✓   지금도 나쁘지 않죠! 잘생긴고 이쁜 건 늘 짜릿하니까\n
                ✓   내사람은 당신! 내사람을 만날 때는 최선을 다하는! \n
                ✓   다른 이성을 좋아하는건 이해가 가지 않아요!
                `,
                query: "rhkstlafj",
                score_range:range(51, 81),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3dy9YA-GC8jEcT9lKNuI3D7h9j9NFnRfAuokUhwDfTB7jaCpYy4d5l6f_VPF4S24kn6HPqkeQMSOb4ten-ai6SQz2XwVvquguHGxIrcUyNjz5v9PLoSeMm7ZEMCNNjJ2HA8WpM97UMhujeXH8SLxlk=w1000-h319-no?authuser=4'
            },
            {
                type: "매력쟁이",
                desc: `난 매력쟁이지~ \n 주변에서 날 가만히 놔두지 않아! \n
                ✓   사람을 좋아하고 놀기를 너무 좋아하는 사람들!\n
                ✓   에너지 자체가 넘치고 활기찬 사람들이야~\n
                ✓   스킨쉽도 너무 좋아하고 늘 먼저 시도하려고 하는 사람들이 많지? \n
                ✓   사람을 너무 좋아해서 그래! \n
                ✓   하지만 이런 사람들도 예민한 부분이 많다고 해. \n
                ✓   관계에 갈등이 있거나 상대방이 나에게 호감이 없다는 느낌이 오면 지나치게 감정적으로 행동하게 되어 갈등 해결을 포기하고 다른 사람을 만나기도 한데! \n
                ✓   상대방이 날 안 좋아하니 방어책을 만들어 놓기 위함이지~ \n
                ✓   외모도 출중하니까 모두에게 인기가 많아 이성접근이 쉽다는데~~~ \n
                ✓   하지만 모두 그러는 건 아니니 조심하자구~
                `,
                query: "aofurwoddl",
                score_range:range(81, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3cNCBz15XLINH-OC461mt_CxPYmDQ10IZh1HBGv0jGPBxz68TtekjkZReTYWBRnIk_BM8BjeijgGYkOzNzX5kg6XrKJW-AA4JTlYWiwofYW_xQyYlu9xUEZoaOcd_YzAZq34sHvOUBx15xa-wOO4Cc=w1000-h330-no?authuser=4'
            },
        ]
    },
    // daengdaeng
    {
        info : {
            mainTitle:"강아지로 보는 성격 테스트",
            subTitle:"내가 강아지 라면?",
            mainUrl:"daengdaeng",
            scoreType:"typeCounting",
            mainImage:"https://lh3.googleusercontent.com/pw/ACtC-3dpglKNqd2Bd5h0rkvjTLHvlJ5a_y99igdxbX0epCbI1tidE4GBIWXxzCCSi-EjcfoqOW9XEVhC951B5E9Z3UNiDN3wi5lkNO9YUdplDRb9Gf4VT3Jlr-HO4w7IHTkmNqYUHbfkugpsPXTLdb3YQxI=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/pw/ACtC-3dWL-fn_ujYXKqvGQgqz7HIf0mTawoCp5syAwqXZz8bYsSee3WANs99pvfvmllMJV3mLiSpyZs0svc51POKVCWzugv9_1OrSuIIBsEVEeJI4uOTPyA7ErODSK9IJFrFA8RG6T8lc19MjVq8H85YkLU=w768-h620-no?authuser=4"
        },
        questions:[
            {
                question: '기분이 좋지 않을 때 난',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '기분이 좋지 않을 땐 혼자 있다가 기분이 나아 질 때 힘차게 돌아온다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '기분이 좋지 않을 때 누군가 날 건들이면 그 사람에 대해 참고 있던 게 폭발한다. '
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '“아 몰랑! 그냥 신경 안쓸래에에에에!!!” 하고 털어낸다.'
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: '세상 살며 기분 안 좋을 일이 별로 없다.'
                    },
                ],
            },
            {
                question: "다음 중 나의 연애 스타일과 가장 비슷한 것은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "애인도! 친구도! 다 같이 놀면 얼마나 좋아!? 둘 다 내꺼! "
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "집착 싫어! 집착은NO! 알아서 잘할 게! 의심하지 말아줬으면 좋겠어!"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "질투는 잘 안 하는 편인데... 집착도 딱히…?"
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "난 질투쟁이인데? 질투를 하는 만큼 그 사람을 좋아한다는 거 아냐?\n ...넌 나만 바라봐."
                    },
                ]
            },
            {
                question: "첫 조별과제 날, 과연 나의 역할은?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "모두를 컨트롤 하는 리더십의 끝판 왕 조장"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "화려한 나의 발표실력을 보여주지, 발표자"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "꼼꼼함은 필수! 자료조사"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "미적 센스가 필요한 PPT"
                    },
                ]
            },
            {
                question: "드디어 동창회날, 과연 나는?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "여기저기 아는 사람과 반갑게 인사하며, 돌아다니면서 노는 인싸 스타일"
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "가만히 있어도 주변에 친구들이 먼저 다가오는 인기쟁이 스타일"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "처음에 낯을 가려 조금 어색해하지만 금세 친해져서 재밌게 분위기를 주도하는 반인싸스타일"
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "아는 친구들은 많지 않지만 친한 친구들과는 재밌게 노는 스타일"
                    },
                ]
            },
            {
                question: "드디어 기다렸던 주말! 나의 모습은?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: "집밖은 위험해~잠을 자거나 침대 위에서 크게 벗어나지 않는 휴식"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "집에서 쉬는 건 너무 시간이 안 가 친구들에게 만나자고 연락한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: "주말에는 무조건 나가야지! 평일에 미리 봐두었던 힙한 곳과 핫플인 곳을 찾아간다."
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "평일에 받은 스트레스를 맛난 음식을 먹으며, 미뤄왔던 영화나 드라마를 본다."
                    },
                ]
            },
            {
                question: "인형을 선물 받았다. 어떤 인형일까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "극세사로 만든 복슬거리는 중간사이즈 강아지 인형"
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "껴안고 자기 좋은 길다란 바나나 인형"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "완전 큰 곰인형"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "납작해서 베개로 사용하기도 딱 좋은 원숭이 인형"
                    },
                ]
            },
            {
                question: "놀이공원에서 당신의 모습은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "귀신의 집, 롤러코스터 등 가능한 모든 기구를 다 타본다!"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "딱히 불평하지 않고 다 탄다!"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "궁금은 하지만 겁이 많아서 고민하거나 무서운 건 타지 않는다."
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "타긴 다 타지만 힘들면 못타는 사람과 함께 쉰다."
                    },
                ]
            },
            {
                question: "맛집을 가자는 친구들의 말에 나는?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "맛집 리스트 보유자라면서 적극적으로 맛집을 홍보한다."
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "맛집이라고 추천하는 친구의 말에 따라간다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "아무 곳이든 상관 ㄴㄴ 별생각이 없다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "일단 만나 돌아다니며 맛집스러워 보이는 곳에 들어간다."
                    },
                ]
            },
            {
                question: "파티가 있을 때 나의 드레스 코드는?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "주인공은 바로 나, 돋보일 수 있게 화려하고 멋있게 최대한 꾸미고 간다."
                    },
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "나의 장점을 최대한으로 이끌 수 있게 스타일링을 한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "깔끔하지만 스타일리시한 포인트를 준다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "기본템을 장착한 댄디하고 캐주얼한 느낌"
                    },
                ]
            },
            {
                question: "내가 가고싶은 여행지 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "네온사인 가득~ 신나는 파라다이스 놀이공원"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "이곳의 유명한 박물관이나 건물들은 꼭 가봐야지"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "꽃, 나무 자연이 가득한 여행지"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구들끼리 프라이빗하게 놀 수 있는 수영장이 있는 풀빌라"
                    },
                ]
            },
        ],
        results:[
            {
                type: "포메라니안",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                ✓   친구들에게 인기가 많은 타입으로 주변에 사람이 많고 늘 주인공 역할을 해요! \n
                ✓   활발하고 호기심이 많지만 겁이 너무 많아요 \n
                ✓   살짝 성격이 지랄맞을 때도 있는데 그럴 땐 좀 냅둬야 합니다. 풀어주려고 하지 말고 가만히 냅두세요. 알아서 풀리고 다시 기분이 좋아집니다.\n
                ✓   외모에 관심이 많은 스타일이라 스타일링을 바꾸고 싶어하지만 결국 다시 원래의 스타일로 돌아오곤 하죠.\n
                ✓   자기가 기분 좋을 땐 세상 애교쟁이, 기분 안 좋으면 세상 지랄견!\n
                ✓   사람을 너무 좋아해서 이것저것 다 퍼줍니다. \n
                ✓   기분 안 좋은 티를 숨기지 못해 가끔 표정관리가 안돼요.\n
                ✓   우리 친구들은 낯을 많이 가리는데 시간이 지나면서 친해지면 미친듯이 활기차게 놀아요.\n
                ✓   한 번 화나면 불같이 화를 내는 다혈질 적인 성격이 있어요.\n
                `,
                query: "1chqhwlqzhrfj",
                score_range:range(26),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3fNUTFSt0j5q3NQ_Pi0sgZmIYl4uB239fQxVZaTVTgv9aiFOWOPTF-UAm9QltahuflPPpSrrhEvwwIOX1C7_FgAwin-vbgtjcrzITiK_87gEAhWMxYM-glVxquhhH8b2xeeBL6PpIgTjxA2C0HItL8=w860-h745-no?authuser=4'
            },
            {
                type: "치와와",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n
                ✓   뽈뽈 돌아다니면서 많은 참견을 하는 참견쟁이들\n
                ✓   내 사람은 너무너무 소중하지만, 친하지 않은 사람들에겐 낯을 많이 가려요. 경계심 대마왕이라서 섣불리 다가가면 안 됩니다. 치와와 친구들에게 시간을 주세요!\n
                ✓   질투심이 많아서 조심해야해요. 잘못걸리는 순간 그날은 전쟁입니다. 나에게 질투에 대한 실험을 하지마세요!!\n
                ✓   불의를 보면 물불 가리지 않는 겁이 없는 용감한 용자! 으르렁!\n
                ✓   스트레스는 음식으로 풀 때가 있어요.\n
                ✓   내사람을 너무 좋아하다 보니 가끔 외로움을 많이 타요.\n
                ✓   눈치가 빨라서 행동에 막힘이 없이 재빠르게 움직이는 부지런쟁이들입니다.\n
                ✓   기부니가 좋을 땐 애교쟁이><기분이가 안 좋을 땐 까칠쟁이 -_-\n
                ✓   가끔 앞 뒤가 다른 사회생활 만랩이랍니다~\n
                ✓   참는 걸 극도로 싫어해요.`,
                query: "2tjsxorgudwlqzhrfj",
                score_range:range(26, 51),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3dPuDlSq8zF2lTz2r5FK8To0WsvrBzOhXKaKqtEnSlGKc5L4fJCmxgHAzT1usZbaBZYNdQFnKUMD7xwTcYLgx71qViTrShZp3C9Xr4SUX-HbgyNV9K7lZYAatdmRZi8G7nj84_g43E3iintsaP3UEQ=w860-h745-no?authuser=4'
            },
            {
                type: "웰시코기",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n
                ✓   상당히 활동적인 스타일, 열정이 가득해요. 허허..\n
                ✓   가끔 에너지가 너무 넘쳐나서 가끔 주변인들이 감당하기 힘들어요\n
                ✓   집에 있으면 시간이 너무 안가는 느낌, 밖을 나가야합니다.\n
                ✓   날 가두는 느낌 너무 힘들어.. 나에게 집착하지 말아줄래? 난 자유로운 영혼이거든! 알아서 잘하니까 너무 의심하거나 집착하지 말아주세요.\n
                ✓   하는 행동에 있어 단단함이 있고 자신감이 넘쳐나지만 친절해서 주위에 사람들이 넘쳐나요. 학생 시절엔 반장, 부반장의 경험 많죠. \n
                ✓   저 사람은 너무 순딩해하는 소리를 많이 듣지만 사실 나는 단호박입니다. \n
                ✓   눈으로 말을 하는 것 같은..뭔가…매력이 있어….왜지…눈으로 사람 설레게 하기 만랩\n
                ✓   이성에게 인기가 많은 타입이에요. 난 그냥 이 사람을 도와준 것 뿐인데 보면 저를 좋아하고 있더라구요. 왤까요? 하면서 다른 사람이 가지지 못한 마성의 매력`,
                query: "3ehfdusqusdlwlqzhrfj",
                score_range:range(51, 75),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3edSQ14M8nH5DX-dcXXQ-i_boiT-bsv04XGyNXNNhMlbeSCIUI7Br0A7eYrTlbVJ6WM9YBr6A1q9_RPYmjc5VKVkKD5_13jnbTP3etnB8If2fa0UAMGPJFjIjnZF6KwipxiEmZqiXRI3XquJ-orfUQ=w860-h745-no?authuser=4'
            },
            {
                type: "리트리버",
                desc: `친숙한 댕댕이 , 리트리버\n
                ✓   순한 성격의 소유자, 이런들 어떠하리~ 저런들 어떠하리~ 이해심이 넘쳐나요\n
                ✓   사람을 잘 따르고 상냥한 친절한 성격을 지니고 있어 주변에서 은근 좋아하는 이성이 많아요. 하지만 본인은 모르죠. 주인공아닌가요? \n
                ✓   어쩜 이렇게 화를 안낼까 하지만 화를 내면 세상 제일 무서워요.\n
                ✓   은근 아무것도 하기 싫고 잘 누워있는 편이라 주변에서 놀자고 해야해요. 아니면 집 밖에 잘 안나오려고 해서… 누군가라도 만나자고 하면 일단 만나니까 놀아줘요.\n
                ✓   순둥순둥해서 걱정하겠지만 은근히 모든 걸 다 잘해냅니다.\n
                ✓   한 번 놀 때 미친듯이 놀면 적당한 휴식이 꼭 필요해요\n
                ✓   사람 자체가 너무 편안해서 같이 있으면 그냥 행복해지는 에너자이저~\n
                ✓   인내심 최강자이면서 예의도 바르지만 또 장난꾸러기 하지만 머리도 좋아 뭐야 못하는게 뭐야~~완전 워너비 애인상이로구나!`,
                query: "4vmfhwlqzhrfj",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3floNszlNws41szcvGGNTZOFZEt4SKrqVud7kgxNr77lT10GyGl3Nt3PSY9qauFqQ_w023icDuhrOOjISvwT6ax1ySsVIrMG4Bw0999q7r39SHIVhEz8vlFvQ_FpvX1mdmvsqhiyFy_M5Slgi42D90=w860-h745-no?authuser=4'
            },
            {
                type: "비글",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n
                ✓   체력이 대단하다고 생각할 정도로 미친 텐션의 소유자 비글!\n
                ✓   영리하고 머리가 좋아요~ 그래서 눈치도 수준급! \n
                ✓   여기저기 맛집 탐방을 좋아하고 음식을 너무 좋아해요. 맛집 물어보면 왠만한 건 다 알정도로 아주 맛집 리스트를 가지고 있죠.\n
                ✓   악마견이라 불리지만 사실은 에너지가 넘쳐나고 사람을 너무 좋아해서 관심을 달라는 말이에요. \n
                ✓   외로움을 많이 타서 늘 밖으로 나가고 싶어해요. 누구든 만나서 힘차게 놀아야 외롭지 않거든요. 혼자 있는 거 너무 싫어!!! 스트레스 만땅!\n
                ✓   노는게 제일 좋아~ 친구들 모여라~ 언제나! 즐거워!\n
                ✓   될 대로 돼라~~~라는 마인드 늘 긍정적이고 낙천적인 마인드의 소유자`,
                query: "4vmfhwlqzhrfj",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3e_jgtExDj9E-XRKofxwpsVkdGgiPxfxt4Uvy8UZBmG8WuvifmA4rj4NBwa12lg-x7U2Ywj0to3QSXZ_nUs9Vwiwp6vAiBOIh6sv2fXa6hPuB_Flrdm7IQqaorsW-mylFSInuTXAE8ltT9rdqwnRX8=w860-h745-no?authuser=4'
            },
        ]
    },
    // zipkok
    {
        info : {
            mainTitle:"프로 집콕러 테스트",
            subTitle:"이시국엔 집에 붙어 있자 꼭!",
            mainUrl:"zipkok",
            scoreType:"numberScoring",
            mainImage:"https://lh3.googleusercontent.com/pw/ACtC-3e0_-_LohCouLQAxHlu5w0l8dMCLSslLwCB0Or13Fxk5tSeX1B9HPyJhldbJ11t3SrblJaUEQHJbWfD4wvMtD2tYnpXyklXyXySpmM2T9dt56TRpsq5VZPEl8a61lBsSEvIGVBQs2Of6IwqTPbQ9tc=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/pw/ACtC-3ekSQC8znAZUOfscu3ZjUWKmMb57pq273mhfBp1FLWXs-aWcWi7jwnRPGeUVB3EIBcF4SYFGZZJy-CRU_kRteMj4L9CfYQWlmx0avaCNG5LHYJNUclCB4oMqAV2wsilH0We0JevyRFk0sKCq3IQyAs=w768-h620-no?authuser=4"
        },
        questions:[
            {
                question: '주말에 만나자는 친구! \n 하지만 집밖은 위험해! 나의 답장은?',
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: '그래도 친구가 오래간만에 만나자니 나간다.'
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: '귀찮지만 뭐하는 지에 따라 나갈지 말지 결정한다.'
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: '귀찮은 건 no! 약속 있는 척하고 집에서 쉰다.'
                    },
                ],
            },
            {
                question: "나에게 소확행이란?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "남자친구와 주말에 걸어다니면서 소소한 데이트하기"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "친구들이랑 다같이 모여서 캠핑이나 1박 여행을 간다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "행복이란 \n '내침대에 따뜻한 전기장판과 부드러운 극세사 이불을 덮고 밀린 영화나 드라마를 귤을 까먹으면 보는 것'.."
                    },
                ]
            },
            {
                question: "아무런 약속이 없는 주말, 뭐할까?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "밥먹고 샤워를 한 뒤 밀린 방 청소나 할일을 찾아 움직인다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "밥먹고 세수와 양치만 하고 쇼파에 앉아 티비를 본다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "양치만 하고 누워서 넷플릭스나 왓챠를 켜본다."
                    },
                ]
            },
            {
                question: "드디어 금요일, 주말에 뭐할까?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "집에 있는 건 너무 심심해! \n 친구들한테 만나자며 먼저 연락한다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "집에 있다가 만나자는 연락을 받으면 저녁에 슬슬 기어나간다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "주말에..왜 약속을.. \n 난 쉴랭! 굳이 먼저 약속을 따로 잡지 않는다."
                    },
                ]
            },
            {
                question: "집에 있을 때 나의 모습은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "으 시간이 왜 이렇게 안가... \n 주변 친구들에게 연락해서 나갈 각 잡기"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "낮엔 자고 밤에 나가야지~ \n 8.9시쯤 나갈 준비를 해본다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "밀린 드라마나 영화가 너무 많아... \n 하루가 너무 짧다."
                    },
                ]
            },
            {
                question: "배달 앱 속 나의 등급은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "배달은 별로, 난 맛집 탐방가임"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "그냥 가끔 집에 있거나 친구들이랑 파티할 때 시킴"
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "vip 이하로 떨어져본적이 없수다"
                    },
                ]
            },
            {
                question: "갑자기 일이생겨 못만난다고 하는 친구!",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "아,,어쩔 수 없지 하면서 바로 만날 친구에게 전화를 건다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "밖에 있으면 누구라도 나오겟지. \n 카페나 pc방에서 친구들을 부른다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "안타까워하는 척 하면서 집에서 쉴 생각에 기분이 좋아진다."
                    },
                ]
            },
            {
                question: "집에만 있으니 심심한 당신!\n생각에 빠지게 되는데...",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "휴 이렇게 집에만 있으니 좀 그렇다..\n 라고 생각하며 당장 뭘 배워야할지 찾아보고 상담예약을 잡아본다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "당분간은 계속 집에 있어야하는데.. \n 먹을 간식과 생필품을 구입한다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "나는.. 아무생각이 없다. \n 왜냐면 아무생각이 없기 때문이다."
                    },
                ]
            },
            {
                question: "약속 시간 전 당신의 모습은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "옷은 전 날에 미리 골라놨으니 메이크업, 헤어 등 섬세하게 꾸민다"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "약속 2시간전 부터 일어나서 준비중이지만 세월아 네월아한다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "아 귀찮다...나가지말까 \n 하고 늘어져있다가 시간을 보고 재빨리 준비한다."
                    },
                ]
            },
            {
                question: "친구들과의 약속이 있을때 나의 모습은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "10분 전에 미리 도착해 친구들을 기다린다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "조금 늦는다고 친구들이 다 가있을때 그 장소로 간다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "진짜 되도록 안나가지만 굳이 약속이 있다면 정각에 도착한다."
                    },
                ]
            },
        ],
        results:[
            {
                type: "Level 1. 초보 집콕러",
                desc: "집에 있으면 있지만 심심하면 집 밖을 나가고 싶어하는 \n 초보집콕러~ \n 아직은 집이랑 서먹서먹한 42~ \n 이틀이상 집에 있으면 나가고 싶어서 안달난 마치 라푼젤같은 그대! \n 집에 있다가도 나오라면 바로 나오는 오케이맨~!",
                query: "chqhwlqzhrfj",
                score_range:range(26),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3dHgTB0XMIH4psSe03EW7skti62E9P0Dp3KEnM0XLrvs2vUyZl_o7TMlqxSdLNSo2FTBkx6GUrsIsnFWQrGZZaefaKftPBk5RweUkaH2rlzUFU0cEfH0G0921yjJb8CRfUM8lxHM3sIIczITJDIQbw=w458-h163-no?authuser=4'
            },
            {
                type: "Level 2. 선택형 집콕러",
                desc: "주말엔 집에서 쉬는게 최고지만~~ \n 날 만나고 싶다면 ~ 나가줘야지~~~~ 뭐할건데? \n 꼭 재밌는 일이 있으면 무조건 튀어나가는 그대는 바로 \n 선택형 집콕러! \n 당신은 집에 있는 걸 좋아하지만 선택장애의 면모가 리를 빗 \n 있기때문에 친구들의 설득과 흥미 딘딘한 일이 있으면 \n 바로 집에서 튀어나가버리곤 하지~~",
                query: "tjsxorgudwlqzhrfj",
                score_range:range(26, 51),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3eui5IWAXyDzWDltHzuqEMzf7H9VvCa9uNlhUMctC55BYXKjs8bgGTNog15XjIqJ-HgGxyJ3WUDblWxz2IEj10_4FaCgaHV3ZvFwexOJWJ5iffmcb3-zPvX7UsIACpEnJC6RUKSWi7CfQhgfRR1ZzA=w458-h163-no?authuser=4'
            },
            {
                type: "Level 3. 돌연변이 집콕러",
                desc: "극과극인 정말 집콕하고 싶을때 집에서 절대 나오지 않z...! \n 하지만 어느순간 또 약속 줄줄 잡아 버리는 그대! \n 성수기와 비성수기가 확실한 당신은 바로 \n 돌연변이 집콕러! \n 집에서도 밖에서도 최선을 다해 노는 당신! \n 한번 놀고 나면 꼭 충분한 휴식이 필요하지~",
                query: "ehfdusqusdlwlqzhrfj",
                score_range:range(51, 75),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3d5zlPKVz0kiKelpsI_cUqHR5OnKl2yoymQ8F9EZIKDLtP_ZXdZ9C8SOVINx5UPwyXDjd6AEoCf6Ug_ow-0ILkMIWO5Hlt0UQGgcjcV_jIeDW9ygKysaQpCIHTgg068SiJZJOqGtqR2-dpoX-hoJO4=w458-h163-no?authuser=4'
            },
            {
                type: "Level 4. 프로 집콕러",
                desc: "집이 곧 나의 삶의 전부일세, 당신은 바로 \n 프로 집콕러~ \n 집을 왜 나가~~ 집밖은 위험해~ \n 주변에 아무리 불러도 순순히 나가지 않지!! 마치 나는 신비주의~!! \n 하지만 그냥 나가기 귀찮은 사람 ^^ \n 개인적인 시간은 필수! 집에서 나가는 것 조차 큰 결심이 필요해요~ \n 집에 놀거리 가득하면 집 밖에 더더욱 안나갈 자신이 있어~~~~~",
                query: "vmfhwlqzhrfj",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/pw/ACtC-3fwZMtlQqNMTAjS8arBXtLVHaE0jmpiPTcB7WSlaNyst6-f82db4GqZP1hxi4qYCg2oTnF6JgWHPsUQgpqYY-Kup0RVJUX98SCyitn-2GWMk1GsAvJcZONxhmr7ZtWDhCcYxoV5ncPSbyprkcOkL54=w458-h163-no?authuser=4'
            },
        ]
    },
]

export default TESTS;

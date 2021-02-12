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
            mainImage:"https://lh3.googleusercontent.com/p4_W-u36m3BcJ5JILoqJt9Fe1WhnHwSXLguBn28C0S9wQE9P16M4hyVI2YsbTzt12ChqXYlYGdR1iLUqpyGpj3mdJ9rEsnVuvJqfLqW3q9kHIcO6J1Jr6VI82zKbjiwAxb1ts5unvWdUBcYE3xNjxpMkO5HyMCvdU8BbnRB4xq7YGV884lshYOKizyZmtqOP3CXDuwKYJvx5meAd3XuJ1svTd6ke2GQBCa8LmtA-UWHjPHu_e9wAZOxoiiGUz5od6AFRL5KJWjqQ4Ymbo2DA9REkCac_9Ikhiy6zxHGRBK8YFlgmIOydAK8zPCLPk03YRsCEibhxvbN63FJpo9EOJonTxSRcyTOswRpC3RqEGHC0uXqnk8by5ynNGPhcwrN341WsU8nxZWVUCnN7gLIbKP88ffPZqQXl_8jadxO1m1jGlA5VLf0DDYr9VMXQhkwO1lX7uWGKkWT8ArDdfTQrI87eKAwCewMkJY2m8B-K1gjJSeMzTnnL20oiearYoC0x3xWkdmymjfx_NkPzyNtVZh1J0-VjRBg1s0TTqqqLMx1YJP_wakVbzwIC91sjHS8-gP6PDXZPTBWcfbyfITAx6wf64LbHcYH7wqZpWPodc3HqGwgH68rVNhrlLyth5QUxVUasQ7EgYlH5jjl9dmNHp8V8lVqNLE3qzpATR8rwx0wNwBRf4CIF=w768-h489-no?authuser=4",
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
                questionImage:'https://lh3.googleusercontent.com/FY4906oR_DA-_Zzcl8u7NmT9Ehdqji8TnqqI05aW_wy1RpR1d2qfomL9ixSrpVibPOvq-E5yFwjBKxY7I98t02JjTfB58rgWVoZykHEZAkCztPMS9BtQIXrqRZwa4FB4k3EFvtM5cBZB_MOgyylUiW8ZJNuq0ttObSyM12K09wo1gs0Riq38txHOMbGpRbl-oU49KBuaFaN7qXOkry5FBoTQB7GMCayt3MUhPZnDRkYnIzgqo-oBsl_eSq6yFyciXseDOZxpFNGx3kl5Wo5Qc5HgWIjQAw5n1-4NW7HnQ5AvpczvQI_iWBfijfY3RouYqcbe9F_3epXpv5Sa6uqeQzQnpJ51Af9pHUVp5XHYHzqFCFqczl9mG0AAkmlpG9tSvszqtNJtgNzgSlzR4KthuUAb64uKaxfLoiD0Ktxj06UGH8GcaBTH3pUhaq6JVGu9DIRWrLMIiiJAU05Gec-SRmcg6BiPeHaHV3dy0W8BCC3H89bsZXAoVQe7kVvR5GM5owvX5UXy8SuBRRl75oqxX3Fk_SBlqGc5vAbXTqCA11YPcxndSsYILvnOnZc7_3dx5Px33wsbV_R0c1Q0Pv0cPnBbez76Sh3xsnliLBNkMoVrPyckN5b2Lc4vY1MloTOuBbzeCnvr_2fmwE9NfpTcPsU7Yjx6kqCArwznBPiEyHtwiChQr0A7uw=w482-h470-no?authuser=4',
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
                questionImage:'https://lh3.googleusercontent.com/xTdwJCYkraJ5LcrmLhQuUJPAh7c6c-LRA9bJoMnoB6wwzqiao3pUbkCdbvGtD8OlmBeCKVGtHZSL17uLq23klUx1EHjJsmVhLU0RUHCWa09KRRrMStU2nxg5Fg_urZad4vvNnXZyFG4ExXKjXAVdUnK-cUdhk9K-rLhogAon3ZnLkJ49bJFKH-UvQ4Ibxcyck5wJKvFy1Rdk4NLE_TdylNH4Zk1RofI-r53U7jdmNngDyhjhJsA3wMG0eAgD4Gpwnd7_JbCc4M23Riax_dAL1ZX221DdJPPkeVQYpuH6_LSb4EnmV1T3XeeZn040t7JZQKd_IG2GRr3fp6xwVF49kr2kr8crE_EJatBY2De87iwQZLejq5-cHxAVb3VMCME5GB_WTmqOTH49c_RytHB1_FTm8IdDBzkUPDmP7kc37CDdMObJbttXb_gsZlh2ppr3WBr5hKp0v9v3pX9519oNlewceMNMJfEJ3fkX4Cs2EfMeTbNlBFosAg6OxbatA7DlPvM-P9fjZNykNuBexSBayipjOmeMxMV1ihlLHk9CUdXyRRIy3ghhvZy0yJE44qRR3XcnmLiyElCKWzr71CFR4M53EZ4hYXGQi-2gEtd_qz4DEFFmXLdvUCAST3kaOb81KLoC_B108l68-ffj61AMIvqR-By5FwmIQMNdvQsr7V2lSkwcyTSIkw=w414-h279-no?authuser=4',
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
                img_src:'https://lh3.googleusercontent.com/r6mK8-By1olDEsXvURLpovHqFcxLM4z1DPcbjFmBl2DV2Ohp-u20mCHRR26oJp4C3bZJBTSy0PAtPTZgqz0ue2dQ-OPNBtfxJiVw_sgvD6hXEbS7d4wS7_IiCM2n7Wahqhyi85yeF8wXNC5uE-p3uprHZnf9n7FcyZhm37fDQcU3tdTr8mjbejTG00MAbjV7F08lXreVzLt0xkz-4VxxotanqONl_JY0cZDcxxJYwT68qNdJhRJodfIr99bEhUcvwooZ7BB8uOs5b2KJylgy_flKvxamFDvm7PttQ3mPL3vMNaHQyJqkNVhg8AYfmVSWtdi_RCgd8Ajx21kYk0nehZe7r2mIMV-uGiGMiuVHkzGP1C-GEj9U2EmT2gC7zfuiFDbP3HuMN_P3WBC8j-MREu_cxS_sbRZ6imBMEX0edkLPnc0wED5D6cmK251bocdlgN4renIAXwlsd5aX3b3J_XJ4cEtiiUiPjowekO38vmAfufjwpz1csMnLVVDjadM5rqP-Zsk4FQrOMxX4YR0W2uyBMpxohlk6te1WkC7OhhCT_O72sCqG72bWzEHmDj4Jp4rPmiFm2QeF4Rs97pz_k5jOtklvffGdeG8MJYuaY40IaCC-hHPHmik626FEmY-TAvQDpR_vopph4veldlPm8xru4SMJFPlhKJwib3bM21A3i6tG8NWRvg=w768-h940-no?authuser=4'
            },
            {
                type: "40%",
                desc: ``,
                query: "ghldnjsrkdlq",
                score_range:range(2, 4),
                img_src:'https://lh3.googleusercontent.com/A_qRL1hrr8Yv9Gm_M8DCmHgAv_VgfsWYLtQ-yApwU3gsbpul8N-CStQM0amJMdUP0ov-J_8Ok6PNPKAk9oa_ZBBLVF2NhIyALjuXO-1FU59B9v8hPXUp31ZQkUE6c2pw_40P9IGMZGwh22-a7oXAIlEZBGeGsvZ_TsR2uyAsdAe_0UHL1aSbd7NAWdSebBygcJD5BLBUfYr1DMNwGeNTk84X1-lvbT_x6MHZ9uX_3rFq31eKVdln9zwh4e3QG0im0rdmhXrmT0t0WMiQeR6frBXnFdtqkGzdzZm8CqcOBZ7qAlftFgt4-GSNXdpcvjWP2xcWlBJG3HjBK9nv4m8zp7FITcTKGlNoFMqhE2FvhQ_l47G2TGg19-2DG8TMyyJ7wItwpq8sHl3WJ9aXwnn_ThlIzOCzW22OyxRslZi7Ep5VQYnvPsXFMDYNaf2uLA8yK6pKWHJTGwI1vB5G-IxF6q2Y1PRzwLkpqyS1oYdEXfCvXIIKkdM82LNeGeR5ToTQqEGn6Y3Npz1h2nikna813R3a-o2xEGf11oe9iKpAbpNolBeZrnwrzuoOT5_MrFl3dBGI2p2OSC6iXaJCXFEW60j03giwGVo1z-roXMzP2aN_k6lcbrw2I93LaNM3A3jv0E-nlzhBZ4-ctjVT6ssabPvxDF_mC4X7d2msg3JAMIG88gdisaDOmw=w768-h940-no?authuser=4'
            },
            {
                type: "60%",
                desc: ``,
                query: "gmrdurtk",
                score_range:range(4, 6),
                img_src:'https://lh3.googleusercontent.com/iBsOY1Pu9A1rIQYEyAnM_LTwzGj4Fcy4x6gSTMtJwPnZNhme5c96C9CYrh4R7hiBCUIPNTNWqfQbprmq2tud-tFjNGVcwlgfpHnhg-2wlpMIUN37b-YsISvN-hcFth1YKzNWFvPNvAsbkNQph3iDnv0mS8RF7o5VaovTpbhmQYkwj8fnaLNqTPR2anvni_PavNwdm-OS-5aWvptMc-lbRe7cP8JmK2mGPJCvUqouzcWOxK1ktkxrHh5DZHN4MyGaAdE1GFqFaFsTP48d9VXLLlxV47VHcHFcTXKEGcmapg8SY7lcp9qJvPKx4_8NQApBhnVNu_boQRiFje2ZIwt5pd_euueR1iscLZZrrKS0K_bboYMCeaLOL2BqpRJuUh5GplyaUKnAO3nw_bM-aSjY_WuXJd52pJqZiRbzV_3LJm6IGemSJPV-Smm0OWGcWfIArCZhhssl8CEUoG_v6ylT5qtEYGYeTc53hKTGIhn1pTye6C2CXisqGmPS019s2FpxMoUBxEfmLaxhL-vYx6P3ntAYf8KndGxseNlmMwQ4VLePyBV17HaTCFe8qyH5zzCxT69UfXYUihgXK41OuwulPBp1d1ltQIkjQhlnvIo-WptezcRfhR09wgPevhAnIHaJTnyBg-Dq2HfIY28dVbB6MZhX72z8CRtrLq_8J4lqLNJnC1Gnkpp1SA=w768-h940-no?authuser=4'
            },
            {
                type: "80%",
                desc: ``,
                query: "rkRmasnsanf",
                score_range:range(6, 8),
                img_src:'https://lh3.googleusercontent.com/VbUpz5LyPLGxthoYaAqgBpjwjWKasSzdTTmoB4Pqls4dcO4egHg349ZPTbkrhqEGuAnD_5sV_h8yLjdkNsQVqeC_-WqCCL229tD5zTQSf65mT1izLx7quENcZ-hhL1yuPfBwmfxs5QqirqOidYtklFdvoNjRTnd0FGPWDeFZaqXuvMlPU1HET4jrJx845-rwoI8--c8bjXPVxluPLr4_PD2J-c4gJaZZZ8NjPdhSQCZehrSA9vIdDAm-fZlk2tYggAt3mUpBuzi5PMyP3OruuosaEkQp57m0tcsxY1_s13Ye_IyznymVNhhlxQfrm33y5JyncjP6SftYRcky9JJn8qUZ4v6oiaUbYimzBWDAv9tFVY1bfHr7QwsKud0qHm3tEVUBd-XAyL-mEBc8OBeyagsX-5H6SFPGfezM5wThG7hewK1e_LpEgcStJqjDPAYeGoQXUXq7f7drN4nMeD44R00y5lJUHra2uqNbqUayTP4YKdj_jWWlD-NpQpXLnk9CRLXQyW7br5J6CA8n74HRjDpLHIk0MIYypb_rGpFAqesMMsh4SuvJWW766WRxIPJ-ai4ZfF6KQ5Jxoutax8OzRcTI44ZpRymovwWQ-8vi-DY5J9f1lHQWEY1Ya1nRRYi1_Hn6uVhJ4g3EnNeCUsfuJ64C9NAQII61q4fzD0CZyze6pChqkaH8dg=w768-h940-no?authuser=4'
            },
            {
                type: "100%",
                desc: ``,
                query: "vmfhaktmxj",
                score_range:range(8, 11),
                img_src:'https://lh3.googleusercontent.com/jL1OH4sSsbtZNtO5nT3NFcdbQDhs0TP2FtJ2CAvVgopWkydo6x1OppWAeT9puQtM9u2tg12nXmXPf6NLKfTK1RjUKJC-6x-tUw2Zszv_5964BRLNRafSa7iDerN9q_J1oxL_eN_rIn-7mly20B4JmrAp14nXQJnrwskdBFRILbIkDRUxQ7tvwYqitVXlge2hXVUqFkZUEBQOkOGM_kz9X0vl_CpHOFwSZTKsE3Sd7MyObqrGAsOUjXj-VqQcQ9QZTkullHm5WYqSrnTuelYa-KJ-jh-ZrKEjvYXYJzthhrnmT7EcHdAVMqEfDKWnlzXHHvEwQkKMS8ixdYwxxzOCzbI408rrA4GakrRfGj5ml5xczqX1K-w-sJauXJYH6wQ48oqTvh2Pkj_HwCWkZ47rCEMAECvGfMOGp7qix_88RlZhNZ2FNdEdcYqVEgtLuGV_VRAJulZrQl493BGtOfvGjOWVCvPs6ZgbfgiXeTMhEgPmHpSA346KgF2bZyRz9n0EeePIk7R8kD7dvfrz0nRrJat-lE9uAqqGd29R1CZwexDAFHES2iwEXwIqK5le42isD3CoIJnEzJVuZaRvAQ_rUXwzc9Hj7UdNGiUUujBwrfIIxA90bzDDXC3N9csdq-Xq6x7tZDRs6PeI-Pcubck65DiyfodIRgxgaour9w79PYhKiVdyGn0xXg=w768-h940-no?authuser=4'
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
            mainImage:"https://lh3.googleusercontent.com/xXxc-gUt-DzeX27pZNxB1TtyjVaGtr2kllh8xGEie3NxeUsurw3JShm8wxNO_503LVC5U-UjLn6MAWriSEOS_Zp6VStpwhh_30MhhVlYGGjTmJWXQSS3kunDdvLBAII-8PMuOpTIs6bkbaCUZV4D3v7ZQJQc9XNBwnUKKiSz2bKpFnA4K8pr_IROFepJaG3_vRYc0gU8k694W-G89PWz8ECAb594APP2lW_ERjYBUIrZ2T-EJAoHCGQiQ9ito_8QTy3lb-xKphYfySC7g8vCA_Eg85I_660Ln5EqrKQMU6BfufCxmzTPuyuniCI4D6KTCw19mLIiRIr9ow3nXPDig-j8Q5S8nxJW2MB1Emq0f3ZuITbMjJCNNngXgW_1CZ695eG-oNb5puzxagc9jitG_DEqyzuTuLgycc72MEf9TrjW5vWAYhVcs56O2BFPR2Y7txEum3lgMYmhnPBaTbobfMN6yBhS-kN1iAqe73p_RIOQToy3V6VyV4nMibx-kG-o6o_yRmgEgM59TTNEhytDJ7MNPdK-B8cYTqCHgA9W8_B7A1dU7H0a7Jxg8eXKHFeM5F7swH8jprkjY6gjrrOIoOi3r0j-j8v5hdIPN6fkpXDQNzQA4BEREOvhF4LRbNdKFFHv4uEb-mwR7BFUAAU-muVnEwvDPy7aVLUQfwTM0kCTwhLegQb7=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/FEQAGXzuAXLltZEqmIdX-x-WlcOLh9uOzKsYMSkFPOmzODmHqu6Y_IWT6fEo_HQsIeBz6AiZn2a5bdfnqi3St_dkNqRPZI0GXLYxGmkD1h8LocKNPxjaT8datvS-kSMTb8IltrePqLiTkzBn1Jt0ELnoMb_xd6F3nzPmLwf62Q68acHs95TRAyCChkyAMpTCH13UNikKt2cw6qPAZ5-zon6KlbGkHAaf1WKGaMciCASc10vbl88Ue_77exDOG5Unul-xib_io4T0PdI37F0pdlqEGBRBKfmpqFLtTysyDvxFfUL17FI6LeAfKP2BoDAN9unHXSwxPIiz4lZX8Chc7NtJYXhx8zb-UI9TYLWD33q3Vk4_KErgEVZpL399fOoKYdIKx_AOyFK_mi8MGp5ydGqsYGSMXlRKwc2Zyh5L_OsLTeQNvXiexlIcacC3DD4p23YdQ7mI7xG-tGoFg1g9NQ83zdEPvk-Is97VHHQcHVJp6rjOhRprVJf3NhDR0nqDJ6WPJjzDljXTNWxvoXy2CsS7kCdCp7Q6QPmvSFHo4DEi6uu-YdJZEI9O20kJkRDR4YFz91kw80Z0gi8slvMO31z5E97OeWb69FJ6g6qXzNm6D0ORmk2F6_wVf5P1PBWlvvhRorDy-nun19hERTAjkHYD_AWqQbAxIDy0PRVUJmAlpf5qGwJx=w768-h620-no?authuser=4"
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
                img_src:'https://lh3.googleusercontent.com/wh3RQU1QELIW16mjD8yCMpQh-OOto8W2xScnWQH5iQI9YkA4nHLcv7Xl3yhNpmmqsg3-g6Z2SERo-1lIVKdwC9NXw0iUrwDya2FIfvAct5r8loKvYk5fwppZEj0eqy5725gcJXF9wr0LOSC2iOQ32NJ9vbgWAR7ragY1uQ9xgrCH6IbJ3vS7ffy6KrPJ-z1CI24oSaIGHtIah0rVK3shMYOxKruFUqliQ_mWb_ZKmUWk-GPOLqBRG8Ka4yvabKZNNbzaop3l41JGpUq3cKkmHQLpYo7TQRVhvXYbzncFmHcD8pX0TOJ7u9xigNVZ5xCawpyN7jLuLpu74Te60ONPAs5pt_aPjUCIGTEFoR2T5zcHItva4izccfMJ_TxEbNzJ2kIT_HvUfe9Lq4GXZ2ejlyficmxCbYQ-tyGpqTi2HqFNXCFZoHFsRjKn0hAdp9j6bjmcHxqdJBb32qMdb2k_fwiX7_-1aA_o0TKgIX732P9zazsnF6sTL_8nn83Cm9OXROuyTZ4JmDfi8veFqgqD5NICPrj-UWlIgmHgxHYRGcntk2GPQB1Hmwo1ZeCTFU85NKIdsnb-MAYVs2fTo5pdkNErY7BkMRqNmV4C7lVtBBZZlKVkAqnQp1JBw5hzI9xvwhIZGbwdTXmfWQxeaF4HVyXyEpibnJuuZ6POj1C94r3Z027fzUTpMw=w533-h1329-no?authuser=4'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://lh3.googleusercontent.com/SXgpNLjy8IzueUhYvnnS92W-aLx07FdDRETpQKQNkyT1K2R0X_E6_vMZYMGdSF-3VXtUjPqB0H7jxSuHc_8-xkqOjrFL0HxGH0FHvvkYbBAoKQ8Vid7IFHru8yAHsKBTSAoC24pD0Ap-Bmlc8x6_4rgjd6Dv05itAruZOEDLLmYz4-AQbKrDvzLR5N3kBjJRR53p_FmSLO7T6fq0AJCIDfdgBDf9qKWQWfHEL0qIY0pPIzogFoJPO4u2MTNil_XUzBpTCC_AOHQPJGic-e4jltTP8Kmi6IRKQGbPgVp2rSOwUr0ftdpk2vGQYxLuzbwOdsS49ezVoGC-THQXGMgu7klzgie-VFfGQTwPktlBBMuqsG4gPb3tucivJVDIsgvcVau3vXHspGUFI4QzvpUpD-qqWp7Cgt2btHs5rXEHy9fKGpg_S8hufa9Ucw89MYnwXIF0C0P5dv7zfbeWC4O4i5w8veCxXLlwxhXCCLTdu9uZoX7RcIFSL-FN5YQY9kEPGqLLn4n3ZYILl8TKoKGTzwpRpNd2pV22ngB-rUpRFpI4naLd2fdDAgNDYJZq-DdDnLj9oHExn_9DSPI9-W79rVolb9j3fYZFro6mzGSJFfWHASkN1LCLGPPxLnRogO5vGFrNCCO-Dt7MzQo6EtMSlPk0Hylj1pego0A-R093so0ajkMZn6vsOg=w533-h1329-no?authuser=4'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://lh3.googleusercontent.com/UetPlPQhFJ8J1j9nhs3N-FtJRSSvCqb0ziwK3HIYi5MAW6RkyqWTtMSO535XTLjIKnyGrUWUb4aZi4b1dwR5hU6EutRUXtZcsWl-bIcUakMsfq3TxsedSZy2qijZdwQ4MBhNxkwBhW7lquv08PNuvXZ3cBjlrbEOtPCXDfIGdG3Nf5-RPZe_yBDbCX5w0o8-Ziej6TJJQz8ogURhOSA2QtOeCyt_vgOMcLUY5X7bV-N49jkRe4gfjEqM0P3EoVsqmKloTLjfqpMJk7QReKpNu3tnrlOva35E658wA8mrQ9MULpCulUC8wChMNYmFMgY9DhOGbAT6mg__6lxtLzoPpTqoYTCgXnz8w8p_G0h1EW4K-uQCQFsu1lngGDYUiLrXOOmRbt2WlWzdIxlX9flQrQTlzYYJUwFDhcKpc8w2P-UNPdZFNr3a1cfgXK3-z0wln95FoSAUZGIJytesvOT8spVIBzdnjkziIdVU_uSLyNe993IvMDOT3imZb4pibYW51OMzJ9Sj-AfvS24l4afcC9e96FGoqPnG01zZmILW5sGm0A0V_lYjEdYX3HLziTEBsxQNh5-KCukbKK3d-bZIFav143pT0kdUYxb74FQ77jGBoWtDulTemKLPCw8MYuKXCeKCVejWcHbmTxT4Tm-7aKQML9YhL4znLIO_gC5njmGVgMN4zoCPZQ=w533-h1329-no?authuser=4'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/VAsuCihmOrgmtVh2TrNynqYRTOxdKHQ9gASxWI0E7e3fZlrf1jt2zA5vWEa_mO7cOVCdellKjHHD4DOW47OBF9ilZp3un2WfKIGHK0YIFeifOKMMiVOkw6B6zPPvhXzR3nSiYrTzmCwbJCt1pM0lTHlyKQ3UBEdhq4FqEyohOm98x4W2Zx87OB8AC_U1IKA9hIvlleccEZcXp9nthABbkDonNXhi6RmZkNhx3gL8LoVGQJarMMjEdjiAluQx4fUhyv2qPFgbPssCAOJLcPoBtJeuicVMQilt188RKP7MfkcdTco82WJEJE8CgHqOmk_RAPh-nIgKiU_yu8o4XSXB3WBMYyzwutZ8NxZJwMICGGSKOludUGejzYMhVJ13RrXgMs6hHoD6ZVKdMS5csxb0y92wYSynbh6dCAN1pNH0xnPj8PoA2CtpRWtPeMW4QIpyBSOcnm_k7yP0s1V9CCKne3CE-NWB1ynQlKx2cJoo3yFX6b8_ERNDxOf6E5MuB7J9jfi-L7AJSxQcT0TLXE-hElGQqYeroROE5YSn9EqDzxmnIjYOkaG5xgFuUNf_CCy5lEdrT3rp6tQXYmy4TnO5nt-YBbMwHN-kQqJ98AWpNh5iDNzqCpENI1Y02dknvTb1Z7b1EYSCkky6_gZloAYSG6krypBM0gF_hu1jgzV2aaqVE5J0jWgYkw=w533-h1329-no?authuser=4'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/OJ6d4uOGPNB9n3eCB_RVle1HIodOpiVpy6cKoj38rv8CQmh02nA8mV1pWF3HaHzC21Z3A6ECi4CLd75WUTWCrw-xROnHdfmW1kocrEdpPoHxz2tj3drGgd6c8ds9Cjl1ctvHVVzFDStcFO0Bb7JtNf9quLSLY9nyJU3ndVQRwWXd0V6gz-dSATFl2BzZFyf1DQWoQB9jLaoOFdkqoU91P4j9Rt8sj8G99RUO5uHSZXa67p6F35IqdhLJMJqr7w5czrxOIkEKtQqNnnL-PoUFrd5wnHa1muezZHz-qWOSm11SAAP6gRczDFkc2Vrt5aO5Ht2GKI3HVTgX3JWH2rnEsEsRwYpa8StqHFsFExe1Xhhn4JYTkoDICTyN7a54IamXZapXKxWz-U2Oh5KezJOBwqzuAYE9Py2XyckFcr3PzPU-YDaGgJgiF3s6lID190FgoPWWEvwpvf49yNdaBtO7yq-0azcMgdMRxRlr8vzxMeZOwzy4-ixR2-MBjGY9cIKVNZL1fQ5iG1iVx9uf9rvrV1ISZUcZKbgckhvgeZwyE4GfeC9YZ3yPgimXb0r3-xiY_jM9bwm6sPifKYSi9-iZrqdP3-dcrxm_5On9SeUt8peGBYadkNICxqd1xrpAzjv2zpv19UL7_3XghFkiN6BP_R3e-TQVjzD6tGgMboTWHUoxvyoe4xke4g=w533-h1329-no?authuser=4'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://lh3.googleusercontent.com/QYPcNn-TbP117LDvuHH25RzUahTmTdC_P-Sge7xcB1faQdfVCUGb-1vU7AZaIQMR3ttoYfC7ohNJQjAb1S2zO0HtPAzKOBBQ70G8Zlr3zZM1nyi-fxTHmYSFrudTxmm6lbHY4K0WAe_2wCCgrsoP27ooAZvnofHhL3DrGo9FXNY5lw6ays70caz101SK6n-EgvOCRAgFEfjXwiPvWBwWmmJkUbv7tKjOkIfhl5cPyOj1jgfLgZKWu_oph82B__qLqJqhObfk4y2HSr7Co3BXwcFrzxmIna6JkPPStVwkdzT7zDd3vRa9A7fr5JPhyeJI2_Z5nqK3CU3-XwHStOHhboOwvznAhW7mMEHSQx48wsOqUd_im4g9DM4QhD61Dz_VhrQCbyuBA8MOIG-zxm1ysQ__xCmFjWtDfJ7RV6U45MvIhhAVWnx2bF9xkBSfHeyiWehIUwykt19otuObfMuaKaF4-mH1pCI2P0LI6B9aDQWC4gnfzwVEHIdG55-zRkWpClKLRTWDi8ljrQ26hiUFOaVWhvauf3KYqZmKtfxt-t3-SVXqUil2416yRxDf2aK4AJPI-zfGl_B9G5Mpswzf1QFE6aRUYz0vLuQcHarglLIYZq8cu9e3urWETYoyCuBtE1z4EhVFod1t7CpkXtDw4eX6e3ids132pcJeK_KSB4k6v7wDwMKfkA=w533-h1329-no?authuser=4'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://lh3.googleusercontent.com/cDYjjOHcR1kOenfsqKpMdP2FEgoRHqWcEGONZG-btPPLoAY1WIWkZHYriQGDygtBgyD98FNnl9w3V0JgwbWTlnzxpI6n1z_a3pQC6-ko224CTBFVSD4VEM-IAe46O9o_g_df705q-gV6TKp2VjP1GuTll8wzw-IQjuFB9nffQA5N_O24T6LZiaN4I67AkHE3ijTnXkb4C7BMi80NKtGEzTVRUvtqQnYofuYgCz0xYkcWJLRwjXONS2i8eZv5bPOISTVZV4hQe0JTZZ5lA5i_XTgTvhU00Ni0Rz0kgQYdQ0vLUp89aWEglPck1DKnoEtEf9WWwPJWQ72tVxYzEkcTbEh5Lr7gDx14mVDX-6QDBon89LjnA9A9fdQEiAqjCfsfe8wJZzJlceL6EDpxgdREKwzVyHlUGE9gnVBvj9N6Srq4QBVVoT_9wudf4nbDD9JGBuJAlGQ6uIuwE7sku5bac-I4Tdl9PrCKh0mkPVj8-L8GD2YbSha46lNmQ2MP2lGG5p72zozYYDI60E3USkTeLgJbxHpMIYbum7gfziD7j9oJlYKkAU20neJ6g2Gd96Kx22yHKYPm4MQ-2B44VOibHokcfifox-46Vzzb4ybTMocJWWg8GifHvrJ85WKIiboSIFhHgemaniIeefLBU0GAnEj-mgv6XzLQLCLJl4hNSevfA_9NRrC6oQ=w533-h1329-no?authuser=4'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://lh3.googleusercontent.com/4ZyshHJfPlGbkKdpn5Ge2SK6hz6r5oO4Jh8x643ZpFE6m5iCLRhmsVpsreLMcAiAn5gnuul0gYDxc6W1ha5K2vW-HcPUZ6_mB-WqYXA4HlM9Lm0Hpgt1Tk5unVWWjMmz6-9bXnVAaWn42ZS-u_cO4W8V9kgGHPLfo3PEe3rduckr6qjkIfUz5A4z9eXzNfm7AhXrgqImE-DM51welErGeSuqji-lfz9Fqw2zlR6KfLi6_Yjd-A13VzwlZprn-sehoqyWyKTuRkzkzyq9D3ijz22NNzZGIZo7H8Gn59Ck89dE2RoM0P_HBauwyJDcG3MYf63zwmc0ZpE8woFmA5Nwtp93xmjrtZnMrz7mCGh5P3DBCfspkcVRWl4yRg-n1DUgf6G13il-EV1fv_uVfAzcT4jzEt9mwVqTO4m0amEJx-Zqq65tAb1Zho9QnxYbruMEeqRaXgU8mXVwn5yuAyh7xTpl68M4ar0IbPbg2K8Tdvalk8D_zKOcCyrg6yvO0mtGugnLOruPSonGfGqL5Sd2RQMI8Seod4Y6xmFcl5k1_Ezj-KJl-pfYUT4YrkPixEZQZZ8E9Qab4-VNxW8jO2OpSYDPAc5Gou94ZgmVOdPYCgvbGRHlqzE3sKJs5t6V7mubWFSVAX4o4FLpvE8_W52ofr0RWmyqExYCrWVzkTpdvOIX5T-qMBdzpw=w533-h1329-no?authuser=4'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/eXQ_dVy7VpmkIo_k3VF3d9eDoXD_mnzqgIUrx1qbKFI9qt2Et4Oje5oBot59WN_9-9cX6Fko1jxmHhd75z0keAk7YnGsHrECbyZ3CPcZLIFBmFfMA1DYxidhzpYgOEh4T7iyzsz2WOY5X49itNuEFFVX50MLSzV7r1SAU98s9Hk1vjfFvFEfSBEJii1Izp3qyN9S8WfGjT6W2LFaY3INquk0uP8JaoUpsTqmfIFsIIT94UWAdKaq7eoXAMpImuWbzvQM-_xP5_fDVlzdY2XW6Xt0fMeSFHk_jM7-K8jwbSTy0Up9w7v588S6qtoXy2jFbRHcq_O2psCF-ZZ6_bttKFr79weGN8eDrW4Lqnydn-0hqjTpLvPpMX9BLnJFBVo0p75K-S_ATdptNxy4hRNt6OeSPodStnlCeywSJIHfup1Q3baucbojqI1c_kEQT2ciib9bNoi01nPHn89DkYr5-prDZj9uMo0DMGT5NvHXl367BgqM-hjIUEEvzyyBmBWlQxkT_LVggiVGIqJ2i92c4Ea3HffQxgpQkPbb7wHcoxi-N4k1VWswIkTeG3WZv3H4-Xjy9W-30zgr42ryveMVji7k73DNd-W2zFZ4ZTBGt4nzeouML5gIriMlO7wEuB9kH7ojFf-WZuVfZXKvlQu3di6M7aJFj5luFfnLmCXM6todbA3ENAJ16w=w533-h1329-no?authuser=4'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/_wvP8sxmwpjOKo2TGwuMsHnmzmwBtU1gvh_xHvRttXwpevWcJi7mkhHde21c_YcpZDYvVLk2Je56_qllKVvsi4hooPzq0xevQ7Zv0R2kO5E1qe3xt3c8sB_DwG0QXdhlvWGTMOshzM01ln2DKzyjw-t5a9kEQ5t2GmTchPZNhcPqxNgikFpsbOMOo658Uqf5aI9SGAfbVAi9V-eULu4xkZVz98lX9YMJaiLEkK_OGWUTJ7GjUY5AUzny3SzR7FUcaqfoMDeTEPfODsuKlSv3yUFzaWGylSTnagPl6eolA4UOG8t_FTr8tj7dIsQMUr-bzG4pmoOIAE4rCguOQEvdSdBBDUot7-8WrwrX4YUOJEgA8hNABbeP1lKjPFYNGLWUyFa_bAj1ZkSxWcVni8Qvle9FJw7_K5tuLvqGWL3yvXevAFx-shN6PftuxCHfDLiUoaHTFvnDrIiocWZQNkqtvR4k_h8qj5CMTRSQ7RX3dnSKGA1LbZjF_6EIn-QXvy_3V0L58IN3A2FC-qsFQRq71Xal9L6o6tKD-Vl8JRMswmn_NOBcaEvhOOHOlMKQ-m-1Bh152S-ZRGPSCL7jJlLELx3ZdXVLsZ7s7N6Tfbl3jxT0xHxhamxiKjZWIiHMfaq3YgtmrvK76s8uyStJjeQplNSozZ85en6pZItFEdJXMzewsHRJNrDlqw=w533-h1329-no?authuser=4'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/fq6Ltv3aLOLwCoYzBH1j_FKvsBsX6xvYTVQXdz1EG23PY3tUtrcho0hvtmAnUBCzXMRTKIxCRUfPOkYd8nPTPEsWrqY4VSXzJmpfGqlry3iVoWCse015cBBZx1Hd0zRZUxv17gyUnUQSSHavnuakADFYlH40ecfJajQ1OvVCBl-mjki7UjffB5aky-VcFuYMAdZdD1T4eUDAFTq4cKXPRQiQbC9reQAV9Vz0562eeKKUrG0qIi_G1TJIQKA9EQXtoYPYEA4ppH_NxKQSpvQ0EEgBMvleeMf_C4syjHheJceK9sLFTJ40T0lHqExWHhrg8Sg7RAkH6oFwtBYG3wbh0SJRPuC3C3D4U3lwMaYtXaLCcZmIM-4XPF9D51BYJiwpFy8dh_GR2j0oJRqlS8VxfXhEQdqFdla2TBF2lz6cLUiXQIdv4BPPPFSd8jUhwxF3r5U8U7tVWCVBaMAI89XwDaqHhrjwKAuaU9ycJyRrUXqnzUmJVcm9e-7cJc-pqlgQF0fehbBPuMsTHn8KVY8G9YlbVG1FESEtH2QaDzdTz7NQy71-9DV3um_Pu26YMKvLxYUItE6dvTJ1OWwmIZByauXZ_USBml4Vu3-fMTjz4wtjd25GjY26hyL51nodRW9obGXskmNZUBlFbYlqSgbsC7lSFlHLygLODjh8TEuLVwfYlV4qDUgOJw=w533-h1329-no?authuser=4'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://lh3.googleusercontent.com/ikb11S8aYR9bS3EqZKWLKU_3j355WPqjOe7WY78zYlfzZAbitvQIqo_Dk1CHRdPan2KGtkb3SpUcC8UMzJrGODXRoU6n14u7B3HW9uEVyKQ5RTGPIgrW0uKkpxZP6eXSinBnFP1SvmAyfR3nWyzlluXLHe1Ka9dWjEp9QbPBU_Q8QciKr2e4FEyHx4XhSZdPH1WZbuz7O6UEgQ6mC-RF8k00dA6kPgAuFBTVeQvmKO0nvma_u4Lph4MMlg142GnTJwZu9MvmAcu6GUs72I5j5uecdcDM60cWSyJLCgKI-irkhQsoXetgMLWnUtMD4WYW5EurSjJuRpT9YttnGByBBT78Pb9jF-S6fTgrfUG7rjBwWe0LIuVenvD4mWQeG4TT5YynYO5UTzWb6aYianJbt-TlS0hfeBoqAdnLOEyALsQHM29jTfGYkKZknCP_gODd9_7m_MICVfCDPNyF3GvHanvstQIGoC8-rsu7GvGfOuDUOcPA6EgQ31G-D9PGoCoQ2QfcHgogfjV-P4Z-MclPe-3PcD0QLzTbBtztIRTs-gdiYvee5Co47Wlv8hLoaYF7F-pRKA5RIJjSAk_0rim1_RCKiHm-8k59I1J3W9LjQeRST28ftkzdKo7AwqCen6qX-dywd1LU5NIUUYOgd2WC5GMh154h_lT-mTUY-pC_qrKew2lxa40cRg=w533-h1329-no?authuser=4'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://lh3.googleusercontent.com/ooxL17vqUngQzUAgHZcUvPczTDEI7FYL0N07F555hD6UvDIgSolzyNNeFm-2JWpu1ULwCOjlYvwrCkyXqec4bDvHvW-PN6myT0dt3wvJrM60W7liTwYb0_laYnDjg8Ro-659Ea-Mx8mqeBd5tysSdW1__N52FABV_5ioxvza0V-WofEPnOy4AI6MuC2-wKl6ZNQwBzj4PmIHoW3l8BfUen4-qP6MV4lQ-eMSoiA5J4y8yF1hSemY-od8Kbg2qI40__PGcZGY_79LFYNnOGy1Fir29yjTM3qGYba1QpN7Uw0r8mMAPy4cB4IzuIVPZ-RsfF-3tF_kE7ILqJN3NLhvk2DGjnAB8KMH-7iuz14NkvlAaJCybbTxm8qS30j1VfhnWc5w_Wv2At3arKJHTdhZuu2Yv7RE83G9UHOVMg9EKNgzNpeg5YU-7lZ5z1m0GYXuDWHwn0kP9-OwZE9e9yh6vYc00bgaOgF1JUWPIiIWMCdzNx7eHvF7hnwgQSLfcm50fqljyjXTHx51spXQOeMUPY4jpc1_94ZFGJM62_eApA9L2sZF9idDbgEOWcW_j1TmBLfd8UNz76O9UxudAzKK6VMr-1Wv4_4Bck-Yh0tqN-XVOeBsx9ne8EcW6chmVS4aWvA2BkEJtmz6Jj930a_0s7zvjNqAoZzm1SWoajkuGaD4ItJxjVvQ3w=w533-h1329-no?authuser=4'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://lh3.googleusercontent.com/8vdcGb4GEfF9nN1jUeC9JK674_SlkwLP3GNXa97rsYU6z79rI97WIWghQ3s5z3vgMSV-dP7RfBAD-_E7QGCHvOCiyFP_85CvTZeEGTFCk2SrvBQKOqIVGj-pdd6KfjAaGA3DN1odXe1VWSqzEVHq57MIgawEb4d4J9AyuQnYxTN4gEh5-jk_DOm7jHSC8N_nYgpTi7LgY3XAbcr8TDMUgyRHu1ouyIa6LPY9A7mtBbRH1HLXEu01XmMKuhTGeSfDI1QkvQX5-qFFIyEMNEkAdko9oFvO8JODBmR_C6tuHQNsI1XZTgFD0qXJL3dTM5UWgT1XLeK8cU7FyMX9RHik1csxQ8CC_zLOomipl9B0mKpWODB_UrmvvXHAFu18l4HtwUDkpiT4bdMTax8YqscBKdAWxxkkr-j3QtorfdIzGtG33F6ymZVn5qciT3HUxxstiM2hOxGOcAWHE7cr8VeChHF6Zv3esi9O-MtLKD51I9WPnSurgemCxilWRThrYiZF9S8mGvFRTkmavtcj2jZTj8RGArgaP8yl_8eD2-nCnI0ALrfPzo0GRSDsXTMd3-PxEg9KHolKtxgm5YT7vRfLpgtEgKSr94iEp5PvEodc1gws5IpMZDIb0RmSOVSxZWI7EB7sSOB3yCgiEX7JRTZP90ZqMHHGcgYrA5RgmnWOsWfpArdk8ziZ8g=w533-h1329-no?authuser=4'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/7z3thLr00NueHRbI5Wq__-blbDPTU41_4e6sMgr9o5K8tfz1SRPX33wgaoa8O3KslNUOas1CjyBrfgvGSwakF-nB4MgVkot3YG756YghKJ_UJ4rZCJPfW7-DppP76lqnhIZl9aFF5ozd0zPfIiMEIR0Vrn7jLG4XdRlychNOTwYxnsAa1JxV_c7_DoYtniNMjT3bBykTpVWpI_tWF7vQSWAm0hAYAyj-qsu5yVcIYB6OcenjW30UwkezWwgPEHw0DD0EVurHsMxHTspBz9bgevXIWVLErHt60CoSmb9NAOP27Pa7VNiou3vUjBaDJ23X7mIERUQ0yrJYGYuzkCdvqdO6LJvsP5T3fZW_8A-TJRdZe8KMRW_5Q5ni_yUFA5wBJ6V8zOesr2wT747JKZIC3TbFrAZOTaFY-e0OakUOdq0B5Kg9XlAxIZeOZoa0gwqiZ0NNJ9ffWYGYeRnFOybxfsC75UXgdzXs8gBCFAk20HCDHSydb4xBhdIOBm2UBXXbLQY11BFu32gUFbBxrsf1G4evA3W81UM_Mv8RmEC7PSiNsQE8bKfUJpeCnvk9vN15mkD5r25L5hMlOVK3IW-_fndK_JZusVGb1v-fFYsW-BKKUf37_q0JGcfoKXE8C6tbjonI1PKb3Tag9XRKs2u5LQsoBm4dbGrcMBKQr6tPP-Dg7RCyxFV8JQ=w533-h1329-no?authuser=4'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/IquUD1fUd_Cinncd0k2Ka12KVwX4-XhtBoGyZ5C9Lvb1qhoexBWiV5A3b1lXksM5J5I7ocPWdX-Uptl7Oh8Fa5ur_HssxGJcAalbCasWIGrVbCYgqv5mxYWqePXcyZ4vSdaDJBX0QN_D8mFJQoIQALheZKa9HsDGSiLLhTaNaU_ONlJFiUhBDoWt_FaAfRrEngupXkZTlNDCX7ONpZYedqOOwWcCyVTSnnzE9YaXbmxJxi92_1vze-6SkFWLXoR9GsvX3GQ9Fh2tIH8-hGMKoS7oCMy5LWmN4-55DCGSJnG0fkkzi-WnI_TY7vAiu5JXzkw-H3Fw6p6kcjErP-YZu4ukXPjWONdZwnp7xG0PGHclFIQ0auSto8BEgqy1DygnqdsPrRJLRxKl3aDmhSwWTfrulMFfZPlaOtGdqop9LMsHueZmsuJHfdSeANxAjDkRLSM3HKtO3l12UVDBoIoDEtrfDvH9cGrcZHo1vcdiMQRooXsfMBdRQHUkc95uVlB_gC5Lvgrkv-hkdasYzUfK3A_H3qfBPE8McGg1kzJ0fZhwtCx8u_DqAJIQM9r0O7TizCSAKmWJMGMOEn1tA3adziKmeENotkV8daIBF_ggwQAUgSkpwODJ_vew8C8KUONcNctz29VeruReio6AfuxQ3VildUv4_IZExoWN5xAuWAnMNa5Pbgkw5A=w533-h1329-no?authuser=4'
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
            mainImage:"https://lh3.googleusercontent.com/uxkIOArzLpgvnREWAGo1y9bcngwkq9vzQ_db6XR31xJS3rfr8QHCubafUc4DDls83qEkczt4ZxX0ls-Yz3Py6QFWlGhWxrnqrgO9Km6fiw2J2DiuSAK670OrRIRzd5QuYX-VgqyH3u4LWIcPFsOvJx76F2180apAzZMMmZ_14Lb1W5sDkwzStfBw8dZmffUvkWzggbub5YTJsQ5Fy5UJ1l-EkBIYyQQ0soApTkrSphhO-f58Gf_TSu3WkWagegHiyBvuGPaqzRtfIJJdPRobGLV1lKOd5HhryAhLhzLK8tpjRSTSThdlnRVzr6ma42jc8YH7b6L1ag-8yi5J2ahdqn3n3FQJdZhLBqrlXnSjlTwMduMwu1wwOSUMgz0pLc6SiufEaU_fM0VLkS2DsgeBdxT4quy8lD8GOcigmnxikO6WIrTon_iLaYC1rLxi1SNt-g4627_6jQ9UQNXw07LLICRLHCwUhcYUb9WEyeC3TlnuJ4dVlaxLUWP24NmoyizKXSFJ47VRoaBymecV1LrFNyP2Xy3X2otz2SCNs_hGJlewrnJj9uODk3qa242nPJh5GXJkub70z5evc2kIMWdS2bttuxVQNr5AmjoAlJoPyEAEx5V7s1YIz2PgeemzZKjSnzXMHJBcszp27kDKARY33przDr8voYPuYsr7PIsKE3_TFUZWySW1=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/bsiu0avkkuStQ8Cc-h_RJx6TeqxKFzb5Jz7ZNk8WimzoXcpdYphUjovKVFLc2yHAsYhRfixY0F68p6JtpXWgConYOkF4TgAaoczkUAfDit_42NdYDPlv3Aj5cwZbdiSbA7UFxGLfWP1DyEdMBtgKQIZ-5ofXu1fnnSGxiCEhXXZEUQzymDOANaiGt7CowtHzFMr727zJ77i4ChpZucfylMjOgQlJEeh3Ki58ObzRSxPd-lLkmNwQY7KLXLhipxXR7CZBlm7yCRPMV95HUb8jEyZNpiNwB9UOv6dWhaMIPpRvzayjJCEPPWzNOq6L7LRy5n28ube4bvgBbtASH5wEWDhgKMMfxI-DbpeRorpjgJVCCw_cgDCG2QhZdRG3UAA3Oi02yD7LKhc5ungX0bCEIooQQIqR7kfhVDpDAPv8TRQ1VXaux-hMjtw7kyCeGZCfNyCiOUqqqy59HqDPs_07ivchYZor6huQvS9TwE8RrG4ewYvNtUx8TsPZPNrTJbRq4R6EAYSqGqI_vx7ny_-FEF3D8fvQN5bfF6CaxQU0uOnvCJktG2lKKn0ywBuu25vjIMF8LVFGkIuj0AreUaHC5tyQII6kN7OWWRg5g9c1LvaU3N2Ct_W4tLCPe2FAc83dtBRMLNV3omfwQYp0nTDClvTQU4R5QAnOhm0U6Yvq5WQ1K9CW6H7q=w768-h620-no?authuser=4"
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
                img_src:'https://lh3.googleusercontent.com/BvqkqDvwN6ncZ4HAWTqpbFBxAYRs6K6xj0gI60HOb1_VbTnfuBKa8nroH-7qK1LjQh-gDbUr_3wcT82Hi6DDoOsHBfVkIJ0TzPkLJjJqbs5sx_3DxUBL4DEyyBgsDG6_19khVDP7NZn_EIxnbHvdN3mTi3VMgXLEYdI43XD3G81aTaBouQKF9dwwV-vnBmUSFitpWzJo8eMKCZe2-Ys468i7ijhxEhTwITi7a4NXLpuJw6L6_vN63EIqXHr9oCJZ1w-kJN5Aiv9oCqGUJ7fCbK89HBeDVauCotrd50VuZbXoYqp4LwZUrXMcNsERxFlbiyc3rZbd2G3Q9Mbxf9m39RmM_N0FQXz1EMI7XNkNB4SGGuLR6YoSXv8L73G2f_7-8IQq9EuNcHCDNLiPKv8ecAXM_6WL-WTafmqInorOUuE-WVus-uJ0ZgvWiug3OjNm3BI1eZkgCXSf0BBhOS3QeG0jzFZGEy2ZIyhzS7vlqG-xGDD0PSAD8_ergKTECe3rvjq8oJYXz-IrNQgSOFuS8Fm_t0sE2uoU9RIicfbsDdP1S_y9XP6o1dBG9epP_BxOI7EfGBuNalqPfM1Q87poxM-tr0FNF_d2B9qfXgsmbFVMUvhI1cmGkeL9Udel7uvhQPB8MaSG2qLFDw25_Jh0R8sMyoJNNEiAiolcxxFESTfEyem0XbPAjw=w768-h193-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/ZNBa5W6S8TMJ9wCqS4_fgnTInyrvZq3novpRg5P-dV1Bl3_6oL3p-LdBYhzD3CHBGEe18bTItTpg0joU5STvpUu8TNWwZT8_WjG8jNjfyZsywXSLbi8V1LGoIBEZ8BC900BYgX4JHEOV9e56xH5AwIqatA8AGJb-7da9YP1sHPOzzLM8JlsYFQUgoX59R_FzvL7AOGh4UCAPIqGekV4cghnZw833RQhB6vwm2bHmC_MjlqNhbQ78z1oLGhvYtAXtIU8QHXgikCUsz3Ad34Ykv7Q1X8JT4zWrRH_Kr25FUeZazo7WZ0yFM9_rEJeuDPxGUz-y-62Dgip91N4rulbwWPoAUtcxFJNoogi_shu0N8H2vDcp2EMfIEV3KrnYaL-xDX-2nFzuAvToe4VbrfxMz8LlYhhiFIAj37DecNaHyXAn6_C0g6MuDmAYKFyzyNFNgQUGIY4sN4WM9q_TMrtsSuKRJwOfXG_3vf7gbogs8jMKrHEEsqh3a05BgjpVODVt03cEpZzuy-ibZ0GPUoO5rZhp0Za1miXDwp34o1ox8IH3jQjg4XowXefSHH-IcCiEWTLmdVZOpZ5WcTZuXpkH3rvfduBzHzMHupft8itrqRUjT-jifgjBkYMNbJRFqaJAdrjCDcLHVDTisCxy65NbrLdQ2OYc6qVkkJhUr67KEEUBJmz80LKGTg=w768-h193-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/Y4s_NqmXmsZz1OWuUdr6BM6dUKLsgR-zIAixih77DLwijLedVKlX58b8-F90SX0Xd-AaltQSljK9bBQJtDxjlewRu-jbEUrUL5rWDwgQPlRVRaUdNG6Quu5Ny2jpVyB__Jebb9-2UlLijo-mG7MPkzVl06AlhInBK7yMc4AX970M4I0YpvXizwldKCiE_0RAl5ae5Fu-UoRwulU4hcjLXMmLPkkwOF8OyWznoC8LaHzeA7lbBE2Ibj0Zzp8DSZZBfvfSxthu4D7EHqvOkMHSt9x8kRswR1xW4-f7uJ6EjncOjgO9-uc_vOWGy85NggtZ_4lX2E54JG7XEAJIGU1DlHW5hV72j3lp23-gXuZRFIsPA5xDbkMrYpXwLWXxjwjIt0HY8_PIgnSHRygWOX8tDxfPK_DVK8t9MkbWTpjsA1eHazjZS39OYlSKpPSZh1RMQ8-W7hQlJ2U_fSoT2Y99oX1MYjI7pXIy_T9V77rf3rTfIsro9nV2CwENsZYq4fdkNwPzzKKi2bJT_CC3QO1YghOTzPEyYNcH1swWmDo_XpCImBR2ocWbUxa3h03KyCz0ZemV_opqipJYiTWPqBEBuXX9WPGxH6cjuf8Xd8tB34t7FfYjc1t-4mATQ-sFIqVjc6BmbvDsfC1P8HjCQYYZqsEN12k5RuMkry6HwVmMCGjqEV0H711vsQ=w768-h193-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/nDiYea57P7RiEojHqqSowckVfs1FpixrWI6RGdrkpkkkXfuRm59lpWSdP3UFdbk8uVZL7wl7-uoIwiREsyrCFmjo99b3yJDeDMtOeq6XWljU0560JadlJO3rnXG2CMyFGlS5x05VZ9ixhzD3BIVWpcbqf-ONHlu1VQxVTs2i48Y1NtZQuC7WLQUBJWuztqxKk3tFU7vlNWhqjfX8jGI_0-EJaDPmV9v7q8lVp0FCy4rvsdjWi8fMfZhxHWFyQEvcRZpYaN3T3SkYBigfAEYaaZZbOlJVgNJ8NWfwTs14x2FuLpIKj7tJxplNCG-PNZ4tbAo-NfCHzVZerRKcY8shvRFII86pXN6r44Xg6XP7lJRrYej6VgaEqXSLztzbklxkWgvM91HFhIG2g7ubcrdXKwGusYaN_5MOLaM5lR5IMq5CIg46YGqDL8ccNwW1_VqBn4hQQhoQqCajtCk4jwmxc6YZP9Gq_ik9SXYP1yoqSRT4bdJ4YZ6RZBwTWCgAqffVwhj4O2PYGlfKqkq-vk3K4u_Z9nzzXsjex9miJHcg6M_zUwZlTyuaE8JsNef2CD2tKWAaW5kg3a7hsuQL01ScaEwhCzlGNrZ02SXamoQLe9HxCpG93u-jOoT9JkLiLCDh5H2bb15DFKvX13aXHJg9fYoqs5DexeVBk6htiBqcf6IBZDVkhC2W9w=w768-h193-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/8z8qjJgvoeFLcMcv-fJ1i_ZUWx8x52hFn8ChGJz8Xx3oRFz-Auget3cQII6mkRvJE_1xu13teSTSk88mZ1PSc_Z8PcnRhoNLjkgG4VnRnOlmWPV3HzWk-fG4U-3By7doJl8xNvlvy6SpjJP9CQ4ctjHC0wjo4ElJzUmusexs13Irmj1BssiahUwlaRHLYRC7MQzLuZ_tNuBLkagQKZEVH91krfmuPT7TKtUt_2N4vWbg0MUXyNfI3kXqmg4vx5CRrtFxn-lG1z2YraDUE6ACs4rxesVVXOwFsyU-mOExuZTp0nH-AacxOeNaBEh2nizBWg_jGQXgq0meOrC3D2YPZr1MgC-gLGuh74Yt-zzqkSp3z4FutwXz7M-E5-g6J96hRugY7459sWlgtNuPt7zIW_t_zm09u-tzauGvxXGTTCrPnHZoluKsV_IHre-AGP70Wc4JZRba3trOkHsbZecjMh0Ow10jMXssj0sPV0uxLUE4463i-VegiRddKi0h5IjlQy6EyLRwTfg6Dd9srWrPFJuyxwRVcpiWNbnVHOSq2SiMlCdpWuQ5eoI5CiOBfuiC6_VVJdiPzf1ja4HXuzYPPYwnmMA2KMDrh-xbYq8UPUUAnuHAK0ayzXNkpULh1LwyFYevFbw-f1h9AW-JOCbZnxEM9CHpdRdPv_tX5svuul4p4y12xO8YFQ=w768-h193-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/WGCUikZWeLrRSo776I2ihdbBsrw5_TNVGSvuo1jSmLjs_Q1P3VvimNatLVqMwxTWCyXtkvdS_CiP3WrZqulEiu5bqKdwUyyn0V26xbmlIVvZL5sBv1ASHZb4ai1BuWLc_3ZMG03OuI99ZGLB3obrrpAzdgSq4GODKVMd0bPUbdUOo4t5w4CdN0DEJjrOWtLD9qPf4sWd3Joxlgrs9xJ-RWTx_SLJeC1WWRUnhJpTKJH07M95L0cw6loyl7FBO7H4JNOloJwkBQIq8hzvikZz6n-VFtmuKz3lTY8e8AqaxAULMPXipDYsi1UgIoHcgPCv44MU2m8Umw7Lk6HpfOTUqrvWm_88XuYKEQwavMkb1v-qJU62u8KyPiGLoKDL7wqsyWQJoqUrDRgDVupXZCBVZjdtic3M3SK5lmtIPUeB7YgfHqp6IIrEj2KndJhrajwthf3cWH9S6WicAJ9BhSHCapfHr7B8Yk_cqaV-YFP4dFRuKw_666MbD5QzaL25dNS03rPBYvm1eLphxQKM_WXmKwUDhMHp2sbP43i85L5NjZN6C5VPY-iaRD6KTN5ROps_CMgzm5xgK6IcOpFp5fmjx9NCdT3_vf2HndlQ2_5WdwNqZg82kPFVRCWbTRrIiEbnsFaOoKlttC81GZZhCYH1PCoEupM4OPCavNQE4gzl_5gttDqwbzGbsw=w768-h193-no?authuser=4'
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
            mainImage:"https://lh3.googleusercontent.com/0cXfbKoOr0XR0kiaeV3d3dZJycULJaAwLQnVCSXy9jeCxUJb5KT7pZKhGqscyv2f-qs7OXlLkrQlhZcBk-WckJAF94HugV__VI3fbyTFM5kNyz7hyqByPtDX5QKSHs5Vv8V__vZe2nqY5GpRyL-4OtBnEYymq099YBcP53g68hsGrUVjZR4Z422MpHySA_VvVR-5EE0hlwzJpp9ZcbqwFyqa11PV3P3w_N6TiQ9xJ0QXhQxZ1j80gO6n9F0nL7QCCU_6YfIcgiMFl9K5sspE8nhK83Rz4l0dZvzhgMlwuCNv41dywdqr_BP1eBY8PFrjVeeOG4Ein3qndXsMeLJIgTZYDivSq7vHI2TGsm3NS8_h1cTTh1L8yzpVefpFxlZFtcO0DLZsigDoaFoUGmnye9tLNOgI6eGjlm41a8p23QuXl27dFF-ROa-pxtOc3hnxQJ_T0HoOr4ErrUcW6LlTSpba9EdyEABJouk-ERbO1UVLcoSuX8ZNQPYWxZeoi5iQRDZrJ0s8VO6pWgUMTVNcb8RJtQGn5rQaE2hBTGyqV3Far6KUqEPv9Tr39FcXRnZ8H6XW2rDuL_fKZt8fR7bWorvFaJ6R4W24XmsuMsivdcputaAXZpgnE3E35S93P9_3NE2wqXVhgMCFu3fMeyaSLnkhosp5wcQMkBkH4m5bRS2_f6A-vExvDg=w239-h294-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/A59-zYaYA1E5P7RHXqM4m4CKCLyCKPt3ZRPVc7gawcU5_mXXYD_jZlwhssPB13pF2PUZWPcJgb4GIe9nboWQlNaeiv7XDdRz7zw8LNqsjX4FrW4lkNJgeAxnzz3xXY4teTjkWjWudD6kMWvCbh6Hs1H4_JNa0WsfOLqt0sw9aUqpYXKU1LzwQEEqKAo1wp9LfX4z81oodhVJGDSCL_GN0mTq4eiuhwFHZkwX8Si3REOKCEokmHJ6grafWkC8e-VyBa9YIZyjRaR4IA0WYQa8lFSmExOGjB39ra3AA5-gFOpRq7aWOTWMWsclcds5s-e0Cu1szoQlIdA4ZOKwNwasr29jNaNqOf9156-4tst_2fffQiYdv4I7SIm0sHcrlKdXB3KNc_vJHRhOCr7Dm7SRlN5QQqRzRWKVZtF7mGaYb4ye107qyu3_80YIxhX_rqlOxhFB_-Tn0fGkKnZlVPvlua1v3xTLhjro38KAP6sfvNMCs6-B5OSwMIp6IjbdbxigJ5vUh1USy0DrQ1N5XjNyufdQuVHNm5CxJ9PKUG6iiY2txE6jX96EUAHYHZBMSnZ7zrchYL7zAEh21I1eFp77NgFxY-Op12xzE0YqROS6uNskO8J1g7ZGsOwihRvovmia8GlKkixnACqSwHuiw2uGVGo9bFDRJ-r7urPO2vJEE8qSRN4qvnQA=w768-h620-no?authuser=4"
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
                img_src:'https://lh3.googleusercontent.com/6p3Bt-BaS9CYVQL8i0uhesqBeaup_csWi8tWrMHdEFBezNNbkjNwvzHeyg2Vi0GXzE5KwXENZBK-gePEPzImhRimHYv13pF7BkeUuASvHhJE7DAi7NH3fUuTjtWRHsJlKIsSkCH4qQ4tT6FSeUE7tLuofipfbCh-f4ANW2FreQNnb2ZTgJXtse5iqgNfoqWPD8b3TQePpX-_aYHy6d2aCnsb_uM1xcP_wgOZ7JSH-7ysm7OdeCdGShAHD9mmbTmHl5wbXFuNqsnJUd7_UhOJEFe7es49xclyU1lKipigV6XYCeu2E1WOFuCfvgyHqG1fyZY6KWAe9Kx3I3VfgmiO1FcRwhCb9QXHpeTLJG_ePwr4fikkZ4BolaCDEFxCYDoFRpA-wv_IXTHI4lg5-_zAo4fTeksiC9JqkUg-biFStrveC7Lni2lraCpAmY-kh3XHgTtmbvLjPS6WpwK_68fO6UbhjfSqh5HqeCWMdXPrkaorcBpvJ9J0nLf2StaJt05HRiJBNbJlhFgRKZCQZAO_1IpTynMZFrKu0lPTsNu18KFzt1dG4oXyMby1Dj5ElXr9w6i8tWPn466ktCmA01otcw2AS6eDfRIi_Q3JXNTuhHFV2hgqyGgqGAdRdQwAI9hYvUh0wHuezlJ6WhiJGtWJzXiUYJECEYJmoxCd0VJ9I0nMoiADN8zzOA=w768-h946-no?authuser=4'
            },
            {
                type: "밀크 커피",
                desc: ``,
                query: "milkCoffee",
                score_range:range(11, 14),
                img_src:'https://lh3.googleusercontent.com/3jjgWwOxvQ_srDhY3lw0X3FIY2XipnvOUBdEU08K-Wx-jhxNVJEsNhv6zSgY7HOTvnB3wkwefyje369M-xY_17_f6YWAaYTLvnMkDScA1eDNrOBZSIvGSzcqjiPZ3IDzUNuKStL3gjno0HmNi_pTkFz_mYMLgdZQuRohJv8i8BBI2nbI-vqXWs7vOlzW_pr0KmVM0AgFVtGaqalHovkT9x-53Hu-KfpUh1lGg79zSc_SH5Kp2LexdurM0avSDuHlRF46K4Pe0XM53nuptupoHpzUYNyK1G4SSEdSLVMyO_RIO3fczSEEPogRllNMNITkUeLzDTYnqBOdjiKk5N0tQ5pWx_Bhmy4rWimrYBYRI197rFma1oCaSIRcrAVz3cwOrjaR01yUl_2O44dwuFMP0rZFnvRnJ3zmxZu3BpfZSHbVAQlQ9MfZ-B4b0iIOnxkKIYLOdVlm_Y6cFqGQQR5E54KhchZVQAf9UcNvuglchVlU0bwcjSc_TOFFSQlcBx4dGSl5esCE2wnXPfSzHPsUuOx765Vu-3ZlJO7go-XuYSKPTkKhh9fwugHkqxbtw5TUoMvozIIYvAhz86ps8NjlHgx4yTytT3MN28Fm6IhkUaifGgGMfpxS_PCBH-Rley2YZfxschBybf1n_J0ITIMxKSF_wyWPzdQmNlnPGNpP0pUpb7ZDOWKD5w=w768-h946-no?authuser=4'
            },
            {
                type: "라떼",
                desc: ``,
                query: "latte",
                score_range:range(14, 20),
                img_src:'hhttps://lh3.googleusercontent.com/3H0Dh-dXAF05cxwcNd_JwEmc76-PsTg1hDLg1eUS5B0bwFoSnDdb6w0zOivlehIHnWKJsuqHQ_Fu51wyNMxKWUJMZOkmt1rK4LEewbj4BWuvOLmcncN9aEL9nU0nL2991u9GWhiXZaVkDJNLK71tupmoC5qFjmoSjup4iCbzn0seZ2uZP5_KeTtavKs5XD4cznoOKns1By2U-c-h0U-jTM5YZc_4m89W1OQosqO5iwq0csgwSbLKb85h-gPhhLOyhoTJT76mYrZsel7vWNLxxF1Ck-qFN_23Cu2wTft0k1LqcdOuQEaQLqMNBBZ3oAMkzuISleh_y2JO-Z6g04VW_9GAd5XRGv4onCnUOrSp2jsdw8hgn2hyNY1Xkw9gPIuVo2xoA98y7kDVyLwXsqZVJQPWOFCDj3RUJ7ZT_Ld8dhigYodQi9miFuWZS2nOU_qj2Mo1PjJuMj5XPVXrPb0NNnoUdLVmasuypy4gckzVpQB_wg43autMRJgBaUh6JMDVvA88ZsTLbkjmL74PO432l0luvR-mnMoiMc8KS-07Rcbh4KmMjqV3Pm6QSTSE4GGbT29mJsmWDWLr2Yg82Wykmml9NO6iWZ1zTfIaWOMmupe-Wj7bXkXoXkpFywITZxrnxjmAff-yG-fPmDtpAIWuKp5pDByDnPBq-xESOGfgt_wDdI5Ddau8sg=w768-h946-no?authuser=4'
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
            mainImage:"https://lh3.googleusercontent.com/sQnPtZaWB70l2h6JAX0puGMlC23viYh06GJo6uvpg0dmEEBu2RWQH01Ew98_IAWOkMLGviFxU6rDHHqwyYrBRlspNjlX3E4WJfg6_OuhsqYnilmUqjcm7ez79BB0zsk1veD0_wNHqIpy4FoglxpnIkYYhHIQP_AtxfiuzdhEGwiZKgthO04aG7UTK71feXs0eOEya-_8PiI_8BsTvGB5ck8ySFONIt3dZ8xWT_4MzWaUdr2MS3eZAkgKC1__wIxrQmqCwLd1ZY1zVGJREsGODikAbv5r6AQ5N37kGLMDUYak_YqvJnskDlje7MwJH75OjmkMasNGblSabk6R6fA4Dsm42nSvyvrop2GQf59-bGEmLX_cbsr4jjOwpqaZIeZyoOv4A6mSb3XKhM2UzsY1roZfdCAtQRVIrOauD2pMpnSA5rcCSAQy0Ezcg1wIdw5H2ldlX1aS0O6KI4QOJlxhV6F8Bm-vDaFt-lrXy_XFV73qno3eIaMbcwTjrAITzCF-aMBu0_ql-cCpEi-SCdj5n6RxLv6fFeISQ-6SNCeoo0LVRpRHRgm9ZTVt10kgsJKpDKsOxmUPnf1IVP44OZjGfvl3oeK3QoYs4sN91lzc4G6M1NqyR2uIgJLxl2e8BqwDAbfxtAz0IS_gflcJmGji6fcaArtAMZng72vXRcia3JFVBEQVBl3n=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/EU5u9GMoSk1H13X04ZlcFmH4yFoUvKRRijS-nkh2ERWA-zTzpKmCs4APQHr_rkBLEd4OLVG6nJ_1Dm3cqz0hZ1c7hfhcstzduWplZtyqf_PagyNAndChxjOopE8UDuSS9Ecnbc1_ckEzpk0FKRwq0imnlVPPcHhLYSJj9D4Ctt_IfAG1I6aErCEZ-1O0rK0tlQCYRIeeQdsgp4TUZsGZblf1cfaukkapiuEt4d6vTpKAcS6i-xGRo0KFok21PB_rCKS5q4MvibrfFa9AXSMJfzh9ik6Xs3wxwsGzmYKlHEfpyZukYVVaA9f_poK_djqjrGjTtcUp_x2IU8GAWteJPYmBgK1budtyB5VDmSduPHNCeuxTkvQ9nPj86vdRGLiWA-23ICweirQSAYKSKn0cagng3dBYqbUuDOxlC-8zBrlPmylvqhuRNktqUufVjWNvbecwYuTNBxxiVyCJWJ_PxkMw5ZjPqyCkuKYD15B0nTegOb_mTnlfzGGQyByJwujO-CRy_nnHDFcASWy84mtVSQufScCnCqCV9m99Cxa-LJdMgh4eO3rA3MTExpQufQlqPxIg_shWMqyjUA1koBrTHKPB2vO-7CYW-e8rQ-lTHNaj7O8Elp7lSIqxEckuXfQj0u5tYdskBlPspNmLaSS508zcdCUWmil6ZE49bJoFz0TwMFRUqtwm=w768-h620-no?authuser=4"
        },
        questions:[
            {
                question: 'whosFault-0',
                answers:[
                    {
                        type: "whosFault-0",
                        score: 0,
                        content: 'https://lh3.googleusercontent.com/RiWsMpLO2Yir3Qmi74OWdLErSvTonPQ90zilaGpZlWZ2eeEZwOwdSi3q8O2Wytn7R1zn8MrbUA7YjrqtYclK3BFN5wbayO2a6FD6twpv5rmJ8rXymtosTDwaPZEJjAkH0OG8woQ7v37nmQbZ4CAJ9D_K0AZxPs7RH4_EbJLihUulHIOGpJ-kwFLSnxSncBgaOlhf2DE4f7Qg8_7k7XJAD3QnOKH5i7e3uz5KdCJqx1hMEGnHYoP0NNERzOU1z2ARS8oP9rFBK4okZy4TaKsgEpFZXD3Nzlt_-3yr6jZo9wQo8j3ritqVq-9ynePK1BqHvfLBWIY8AE7jGo5BxOiHnt_mkO5vNBJKY7wKOwZKtEs27sPDfjecwZodfdEYo0IfjgKgV5khIUnUuL18coDBmLy4tS_EUDB8tOAzmufG-7Cz4UC67H1J4tbAs7zIJBWnFaNZKDkkFPLL6HRdDhMejYwCB1B0i0UpxEuQCFxdNB--If6FrUpUL_fzNGigHY5By5VmLPBcpuJHBcxBMsGGqxTTsGcFRLyiE1JFAf_98pSwppnmxBkRcWjJg4BTdccvuIBBChIb14BDGjmkev1NI4NAJTGG8MfyN7Aec7ND4C9KHWGEUjgGkKNwC69uiU828RahdQqw9J4xP4XZuwBuUtt_qCeBmnJ1JAe91p9ROFIa_ecG2CBMYQ=w1188-h1000-no?authuser=4'
                    }
                ]
            },
            {
                question: "whosFault-1",
                answers:[
                    {
                        type: "whosFault-1",
                        score: 0,
                        content: "https://lh3.googleusercontent.com/2rRuzxorWBZP9eN4uJsq9Z-SQnF5xjahf4dyk8OiingudEKzsqt8EfTrdoZv7MRrj4PSwa46dmEVKpj3tzCHRtkdpD7Ts__QxYMJBZVIfDQZ_NvMScd3xKYajjgLhktMe5HeKnmeTdrW8-lzUOnvOSazSZnlkdwHPBK33JUaNpnrucXoOCuCiBtCm8BFOjfiAH6jNDgP6bWcqNPkp5Py9IUCa72ZtN3Iv4tsUwwlr06Wv589qium_3QqxtFlO4udbbEX-eqwaPWZYIHQs3gLLWq6FwIxrOELd4ghDlOo1WRJAQiJ6jAhXAbTGAkTWEt23QNpF1SLewbPwyQf6iB01xhq-lQVV4ZLq4d_Lpzx1B5vPdUYlffjuIcCr_zG6bGTo9xEVlIEkJk_q3Mpu-8YqcHSHYccNuv8k_BGS0Hru4vjitQ5t3F7RSc-EiQ62abotxLd86c2gMZ6vAmtNXLv1iV3xtrFHnmx0Hd1cjO-fQTzomQp0MXVlGIVrGU0lR-KeTLU8aA4bp6AsgL1LB_FUt60bEj9DhcWYl0kFYqO31YSGu9LzAiLNPtEiclro0a1OiequCcvasE-71-WENdyoQhKsuy1okYtVbPiB4Qw-q1Fov6g62osgW1nODzh1Yfo4CRt7LAYCrWINzdAe8MQmOElJmTVxPUlQFsIZhKylGn5COCfHgD9ag=w1188-h1000-no?authuser=4"
                    }
                ]
            },
            {
                question: "whosFault-2",
                answers:[
                    {
                        type: "whosFault-2",
                        score: 0,
                        content: "https://lh3.googleusercontent.com/-avVX3EiVGiJ4CxxgnBinBhHdc-okazLHspKEbORPUOO7i748ItqN3WC5QXCT-j0TWrT5Ri1AoIsXK_AF5ouxw04SoOlXFotDzVvp8yHW1kLwcIsUF5Hw28bHgnUCRdmvKaYLgdKF2KZurZOFdT9jFdEmo4H0t8yX8wZQVZWGhd_wy8CfXnbx2qDjTVoZnpZbpcLEkog0-Cv11cWYVd5plNlDhHkB0cVVRZ-6A-g6TC2OxpVIJDVas0fnlTjPCBEXBYsEpYfH3XWRHVOI1fPgwqX8fjpAeb5ZJhu4C5_O3HIMU3ze4Nfn02xDSNadY3rTBiBs1yb8XDR4I1jx5hUsBxMJwMNRq6vm_eQj3GPegXqMZUGavzIU9-QovkU12U7QwBHfz58L8fKFIw1_Y9tA75AYBCvB5mhExv_2r7QfaUyLwFqA3Q-HqRus6kHfbprMZodZDLhkbyJNQHKwYjRCJnntuBvwl7M9hJLdBNRyDa_GFf-LyGMTdBD35i2m376E-asb_qHTYR1rkYkY2BKLC7peyhCi4vUquVeLACzDOabCZ9MQPmjyzypk6ttMKQT8VzAr7cTCq6pmBIELl0r4islPQZhpgRx3kFw3vp1sqxiTe9hWFUP9-tUReueKDEXi8HV1Ag72oWfuYP2zh2L2ZW6MQ799FBpmwv-CWailZRSD3XhJMY5Wg=w1188-h1000-no?authuser=4"
                    }
                ]
            },
            {
                question: "whosFault-3",
                answers:[
                    {
                        type: "whosFault-3",
                        score: 0,
                        content: "https://lh3.googleusercontent.com/H3jPQYprTkuhsji1HBa5MpyDynXCDFYTTvV8L_9iwxtfJPfh6SbLsy2pLynoOA8JIa_C6FG8j2ZTPXmnftQ-5utOh4QyWlP9W8nx5vv2YfLFmhzYB2n72U0goEV4lxj4sYbNtteB20FW3eRm4cRclS5AOH3ndJswbpsUHiNNR1GWbDPvQ-L5wUU7FD1Ydz0ku7_9HRKPds7XJYZT8eJtAtUD75xMV2815m6_G4GFcMYLuYxBqrVmb9Hip9kWuJloCNguLAAfbr16D0Z8Nkh3aRxmolJdzgLkb7Rd2ob_8am5_j43nrR9AqOPRu6V_ghoke9TdJmP89-QNcjAugxekEw76p23Cvm1kwLTdhuDjE-Kni2RkJhwgmXy_ZbpSGhlEIuuaigbXEpZyThUJQZKtefwBg6qQA4lnuOapm7tUyNH6Ky-QWfGyW-qSFoqXdMr1PFwkrOPq3x0FAO2Sbh-ZixS_Aqp5IhpwauKUGutLqnR_IITWWFQzMp7nrPLaRAGsqPbdxUsqdwfpYvm6oU0Pt7B7UxJhAKCH6AqJsfPTOUyjbQeeQ-nFeMe7eV2DPtavI-QxkqCVaFe1rqr5kk4n29IxzAgccnXBlmj_ixf0IxRz28AJ8PEre1-aWa7mto6c0WHd-JXC5y_vvz9NSZxqYkg6CkjT2ElOHVx_4Z5dgX3p9iwfaipzg=w1188-h1000-no?authuser=4"
                    }
                ]
            },
            {
                question: "whosFault-4",
                answers:[
                    {
                        type: "whosFault-4",
                        score: 0,
                        content: 'https://lh3.googleusercontent.com/FJYcBD92o3VrL1VQtzepbcbOaSPYW2208giUKr2uLZBuMAspaN9cVR_e-Zmc6g0jJORY4Yo31fXYdsKFgAJuytCdnqMSXS-IxGWRr8L4plXEvp7zXmq8O8Dc7AIfGpNdIhCQZXZYVOIBFPNwYEG3JHZX3b2bnbehi7zcZMiR0TmNOcsApd4zztuE0saf_ZiQ3-LDJis7jZeEG9hKRpufLwop6U34tI6OSlaTW76ZzZzRhgrEVSyDnIoYCQWaZIr1YCzA7SFO679FVF_iTcCg8BjJCrsvDsq9WCjXi3bi4YMrAjq8ypDWfEU-P_A6GgGvvUWMrMy1wRxab66BVLyR6Z-mT6PWzFcH-u-G_rOMYbuy-B2yvyGiOpkxAXlldIlP6u0HMi40sr3bBMuGjo43Q0nXglUIPi5TtgtOnBRweTcUoVUJLzUoz3Bz1UME37g9Yw1nd1_RXQKYP7n4cFtbmHUHIGDwc6_hAKRGsyx7BFJCST1X2-SDi6Rbrdg021Bi3JwMrrjktyj2hAGUPWi-4LUFk-ZORwpa3ZcEAkbEqZ2TjLkBByHWRaiN6ecQKdlnSHo62kDAPNEgHd6FOr0qfHp6hacHiw7xqbIt5tsruJPFQe1XIJL2_-l-MeNlL4P-S0bah9Fegmxyx6LSP1NmcNeieqhxpqaynQHGU9ICLsn_4QWphIiZuA=w1188-h1000-no?authuser=4'
                    }
                ]
            },
            {
                question: "whosFault-5",
                answers:[
                    {
                        type: "whosFault-5",
                        score: 0,
                        content: "https://lh3.googleusercontent.com/X5tGm3Oj54d-DnEVCmv18M-SmaLvQfi1PrUJM081lxIWX5c5Kqpq4qF8SUz2Awqp3Ctw0ORDlML9Vh0YGsu4mnL8P7_bK5QOdlYdIcHqmjpuTqIoTjdx0DbIbW482qt2wS-jYwFIt79EKyl4MR60HhqmhaYUOwEtsMDpOQcK_W1JuPHWCGGIRIDwYKlfgM5f51rEtJEOmS9GHdVenipjhmK3JfulLOoBuv21kHqKltyYQqqfjA-onCOg3aMYACH-II-LqAEWl6zLidf35p34hUb0eeeqFZlrUF_TXTd4achFDZml_AXAHzr3QHNKXWajnTRCwwsRfzYyf8v9_J3FKlzDIajZi4Q6Ac4IwsGh3PcX9Jfyt_UjH_AHvJdGX5PU7BT6MyJmDwbaIfdJfInUnCx2D0JAyvjttTE4Xq7WiEs0XbzbDl_tglHRmt0ELC-2KnR2nG8LsyCFuZMurjutkkM1Da5Z-PvCHs8kioDOf9x-2adTJ8AEtCuYd_hD3Qrtw12Fz2iBJjW8KONUJDjZGCI9Fdc7YchdEH8Q-VP_PX8LMidpOEf5JoJo1NGMPzFPL2-udOHrCiHSYR-HJbJFdd_0zvNp3RJW2GRGx2Nr2HtCRsOYR7_OyZ0iCZlAU-aYFGRp6A0Psvc0sMxMOZuvcHc7G31bQTO1LaVxBy3CrFnvUpceyBj7vQ=w1188-h1000-no?authuser=4"
                    }
                ]
            },
            {
                question: "whosFault-6",
                answers:[
                    {
                        type: "whosFault-6",
                        score: 0,
                        content: "https://lh3.googleusercontent.com/JQ1EJUQUOazgG9BwimDfia0rNko94TuIZ9Oe8cdgH_iICPNZAmgMBcKlb8Oc-5UgHgB2e-l9WDyzcot6Xiea06rzHbljwwT9q0v4S8GzfsrukNINCu2caG750GEgW_b5Fh9DKLR38mxgJPKZIvFsUKuAbyQ8kv4sAvG7Q6VJqAiLCFgxpgjcCPsA3kSYL97Nw8lEsBcB6h5lRHjsB_dICNCDBoudZR9TrNqaesL_fohxNx7Jj57l7r4WEYvl1Ii_Vg7rWQh-cF1SSbuPtiFRXGvVLoZC01_tq8J2BwbeEzFzBREj2sUdquMfWHoBm-Bef7-l-t9h4z_1iIFRj5rWtsTOCIJIWDPN-iM3FQcZ0MvUf-Rg-A_WT4BhfNsS_13V3XAzZWSMGQKpiOKwf_hAgrFSJHh0hT2cRhp9uplA85VhSzf49oE_-WYNmCraaNWGOZDLQsfgAaw_MNKZFP-dxKtcZ2jBmOYWlrcTpeMVA1gd3ttSIHGuLQ0cs0Z98b1CwrM3xvU4SxZLkrnHWRYlPsIHhtFSHZM9QoxtXJKMWiOfT5S9Ug1SftV_xp-gz6Uf0GrnLwiA28GIoOE5fIq3N7kvlVF7HqtMrt1ZYd_Jn15ZRGLbyR142rClLxGLyS1Zngiadk0L3J6pUSYhW2dWywPq1o4jpH9G9xPhZM0iky2XIR3EWyQLtg=w1188-h1000-no?authuser=4"
                    }
                ]
            },
            {
                question: "whosFault-7",
                answers:[
                    {
                        type: "whosFault-7",
                        score: 0,
                        content: "https://lh3.googleusercontent.com/EgL3SFcxCYw8qPYzt_GoGFuB6f435jyja79P3PHM9Fj85wAV7zwv5NeUJZLgZNQmCoKTqs5vh75Sq8yCBWteKEi9qlvd94Zs750zo2fOi99Kb_XmHkxSkHOp5bq5wZyzPZ3kVzlYxlfMA-FRZu2Im5PC2qewC-oejkETMcKWuAW3_4zfxpfdt_0cOBIbUsyJPvJ9ezB63v7bBoRBnaYOe0qu-qmFLaBCzmEYR1owGAAYOsA4qnHYKeweWRP3K86qNcT4JD1W5N-ei8cl0aaS6VghheLyMqCfhVVNjBNkSjzcCUuyL6l8KpmZ0wtE_GP6pdeL0nFl3ey1NBGOYz87AbwJjMwWDFqMJ3chswR1Qw-USyhRP3EF5SSemO5uHL3Bx90Ezej1vnzifiVuPwHBIi1o0fMHV6mc_q5JS9X0mYnugqXYQZIwD0j1aeR8Fhtcobe1aESVsGCVXw2PKJdhFegG90tVaCYZi_vghhEjiq6VtLL_nqxyuNJADBRTRDU-YOJIcWR-vupc2sa6zz9P9aOAdSEUOxW08esRf_CmSyTKgooiDfZUlAksJRMUdRAC9FKrajjVripcHODWFAxA5ZVTWAJ7Vve4IfcMVpTZh6PkxltyGcTXA53nsYKypykGzxm6WkICNU87zIEyFEwiJ-Cx4mfVkrg7c8q4cdjZ35WV18FAAsxsmw=w1188-h1000-no?authuser=4"
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
            mainImage:"https://lh3.googleusercontent.com/ZuFwB1htqgt-z9j-u-2l09MeXugXX5AMsaY78h4ELgWj7Tzc7q4akUruwOjbQmIuCdbV9vStff8Zf7viEwV43ojrDX9JT-SRWSSOp2XZOEy4kffiFCW6TQRMDSmhe4TKY6shjK_0cVs03f6Sr5er352Dc6NzK_sC6pSqbXB8hmTYStNFuCQiMuumMhoAlymtFXyGMuYT-NooIEdrZV6p4Cpwl7F4eIbq1m9mOkiqmmL5vmtyT5Cj2nuEkt3ROs84eNC3GQdDcZKJ1wgrGiblindXHW9XBq9ZaUApkiQVfHep04JiB1Oam6b1AvxoPC91z6Mqx8KuuyuL9Qgt_CcsImw_5Jh0TKPlElfTO3yDrKjiaw0dUOdqd4PxIU_Zh7tWx6hV_JPb9NY9PkWbO-ZY1ehfpo1rHfDUMcR6f-1dIUNpbWPxi7du3JBK3cVgYV3u39bPANmF323th9-HWn8kAeuwmaoETdnGiRZJ_4uGdm2O8_mgNfZGORI5lV80gWnOhvol-ViYOVD-0jxxfQ_KkUHDncCEf9abmViA-wnt2ZbD8KQ3ia6tjyudqCJHdWR9vPn5f8XTn3ytdM6UIxCfLmHc_uaI7HCOWDwSj2erE1r7tNL4QJPUwCM4VBPxBpUdZqHg8DjgtsTeBlj-UUn_pfEcQ-ZYmEqPbn2dKr3175xyj7QX1fp9=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/kE8xQGW8Q_kxBMbKbpi71TXSJjftuZ3oUdJJ3ZY2UpXApIhkqfYL2Ov_dGP6CQ6hO1qhbUlh-oIU5X0ocPJrEuA4b-IWEA1T3Zq8kNZrqBYOq8h4TudttSvOHkdQn04YC9CYIPkfkFhaao1lLvyUaj1WjIDlIdZcVIZLaafQPYJpXJGjAxyD-RlaqHQBQhyl6GuPtSWYsSu5S_4i6M5wlvD1aaf_pkJB7wD_GO1a1TR_vDYpUKOvMxT4HQJP1FjKtHC_VIdaBEx14TLx9WrKZZNDik81iRTa8dLqLFNyXkUg70pFhmBI0IX56oKBKBBh-U2BBFuDPHBqWkOYXkBPyOfhD68WehGWNihzyP9BANtG-ken6XWSvsdNJCPIKb0xRgwq-bgejYUYSx_nJrtvvqBWvYnPfLxeJrS7PoLc2R7zCMv4jnEH49aBTjXx7Lp0JsYdPeMFOxwnP43JpM0uOi_ItchutMRksMWR1sgQgwNAe_436hIU2IqhKpmdnqIITdYgc7sBfJP1N-EZQEMEEj0LhPA6C41l_9bJJ5jBN3rl9wlpySeeYwGQyywctkVdVG67dWX39Oy4nOr6Y75TV97AUWyMDjZ3P6urnZOSOh_53kUbZS627iqx8fu1p3xWJ_QRBCHs5towsQFmj95OBc3NmMrNu_fCkNP1DciFL_EzUBsQhnGG=w768-h620-no?authuser=4"
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
                img_src:'https://lh3.googleusercontent.com/CqY4ILfoWGaeSy5vjobjaJ1UoLRnNQqYClLeB6l9-CyB-cWPHgtrA45dIuQLw8ce3psYHEO1dptpN6o0wGBYx4t2itDDtR6fyfNSBmXLqMfANVxwBC9_a08a3boWJ0-l1vqRR1zwoGHSbT0dEXbzR9V1WZoL8sgSsM_SindjWgpZbSOd1IdUdLdyMIlnCDq2dR9n13bFibUxrGuDJgqXxEb5Jf_rjKhH7h7jI60hZ2W043_b7CDSdvokzjkeS5_UpAFc0iRMZUgWOMDizf0KROrQvP_woiQhNPzhBX3iFKEJqmYTtDO5M5M5DE_QSLjStpdBIKoRgyll7bdE5-0WLEVxAFVBWrGbWej-D-zaKnuuLUFdai8goqwQWxd8ZNdZz8Q5lOZc-QDWXdhZ2b75y8ZExeFPxZOgd21s94dRwAfEYmCe3P1RItkBhbc8By8j2xAJY3rco1xuU0XKj2SHOp7037MGed3r_jcXr7DXhFz1ZzzQfGH-O_sKeuxnzhU9ks2A5_jsDKuZqtmusCMbUo2tYkZjx7PKf9R-ehfPpKwnO-KZpCGXXcY2rl7qOCBlh3u_qq1ZEFg96f5YYaSMNtN7QPo84yy8f6OOumMVDTzcOVLHkkkAazgZbiCnmDruX80DDBc-VcOd8CyCqfhRSn7RymfwXN6_B1PFnMLL5WupiFOQ1pj5=w1000-h397-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/V4HsxriGlvm-scnFg4VyFav6MMD96xgsBzLcV0PLTzk43PGRaCagpjEfy4FDLhYvNxnWRQWvoTrq8tlEeen70Kmabb8GLyFLecovVJy8teUF1jjSUSgqwK4sPkeHpcM2GnJxKNoWGZ0ixbd4DwvANeA7bI1OCleYkBFkvrhj_IvWhWVp7sHbo6JbKXInt0z79pPFRJoECrOCmBWz3komsCWEOtM9z5mkk3v5ecTfU-X3_KpBmiBxlbjoapiWab4XYaFa3wGLI1C6SWj-pBE0Up0D27bfqbmIf_O-j5D1GetoaBpv3WcUeV8AgJ6FYAGwdSOgfVlXz-O0D18O5as8ufh071CqyIuHWUupSKF9aqQfdzZTd7EaARgSF58hLyMF1KWfDwEFTljYvAHyKg8h82sifbFJRwe5_-UvN9xfoIL7NnaFB2DoXFakOo7xNMx7IYoZ7R2XoWRBJy2dV4VG3EtRXWaCYS3gagd42pLmg5uQHthqlQab02mZ2HGz-2rwb9DALxXTPmlKSpU4r5LQa46W2hjJ6VNfKTc1WJ0YFFqQvHCI7ckA08HXtxJxUj8_L4LLeAzDy6aM47Buc1T8rhAvJvzomHvQ33VLsujm670bG1Auwf_rCEfWGXfukDCuMrOwmiKvDmloNSUpHh0tCUCdqTVsZXKg7u50L4uSORL2F5p41d1r=w1000-h397-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/fQnVKCj9h1tOrfSSIU_LuWq7yGgMjywJFqYf6vBNwOYUj9xIMFeU0AKdBUljOgdeNxXfNLA87JSuv-rYW9lp1XSeDG08ezqQLNKi6_0iQEppENV3PYqqCMKAlfxCTmnR9mT09EIqZpTv-shTeCI6gzw8M7ZdRWLk110xEfo6kroezcmyNkW2SrLx1ZphoTq7oS3nSXXrs3mqDAl_ETJe_fSrAy4he9oC4RaWbReV3kwVaGXfq1v0CGzloDyP2spUiXJ5ZMQ0sJvITQNmAqx0BW3ciAaDFhK9gkY544vtLj4SpgQvHaBEjlWJXFMNfM3wAS77ARrxJVNstKGiKIKMFnJNI4oIvSRCLSvAwCYoWPMMjPo5rcS2u6zAw9_4X8YpfuuxGsMRhJY9zCpxB9uO5Ned7MN7myORF8pMDTOzSrlESfzTr9BEZjlMdhJiVwzkLOyME6j6zCn0bsJh9TxIl4Ve2qSPWx21Aqt4dFOz4sjZBnrMvs25H7JH1kVJLTaX9NCLWub9_jBT7xc4ketCFoNWUDsye0CmnNiu8WIdqHrVAdP-qPubiJuB2hIL7wLoMajH0QYDcYvJvkej0IWRPkG-haHgPwj_lmwrzCqqvD2BQSiez7ZcxSOSUpaT_XmBeABL_uX8ztrmfH2M8KZ6SysORSURUepqLyGZpmadknl1lF2yd80S=w1000-h397-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/Ywezwc4pOd1PESfH0stNASGIEl-fpoDDnC8NqFtgt5DWYuQMfLMSvg8Ul0HxvLi35yrvcl44476_sv2quCSlx7z6g0cpB5jxCIF9zpnfPFZUb7_NVxTj9e6tEuemihWZfE-kImT6DCkRGBl6EnOhVE5D8nzpYP-S3kd4jX5HTwO7fsXGtlejPp8-Xc_ew9Ltt1n7XSttIoAeDmMAMG98WpwN-Gr35hAavCf8ZK6c4UMNzWp6nOUaoamhEzrWzXlLzbMw7jXmyuGppVAo6J5GrpkofXtBdtRufOdOkArBfo3OLqZtRRCy6iRKQsgge8YdIrizwrJzhSnpH-i0K0c4p_bFatfDxCHmhqNE-GCTQ0T4W1KnT11n6Prr4GJPR7XQat72yWxd2PmqIQk6d3Pzpzh8sYpRm_OFbB0yjLHgfQBPjnnQyFjDhHatiE1r2W0ky5lFO0XFRMHTy7YCocBNhlPsPX1mEBU59S-_NfpsGEjxG-a43ffrp8qFmIsZJPsod0wzUMhUolyCvwtmwxBA2BxA9RPTriGfAveXSWktRZyI3PZzoChzoigjsPSx2vNiANZEd_4yNN70EHqKotLmPpNjKID-eeuGzuHMCeVtjhOTQQLAsCWqbXgZaXQ18joaDMKhNst1vFnGqfmmYOYBS7-OvLRj7tUAuG4vyb2BUlhbSz1x4dVl=w1000-h397-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/7BK5TDdCew1O1ZxI339OWWWUmHanUPxTTICpBg2JG2O_VcYfuWxMK-eMwAKK7cNzNJBT_K5PfsSUzH2ZitBxlFwnI523ipLYneEdUTJHa-MUoAcZPkQy4bDaZyZe4qcAILXQhHXygYYCL-foR9a1wcAaz17HPOwCIFa5KgRrvu0p9oBoHz5Dud81JCyUGw87tvpohZ5gHQXNwv1Uo8SZpcBelMhO9oIl3zyiq-WzMpRxGBIaLFv5XWWMCfUpde5gKqTxBV4QRpetxi1LpDW-rGG2eeKpgg28nOERoGmx5Q5I3HgjErKpC-dkEXCLIXBV_U5OjWt69SUaK5PTU6Q3dk5Uu-XhgTNGEKdUK3806x1TdafNuZlPW_iLY-8EuJ4TO-oDIpCDIi8nWrUF3Xvt9EyOgchfIBNRTg-G6tIkGQMxfPatgQK0lM0e5Aoh09aSOa6rLpUK0Iz5IGkCnlpm8s75EpSgkPracBm-jy786IDW92sUIjRxy0sJoKFD8OU4INhuGotbmciHPu9dNW9wRs9BNnbBzKc4M49-PHvq14ojt7Nr9QtuO31M5Pgq2rFxxt5ixa9P7Nrw1_KJM7tt45W3qlIsfqdBrTu6ENKN0Bu4BC7j1Tw0MFhFUXfciBuVzkLqhQfHA8RqeO6nPUSj7fkJcSkCyR-57j8KA-mb00DrJWsfD9Z0=w1000-h397-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/beIvbyfwC4JCqCbEak4WghWuEvEloJ_kUGlgb5hKxXaSpJQDlHHx03FDCB9Ulpc9fqcwMpwAmMPDKBigpJrbSU611D8GHjR5m-dQd6ob3SSl7HZmswGCB-zysYDn0qcuoPN26OtjHurZmSKu2BE8z3Llo4cmlmIy04Y6V8Z9TDFeE7jr0oOv1ansRteMkF94oSPMa8cvG502IxLagrCCV7BFMzz6LGLVyKctan2vLIEEql8zVdI_GDiU0tEGVoTTWOK0jf9Q2DjTQryqcO0XvfaUoNKYpM_syAD29SWyFp_Fkhq_NzoUzBqbd3iYJWQK2JSB8X49a4Br_eyUL4M218We6u_T1NJr0zqOO1mk8kBkFjShDmqHlTeZ6OdLCqsdZGZKuJU3gZV65geSkS98kwcJb3-qtTRSr95KRMjkWBeUPnYnB88v_pk--XjXQlqowOUY9QiTarffsVL9t9xzd3zwTELVcB7XG2HDif-IR2RTayQuase93qchwgfZP5ohAELCADGhBYENfvmoUX7amen809VKj356P7wyFdmKEqBtwR_2LANO1_wo3vZgKUffXqO1q2LXPz047gYjm8f5nF2xAjuIuO7frzjbceB6rSFw1H-v4gUWH3SxbAd76d4Knon1re0gGDsxMoavpdU87n-r5NUgw5Id1yWna79T6cQlXKGkevNj=w1000-h397-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/qsS7ZgbN3nc-npTwShcgRhZ3OvEwPEvrBMBTRdleaseR5k6D6j4ywY4qmAWiIe2hk0zBmlVjQiYPitbYKAXHBJF8Ou1xc29_Kyl3C5LoOezcVP4BdRvf_uk5NVfgzJOldKuOQDxKeEr1jrQAFDWBAR6MW6xtDIoM3WSwrmuGIBkIpQebdYJ4c51_9Gg_dbTRcacgeNIlWQhHmok4cYaZslrRyvTLdBg3MlXUsaETKYD97XSX3xFW6-xKp1XDWPadU9Xed7S4hCqOIzYui7RbNp1cq3HdJ6ilweM8B_d_XkliFCKqQP-1gXyufbBdrS2F-Ryh7PspHffMkEX50Hn-_8itByN2Hc0Fy0WRP9Sa-Wyx3Iqzzx7OE_t6nzThbNKeRUCoiAngG_jPQf3UaXmL2Rul9xQ7z3Dn5ChUGE9u4MTQVTLQy7GlgEFCQ02Og11KfCWWKV9NmUlG9DdqEDS0bMyKNmTxZESoMWeaim2OwgihcHk74p7FFnfre1JjVkOmpeVMWaxVuZUqypSSKeXlHVMEVCpAHAXk_mcHgYcWeNGalhjHTndueWgB4kxa3vlvrAaSVszwmE3bfpITh8IpJmCAAZzTQYZF5fxcSkyyooGG-d6FHn79HmTjCwjblwB8jMVk8Qz5erAsZgNgxXemAGOIAVBEe-8s1A1xNPFGzaXOlPUDP8jQ=w1000-h397-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/ocKB9xWtfJTIKa-otWtSHC2_1mmb1-pL2vky4YV4DicqobYZokbrhTQFF4uTruD1zoi1OB7pF1-h-1nMoRKeJeIOX_TzpLKJHH7WIKHDLhGIzpl64UGvgt-fZi6PMkRS6e6N-HE3AnToBb7nW4zdYoCixEpzFjIPptZ4Znlk4YDjcob9XcT9g9dEoKH6T-19GSIbAIELMhLprW5E8CmUSjNumjEg6IUyIzmPZgetR9fI3hCGibMUTjVQjygjAHGOqgzak1IcTWamYHFgpl7FmqgPJKfXhqf1kDpa59hTYm83VjZeeseIVjJ3SyoF98nb93B_x75fj0jK6LpwkT2nKPMFb3_xYs8OOJmhJwU3tJnR3hWfC2b_V0lI7UaSn3aTOj56_6aTVxnqH0HvkFB5UfC9HNieI0bN5qRpiapu7mIWDeymcamom_wsl9te8p2yeA4PXtlUZjvA91EOults4JdCTaF4E5K8PWC-7jjoG_A8svdFC42HNm6ka85Baqig4zyBRrlFMIEBwpyyPEvfp175drm5fnlZRqTxBKXy4yZ-ds7wmSQDICG-19cZkuop3PirwKKFnbwKpNSaUa1MKPu7gyVHP5EKfpbng12r3Yyd3QnTjBNqO1olT5kKJa1ra7WsEcahYLffe5YmvwRzZ2Yaxzb5Pqx1xw6TcjsCyO3UIxYLUC4i=w1000-h397-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/ebUaGuxtLDzuvu_UocQ-tBTJBwvjv_fIQ1XaWaCCPkhZ4gt1VLgVuAgGq-UmjI1yXXlRgWHrXTcUwNF5bJTHTzUg0Pkp62CPsd3_Fn8bCdKEN20LjXs5N4Cy0e9wcBy-SOkr_AuJlC9a_YrvOSjqDTk9vrqm2LjieTkRkmFrz_IMLfdrz95FCkI_4PC0CXuzwWIb1Vx1zIUSTy9k5tz73GIPzwwvliB0uti6ojFYlud54dDYdVEnZnaO8Zyz1uSwvNqoO74Xl65hl3BxQbLiHcuZELHpSfi8n0jOxU-q2du_iV4E08rsgpqcwJlC-otQ8P38C2BPNBmOQ0DrpsTWbN6m5CFUy8A5D5rKQqPRp0I051gAe8ya9v6NP4nlf3t0s54kz6dQc1fOEReBBDXSsy1P2XmHrejYIkUg1pH4o5Bkag_SwBoyfAhOnq1fNtbLPxBAYdys1OXSCCGYYkYM4DoBhXBqhhAzr869PKtANC4OJcfGRqDCH5KkjUwEbucgCmIpUKyhhRVJRajTVwcX0Fxpys29-Y4I9PVmXncWRPz0_SALVkR-Su2xWgClJk5Tfvdu1mn7s3fE5PgR3IHbjZ4CsmG5t5rl-DI0jlJpA4oaqUnhQFIX0aICGs32O41DUKG-Jr9C4Vm6cXB1CdnOUgoUvWMPxdOd3hs92EzoEN0A2k84Ie31=w1000-h397-no?authuser=4'
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
            mainImage:"https://lh3.googleusercontent.com/VoYRs1KwFqTiGofhhGoOW6F2WLiIHxelM1Tu4fK_4omOPBteZRSrfykZFwPDqIhzvLWE-BLZiNVxVQKyMAFP2tMT8xqiVB_NA3HCTmHEcpjpqytWHeeUY2_V2HtY0k7JUVB7VetpxE0t_x6IrIzyGy6U2y-HExHiXzKVaAqkUQjxiDMkcKs3vLTWb5Wh0kXkGJ7hkGzEOH8s7aMD_fIhdTi4SRmh--J5TvVIQAhJEnDs1R2NiMAW0n_NEo4En1Wi1k-Yw2yoMZZsGVGzhS72aglDcC9sn_BsgFgmixJ80RiJOhLMXUXTK2GG1R-UsqcFOkeykjdbTmcR6dulyJzG7TXkEmZ1juUqc_Z24ekVobBBnaAY0UxBsR5NMXYGnt7YV9BaCJlmm8F4fhMzu9dOpL4w-A_7dBPYZzcwqfgWjiuIwp-hiNCm6TWDeoknxgiA2f6CyGbbzX0hJ3eUQPuUCfXfCClr5S1rYIyrGTOz3DY0NHaUz629Vw3c_g8JQwUC631WWf4UW1C1nm671uIuGg4rn_KsL1WSCoqGSgWLuFGZB6G-Lgb8xispJZv76O0bZwFtg0xVGSLdLbiP9q6iL2vZU79ST2Jf6vnNASr5DsxWDa-Zl5w-JTgfXR79I-h-kHFOwXlGQS1tpl_gJW6ZbiVOwD0C6O3_sx7zg-iXRhd0uNRBUcLf=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/PDW-eduRK7oPE9WzY6iY3mGPam1LHTAtH0QNmm3Wr5xUpSF1k4wvI-j9R0VBeYpUiReMt_NZOG7tTglzidDcyl13WWYBmMHmdwL9rg5sBow9XQpBrgH2z0bYvngmea-6fZTp4DpXY7qAfpwd7hxkmujaIqmFumDtSssAWX_EpDT43jqJwuTJJ2Ffc4825Ux-7h0elk7ipAuBU9lGx5E_hPT24TdfLFKGnjBrCCg8Rgzz31tUgbPIekWdJ76tBzOWDDNSciCHjfT4tVybyVV-qA1pPvYBh_8EApBdwkx2XdCt4rtJVboH6AA-OojkZ3lV0qdGXQIR1RCmKDCJFGA3BlmckZcCowtSA-SY6apAxOe8WZgN5PnyQNVJujamhYM152qmQRtnvBrVSOBYBPmZ0lPD_G9ZdKql3n6XDUft6NLxbbFBPAcgCWumNYQErwb3ctakmaBaTu0g1UMGluGBq-9u7FvEIT6g2mIQAl_v8YyI0ORgYja_kuvGZbGMPP9lYTNp-Be7qzyFMi0tYzlvhzdewTrjSNYw8CqC1Ryebjs8JaWOnKGl0rmHd5qoMblGddEWqJDhvqTnXr_nCgRjK--6POO3bm2bzyivPsnCPLG5YTX9_VA434vC9wpCaOijitAKz7k4Xay0VuKCsaXCL5k95iCxXplOCxCen5oG8mudR4wY6-WV=w768-h620-no?authuser=4"
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
                img_src:'https://lh3.googleusercontent.com/Eqavx70p5B67Z8Y5UlXYqzCs0GBAoP_C05SkI-jWFpLjKQet7X5tShGgcmjQU_tUr2a1VjKAQ89vAp1mTrDOIPeT0h8SYc1YClaA6hV-cciqgaQ6nD-dXKmwowIkKJ--nwV_3nkcrPauSz_OB0-JTMa18JzepVH56RG_ii4MfmMVBxS4pPVwuYqqKreIJo_uDyjys102wL6KXdvjgnMHW4pn-rlownIT6xXaN7hDXiasDTfUL3Of-09Qo0cgzyxK39RMoepQpFO0JqaOo0KMfNdSyUPAYTXkjljawE1GGW297jO6EA2He0q4BwUu-I4xXt9v1aCeVwpD_WdJ-_1J4fgJRosTh-dcMQKiRkL84YxlihYon35NxRoH_a7A-Xi3Jby7yAZw9pAvZ0xpzQWy0CED1tekHfVWH3PrnpotiKmVlz0kGjWpuduc4a_gaSAxCFM7hKzJvi5Fbh9LsaE4eN3B7qix1mIgZCQ_ICyX6g5raCPEYGmy9_6ilvNm1g8EBbgoPYXgIrjqYd_0IxaoXzhkgL10wySCLyvEVBpJaq9jV2lPNhqtrlDzyzt7hKBFB4GKd0DbInZSuXZVLr8w_9RfHhYWjkYdAcliFHzj3T59UmfjaUkdcioVifSsXCcU0cQfYlyN-T6d7KaI38wzqBdW69qGT7aoGc0WjoEpbo9cCtkKM1Xjxw=w690-h603-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/i3DKim4vFgrIYB35lAFz8mqaW9tJUTdMrA5FBd4Oo7F-YkjFgc5aqKKLHB0qTkgXxO3coPCMqZ92FErrQYNrlrS1ApoxLyQisbOH3kVypaYYkFCs893jfRj0HtHWpCiJgOTvCSmZflwbbv9Vsv7ncHDrpG_LMRHf_1BR9RyXcX1kKV42xpxudiIGC3ExEJUwLFX0G9rO66T-FKBGvEtb77dsakHImhAD-TWjZ8Z0pz-CKi821rENvRJl5TsErNOCFa0hq_fgQD3tuVGOxb4OIj3cnnRbU6ysiUo7ceDYyhzfQMi9TuLhJrv4BgvDdZLcRfzP72A4_Xd-_qLs5j4yphDAvTS2oLOri1coTf-n3e6wLFxDHyi1JutldFfU7gZVXqwtDxh73TVos1Z7eSiI20TMaVMxEwO9dBqH991mj4CfjvXC3REFVJoRDsuKVlUEstl_gUHzkYWcaAX7Dlk7xD0WymvJ78F9hoesfzACas0xadYrUpChcG2LHwmFm77akOhy42HMCVfeZg15NUfRBgCDP43j1EPVJbBHPwggUlEIID1LnD1GTpcg7mMgB76LKGdVGQWC-FWHwxh4C3Sxz-ZvTffBf46kpx-g3W03cl8VQ2vyJFDVB6obGiWHUvtkMdJEUy1XNTyvdOcat80vcee8ROGdlZRYKCpaABkUsvyYifIN7z_5mw=w690-h603-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/fS0c4rfdKIThmV0L2sk-UNtFNcWcYYW7HxXchh_ScBUFZcaNTz5jIwAMJ-Kg9n4XholXvGMmaOTnp-pskW0OkmCudHlTQcsA_fbrWiTEIxxSc8qSVd3yu8GaQM1Ze2qPY9sdiyC75V6LIpMqDM-nT4Z6qI4XHOpGCmJ7UT0SBCOEioDxYGbWrvM6sPgA53qCnUEabiLPKWsqQVOyVkVVbscUHPFrXFFCNwqwvvpZBZ62FMt_TNo7v5J-izepQojfMhjHJ4bwxGOs4jSkGH5X8jcx1BV6Bg6UPDDWKIQzhaCexba1M6qdDAhgoOUvcbeLuIZI0eW-q-0f7iji5nRQ9jzJAtCfVWebVcfQUhAOo79lfdiBFc_MDIcC1oNPek6KtThod9GqPy6xaiuG0mVBi3N1v__x83QjLCRLturnMWHNttqvTFVmF2EhvsT3WflyVzuTUGceChk0BeWBvMJCGPc-mWjnJDrH8wTyzn0pcYNZPC0a42iWNR5Q-Q75M62cKxKS_3hSgwvV4IEaLs1NWBmmSrgQtBCtbHnVqcPT7ed519fGrPFUJt8WAgm5s_G4-9sv6YeybokoUF3LiEf-osUzSAdMJvtbnaTst1IeAin7gmhY4LhQMNZ5_H6AkHf08IEr4KsfLMzV7teyLFHHlMnJgXbRf-7Oh1kjcXKe6emcgAXP9gTWJw=w690-h603-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/J-YkICtlKfdnWyz-yAN-5LlG0re_fNwKahY_2CtGCN55TCVEO6ta1xJ1arh_d8mMP_fP5aeJ7EcJYc8SRd0zoaj3ieTspfjgKhdxbdRv9XZGrfnyW7mluIU9VAfDhrBrfv1DaIHWUwhV8VlHv3N-EpLwczdMeaV5jDqErMfFHBfjRQj2fOulUQ6scg535nbNrYlHo2r3rqShmLxp-RlluLGQCsnTwq4OBaygKSO0BET6Q-_4tofOVB-bK84KMFpFazCMwxA22bIhtnpeHVUBy6Ge-h5Greq6Ooi7zf9f4W5aD-9n13bR8H6Xk_3tthM0S9kj5xzh5UpcTFZ5B4asOSh2lM_G2Q4TSKIwUtlw2LGGLR7KPVNpLdcmDctfWJOhh1WSYXsnsxuwNlD10cXde0ZdEKzp7Q10BPNqCwzRD5gyAuqtZCp56yJsWLHHlA_l6KW2h5EI1CK_godlpJSAq7qIwwh38fOPRzlTlPTu_vZi5UgopbFSlu7NfNdKvk7UawghIS6b50MxPvXiyiNDeb6cXLyclLeineJ8ZOtND4H_-N39O0eoJSjyXG0Bv50lCa4m5MK7CVwRDRFm7qsacmijCG4LtWq3Entmtq4cBjHi7YaLVIRYSJLs-iIIRsNvZVnLHoHr5sTZjl8cH8B146H4Q9BfLUFIoWGRuMARLra7dt038kzzPA=w690-h603-no?authuser=4'
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
            mainImage:"https://lh3.googleusercontent.com/8Py1pgow9xNFUR1f4iBoiMqdmhlirWweDXIsTgxPaGc_1GRjtGPFoGNh1hcK2QOqt1bxYMeUZKIgxfqh47eriENKUSJuUjIxPU1qrC3lHaJFGaNCaMQxFRziSBxmx05NL7lVI_Gkuzxi4pUeDTloq4M05u__GxFMKFVGcfJjNaCNrx6TdJXOqHDntlNrYjNyjA4vepQy6-_gepfFZpktuqaADRwv6KJ_BWjNomG2eNcWeos3CQMVL6qxSvHZRcQ1jDV8XMepfSsnChU3VlHHWBl-9gQ9CdijVx6hYgyneYwQMA4JXIXjkfwaDaMCwA9PWjImroL3XGb4XEnQE8HQmVt3hf3IJkIjMN9YZp_9cDaf6-hBeMPkdBWeBeOI9zvitylGhEb6B5vLwX_inOXzeXubbfsAx0gReNAQIPdE7MZa0YnbKFbcHTSuxDSqAHpZ85eSnatK4Eeqa_DH8716vGohy_EGKiX2IAXhraL7iv6E8iQ5aNIHjkesPMGEWVIpeDV8d1cHSnhCuRl2VAmQl-kspnj-YkKLcT43WWZn7iRk5z-d9aeV-GMVt3PThZEcNyjRsTJp-uyidvtovrhSJ1CtVVImEhX7Zdzi2Bgut33HX98BGbgh05mbRc2J-UbeyLzU1wo68ZrKiSD5NgOle9KljEogPxldazFEPx4LU4p710vPJC91=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/uUHMf5ekikfaqS84Mn7E0YgSwozywTaFkGK3S5tC8VBiw50oKugKB2Kfq1rfA_QKSRFCj8paMLyjVxCWVDsSdZYJyFmmSMH0vgE3EhcM6TXCk-Z-Sy7aZniT583yCJULA8M2t35ejcBHmpcypw1odxG_o8-n1vCdS3pAH8U1S1hHC0aelG8_iluTpiQIhWtydBg6rbCmXl6mIubLwdrMlQtg0Koxd_QBl_OCUss37Bln8B7Leq1ouQp9b_lUeesnH76qfiyDZcDsWzOpP0M0OahVz-rR8PoZJH02QFBGfL1MMG0D5gVU7dCXgmEaT89EqYZK_TJsdDfIJaFJRotYAjOei_jX6i_SYzJ3TFUQGKLrdbbPrRizD38bBKFhvexg4c-GkEKxL5so0ELlyjtz5sSM1JAJmhj3vICuAT4BvkH6t9bkZ03GQNgvuTfGGj5Xc57fQ_IKV4nfPxTMxIPRYvRXvbhK42AWCOl69Crc4JLhPVZMc6-M5Ad4SbgOHVxTvtbrydPyYIR_gKlZQyeBZLSJuuRlI3-yaqxJRtVjJgiRtmdt1q0VWLFHUSiqWPcVbfJRTpcznUaxOEhJbX7exqJTMGE5kiRG42_LYcT7xrc4RTzs9tGRxKNo-O8m_-Ru1v9SwES7z2M9D3UXq-ipHIteBS8syNEwLyKbcMUC4FWcJbmKbnXI=w768-h620-no?authuser=4"
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
                img_src:'https://lh3.googleusercontent.com/wu_19sRc5jvkBzUxtvd1W6_ANn69DlYYEupn7_6yWXsB4wpKZZdUuUDPl2DHgBj2VwhhYMP8vFL0JN0ZAG6UmJndd7solecc4wgnbzD-j23dSq9lhA0Ec2CRJV_JJ2UV7fEYkg3Ts7r17kdLyvtbL1QlRm9miFThZvGumHTIo-d7gIv7mpfFUaWbfphTyNG8chCU3ls_IZYCPGBADVe6Sv4TCbmYKxqUn4hrlEUjceAAZmb0fMYQmAjls5oEcWEuq0EBLSTBJPob6KLzEbnMxgypYy6aY0yOZt-PofZXeVJOPE-5G0CU_wWB9_ZCB--vSykuKbFB7Orvf4dsP3c6GgN6jhsJjfoNf8X24DiIqBhl6J2ih2FZ0s7TU9TKT7qPxokAlTAgvCxywD_mixnLiCTr6WQcBKOC3VSZ2n4IXKNo6x9jfbPxub2Xl25t-v16V1CsmYk-aR_vKaUOynyT-OGvC5MGLE8vQ7wxZOyNkapwPB8oVR6rxEx5wO9ZeU2dWFisHerI-tnWkapj-Y_oX6mU9gUQjMiPzCpZbB3AWtwIkRdXhgrE1mejYY87_Jn6zMHq6iePeodrapJYb_KGBoRS_ppnrS2VcRHWObBFO9mk0WyuItT6EKf7Jh3Hni4INHZ5_354rHtjmjUtiz2W8Y_XjQUlKMtnkQN0cWq76lWfeYBN4AAiNw=w1000-h547-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/1pjgNnKQ3zxKsshaYtsFcvcNj4gBC9nwfEUXo43rkkyfZemD2FRKvwCV1aasSqg2Lhth5D0sT6W-twyYlWTljuNbq909ie0ix-cxTgnZ0rYTOodzJxByFx53rSMOixaE_0XNDK8jhFA3lnYqQ2yR4rv6mzW4o1zAYn5CSHDOVhKL2Yr5FOL3EgxqCUreZEo8Mt8a4a3v6MKcIykK9FN8vfkcNJzC6fEUWc4pqAHXrlficWWxZubNAR34ERsMuEe6cykMGzoILYYRHQJnQmJ86S7qRVomS5NW0HENX5bwcBtIa-CrCgc4RTegfb4wnkpUigPM4wcAOERCog01KXnhGkK30ChtAj473Rc8C0_TPehvGRR1xxQLG8HHqX3VHTA5CjoqrJfTFBYIiPBUME67sIaT1Al2fgwZUE7JxbhecWKmp6aRfHu9aS3Xs1ZkquXgf1h0VHvUUcKx6twRZ_DDgVeWnkU9qGMRIVTJzld3EYiBhorVVaDvJMSBNarUCGWXS-aeN95PsRb8RtNWkQ3Hb30EiRT1jvFgOIAuLZJVPG_M6_i_JAvRnMLJiQBH3ZFYM6ZWzWWXPNkTLUaiWWiluIJNvfa3zM_Y_2tGk-vDlYnXVplS3IQD70rjKEPgNJoV4T-Z0RwlcXs7RBpHo6GfdurM4_NKaLnuptzvc4C6oNxoeAqeeJVA5A=w1000-h547-no?authuser=4'
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
            mainImage:"https://lh3.googleusercontent.com/NzeG6FYq81KS7cLMU7SL_xRqVaqqGRqwzbOVB8wfc0gpxt4DQu2JFjl0vWtEgPzBjGVzIjT2AfasxomIuDSzJIoW56F7H8nwYVKyhLbiCrd1_w-_CA3E_tBDSqVLtbBU2Fst7gy6R3zf5MXnhu9nnEzFXg3Ef8c1RLgsu5b8wFXeYDIU6f-ULOkt9eldVHfzTjlzYMNnq2gpULGUBbZ1q-ZFMggjWWDyzyH6ypcQqEbbp_qx2FLvhV4DTwqFq36MHdXtU2PyRmcW_4X5X18ewRcB3mv_zZF4RhcrYOVuCltwON9sODULaT6EOQcTDDpbYV2BkTxKU6B7wYu5_oZi5mrBsUI-4agDyyGnNsc8GBYcbVCrbi49uLmIpkuSQaNyh4XXxluwgFhiOBd7Op3T_khnBQQziT-F9VZQO-Uz4khI7cEDjaBc4XGTGXbLgJCh1jJha0u8-fVfBXju5abubl5NWvGaxKSu5E_Bt2eL7T19e9BcCmnAFAbPVN1vrjEKrbnU0ofQr_cjP-eK-inu-zMwXLETD1VsgKL_R3PQr2W3XzeDaqT8bBqjFpzFSl1aZsIdhYI3YytCTnUgdGeSo6yBNUfggXC5hmHtVMndDGFm2cz1b3yWLD2vQDo4tqO2BZAwCQQE8lmOmhssoB0O8rixICHsUnqJVEi8aHF7ZnDctPMv_Q2t=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/_72v2PoURdbgtuCzyFZxT_tJmpQ7NuWwWWfe4Uv3wBC63C1QewagQOAq2TH52_dbL3aSBC9beGlwozAGapPbGY6AhIwXJVWO3XVOrzu1dxykp6bXs09r_8jECHo1Iob7bMgGjoKZgisW3UZr8LeO9M_HxTfoBu7wMReEm_YaF3hC5opJWA4N8woKEiWMPuCDb1eS7OHMWXOqrfgqS4SXEoDmfkUUeii8gqWCc0_vQBAg-TyLP7v7cyuxiIGGQtovH-rHL6ohikR6lVdpQBiVVruBuv_I2bzYfDOF58FBgCaD9117_cPEoSQaGkHg5_XkibM6ayMVtSN38DPvN-TTrr-cOfpTHQE0IbSQvP6T_-obhHhSZOJR8QFmDybAUHqk3VzKxfhNAkEKix29LAzcIeDi5QkL1Rtfq1RjOSEcKuW7Cs8S7pnBNXX_mueSec3s3njoF0XM8MTi4L-YgUJcxLSAVo7DhJ4CSLOFhhxLK-zm1BeT_ucisWC4S4C6CU6tUMhG6xRreal1F4tLQU6dNQ0h_YJKM3heAnNUUg4a7egpQdCbImB50wRtN6xH25PAOuPGHhbnsAihJLA5vcQKwGQKn4-cFEusAri4Tnbe7d0JBiJzKUf7mFVBy7dmYc-8ONBlmeiFaQAZh1FqhHUkaAGvWSIxqnrdI5-qLyg_5RBNC8-TSz6S=w768-h620-no?authuser=4"
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
                img_src:'https://lh3.googleusercontent.com/iLCYm5Z5veqAPFh2diQgqm2JQIcy7hMx7sLIqXW43yKS1R9CJYv5wVGlalapRRAA7j53GPdzZLsi3TuncitJFKUIWh8DTSLsejkgCOu34_hqxnBPLz7-TpuPE4Y2LAv2DoU_S4rl2SUnWP7DmWTw_6lK4u6zbz29QUyfDqoGaVImKn3h8EDfwucotBnExIv9KDq_gLQ6_ZuRy9DqRw1oQs6g37YwPpQRCJcV0NCUxs25kktDG3pVlSxepI4EV90WNts3jeykjGAV_Jy-yPWKRdWyJEAg2-9m0Hgwt-0fCDb-GvZ71mQtLIdi2G6fNQ3nCEM5B34-eJ4l6dULDzCEfoB0shIRc9Sy4yIG7FYIko14_ix-bIFs6sjjoG-SzULh6zyk_SuLecLsfQIb73Qio1DSabPcKKRHO0OeNKld1_NE-7qAba4PtuOElmb4Kx2tyPfeP5ajKVtYZO4G-KioWqg4nH_G9KDaaIgeMeeKMPN1SiN3bDIxADxNc7RgqxbIwVw-zVdx4Z_-7Bt046rz6nDFuj9it1r926NJFoI-Vnf4oIHQx5jO0V0gv7YOCCrdiOfu3Dfw-VhMIMhB4pL4UUSAN-eIUGC3SuR2asC9jrd9SMPPmv2ita54-MGLT3FSNahb8Ep8rFpTOPORzIqT1SCTvOPWy0AAg55PU6Ri1DIWZJfrzz7vuw=w1000-h340-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/J1qu0F78K-5Zkiz4ruEQ-jZhzcQsTK_JwIrKaBfcyoxcs2ZGOpQYYIwQUY_KBUavhVDeY1HLpCgbwIU5EdkOmLeXDM_LunGi87oiTeAsQMvIfBsfzgUlyiv0WpUZJ6n2Eu-jsTugh1C5QTBGUfg32Lc6QIwmoav02PDFj-qfCXhAJJ4teZ8fSJM6oFqdzw5KCuFfFQ1ql79DWwrt4V8Xu2e8vcr8kvyJrpGSCcDMQ3zQZIaqFdDLF9phMAlU2qson5m_Jiy90XD5WF2bc_Ch7Dm9JlzuxLmgAvJWIXFnXaZ7JamFW8vtCruzdJIQ1o0WpQ9Ex3UH6teyQPfuytPQwa392GwI2s74XC15QP7q16pqfKsQLULmmmm-DSRhDUcRFIpI5nHdeHxJzwsXDJWMbHDzG3rGl--YawYNZBDoTYWp9FlIJ6lUwzepR58iQy7WFFkKew9uyFz2xe2-adpGNKvTNUpfs7T_J_DcgR2dft6dsTYAbovBZyOha3qumliYDP3HqxHauC1GGYJE6NYOHHXnSg5j1EJVRNtpURXDl1Jbiy0YZ2DbJ7DtilDhm8mdl3HNEBQSr63-ibZcyXgM2l91dSyW1lvnG_VBP0-HsscVktZkHScImDOA6XCn2PxvmJSzZ-nUxmgAec_kmzAJM0o3MazD01rFC4MrfW-2v25isdWi-AvxDg=w1000-h319-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/UU2munl1vZ6Bp_TBzdW1ZNWhMZTWUTwTLpNLq-Bjd7qL6e5qTsgGBqpjq_uCTi2jJm09gAR92pQ8RZpHAvEPcNfjfZ--uPOT5JPCz3rtL-aeITaq9Y6sypc8dQkWVAkIPTD23zEGD_iBrfy63_JhV0bSSIDkRLLl-c63z8ildlLQbmCUJk_SdCVHtNgmfJag8jEwL5GCjk2XysXMgV_P6enppW8DqTzdDMfHsqCrDC9Gc8vFdFiDyrArvxMn2fgITFFUATuYR_y8wXA7LDfn_CNhsUEXBR4K4ZEkXR0esPF6Fb7cY-MLsDp5LMLW0t-if8z0DJeVu6X5G9r6-wobcxM8TWapFvTUp0S35qcw_k7wPUlIgthiVyNcWVYP0UK4uxKZPBydwxfGLy48TShIN7cDWKM2prclSZPorR7_V2RlZ2K62YU9tjrsXipF7L9AqTN66iTO3BfBJsfDvlJ3pGi6i2Id8mo6J5EsCToDdENxp1HSJR5EKnc3dikIMPnrdNzid3OGiOYd4zKQAkHIqaFX7TNin2Xhn9HZKAtDlmQs2LdOkmPFqrh0RHfo6czxnIst9ZAvigBTt-BZ8u-aIOuS91qNoI4ZDHp7TKFuQ9fEGuP5k9kz9lfOHc25OaaR5-9cvniDVztzEGMIycyrycndG5iCdpqVTXwkQ7Z6IZDqP0FaoF9ESg=w1000-h330-no?authuser=4'
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
            mainImage:"https://lh3.googleusercontent.com/xZrmX7rdkQfC2Jcx7aqnhvRYQbkpIyublo4BIF04tRxpSf13C2sXpOd49l8H96uSam3UXX5cWdMJ0JSZdNXqZ5mpsA1dByXCOaG1L6FoSoEFUfcCyc6M6ZkHv_ZMEmLn2vggsMxcvzhFRfMB1AM07lBFULx1LLtTDd3DqzX_ym4YnwoMc8LyWrpIcVnvvL9BWbw-CCKYExcC5KuL62zw5hoHqNdUIWKA6z3bNKZaRWk0PPUwxhW6hXF7EqAyLI9zYaR1HZYza_vUfWsU5b0S1pIqzH7kbSSdbwsXSQ4IJvX6MaU_cIVdcMV6f437hFfppjhv--6AVoZkIMoLH4BiGUKPXtgXkyFpaNlZfrv8A8MDPzX2tPPNyzX4gaR8st5HkxA8-BB8BfNB_Aq2J-JZGT4xea3cvsb-_MiU9hgzNHh7Ys6UdnlYknOcQCxwATeL_DsKWKS_EpPGD9I94dtreZlORS-r-j0y0braoJVdxgNChSEoSDTWtix5Vnm_-UxaPGYg2Mj63BzrkKx4OYrHTbKY58M0Ve-_LJOvU3UFgtWeNSYgyDOe2aVGIx-Ygfi0nyCjrhOnjlpLTbP3oP1d13ZFhPwBo7tkJ5noICKfUb0ZpyLnMNXtqu3SLDeoZPI7IBwX9-_3pZTTMeqvw0JaWuwKwjvsZOI0J7PqDuXR6ftCiKi5NEy8=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/Y8OPhiAGItmsbAgZJ3erGzXDBYAI0XlEBG4wW_RXwiPDBBDUAwyI9a1XPiZ-ukjyl9rDe8nR42Mz-mrudGlPBtWcTq5gFGgNmVe1SgOaBcW0RRXRi7X24_jv1RxRG9fqzsMZ0rHSAin8gFI4Ko9kRUEGFEpF1FbRyhn2__a2aiYpIhsyIB-MjhccBuv_icJQSZX9kw6jF0tyl_6CEpKF2492ivVaQvVjH_2j23UGx46f-Jn_U_ET7QH_ynaTyTx0J_K_NRRymNbNkMINjkGjLwOEBu1wU3ZVqbay1CvRRIzs-827IRozAPpmPGAuj7eqgml46SbiEunaYiFNq5hyCmL_5AovEPzcKKOWx8nr0CL_TplpLxbTXF4xipzdTp54WTl_XLFGKx_MbYuKEd4rwdLMLawYvX-9IDRKGE8tucx6mWQJeMxvH6gYnQKkiKrEPhB89QglyWZlbmvIMKaLx3uxpOE_KMRbZjqpuvgdZd4LyuAtEUMOb8qydkJSrGhQnEgbZTO0Q1NRtWdWhqiqLwikOAaCFx69Oz2MM2QlNf0AGS4hlG_OXx3VEVLMcOUbv3aRnvL7h8ANW6ng5Jn8y3A7UZuh5NSBuHK0aENFODClHlx1bPG_Y85rVuw-F4A8K6f4Op8XP3-ai8LLJ9OYj45-bD6NuzUhZA42CVo1x8kGvwvlpStS=w768-h620-no?authuser=4"
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
                img_src:'https://lh3.googleusercontent.com/9Jp6qqdEew8_VxE81oz5O4qmdkKv3iePXSLltieovNVXw21PTCtyBaHHLddVbKNBp6VfmUtz5yK6J6uqSjZpknQDDC6WJYpVIKA1GHoR8XUMmRE8CTpYcCoI1lc0LHOKkk2FGjaK_m3W7Tdprf2_dyFUOADu2DMm8N_XqZjH75VH4Hqt1SZHCwsWYPA8SXoJfqhZ3LMEKacyeCYs1jxXM1oGqnagj0dErryE5FHJPrma21LRZGiMk4zBOdFVbtUv_9Lv-BZHFzFMKqPjU1LHLI4NMcCfsLVySb6mXjCosZcFB5-lmp5cPjpGHhPxyTALQjGxjRYYnymteSJ64O4FsyUvVhwo5ZX57pFFbdIusqw1548cGo54eKe5ao4DkTvIX1CUXt5fyV3wlHvOtO91G0Zjaw5kVpGuxHQeddkX26O3KHHbTXKR35EoEmaVAtt66osapfQaJH9KONP7xQuuZ_pckhBFvEKa_3H3Ul_dK06Vauf9_Jrij0w1Y4rVswM7cX8oWdV7iBmLJgEeNFdTNhDXNA-4Lpq82wgyaBFX_SxfD5TCAhZI-PdcfaZMuruGEkimRr3JMLcWl2Z8aCTdRSNKQFVzceVjVDjz-wT1UoVWJHHGYLUv9XSyc65JhJ2cnWtorVprQzs81Gf2vIcQn-yeyQKs5AhGt6q7sQynAXlZEG8iVVPrtA=w860-h745-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/R8d0UQA6NDpR2YYWoEjleQ3jazM18BoBsLQf28zT5u6jN9z4vEBJCFbRnSdmP3GkdphLU4xszKR_lHp1MtjdRe_RXuS3LJ8MV9OO5HHdOGbTd8V7wh1PUJ7RPT5lIvpXDkygfY-zPO5HF2uc6M8fZ8zk66XPWq6gqCzEDzLqmiYUQa2dAXM9LBMycbVo_RxbQTE0AeMlIKqCljvdWRMDbkonr1p5sXb59EWFvHbMnWKe6VFeYQ4sHIhGBqblkyVdw1oRrX1UAeeMa0N4QHn-mo75TayjtKUC_WF_MVerBYyzRwDn4k_e2GGkomp1FgDeOt4sBJCy7oWCW3hmeOdhPNZJUQG6k_tovh77yis1TggVumX3goxUgc511Kx0iJYNi08yNktNSJ9wtA43pWmh72HbX-gEsCOigy75r3Y5n-hUcobZGVlaAvOx15kVC3--sFytwUlXGYEWOjFCW2RB4VgXPG7GhrBd8yp3HWPjQJp3w3WajOqTaHtB2EoI9ip4KDLs926MiYcgaj0S3VWvVEyCPj2NDHazdBPFspkUug1gf_dcjr7nuSolpzwqFKtX__XrN9GViZ6ohffrR4qYvN1-ts9Umb7KTY2soUL3rdAOwmxucxjLnUcHyYX2LNHdgfEDVMfrWB3ajr1MMZMVhIul7ClUVymmZReMpEL1A6MnrzuJTnvrZw=w860-h745-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/Y9fDjBe2Q5ukzQxPjDSKJJSFoZ4EM2KeCeQxslfvaG2T-CmSpdqK1eBRncEp2BAFbQ82fODJwyq2UeffH2oJ_qGaA-xTCF8DQveV1KmqVqM9L5D7vv-CUvsqULe5qHnZ46C_RGXM77Y8ZdRUjHwXDVRLY3wvV7jluMz_BjGNTL7xKM-Thp1b-jnYl_6UvyjKClwmA9uUuiQEG0a9T-n8APzPJgj2cR1t0AQ7WYzxfUl32Frv6zdizfaN3c-8Fr1rn5FCsYeBofi67HGa6EEQ6vB5SBzizMxK_eA4yQ9--yH0ZKy6DHPVpXaZe26nGjKQsPTaJ3Z6yvg6lYXM9xZMi06aCqFs5Ta-Ue3UvmPsfBOOEpF3jPlUwX4kZwjVkI15DfbDhUVbCL41w_0I-ww1j6lMI3mYHv4NJ24SzyvqrRGytjlu9lhnCIJ6lb75yLPTUvVfgVt--nlNHaVp_M315NUEEN3i15CEz-5wsYdM0uo0KTiu5WxY6YvR2R5f_jlC9dvwdRulAT4QeXRvB8BzhZcB6PcjJ-b5EbpNDZOJR2lYWAAUJU0fIbtKZoP2BpwAgjL0FbECCjIuBy8TMv2heKxt6fLYN09xdHdBZXNWrm3hbpwfu1icJ_CpaYMNCVVwg9smNcrbvJn__bF9eKp3d0kcfquW9HmEoeYzSrjWzwFMVMdQPxeTyQ=w860-h745-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/Dq3iGuZ_OJcFJP3HU2xOZLCXdDIQz8doC2-090A7uMvxY9yF8ojdbEoWNPlJTVj0ssBNny3MnCDMRUEauekTVAyKUmeBm8yr3nvKcVGeS8OBnAPs4ej96voLVIrpRYK7H15ckX9A-NI76LsR7AMLlJfl3U6N237Q3cUjIFaz-OZArFdv-K0h_aQ4MA4A-Q3Z4bCH5bICK_MAsxE9Te4U63BbixiAlPaSaRqzlsv1BHE2nD0gS0ehOQWCsWgwHxePK7f2c4ErMQTRygA2PmKdRtfXBj-KAg0cyY5bmY3WWz4hZlMxzdHt_m4Kj0bp7zmad8B6ZyCJOmFVwWxak0wcEeawwuH35IXV9ULkej-IeqWnMg7xROHVJtJbR_SQ2oj3Q6M8kDpeWo4usCbSY7bfzazVXCLZWMVxZyi1J6DrE-dHTj2JlDoCtlmPo6ChZ-gP6TuXgLBfogMyLG1h0QCYUREjz9oWE0JVx083TLngAPQsyW1bs4azRMnOr2OFqf3HyCOZ-r9gdaSUt6jQ4ZZNPr4FTAjLqFN4xVZxADt2V02_LSfPxlgPztCIfr0U3ofIvlwaDFkCrMslehKN1SUazRTMJo7_wL67E62kdMD5PtfDRhgfHZ-kYGej86qIF1loPKO5_GLRXLk-kxI7mGE3cbZGHBiapb8vGwbDr9LuB7Albiv-np9ilQ=w860-h745-no?authuser=4'
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
                img_src:'https://lh3.googleusercontent.com/qsNybGLLOCB_lONS-SCxIbIm3KiwPg5u9kxSSFL8bbwEATt9i44at_yP53U8ou79dmErOrAaZq0z22-h8c4CBARZKn9ClptwsAqmWrUqVdBq2BrLp10W8TciHZSTqhgDkDnALD168WoPJwAxeGxA9iMHOtMAskCKzMjaGDDASKH9gZucF65SV0XmSb7JWsCe3Awimr-U5JefPAFhevbQnFEvz-u9fYNTov1UkJyzpkhN67cuwtbMgLdDVKZei4iV1dsDobcEzrB1rZmSKn2IuZE1SLxh_FPyXVflq311GPfTAi8HEHzV1lO_Gzqf-Qm4Uhbbao70prJjKqpfpE3A7SPID68mSv1J1TTwdAbXYbXnUuALJrAq05Ooxb1qnIjpvD7sYnQkPjyBZ0EpdP8kXUHDX75adWv3CR-z06OEfWDxhnUXawsWSOUCGYSYzxo_5-384wbrZWDhylXUXN_HN23zcV5P_wLOT8Xmb9Kvs-J5YB4sYPzNkTpJp7WIgoz0ssLg9aidc_rNkS4DEYioU4enyQd8tDh9zf203Au3XHiZrR7YwWePH3E9EvRCuNXCdGjhucSD6lemTXAcCv3JbfbzkhVPJVE_r6RAjy3WuHHHWN6m2W3pTTHU4651-OTHKoMw3uUonVKEYDD_cszppPX9vhP0B152E8xiWeMyLaB4z7steWsj2A=w860-h745-no?authuser=4'
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
            mainImage:"https://lh3.googleusercontent.com/I_eTDt0t8tSxMJkf0FRbAhQ-EYrrq6nC85ZgqsFbKA7OK9rReSKMhM03HZBXnVz47wXq74BDfX25XTMWpxs4mfmKkT8M6A7O6126e7jtWrUHGHaT4d6tCdetlVnkY4qnUDoXxGP8vl7s2BWStPd2tsfxm4xFYe4jRI8VdxHy-kxUdFSaEqMitige6zBCP71j044AnCBz9BEBt9rAXAVCnz2xl89nP1y84ZBQIbch2ByWZegGfKNxfvrSJwwiXnPuxbYx2bVvZ4nsw2EffXL9tK2cInDTHzPNNpnFQzBOSWajHJxmUFEcrrt2nUdRvc7Cizb_FPpaaHS5aCC5xWb7XBIbtud9SK0uaiQxeG56PMjebyP04bTq1IAr9Yc7Lw91WExo1ndwxtvmuY2mObawJF-eQ4e_-FN0uuwtj4NE7fGqL2_FSN0VrCjkR4NRXw3Rvib8gO7_lOPgJ8blmfvc3hzEUu7hOJybmoGIwy1niaAgnm9WG2ZEEWaeBgq1OKb4Q8hWnp8h7adUCEAEQJ_Q70w5KnTiMB8K-yy8-xuUGOAE2Pxpa917esDh_4BQHgwNp6Uq1E8YP2LLxxnGeQUR8rZHWLr2o8NNzeaXom8LVQFHGOa228WyRtxfyli-CXEZgwRYIEFrmo1PciRIWxYvBZd2IBGNEeWxIS6gAFxnHoazhMMEgm05=w768-h944-no?authuser=4",
            thumbImage:"https://lh3.googleusercontent.com/1HEFOHOjMnS-O3N7FTMKqUbSVrMipJYqxXhNCb42Akh8Lg4Q70sHFYl1QVfIXVC0-8ijMwxOtElTevXACHd4vMMfmqrqua77C1nSQjET69JCcOntiaI_D8eEZEmY6tNdh0Gqo_Fw85EBgvUcYghNq9Us7wubZ3CW7bj_HMYn6WtAE18wlD3OzOUWh2MRqZl5A1VtoxcKyKwm12Sg412FRU3MK1GGB9SupCS_oquAd1JErRYykOkpbNw0ea2vI2If4xgzIR52XekBO_RuxB68MvvR4H1FOen6aBLah_v_akvgEjoEgBEggT-0FTRnfTmWfqs73YUcTFss7vbR4sYfTuP1vXdkUCQcybPyt9O8fwbnQScaKJpqCIuQE-aO6RQ_ztiJHNOugxFPSOSOFzTSnez6KZ8NNogmLvIiDNQPCRsTAlp6cEM4jduudSTfX2UXDaZQU5mMiRwvnuyAc0Xuj42j3PuXSoQNyETZ4zpzCdFjMycfVavbxS-5AKBs3hcbRR3ys218oD8MrBZ92dRejwvMhoUY2Ioae1LobV-SQO3ETHe3MBlVnKoBl3Mzzrq8QmXqNxloMuVw-ZfmkJ_9KHGehelZxG6vD7lqj2M2IZXr79TDE7ANat1iZGZWnB62opPJ2ubW8-291yOn4ckL3Gur02NpqCSmC6d5W_KOE9dem4HvhnW-=w768-h620-no?authuser=4"
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
                img_src:'https://lh3.googleusercontent.com/g6j_P12TIzEWy6dd0YJn2nHpGHVYjR9usNVuhpk5xoAKAVfKGQ2J9dikzLwgzZnGIsv1xL32tMW9JR0RbRSancSZet6cGoZufyTVnL_v5V1zUkEQBTQ3-LaJg32dRdIZvTIqqF95jGvdwH9zHkWAJ-Orkc6yrHL0-FWed7VIKB0U0TLemAdZ7RA_ECUwTLvAnMmNMXmCg9dUqx7YoKGg5mfJPYwonCpisktphXbruZwwNaIgppEmqm2PidJADHS6N33uPWBVU0x-C64vM2-kCe76GzDfO9VzD5RcSXZbYDJQPmGoRWGkjWOR8wF-mEUHJlzKYaPE9UN-V5__e9LbKv3z6gBz2NyogCE6CYJi9OLJaZKejVSz-901U0WiH_FWj4GJ8nCDE14wF8SRbHZdAfUP5vVr5Nw67g9d_gSoH2IKTrHFP_YkLO8OEkA1CuQSi8EARNpy3GZRfI03fuQRYsF0P8fqhYI-GUmGEM8iGZU6fIkt30CgNKvgjVVp-Cjp3j0uVRZkr3a4IfTbs1DgKTeuQlkvMKUmDepf6UtC1h-fq834wBDXajXxrFMUFHC9IHIsa5ewlmRpI_oHC8M2G3R_VMV84iXWnE1ck46oBt6VAJ5RLxU-rGDubi-zDolsPI8NMMAnlFm5XNSrepIwdiynqzBfSPcZKwqe_6HU4Ch777Ys7O3pNw=w458-h163-no?authuser=4'
            },
            {
                type: "Level 2. 선택형 집콕러",
                desc: "주말엔 집에서 쉬는게 최고지만~~ \n 날 만나고 싶다면 ~ 나가줘야지~~~~ 뭐할건데? \n 꼭 재밌는 일이 있으면 무조건 튀어나가는 그대는 바로 \n 선택형 집콕러! \n 당신은 집에 있는 걸 좋아하지만 선택장애의 면모가 리를 빗 \n 있기때문에 친구들의 설득과 흥미 딘딘한 일이 있으면 \n 바로 집에서 튀어나가버리곤 하지~~",
                query: "tjsxorgudwlqzhrfj",
                score_range:range(26, 51),
                img_src:'https://lh3.googleusercontent.com/REuMViq15a-RN5qyDOd5aEID18hvGJmvC-0AfuXo2Jhk4G8GeTWfmvKYN5uqnrFr8HVs53HIsqVgaAQ3C6Aw3Bsd_DycJebdLjaE5BjubyxYJItxd8YI5w0n4knZmKn17vmMYCzSRWqsYlxgSAUDBDu9m8fiOZNjI_vuagqjVOyiYNiJC1t8E-F6O6v8tCCw-cPJ5qgGVwrgWY-R0hqTLpTOpCnYNVPYBOCiw_2mwrvKQYv-uXXvtSLqqF5e29T9mOm-aDYXsyH_asDZOyk42eJE0s_KY7xkXgmqyxWPcLjKzPnLUJ5QdpgvekRyyiL8yUbCkvVEXUwEEEVVwC5R421e5S3zx4RgW8qz_D01GhOV-mUzd5Xgb9N-TeuzexxF43uAFixT0OeXXcGqUB8TWQu7ctszCYgoUkUr3EiJoRBH9x2RM3K_uSHucGYh0pDXDG2SwS6ZlWBtBEHYV2RulXyiBeSRs-F-xjb0eavrqBa3oWzp-8THQKcMcvG30FQhDIZjXIYrUz1uvjfeVm6xwke-zLRjN79bzOB103pA6WaKIRlYVby1_9LTGl6k99YmBQ-4LwwGWWHGUPa9BQ9uLwD96JgvQkdGz36zhOXXbgt5POPgzL1hxrphk4EKAD77grzt9jrDxGlW8rJOmvLfFrwCTru9-_0dBZFrl26nmBftRORgWv7czg=w458-h163-no?authuser=4'
            },
            {
                type: "Level 3. 돌연변이 집콕러",
                desc: "극과극인 정말 집콕하고 싶을때 집에서 절대 나오지 않z...! \n 하지만 어느순간 또 약속 줄줄 잡아 버리는 그대! \n 성수기와 비성수기가 확실한 당신은 바로 \n 돌연변이 집콕러! \n 집에서도 밖에서도 최선을 다해 노는 당신! \n 한번 놀고 나면 꼭 충분한 휴식이 필요하지~",
                query: "ehfdusqusdlwlqzhrfj",
                score_range:range(51, 75),
                img_src:'https://lh3.googleusercontent.com/PU0hIJW2gCs18d4t0DAv065IBIp3d3j0SWgudeq-4hzhRmX5urv8OWO6QmDDc_60O7twGGs28J6R3W9JjbCsWXFTWtl32g6x4aFhfObZ0V81x1qD__ytWOf1il32IZfSrAJnPZEce1rOTG-Xc5RJeLceaoUWFW3YYhdPrhIHFejnyh6MCSWDFsehK1A0i2Z8RSQ7JwiIw7D0h_nXMnofZi41On6cfGOi7UlGxAqoimz2Ncw1sN8OBqFAexk-87ReOT2c03petgW5E6KShD3fuON5b7KLC9zPTJLThkWiOPvBa-GBuCuo3rFr1iEFWmLjut9YNyJh5ZnnMUuKk26p0YXp5SHoTJfz-l61vXD0fj5JyNCZCJxRoT8RCBsMq7iGA8JBNoHUwAsBpMBpUYtjS0y2dNpc9Em2P-u4Cbg1kEplCvHgysJhE1-OaEbL62sf9DT8FGhWtpyTlYZBTMCDgTUDtSbBMmBU5krp0s3HsGRTwBDxxdC9czxp5XxonjyTzNJGB9_NwlRS7_nVd5sPM44aR5yj_IfIWC8oUakqV80p4whNKcFYdx2nvqeU3yNzTLAZ5u5BlVQw05b3Py75jGLvUrEKOUO0GZ2EDsickXjt02Mc42eM7FPglLtfw44-xJupuJbJCfhnc_gR53_NMXXA3QDJfq0i0GSi3Q9bIosB-WZMjg744w=w458-h163-no?authuser=4'
            },
            {
                type: "Level 4. 프로 집콕러",
                desc: "집이 곧 나의 삶의 전부일세, 당신은 바로 \n 프로 집콕러~ \n 집을 왜 나가~~ 집밖은 위험해~ \n 주변에 아무리 불러도 순순히 나가지 않지!! 마치 나는 신비주의~!! \n 하지만 그냥 나가기 귀찮은 사람 ^^ \n 개인적인 시간은 필수! 집에서 나가는 것 조차 큰 결심이 필요해요~ \n 집에 놀거리 가득하면 집 밖에 더더욱 안나갈 자신이 있어~~~~~",
                query: "vmfhwlqzhrfj",
                score_range:range(76, 101),
                img_src:'https://lh3.googleusercontent.com/fpr5ydQukp_-ocWCmzz9hglV99zzcG8pynVtJf6-Czw5ggr6MYjMwYISMvUqgz8Oz81KPzX_Iajmtn2_o7Xzx_bonbAeu0FgG3YBGUlqHVdZSWwihgwoKsZGXSRTqFZ9p6IhJIzBNCJw9FZTOFSS9zaeZ-NsWToEkXCrePiZDK-p5Nzo7fGtaAXE5oKxP50Lk-SqfYimM-MvyYU0zwmADh8tNq9m3D1T-Guzze97LBkFhmtU1THcbZyHxJQAz16use6y4ZOZOiuLvXbhh7_0xVWZysoMmi_shoYKhr-SH1VY4XJL2Q0ZOmWdzPr9LU1f01HeiY8FGxHVQOh9kq2W4dzptikTi4_RBKwrV6NPGEqKVZmwcyabUYTdm4qOnJcSVzdZAMzr1cC1tFizlSuxQW87qf2MOKdnjRHXfX-_cj3ejCtOxMRYc5lC7nBP7s3fBbgIK1g39Knfy-KDI8LXdqeV3soH89V6fdJv3QuXfCt0ODm9pIwja0-kIsnlfDoBp1FeW8Ksm_eGpXAg8dFO5IbId0ktvOmnifqR8nt_c1Hi44M50hSr8pN1nF9gJe5p_bTmlkzjPIV6nZCS4R9KiNHuCfjRxYMPnH0j0f_8L0kaC4T1In8vs_rXpKIxWhB3N_BY1FEBONMdYtAbF6Q61-dQrn9h8_8MhiXlFkw8smQr8rNfPzLS6Q=w458-h163-no?authuser=4'
            },
        ]
    },
]

export default TESTS;

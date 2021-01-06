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
    {
        info : {
            mainTitle:"바람끼 테스트",
            subTitle:"내 애인의 바람끼는 어느 정도일까.?",
            mainUrl:"wind",
            scoreType:"numberScoring",
            mainImage:"https://dl.dropboxusercontent.com/s/u5oxd4jj4csh3p6/wind-main.png?dl=0"
        },
        questions:[
            {
                question: '나의 주변사람들의 기분변화를 잘 캐치하나요?',
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
                question: "회사 내 사내연애 커플이 탄생했다. \n모두들 아는 눈치다. \n그 자리에서 나의 반응은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "엥??? 둘이요???? 그 둘이 사귄다고요???"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "아진짜? 너네 둘이??? 나는 그냥 친한 줄 알았지~ 뭐야~ 축하해!!"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "그래~ 너네만 모르는 사내연애지 으유 그럴줄 알았다."
                    },
                ]
            },
            {
                question: "놀이공원에 간 당신! \n친구들이 제일 스릴넘치는 롤러코스터를 타자고 한다!\n나는 어떻게 할 것인가???",
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
                        content: "그렇지~ 놀이공원 왔으면 타 줘야지~~~"
                    },
                ]
            },
            {
                question: "너무너무 완벽한 나의 이상형인 사람이 \n계속 날 쳐다보며 웃는 상황!\n당신의 행동은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "부끄럽기 때문에 그냥 수줍게 눈을 피한다."
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "그냥 눈을 보며 웃어준다."
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
                        content: "아 몰라 일단 가자! 가서 마저하면 되겠지! 최대한 빨리간다."
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "미안하다고 먼저 사과하고, 최소화 한뒤 나간다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "카톡이나 전화로 먼저 가라고 말한뒤 모든 준비를 다 하고 나간다."
                    },
                ]
            },
            {
                question: "당신은 소개팅에 나갔다. \n상대를 볼때 중요시 생각하는 것은?",
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
                        content: "첫인상의 90%는 외모지~ 외모가 호감이 가야 좋아지는거지!"
                    },
                ]
            },
            {
                question: "어렸을 때 친구였지만 너무 좋아했던 짝사랑을 다같이 만났다.\n애인때문에 힘들어 헤어진다는데 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "그래도 마지막으로 대화는 한번 더 해봐 라고 하며 위로해준다."
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "그래! 헤어져버려! 그게 뭐야 정말 ..하고 같이 속상해한다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "너 마음가는대로 해 라며 술 한 잔 따라준다."
                    },
                ]
            },
            {
                question: "나의 이별 유형은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "그동안 못만난 친구들이나 만나자며 덤덤하게 받아들인다."
                    },
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "새로운 사랑,,? 아냐 ..난 이제 사랑 같은 거 못해..\n슬픔에 잠기는 스타일이다."
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
                img_src:'https://dl.dropboxusercontent.com/s/lmxhin0m876d6ad/wind_goqofkrl.png?dl=0'
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
                img_src:'https://dl.dropboxusercontent.com/s/i5hf49fkbqkcgf3/wind_rhkstlafj.png?dl=0'
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
                img_src:'https://dl.dropboxusercontent.com/s/pkisl9r1t75c0t1/wind_aofurwoddl.png?dl=0'
            },
        ]
    },
    {
        info : {
            mainTitle:"강아지로 보는 성격 테스트",
            subTitle:"내가 강아지 라면?",
            mainUrl:"daengdaeng",
            scoreType:"typeCounting",
            mainImage:"https://dl.dropboxusercontent.com/s/lbvs0wpqhf9ohno/daengdaeng-main.png?dl=0"
        },
        questions:[
            {
                question: '기분이 좋지 않을 때 나의 모습은?',
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
                question: "다음 중 나의 연애 스타일과 가장 비슷한 것은? 솔직해야 함 -_-",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "애인이랑 노는 거 너무 좋아! 근데 친구들이랑 노는 것도 좋아!\n둘 다 포기할 수 없지!"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "집착 싫어! 집착은NO! 알아서 잘할 게! 의심하지 말아줬으면 좋겠어!"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "질투를 왜 해~아를 좋아하는 거 알고 믿으니까 안하는거지.\n그래서 오늘은 뭐가 힘들었어? 너 하고 싶은 거 다하자^^\n잘 들어주는 스타일"
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "연애하는 사람으로서 연락은 필수고 예의야. 질투는 그만큼 그 사람을 좋아 하는거고,,\n내 남친/여친은 나만 바라봐줬으면 좋겠어. 사랑받고 싶으니까!"
                    },
                ]
            },
            {
                question: "조별과제를 하라는 교수님...팀원들이 모였다.\n과연 나의 역할을 무엇이 될까?",
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
                question: "드디어 동창회날 두근거리고 설레는 나,\n과연 나는 동창회에서 어떨까?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "여기저기 아는 사람과 반갑게 인사하며, 돌아다니면서 노는 인 싸 스타일"
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
                        content: "아는친구들은 많지 않지만 친한친구들과는 재밌게 논다"
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
                        content: "집에서 쉬는 건 너무 시간이 안간다. 친구들에게 만나자고 연락한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: "주말에는 무조건 나가야지! 평일에 미리 봐두었던 힙한 곳과 핫플인 곳을 찾아간다."
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "평일에 받은 스트레스를 맛난 음식을 먹으면 미뤄왔던 영화나 드라마를 본다."
                    },
                ]
            },
            {
                question: "인형을 선물받았다. 과연 그 인형은 무엇일까?",
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
                        content: "이왕 온거 다 타봐야제~~~~호러, 롤러코스터 등 다 타본다! "
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
                question: "친구들과 약속을 잡던 중 맛집을 물어보는 친구들에게 하는 나의 대답은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "맛집? 나만 믿어~ 나 맛집리스트 다있어~~ 하면 추천하며 적극적으로 홍보한다."
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "맛집이라고 추천하는 친구의 말에 따라간다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "아무곳이나 갠춘~ 별 생각이 없다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "일단 만나자! 가서 돌아다니다 보면 맛집스러운곳 있을 거야 허허 한다."
                    },
                ]
            },
            {
                question: "파티가 있을 때 나의 복장은?",
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
                img_src:'https://dl.dropboxusercontent.com/s/yyvtej5cg2o9b4n/daengdaeng_pome.png?dl=0'
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
                ✓   기부니가 좋을 땐 애교쟁이><기분이가 안 좋을 땐 까칠쟁이 ✓_✓\n
                ✓   가끔 앞 뒤가 다른 사회생활 만랩이랍니다~\n
                ✓   참는걸 극도로 싫어해요.`,
                query: "2tjsxorgudwlqzhrfj",
                score_range:range(26, 51),
                img_src:'https://dl.dropboxusercontent.com/s/n3hj9d48qzemle2/daengdaeng_chiwawa.png?dl=0'
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
                img_src:'https://dl.dropboxusercontent.com/s/5cvgrsniqlwtzu2/daengdaeng_wealthy.png?dl=0'
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
                img_src:'https://dl.dropboxusercontent.com/s/lfm5aj3j4dqcct0/daengdaeng_retriever.png?dl=0'
            },
            {
                type: "비글",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n
                ✓   체력이 대단하다고 생각할 정도로 미친 텐션의 소유자 비글!\n
                ✓   영리하고 머리가 좋아요~ 그래서 눈치도 수준급! \n
                ✓   여기 저기 맛집 탐방을 좋아하고 음식을 너무 좋아해요. 맛집 물어보면 왠만한 건 다 알정도로 아주 맛집 리스트를 가지고 있죠.\n
                ✓   악마견이라 불리지만 사실은 에너지가 넘쳐나고 사람을 너무 좋아해서 관심을 달라는 말이에요. \n
                ✓   외로움을 많이 타서 늘 밖으로 나가고 싶어해요. 누구든 만나서 힘차게 놀아야 외롭지 않거든요. 혼자 있는 거 너무 싫어!!! 스트레스 만땅!\n
                ✓   노는게 제일 좋아~ 친구들 모여라~ 언제나! 즐거워!\n
                ✓   될 때로 돼라~~~라는 마인드 늘 긍정적이고 낙천적인 마인드의 소유자+`,
                query: "4vmfhwlqzhrfj",
                score_range:range(76, 101),
                img_src:'https://dl.dropboxusercontent.com/s/l1smzkp0z8tqiyr/daengdaeng_beagle.png?dl=0'
            },
        ]
    },
    {
        info : {
            mainTitle:"프로 집콕러 테스트",
            subTitle:"이시국엔 집에 붙어 있자 꼭!",
            mainUrl:"zipkok",
            scoreType:"numberScoring",
            mainImage:"https://dl.dropboxusercontent.com/s/m5f6f8df57f4qdf/zipkok-main.png?dl=0"
        },
        questions:[
            {
                question: '"00아 주말에 만날래?" 주말에 만나자는 친구! \n 하지만 이츠 쏘 매우 귀찮! 과연 당신의 답장은?',
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: '그래도 친구가 간만에 만나자는데 봐야지뭐, \n "어디서볼래?"'
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: '귀찮지만 뭐하는 지에 따라 나갈지 말지 결정한다. \n "주말? 뭐하게?"'
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: '귀찮은건 No! 약속 있는 척 하고 집에서 쉬어야지. \n "나 이번주는 안되는데..약속 있어,,"'
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
                        content: "다 필요없어~행복이란 \n '내침대에 따뜻한 전기장판과 부드러운 극세사 이불을 덮고 밀린 영화나 드라마를 귤을 까먹으면 보는 것'.."
                    },
                ]
            },
            {
                question: "아무런 약속이 없는 주말,,\n 아침일찍 눈이 떠진 나 뭐할까?",
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
                question: "드디어 금요일~~~~\n기다리던 주말이 다가온다! 뭐하지~~?",
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
                        content: "주말에..왜 약속을.. \n 난 푹쉴랭! 굳이 먼저 약속을 따로 잡지 않는다."
                    },
                ]
            },
            {
                question: "집에 있을 때 나의 모습은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "으 시간이 왤케 안가.. \n 주변 친구들에게 연락해서 나갈 각잡기"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "낮엔 자고 밤에 나가야지~ \n 8.9시쯤 나갈준비를 해본다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "밀린 드라마나 영화가 너무 많아 시간이 짧다."
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
                        content: "조큼 늦는다고 친구들이 다 가있을때 그 장소로 간다."
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
                img_src:'https://dl.dropboxusercontent.com/s/fkt02q4cy8onjr7/zipkok_chqhwlqzhrfj.png?dl=0'
            },
            {
                type: "Level 2. 선택형 집콕러",
                desc: "주말엔 집에서 쉬는게 최고지만~~ \n 날 만나고 싶다면 ~ 나가줘야지~~~~ 뭐할건데? \n 꼭 재밌는 일이 있으면 무조건 튀어나가는 그대는 바로 \n 선택형 집콕러! \n 당신은 집에 있는 걸 좋아하지만 선택장애의 면모가 리를 빗 \n 있기때문에 친구들의 설득과 흥미 딘딘한 일이 있으면 \n 바로 집에서 튀어나가버리곤 하지~~",
                query: "tjsxorgudwlqzhrfj",
                score_range:range(26, 51),
                img_src:'https://dl.dropboxusercontent.com/s/m46a1ar0zsod71d/zipkok_tjsxorgudwlqzhrfj.png?dl=0'
            },
            {
                type: "Level 3. 돌연변이 집콕러",
                desc: "극과극인 정말 집콕하고 싶을때 집에서 절대 나오지 않z...! \n 하지만 어느순간 또 약속 줄줄 잡아 버리는 그대! \n 성수기와 비성수기가 확실한 당신은 바로 \n 돌연변이 집콕러! \n 집에서도 밖에서도 최선을 다해 노는 당신! \n 한번 놀고 나면 꼭 충분한 휴식이 필요하지~",
                query: "ehfdusqusdlwlqzhrfj",
                score_range:range(51, 75),
                img_src:'https://dl.dropboxusercontent.com/s/vwl7j0xc5rrueev/zipkok_ehfdusqusdlwlqzhrfj.png?dl=0'
            },
            {
                type: "Level 4. 프로 집콕러",
                desc: "집이 곧 나의 삶의 전부일세, 당신은 바로 \n 프로 집콕러~ \n 집을 왜 나가~~ 집밖은 위험해~ \n 주변에 아무리 불러도 순순히 나가지 않지!! 마치 나는 신비주의~!! \n 하지만 그냥 나가기 귀찮은 사람 ^^ \n 개인적인 시간은 필수! 집에서 나가는 것 조차 큰 결심이 필요해요~ \n 집에 놀거리 가득하면 집 밖에 더더욱 안나갈 자신이 있어~~~~~",
                query: "vmfhwlqzhrfj",
                score_range:range(76, 101),
                img_src:'https://dl.dropboxusercontent.com/s/6jwrj44gjfi3g5g/zipkok_vmfhwlqzhrfj.png?dl=0'
            },
        ]
    },
]

export default TESTS;

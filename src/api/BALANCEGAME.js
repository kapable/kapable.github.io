export const balanceTests = [
    {
        info : {
            mainTitle:"연애 밸런스 게임 1탄",
            subTitle:"애정 박살 주의!",
            mainUrl:"loveBalance1",
            mainImage:"https://images.ktestone.com/introImages/loveBalance1-intro.jpg",
            thumbImage:"https://images.ktestone.com/main-thumbnail/loveBalance1-thumb.png",
            lang:"Kor",
            category: "game",
        },
        questions: [
            {
                options: [ '매일 헌팅 포차 다니는데 이성친구 한 명도 없는 애인 ', '매일 독서실 다니는데 이성친구 널린 애인',],
            },
            {
                options: [ '20년 지기 이성친구가 있는 애인 ', '5년 사귄 전애인이 있는 애인',],
            },
            {
                options: [ '바람 피고 평생 안 들키는 애인 ', '자백하고 용서 구하는 애인',],
            },
            {
                options: [ '모든 게 내가 처음인 애인 ', '연애 고수 알아도 너무 많이 아는 애인',],
            },
            {
                options: [ '이성친구 둘이서 1박 2일 여행 가기 ', '전 애인과 단둘이 술 마시기',],
            },
        ],
    },
    {
        info : {
            mainTitle:"연애 밸런스 게임 2탄",
            subTitle:"애정 박살 주의!",
            mainUrl:"loveBalance2",
            mainImage:"https://images.ktestone.com/introImages/loveBalance2-intro.jpg",
            thumbImage:"https://images.ktestone.com/main-thumbnail/loveBalance2-thumb.png",
            lang:"Kor",
            category: "game",
        },
        questions: [
            {
                options: [ '1분마다 연락 안 되면 불안해하는 애인 ', '24시간 뒤 카톡 해도 관심 없는 애인',],
            },
            {
                options: [ '매일 같이 번호 따이는 애인 ', '친구와 스킨십 하는 애인 (손잡기, 포옹, 어깨동무)',],
            },
            {
                options: [ '힘든 거 다 숨기고 안 말하는 애인 ', '별거 아닌 걸로도 다 말하고 찡찡 거리는 애인',],
            },
            {
                options: [ '매일 돈 없다고 말하는 애인 ', '돈은 많지만 잘 안 쓰는 짠돌이 애인',],
            },
            {
                options: [ '친구의 전 애인과 사귀기 ', '내 전 애인이 친구랑 사귀기',],
            },
        ],
    },
    {
        info : {
            mainTitle:"Love balance game part 1",
            subTitle:"Beware of breaking up",
            mainUrl:"loveBalance1Eng",
            mainImage:"https://images.ktestone.com/introImages/loveBalance1Eng-intro.jpg",
            thumbImage:"https://images.ktestone.com/main-thumbnail/loveBalance1Eng-thumb.png",
            lang:"Eng",
            category: "game",
        },
        questions: [
            {
                options: [ "A lover who goes to a bar every day to meet a girlfriend (boyfriend) but doesn't have a single girlfriend (boyfriend)", "A lover who goes to the library every day but has many girlfriends (boyfriends)",],
            },
            {
                options: [ "A lover who has a female (male) friend they've known for 20 years", "A lover who has an ex-girlfriend (or ex-boyfriend) they dated for five years.",],
            },
            {
                options: [ "A lover who cheated on her but never got caught", "A lover who has cheated but confesses and asks for forgiveness",],
            },
            {
                options: [ "A lover for whom everything is a first", "A lover who is a dating expert and knows too much",],
            },
            {
                options: [ "Going on a two-day trip with my ex-girlfriend(ex-boyfriend)", "Drinking alone with my ex-girlfriend (ex-boyfriend)",],
            },
        ],
    },
    {
        info : {
            mainTitle:"Love balance game part 2",
            subTitle:"Beware of breaking up",
            mainUrl:"loveBalance2Eng",
            mainImage:"https://images.ktestone.com/introImages/loveBalance2Eng-intro.jpg",
            thumbImage:"https://images.ktestone.com/main-thumbnail/loveBalance2Eng-thumb.png",
            lang:"Eng",
            category: "game",
        },
        questions: [
            {
                options: [ "A lover who gets anxious if they don't hear from you for a minute", "A lover who doesn't care if you contact them after 24 hours",],
            },
            {
                options: [ "A very popular lover who asks her phone number every day", "A lover who engages in physical affection with their friends (holding hands, hugging, putting an arm around someone's shoulder)",],
            },
            {
                options: [ "A lover who hides all her worries and doesn't talk", "An overly whiny lover who complains about even the smallest things",],
            },
            {
                options: [ "A lover who says they have no money every day", "A stingy lover who has a lot of money but rarely spends it",],
            },
            {
                options: [ "started dating my friend’s ex dating my friend", "My ex is dating my friend' date",],
            },
        ],
    },
];

export const balanceTestsTitle = balanceTests.map((test) => test.info.mainUrl);

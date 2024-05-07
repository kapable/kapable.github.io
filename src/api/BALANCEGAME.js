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
    }
];

export const balanceTestsTitle = balanceTests.map((test) => test.info.mainUrl);
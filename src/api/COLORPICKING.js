export const difficulties = [
    {
      difficulty: "Easy",
      rounds: [
        {
          round: 1,
          squares: 4,
          seconds: 3,
          normalColor: "#ff6ba8",
          uniqueColor: "#ff84b7",
        },
        {
          round: 2,
          squares: 4,
          seconds: 3,
          normalColor: "#ff6ba8",
          uniqueColor: "#ff84b7",
        },
        {
          round: 3,
          squares: 4,
          seconds: 3,
          normalColor: "#ff6ba8",
          uniqueColor: "#ff84b7",
        },
        {
          round: 4,
          squares: 8,
          seconds: 3,
          normalColor: "#ff84b7",
          uniqueColor: "#ff9ec6",
        },
        {
          round: 5,
          squares: 8,
          seconds: 3,
          normalColor: "#ff84b7",
          uniqueColor: "#ff9ec6",
        },
        {
          round: 6,
          squares: 8,
          seconds: 3,
          normalColor: "#ff84b7",
          uniqueColor: "#ff9ec6",
        },
        {
          round: 7,
          squares: 8,
          seconds: 3,
          normalColor: "#ff9ec6",
          uniqueColor: "#ffb7d5",
        },
        {
          round: 8,
          squares: 8,
          seconds: 3,
          normalColor: "#ff9ec6",
          uniqueColor: "#ffb7d5",
        },
        {
          round: 9,
          squares: 8,
          seconds: 3,
          normalColor: "#ff9ec6",
          uniqueColor: "#ffb7d5",
        },
        {
          round: 10,
          squares: 8,
          seconds: 3,
          normalColor: "#ffb7d5",
          uniqueColor: "#ffd1e4",
        },
      ]
    },
    {
      difficulty: "Medium",
      rounds: [
        {
          round: 1,
          squares: 16,
          seconds: 3,
          normalColor: "#ff6ba8",
          uniqueColor: "#ff84b7",
        },
        {
          round: 2,
          squares: 16,
          seconds: 3,
          normalColor: "#ff6ba8",
          uniqueColor: "#ff84b7",
        },
        {
          round: 3,
          squares: 16,
          seconds: 3,
          normalColor: "#ff6ba8",
          uniqueColor: "#ff84b7",
        },
        {
          round: 4,
          squares: 16,
          seconds: 3,
          normalColor: "#ff84b7",
          uniqueColor: "#ff9ec6",
        },
        {
          round: 5,
          squares: 16,
          seconds: 3,
          normalColor: "#ff84b7",
          uniqueColor: "#ff9ec6",
        },
        {
          round: 6,
          squares: 16,
          seconds: 3,
          normalColor: "#ff84b7",
          uniqueColor: "#ff9ec6",
        },
        {
          round: 7,
          squares: 16,
          seconds: 3,
          normalColor: "#ff9ec6",
          uniqueColor: "#ffb7d5",
        },
        {
          round: 8,
          squares: 16,
          seconds: 3,
          normalColor: "#ff9ec6",
          uniqueColor: "#ffb7d5",
        },
        {
          round: 9,
          squares: 16,
          seconds: 3,
          normalColor: "#ff9ec6",
          uniqueColor: "#ffb7d5",
        },
        {
          round: 10,
          squares: 16,
          seconds: 3,
          normalColor: "#ffb7d5",
          uniqueColor: "#ffd1e4",
        },
      ]
    },
    {
      difficulty: "Hard",
      rounds: [
        {
          round: 1,
          squares: 16,
          seconds: 3,
          normalColor: "#27c6e380",
          uniqueColor: "#39d8eb80",
        },
        {
          round: 2,
          squares: 16,
          seconds: 3,
          normalColor: "#27c6e380",
          uniqueColor: "#39d8eb80",
        },
        {
          round: 3,
          squares: 16,
          seconds: 3,
          normalColor: "#27c6e380",
          uniqueColor: "#39d8eb80",
        },
        {
          round: 4,
          squares: 16,
          seconds: 3,
          normalColor: "#27c6e345",
          uniqueColor: "#39d8eb45",
        },
        {
          round: 5,
          squares: 16,
          seconds: 3,
          normalColor: "#27c6e345",
          uniqueColor: "#39d8eb45",
        },
        {
          round: 6,
          squares: 16,
          seconds: 3,
          normalColor: "#27c6e345",
          uniqueColor: "#39d8eb45",
        },
        {
          round: 7,
          squares: 16,
          seconds: 3,
          normalColor: "#27c6e335",
          uniqueColor: "#39d8eb35",
        },
        {
          round: 8,
          squares: 16,
          seconds: 3,
          normalColor: "#27c6e335",
          uniqueColor: "#39d8eb35",
        },
        {
          round: 9,
          squares: 16,
          seconds: 3,
          normalColor: "#27c6e335",
          uniqueColor: "#39d8eb35",
        },
        {
          round: 10,
          squares: 16,
          seconds: 3,
          normalColor: "#27c6e325",
          uniqueColor: "#39d8eb25",
        },
      ]
    },
];

export const color_picker_list = difficulties.map((item) => item.difficulty);

export const tiers = [
    {
      difficulty: 'Easy',
      range: [
        {
          sec: 50,
          tier: '아이언',
        },
        {
          sec: 40,
          tier: '브론즈',
        },
        {
          sec: 30,
          tier: '실버',
        },
        {
          sec: 20,
          tier: '골드',
        },
        {
          sec: 10,
          tier: '플래티넘',
        },
        {
          sec: 9,
          tier: '에메랄드',
        },
        {
          sec: 8,
          tier: '다이아몬드',
        },
        {
          sec: 7,
          tier: '마스터',
        },
        {
          sec: 6,
          tier: '그랜드 마스터',
        },
        {
          sec: 5,
          tier: '챌린저',
        },
        {
          sec: 3,
          tier: '페이커',
        },
      ],
    },
    {
      difficulty: 'Medium',
      range: [
        {
          sec: 50,
          tier: '아이언',
        },
        {
          sec: 40,
          tier: '브론즈',
        },
        {
          sec: 30,
          tier: '실버',
        },
        {
          sec: 20,
          tier: '골드',
        },
        {
          sec: 10,
          tier: '플래티넘',
        },
        {
          sec: 9,
          tier: '에메랄드',
        },
        {
          sec: 8,
          tier: '다이아몬드',
        },
        {
          sec: 7,
          tier: '마스터',
        },
        {
          sec: 6,
          tier: '그랜드 마스터',
        },
        {
          sec: 5,
          tier: '챌린저',
        },
        {
          sec: 3,
          tier: '페이커',
        },
      ],
    },
    {
      difficulty: 'Hard',
      range: [
        {
          sec: 50,
          tier: '아이언',
        },
        {
          sec: 40,
          tier: '브론즈',
        },
        {
          sec: 30,
          tier: '실버',
        },
        {
          sec: 20,
          tier: '골드',
        },
        {
          sec: 10,
          tier: '플래티넘',
        },
        {
          sec: 9,
          tier: '에메랄드',
        },
        {
          sec: 8,
          tier: '다이아몬드',
        },
        {
          sec: 7,
          tier: '마스터',
        },
        {
          sec: 6,
          tier: '그랜드 마스터',
        },
        {
          sec: 5,
          tier: '챌린저',
        },
        {
          sec: 0.1,
          tier: '페이커',
        },
      ],
    },
];
export const songTitles = [
  {
    id: 1,
    title: 'songTitle1',
    questions: [
      '해야 해야 해야',
      `Uhm we're not going home tonight, alright`,
      '어떤 인사가 괜찮을까 천 번쯤 상상해 봤어',
      '워 머리부터 발끝까지 다 사랑스러워',
      'DARUMDARIMDA 구름을 타고 여기저기로',
      'U U U U U U U U super 이끌림',
      '아무리 기다려도 난 못가 바보처럼',
      '있어야 할 건 다 있구요',
      '내가 더 많이 사랑한 죄 널 너무나',
      '예민하대 나 lately 너 없이는 매일매일이',
      '떠나는 그대여 울지 말아요 슬퍼 말아요',
      '정답은 없어 One hunnit 그런 기대감 내려놔',
      '평온했던 하늘이 무너지고',
      '그 모든게 내겐 예뻤어',
      '첫 만남은 너무 어려워 계획대로',
      '내가 먹고 싶었던 건 달디단',
      '세상에게서 도망쳐 Run on 나와 저 끝까지 가줘',
      '저 푸른바다 끝까지 말을 달리면 소금같은',
      '붉은색 푸른색 그 사이 3초 그 짧은 시간',
      '그리움이 쫓아 사랑은 늘 도망가',
      '너 다시 돌아와 주라 꼭 다시 돌아와 주라',
      '내꺼 하자 내가 널 사랑해 어',
      '나는 사실 그대에게 좋은 사람이 아녜요',
      '거짓말이라도 믿을게 영화 같은 스토리의 끝에',
      '불타오르네 싹 다 불태워라 Bow wow wow',
      'It must be L.O.V.E 200 percent',
      '생각이 많은 건 말이야 당연히 해야 할 일이야',
      'Sign을 보내 signal 보내',
      '온몸을 덮고 있는 가시 얼마나 힘이 들었으면',
      '사건은 다가와 Ah Oh Ay',
    ],
    answers: Array.from(
      { length: 5 },
      (_, i) =>
        `https://images.ktestone.com/resultImages/songTitle1/${i + 1}.jpg`
    ),
  },
];

export const songTitlesRoutes = songTitles.map((item) => item.title);

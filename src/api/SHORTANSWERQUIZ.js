export const shortAnswerQuizes = [
  {
    info: {
      mainTitle: '캐치! 티니핑 맞추기 게임',
      subTitle: '나는 캐치! 티니핑을 얼마나 알고 있을까?',
      mainUrl: 'catchTeeniepingQuiz',
      mainImage:
        'https://images.ktestone.com/introImages/catchTeeniepingQuiz-intro.jpg',
      thumbImage:
        'https://images.ktestone.com/main-thumbnail/catchTeeniepingQuiz-thumb.png',
      lang: 'Kor',
      category: 'game',
    },
    questions: [
      {
        image:
          'https://cnqnq6x1162u.objectstorage.ap-seoul-1.oci.customer-oci.com/p/4d_DJXYmI0ejd8avuhAILIIpyZqnmHvpQPxB3i9g9MKd65-abwpaD-tq-jraNd1k/n/cnqnq6x1162u/b/machugi-image/o/381c5035-16b4-4d15-b83b-1b94a1e52a18.png',
        answer: '티니핑',
      },
      {
        image:
          'https://cnqnq6x1162u.objectstorage.ap-seoul-1.oci.customer-oci.com/p/4d_DJXYmI0ejd8avuhAILIIpyZqnmHvpQPxB3i9g9MKd65-abwpaD-tq-jraNd1k/n/cnqnq6x1162u/b/machugi-image/o/5def7d68-e117-434e-96bb-9aeaa4eedd02.png',
        answer: '티니핑',
      },
      {
        image:
          'https://cnqnq6x1162u.objectstorage.ap-seoul-1.oci.customer-oci.com/p/4d_DJXYmI0ejd8avuhAILIIpyZqnmHvpQPxB3i9g9MKd65-abwpaD-tq-jraNd1k/n/cnqnq6x1162u/b/machugi-image/o/b3545968-4f44-4207-88b0-316454551ab6.png',
        answer: '티니핑',
      },
    ],
  },
];

export const shortAnswerQuizesTitle = shortAnswerQuizes.map(
  (test) => test.info.mainUrl
);

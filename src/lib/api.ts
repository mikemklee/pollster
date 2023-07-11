export const getPolls = () => {
  return [{
    id: 1,
    question: '또 나왔으면 하는 급식 메뉴는?',
    postedAt: 1689037810000,
    options: [
      '돈까스',
      '짜장면',
      '떡볶이',
      '게살야채볶음'
    ],
    author: {
      id: 1,
      profileImage: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2021/11/12/18/8/5fce1cb6-47bd-4e6e-af93-ce5fab563fca.jpg',
      name: 'John Doe',
      handle: 'johndoe'
    }
  },
  {
    id: 2,
    question: '가장 좋아하는 여름 활동은 무엇인가요?',
    postedAt: 1689027810000,
    options: [
      '캠핑하며 별구경하기',
      '아이스크림 먹으며 동네 산책하기',
      '바다에서 서핑하기',
      '캐리비안베이 놀러가기'
    ],
    author: {
      id: 1,
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3LX-fHAFL6TcH26htCMUmnvGOl5uYKNuzA&usqp=CAU',
      name: 'John Doe',
      handle: 'johndoe'
    }
  },
  ]
}


export const getPolls = () => {
  return [{
    id: 1,
    question: 'What is your favorite color?',
    postedAt: 1689037810,
    options: [
      'Red',
      'Green',
      'Blue'
    ],
    author: {
      id: 1,
      profileImage: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      name: 'John Doe',
      handle: 'johndoe'
    }
  },
  {
    id: 2,
    question: 'What is your favorite animal?',
    postedAt: 1689027810,
    options: [
      'Dog',
      'Cat',
      'Bird'
    ],
    author: {
      id: 1,
      profileImage: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
      name: 'John Doe',
      handle: 'johndoe'
    }
  },
  ]
}


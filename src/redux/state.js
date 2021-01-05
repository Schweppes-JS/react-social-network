let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 11 },
      { id: 1, message: 'Bla-bla?', likesCount: 12 },
      { id: 1, message: 'React?', likesCount: 12 }
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Alex' },
      { id: 2, name: 'Eugune' },
      { id: 3, name: 'Antony' },
      { id: 4, name: 'Kristina' },
      { id: 5, name: 'Julia' },
      { id: 6, name: 'Mike' }
    ],
    messages: [
      { id: 1, message: 'Hi!' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Not bad. And you?' },
      { id: 4, message: 'Nothing special.' },
      { id: 5, message: 'Do you want go out?' },
      { id: 6, message: 'Yes? ofcourse!' }
    ]
  }
}

export default state;
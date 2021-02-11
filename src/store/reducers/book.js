const initial_state = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'Dom Quixote',
      lessons: [
        { id: 1, title: 'Capitulo 1' },
        { id: 2, title: 'Capitulo 2' }
      ]
    },
    {
      id: 2,
      title: 'Sítio do Pica-Pau Amarelo',
      lessons: [
        { id: 1, title: 'Capitulo 1' },
        { id: 2, title: 'Capitulo 2' }
      ]
    }
  ]
};

export default function book(state = initial_state, action) {

  if (action.type === "TOGGLE_BOOK") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    };
  }

  return state;
}
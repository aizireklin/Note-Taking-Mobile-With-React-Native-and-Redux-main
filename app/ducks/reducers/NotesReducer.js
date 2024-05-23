const init = {
  Notes: [
    {
      title: "Покормить кота",
      description: "Покормить кота в 19:00",
      priority: "NORMAL",
      id: 1,
    }
  ],
};

const NotesReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        Notes: [...state.Notes, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        Notes: state.Notes.filter((note) => note.id !== action.payload),
      };
    case "STATUS":
      return {
        ...state,
        Notes: state.Notes.map((note) => {
          return note.id === action.payload.id
            ? Object.assign({}, note, { priority: action.payload.status })
            : note;
        }),
      };
    case "EDIT":
      return {
        ...state,
        Notes: state.Notes.map((note) => {
          return note.id === action.payload.id
            ? Object.assign({}, note, { ...action.payload })
            : note;
        }),
      };
    default:
      return state;
  }
};

export default NotesReducer;

const iState = {
  name: "nabeel",
  dataSource: [
    {
      key: "1",
      id: 1,
      name: "Shahid",
      age: 32,
      task: "define"
    },
    {
      key: "2",
      id: 2,
      name: "john",
      age: 32,
      task: "define"
    },
    {
      key: "3",
      id: 3,
      name: "marry",
      age: 32,
      task: "define"
    }
  ]
};

const reducer = (state = iState, action) => {
  switch (action.type) {
    case "CREATE_USER_SUCCESS": {
      let array = state.dataSource;
      let length = array.length;
      let newData = action.payload;
      newData.id = length + 1;
      array.push(newData);
      return {
        ...state,
        dataSource: array
      };
    }
    case "UPDATE_USER_SUCCESS": {
      let array = [...state.dataSource];
      let index = array.findIndex(x => x.id === action.payload.id);
      array.splice(index, 1, action.payload);
      return {
        dataSource: array
      };
    }
    case "DELETE_USER_SUCCESS": {
      let array = [...state.dataSource];
      let index = array.findIndex(x => x.id === action.payload);
      array.splice(index, 1);
      return {
        dataSource: array
      };
    }
    default:
      return {
        ...state
      };
  }
};
export default reducer;

import { ADD, DELETE } from "../types/todoList";


const initialState = {
   todoList: [],
}

export const todoListReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD:
         return {
            ...state,
            todoList: [...state.todoList, action.payload]
         }
      case DELETE:
         return {
            ...state,
            todoList: action.payload
         }
      default:
         return state;
   }
}
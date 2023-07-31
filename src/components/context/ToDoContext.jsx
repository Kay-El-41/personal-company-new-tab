import React, { createContext, useContext, useReducer } from 'react'
import Cookies from 'js-cookie'

const ToDoContext = createContext()

export const ToDoContextProvider = ({ children }) => {
  let initialState = {}
  // get initial State Data from Local Storage
  try {
    const isExisted = Cookies.get('toDoList')
    initialState = JSON.parse(isExisted)
  } catch (error) {
    initialState = {
      toDoList: [],
    }
  } finally {
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_LIST':
        return {
          ...state,
          toDoList: [
            ...state.toDoList,
            {
              id: state.toDoList.length + 1,
              task: action.payload,
              checked: false,
            },
          ],
        }
      case 'CHECKED':
        const getTaskToCheck = state.toDoList.filter(
          (todo) => todo.id == action.payload
        )
        getTaskToCheck[0].checked = true
        const tempListChecked = state.toDoList.filter(
          (todo) => todo.id !== action.payload
        )
        return { ...state, toDoList: [...tempListChecked, getTaskToCheck[0]] }
      case 'UNCHECKED':
        const getTaskToUncheck = state.toDoList.filter(
          (todo) => todo.id == action.payload
        )
        getTaskToUncheck[0].checked = false
        const tempListUnChecked = state.toDoList.filter(
          (todo) => todo.id !== action.payload
        )
        return {
          ...state,
          toDoList: [...tempListUnChecked, getTaskToUncheck[0]],
        }
      case 'DELETE_TASK':
        return {
          ...state,
          toDoList: state.toDoList.filter((todo) => todo.id !== action.payload),
        }
      case 'SAVE_LOCAL':
        Cookies.set('toDoList', JSON.stringify(state))
        return { ...state }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const data = { state, dispatch }
  return <ToDoContext.Provider value={data}>{children}</ToDoContext.Provider>
}

export const useToDoList = () => useContext(ToDoContext)

import React, { createContext, useContext, useReducer } from 'react'
import Cookies from 'js-cookie'

const WorkContext = createContext()

export const WorkContextProvider = ({ children }) => {
  let initialState = {}
  // get the initial state from local storage
  try {
    const isExisted = Cookies.get('shortCuts')
    initialState = JSON.parse(isExisted)
  } catch (error) {
    initialState = {
      shortcutList: [{ link: 'www.power.com', name: 'Power' }],
    }
  } finally {
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_LIST':
        return {
          ...state,
          shortcutList: [
            ...state.shortcutList,
            {
              id: state.shortcutList.length + 1,
              name: action.payload.name,
              link: action.payload.link,
            },
          ],
        }
      case 'DELETE_FROM_LIST':
        return {
          ...state,
          shortcutList: state.shortcutList.filter(
            (link) => link.id !== action.payload
          ),
        }
      case 'SAVE_LOCAL':
        Cookies.set('shortCuts', JSON.stringify(state))
        return { ...state }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const data = { state, dispatch }
  return <WorkContext.Provider value={data}>{children}</WorkContext.Provider>
}

export const useWorkContext = () => useContext(WorkContext)

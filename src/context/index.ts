import { createContext } from 'react';

export interface IState {
  prevPage: string,
  currentPage: string
}

export const initialState: IState  = {
  prevPage: '/',
  currentPage: '/',
}

interface IContextState {
  contextState: IState,
  setContext: Function
}

const MainContext = createContext<IContextState>({
  contextState: initialState,
  setContext: (theme: IState) => theme
})

export default MainContext

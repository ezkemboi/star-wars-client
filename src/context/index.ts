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
  setContext: (state: IState) => void
}

const MainContext = createContext<IContextState>({
  contextState: initialState,
  setContext: (state: IState) => state
})

export default MainContext

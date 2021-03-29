/**
 * Update the prevPage and currentPage
 */
import { IState } from '../context';

const updateLocationHistory = (
  contextState: {
    prevPage: string, 
    currentPage: string
  }, 
  location: string,
  setContext: (stateContext: IState) => void
) => {
  const { currentPage } = contextState;

  const newStateContext = {
    prevPage: currentPage,
    currentPage: location
  }
  setContext(newStateContext)
}

export default updateLocationHistory;

/**
 * Update the prevPage and currentPage
 */
const updateLocationHistory = (
  contextState: {
    prevPage: string, 
    currentPage: string
  }, 
  location: string,
  setContext: Function
) => {
  const { currentPage } = contextState;

  const newStateContext = {
    prevPage: currentPage,
    currentPage: location
  }
  setContext(newStateContext)
}

export default updateLocationHistory;

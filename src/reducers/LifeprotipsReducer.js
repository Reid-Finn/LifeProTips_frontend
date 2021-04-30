const initState = {
    lifeprotips: [],
    loading: true,
    text:''
  }
  
  const lifeprotipsReducer = (state = initState, action) => {
    switch(action.type) {
      case "LOADING":
        return{
          ...state,
          loading: true,
        } 
      case "SET_LIFEPROTIPS":
        return{
          ...state,
          loading: false,
          lifeprotips: action.lifeprotips
        }
  
      case "ADD_LIFEPROTIP":
        return {
          ...state,
          lifeprotips: [action.lifeprotips, ...state.lifeprotips]
        }
  
      case "LIKE_LIFEPROTIPS":
        console.log('adding like to LPT');
        const i = state.lifeprotips.findIndex(lifeprotip => lifeprotip.id === action.id)
        const lifeprotips = state.lifeprotips[i] 
        //return state updated with lifeprotip that now has + 1 like
        return {
          ...state,
          lifeprotips: [
            ...state.lifeprotips.slice(0, i), 
            {...lifeprotips, likes: lifeprotips.likes += 1},
            ...state.lifeprotips.slice(i + 1),
          ]
        }
        
        
  
      default:
        return state;
    }
  }
  
  export default lifeprotipsReducer;
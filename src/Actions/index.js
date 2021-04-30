//retrieve all lifeprotips from DB to pass in to state in order to display them from lifeprotips component.
export const getLifeProTips = () => {
    return dispatch => {
      dispatch({type: "LOADING"})
      fetch('http://localhost:3001/lifeprotips')
      .then(resp => resp.json())
      .then(lifeprotips => {dispatch({ type: "SET_LIFEPROTIPS", lifeprotips })})
    }
  };
  
  // add a lifeprotip to database and use history from react-router-dom to redirect to index page that displays all the lifeprotips.
  export const addLifeProTip = (lifeprotip, history) => {
    return dispatch => {
      fetch('http://localhost:3001/lifeprotips', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ lifeprotip })
      })
        .then(resp => resp.json())
        .then(lifeprotip => {
          dispatch({type: "ADD_LIFEPROTIP", lifeprotip })
          history.push("/lifeprotip")
        })
    }
  };
  
  //increase likes from a specific poem via fetch and to update state
  export const addLike = (id, likes) => {
    return dispatch => {
      fetch(`http://localhost:3001/lifeprotips/${id}`, {
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          likes: likes += 1,
        })
      })
      .then(resp => resp.json())
      .then(() => {
        dispatch({type: "LIKE_LIFEPROTIP", id})
        console.log(`lifeprotip ${id}'s likes were updated`)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    }
  }
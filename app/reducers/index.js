

// const GET_ALL_CANDIES = "GET_ALL_CANDIES"
// const GET_SINGLE_CANDY = "GET_SINGLE_CANDY"



// const getAllCandies = payload =>({
//   type: GET_ALL_CANDIES,
//   payload
// })

// const getSingleCandy = payload =>({
//   type: GET_SINGLE_CANDY,
//   payload
// })
// // ThUNK
// const getAllCandiesThunk = ()=> {
//   return async dispatch => {
//     let {data} = await axios.get("/api/candies")
//     dispatch(getAllCandies(data))
//   }
// }


// const getSingleCandiesThunk = (id)=> {
//   return async dispatch => {
//     let {data} = await axios.get(`/api/candies${id}`)
//     dispatch(getSingleCandy(data))
//   }
// }

// const initialState = {
//   candies: [],
//   singleCandy: {},
//   loading: true
// }

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_ALL_CANDIES:
//     return {...state, candies: action.payload}
//     default:
//       return state
//   }
// }

// export default rootReducer

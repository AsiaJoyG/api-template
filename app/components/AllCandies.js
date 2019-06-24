import React from 'react'
import { connect } from 'react-redux';
import {getAllCandiesThunk} from "../reducers"
import {Link} from 'react-router-dom'



// export default connect(, )(AllCandies);

// export default connect(, )(AllCandies);

// export default AllCandies;

// class AllCandies extends React.Component {
//   componentDidMount(){

//   }

//   render(){
//     let candies = this.props.candies
//     if(this.props.loading){return (<div>LOADING</div>)}
//     return(

//      <div>
//        {candies.map(candy =>
//        <div key = {candy.id}>
//         <hi> {candy.name}</hi>
//         <Link to= {`/candies/${candy.id}`}><img src = {candy.image}/></Link>
//         </div>
//         )}
//      </div>
//     )
//   }
// }


//  export default AllCandies;

// const mapState = state => ({
//   candies: state.candies,
//   loading: state.loading
// })


// const mapDispatch = (dispatch) => ({
//   getCandies: ()=> dispatch(getAllCandiesThunk())
// })

// export default connect(mapState,mapDispatch)(AllCandies);

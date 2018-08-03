import React from 'react';
import { fetchCheeses } from '../actions/cheese';
import {connect} from 'react-redux';

export class CheeseList extends React.Component{

  componentDidMount(){
    this.props.dispatch(fetchCheeses());
  }

  render(){
    return(
      this.props.cheeses.map(item => 
        <ul>
          <li> {item}
          </li>
        </ul> )
    );
  }

}

const mapStateToProps = state => ({
  cheeses: state.cheeses,
  loading: state.loading
});

export default connect(mapStateToProps)(CheeseList);
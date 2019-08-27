import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import { logout } from '../../../store/actions';

class Home extends Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    this.onClickFunc = this.onClickFunc.bind(this);
  }
  onClickFunc() {
    this.props.logout();
  }
  render()  {
      return (<div>
        <ul className = "lists">
            <li><Link to = "/">HOME </Link></li>

             {this.props.role && this.props.role.length > 0 ? (<button type = "button" onClick = {this.onClickFunc} >Logout</button>) : (<li><Link to = "/login" >Login </Link></li>) }

        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
    return {
        role: state.roleReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

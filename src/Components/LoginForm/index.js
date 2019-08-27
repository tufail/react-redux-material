import React from 'react';
import Form from './Form';
import { login } from './../../store/actions';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
  componentDidMount() {
    if(this.props.role.roleReducer.length > 0) {
         this.props.history.push("/dashboard");
    }
   }
    onSubmit = (data) => {
        if(this.props.loginFunc(data.login, data.password)) {
          setTimeout( ()=>{
            if(this.props.role.roleReducer.length > 0) {
                 this.props.history.push("/dashboard");
            }
          },100)
        }

    }

    render() {
        return (
            <div>
                <Form onSubmit = {this.onSubmit}/>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        role: state
    }
}
const  mapDispatchToProps = dispatch => {
    return {
        loginFunc: (loginName, password) => dispatch(login(loginName, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

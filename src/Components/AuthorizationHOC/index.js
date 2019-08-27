import React from 'react'
import NoAccess from './../NoAccess/index';
import { connect } from 'react-redux';

const AuthorizationHOC = (access) =>
  (WrappedComponent) => {
    class WithAuthorization extends React.Component {
      render() {
          return (
              <div>
                  {this.props.access.includes(access) ? <WrappedComponent {...this.props} /> : <NoAccess {...this.props} /> }
              </div>
          )
      }
    }
    return connect(mapStateToProps)(WithAuthorization)
  }
   const mapStateToProps = state => {
     return{
       access: state.roleReducer
     }
  }
export default AuthorizationHOC

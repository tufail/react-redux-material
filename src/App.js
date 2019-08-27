import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Menu from './Components/Menu/index';
import Dashboard from './Components/Dashboard/index';
import About from './Components/About/index';
import Gallery from './Components/Gallery/index';
import Private from './Components/Private/index';
import Settings from './Components/Settings/index';
import AuthorizationHOC from './Components/AuthorizationHOC/index';
import LoginForm from './Components/LoginForm/index';
import Homepage from './Components/Pages/Home/index';
import PrivateLayout from './layouts/PrivateLayout'
import PublicLayout from './layouts/PublicLayout';
import { loginStart } from './store/actions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Theme from './styles/muiTheme';

const THEME = createMuiTheme(Theme);

class App extends Component {
    componentWillMount(){
            this.props.loginStart();
    }

    render() {
        return (
          <MuiThemeProvider theme={THEME}>
            <Router>
                <div>
                    <PublicLayout exact path="/" component={(Homepage)} />
                    <PrivateLayout exact path="/login" component={this.props.role.length === 0 ? (LoginForm) : (LoginForm)} />
                    <Route exact path="/dashboard" component={AuthorizationHOC('DashboardAccess')(Dashboard)} />
                    <Route path="/about" component={AuthorizationHOC('AboutAccess')(About)} />
                    <Route path="/gallery" component={AuthorizationHOC('GalleryAccess')(Gallery)} />
                    <Route path="/private" component={AuthorizationHOC('PrivateAccess')(Private)} />
                    <Route path="/settings" component={AuthorizationHOC('SettingsAccess')(Settings)} />
                </div>
            </Router>
         </MuiThemeProvider>
         );
    }
}
const mapStateToProps = state => {
    return {
        role: state.roleReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loginStart: () => dispatch(loginStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react'
import { Route } from 'react-router-dom'


const drawerWidth = 240;


class PrivateLayout extends React.Component {
	render() {
		const styles = {
    color: 'blue'
  }
		return (
			<Route exact={this.props.exact == undefined ? true : this.props.exact} path={this.props.path} render={matchProps => (
        <div>
					<h3>Admin Layout</h3>
					<this.props.component {...matchProps} {...this.props} />
				</div>
      )} />
		)
	}
}

export default PrivateLayout

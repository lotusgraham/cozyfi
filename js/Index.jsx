//Core React functionality
import React from 'react';
import { render } from 'react-dom'
import {IndexRoute, Router, Route, Link, browserHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

// Material-UI
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import update from 'react-addons-update';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

//App components.
import store from '../redux/store';
import Form from './Form';
import SinglePage from './SinglePage';
import * as actions from '../redux/actions/workspace.js';
import AddButton from './AddButton';

// import {Container as Cardz} from './Cardz.jsx';

const NavBar = () => (
  <AppBar
    title="Cozifi"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementRight={<TextField
      in
      hintStyle={{color:'white'}}
      hintText="Enter Your Current City"
    />}
    iconStyleRight={{marginRight:'12rem'}}>

  </AppBar>
);


const imgUrl = 'http://thepurposeisprofit.com/wp-content/uploads/2014/07/Fiap-paulista-coworking.jpg'

const styles = {
    root: {
        flex: .5,
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        width: 500,
        height: 750,
        overflowY: 'auto',
        marginBottom: 24,
        border: 'white'
    },
    container: {
        flex: .3,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-end',
        height: 750,
        overflowY: 'auto',
        marginBottom: 24,
        color: 'white',
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: "cover",
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    },
    cozyFi: {
        "border": `1px solid transparent`,
        "borderRadius": `1px`,
        "boxShadow": `0 2px 6px rgba(0, 0, 0, 0.3)`,
        "boxSizing": `border-box`,
        "MozBoxSizing": `border-box`,
        "fontSize": `14px`,
        "height": `32px`,
        "marginTop": `27px`,
        "outline": `none`,
        "padding": `0 12px`,
        "textOverflow": `ellipses`,
        "width": `400px`
    }
};

const App = (props) => (

  <div className="container">
        <nav>
          <NavBar />
        </nav>
        <div>
            {props.children}
        </div>
    </div>
);

const mapStateToProps = (state, props) => {
    return {state: state}
}

const Container = connect(mapStateToProps)(App);

const routes = (
  <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={SinglePage}/>
              <Route path="form" component={Form}/>
            </Route>
          </Router>
        </Provider>
      </MuiThemeProvider>
  </Provider>
)

render(
  routes,
  document.getElementById('app')
);

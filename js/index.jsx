import React from 'react';
var ReactDOM = require('react-dom');
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
import Toggle from 'material-ui/Toggle';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import update from 'react-addons-update';

const tilesData = [
  {
    img: 'http://loremflickr.com/640/400/breakfast/all',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'http://loremflickr.com/640/400/burger/all',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://loremflickr.com/640/400/camera/all',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://loremflickr.com/640/400/morning/all',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: 'http://loremflickr.com/640/400/hats/all',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://loremflickr.com/640/400/honey/all',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://loremflickr.com/640/400/vegetables/all',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://loremflickr.com/640/400/plant/all',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const SinglePage = () => (
  <div style={styles.container}>
      <div style={styles.cardz}> <Cardz /> </div>
      <div style={styles.gridz}> <Gridz /> </div>
  </div>
);

const styles = {
  root: {
    flex: .5,
    flexDirection:'row',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 750,
    overflowY: 'auto',
    marginBottom: 24,
  },
  container: {
    flex: .3,
    flexDirection:'row',
    display: 'flex',
    justifyContent: 'flex-end',
    // width: '100%',
    height: 750,
    overflowY: 'auto',
    marginBottom: 24,
  },
  cardz:{
    height: 750,

  }

};

const Gridz = () => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);



export default class Cardz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tilesData: [
        {
          img: 'http://loremflickr.com/640/400/breakfast/all',
          title: 'Breakfast',
          author: 'jill111',
          featured: true,
          expanded: false,
        },
        {
          img: 'http://loremflickr.com/640/400/burger/all',
          title: 'Tasty burger',
          author: 'pashminu',
          expanded: true,

        },
        {
          img: 'http://loremflickr.com/640/400/camera/all',
          title: 'Camera',
          author: 'Danson67',
          expanded: false,

        },
        {
          img: 'http://loremflickr.com/640/400/morning/all',
          title: 'Morning',
          author: 'fancycrave1',
          featured: true,
          expanded: false,

        },
        {
          img: 'http://loremflickr.com/640/400/hats/all',
          title: 'Hats',
          author: 'Hans',
          expanded: false,
        },
        {
          img: 'http://loremflickr.com/640/400/honey/all',
          title: 'Honey',
          author: 'fancycravel',
          expanded: false,
        },
        {
          img: 'http://loremflickr.com/640/400/vegetables/all',
          title: 'Vegetables',
          author: 'jill111',
          expanded: false,
        },
        {
          img: 'http://loremflickr.com/640/400/plant/all',
          title: 'Water plant',
          author: 'BkrmadtyaKarki',
          expanded: false,
        },
      ]
    };
  }
  handleExpandChange(expanded) {
    // var newState = update(this.state, {0: {expanded: {$set: expanded}}})
    // // this.update(this.state.tilesData[0].expanded, {$set: true});
    // this.setState(newState);
    // this.setState({expanded: expanded});
  };

// TODO:log state log this.state

  handleToggle(toggle, index, event) {
    var newState = update(this.state, {tilesData: {[index]: {expanded: {$set: toggle}}}})
    // this.update(this.state.tilesData[0].expanded, {$set: true});
    console.log(index)

    this.setState(newState);
    // this.setState({expanded: toggle});
  };

// update(state1, {$push: ['y']})

  handleExpand() {
    // var newState = update(this.state, {tilesData: {0: {expanded: {$set: true}}})
    // // this.update(this.state.tilesData[0].expanded, {$set: true});
    // this.setState(newState);

  };

  handleReduce() {
    // var newState = update(this.state, {tilesData: {0: {expanded: {$set: false}}}})
    // // this.update(this.state.tilesData[0].expanded, {$set: true});
    // this.setState(newState);

        // this.setState({expanded: false});
  };

  render() {
    return (
      <div>
      {this.state.tilesData.map((tile, index) => (
      <Card
        onClick={this.handleToggle.bind(this, !tile.expanded, index)}
        expanded={tile.expanded}
        onExpandChange={this.handleExpandChange}>

        <CardHeader
          title={tile.title}
          subtitle={"Subtitle"}
          avatar="http://lorempixel.com/100/100/nature/"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>

        </CardText>
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={tile.img} />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
        </CardActions>
      </Card>
    ))}


      </div>
    );
  }
}


// style={{width: '60%',
//        marginLeft: '10rem'}}   >




const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <SinglePage />
  </MuiThemeProvider>
);


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById('app'));
});

// ReactDOM.render(
//   <Carz />,
//   document.getElementById('app')
// );

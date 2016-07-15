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
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';


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


const tilesData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/da/DeskUnion_Coworking_Glasgow.jpg',
    title: 'Featured',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'http://pt.wix.com/blog/wp-content/uploads/2014/08/Espa%C3%A7os-de-Coworking-Laborat%C3%B3rios-de-Ideias-para-Empreendedores-03.jpg',
    title: 'Free Wifi',
    author: 'pashminu',
  },
  {
    img: 'http://cdn3-www.thefashionspot.com/assets/uploads/gallery/fueled/p1000011.jpg',
    title: 'Network',
    author: 'Danson67',
  },
  {
    img: 'https://static1.squarespace.com/static/53dc4794e4b0397c480f3887/t/5553ffdde4b05be4fb518bf7/1431568371755/',
    title: 'Location Based',
    author: 'fancycrave1',
    featured: true,
  },
];

const SinglePage = () => (
  <div>
    <NavBar />
      <div style={styles.container}>
      <div style={styles.cardz}> <Cardz /> </div>
      <div style={styles.gridz}> <Gridz /> </div>
  </div>
</div>

);

const imgUrl = 'http://thepurposeisprofit.com/wp-content/uploads/2014/07/Fiap-paulista-coworking.jpg'

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
    border: 'white'
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
    color: 'white',
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: "930px 1000px",
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  },
  cardz:{
    maxHeight: 500,

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
          img: 'https://static1.squarespace.com/static/53fe0ff1e4b03ae33c173d0b/t/565f50cfe4b0d9b44ab71fe0/1449087188284/Provost-Studio-RTP-Frontier_Photo-14_x.jpg?format=1500w',
          avatar: 'https://writenaked.files.wordpress.com/2016/01/img_3792.jpg?w=300&h=254',
          title: 'The Frontier',
          subtitle: 'Free coworking environment in RTP',
          wifi: 'RTPGuest',
          passwrod: 'open',
          quirks: 'wifi is weird sometimes',
          address: {street: '800 Park Offices Dr',
                    city: 'Durham, NC',
                    zip: 27709},
          submitter: 'gwhitley',
          featured: true,
          expanded: false,
        },
        {
          img: 'https://c2.staticflickr.com/6/5349/17374712440_ae198715ea_z.jpg',
          avatar: 'http://s3-media4.fl.yelpcdn.com/bphoto/eryKArSBuET-Dj4FcBuoKw/348s.jpg',
          title: 'Cocoa Cinnamon',
          subtitle: 'Hip coffee shop in Durham\'s DIY district',
          wifi: 'Cocoa Cinnamon',
          passwrod: 'ESPRESSO!',
          quirks: 'nowhere to park',
          address: {street: '420 W Geer St',
                    city: 'Durham, NC',
                    zip: 27707},
          submitter: 'gwhitley',
          expanded: false,

        },
        {
          img: 'http://video.aia.org/aiaawards/2013/2013-library-awards/jbhj-library/i/photo4.jpg',
          avatar: 'https://i.vimeocdn.com/portrait/8150369_300x300.jpg',
          title: 'James B Hunt Jr Library',
          subtitle: 'NCSU Campus Library, designer digs with super-fast wifi',
          wifi: 'Library Wifi',
          passwrod: 'open',
          quirks: 'pay to park',
          address: {street: '1070 Partners Way',
                    city: 'Raleigh, NC',
                    zip: 27606},
          submitter: 'gwhitley',
          expanded: false,

        },
        {
          img: 'https://farm4.staticflickr.com/3835/15130401655_c191ae776b.jpg',
          avatar: 'https://static1.squarespace.com/static/56b3cbf945bf21bec4f54976/t/56b657aeb6aa60e6d942a7cf/1467146667788/?format=1500w',
          title: 'Honeysuckle Teahouse',
          subtitle: 'Open air tea cafe on an herb farm outside Chapel Hill',
          wifi: 'GuestWifi',
          passwrod: '1122112233',
          quirks: 'kind of a far drive from town',
          address: {street: '1070 Partners Way',
                    city: 'Raleigh, NC',
                    zip: 27606},
          submitter: 'gwhitley',
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
          subtitle={tile.subtitle}
          avatar={tile.avatar}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>

        </CardText>
        <CardMedia
          inlineStyle={styles.cardz}
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

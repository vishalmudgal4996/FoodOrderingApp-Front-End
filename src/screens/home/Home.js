import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CardActionArea from '@material-ui/core/CardActionArea';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        restaurantList: []
    }
}


componentWillMount() {

  let data = null;
  let xhr = new XMLHttpRequest();
  let that = this;
  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          console.log(this.responseText);
          that.setState({
              restaurantList: JSON.parse(this.responseText).restaurants
          });
      }
  });

  xhr.open("GET", this.props.baseUrl + "restaurant");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.send(data);

}

  updateSearchRestaurant = (searchRestaurant, searchOn) => { };

  render() {
    return (
      <div>
        <Header
          homeOptions="true"
          baseUrl={this.props.baseUrl}
          updateSearchRestaurant={this.updateSearchRestaurant}
        />

        
      </div >

    );
  }
}

export default Home;

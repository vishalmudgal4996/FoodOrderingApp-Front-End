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

  restaurantCardClickHandler = (restaurantId) => {
    this.props.history.push('/restaurant/' + restaurantId);
  }


  render() {
    return (
      <div>
        <Header
          homeOptions="true"
          baseUrl={this.props.baseUrl}
          updateSearchRestaurant={this.updateSearchRestaurant}
        />

        <GridList cellHeight={600} cols={4} spacing={2}>


          {this.state.restaurantList.map(restaurant =>
            (
              <GridListTile key={restaurant.id}>
                <Card style={{ width: "95%", height: "95%" }} >
                  <CardActionArea onClick={() => this.restaurantCardClickHandler(restaurant.id)}>
                    <CardMedia
                      component="img"
                      alt={restaurant.name}
                      height="160"
                      image={restaurant.photo_URL}
                      title={restaurant.restaurant_name}
                    />
                    <CardContent >
                      <Typography gutterBottom variant="h4" component="h2">
                        {restaurant.restaurant_name}
                      </Typography>
                      <div><br />
                        <Typography style={{ height: "18px", display: "block" }} variant="h6" >
                          {restaurant.categories}
                        </Typography>
                      </div>
                      <br /><br />
                    </CardContent>
                    <div className="rating-main-contnr">
                      <div className="rating-bg-color">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <span> {restaurant.customer_rating} ({restaurant.number_customers_rated})</span>
                      </div>
                      <div className="avg-price">
                        <span><i className="fa fa-inr"></i><span style={{ fontSize: "100%", fontWeight: "bold" }}>{restaurant.average_price} for two </span></span>
                      </div>
                    </div>
                  </CardActionArea>
                </Card>
              </GridListTile>
            )
          )}

        </GridList>

      </div >

    );
  }
}

export default Home;

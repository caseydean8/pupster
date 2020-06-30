import React, { Component } from "react";
import API from "../../utils/API";

class Discover extends Component {
  state = {
    result: {},
  };

  componentDidMount() {
    this.dogSearch();
  }

  dogSearch = () => {
    API.search()
      .then((res) => {
        this.setState({ result: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Discover Page</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus
          cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit
          at.
        </p>
      </div>
    );
  }
}

export default Discover;

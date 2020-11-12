import React from 'react';
import $ from 'jquery';

export default class StoryComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      headline1: "",
      location: "",
      headline2: "",
    }
  }

  fetchCoord = () => {
    let context = this;
    $.ajax({
      url: 'https://run.mocky.io/v3/3e165613-d495-4a4e-be85-7456c2710d59',
      method: 'GET',
      success: function(response) {
        console.log("resp-> ", response);
        context.setState({
          headline1: JSON.stringify(response.metadata),
        });
      }
    });
  }

  fetchStory = () => {
    let context = this;
    $.ajax({
      url: 'https://www.boredapi.com/api/activity/',
      method: 'GET',
      success: function(response) {
        context.setState({
          headline2: response.type,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchCoord}>Click to read local news</button>
        <h1>{this.state.headline1}</h1>
        <button onClick={this.fetchStory}>Negative Case</button>
        <h1>{this.state.headline2}</h1>
      </div>
    );
  }
}
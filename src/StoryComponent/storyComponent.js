import React from 'react';
import $ from 'jquery';

export default class StoryComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      headline1: "",
      location1: "",
      headline2: "",
      location2: "",
    }
  }

  fetchCoord = () => {
    let context = this;
    $.ajax({
      url: 'https://run.mocky.io/v3/3e165613-d495-4a4e-be85-7456c2710d59',
      method: 'GET',
      success: function(response) {
        context.setState({
          headline1: response.story.headline,
          location1: JSON.stringify(response.story.metadata['story-attributes']['geo-location']),
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
        <button class="glow-on-hover" type="button" onClick={this.fetchCoord}>Click to read local news</button>
        <h3>{this.state.headline1}</h3>
        <h3>{this.state.location1}</h3>
        <button class="glow-on-hover" type="button" onClick={this.fetchStory}>Negative Case</button>
        <h3>{this.state.headline2}</h3>
      </div>
    );
  }
}
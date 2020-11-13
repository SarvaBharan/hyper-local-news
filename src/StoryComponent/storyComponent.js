import React from 'react';
import $ from 'jquery';
// import { Story } from "@quintype/framework/server/api-client";
import fetch from 'node-fetch';

export default class StoryComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      headline1: "",
      response: [],
      response1: []
    }
  }

  fetchCoord = () => {
    let context = this;
    fetch('https://tntdemo-madrid.qtstage.io/api/v1/stories?section-id=48276')
    .then(res => res.json())
    .then(body => {
      body = body.stories.filter(story => story.metadata["story-attributes"]["geo-location"].lat === 12.9322498 && story.metadata["story-attributes"]["geo-location"].lon === 77.5478692)
      context.setState({
        response: body
      })
    })  
  }

  fetchStory = async () => {
    let context = this;
    fetch('https://tntdemo-madrid.qtstage.io/api/v1/stories?section-id=48276')
    .then(res => res.json())
    .then(body => {
      body = body.stories.filter(story => story.metadata["story-attributes"]["geo-location"].lat !== 12.9322498 && story.metadata["story-attributes"]["geo-location"].lon !== 77.5478692)
      context.setState({
        response1: body
      })
    })  
  }

  render() {
    return (
      <div>
        <button className="glow-on-hover" type="button" onClick={this.fetchCoord}>Click to read Girinagar news</button>
        <div>{this.state.response.map(story => {
          this.state.response = [];
          return <h3>{story.headline}</h3>;
        })}
        </div>
        <br />
        <button className="glow-on-hover" type="button" onClick={this.fetchStory}>Read stories from HSR</button>
        <div>{this.state.response1.map(story => {
          this.state.response1 = [];
          return <h3>{story.headline}</h3>;
        })}
      </div>
      </div>
    );
  }
}
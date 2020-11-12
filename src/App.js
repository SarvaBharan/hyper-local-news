import React from "react";
import { geolocated } from "react-geolocated";
import StoryComponent from './StoryComponent/storyComponent';
import LocationComponent from './LocationComponent/locationComponent';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLocation: false
        }
    }

    fetchLocation = () => {
        this.setState({ showLocation: true });
    }

    render() {
        return (
            <div>
                <button onClick={this.fetchLocation}>Get Location</button>
                {this.state.showLocation && <LocationComponent />}
                <StoryComponent />
            </div>
        )
    }
}
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Demo);
import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';


// App component - represents the whole app
class App extends Component {

    render() {
        return (
            <div className="container">
            </div>
        );
    }
}

export default withTracker(() => {
    return {

    };
})(App);
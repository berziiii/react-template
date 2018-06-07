import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
    render() {
        const title = this.props.title;
        const description = this.props.description || 'Test, this is a description';
        return (
            <div>
                <h3>{title}</h3>
                <h4>{description}</h4>
            </div>
        );
    }
};

module.exports = {
    Test,
}


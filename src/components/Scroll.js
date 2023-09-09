import React from "react";

class Scroll extends React.Component {
    render() {
        return (
            <div style = {{overflowY: 'scroll', height: '800px'}}>
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;
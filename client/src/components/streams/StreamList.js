import React from 'react';
import { connect } from "react-redux";
import { listStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.listStreams()
  };
  
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={ stream.id }>
          <i className="large middle aligned icon camera" />
          <div className="content">
            { stream.title }
            <div className="description">{ stream.description }</div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.props.streams)
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{ this.renderList() }</div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return { streams: Object.values(state.streams) }; // Get the values of the Objects and put it in an array to map over

};

export default connect(mapStateToProps, { listStreams })(StreamList);
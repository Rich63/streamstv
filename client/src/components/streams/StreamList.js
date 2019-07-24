import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { listStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.listStreams()
  };

  renderAdmin(stream) {
    // Check if the logged in user has streams and show the edit/delete button if so.
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={ `/streams/edit/${ stream.id }` }
            className="ui button primary">
              Edit
          </Link>
          <Link
            to={ `/streams/delete/${ stream.id }` }
            className="ui button negative">
              Delete
          </Link>
        </div>
      );
    }
  };
  
  renderList() {
    // Showing the list of streams and check to show edit/delete buttons on streams created by the logged in user
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={ stream.id }>
          { this.renderAdmin(stream) }
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link
              to={ `/streams/${stream.id}` }
              className="header"
            >
                { stream.title }
            </Link>
            <div className="description">{ stream.description }</div>
          </div>
        </div>
      );
    });
  };

  renderCreateButton() {
    // To show the Create Stream button when user is logged in
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{ this.renderList() }</div>
        { this.renderCreateButton() }
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    // Get the values of the Objects and put it in an array to map over
    streams: Object.values(state.streams),
    // Get the userId to compare for showing edit and delete only on the streams created by user
    currentUserId: state.auth.userId,
    // To show the Create stream button when logged in, we use the property isSignedIn from auth
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { listStreams })(StreamList);
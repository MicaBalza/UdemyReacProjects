import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "../../components/streams/StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>No stream yet!</div>;
    } else {
      return (
        <div>
          <h2>Edit Stream</h2>
          <StreamForm
            onSubmit={this.onSubmit}
            initialValues={_.pick(this.props.stream, "title", "description")}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);

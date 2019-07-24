import React from 'react';
import history from "../../history";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    // <React.Fragment> can be replaced by <>
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
    // </React.Fragment> can be replaced by </>
  );

  return (
    <div>
      StreamDelete
      <Modal 
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={ actions }
        onDismiss={ () => history.push("/") }
      />
    </div>
  );
};

export default StreamDelete;
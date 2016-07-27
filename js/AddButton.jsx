import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router'

const style = {
  marginRight: 20,
};

const AddButton = () => (
  <div>
    <Link to="/form">
      <FloatingActionButton secondary={true} style={style}>
        <ContentAdd />
      </FloatingActionButton>
    </Link>
  </div>
);

export default AddButton;

import React from 'react';

const withTabContent = (WrappedComponent, content) => {
  return (props) => <WrappedComponent {...props} content={content} />;
};

export default withTabContent;
import React from 'react';
import './index.less';

const Loading = () => {

  return (
    <div className="loading">
      <div className="loader">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Loading;

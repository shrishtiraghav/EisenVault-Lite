import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        
        promiseInProgress &&
        <div
            style={{
                width: "120%",
                height: "120",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
    >
      <Loader type="ThreeDots" color="#E07050" height="100" width="100" />
    </div>
    );
}

export default LoadingIndicator;
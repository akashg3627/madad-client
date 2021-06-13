import React from 'react';
import {Spinner} from 'reactstrap';

function Loading(props) {
    return (
        <div className="loading align-middle ">
            <Spinner color="primary" />
        </div>
    );
}

export default Loading;
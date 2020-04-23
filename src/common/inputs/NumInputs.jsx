import React from 'react';

function NumInputs(props) {
    return (
        <div>
            <p>Number to Display: {props.numInputs}</p>
            <input type="range" min="1" max="10" defaultValue={props.numInputs}
                onChange={(e)=>props.numInputsChange(e)}></input>
        </div>
    );
}

export default NumInputs;
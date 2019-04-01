import React from 'react';

const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children} (/*Using this is for wrapping other components*/)
        </div>
    ) 
}

export default Scroll;
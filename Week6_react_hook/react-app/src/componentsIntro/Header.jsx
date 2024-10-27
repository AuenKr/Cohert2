import React from 'react';

export const Header = React.memo(function ({ title }) {
    console.log("Header re-render", title);
    return (
        <>
            <div>{title}</div>
        </>
    )
});



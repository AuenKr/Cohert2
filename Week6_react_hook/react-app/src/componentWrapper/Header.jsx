import React from 'react';

const Header = React.memo(function (prop) {
    return (
        <>
            <div>{prop.title}</div>
        </>
    )
});

export default Header

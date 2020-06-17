import React, { useReducer } from "react";

function Welcome(props) {
    const { user } = props;
    return (
        <div>
            <h1>Welcome{user.name}</h1>
            <h3>Here's the info you provided</h3>
            <div>
                <p>Email: {user.email}</p>
            </div>
        </div>
    )
}

export default Welcome;
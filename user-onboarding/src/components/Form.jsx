import React from "react";

function Form(props) {
    const { name, email, password, termsOfService } = props;
    return (
        <div>
            <form>
                <label>
                    Name:&nbsp;
                    <input
                        type="text"
                        value={name}
                    />
                </label>
                <label>
                    Email:&nbsp;
                    <input
                        type="text"
                        value={email}
                    />
                </label>
                <label>
                    Password:&nbsp;
                    <input
                        type="text"
                        value={password}
                    />
                </label>
                <label>
                    Terms of Service:&nbsp;
                    <input
                        type="checkbox"
                        checked={true}
                    />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Form;
import React from "react";

function Form(props) {
    const { form, handleChange, handleSubmit } = props;
    return (
        <div>
            <form>
                <label>
                    Name:&nbsp;
                    <input
                        type="text"
                        value={form.name}
                    />
                </label>
                <label>
                    Email:&nbsp;
                    <input
                        type="text"
                        value={form.email}
                    />
                </label>
                <label>
                    Password:&nbsp;
                    <input
                        type="text"
                        value={form.password}
                    />
                </label>
                <label>
                    Terms of Service:&nbsp;
                    <input
                        type="checkbox"
                        value={form.termsOfService}
                        checked={true}
                    />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Form;
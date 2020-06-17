import React from "react";

function Form(props) {
    const { form, handleChange, handleSubmit, handleCheckbox, buttonStatus } = props;
    return (
        <div>
            <form>
                <label>
                    Name:&nbsp;
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:&nbsp;
                    <input
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password:&nbsp;
                    <input
                        type="text"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Terms of Service:&nbsp;
                    <input
                        type="checkbox"
                        name="termsOfService"
                        checked={form.termsOfService}
                        onChange={handleCheckbox}
                    />
                </label>
                <button type="submit" onSubmit={handleSubmit}>Sign Up</button>
            </form>
        </div>
    )
}

export default Form;
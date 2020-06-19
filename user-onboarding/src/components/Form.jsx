import React from "react";

function Form(props) {
    const { form, handleChange, handleSubmit, handleCheckbox, buttonStatus, errors } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    <div style={{ color: "red" }}>{errors.name}</div>
                    <div style={{ color: "red" }}>{errors.email}</div>
                    <div style={{ color: "red" }}>{errors.password}</div>
                    <div style={{ color: "red" }}>{errors.termsOfService}</div>
                </div>
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
                        type="password"
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
                <button disabled={buttonStatus}>Sign Up</button>
            </form>
        </div>
    )
}

export default Form;
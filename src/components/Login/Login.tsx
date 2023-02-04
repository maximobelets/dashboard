import React from "react";

export const Login = () => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');


    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault;
        console.log('Form submit')
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={formSubmit}>
                <label>
                    <input
                        value={login}
                        type="text"
                        onChange={(e: React.FormEvent<HTMLInputElement>) => setLogin(e.currentTarget.value)}
                    />
                </label>
                <label>
                    <input
                        value={password}
                        type="password"
                        onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
                    />
                </label>
                <button type="submit">
                    s
                </button>
            </form>
        </>
    )
}
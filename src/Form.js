import React from 'react';
import usePasswordStrength from './usePasswordStrength';

function Form() {
    const [isStrong, setPassword] = usePasswordStrength();

    return (
        <form>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
            {isStrong ? "Password is good enough" : "Enter Strong Password"}
        </form>
    )
}

export default Form;
import React from 'react';

function usePasswordStrength() {
    const [isStrong, setIsStrong] = React.useState(false);

    const setPassword = (password) => {
        if (password.length < 8) {
            setIsStrong(false);
        } else {
            setIsStrong(true);
        }
    }

    return [isStrong, setPassword];
}

export default usePasswordStrength;
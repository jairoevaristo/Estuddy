import { useState, useEffect } from 'react';

function usePesister(key, initalValue) {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key);

        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return initalValue
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState]
}

export default usePesister;
import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
    const [timer, setTimer] = useState(15);

    useEffect(() => {
        const tick =
            setInterval(() => {
                setTimer(t => t - 1);
            }, 1000);

        if (timer <= 0) clearInterval(tick);

        return () => clearInterval(tick);
    }, [timer]);

    return (
        <div>{timer}</div>
    );
}

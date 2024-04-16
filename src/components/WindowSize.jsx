import React, { useState, useEffect } from 'react';

const defSize = { h: window.innerHeight, w: window.innerWidth };

export default function WindowSize() {
    const [size, setSize] = useState(defSize);

    function resizeWin() {
        setSize(
            {
                h: window.innerHeight,
                w: window.innerWidth
            }
        )
    }

    useEffect(() => {
        window.addEventListener('resize', resizeWin);
        return () => {
            window.removeEventListener('resize', resizeWin)
        }
    }, [size])

    return (
        <div>
            <h2>WindowSize:</h2>
            <ul>
                <li>Height:{size.h}</li>
                <li>Wight:{size.w}</li>
            </ul>
        </div>

    )
}
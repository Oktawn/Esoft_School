import React from "react";

export function VisibleComp({ onShow, name }) {
    return (
        <button onClick={onShow}>{name}</button>
    );
}
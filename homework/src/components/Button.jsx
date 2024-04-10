import { useState } from "react";

function ButtonMy({ name }) {
    const [pos, setPos] = useState(0);
    function handleClick() {
        if (name === "next") {
            if (pos > my_comp.length) { setPos(pos - pos); }
            else { setPos(pos + 1); }
        }
        else {
            if (pos > 0) { setPos(pos - 1); }
            else { setPos(pos + 1); }
        }
    }


    return (
        <button onClick={handleClick}>{name}</button>
    );
};


const my_comp = [["./images/happy.jpg", "главная компитенция"], ["./images/sleep.jpg", "любимое дело"], ["./images/images/programming.jpg", "что обычно делаю"], ["./images/c++.jpg ", "любимый язык"]];


export default ButtonMy;
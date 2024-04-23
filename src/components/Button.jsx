import { useState } from "react";

function ButtonMyDescription({ name, onUpdate }) {
    const [pos, setPos] = useState(0);
    function handleClick() {
        if (name === "next") {
            if (pos >= my_comp.length - 1) {
                setPos(0);
            } else {
                setPos(pos + 1);
            }
        } else {
            if (pos > 0) {
                setPos(pos - 1);
            } else {
                setPos(0);
            }
        }
        onUpdate({
            img_src: my_comp[pos][0],
            text: my_comp[pos][1],
        });
    }
    return (
        <button onClick={handleClick}>{name}</button>
    );
};

export function ButtonDescriptionRecom({ name, onUpdate }) {
    const [pos, setPos] = useState(0);
    function handleClick() {
        if (name === "next") {
            if (pos >= des_comp.length - 1) {
                setPos(0);
            } else {
                setPos(pos + 1);
            }
        } else {
            if (pos > 0) {
                setPos(pos - 1);
            } else {
                setPos(0);
            }
        }
        onUpdate({
            text: des_comp[pos],
        });
    }
    return (
        <button onClick={handleClick}>{name}</button>
    );
}



const my_comp = [["./images/happy.jpg", "главная компитенция"], ["./images/sleep.jpg", "любимое дело"], ["./images/programming.jpg", "что обычно делаю"], ["./images/c++.jpg ", "любимый язык"]];

const des_comp = ["научиться строить полноценные приложения", "изучить основы верски", "понять связь между front/back", "работать с БД", "научиться работать с контейнеризацией", "постичь принцип CI/CD", "на этом поток желании пока заканчивается ＼（〇_ｏ）／"]

export default ButtonMyDescription;
import { useState } from "react";

export default function AddComp({ onAddComp }) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [pers, setPerc] = useState(0)

    return (
        <>
            <input placeholder="Add Competencies "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input placeholder="Add Descriptions"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <input placeholder="Add progress "
                value={pers}
                onChange={(e) => setPerc(e.target.value)} />

            <button
                onClick={() => {
                    setTitle();
                    setDesc();
                    setPerc();
                    onAddComp(title, desc, pers);
                }
                }
            >Add Competencies</button>
        </>
    )

}
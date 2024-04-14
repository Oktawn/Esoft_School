import { useState } from "react";

export default function AddComp({ onAddComp }) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [pers, setPerc] = useState(0);

    const handleAddComp = () => {
        onAddComp(title, desc, pers);
        setTitle('');
        setDesc('');
        setPerc(0);
    };

    return (
        <>
            <input placeholder="Add Competencies "
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input placeholder="Add Descriptions"
                type="text"
                value={desc}
                onChange={e => setDesc(e.target.value)}
            />
            <input placeholder="Add progress "
                type="number"
                max={100}
                value={pers}
                onChange={e => setPerc(parseInt(e.target.value > 100 ? 100 : e.target.value))} />

            <button onClick={handleAddComp}>Add Competencies</button>
        </>
    )

}
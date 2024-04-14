import Card from "./Cards";

export default function CompList({
    comps,
    onChangeComp,
    onDelComp
}) {
    return (
        <ul>
            {comps.map(comp => (
                <li key={comp.title}>
                    <Card
                        comp={comp}
                        onChange={onChangeComp}
                        onDel={onDelComp}
                    />
                </li>
            ))}
        </ul>
    );
}
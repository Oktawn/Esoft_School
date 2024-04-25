import Card from "./Cards";

export default function CompList({
    comps,
    onDelComp
}) {
    return (
        <ul>
            {comps.map(comp => (
                <li key={comp.title}>
                    <Card
                        comp={comp}
                        onDel={onDelComp}
                    />
                </li>
            ))}
        </ul>
    );
}
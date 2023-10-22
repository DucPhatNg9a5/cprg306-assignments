export default function Item({name, quantity, category, onSelect}) {
    return (
        <ul className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-blue-500" onClick={() => onSelect(name)}>
            <li>{name}</li>
            <li>{quantity}</li>
            <li>{category}</li>
        </ul>
    );
}
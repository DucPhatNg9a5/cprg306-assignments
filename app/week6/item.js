export default function Item({name, quantity, category}) {
    return (
        <ul className="p-2 m-4 bg-slate-900 max-w-sm">
            <li>{name}</li>
            <li>{quantity}</li>
            <li>{category}</li>
        </ul>
    );
}
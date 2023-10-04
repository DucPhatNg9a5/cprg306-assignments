export default function Item({name, quantity, category}) {
    return (
        <ul className="p-2 m-4 bg-slate-900 max-w-sm">
            <li>Name {name}</li>
            <li>Quantity: {quantity}</li>
            <li>category: {category}</li>
        </ul>
    );
}
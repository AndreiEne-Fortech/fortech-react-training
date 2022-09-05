export default function IncrementButton({ onClick }) {
    const handleClick = () => { onClick(); }
    return (
        <button onClick={handleClick}>Increment</button>
    )
}
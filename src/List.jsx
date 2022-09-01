export default function List({ array, msg }) {
    return (
        <>
            <p>{msg}</p>
            <ul>
                {
                    array.map((elem) => {
                        return <li key={elem}>{elem}</li>
                    })
                }
            </ul>
        </>
    )
}
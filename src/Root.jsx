import Header from './Header'
import Content from './Content'
import IncrementButton from './IncrementButton'
import CurrentCount from './CurrentCount'
import { useState } from 'react'
import SearchResult from './SearchResult'

export default function Root() {
    const [num, setNum] = useState(0)
    const [value, setValue] = useState("")
    const [searchResultValue, setSearchResultValue] = useState("")

    function handleValue(event) {
        setValue(event.target.value)
    }

    function increment() {
        setNum((oldNum) => oldNum + 1)
    }

    function handleShowValue() {
        setSearchResultValue(value)
    }

    return (
        <>
            <Header />
            <Content onValueChanged={handleValue} onShowValue={handleShowValue} />
            <CurrentCount count={num} />
            <IncrementButton onClick={increment} />
            <SearchResult value={searchResultValue} />
        </>
    )

}
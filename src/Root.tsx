import Header from './Header'
import Content from './Content'
import IncrementButton from './IncrementButton'
import CurrentCount from './CurrentCount'
import { useState } from 'react'
import SearchResult from './SearchResult'
import React from 'react'
import Clock from './Clock'
import Sizer from './Sizer'
import NumberList from './NumberList'
import { MyContext } from './MyContext'

export default function Root() {
    const [num, setNum] = useState(0)
    const [value, setValue] = useState("")
    const [searchResultValue, setSearchResultValue] = useState("")

    function handleValue(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    function increment() {
        setNum((oldNum) => oldNum + 1)
    }

    function handleShowValue() {
        setSearchResultValue(value)
    }

    return (
        <MyContext.Provider value={handleValue}>
            <Header />
            <Content onShowValue={handleShowValue} />
            <CurrentCount count={num} />
            <IncrementButton onClick={increment} />
            <SearchResult value={searchResultValue} />

            <Clock />
            <Sizer />
            <NumberList />
        </MyContext.Provider>
    )

}
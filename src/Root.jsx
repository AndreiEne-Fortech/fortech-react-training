import Header from './Header'
import Content from './Content'
import { impureFunction, pureFunction } from './pureFunction'

export default function Root() {
    impureFunction()
    impureFunction()
    impureFunction()

    // pureFunction(2, 2)
    // pureFunction(2, 2)
    // pureFunction(2, 2)
    // pureFunction(2, 2)

    return (
        <>
            <Header />
            <Content />
        </>
    )

}
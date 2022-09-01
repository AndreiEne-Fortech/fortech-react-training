function Hello() {
    const date = new Date().getHours()
    const morning = 'Good morning';
    const evening = 'Good evening';
    const night = 'Good night';

    if (date >= 8 && date <= 12) {
        return (
            <h1>{morning}</h1>
        )
    } else if (date > 12 && date <= 21) {
        return <h1>{evening}</h1>
    }
    else {
        return (
            <h1>{night}</h1>
        )
    }
}

export default Hello

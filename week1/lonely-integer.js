function lonelyInteger(a) {
    const [lonely] = a.sort((a, b) => a - b).reduce((acc, curr) => {
        if (!acc.includes(curr)) {
            acc.push(curr)
        } else {
            acc.pop()
        }

        return acc
    }, [])

    return lonely
}
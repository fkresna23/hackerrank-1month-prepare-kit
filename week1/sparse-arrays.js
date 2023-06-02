function matchingStrings(strings, queries) {
    const occurrences = {}
    const result = Array(queries.length)
    strings.forEach(str => {
        if (occurrences[str]) {
            occurrences[str]++;
        } else {
            occurrences[str] = 1;
        }
    })
    queries.forEach((q, index) => {
        if (occurrences[q]) {
            result[index] = occurrences[q]
        } else {
            result[index] = 0
        }
        
    });
    return result
}
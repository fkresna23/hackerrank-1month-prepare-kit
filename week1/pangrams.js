function pangrams(s) {
    let hash = {};
    s = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if(s[i] !== ' ') {
            hash[s[i]] = s[i];
        }
    }
    if (Object.keys(hash).length === 26) {
        return 'pangram';
    } else {
        return 'not pangram';
    }
}
function vowelsAndConsonants(s) {
    let vowel = '';
    let consonant = '';

    for (let i = 0; i < s.length; i++) {
        if (['a', 'i', 'u', 'e', 'o'].includes(s.charAt(i))) {
            vowel += s.charAt(i);
            continue;
        }
        consonant += s.charAt(i);
    }
    console.log(vowel.split('').join('\n'));
    console.log(consonant.split('').join('\n'));
}

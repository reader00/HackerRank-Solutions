function reverseString(s) {
    try {
        const a = s.split('').reverse().join('');
        s = a;
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}

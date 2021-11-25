function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = new RegExp(/^(a|i|u|e|o).*\1$/);

    /*
     * Do not remove the return statement
     */
    return re;
}

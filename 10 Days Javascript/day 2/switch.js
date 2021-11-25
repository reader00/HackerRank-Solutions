function getLetter(s) {
    let letter;
    switch (s.charAt(0)) {
        case 'a':
        case 'i':
        case 'u':
        case 'e':
        case 'o':
            letter = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
    }

    return letter;
}

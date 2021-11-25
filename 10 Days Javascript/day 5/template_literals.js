function sides(literals, ...expressions) {
    const [A, P] = expressions;
    const s1 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
    const s2 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
    return [s1, s2];
}

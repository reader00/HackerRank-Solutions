class Polygon {
    constructor(a) {
        this.sides = a;
    }

    perimeter() {
        return this.sides.reduce((acc, next) => acc + next);
    }
}

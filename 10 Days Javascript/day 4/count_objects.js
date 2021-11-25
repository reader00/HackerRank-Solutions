function getCount(objects) {
    return objects.filter((e) => e.x == e.y).length;
}

// this is were your solution for a codewar algorithm should go

function sqInRect(lng, wdth) {
    function recompare(x, y, squaresStore) {
        let big, small;
        const dimension = x > y ? { big: x, small: y } : { big: y, small: x };

        if (dimension.small === 0) { return squaresStore; }
        if (dimension.small === 1) {
            for (var i = 0; i < dimension.big; i++) {
                squaresStore.push(dimension.small);
            }
            return squaresStore;
        }
        dimension.big = dimension.big - dimension.small;
        squaresStore.push(dimension.small);
        return recompare(dimension.small, dimension.big, squaresStore);
    }

    function internalSqrs(x, y) {
        let squaresStore = (x === y) ? null : [];
        { !!squaresStore && recompare(x, y, squaresStore) }
        return squaresStore;
    }
    return internalSqrs(lng, wdth);
}
function generatePascalsTriangle(rows) {
    const triangle = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                const prevRow = triangle[i - 1];
                row.push(prevRow[j - 1] + prevRow[j]);
            }
        }

        triangle.push(row);
    }

    return triangle;
}

module.exports = { generatePascalsTriangle };


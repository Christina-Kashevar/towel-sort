
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (Array.isArray(matrix)) {
        matrix.map((item, index) => {
            if (index%2 !==0) {
                item.reverse()
            }
        })
      return matrix.flat();
    }
    return []
}

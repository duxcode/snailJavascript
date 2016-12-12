angular.module('appClient', []).
controller('homeCtrl', ['$scope', function($scope) {
  $scope.row = 3;
  $scope.col = 3;
  $scope.snailArray = [];

  $scope.showSnail = function(row, col) {
    var status = true;
    if (row !== col) {
      status = false;
    }
    if (status) {
      $scope.snailArray = spiral(row, col, 1);
    } else {
      alert('No es una matriz :|');
    }
  };

  $scope.showSnail(3, 3, 1);

  function spiral(row, col, start) {
    var total = row * col;
    var result = [];

    for (var i = 0; i < row; i++) {
      var rs = [];
      for (var j = 0; j < col; j++) {
        rs.push(0);
      }
      result.push(rs);
    }

    var let_row = 0;
    var let_col = 0;
    var step = 0;
    for (var i = 0; i < total;) {
      while (let_col + step < row) {
        i++;
        result[let_row][let_col] = i;
        let_col++;
      }

      let_col--;
      let_row++;
      while (let_row + step < row) {
        i++;
        result[let_row][let_col] = i;
        let_row++;
      }

      let_row--;
      let_col--;
      while (let_col >= step) {
        i++;
        result[let_row][let_col] = i;
        let_col--;
      }

      let_col++;
      let_row--;
      step++;
      while (let_row >= step) {
        i++;
        result[let_row][let_col] = i;
        let_row--;
      }
      let_row++;
      let_col++;
    }
    return result;
  }

}]);
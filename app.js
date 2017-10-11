var app = angular.module("mainApp", []);
app.controller('CRUDController', function ($scope) {
    $scope.EmpModel = {
        Id: 0,
        Salary: 0,
        Name: '',
    };
    $scope.EmpList = [];
    $scope.modifyAlbumCollection = function () {
        //alert(emp);
        if ($scope.EmpModel.Id == 0) {
            // $scope.AddData = function () {
            var _emp = {
                Id: $scope.EmpList.length + 1,
                Name: $scope.EmpModel.Name,
                Salary: $scope.EmpModel.Salary
            };
            $scope.EmpList.push(_emp);
            ClearModel();
        }
        // $scope.UpdateData = function () {
        else {
            //$scope.UpdateData = function () {
            //alert("UpdateData called");
            $.grep($scope.EmpList, function (e) {
                if (e.Id == $scope.EmpModel.Id) {
                    e.Name = $scope.EmpModel.Name;
                    e.Salary = $scope.EmpModel.Salary;
                }
            });
            ClearModel();
            //}
        }

    }


    
    $scope.DeleteData = function (emp) {
        var _index = $scope.EmpList.indexOf(emp);
        $scope.EmpList.splice(_index, 1);
    }

    $scope.BindSelectedData = function (emp1) {
        $scope.EmpModel.Id = emp1.Id;
        $scope.EmpModel.Name = emp1.Name;
        $scope.EmpModel.Salary = emp1.Salary;
    }

    function ClearModel() {
        $scope.EmpModel.Id = 0;
        $scope.EmpModel.Name = '';
        $scope.EmpModel.Salary = 0;
    }
});
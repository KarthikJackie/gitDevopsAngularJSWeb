app.controller("ctrl_devopsangularjs",function($scope){
	var studentRecords=null;
	$scope.txtFirstname=null;
	$scope.txtLastname=null;
	$scope.txtAge=null;
	
	$scope.addrecords=true;
	$scope.viewrecords=false;
	
	$scope.AddNewRecords=function(){
		debugger;
		if($scope.txtFirstname!=undefined && $scope.txtLastname!=undefined && $scope.txtAge!=undefined)
		{
			studentRecords=[{
				FIRSTNAME:$scope.txtFirstname,
				LASTNAME:$scope.txtLastname,
				AGE:$scope.txtAge
			}];
			alert("Saved Succfully");
			$scope.txtFirstname=null;
			$scope.txtLastname=null;
			$scope.txtAge=null;
		}
		else
		{
			alert("Please enter all details");
		}		
	}
	
	$scope.ViewRecords=function(){
		debugger;		
		if(studentRecords.length>0){
			$scope.addrecords=false;
			$scope.viewrecords=true;
			$scope.TotalRecords=studentRecords;
			
		}
		else{
			studentRecords=null;
			$scope.addrecords=true;
			$scope.viewrecords=false;
		}
	}
	
	$scope.ShowAddNew=function(){
		debugger;
		studentRecords=null;
		$scope.addrecords=true;
		$scope.viewrecords=false;
	}
	
});
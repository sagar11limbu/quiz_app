(function(){
	angular
			.module("turtleFacts")
			.controller("listCtrl",ListController);

			ListController.$inject=['quizMetrics', 'DataService'];
			function ListController(quizMetrics, DataService){
				var vm =this;

				vm.quizMetrics = quizMetrics;
				vm.data=DataService.turtlesData;
				vm.activeTurtle={};
				vm.changeActiveTurtle = changeActiveTurtle;
				vm.activateQuiz = activateQuiz;
				vm.search= "";

				function changeActiveTurtle(currentData){
					vm.activeTurtle = currentData;
				}

				function activateQuiz(){
					quizMetrics.changeState(true);
				}
			}

})();
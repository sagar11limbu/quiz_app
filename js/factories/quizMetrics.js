(function(){
	angular
	.module("turtleFacts")
	.factory("quizMetrics", quizMetrics);

	function quizMetrics(){
		var quizObj= {
			quizActive: false,
			changeState: changeState
		};

		return quizObj;
		
		function changeState(state){
			quizObj.quizActive = state;
		}
	}
})();
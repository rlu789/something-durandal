define(['knockout'], function (ko) {
	function TestComponentViewModel(params) {
		this.val = params.val !== undefined ? params.val : "No val input";
	}

	return TestComponentViewModel;
})
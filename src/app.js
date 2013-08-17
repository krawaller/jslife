define(["backbone","jquery","src/mainview.js"],
  function(Backbone,$,MainView){
	return {
		start: function(){
			var main = (new MainView({el:$("#main")})).render();
			Backbone.history.start();
		}
	};
});
define([ "backbone","mdown!content/intro.md"],function(Backbone,intro){
	return Backbone.View.extend({
		render: function(){
			this.$el.html(intro);
			return this;
		}
	});
});
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

// Schema
var productSchema=new mongoose.Schema({
	menu_item: String,
	description: String,
	price: Number

});


//return model
module.exports=restful.model('Products',productSchema);


 
var script = document.createElement('script');
script.src = '../WebApp/new_file.js';
script.type = 'text/javascript';
 
 $(function() {
  setTimeout(hideSplash, 2000);
}); 


function init() {
	hideSplash();
}
// $(window).on("pagecontainerload",function hideSplash() {
	// //setTimeout(hideSplash, 2000);
  // $.mobile.changePage("MenuScreen.html", "fade");
// });
var hideSplash = function(){
	setTimeout(2000);
	$.mobile.changePage("MenuScreen.html", "fade");
};

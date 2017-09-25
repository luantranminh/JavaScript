function myFunciton() {
    var type = 'LIKE';
    var token = 'yourTokenHere';
	// list of id you want to react
	var ids = ['100015910959934'];
    for (var i=0; i<ids.length; i++) {

	//fb API
        var feedlink ='https://graph.facebook.com/'+ids[i]+'/feed?fields=id&access_token='+token+'&limit=1';
        var feed = get(feedlink);
        var arr = JSON.parse(feed);
        var id = arr.data[0].id;
        var idx = 'https://graph.fb.me/'+id+'/reactions?type='+type+'&access_token='+token+'&method=post';
        get(idx);
    }
}
function get(link) {
   var response = UrlFetchApp.fetch(link);
   return response;
}
(function() {
try {
          var bs = document.createElement("img");
      bs.src = "https://u3s.mathtag.com/sync/img?adv=149879&uuid=5edc5897-7a1b-4100-a219-f13a25ace5d6&mt_id=864316";
      bs.style.display = 'none';
      if (document.body)
         document.body.appendChild(bs);
(function(){
/**/

})();
//used to sync advertiser without leaking referer to final destination
(function() {
    try {
	var frm = document.createElement('iframe');
	frm.style.visibility = 'hidden';
	frm.style.display = 'none';
	frm.src = "https://pixel.mathtag.com/sync/iframe?mt_uuid=5edc5897-7a1b-4100-a219-f13a25ace5d6&no_iframe=1&mt_adid=149879";
	frm.setAttribute("id", "mm_sync_back_ground");
	var trys = 0;
        var interval = setInterval(function(){
            if (trys++ < 20 && interval && !document.getElementById("mm_sync_back_ground")) {
                if (document.body) {
                    if (interval) {
                        clearInterval(interval);
                        interval = 0;
                    }
                    document.body.appendChild(frm);
                }
            }
        }, 100);
    }
    catch(ex)
    {
	document.createElement("img").src="//pixel.mathtag.com/error/img?error_domain=synciframe&what="+encodeURIComponent(ex.message);
    }
})();

}
catch(ex)
{
   document.createElement("img").src="//pixel.mathtag.com/error/img?error_domain=wrap&what="+encodeURIComponent(ex.message);
}
})();

window.onload = function() {
	function get(file)
	{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
	return rawFile.responseText;
	}
	var oldest = get("https://bucket.tk/api/data/953e5ae8-6e7f-4071-a8fe-1e45e1490926"),
		obj = JSON.parse(oldest).data;
	var old = parseInt(obj);
	var neww = old + 1;
fetch("https://bucket.tk/api/data/953e5ae8-6e7f-4071-a8fe-1e45e1490926", {method: 'POST', headers: new Headers({'Content-Type': 'application/json'}), body: '{"data":"' + neww + '"}'}).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function(err) {
  console.log(err);
});}
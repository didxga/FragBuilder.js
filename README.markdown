# FragBuilder.js
*Document Fragment builder from JSON input or HTML String*
###sample usage
	
	var df = FragBuilder.json([{
		'tagName': 'div',
		'style': {
			'color': 'red',
			'padding': '2px 4px'        
		},
		'childNodes': [{
			'textContent': 'Hi '},
		{
			'tagName': 'span',
			'style': {
				'background-color': 'black'  
			},
			'id': 'myID',
			'textContent': ','},
		{
			'textContent': ' there'}]}]);
	
	var dfs = FragBuilder.string("<div>Hello <small>world</small></div>");
	document.getElementsByTagName('body')[0].appendChild(df);
	document.getElementsByTagName('body')[0].appendChild(dfs);
	
	//outputs
	<div style="color: red; padding-top: 2px; padding-right: 4px; padding-bottom: 2px; padding-left: 4px; ">
		Hi <span style="background-color: black; " id="myID">,</span> there
	</div>
	<div>
		Hello <small>world</small>
	</div>

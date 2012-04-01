# FragBuilder.js

	
	//usage
	var df = FragBuilder([{'tagName':'div','textContent':'Hello World','style':{'font-weight': 'bold'}},{'tagName':'div','textContent':'GoodBye World','style':{'font-style': 'italics'}}]);
	document.getElementsByTagName('body')[0].appendChild(df);
	

###outputs
	
	<div style="font-weight: 'bold';">Hello World</div>;
	<div style="font-style: 'italics';">GoodBye World</div>
	

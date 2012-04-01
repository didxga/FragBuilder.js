# FragBuilder.js

	
	//usage
	var df = FragBuilder([{'tagName':'div','textContent':'Hello World','style':{'font-weight': 'bold'}},{'tagName':'div','textContent':'GoodBye World','style':{'font-style': 'italics'}}]);
	document.getElementsByTagName('body')[0].appendChild(df);
	

###outputs
	
	&lt;div style="font-weight: 'bold';"&gt;Hello World&lt;/div&gt;
	&lt;div style="font-style: 'italics';"&gt;GoodBye World&lt;/div&gt;
	

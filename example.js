$( document ).ready(function() {

	// buttons
	// table pagination
	$("#previous_page").click(function(){
		previousPage();
	});	
	$("#next_page").click(function(){
		nextPage();
	});	

	//load up some fake data
	for (index  = 0; index < 5000; ++index) {
			
			// add each row as an object in array
			row = new Object();
			row.name = index + 1;
			row.type = Math.random();
			row.state = Math.random();
			dataTable.model[index] = row;					

	}
	

	// make the HTML table from array model
	renderDataTable();

});

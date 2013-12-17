//  .----..--.   .----..---.    .----.   .--.  .---.  .--.  .---.  .--.  .----. .-.   .----. .----.
//  | {_ / {} \ { {__ {_   _}   | {}  \ / {} \{_   _}/ {} \{_   _}/ {} \ | {}  }| |   | {_  { {__  
//  | | /  /\  \.-._} } | |     |     //  /\  \ | | /  /\  \ | | /  /\  \| {}  }| `--.| {__ .-._} }
//  `-' `-'  `-'`----'  `-'     `----' `-'  `-' `-' `-'  `-' `-' `-'  `-'`----' `----'`----'`----' 


$( document ).ready(function() {

	//state of the table
	var tableModel = new Array();
	var previousModel;
	var plant;
	var currentPage = 1;
	var numberToDisplay = 15;
	var pageCount;

	function previousPage() {
		if(currentPage - 1 > 0)
			currentPage --;
	
		renderTable();
	}

	function nextPage() {
		if(currentPage + 1 <= pageCount)
			currentPage ++;
			
		renderTable();
	}	

	//load up some fake data
	for (index  = 0; index < 5000; ++index) {
				
			// add each row as an object in array
			row = new Object();
			row.name = index + 1;
			row.type = Math.random();
			row.state = Math.random();
			tableModel[index] = row;					

	}

	////////////////////////////////////////////////////////////////////
	//
	// Using the array make a HTML table
	//
	////////////////////////////////////////////////////////////////////

	function renderTable() {
		var row;
		var headerRow;
		var tbody;
		pageCount = tableModel.length / numberToDisplay;
		pageCount = Math.ceil(pageCount);
		var startIndex = (numberToDisplay * currentPage) - numberToDisplay;
		var endIndex = (numberToDisplay * currentPage) -1;
		var displayingStart = startIndex + 1;
		var displayingEnd;
	
		// don't let the end index exceed the length of the array
		if (endIndex + 1 > tableModel.length) {
			displayingEnd = tableModel.length;
			endIndex = tableModel.length -1;
		} else {
			displayingEnd = endIndex + 1;
		}

		$("#table_tbody").remove();
		tbody = $("<tbody></tbody>").attr({ id: "table_tbody" }).appendTo($("#datatable"));

		// update the table synnary
		$("#table_summary_text").remove();
		$("<p></p>").attr({ id: "table_summary_text" }).text("Page " + currentPage + " of " + pageCount + ". Displaying " + displayingStart +"-" + displayingEnd + " of " + tableModel.length +" items.").appendTo("#table_summary");


		for (index = startIndex; index <= endIndex; ++index) {
			row = $('<tr></tr>').appendTo(tbody);
			$('<td></td>').text(tableModel[index].name).appendTo(row); 
			$('<td></td>').text(tableModel[index].type).appendTo(row); 
			$('<td></td>').text(tableModel[index].state).appendTo(row); 
		}
	
	}


	// make the HTML table from array model
	renderTable();
	
	// buttons
	// table pagination
	$("#previous_page").click(function(){
		previousPage();
	});	
	$("#next_page").click(function(){
		nextPage();
	});	


});

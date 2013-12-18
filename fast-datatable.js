//  .----..--.   .----..---.    .----.   .--.  .---.  .--.  .---.  .--.  .----. .-.   .----. .----.
//  | {_ / {} \ { {__ {_   _}   | {}  \ / {} \{_   _}/ {} \{_   _}/ {} \ | {}  }| |   | {_  { {__  
//  | | /  /\  \.-._} } | |     |     //  /\  \ | | /  /\  \ | | /  /\  \| {}  }| `--.| {__ .-._} }
//  `-' `-'  `-'`----'  `-'     `----' `-'  `-' `-' `-'  `-' `-' `-'  `-'`----' `----'`----'`----' 



// the state of the datatable is represented by this object
var dataTable = new Object();
	
dataTable.model = new Array();
dataTable.currentPage = 1;
dataTable.numberToDisplay = 15;
dataTable.pageCount = 0;

function dataTable() {

}

function previousPage() {
	if(dataTable.currentPage - 1 > 0)
		dataTable.currentPage --;

	renderDataTable();
}

function nextPage() {
	if(dataTable.currentPage + 1 <= dataTable.pageCount)
		dataTable.currentPage ++;
		
	renderDataTable();
}	

////////////////////////////////////////////////////////////////////
//
// Using the array make a HTML table
//
////////////////////////////////////////////////////////////////////

function renderDataTable() {
	
	var row;
	var headerRow;
	var tbody;
	dataTable.pageCount = dataTable.model.length / dataTable.numberToDisplay;
	dataTable.pageCount = Math.ceil(dataTable.pageCount);
	var startIndex = (dataTable.numberToDisplay * dataTable.currentPage) - dataTable.numberToDisplay;
	var endIndex = (dataTable.numberToDisplay * dataTable.currentPage) -1;
	var displayingStart = startIndex + 1;
	var displayingEnd;

	// don't let the end index exceed the length of the array
	if (endIndex + 1 > dataTable.model.length) {
		displayingEnd = dataTable.model.length;
		endIndex = dataTable.model.length -1;
	} else {
		displayingEnd = endIndex + 1;
	}

	$("#table_tbody").remove();
	tbody = $("<tbody></tbody>").attr({ id: "table_tbody" }).appendTo($("#datatable"));

	// update the table synnary
	$("#table_summary_text").remove();
	$("<p></p>").attr({ id: "table_summary_text" }).text("Page " + dataTable.currentPage + " of " + dataTable.pageCount + ". Displaying " + displayingStart +"-" + displayingEnd + " of " + dataTable.model.length +" items.").appendTo("#table_summary");


	for (index = startIndex; index <= endIndex; ++index) {
		row = $('<tr></tr>').appendTo(tbody);
		$('<td></td>').text(dataTable.model[index].name).appendTo(row); 
		$('<td></td>').text(dataTable.model[index].type).appendTo(row); 
		$('<td></td>').text(dataTable.model[index].state).appendTo(row); 
	}

}






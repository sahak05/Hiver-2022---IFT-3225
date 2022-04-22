$(document).ready( function () {
	$('.table').DataTable( {
    	language: {
    		url:'api/names/read.php'
    	},
    	dom: "tip",
        pagingType: "simple",
        pageLength: 8,
        order: [[1, 'desc'], [0, 'asc']],
    		
    			
    } );
} );

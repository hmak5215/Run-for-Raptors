var dataSet = [
	[ "", "<a href=''>Tyler Albregts</a>", "6.7 Mile Trail Run", "M", "Prairie Village", "KS" ],
	[ "", "<a href=''>Brad Allen</a>", "5K Trail Run", "M", "Kansas City", "MO" ],
	[ "", "<a href=''>B. Allen</a>", "5K Trail Run", "M", "Kansas City", "MO" ],
	[ "", "<a href=''>Christi Allen</a>", "5K Trail Run", "F", "Kansas City", "MO" ],
	[ "", "<a href=''>C. Allen</a>", "5K Trail Run", "M", "Kansas City", "MO" ],
	[ "", "<a href=''>Joe Ancell</a>", "5K Trail Walk", "M", "Lee's Summit", "MO" ],
	[ "", "<a href=''>Rebecca Ancell</a>", "5K Trail Walk", "F", "Lee's Summit", "MO" ],
	[ "", "<a href=''>Melissa Anderson</a>", "5K Trail Run", "F", "Spring Hill", "KS" ],
	[ "", "<a href=''>Tim Anderson</a>", "6.7 Mile Trail Run", "M", "Spring Hill", "KS" ],
	[ "", "<a href=''>Michelle Angell</a>", "6.7 Mile Trail Run", "F", "Kansas City", "KS" ],
	[ "", "<a href=''>Matt Attack</a>", "5K Trail Run", "M", "Kansas City", "MO" ],
];

$(document).ready(function() {
    $('#participants-table').DataTable( {
		responsive: true,
        data: dataSet,
        columns: [
            { title: "BIB" },
            { title: "Name" },
            { title: "Event" },
            { title: "Gender" },
            { title: "City" },
            { title: "State" }
        ]
    } );
} );

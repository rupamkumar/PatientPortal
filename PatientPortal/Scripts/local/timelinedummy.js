google.charts.load("current", { packages: ["timeline"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var minyear = '2014';
    var minyear2 = '2015';
    var container = document.getElementById('Timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
        ['Physical', 'Left Leg', new Date(minyear, 1, 0, 12, 00, 0), new Date(2016, 3, 0, 14, 0, 0)],
        ['Physical', 'tibia', new Date(minyear, 2, 2, 14, 30, 0), new Date(2017, 2, 4, 16, 0, 0)],
        ['Physical', 'fracture', new Date(minyear, 0, 0, 12, 30, 0), new Date(2017, 0, 0, 19, 0, 0)],
        ['Conditions', 'Diabetes', new Date(minyear, 0, 0, 12, 30, 0), new Date(2017, 0, 0, 14, 0, 0)],
        ['Conditions', 'Asthma', new Date(minyear, 0, 0, 14, 30, 0), new Date(2017, 0, 0, 16, 0, 0)],
        ['Conditions', 'Ulcer', new Date(minyear, 0, 0, 16, 30, 0), new Date(2017, 0, 0, 18, 0, 0)],
        ['Hospitalisations', 'St. John of God', new Date(minyear, 0, 0, 12, 30, 0), new Date(2015, 0, 0, 14, 0, 0)],
        ['Hospitalisations', 'Fiona Stanley', new Date(minyear2, 0, 0, 14, 30, 0), new Date(2017, 0, 0, 16, 0, 0)],
        ['Medications', 'Aspirin', new Date(minyear, 0, 0, 16, 30, 0), new Date(2017, 0, 0, 18, 30, 0)]]);

    var options = {
        timeline: { colorByRowLabel: true },
        backgroundColor: '#eeeeee'
    };

    chart.draw(dataTable, options);
}
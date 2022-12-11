var businessHrsArray = [
    {
        time: 9,
        task: ""
    }, {
        time: 10,
        task: ""
    }, {
        time: 11,
        task: ""
    }, {
        time: 12,
        task: ""
    }, {
        time: 13,
        task: ""
    }, {
        time: 14,
        task: ""
    }, {
        time: 15,
        task: ""
    }, {
        time: 16,
        task: ""
    }, {
        time: 17,
        task: ""
    }
]

// **** Get Todays Date ****
var currentDate = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(currentDate);

// **** Create rows for each hour ****
function createRows() {
    var container = $(".container")
    var amPm
    $.each(businessHrsArray, function (i) {
       
        var li = $('<li/>')
            .addClass('list-group-item list-group-item-primary')
            .appendTo(container);
        var div1 = $('<div>')
            .addClass('input-group mb-3')
            .appendTo(li);
        $("<span>")
            .addClass("time-span")
            .text(businessHrsArray[i].time + ":00 ")
            .appendTo(div1);
        $("<input>")
            .addClass("form-control")
            .attr("type", "text")
            .appendTo(div1)
        var div2 = $("<div>")
            .addClass('input-group-append').appendTo(div1)
        $("<button>")
            .addClass("btn btn-outline-secondary saveBtn")
            .text("Save")
            .appendTo(div2)
    });

}

createRows();


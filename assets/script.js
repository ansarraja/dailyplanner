
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
let myTasks;
let taskArray = [];

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
            .text(businessHrsArray[i].time + ":00")
            .appendTo(div1);
        $("<input>")
            .addClass("form-control")
            .attr("type", "text")
            .appendTo(div1)
        var div2 = $("<div>")
            .addClass('input-group-append').appendTo(div1)
        $("<button>")
            .addClass("btn btn-outline-secondary saveBtn")

            .append("<i class=\"fa-regular fa-floppy-disk\"></i>")
            .appendTo(div2)

            // **** Save task to local storage **** 
            .on("click", function (event) {
                event.preventDefault();
                $("li").each(function (index) {
                    taskArray[index] = $(this).find("input").val();
                });
                console.log("taskArray: ", taskArray)
                for (i = 0; i < businessHrsArray.length; i++) {
                    businessHrsArray[i].task = taskArray[i];
                }
                localStorage.setItem("Tasks", JSON.stringify(businessHrsArray));
            })

        // **** Check time and color ****
        let currentTime = moment().format('HH');

        console.log(businessHrsArray[i].time)
        console.log(currentTime);
        if (businessHrsArray[i].time > currentTime) {
            li.find("input").css("background-color", "green");
        }
        if (businessHrsArray[i].time < currentTime) {
            li.find("input").css("background-color", "gray");
        }
        if (businessHrsArray[i].time == currentTime) {
            li.find("input").css("background-color", "	red");
        }

    });
}

// **** Get tasks from local storage ****
function getTasks() {
    myTasks = JSON.parse(localStorage.getItem("Tasks"))
    if (myTasks == null) {
        myTasks = scheduler;
    } else {
        renderTasks();
    }
}

// **** Rendering tasks to each input *****
function renderTasks() {
    $("li").each(function (index) {
        $(this).find("input").val(myTasks[index].task);
    });
}

createRows();
getTasks();




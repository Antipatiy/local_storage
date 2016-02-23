//Async
var forDumpyAsync = function() {
    //Get num of jpg
    var getNumImgs = function() {
        return document.getElementsByClassName('jpg').length;
    };
    //Get date + time
    var formatDate = function(date) {
        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        var hh = date.getHours();
        if (hh < 10) hh = '0' + hh;

        var min = date.getMinutes();
        if (min < 10) min = '0' + min;

        return dd + '.' + mm + '.' + yy + ' ' + hh + ':' + min;
    };

    var setDate = function() {
        return new Date();
    };

    var compareItems = function() {
        if ( getNumImgs() < 1 ) {
            newOne.textContent = getNumImgs() + " " + "рисунков " + formatDate(setDate());
        }
        else if ( getNumImgs() < 2 ) {
            newOne.textContent = getNumImgs() + " " + "рисунок " + formatDate(setDate());
        }
        else if ( getNumImgs() < 5 ) {
            newOne.textContent = getNumImgs() + " " + "рисунка " + formatDate(setDate());
        }
        else {
            newOne.textContent = getNumImgs() + " " + "рисунков " + formatDate(setDate());
        }
    };

    //Create new element in document + prepend data + prepend time
    var body = document.querySelector('body');
    var firstDiv = body.firstChild;

    //Create new <div>
    var newOne = document.createElement('div');

    //Create new <div> with class="elem"
    newOne.className = "elem";

    //insert num jpeg + date/time
    compareItems();
    body.insertBefore(newOne, firstDiv);
};

setTimeout(forDumpyAsync, 100);
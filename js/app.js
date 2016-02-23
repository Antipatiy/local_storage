//Restore all items on the page
var restoreItems = function() {
    localStorage.removeItem('userName');
    location.reload(); //Reload page
};
//Save items to localStorage
var saveItem = function(i) {
    var a = localStorage.getItem('userName');
    localStorage.setItem('userName', a + i);
};

var showItems = function() {
    return localStorage.getItem('userName');
};
//Push items to array
var parseItems = function() {
    var arr = showItems().split(',');
    for (var i = 0; i < arr.length; i++) {
        if ( ~arr[i].indexOf('null') ) {
            arr[i] = arr[i].substring(4);
        }
    }
    return arr;
};
//Remove items on reload;
var compareItems = function() {
    var a = parseItems();

    for (var i = 0; i < a.length; i++) {
        switchItems(a[i]);
    }
};
//Compare items
var switchItems = function(i) {
    switch (i) {
        case '1':
            $('.pic-1').remove();
            break;
        case '2':
            $('.pic-2').remove();
            break;
        case '3':
            $('.pic-3').remove();
            break;
        case '4':
            $('.pic-4').remove();
            break;
        case '5':
            $('.pic-5').remove();
            break;
        case '6':
            $('.pic-6').remove();
            break;
        case '7':
            $('.pic-7').remove();
            break;
        case '8':
            $('.pic-8').remove();
            break;
        case '9':
            $('.pic-9').remove();
            break;
        case '10':
            $('.pic-10').remove();
            break;
        case '11':
            $('.pic-11').remove();
            break;
        case '12':
            $('.pic-12').remove();
            break;
    }
};

$(document).ready(function() {
    //Show onload pictures
    $('<img>', {
        'src': 'img/1.jpg',
        'class': 'pic-1 jpg'
    }).appendTo('.jpg-pic-1 a');

    $('<img>', {
        'src': 'img/2.jpg',
        'class': 'pic-2 jpg'
    }).appendTo('.jpg-pic-2 a');

    $('<img>', {
        'src': 'img/3.jpg',
        'class': 'pic-3 jpg'
    }).appendTo('.jpg-pic-3 a');

    $('<img>', {
        'src': 'img/4.jpg',
        'class': 'pic-4 jpg'
    }).appendTo('.jpg-pic-4 a');

    $('<img>', {
        'src': 'img/5.jpg',
        'class': 'pic-5 jpg'
    }).appendTo('.jpg-pic-5 a');

    $('<img>', {
        'src': 'img/6.jpg',
        'class': 'pic-6 jpg'
    }).appendTo('.jpg-pic-6 a');

    $('<img>', {
        'src': 'img/7.jpg',
        'class': 'pic-7 jpg'
    }).appendTo('.jpg-pic-7 a');

    $('<img>', {
        'src': 'img/8.jpg',
        'class': 'pic-8 jpg'
    }).appendTo('.jpg-pic-8 a');

    $('<img>', {
        'src': 'img/9.jpg',
        'class': 'pic-9 jpg'
    }).appendTo('.jpg-pic-9 a');

    $('<img>', {
        'src': 'img/10.jpg',
        'class': 'pic-10 jpg'
    }).appendTo('.jpg-pic-10 a');

    $('<img>', {
        'src': 'img/11.jpg',
        'class': 'pic-11 jpg'
    }).appendTo('.jpg-pic-11 a');

    $('<img>', {
        'src': 'img/12.jpg',
        'class': 'pic-12 jpg'
    }).appendTo('.jpg-pic-12 a');

    //Close pictures
    $('.close-1').click(function() {
        $('.pic-1').remove();
        $('.elem').remove();
        forDumpyAsync();
        return saveItem('1,');
    });

    $('.close-2').click(function() {
        $('.pic-2').remove();
        $('.elem').remove();
        forDumpyAsync();
        return saveItem('2,');
    });

    $('.close-3').click(function() {
        $('.pic-3').remove();
        $('.elem').remove();
        forDumpyAsync();
        return saveItem('3,');
    });

    $('.close-4').click(function() {
        $('.pic-4').remove();
        $('.elem').remove();
        forDumpyAsync();
        return saveItem('4,');
    });

    $('.close-5').click(function() {
        $('.pic-5').remove();
        $('.elem').remove();
        forDumpyAsync();
        return saveItem('5,');
    });

    $('.close-6').click(function() {
        $('.pic-6').remove();
        $('.elem').remove();
        forDumpyAsync();
        return saveItem('6,');
    });

    $('.close-7').click(function() {
        $('.pic-7').remove();
        $('.elem').remove();
        forDumpyAsync();
        return saveItem('7,');
    });

    $('.close-8').click(function() {
        $('.pic-8').remove();
        $('.elem').remove();
        forDumpyAsync();
        return saveItem('8,');
    });

    $('.close-9').click(function() {
        $('.pic-9').remove();
        $('.elem').remove();
        forDumpyAsync();
        return saveItem('9,');
    });

    $('.close-10').click(function() {
        $('.pic-10').remove();
        $('.elem').remove();
        forDumpyAsync();
        return saveItem('10,');
    });

    $('.close-11').click(function() {
        $('.pic-11').remove();
        $('.elem').remove();
        forDumpyAsync();
        return saveItem('11,');
    });

    $('.close-12').click(function() {
        $('.pic-12').remove();
        $('.elem').remove();
        forDumpyAsync();
        return saveItem('12,');
    });
    //Compare items for page load
    compareItems();
});
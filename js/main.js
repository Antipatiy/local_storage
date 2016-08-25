(function (global, $) {
    'use strict';
    var app = {
        ASYNC: 20,
        getNumImgs: function getNumImgs() {
            return $('.jpg').length;
        },
        formatDate: function formatDate(date) {
            var dd = date.getDate(),
                mm = date.getMonth() + 1,
                yy = date.getFullYear() % 100,
                hh = date.getHours(),
                min = date.getMinutes();

            var compareTime = function () {
                if (dd < 10) {
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }
                if (yy < 10) {
                    yy = '0' + yy;
                }
                if (hh < 10) {
                    hh = '0' + hh;
                }
                if (min < 10) {
                    min = '0' + min;
                }
            };
            compareTime();

            return dd + '.' + mm + '.' + yy + ' ' + hh + ':' + min;
        },
        setDate: function setDate() {
            return new Date();
        },
        insertDiv: function insertDiv() {
            $('body')
                .prepend('<div class="elem">')
                .insertBefore()
                .first('div');
        },
        changeSuffix: function changeSuffix() {
            this.insertDiv();
            var elem = $('.elem');

            if (this.getNumImgs() < 1) {
                elem.text(this.getNumImgs() + " " + "рисунков " + this.formatDate(this.setDate()));
            }
            else if (this.getNumImgs() < 2) {
                elem.text(this.getNumImgs() + " " + "рисунок " + this.formatDate(this.setDate()));
            }
            else if (this.getNumImgs() < 5) {
                elem.text(this.getNumImgs() + " " + "рисунка " + this.formatDate(this.setDate()));
            }
            else {
                elem.text(this.getNumImgs() + " " + "рисунков " + this.formatDate(this.setDate()));
            }
        },
        saveItem: function saveItem(key, value) {
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem(key, value);
            } else {
                alert('Sorry! No Web Storage support..');
            }
        },
        getArrOfStorageItems: function getArrOfStorageItems() {
            var i,
                name,
                value,
                arr = [];
            for (i = 0; i < localStorage.length; i += 1) {
                name = localStorage.key(i);
                value = localStorage.getItem(name);
                arr.push(value);
            }
            return arr;
        },
        removeItem: function removeItem(index) {
            $('.pic-' + index).remove();

            $('.jpg-pic-' + index).css({
                border: '5px solid #ffffff'
            });

            $('.close_' + index).css({
                border: '.15em solid #ffffff',
                background: '#ffffff'
            });
        },
        removeItemsOnLoad: function removeItemsOnLoad() {
            var arr = this.getArrOfStorageItems(),
                i;
            for (i = 0; i < arr.length; i += 1) {
                this.removeItem(arr[i]);
            }
        },
        restoreItems: function restoreItems() {
            $('.restore').click(function () {
                localStorage.clear();

                $('.pic').each(function (index) {
                    $(this)
                        .find('.pic-' + index, '.close')
                        .remove();

                    $('<img>', {
                        'src': 'img/' + index + '.jpg',
                        'class': 'pic-' + index + ' jpg'
                    })
                        .appendTo('.jpg-pic-' + index + ' a');

                    $('.jpg-pic-' + index).css({
                        border: '5px solid #bdbdbd'
                    });

                    $('.close').css({
                        border: '.15em solid #bababa',
                        background: '#34495e'
                    });
                });
                $('.elem').remove();

                app.changeSuffix();
            })
        },
        showPicturesOnLoad: function showPicturesOnLoad() {
            $('.pic').each(function (index) {
                $('<img>', {
                    'src': 'img/' + index + '.jpg',
                    'class': 'pic-' + index + ' jpg'
                }).appendTo('.jpg-pic-' + index + ' a');
            })
        },
        closePictures: function closePictures() {
            $('.close').each(function (index) {
                $(this).click(function () {
                    if ($(this).hasClass('close_' + index)) {
                        $('.pic-' + index).remove();

                        $('.elem').remove();

                        $('.jpg-pic-' + index).css({
                            border: '5px solid #ffffff'
                        });

                        $(this).css({
                            border: '.15em solid #ffffff',
                            background: '#ffffff'
                        });

                        app.changeSuffix();

                        return app.saveItem(index, index);
                    }
                });
            })
        }
    };

    app.showPicturesOnLoad();
    app.removeItemsOnLoad();
    app.closePictures();
    app.restoreItems();
    setTimeout(function () {
        app.changeSuffix();
    }, app.ASYNC);
})(window, jQuery);

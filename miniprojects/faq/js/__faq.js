

$(document).ready(function () {

    $('.answer').hide();

    $('.question').mouseover(function () {

        $(this).css({
           'cursor': 'pointer'
        });

    });

    $('.question').click(function () {

        $(this).next().toggle();

    });

    
});

$(document).ready(function () {
    $('.carousel').carousel({interval: 3000});
    var upArrow = $('<span class="glyphicon glyphicon-arrow-up"></span>');
    var downArrow = $('<span class="glyphicon glyphicon-arrow-down"></span>');
    for (var i = 0; i < 2; i++) {
        var x = Math.random();
        var n = i + 1;
        var domA = $('#a' + n);
        var domB = $('#b' + n);
        var domC = $('#c' + n);
        var domAn = domA.next();
        var domBn = domB.next();
        var domCn = domC.next();

        if (domAn.hasClass('glyphicon')) {
            domAn.remove();
        }
        x > 0.5 ? domA.after(upArrow) : domA.after(downArrow);

        if (domBn.hasClass('glyphicon')) {
            domBn.remove();
        }
        x > 0.5 ? domB.after(upArrow) : domB.after(downArrow);

        if (domCn.hasClass('glyphicon')) {
            domCn.remove();
        }
        x > 0.5 ? domC.after(upArrow) : domC.after(downArrow);

    }
});
$(document).ready(function () {
    //dialog method
    var chart1 = $('#chartInstance1'),
        chart2 = $('#chartInstance2'),
        chart3 = $('#chartInstance3');
    var chartContainer1 = $('#chartContainer1'),
        chartContainer2 = $('#chartContainer2'),
        chartContainer3 = $('#chartContainer3');
    var chartContainerWidth1 = chartContainer1.css('width'),
        chartContainerWidth2 = chartContainer2.css('width'),
        chartContainerWidth3 = chartContainer3.css('width');
    $(window).resize(function () {
        chartContainerWidth1 = chartContainer1.css('width');
        chartContainerWidth2 = chartContainer2.css('width');
        chartContainerWidth3 = chartContainer3.css('width');
        widget1.css('width', chartContainerWidth1);
        widget2.css('width', chartContainerWidth2);
        widget3.css('width', chartContainerWidth3);
        chartCeils.each(function () {
            var ceilWidth = $(this).css('width').split('px')[0], ceilHeight = $(this).css('height').split('px')[0];
            $(this).find('.ui-dialog.ui-widget').css({
                'left': ceilWidth * 0.05 + 'px',
                'top': ceilHeight * 0.05 + 'px',
                'width': ceilWidth * 0.9 + 'px',
                'height': ceilHeight * 0.9 + 'px'
            });
        });
    });
    var widget1 = chart1.dialog({
        autoOpen: true,
        width: chartContainerWidth1,
        appendTo: '#chartContainer1',
        position: {my: 'center', at: 'center', of: '#chartContainer1', within: '#chartContainer1'},
        draggable: false,
        resizable: false,
        focus: function (event, ui) {
            $('button.ui-dialog-titlebar-close').blur().attr('disabled', 'true');
        }
    }).dialog('widget');
    var widget2 = chart2.dialog({
        autoOpen: true,
        width: chartContainerWidth2,
        appendTo: '#chartContainer2',
        position: {my: 'center', at: 'center', of: '#chartContainer2', within: '#chartContainer2'},
        draggable: false,
        resizable: false,
        focus: function (event, ui) {
            $('button.ui-dialog-titlebar-close').blur().attr('disabled', 'true');
        }
    }).dialog('widget');
    var widget3 = chart3.dialog({
        autoOpen: true,
        width: chartContainerWidth3,
        appendTo: '#chartContainer3',
        position: {my: 'center', at: 'center', of: '#chartContainer3', within: '#chartContainer3'},
        draggable: false,
        resizable: false,
        focus: function (event, ui) {
            $('button.ui-dialog-titlebar-close').blur().attr('disabled', 'true');
        }
    }).dialog('widget');

    var dropContainer = $('#dropContainer'), chartCeils = dropContainer.find('.chartCeil'), isRevert = false;
    var chartCurrentCeil, chartCurrentWidth, chartCurrentHeight;

    chartCeils.each(function () {
        $(this).droppable({
            accept: '.ui-dialog.ui-draggable',
            tolerance: 'fit',
            over: function () {
                $(this).toggleClass('ui-state-highlight');
                chartCurrentCeil = $(this);
                chartCurrentWidth = $(this).css('width').split('px')[0];
                chartCurrentHeight = $(this).css('height').split('px')[0];
            },
            out: function () {
                $(this).toggleClass('ui-state-highlight');
            },
            drop: function () {
                isRevert = true;
                $(this).toggleClass('ui-state-highlight');
            }
        });
    });

    widget1.draggable({
        //appendTo: '#dropContainer',
        helper: 'clone',
        cursor: 'pointer',
        opacity: 0.5,
        revert: 'invalid',
        drag: function (event, ui) {
            isRevert = false;
        },
        stop: function (event, ui) {
            if (isRevert) {
                var newChart = ui.helper.clone();
                newChart.appendTo(chartCurrentCeil);
                newChart.css({
                    'left': chartCurrentWidth * 0.05 + 'px',
                    'top': chartCurrentHeight * 0.05 + 'px',
                    'width': chartCurrentWidth * 0.9 + 'px',
                    'height': chartCurrentHeight * 0.9 + 'px'
                });
                var closeBtn = newChart.find('button.ui-dialog-titlebar-close');
                closeBtn.removeAttr('disabled');
                closeBtn.delegate(closeBtn, 'click', function () {
                    $("#chartRemove").dialog({
                        resizable: false,
                        height: 200,
                        modal: true,
                        buttons: {
                            "Delete": function () {
                                $(this).dialog("close");
                                newChart.remove();

                            },
                            Cancel: function () {
                                $(this).dialog("close");
                            }
                        }
                    });
                })
            }
        }
    });

    widget2.draggable({
        //appendTo: '#dropContainer',
        helper: 'clone',
        cursor: 'pointer',
        opacity: 0.5,
        revert: 'invalid',
        drag: function (event, ui) {
            isRevert = false;
        },
        stop: function (event, ui) {
            if (isRevert) {
                var newChart = ui.helper.clone();
                newChart.appendTo(chartCurrentCeil);
                newChart.css({
                    'left': chartCurrentWidth * 0.05 + 'px',
                    'top': chartCurrentHeight * 0.05 + 'px',
                    'width': chartCurrentWidth * 0.9 + 'px',
                    'height': chartCurrentHeight * 0.9 + 'px'
                });
                var closeBtn = newChart.find('button.ui-dialog-titlebar-close');
                closeBtn.removeAttr('disabled');
                closeBtn.delegate(closeBtn, 'click', function () {
                    $("#chartRemove").dialog({
                        resizable: false,
                        height: 200,
                        modal: true,
                        buttons: {
                            "Delete": function () {
                                $(this).dialog("close");
                                newChart.remove();

                            },
                            Cancel: function () {
                                $(this).dialog("close");
                            }
                        }
                    });
                })
            }
        }
    });
    widget3.draggable({
        //appendTo: '#dropContainer',
        helper: 'clone',
        cursor: 'pointer',
        opacity: 0.5,
        revert: 'invalid',
        drag: function (event, ui) {
            isRevert = false;
        },
        stop: function (event, ui) {
            if (isRevert) {
                var newChart = ui.helper.clone();
                newChart.appendTo(chartCurrentCeil);
                newChart.css({
                    'left': chartCurrentWidth * 0.05 + 'px',
                    'top': chartCurrentHeight * 0.05 + 'px',
                    'width': chartCurrentWidth * 0.9 + 'px',
                    'height': chartCurrentHeight * 0.9 + 'px'
                });
                var closeBtn = newChart.find('button.ui-dialog-titlebar-close');
                closeBtn.removeAttr('disabled');
                closeBtn.delegate(closeBtn, 'click', function () {
                    $("#chartRemove").dialog({
                        resizable: false,
                        height: 200,
                        modal: true,
                        buttons: {
                            "Delete": function () {
                                $(this).dialog("close");
                                newChart.remove();

                            },
                            Cancel: function () {
                                $(this).dialog("close");
                            }
                        }
                    });
                })
            }
        }
    });
});

$(document).ready(function () {
    var dragElement = $('#table1'),
        dropElement = $('#smallContainer');
    dragElement.draggable({
        addClasses: true,
        //appendTo: '#bigContainer',
        //helper: 'clone',
        //axis:'x',
        //cancel: 'div',
        //connectToSortable:'#smallContainer',
        //containment: '#smallContainer',
        cursor: 'pointer',
        //cursorAt: {right: 50},
        //delay:1000,
        //disabled:true,
        //distance:20,
        //grid: [10, 10],
        //handle:'#dragContainer',
        //iframeFix:true,
        //opacity: 0.5,
        //refreshPositions: false,
        revert:'invalid',
        //revertDuration:3000,
        //scope:'putHere',
        //scroll: true,
        //scrollSensitivity: 200,
        //scrollSpeed:50,
        //snap: true,
        //snapMode:'inner',
        //snapTolerance:10,
        //stack:'#table5',
        //zIndex:100,
    });
    //$('#table1').draggable('destroy');
    //$('#table1').draggable('disable');
    //$('#table1').draggable('enable');
    //var ins=$('#table1').draggable('instance');
    //var options=$('#table1').draggable('option','cursorAt.right');
    //var options=$('#table1').draggable('option');
    //$('#table1').draggable('option','scroll',false);
    //$('#table1').draggable('option',{'scroll':false,'snap':false});
    //var widget = $("#table1").draggable("widget");
    //dragElement.bind('dragstop', function (event, ui) {
    //    ui.helper.clone().appendTo(dropElement)
    //});
    dropElement.droppable();
});

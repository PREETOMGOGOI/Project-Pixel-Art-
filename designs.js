let color=$('#colorPicker');
const size = {
    height : 1,
    width : 1   
};
// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!
let height = $('#input_height').val();
let width = $('#input_width').val();   
$('#pixel_canvas').children().remove();    
for (var i=1; i<=height; i++){
$('#pixel_canvas').append('<tr></tr>')
}
    for (var j=1; j<=width; j++){
        $('tr').append('<td></td>');
}  
}

$('#sizePicker').submit(function(Event){
    Event.preventDefault();
    makeGrid();
})

$('#pixel_canvas').on('click', 'td', function(){
    $(this).css('background-color',color.val());
} )
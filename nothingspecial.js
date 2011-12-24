$(document).ready(function(){

    new Blog('utils', 'services', function(box) {
        $('button').click(function() {
            box.characterEncodeHTML();
            box.getUsers();
        });

    });

});
 $(document).ready(function(){

    $('form').on('submit',()=>{
        var item = $('form input');
        var todo = {item: item.val()};
        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data){
                location.reload();
            }
        });
        return false;
    })

    $('li').on('click', ()=>{
        var item = $(this).text();
        
        console.log(this.body);
        $.ajax({
            type: 'DELETE',
            url: '/todo' + item,
            success: function(data){
                location.reload();
            }
        });
    });

})
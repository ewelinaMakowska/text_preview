$(document).ready(() => {
    
   $('#text-type').on('keyup', event => {
       $('#text-preview').html($(event.currentTarget).val());
   }); 
    
    $("#select-font").on('change', event => {
        $('#text-preview').css({
            fontFamily: $(event.currentTarget).val()
        }
        )
    })
    
      $("#select-weight").on('change', event => {
        $('#text-preview').css({
            fontWeight: $(event.currentTarget).val()
        }
        )
    })
    
     $("#size").on('keyup', event => {
       let fontSize = $(event.currentTarget).val() + 'px';
         $('#text-preview').css({
             fontSize: fontSize
         })
    })
    
    
    
})
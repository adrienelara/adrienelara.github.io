$( document ).ready(function() {
    
    $( '#contact-form' ).submit(function(e) {
        e.preventDefault();
        
        this.reset();
    });
    
});
$( document ).ready(function() {
    
    setTimeout(function () {
        $( '.top-mn-text' ).text( "World White Web" );
    }, 100);
    
    setTimeout(function () {
        $( '.top-mn-text' ).text( "Clean.io" );
    }, 300);
    
    setTimeout(function () {
        $( '.top-mn-text' ).text( "World White Web" );
    }, 19000);
    
    setTimeout(function () {
        $( '#about' ).removeAttr( "id" );
        $( '#contact' ).removeAttr( "id" );
    }, 19200);
    
    setTimeout(function () {
        $( '.top-sctn-box' ).removeAttr( "class" );
        $( '.top-mn-text' ).removeAttr( "class" );
        $( '.top-sb-text' ).removeAttr( "class" );
        $( '.top-btn-enter' ).removeAttr( "class" );
        $( '#top' ).css( "background", "url('images/background_glitch1.gif')" );
        
        $( '#nav' ).hide();
        
        $( 'body' ).css( "font-size", "36px" );
        $( 'body' ).css( "font-family", "Times New Roman" );
        $( 'html,body' ).scrollTop(0);
    }, 19900);
    
    setTimeout(function () {
        $( 'html,body' ).css( "background", "#000" );
        $( 'html,body' ).css( "overflow", "hidden" );
        $( '#top' ).css( "background", "#000" );
        $( '#about' ).hide();
        $( '#contact-form' ).hide();
        $( 'a' ).attr("href", "");
    }, 21000);
    
    setTimeout(function () {
        $( '#top' ).hide();
        $( '#contact' ).hide();
    }, 21100);
    
    setTimeout(function () {
        window.location.replace("../clean.io/trash/trash.html");
    }, 21200);
    
});
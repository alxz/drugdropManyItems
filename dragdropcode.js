
    var correctCards = 0;
    var objectId = 0;
    var uiObj = null;
    $( init );
    var arrObjects = [
        {
        'imgSrc1' : '<img src="img/publicPapers.png" alt="publicPapers" width="180" height="160">',
        'imgSrc2' : '<img src="img/restrictedPapers.png" alt="restrictedPapers" width="180" height="160">',
        'imgSrc3' : '<img src="img/confidentialPapers.png" alt="confidentialPapers" width="180" height="160">',
        'imgSrc4' : '<img src="img/sensitivePapers.png" alt="sensitivePapers" width="180" height="160">',
            'imgDest1' :  '<img src="img/McGillUSBKey.png" alt="McGillUSBKey" width="180" height="180">',
            'imgDest4' :  '<img src="img/suitcase-clip-art-briefcase.png" alt="Briefcase" width="180" height="180">',            
            'imgDest2' :  '<img src="img/Aegis-password-protectUSB-drive.png" alt="Password-protectUSB-drive" width="180" height="180">',
            'imgDest3' :  '<img src="img/small-fireproof-safe.png" alt="small-fireproof-safe" width="180" height="180">',
            'txtDest1' :  '<h3>Copy To USB Key</h3>',
            'txtDest4' :  '<h3>Carry in a briefcase</h3>',
            'txtDest2' :  '<h3>Should Have Encryption</h3>',
            'txtDest3' :  '<h3>MUST Have Encryption</h3>',
            'backgColor' : '#ec9b9b',
            'correctDest1' : 1,
            'correctDest2' : 4,
            'correctDest3' : 2,
            'correctDest4' : 3
        },
        {
            'imgSrc' : '<img src="img/confidentialPapers.png" alt="confidentialPapers" width="180" height="160">',
            'imgDest1' :  '<img src="img/desktopPrinter.png" alt="desktopPrinter" width="180" height="180">',
            'imgDest2' :  '<img src="img/kyoceraFollowMe.png" alt="kyoceraFollowMe" width="180" height="180">',
            'txtDest1' :  '<h3>Office Printer</h3>',
            'txtDest2' :  '<h3>Kyocera FloowMe Printer</h3>',
            'backgColor' : '#abcbf5',
            'correctDest' : 2
        },    
        {
        'imgSrc' : '<img src="img/confidentialPapers.png" alt="confidentialPapers" width="180" height="160">',
            'imgDest1' :  '<img src="img/paper-shredder.png" alt="paper-shredder" width="180" height="180">',        
            'imgDest2' :  '<img src="img/rubbish-waste-paper.png" alt="rubbish-waste" width="180" height="180">',
            'txtDest1' :  '<h3>Shredder for Paper</h3>',
            'txtDest2' :  '<h3>Office Waste Bin</h3>',
            'backgColor' : '#abddec',
            'correctDest' : 1        
        }

        
    ];

    function init() {
        //set initial images:
        var docImg1 = arrObjects[objectId].imgSrc1;
        var docImg2 = arrObjects[objectId].imgSrc2;
        var docImg3 = arrObjects[objectId].imgSrc3;
        var docImg4 = arrObjects[objectId].imgSrc4;    
        var imgDest1 = arrObjects[objectId].imgDest1;  
        var imgDest2 = arrObjects[objectId].imgDest2;
        var imgDest3 = arrObjects[objectId].imgDest3;  
        var imgDest4 = arrObjects[objectId].imgDest4;
        var correctDestId1 = arrObjects[objectId].correctDest1;
        var correctDestId2 = arrObjects[objectId].correctDest2;
        var correctDestId3 = arrObjects[objectId].correctDest3;
        var correctDestId4 = arrObjects[objectId].correctDest4;
        var txtDest1 = arrObjects[objectId].txtDest1;
        var txtDest2 = arrObjects[objectId].txtDest2;
        var txtDest3 = arrObjects[objectId].txtDest3;
        var txtDest4 = arrObjects[objectId].txtDest4;
        var backColor = arrObjects[objectId].backgColor;
        // for (let j=0; j<=3; j++) {

        // }
    //show background div:
    $('#backgroundDiv').show();      
        
    // show game selector:
    $('#selectGame').show();     
    $('#successMessage').hide();  // Hide the success message  
    $('#failedMessage').hide(); // Hide the failure message
    //setting correct css props for success messages
    $('#successMessage').css( {
        left: '85%',
        top: '250px',
        width: 0,
        height: 0
    } );
    //setting correct css props for failure messages  
    $('#failedMessage').css( {
        left: '85%',
        top: '250px',
        width: 0,
        height: 0
    } );

    // Reset the game
    correctCards = 0;
    failedTurn = 0;
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );
    $("#content").css("background-color", backColor);
    // Create the pile of shuffled cards
    //$('<div>' + '' + '</div>').data( 'number', 10 ).attr( 'id', 'emptyCard'+0 ).appendTo( '#cardPile' ); // empty slot
    //$('<div>' + '' + '</div>').data( 'number', 11 ).attr( 'id', 'emptyCard'+1 ).appendTo( '#cardPile' ); // empty slot
    $('<div>' + docImg1 + '</div>').data( 'number', correctDestId1 ).attr( 'id', 'card'+1 ).appendTo( '#cardPile' ).draggable( {
        containment: '#content',
        stack: '#cardPile div',
        cursor: 'move',
        revert: true
        } );
    $('<div>' + docImg2 + '</div>').data( 'number', correctDestId2 ).attr( 'id', 'card'+1 ).appendTo( '#cardPile' ).draggable( {
        containment: '#content',
        stack: '#cardPile div',
        cursor: 'move',
        revert: true
        } );
    $('<div>' + docImg3 + '</div>').data( 'number', correctDestId3 ).attr( 'id', 'card'+1 ).appendTo( '#cardPile' ).draggable( {
        containment: '#content',
        stack: '#cardPile div',
        cursor: 'move',
        revert: true
        } );        
    $('<div>' + docImg4 + '</div>').data( 'number', correctDestId4 ).attr( 'id', 'card'+1 ).appendTo( '#cardPile' ).draggable( {
        containment: '#content',
        stack: '#cardPile div',
        cursor: 'move',
        revert: true
        } );
    
        //$('<div>' + '' + '</div>').data( 'number', 12 ).attr( 'id', 'emptyCard'+2 ).appendTo( '#cardPile' ); // empty slot
    //$('<div>' + '' + '</div>').data( 'number', 13 ).attr( 'id', 'emptyCard'+3 ).appendTo( '#cardPile' ); // empty slot  

    // Create the card slots
    //$('<div>' + ' ' + '</div>').data( 'number', 100 ).appendTo( '#cardSlots' );  
    $('<div>' + imgDest1 + txtDest1 + '</div>').data( 'number', 1 ).appendTo( '#cardSlots' ).droppable( {
        accept: '#cardPile div',
        hoverClass: 'hovered',
        drop: handleCardDrop
        } );
    $('<div>' + imgDest2 + txtDest2 + '</div>').data( 'number', 2 ).appendTo( '#cardSlots' ).droppable( {
        accept: '#cardPile div',
        hoverClass: 'hovered',
        drop: handleCardDrop
        } );
    $('<div>' + imgDest3 + txtDest3 + '</div>').data( 'number', 3 ).appendTo( '#cardSlots' ).droppable( {
        accept: '#cardPile div',
        hoverClass: 'hovered',
        drop: handleCardDrop
        } );
    $('<div>' + imgDest4 + txtDest4 + '</div>').data( 'number', 4 ).appendTo( '#cardSlots' ).droppable( {
        accept: '#cardPile div',
        hoverClass: 'hovered',
        drop: handleCardDrop
        } );

    //$('<div>' + ' ' + '</div>').data( 'number', 103 ).appendTo( '#cardSlots' );    
    
        // for ( var i=0; i<=3; i++ ) {
        //     $('<div>' + imgDest2 + txtDest2 + '</div>').data( 'number', 2 ).appendTo( '#cardSlots' ).droppable( {
        //         accept: '#cardPile div',
        //         hoverClass: 'hovered',
        //         drop: handleCardDrop
        //         } );
        // }
        
    }

    function handleCardDrop( event, ui ) {
        var slotNumber = $(this).data( 'number' );
        var cardNumber = ui.draggable.data( 'number' );

        // If the card was dropped to the correct slot,
        // change the card colour, position it directly
        // on top of the slot, and prevent it being dragged
        // again  
        if ( slotNumber == cardNumber ) { 
            ui.draggable.addClass( 'correct' );
            ui.draggable.draggable( 'disable' );
            $(this).droppable( 'disable' );
            ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
            ui.draggable.draggable( 'option', 'revert', false );
            correctCards++;
        }  else {
            // if this is incorrect card dropped:
            ui.draggable.addClass( 'incorrect' );
            uiObj = ui;
            //ui.draggable.draggable( 'disable' );
            //$(this).droppable( 'disable' );
            //ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
            //ui.draggable.draggable( 'option', 'revert', false );
            $('#failedMessage').show();
            $('#failedMessage').animate( {
                left: '35%',
                top: '200px',
                width: '400px',
                height: '100px',
                opacity: 1
            } );
            //ui.draggable.removeClass();
        }
        // If all the cards have been placed correctly then display a message
        // and reset the cards for another go
        if ( correctCards == 4 ) {
            $('#successMessage').show();
            $('#successMessage').animate( {
            left: '35%',
            top: '200px',
            width: '400px',
            height: '100px',
            opacity: 1
            } );
            // parameters: 
            //   left: '380px',
            //   top: '200px',
            //   width: '400px',
            //   height: '100px',
            //   opacity: 1
        }
    }

    function clearWrongDrop() {
        console.log('Wrong placement!');
        $('#successMessage').hide();  // Hide the success message  
        $('#failedMessage').hide(); // Hide the failure message
        //setting correct css props for success messages
        $('#successMessage').css( {
            left: '85%',
            top: '250px',
            width: 0,
            height: 0
        } );
        //setting correct css props for failure messages  
        $('#failedMessage').css( {
            left: '85%',
            top: '250px',
            width: 0,
            height: 0
        } );
        //$('#card1').removeClass( 'incorrect' );
        uiObj.draggable.removeClass();
    }

    function leftTopColMsg() {   
        //   $("#rightTopColMsg").click(function(){
        //     $("#selectGame").hide();
        // });
        objectId=0;
        init();
        $("#selectGame").hide();  
        $('#backgroundDiv').hide();
      }
      function clickTopRight() { 
        // $( init );  
        objectId=0;
        init();
        $("#selectGame").hide();
        $('#backgroundDiv').hide();
      }
      function leftBotColMsg() { 
        // $( init );  
        objectId=1;
        init();
        $("#selectGame").hide();
        $('#backgroundDiv').hide();
      }
      function rightBotColMsg() { 
        // $( init );  
        objectId=2;
        init();
        $("#selectGame").hide();
        $('#backgroundDiv').hide();  
      }


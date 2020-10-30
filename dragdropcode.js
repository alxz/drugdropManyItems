
    var correctCards = 0;
    var objectId = 0;
    var uiObj = null;
    $( init );
    var arrObjects = [
        {
            'game': {
                'maxItems': 4,
                'gameTxt': '<h2>Drag and drop the document of each kind to the placeholders respecting the </h2><h2>recommendations on storage or transportation of the kind of documents.</h2>',
                'imgSrc': 
                    [
                        {
                            id: 1, 
                            img:'<img src="img/publicPapers.png" alt="publicPapers" width="180" height="160">'
                        },
                        {
                            id: 2, 
                            img:'<img src="img/restrictedPapers.png" alt="restrictedPapers" width="180" height="160">'
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/confidentialPapers.png" alt="confidentialPapers" width="180" height="160">'
                        },
                        {
                            id: 4,
                            img:'<img src="img/sensitivePapers.png" alt="sensitivePapers" width="180" height="160">'
                        }                        
                    ],
                'imgDest': 
                    [
                        { 
                            id: 1, 
                            img:'<img src="img/McGillUSBKey.png" alt="McGillUSBKey" width="180" height="180">', 
                            txt:'<h3>Copy To USB Key</h3>'
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/suitcase-clip-art-briefcase.png" alt="Briefcase" width="180" height="180">', 
                            txt:'<h3>Carry in a briefcase</h3>' 
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/pendrive-PassCode_USBKey.png" alt="pendrive-PassCode_USBKey" width="180" height="180">', 
                            txt:'<h3>Should Have Encryption</h3>'
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/small-fireproof-safe.png" alt="small-fireproof-safe" width="180" height="180">', 
                            txt:'<h3>MUST Use Encryption Software</h3>' 
                        }
                    ]
            }, 
            'backgColor' : '#ec9b9b'
        },
        {
            'game': {
                'maxItems': 4,
                'gameTxt': '<h2>Drag and drop the document of each kind to the placeholders respecting the </h2><h2>recommendations on sending of the kind of documents via email.</h2>',
                'imgSrc': 
                    [
                        {
                            id: 1, 
                            img:'<img src="img/publicPapers.png" alt="publicPapers" width="180" height="160">'
                        },
                        {
                            id: 2, 
                            img:'<img src="img/restrictedPapers.png" alt="restrictedPapers" width="180" height="160">'
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/confidentialPapers.png" alt="confidentialPapers" width="180" height="160">'
                        },
                        {
                            id: 4,
                            img:'<img src="img/sensitivePapers.png" alt="sensitivePapers" width="180" height="160">'
                        }                        
                    ],
                'imgDest': 
                    [
                        { 
                            id: 1, 
                            img:'<img src="img/JustEmail106.png" alt="RegularEmail" width="180" height="180">', 
                            txt:'<h3>Send by any simple Email Service</h3>'
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/gmail-encryption-Lock-large.jpg" alt="gmail-encryption-Lock-large" width="180" height="180">', 
                            txt:'<h3>Use corporate Outlook or Gmail</h3>' 
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/locked_spemail-logo.png" alt="locked_spemail-logo" width="180" height="180">', 
                            txt:'<h3>Email Serivce With Cryptography</h3>'
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/Proton_e2e-encryp.png" alt="Proton_e2e-encryp" width="180" height="180">', 
                            txt:'<h3>ProtonMail or Other With End-To-End Encryption</h3>' 
                        }
                    ]
            }, 
            'backgColor' : '#FFF8DC'
        },
        {
            'game': {
                'maxItems': 4,
                'gameTxt': '<h2>Drag and drop the document of each kind to the placeholders respecting the </h2><h2>way to share the different kind of documents.</h2>',
                'imgSrc': 
                    [
                        {
                            id: 1, 
                            img:'<img src="img/newsPaperBig.png" alt="newsPaperBig" width="180" height="160">'
                        },
                        {
                            id: 2, 
                            img:'<img src="img/document-background.png" alt="document-background" width="180" height="160">'
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/confidentialPapers.png" alt="confidentialPapers" width="180" height="160">'
                        },
                        {
                            id: 4,
                            img:'<img src="img/sensitivePapers.png" alt="sensitivePapers" width="180" height="160">'
                        }                        
                    ],
                'imgDest': 
                    [
                        { 
                            id: 1, 
                            img:'<img src="img/cloud-storage.png" alt="cloud-storage" width="180" height="180">', 
                            txt:'<h3>Store on any publick cloud service</h3>'
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/MS-Teams-logo.png" alt="MS-Teams-logo" width="180" height="180">', 
                            txt:'<h3>TEAMS or other corp shared storage</h3>' 
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/TeamsLogorev.png" alt="TeamsLogorev" width="180" height="180">', 
                            txt:'<h3>TEAMS Shared only for specific persons or groups</h3>'
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/nextCloud.png" alt="nextCloud" width="180" height="180">', 
                            txt:'<h3>Corp NextCloud, cloud within MUHC encryption Canada/EU</h3>' 
                        }
                    ]
            }, 
            'backgColor' : '#98F5FF'
        }        
    ];

    function init() {
        //set initial images:
        var docImg = []; //to store images for items to drag-n-drop
        var imgDest = []; //to store placeholders where to drop
        var gameText = arrObjects[objectId].game.gameTxt;
        var maxItems = arrObjects[objectId].game.maxItems;
        for (let i = 0; i < arrObjects[objectId].game.imgSrc.length; i++) {
            docImg.push (arrObjects[objectId].game.imgSrc[i]);
            //docImg[i] = arrObjects[objectId].game1.imgSrc[i];
            //console.log("docImg[",i,"]: ",docImg[i]);             
        }
        docImg = shuffle(docImg);
        console.log('docImg[]: ', docImg);
        for (let i = 0; i < arrObjects[objectId].game.imgDest.length; i++) {
            //imgDest[i] = arrObjects[objectId].game1.imgDest[i];
            imgDest.push (arrObjects[objectId].game.imgDest[i]);
        }
        imgDest = shuffle(imgDest);
        console.log('imgDest[]: ', imgDest);
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
    for (let k = 0; k < maxItems; k++) {
        $('<div>' + docImg[k].img + '</div>').data( 'number', docImg[k].id ).attr( 'id', 'card'+1 ).appendTo( '#cardPile' ).draggable( {
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
            } );
        $("#gameTextDiv").html(gameText);            
        $('<div>' + imgDest[k].img + imgDest[k].txt + '</div>').data( 'number', imgDest[k].id ).appendTo( '#cardSlots' ).droppable( {
        accept: '#cardPile div',
        hoverClass: 'hovered',
        drop: handleCardDrop
        } );
    }
    // $('<div>' + docImg[0].img + '</div>').data( 'number', docImg[0].id ).attr( 'id', 'card'+1 ).appendTo( '#cardPile' ).draggable( {
    //     containment: '#content',
    //     stack: '#cardPile div',
    //     cursor: 'move',
    //     revert: true
    //     } );
    // $('<div>' + docImg[1].img + '</div>').data( 'number', docImg[1].id ).attr( 'id', 'card'+1 ).appendTo( '#cardPile' ).draggable( {
    //     containment: '#content',
    //     stack: '#cardPile div',
    //     cursor: 'move',
    //     revert: true
    //     } );
    // $('<div>' + docImg[2].img + '</div>').data( 'number', docImg[2].id ).attr( 'id', 'card'+1 ).appendTo( '#cardPile' ).draggable( {
    //     containment: '#content',
    //     stack: '#cardPile div',
    //     cursor: 'move',
    //     revert: true
    //     } );        
    // $('<div>' + docImg[3].img + '</div>').data( 'number', docImg[3].id ).attr( 'id', 'card'+1 ).appendTo( '#cardPile' ).draggable( {
    //     containment: '#content',
    //     stack: '#cardPile div',
    //     cursor: 'move',
    //     revert: true
    //     } );
    
        //$('<div>' + '' + '</div>').data( 'number', 12 ).attr( 'id', 'emptyCard'+2 ).appendTo( '#cardPile' ); // empty slot
    //$('<div>' + '' + '</div>').data( 'number', 13 ).attr( 'id', 'emptyCard'+3 ).appendTo( '#cardPile' ); // empty slot  

    // Create the card slots
    //$('<div>' + ' ' + '</div>').data( 'number', 100 ).appendTo( '#cardSlots' );  
    // $('<div>' + imgDest[0].img + imgDest[0].txt + '</div>').data( 'number', imgDest[0].id ).appendTo( '#cardSlots' ).droppable( {
    //     accept: '#cardPile div',
    //     hoverClass: 'hovered',
    //     drop: handleCardDrop
    //     } );
    // $('<div>' + imgDest[1].img + imgDest[1].txt + '</div>').data( 'number', imgDest[1].id ).appendTo( '#cardSlots' ).droppable( {
    //     accept: '#cardPile div',
    //     hoverClass: 'hovered',
    //     drop: handleCardDrop
    //     } );
    // $('<div>' + imgDest[2].img + imgDest[2].txt + '</div>').data( 'number', imgDest[2].id ).appendTo( '#cardSlots' ).droppable( {
    //     accept: '#cardPile div',
    //     hoverClass: 'hovered',
    //     drop: handleCardDrop
    //     } );
    // $('<div>' + imgDest[3].img + imgDest[3].txt + '</div>').data( 'number', imgDest[3].id ).appendTo( '#cardSlots' ).droppable( {
    //     accept: '#cardPile div',
    //     hoverClass: 'hovered',
    //     drop: handleCardDrop
    //     } );

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
        console.log('slotNumber: ',slotNumber,', cardNumber: ',cardNumber);
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
            console.log('Correct: ui: ',ui);
        }  else {
            // if this is incorrect card dropped:
            ui.draggable.addClass( 'incorrect' );
            uiObj = ui;
            console.log('Incorrect: uiObj: ',uiObj);
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

      function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

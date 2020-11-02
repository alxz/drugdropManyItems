
    var correctCards = 0;
    var objectId = 0;
    var uiObj = null;
    $( init );
    var arrObjects = [
        {
            'game': {
                'maxItems': 4,
                'gameTxt': '<h2>Drag and drop the document of each kind to the placeholders respecting the recommendations on storage or transportation of the kind of documents.</h2>',
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
                            img:'<img src="img/McGillUSBKey.png" alt="McGillUSBKey" width="180" height="160">', 
                            txt:'Copy To USB Key'
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/suitcase-clip-art-briefcase.png" alt="Briefcase" width="180" height="160">', 
                            txt:'Carry in a briefcase' 
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/pendrive-PassCode_USBKey.png" alt="pendrive-PassCode_USBKey" width="180" height="160">', 
                            txt:'Should Have Encryption'
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/small-fireproof-safe.png" alt="small-fireproof-safe" width="180" height="160">', 
                            txt:'MUST Use Encryption Software' 
                        }
                    ]
            }, 
            'backgColor' : '#ec9b9b'
        },
        {
            'game': {
                'maxItems': 4,
                'gameTxt': '<h2>Drag and drop the document of each kind to the placeholders respecting the recommendations on sending of the kind of documents via email.</h2>',
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
                            img:'<img src="img/JustEmail106.png" alt="RegularEmail" width="160" height="140">', 
                            txt:'Send by any simple Email Service'
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/gmail-encryption-Lock-large.jpg" alt="gmail-encryption-Lock-large" width="160" height="140">', 
                            txt:'Use corporate Outlook or Gmail' 
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/locked_spemail-logo.png" alt="locked_spemail-logo" width="160" height="140">', 
                            txt:'Email Serivce With Cryptography'
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/Proton_e2e-encryp.png" alt="Proton_e2e-encryp" width="160" height="140">', 
                            txt:'ProtonMail or Other With End-To-End Encryption' 
                        }
                    ]
            }, 
            'backgColor' : '#FFF8DC'
        },
        {
            'game': {
                'maxItems': 4,
                'gameTxt': '<h2>Drag and drop the document of each kind to the placeholders respecting the way to share the different kind of documents.</h2>',
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
                            img:'<img src="img/cloud-storage.png" alt="cloud-storage" width="180" height="160">', 
                            txt:'Store on any publick cloud service'
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/MS-Teams-logo.png" alt="MS-Teams-logo" width="180" height="160">', 
                            txt:'TEAMS or other corp shared storage' 
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/TeamsLogorev.png" alt="TeamsLogorev" width="180" height="160">', 
                            txt:'TEAMS Shared only for specific persons or groups'
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/nextCloud.png" alt="nextCloud" width="180" height="160">', 
                            txt:'Corp NextCloud, cloud within MUHC encryption Canada/EU' 
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
        //$("#gameTextDiv").html(gameText);
        $("#textMessage").html(gameText);     
        $('<div>' + imgDest[k].img + '<h4 style="margin-top: -10px;">' + imgDest[k].txt + '</h4>' + '</div>').data( 'number', imgDest[k].id ).appendTo( '#cardSlots' ).droppable( {
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
        $('#gameTextDiv').hide();
        $('#imgTxtMessage').removeClass("textMessageEmail");
      }
      function clickTopRight() { 
        // $( init );  
        objectId=0;
        init();
        $("#selectGame").hide();
        $('#backgroundDiv').hide();
        // $('#cardPileVertical').hide();
        // $('#cardSlotsVertical').hide();
        $('#cardPile').removeClass("cardPileVertical");
        $('#cardSlots').removeClass("cardSlotsVertical");
        $('#cardPile').addClass("cardPile");
        $('#cardSlots').addClass("cardSlots");
        $('#gameTextDiv').removeClass("gameTextVerticalDiv");
        $('#gameTextDiv').addClass("gameTextHorizDiv");
        $('#imgTxtMessage').addClass("textMessageFiles");
        $('#textMessage').addClass("imgTxtClear");
      }
      function leftBotColMsg() { 
        // $( init );  
        objectId=1;
        init();
        $("#selectGame").hide();
        $('#backgroundDiv').hide();
        // $('#cardPileVertical').show();
        // $('#cardSlotsVertical').show();
        $('#cardPile').removeClass("cardPile");
        $('#cardSlots').removeClass("cardSlots");
        $('#cardPile').addClass("cardPileVertical");
        $('#cardSlots').addClass("cardSlotsVertical");
        $('#gameTextDiv').removeClass("gameTextHorizDiv");
        $('#gameTextDiv').addClass("gameTextVerticalDiv");
        $('#textMessage').removeClass("imgTxtClear");
        $('#imgTxtMessage').addClass("textMessageEmail");
        
      }
      function rightBotColMsg() { 
        // $( init );  
        objectId=2;
        init();
        $("#selectGame").hide();
        $('#backgroundDiv').hide(); 
        // $('#cardPileVertical').hide();
        // $('#cardSlotsVertical').hide(); 
        $('#cardPile').removeClass("cardPileVertical");
        $('#cardSlots').removeClass("cardSlotsVertical");
        $('#cardPile').addClass("cardPile");
        $('#cardSlots').addClass("cardSlots");
        $('#gameTextDiv').removeClass("gameTextVerticalDiv");
        $('#gameTextDiv').addClass("gameTextHorizDiv");
        $('#imgTxtMessage').addClass("textMessageCloud");
        $('#textMessage').addClass("imgTxtClear");
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
function closeTheGame() {
    init();
}
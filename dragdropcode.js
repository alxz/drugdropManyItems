
    var correctCards = 0;
    var objectId = 0;    
    var uiObj = null;
    var gameOne;
    var gameTwo;
    var gameThree;
    var isFlip = false;
    $( init );
    var arrObjects = [
        {
            'game': {
                'maxItems': 4,
                'gameTxt': 'Drag and drop the document of each kind to the placeholders according to the recommendations on the information type.',
                'imgSrc': 
                    [
                        {
                            id: 1, 
                            img:'<img src="img/publicPapers.png" alt="publicPapers" width="180" height="160">',
                            level: 1
                        },
                        {
                            id: 2, 
                            img:'<img src="img/restrictedPapers.png" alt="restrictedPapers" width="180" height="160">',
                            level: 2
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/confidentialPapers.png" alt="confidentialPapers" width="180" height="160">',
                            level: 3
                        },
                        {
                            id: 4,
                            img:'<img src="img/sensitivePapers.png" alt="sensitivePapers" width="180" height="160">',
                            level: 4
                        }                        
                    ],
                'imgDest': 
                    [
                        { 
                            id: 1, 
                            img:'<img src="img/McGillUSBKey.png" alt="McGillUSBKey" width="180" height="160">', 
                            txt:'Copy To USB Key',
                            level: 1
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/suitcase-clip-art-briefcase.png" alt="Briefcase" width="180" height="160">', 
                            txt:'Carry in a briefcase' ,
                            level: 2
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/pendrive-PassCode_USBKey.png" alt="pendrive-PassCode_USBKey" width="180" height="160">', 
                            txt:'Should Have Encryption',
                            level: 3
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/small-fireproof-safe.png" alt="small-fireproof-safe" width="180" height="160">', 
                            txt:'MUST Use Encryption Software',
                            level: 4
                        }
                    ]
            }, 
            'backgColor' : '#ec9b9b'
        },
        {
            'game': {
                'maxItems': 4,
                'gameTxt': 'Drag and drop the document of each kind to the placeholders according to the recommendations on the information type.',
                'imgSrc': 
                    [
                        {
                            id: 1, 
                            img:'<img src="img/publicPapers.png" alt="publicPapers" width="180" height="160">',
                            level: 1
                        },
                        {
                            id: 2, 
                            img:'<img src="img/restrictedPapers.png" alt="restrictedPapers" width="180" height="160">',
                            level: 2
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/confidentialPapers.png" alt="confidentialPapers" width="180" height="160">',
                            level: 3
                        },
                        {
                            id: 4,
                            img:'<img src="img/sensitivePapers.png" alt="sensitivePapers" width="180" height="160">',
                            level: 4
                        }                        
                    ],
                'imgDest': 
                    [
                        { 
                            id: 1, 
                            img:'<img src="img/JustEmail.png" alt="RegularEmail" width="160" height="140">', 
                            txt:'Send by Any Available Email Service',
                            level: 1
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/gmail-encryption-Lock-large.jpg" alt="gmail-encryption-Lock-large" width="160" height="140">', 
                            txt:'Use Corporate Outlook or Corporate Gmail',
                            level: 2
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/locked_spemail-logo.png" alt="locked_spemail-logo" width="160" height="140">', 
                            txt:'Email Serivce Allows Cryptography Plugin',
                            level: 3
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/Proton_e2e-encryp.png" alt="Proton_e2e-encryp" width="160" height="140">', 
                            txt:'ProtonMail or Other MUST have End-To-End Encryption',
                            level: 4
                        }
                    ]
            }, 
            'backgColor' : '#FFF8DC'
        },
        {
            'game': {
                'maxItems': 4,
                'gameTxt': 'Drag and drop the document of each kind to the placeholders respecting the way to share the different type of information.',
                'imgSrc': 
                    [
                        {
                            id: 1, 
                            img:'<img src="img/publicPapersGreen.png" alt="publicPapersGreen" width="180" height="160">',
                            level: 1
                        },
                        {
                            id: 2, 
                            img:'<img src="img/restrictedPapersYellow.png" alt="RestrictedPapers" width="180" height="160">',
                            level: 2
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/confidentialPapers.png" alt="confidentialPapers" width="180" height="160">',
                            level: 3
                        },
                        {
                            id: 4,
                            img:'<img src="img/sensitivePapers.png" alt="sensitivePapers" width="180" height="160">',
                            level: 4
                        }                        
                    ],
                'imgDest': 
                    [
                        { 
                            id: 1, 
                            img:'<img src="img/any-cloud.png" alt="cloud-storage" width="180" height="160">', 
                            txt:'To ANY Public Cloud Service Accessible by Employees',
                            level: 1
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/MS-Teams-SharedStore.png" alt="MS-Teams-SharedStore" width="180" height="160">', 
                            txt:'Corporate TEAMS or Shared Storage',
                            level: 2
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/TeamsLogorev.png" alt="TeamsLogorev" width="180" height="160">', 
                            txt:'Corporate TEAMS Shared with Limited Access Only',
                            level: 3
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/nextCloudShade.png" alt="nextCloud" width="180" height="160">', 
                            txt:'MUHC Corporate NextCloud, allowed MUHC Encryption Hosted in Canada/EU',
                            level: 4
                        }
                    ]
            }, 
            'backgColor' : '#CCCCFF'
        }        
    ];
    
    // leftTopColMsg();

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
        //console.log('docImg[]: ', docImg);
        for (let i = 0; i < arrObjects[objectId].game.imgDest.length; i++) {
            //imgDest[i] = arrObjects[objectId].game1.imgDest[i];
            imgDest.push (arrObjects[objectId].game.imgDest[i]);
        }
        imgDest = shuffle(imgDest);
        //console.log('imgDest[]: ', imgDest);
        var backColor = arrObjects[objectId].backgColor;
        
        //show background div:
        // adding a class: class-backgroundDiv     

        $('#backgroundDiv').addClass('class-backgroundDiv');
        $('#backgroundDiv').show();      
            
        // show game selector:
        $('#selectGame').show();
        //hidePageObjecs();      
        $('#successMessage').hide();  // Hide the success message  
        $('#failedMessage').hide(); // Hide the failure message
        $('#infoMessage').hide();  // Hide info Message

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
        //setting correct css props for info messages
        $('#infoMessage').css( {
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
        for (let k = 0; k < maxItems; k++) {
            $('<div>' + docImg[k].img + '</div>').data( 'numberLevel', {'number': docImg[k].id, 'level': docImg[k].level }).attr( 'id', 'card'+1 ).appendTo( '#cardPile' ).draggable( {
                containment: '#content',
                stack: '#cardPile div',
                cursor: 'move',
                revert: true
                } );
            //$("#gameTextDiv").html(gameText);
            $("#textMessage").html('<h4>'+gameText+'</h4>');     
            $('<div>' + imgDest[k].img + '<h4 style="margin-top: -10px;">' + imgDest[k].txt + '</h4></div>').data( 'numberLevel', {'number': imgDest[k].id, 'level': imgDest[k].level}).appendTo( '#cardSlots' ).droppable( {
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
            } );

            // $('<div>' + imgDest[k].img + '<h4 style="margin-top: -10px;">' + imgDest[k].txt + '</h4></div>').data( 'number', imgDest[k].id ).appendTo( '#cardSlots' ).droppable( {
            //     accept: '#cardPile div',
            //     hoverClass: 'hovered',
            //     drop: handleCardDrop
            //     } );
        }   
    }

    function handleCardDrop( event, ui ) {
        var slotNumber = $(this).data( 'numberLevel' );
        var slotLevel  = $(this).data( 'numberLevel' );
        var cardNumber = ui.draggable.data( 'numberLevel' );
        var cardLevel  = ui.draggable.data( 'numberLevel' );     
        //console.log('slotNumber: ',slotNumber,', cardNumber: ',cardNumber);
        // If the card was dropped to the correct slot,
        // change the card colour, position it directly
        // on top of the slot, and prevent it being dragged
        // again  
        if ( slotNumber.number == cardNumber.number ) { 
            ui.draggable.addClass( 'correct' );
            ui.draggable.draggable( 'disable' );
            $(this).droppable( 'disable' );
            ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
            ui.draggable.draggable( 'option', 'revert', false );
            correctCards++;
            //console.log('Correct: ui: ',ui);
        }  else {
            var msgObj = '#failedMessage';
            if ( slotLevel.level > cardLevel.level) {
                console.log(' slotLevel (',slotLevel.level,') is greater than cardLevel (',cardLevel.level,')');
                msgObj = '#infoMessage';
            } else {
                console.log(' cardLevel (',cardLevel.level,') is greater than slotLevel (',slotLevel.level,')');
                msgObj = '#failedMessage';
            }
            // if this is incorrect card dropped:
            ui.draggable.addClass( 'incorrect' );
            uiObj = ui;
            //console.log('Incorrect: uiObj: ',uiObj);
            //ui.draggable.draggable( 'disable' );
            //$(this).droppable( 'disable' );
            //ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
            //ui.draggable.draggable( 'option', 'revert', false );
            $(msgObj).show();
            $(msgObj).animate( {
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
            //console.log(' objectId = ', objectId,' - time to swap the values!')
        }
        checkGameState(objectId);
    }

    function clearWrongDrop() {
        //console.log('Wrong placement!');
        $('#successMessage').hide();  // Hide the success message  
        $('#failedMessage').hide(); // Hide the failure message
        $('#infoMessage').hide(); // Hide the failure message
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
        //setting correct css props for info messages  
        $('#infoMessage').css( {
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
        //showPageObjecs();
        objectId=0;
        init();
        $("#selectGame").hide();  
        $('#backgroundDiv').hide();
        $('#gameTextDiv').hide();
        $('#imgTxtMessage').removeClass("textMessageEmail");
      }
      function clickTopRight() { 
          // Manage Document Store and transportation + USB
        // $( init );
        //showPageObjecs();
        if ( isFlip === true ) {            
            m = $('#cardPile');
            n = $('#cardSlots');
            m.attr('id','cardSlots');
            n.attr('id','cardPile');
            $('#cardPile').hide();
            $('#cardSlots').hide();
            $('#cardPile').show();
            $('#cardSlots').show();
            isFlip = false;
        }        
        objectId=0;
        init();
        $("#selectGame").hide();
        $('#backgroundDiv').hide();
        $('#cardPile').removeClass("cardPileVertical");
        $('#cardSlots').removeClass("cardSlotsVertical");
        $('#cardPile').addClass("cardPile");
        $('#cardSlots').addClass("cardSlots");
        $('#gameTextDiv').removeClass("gameTextVerticalDiv");
        $('#imgTxtMessage').removeClass("textMessageFiles");
        $('#imgTxtMessage').removeClass("textMessageEmail");
        $('#imgTxtMessage').removeClass("textMessageCloud")
        $('#gameTextDiv').addClass("gameTextHorizDiv");
        $('#imgTxtMessage').addClass("textMessageFiles");
        $('#textMessage').addClass("imgTxtClear");

      }
      function leftBotColMsg() { 
        // $( init );
        //showPageObjecs();
        if ( isFlip === true ) {            
                m = $('#cardPile');
                n = $('#cardSlots');
                m.attr('id','cardSlots');
                n.attr('id','cardPile');
                $('#cardPile').hide();
                $('#cardSlots').hide();
                $('#cardPile').show();
                $('#cardSlots').show();
                isFlip = false;
        }  
        objectId=1;
        init();
        $("#selectGame").hide();
        $('#backgroundDiv').hide();
        $('#cardPile').removeClass("cardPile");
        $('#cardSlots').removeClass("cardSlots");
        $('#cardPile').addClass("cardPileVertical");
        $('#cardSlots').addClass("cardSlotsVertical");
        $('#gameTextDiv').removeClass("gameTextHorizDiv");         
        $('#imgTxtMessage').removeClass("textMessageFiles");
        $('#imgTxtMessage').removeClass("textMessageEmail");
        $('#imgTxtMessage').removeClass("textMessageCloud");
        $('#gameTextDiv').addClass("gameTextVerticalDiv");
        $('#textMessage').addClass("imgTxtClear");
        $('#imgTxtMessage').addClass("textMessageEmail");  
      }

      function rightBotColMsg() { 
        // $( init );      
        //showPageObjecs();    
        if ( isFlip === false ) {            
            m = $('#cardPile');
            n = $('#cardSlots');
            m.attr('id','cardSlots');
            n.attr('id','cardPile');
            $('#cardPile').hide();
            $('#cardSlots').hide();
            $('#cardPile').show();
            $('#cardSlots').show();            
            isFlip = true;
        }  
        objectId=2;
        init();
        $("#selectGame").hide();
        $('#backgroundDiv').hide();     
        
        $('#cardPile').removeClass("cardPileVertical");
        $('#cardSlots').removeClass("cardSlotsVertical");
        $('#cardPile').addClass("cardPile");
        $('#cardSlots').addClass("cardSlots");
        $('#gameTextDiv').removeClass("gameTextVerticalDiv");
        $('#imgTxtMessage').removeClass("textMessageFiles");
        $('#imgTxtMessage').removeClass("textMessageEmail");
        $('#imgTxtMessage').removeClass("textMessageCloud")
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
    checkGameState(objectId);

    $('#cardPile').removeClass("cardPileVertical");
    $('#cardSlots').removeClass("cardSlotsVertical");
    $('#gameTextDiv').removeClass("gameTextVerticalDiv");
    $('#imgTxtMessage').removeClass();

    if ( isFlip === true) {
        m = $('#cardPile');
        n = $('#cardSlots');
        m.attr('id','cardSlots');
        n.attr('id','cardPile');
        $('#cardPile').hide();
        $('#cardSlots').hide();
        $('#cardPile').show();
        $('#cardSlots').show();
        isFlip = false;
    }
    objectId=0;
    init();
}

function checkGameState (objId) {
    var starsString = "" ; 
    var oldScore = 0;
    switch (objectId) {
        case 0:
            if ( gameOne === null || gameOne === undefined || typeof gameOne == "undefined") {
                gameOne = {
                    score : 0
                };                     
            }
            oldScore = gameOne.score;
            if (oldScore < correctCards ) {
                gameOne = {
                    score : correctCards
                };
            }
            var element = document.getElementById("gameOne");
            for (let i = 0; i < gameOne.score; i++) {
                starsString += " " + "&#9733;";        
            }
            element.innerHTML = starsString;  
            break;

        case 1:
            if ( gameTwo === null || gameTwo === undefined || typeof gameTwo == "undefined") {
                gameTwo = {
                    score : 0
                };                     
            }
            oldScore = gameTwo.score;
            if (oldScore < correctCards ) {
                gameTwo = {
                    score : correctCards
                };
            }   
            var element = document.getElementById("gameTwo");
            for (let i = 0; i < gameTwo.score; i++) {
                starsString += " " + "&#9733;";       
            }
            element.innerHTML = starsString;            
            break;    
        case 2:
            if ( gameThree === null || gameThree === undefined || typeof gameThree == "undefined") {
                gameThree = {
                    score : 0
                };                     
            }
            oldScore = gameThree.score;
            if (oldScore < correctCards ) {
                gameThree = {
                    score : correctCards
                };
            }   
            var element = document.getElementById("gameThree");
            for (let i = 0; i < gameThree.score; i++) {
                starsString += " " + "&#9733;";        
            }
            element.innerHTML = starsString;

        break;
        default:
            console.log("game State verification.... ");
            break;
    } 
}

function hidePageObjecs() {
    // using jQuery
    console.log('!!! Time to hide page content!');
    $("#content").hide(); 
    $("#pageFoolter").hide();
    // $("#selectGame").hide();
    // $('#backgroundDiv').hide();     
    
    // $('#cardPile').hide();
    // $('#cardSlots').hide();
    // $('#gameTextDiv').hide();
    // $('#imgTxtMessage').hide();  
    // $('#textMessage').hide();
}

function showPageObjecs() {
    // using jQuery
    console.log('!!! Time to show page content!');
    $("#content").show(); 
    $("#pageFoolter").show();
}
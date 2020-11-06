
    var correctCards = 0;
    var objectId = 0;    
    var uiObj = null;
    var gameOne;
    var gameTwo;
    var gameThree;
    var isFlip = false;
    var publicDocImg = "img/PublicDocsAll.png";
    var confDocImg = "img/ConfidentialDocsAll.png";
    var restrDocImg = "img/RestrictedDocsAll.png";
    var sensDocImg = "img/SensitiveDocsAll.png";
    $( init );
    var arrObjects = [
        {
            'game': {
                'maxItems': 4,
                'gameTxt': 'Drag and drop the document of each kind to the most appropriate placeholders (according to MUHCs information classification standards) when transporting documents off-site',
                'gameTxtClass' : 'class-digitalMediumMsg',
                'imgSrc': 
                    [
                        {
                            id: 1, 
                            img:'<img src="' + publicDocImg + '" alt="publicPapers" width="130" height="190">',
                            level: 1
                        },
                        {
                            id: 4, 
                            img:'<img src="' + confDocImg + '" alt="restrictedPapers" width="130" height="190">',
                            level: 4
                        },
                        { 
                            id: 3, 
                            img:'<img src="' + restrDocImg + '" alt="confidentialPapers" width="130" height="190">',
                            level: 3
                        },
                        {
                            id: 4,
                            img:'<img src="' + sensDocImg + '" alt="sensitivePapers" width="130" height="190">',
                            level: 4
                        }                        
                    ],
                'imgDest': 
                    [
                        { 
                            id: 1, 
                            img:'<img src="img/USB_drive.png" alt="JustUSBKey" width="70" height="140">', 
                            txt:'On any digital medium',
                            level: 1
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/USB_drive-Encryption.png" alt="Encrypted Digital Medium" width="100" height="150">', 
                            txt:'On an encrypted digital medium' ,
                            level: 4
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/frefDocImgFileBriefCase.png" alt="Briefcase" width="160" height="150">', 
                            txt:'Digital medium is in a bag or a briefcase',
                            level: 3
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/USB_drive-Encryption.png" alt="Encrypted Digital Medium" width="100" height="150">', 
                            txt:'On an encrypted digital medium',
                            level: 4
                        }
                    ]
            }, 
            'backgColor' : '#CCCC99'
        },
        {
            'game': {
                'maxItems': 4,
                'gameTxt': 'Drag and drop the document of each kind to the most appropriate placeholders (according to MUHCs information classification standards)',
                'gameTxtClass' : 'class-emailsMsg',
                'imgSrc': 
                    [
                        {
                            id: 1, 
                            img:'<img src="' + publicDocImg + '" alt="publicPapers" width="130" height="190">',
                            level: 1
                        },
                        {
                            id: 2, 
                            img:'<img src="' + confDocImg + '" alt="restrictedPapers" width="130" height="190">',
                            level: 2
                        },
                        { 
                            id: 3, 
                            img:'<img src="' + restrDocImg + '" alt="confidentialPapers" width="130" height="190">',
                            level: 3
                        },
                        {
                            id: 4,
                            img:'<img src="' + sensDocImg + '" alt="sensitivePapers" width="130" height="190">',
                            level: 4
                        }                        
                    ],
                'imgDest': 
                    [
                        { 
                            id: 1, 
                            img:'<img src="img/refDoc_EmailANY.png" alt="RegularEmail" width="130" height="130">', 
                            txt:'Any Available Email Service',
                            level: 1
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/refDoc_EmailMSOutlook.png" alt="microsoft-outlook-logo.png" width="130" height="130">', 
                            txt:'MUHC Corporate Email Service',
                            level: 2
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/refDoc_EmailOpenPGPProtonEtc.png" alt="locked_spemail-logo" width="130" height="130">', 
                            txt:'Email Serivce with a Cryptography Plugin',
                            level: 3
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/refDoc_EmailProtonEncrypt.png" alt="Proton_e2e-encryp" width="130" height="130">', 
                            txt:'ProtonMail or Other End-To-End Encrypted Email Service',
                            level: 4
                        }
                    ]
            }, 
            'backgColor' : '#FFF8DC'
        },
        {
            'game': {
                'maxItems': 4,
                'gameTxt': 'Drag and drop the document of each kind to the most appropriate placeholders (according to MUHCs information classification standards)',
                'gameTxtClass' : 'class-cloudsMsg',
                'imgSrc': 
                    [
                        {
                            id: 1, 
                            img:'<img src="' + publicDocImg + '" alt="publicPapers" width="130" height="190">',
                            level: 1
                        },
                        {
                            id: 2, 
                            img:'<img src="' + confDocImg + '" alt="restrictedPapers" width="130" height="190">',
                            level: 2
                        },
                        { 
                            id: 3, 
                            img:'<img src="' + restrDocImg + '" alt="confidentialPapers" width="130" height="190">',
                            level: 3
                        },
                        {
                            id: 4,
                            img:'<img src="' + sensDocImg + '" alt="sensitivePapers" width="130" height="190">',
                            level: 4
                        }                        
                    ],
                'imgDest': 
                    [
                        { 
                            id: 1, 
                            img:'<img src="img/refDoc_CloudANY.png" alt="cloud-storage" width="130" height="130">', 
                            txt:'ANY Cloud Server Accessible by Employees',
                            level: 1
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/refDoc_CloudRestricted.png" alt="refDoc_CloudRestricted" width="130" height="130">', 
                            txt:'MUHC Corporate Cloud',
                            level: 2
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/refDoc_CloudConfidential.png" alt="refDoc_CloudConfidential" width="130" height="130">', 
                            txt:'Any Cloud Hosted in Canada or EU (encrypting the files on servers)',
                            level: 3
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/refDoc_CloudSensitiveEncrNEXTCloud.png" alt="nextCloud" width="130" height="130">', 
                            txt:'MUHC Private Cloud',
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
        var gameText = arrObjects[objectId].game.gameTxt; // game message text
        var gameTxtClass = arrObjects[objectId].game.gameTxtClass; // game message decoration class
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
            $("#textMessage").removeClass(); // removind all classes 'gameTxtClass' : 'class-emailsMsg',
            $("#textMessage").addClass(gameTxtClass);
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
                //console.log(' slotLevel (',slotLevel.level,') is greater than cardLevel (',cardLevel.level,')');
                msgObj = '#infoMessage';
            } else {
                //console.log(' cardLevel (',cardLevel.level,') is greater than slotLevel (',slotLevel.level,')');
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
        $('#cardPile').removeClass();
        $('#cardSlots').removeClass();

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
        // $('#imgTxtMessage').removeClass("textMessageFiles");
        // $('#imgTxtMessage').removeClass("textMessageEmail");
        //$('#imgTxtMessage').removeClass("textMessageCloud")
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
    var blankStarString = "" ;
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
                starsString += "<span class='class-starYellow'>&#9733; </span>";        
            }
            for (let i = 0; i < (4 - gameOne.score); i++) {
                blankStarString +="<span class='class-starWhite'>&#9733; </span>";
            }
            element.innerHTML = starsString + blankStarString;  
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
                starsString += "<span class='class-starYellow'>&#9733; </span>";       
            }
            for (let i = 0; i < (4 - gameTwo.score); i++) {
                blankStarString +="<span class='class-starWhite'>&#9733; </span>";
            }            
            element.innerHTML = starsString + blankStarString;            
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
                starsString += "<span class='class-starYellow'>&#9733; </span>";        
            }
            for (let i = 0; i < (4 - gameThree.score); i++) {
                blankStarString +="<span class='class-starWhite'>&#9733; </span>";
            }  
            element.innerHTML = starsString + blankStarString; 

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
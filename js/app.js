$(document).ready(function() {
    var matrixId = 0;
    var colorAsClass = [
        "cblack",
        "cblanche",
        "crouge",
        "cvert",
        "cbleu",
        "cturc",
        "cviolet",
        "cjaune"
    ];
    var classAsColor = {
        "cblack":0,
        "cblanche":1,
        "crouge":2,
        "cvert":3,
        "cbleu":4,
        "cturc":5,
        "cviolet":6,
        "cjaune":7
    };
    generatebinary();
    new Clipboard('#copy-button');
    var colorCurent = 0;
    var c="";
    $('.colorButtonBlack').click(function(){
        colorCurent = 0;
        $('.csspencil').removeClass('checkedPencil');
        $(this).addClass('checkedPencil');
    });
    $('.colorButtonBlanc').click(function(){
        colorCurent = 1;
        $('.csspencil').removeClass('checkedPencil');
        $(this).addClass('checkedPencil');
    });
    $('.colorButtonRouge').click(function(){
        colorCurent = 2;
        $('.csspencil').removeClass('checkedPencil');
        $(this).addClass('checkedPencil');
    });
    $('.colorButtonVert').click(function(){
        colorCurent = 3;
        $('.csspencil').removeClass('checkedPencil');
        $(this).addClass('checkedPencil');
    });
    $('.colorButtonBleu').click(function(){
        colorCurent = 4;
        $('.csspencil').removeClass('checkedPencil');
        $(this).addClass('checkedPencil');
    });
    $('.colorButtonTurc').click(function(){
        colorCurent = 5;
        $('.csspencil').removeClass('checkedPencil');
        $(this).addClass('checkedPencil');
    });
    $('.colorButtonViolet').click(function(){
        colorCurent = 6;
        $('.csspencil').removeClass('checkedPencil');
        $(this).addClass('checkedPencil');
    });
    $('.colorButtonJaune').click(function(){
        colorCurent = 7;
        $('.csspencil').removeClass('checkedPencil');
        $(this).addClass('checkedPencil');
    });

    function generatebinary(){
        textePresent="";
        $('.cell').each(function(){
            textePresent = textePresent+$(this).html();
        });
        $('#binaryCode').html("");
        $('#binaryCode').html(textePresent);
    }

    $('.cell').click(function(){
        $(this).html(colorCurent);
        generatebinary();
        if(colorCurent==0){
            c=$(this).attr('class');
            $(this).removeClass(c);
            $(this).addClass('cell');
            $(this).addClass('cblack');
        }
        if(colorCurent==1){
            c=$(this).attr('class');
            $(this).removeClass(c);
            $(this).addClass('cell');
            $(this).addClass('cblanche');
        }
        if(colorCurent==2){
            c=$(this).attr('class');
            $(this).removeClass(c);
            $(this).addClass('cell');
            $(this).addClass('crouge');
        }
        if(colorCurent==3){
            c=$(this).attr('class');
            $(this).removeClass(c);
            $(this).addClass('cell');
            $(this).addClass('cvert');
        }
        if(colorCurent==4){
            c=$(this).attr('class');
            $(this).removeClass(c);
            $(this).addClass('cell');
            $(this).addClass('cbleu');
        }
        if(colorCurent==5){
            c=$(this).attr('class');
            $(this).removeClass(c);
            $(this).addClass('cell');
            $(this).addClass('cturc');
        }
        if(colorCurent==6){
            c=$(this).attr('class');
            $(this).removeClass(c);
            $(this).addClass('cell');
            $(this).addClass('cviolet');
        }
        if(colorCurent==7){
            c=$(this).attr('class');
            $(this).removeClass(c);
            $(this).addClass('cell');
            $(this).addClass('cjaune');
        }
    });
    
    $('.btnSave').click(function(e){
        e.preventDefault();
        var chaineString = $('.codeMatriceAll').html();
        var blob = new Blob([chaineString], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "Matrix.mtx");
    });
    $('.miniMatrix').click(function(e){
        e.preventDefault();
        matrixId = $(this).data().matrixid;
        $('.miniMatrix').removeClass('selectedMiniMatrix');
        $(this).addClass('selectedMiniMatrix');
        loadMatriceSingle();
    });
    $('.btnSaveOnScreen').click(function(e){
        e.preventDefault();
        var i = false;
        textePresent="";
        var chaineString = $('.codeMatrice').html();
        $('.miniMatrix-num'+matrixId).find('.cMiniBlock').each(function(n,e){
            c = $(e).attr('class');
            $(e).removeClass(c).addClass('cMiniBlock').addClass(colorAsClass[chaineString[n]]);
        });
        
        $('.miniMatrix').each(function(num,elema){
            
            if(i){
                textePresent = textePresent+"|";
            }
            i = true;
            $(elema).find('.cMiniBlock').each(function(nombre,elemb){
                textePresent = textePresent+classAsColor[$(elemb).attr('class').replace('cMiniBlock','').replace(' ','')];
            });
            
        });
        $('#binaryCodeAll').html("");
        $('#binaryCodeAll').html(textePresent);
    });
    $('.btnAddScreen').click(function(e){
        e.preventDefault();
        curentNumPic = (($('.ScreenArea').find('.miniMatrix').last().data().matrixid) * 1) +1;
        console.log((($('.ScreenArea').find('.miniMatrix').last().data().matrixid) * 1) +1);
        $('.ScreenArea').append('<div class="miniMatrix miniMatrix-num' + curentNumPic +'" data-matrixId="' + curentNumPic + '"><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div><!----><div class="cMiniBlock cblack"></div></div>');
        
        $('.miniMatrix-num' + curentNumPic).on('click',function(e){
            e.preventDefault();
            console.log('clcikc');
            matrixId = $(this).data().matrixid;
            $('.miniMatrix').removeClass('selectedMiniMatrix');
            $('.miniMatrix-num' + matrixId).addClass('selectedMiniMatrix');
                loadMatriceSingle();
        });
    });
    $('.btnDelScreen').click(function(e){
        e.preventDefault();
        if(matrixId==0){
            alert("impossible de suprimer le premier element !");
            return false;
        }
        
        $('.miniMatrix-num' + matrixId).remove();
        var i = false;
        textePresent="";
        
        $('.miniMatrix').each(function(num,elema){
            
            if(i){
                textePresent = textePresent+"|";
            }
            i = true;
            $(elema).find('.cMiniBlock').each(function(nombre,elemb){
                textePresent = textePresent+classAsColor[$(elemb).attr('class').replace('cMiniBlock','').replace(' ','')];
            });
            
        });
        $('#binaryCodeAll').html("");
        $('#binaryCodeAll').html(textePresent);
        
        matrixId=0;
        $('.miniMatrix').removeClass('selectedMiniMatrix');
        $('.miniMatrix-num0').addClass('selectedMiniMatrix');
        loadMatriceSingle();
    });
    
    $('.btnLoadScreen').click(function(e){
        e.preventDefault();
        var myarray = $('#resultat').html().split("|");
        $('.miniMatrix').remove();
        for(i=0;i<myarray.length;i++){
            curentNumPic = i;
            
            loadedDatas = "";
            loadedDatas = loadedDatas + ('<div class="miniMatrix miniMatrix-num' + curentNumPic +'" data-matrixId="' + curentNumPic + '"><!--');
            for(j=0;j<myarray[i].length;j++){
                curentClass = myarray[i][j];
                loadedDatas = loadedDatas + ('--><div class="cMiniBlock ' + colorAsClass[curentClass] + '"></div><!--');
            }
            loadedDatas = loadedDatas + ('--></div>');
            $('.ScreenArea').append(loadedDatas);
            
            $('.miniMatrix-num' + curentNumPic).on('click',function(e){
                e.preventDefault();
                matrixId = $(this).data().matrixid;
                $('.miniMatrix').removeClass('selectedMiniMatrix');
                $('.miniMatrix-num' + matrixId).addClass('selectedMiniMatrix');
                loadMatriceSingle();
            });
        }
        
    });
    
    function loadMatriceSingle(){
        textePresent = "";
        $('.miniMatrix-num' + matrixId).find('.cMiniBlock').each(function(nombre,elemb){
            textePresent = textePresent+classAsColor[$(elemb).attr('class').replace('cMiniBlock','').replace(' ','')];
        });
        
        $('.matrix').find('.cell').each(function(nombre,elm){
            colorNm = textePresent[nombre];
            $(elm).html(colorNm)
            
            c=$(elm).attr('class');
            $(elm).removeClass(c);
            $(elm).addClass('cell');
            $(elm).addClass(colorAsClass[colorNm]);
            
        });
        
        
        $('#binaryCode').html("");
        $('#binaryCode').html(textePresent);
    }
    
});
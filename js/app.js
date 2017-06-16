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
        saveAs(blob, "Matrix.txt");
    });
    $('.miniMatrix').click(function(e){
        e.preventDefault();
        matrixId = $(this).data().matrixid;
        $('.miniMatrix').removeClass('selectedMiniMatrix');
        $(this).addClass('selectedMiniMatrix');
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
    
    
});
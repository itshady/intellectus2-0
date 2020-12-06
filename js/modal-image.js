// JavaScript source code
    
$(document).ready(function () { 
    $('.unit-button').click(function() {
        var btnname = $(this).text();
        var foldername = $('.col-md-12 > h3').text();
        var subfoldername = $('.col-md-12 > h1').text();
        var locationjpg = './images/' + foldername + '/' + subfoldername + '/' + btnname + '.jpg';
        var locationjpeg = './images/' + foldername + '/' + subfoldername + '/' + btnname + '.jpeg';
        var locationpng = './images/' + foldername + '/' + subfoldername + '/' + btnname + '.png';
        var locationmp4 = './images/' + foldername + '/' + subfoldername + '/' + btnname + '.mp4';
        //if (btnname+'jpeg') {
            //$('.modal-body').append('<img id="ExImg" alt="Content to come soon..." src="./images/' + foldername + '/' + subfoldername + '/' + btnname + '.jpg" />')
        //}
        //if ('./images/' + foldername + '/' + subfoldername + '/' + btnname + '.jpg' == true){
            //document.getElementById("ExImg").src = locationjpg;
            //document.getElementById("submodal-video").src = locationmp4;
            
            

        //}
            //console.log(location.exists());
        //console.log(foldername);
        //console.log(subfoldername);
        if( $('#submodal-video').length ) {
            document.getElementById("submodal-video").remove();
        }
        $("#ExImg").css("display", "block");

        document.getElementById("title-up").innerHTML = btnname;
        
        $.get(locationjpg)
            .done(function() { 
                // exists code 
                document.getElementById("ExImg").src = locationjpg;
            }).fail(function() { 
                // not exists code
                $.get(locationjpeg)
                    .done(function() { 
                        // exists code 
                        document.getElementById("ExImg").src = locationjpeg;
                    }).fail(function() { 
                        // not exists code
                        $.get(locationpng)
                            .done(function() { 
                                // exists code 
                                document.getElementById("ExImg").src = locationpng;
                            }).fail(function() { 
                                // not exists code
                                $.get(locationmp4)
                                    .done(function() { 
                                        // exists code 
                                        $("#modal-video").css("display", "none");
                                        $("#modal-video").css("display", "");
                                        $('#modal-video').append('<source id="submodal-video"' + locationmp4 + 'type="video/mp4">')
                                    }).fail(function() { 
                                        // not exists code

                                    })
                            })
                    })
            })


    });

});
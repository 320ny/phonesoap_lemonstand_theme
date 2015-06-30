(function ( $ ) {

    //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
    $.fn.autoPlayYouTubeModal = function() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click(function() {
          console.log("in the click!")
        var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-videoUrl"), 
        videoSRCauto = videoSRC+"?autoplay=1" ;
        $(theModal+' iframe').attr('src', videoSRCauto);
        $(theModal).on('hidden.bs.modal', function () {
            $(theModal+' iframe').attr('src', videoSRC);
        });
      });
      return this;
    }
    
}( jQuery ));
// event pada saat link diklik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('body').animate({
        scrollbars: elemenTujuan.offset().top-50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

    

});

// paralax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    console.log(wScroll);
})
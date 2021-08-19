$(document).ready(function() {
    // Intro slider
    $('.intro-slider').flickity({
        prevNextButtons: false,
        wrapAround: true
    })

    // Blog post
    $('.post-list').flickity({
        prevNextButtons: false
    })

    // Brand
    var brand = $('.brand-list').flickity({
        pageDots: false,
        contain: true,
        groupCells: true,
        prevNextButtons: false
    })
    var brand_data = brand.data('flickity');
    $('.previous-br').click(function() {
        brand.flickity('previous');
    })
    $('.next-br').click(function() {
        brand.flickity('next');
    })
    brand.on( 'change.flickity', function( event, index ) {
        if(brand_data.selectedIndex == 0) {
            $('.previous-br').addClass('btn-disable');
        } else {
            $('.previous-br').removeClass('btn-disable');
        }
        if(brand_data.selectedIndex == brand_data.slides.length - 1) {
            $('.next-br').addClass('btn-disable');
        } else {
            $('.next-br').removeClass('btn-disable');
        }
    });

    // Equal height cells
    Flickity.prototype._createResizeClass = function() {
        this.element.classList.add('flickity-resize');
    };
    
    Flickity.createMethods.push('_createResizeClass');
    
    var resize = Flickity.prototype.resize;
    Flickity.prototype.resize = function() {
        this.element.classList.remove('flickity-resize');
        resize.call( this );
        this.element.classList.add('flickity-resize');
    };


    //Trending
    var trending = $('.trending-products-list').flickity({
        prevNextButtons: false,
        contain: false,
        groupCells: true,
        cellAlign: 'right'
    })
    $('.previous-td').click(function() {
        trending.flickity('previous');
    })
    $('.next-td').click(function() {
        trending.flickity('next');
    })
    var trending_data = trending.data('flickity');
    trending.on( 'change.flickity', function( event, index ) {
        if(trending_data.selectedIndex == 0) {
            $('.previous-td').addClass('btn-disable');
        } else {
            $('.previous-td').removeClass('btn-disable');
        }
        if(trending_data.selectedIndex == trending_data.slides.length - 1) {
            $('.next-td').addClass('btn-disable');
        } else {
            $('.next-td').removeClass('btn-disable');
        }
    });

    // Electronic
    var electronic = $('.electronic-wrapper').flickity({
        prevNextButtons: false,
        pageDots: false,
        contain: false,
        groupCells: true,
        cellAlign: 'right',
        draggable: true
    })
    var prev_ebn = $('.previous-ebn');
    var next_ebn = $('.next-ebn');
    prev_ebn.click(function() {
        electronic.flickity('previous');
    }).fadeOut();
    next_ebn.click(function() {
        electronic.flickity('next');
    })
    var electronic_data = electronic.data('flickity');
    if(electronic_data.slides.length == 1) {
        next_ebn.hide();
        prev_ebn.hide();
    }
    electronic.on('change.flickity', function(event, index) {
        hideButton(electronic_data, prev_ebn, next_ebn);
    })
    
    // Furniture
    var furniture = $('.furniture-wrapper').flickity({
    prevNextButtons: false,
    pageDots: false,
    contain: false,
    groupCells: true,
    cellAlign: 'right',
    draggable: true
    })
    var prev_fbn = $('.previous-fbn');
    var next_fbn = $('.next-fbn');
    prev_fbn.click(function() {
        furniture.flickity('previous');
    }).fadeOut();
    next_fbn.click(function() {
        furniture.flickity('next');
    })
    var furniture_data = furniture.data('flickity');
    if(furniture_data.slides.length == 1) {
        next_fbn.hide();
        prev_fbn.hide();
    }
    furniture.on('change.flickity', function(event, index) {
        hideButton(furniture_data, prev_fbn, next_fbn);
    })

    // Clothing
    var clothing = $('.clothing-wrapper').flickity({
    prevNextButtons: false,
    pageDots: false,
    contain: false,
    groupCells: true,
    cellAlign: 'right',
    draggable: true
    })
    var prev_cbn = $('.previous-cbn');
    var next_cbn = $('.next-cbn');
    prev_cbn.click(function() {
        clothing.flickity('previous');
    }).fadeOut();
    next_cbn.click(function() {
        clothing.flickity('next');
    })
    var clothing_data = clothing.data('flickity');
    if(clothing_data.slides.length == 1) {
        next_cbn.hide();
        prev_cbn.hide();
    }
    clothing.on('change.flickity', function(event, index) {
        hideButton(clothing_data, prev_cbn, next_cbn);
    })

    // Cooking
    var cooking = $('.cooking-wrapper').flickity({
    prevNextButtons: false,
    pageDots: false,
    contain: false,
    groupCells: true,
    cellAlign: 'right',
    draggable: true
    })
    var prev_kbn = $('.previous-kbn');
    var next_kbn = $('.next-kbn');
    prev_kbn.click(function() {
        cooking.flickity('previous');
    }).fadeOut();
    next_kbn.click(function() {
        cooking.flickity('next');
    })
    var cooking_data = cooking.data('flickity');
    if(cooking_data.slides.length == 1) {
        next_kbn.hide();
        prev_kbn.hide();
    }
    cooking.on('change.flickity', function(event, index) {
        hideButton(cooking_data, prev_kbn, next_kbn);
    })

    function hideButton(slide_data, prev_btn, next_btn) {
        if(slide_data.selectedIndex == slide_data.slides.length - 1) {
            next_btn.fadeOut();
        } else {
            next_btn.fadeIn();
        }
        if(slide_data.selectedIndex == 0) {
            prev_btn.fadeOut();
        } else {
            prev_btn.fadeIn();
        }
    }

    //
    $(window).resize(function(){
        electronic.flickity('destroy');
        electronic = $('.electronic-wrapper').flickity({
            prevNextButtons: false,
            pageDots: false,
            contain: false,
            groupCells: true,
            cellAlign: 'right',
            draggable: true
        })
        electronic_data = electronic.data('flickity');
        furniture.flickity('destroy');
        furniture = $('.furniture-wrapper').flickity({
            prevNextButtons: false,
            pageDots: false,
            contain: false,
            groupCells: true,
            cellAlign: 'right',
            draggable: true
        })
        furniture_data = furniture.data('flickity');
        clothing.flickity('destroy');
        clothing = $('.clothing-wrapper').flickity({
            prevNextButtons: false,
            pageDots: false,
            contain: false,
            groupCells: true,
            cellAlign: 'right',
            draggable: true
        })
        clothing_data = clothing.data('flickity');
        cooking.flickity('destroy');
        cooking = $('.cooking-wrapper').flickity({
            prevNextButtons: false,
            pageDots: false,
            contain: false,
            groupCells: true,
            cellAlign: 'right',
            draggable: true
        })
        cooking_data = cooking.data('flickity');
        if(electronic_data.slides.length == 1) {
            next_ebn.hide();
            prev_ebn.hide();
        } else {
            next_ebn.show();
        }
        if(furniture_data.slides.length == 1) {
            next_fbn.hide();
            prev_fbn.hide();
        } else {
            next_fbn.show();
        }
        if(clothing_data.slides.length == 1) {
            next_cbn.hide();
            prev_cbn.hide();
        } else {
            next_cbn.show();
        }
        if(cooking_data.slides.length == 1) {
            next_kbn.hide();
            prev_kbn.hide();
        } else {
            next_kbn.show();
        }
    })
})///
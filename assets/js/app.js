$(document).ready(function(){
    // select option
    $('select').each(function () {
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;
        $this.addClass('s-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="styledSelect"></div>');
        var $styledSelect = $this.next('div.styledSelect');
        $styledSelect.text($this.children('option').eq(0).text());
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
        var $listItems = $list.children('li');
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $(this).toggleClass('active').next('ul.options').toggle();
        });
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
        });
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });

    // Category toggle
    $('.category-toggle').click(function(){
        $('.category-menu').slideToggle(200);
    })

    // Intro slider
    $('.intro-slider').flickity({
        prevNextButtons: false,
        wrapAround: true
    })
    $('.post-list').flickity({
        prevNextButtons: false
    })

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

    var electronic = $('.electronic-wrapper').flickity({
    prevNextButtons: false,
    pageDots: false,
    contain: false,
    groupCells: true,
    cellAlign: 'right',
    draggable: true
    })
    $('.previous-ebn').click(function() {
        electronic.flickity('previous');
    }).fadeOut();
    $('.next-ebn').click(function() {
        electronic.flickity('next');
    })
    var electronic_data = electronic.data('flickity');
    if(electronic_data.slides.length == 1) {
        $('.next-ebn').hide();
        $('.previous-ebn').hide();
    }
    electronic.on('change.flickity', function(event, index) {
        if(electronic_data.selectedIndex == electronic_data.slides.length - 1) {
            $('.next-ebn').fadeOut();
        } else {
            $('.next-ebn').fadeIn();
        }
        if(electronic_data.selectedIndex == 0) {
            $('.previous-ebn').fadeOut();
        } else {
            $('.previous-ebn').fadeIn();
        }
    })

    var furniture = $('.furniture-wrapper').flickity({
    prevNextButtons: false,
    pageDots: false,
    contain: false,
    groupCells: true,
    cellAlign: 'right',
    draggable: true
    })
    $('.previous-fbn').click(function() {
        furniture.flickity('previous');
    }).fadeOut();
    $('.next-fbn').click(function() {
        furniture.flickity('next');
    })
    var furniture_data = furniture.data('flickity');
    if(furniture_data.slides.length == 1) {
        $('.next-fbn').hide();
        $('.previous-fbn').hide();
    }
    furniture.on('change.flickity', function(event, index) {
        if(furniture_data.selectedIndex == furniture_data.slides.length - 1) {
            $('.next-fbn').fadeOut();
        } else {
            $('.next-fbn').fadeIn();
        }
        if(furniture_data.selectedIndex == 0) {
            $('.previous-fbn').fadeOut();
        } else {
            $('.previous-fbn').fadeIn();
        }
    })

    var clothing = $('.clothing-wrapper').flickity({
    prevNextButtons: false,
    pageDots: false,
    contain: false,
    groupCells: true,
    cellAlign: 'right',
    draggable: true
    })
    $('.previous-cbn').click(function() {
        clothing.flickity('previous');
    }).fadeOut();
    $('.next-cbn').click(function() {
        clothing.flickity('next');
    })
    var clothing_data = clothing.data('flickity');
    if(clothing_data.slides.length == 1) {
        $('.next-cbn').hide();
        $('.previous-cbn').hide();
    }
    clothing.on('change.flickity', function(event, index) {
        if(clothing_data.selectedIndex == clothing_data.slides.length - 1) {
            $('.next-cbn').fadeOut();
        } else {
            $('.next-cbn').fadeIn();
        }
        if(clothing_data.selectedIndex == 0) {
            $('.previous-cbn').fadeOut();
        } else {
            $('.previous-cbn').fadeIn();
        }
    })

    var cooking = $('.cooking-wrapper').flickity({
    prevNextButtons: false,
    pageDots: false,
    contain: false,
    groupCells: true,
    cellAlign: 'right',
    draggable: true
    })
    $('.previous-kbn').click(function() {
        cooking.flickity('previous');
    }).fadeOut();
    $('.next-kbn').click(function() {
        cooking.flickity('next');
    })
    var cooking_data = cooking.data('flickity');
    if(cooking_data.slides.length == 1) {
        $('.next-kbn').hide();
        $('.previous-kbn').hide();
    }
    cooking.on('change.flickity', function(event, index) {
        if(cooking_data.selectedIndex == cooking_data.slides.length - 1) {
            $('.next-kbn').fadeOut();
        } else {
            $('.next-kbn').fadeIn();
        }
        if(cooking_data.selectedIndex == 0) {
            $('.previous-kbn').fadeOut();
        } else {
            $('.previous-kbn').fadeIn();
        }
    })

    // Countdown
    $('.product-countdown').countdown('2021/10/11').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
          + `<div class='time-item day'>
                <span>%d</span>
                <span>days</span>
            </div>`
          + `<div class="time-item hour">
                <span>%H</span>
                <span>hours</span>
            </div>`
          + `<div class="time-item min">
                <span>%M</span>
                <span>mins</span>
            </div>`
          + `<div class="time-item sec">
                <span>%S</span>
                <span>secs</span>
            </div>`));
      });
})
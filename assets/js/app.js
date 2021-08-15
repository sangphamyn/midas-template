$(document).ready(function(){
    // Category toggle
    $('.category-toggle').click(function(){
        $('.category-menu').slideToggle(200);
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

    // Make select option
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

})
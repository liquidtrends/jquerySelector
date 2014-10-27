// jQuery Selector //

jQuery(document).ready(function($) {
    $('#category').on('change',function() {
        $('#category-content div').show().not("." +this.value).hide();
    });
});
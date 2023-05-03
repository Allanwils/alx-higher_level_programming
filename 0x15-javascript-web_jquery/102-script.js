$(document).ready(function() {
    const url = 'https://www.fourtonfish.com/hellosalut/hello/';

    $('#btn_translate').click(function() {
        $.ajax({
            url: url,
            type: 'GET',
            data: { lang: $('#language_code').val() },
            success: function(response) {
                $('#hello').html(response.hello);
            }
        });
    });
});

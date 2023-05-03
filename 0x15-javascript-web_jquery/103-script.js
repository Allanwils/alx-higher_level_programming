$(function() {
    $('#btn_translate').click(translate);
    $('#language_code').on('keydown', function(e) {
        if (e.keyCode === 13) {
            translate();
        }
    });
});

function translate() {
    const url = 'https://www.fourtonfish.com/hellosalut/hello/?';
    $.get(url + $.param({ lang: $('#language_code').val() }), function(data) {
        $('#hello').html(data.hello);
    });
}

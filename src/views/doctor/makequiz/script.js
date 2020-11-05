import $ from 'jquery'

$(document).on('keyup', 'ul.question_multiple_answer li:last input[name="question_answer_input"]', function() {

    let item = $(this).val().trim();

    if (item.length > 2) {

        item = $(this).parents('li.question_answer_content').clone();

        let parent = $(this).parents('ul.question_multiple_answer');

        $(parent).append(item);

        $(parent).children('li:last').find('input').val('');

        $(parent).children('li:last').find('a.delete_answer').removeClass('d-none');

        $(parent).children('li:last').find('input[type="checkbox"]').attr('checked', false);

    } else {

        return false;
    }
}).on('click', 'a.delete_answer', function() {

    $(this).parent('li').remove();
});
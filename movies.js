$(function(){
    $('#movieTable').append('<thead><tr><th>Title <button id="sortTitle">Sort</button></th><th>Rating <button id="sortRating">Sort</button></th><th>Delete</th></tr></thead>').append('<tbody></tbody>')
    $('#sortTitle, #sortRating').on('click', function() {
        $(this).toggleClass('asc')
        let btn = $(this)[0].id
        btn = btn == 'sortTitle' ? 0 : 1
        let titles = $('table').find('tbody > tr')
        titles.sort( (a,b) => {
            let val1 = $(a).children('td').eq(btn).text();
            let val2 = $(b).children('td').eq(btn).text();
            if(btn == 1) {
                val1 *=1
                val2 *=1
            }
            if($(this).hasClass('asc'))
            return (val1 < val2) ? -1 : (val1 > val2 ? 1 : 0)
            return (val1 > val2) ? -1 : (val1 > val2 ? 1 : 0)
        })
        $.each(titles, function(index,row) {
            $('tbody').append(row);
        })
    })
    $('form').on('submit', function(e) {
        e.preventDefault();
        let $title = $('#title').val()
        let $rating = $('#rating').val()
        $('#title').focus();
        $('tbody').append(`<tr><td> ${$title} </td> <td> ${$rating} </td> <td> <button>X</button> </td> </tr>`)
        $('#title').val('')
        $('#rating').val('')
        $('#movieTable').on('click', 'button', function() {
            $(this).parent('td').parent('tr').remove()
        })
    })
    $('#movieTable').before('<hr>')
})
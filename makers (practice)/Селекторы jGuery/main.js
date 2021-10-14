// ! Cобытия jquery
// * on = addEventListener

// $('#btn').on('click', function () {
//     alert('BTN CLICKED')
// })

$(document).ready(function () {
    //     $('#btn').click(function () {
    //         alert('BTN CLICKED')
    //     })

    // $(window).on('mousemove', function (e) {
    //     console.log(e)
    // })

    //     $(window).mousemove(function (e) {
    //         console.log(e)
    //     })
    $('.default-btn').on('click', function () {
        $('.buttons').append('<button class="delete">Delete</button>')
    })

})


// const socket = io();

// $('#chatting').hide();


// // when text message is entered and send is clicked
// $('#send-btn').click(function(){

//     const msgText = $('#inp-msg').val();
//     // console.log(msgText);
//     socket.emit('send_msg', {
//     	msg:msgText,
//     });
//     $('#inp-msg').val('');
// })


// // receives reply from server
// socket.on('received_msg', (data) => {

//     $('#chat').append(`<li> <strong>${data.user}</strong> : ${data.msg}</li>`)
  
//     // $("#chat-box").scrollTop($("#chat-box").outerHeight());
// });



// // when login button is clicked,
// $('#login-btn').click(function(){
//     const user= $('#login-imp').val();

//     socket.emit('login' , {
//         user:user
//     });
    
//     $('#login-imp').val('');
//     $('#login').hide();
//     $('#chatting').show();
// })



const socket = io();

$('#chatting').hide();

$('#send-btn').click(function () {
    const msgText = $('#inp-msg').val();
    socket.emit('send_msg', {
        msg: msgText
    });
    $('#inp-msg').val("");
})

socket.on('received_msg', (data) => {
    $('#chat').append(`<li> <strong>${data.user}</strong> : ${data.msg}</li>`)
    $("#chat-box").scrollTop($("#chat-box").outerHeight());
});


$('#login-btn').click(function () {
    const user = $('#login-inp').val();
    
    socket.emit('login', {
        user:user
    })

    $('#login-inp').val("");
    $('#login').hide();
    $('#chatting').show();
})
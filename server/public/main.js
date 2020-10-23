var socket = io();

var btnSubmit = document.getElementById('createLobby')
var userName = document.getElementById('txt-name')
var btnTest = document.getElementById('test-chat');

var roomId = "";


btnTest.addEventListener('click', function()
{
    if (roomId == "")
    {
        console.log("You're not in a lobby.");
    }
    else
    {
        // do something
        socket.emit('player chat', 'Hello!');
    }

});

btnSubmit.addEventListener('click', function()
{
    if(userName.value === "")
    {
        window.alert('Please enter a username');
        return;
    }
    socket.emit('create lobby', {username: userName.value});
});

socket.on('connect', () => {
    console.log(socket.id);
});

socket.on('lobby created', (data) => {
    console.log(data.message);
    console.log(data.roomId);
    window.alert(data.message);
    roomId = data.roomId;
});
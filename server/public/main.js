var socket = io();

var btnSubmit = document.getElementById('createLobby')
var userName = document.getElementById('txt-name')

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
    window.alert(data.message);
});
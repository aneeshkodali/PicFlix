var socket = io('http://localhost:5000');

var btnSubmit = document.getElementById('createLobby')
var userName = document.getElementById('txt-name')
var btnTest = document.getElementById('test-chat');

var btnNetwork = document.getElementById('test-network')
var textRoomId = document.getElementById('txt-roomid')

var roomId = "";

btnNetwork.addEventListener('click', function()
{
    var room = textRoomId.value

    socket.emit('join lobby', {roomid: room});
});

btnTest.addEventListener('click', function()
{
    console.log(roomId);
    if (roomId == "")
    {
        console.log("You're not in a lobby.");
    }
    else
    {
        // do something
        socket.emit('player chat',  {message:"hello", roomid: roomId});
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
    console.log(data.roomId);
    window.alert(data.message);
    roomId = data.roomId;
});

socket.on('reply', (data) => {
    console.log("got reply", data)
});

socket.on('lobby joined', (data) => {
    roomId = data.roomId
});

socket.on('player chat', (data) => {
    window.alert(data.message);
});
const socket = io();

const $rooms = document.getElementById('rooms');

// const {
//     room
// } = Qs.parse(location.search, {
//     ignoreQueryPrefix: true
// })


socket.on('connect', () => {
    console.log('local socket connected');
    socket.emit('getRooms', (rooms) => {
        console.log('rooms:', rooms);
    })
})






socket.on('roomList', (rooms) => {
    // const html = Mustache.render(sidebarTemplate, {
    //     room,
    //     users
    // });
    // $sidebar.innerHTML = html

    console.log('rooms:', rooms);
    for (let room of rooms) {
        // const parsedRoom = JSON.parse(room);
        // console.log('prsed room', parsedRoom);

        let option = document.createElement("option");
        let optionValue = document.createTextNode(room.name);
        option.appendChild(optionValue);
        option.setAttribute("id", room.name);
        console.log('option:', option);
        $rooms.appendChild(option);
    }

})




// socket.emit('addRoom', (room) => {
//     console.log(room);
//     const newOption = `<option id=${room}>id=${room}</option>`
//     console.log(newOption);

//     $rooms.appendChild(newOption);
// });



//$rooms.appendChild(option);
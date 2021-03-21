let rooms = [];

function cleanRoomData(data) {
    const cleanData = data.trim().toLowerCase()
    return cleanData;
};

function addRoom(newUserRoom) {
    newUserRoom = cleanRoomData(newUserRoom);
    console.log('new user room:', newUserRoom);
    const existingRoom = rooms.find((room) => {
        return room.name === newUserRoom
    });

    if (existingRoom) {
        return;
    };

    rooms.push({
        name: newUserRoom,
        usersActive: 0
    });
    console.log('added room', newUserRoom);
    return newUserRoom

};

function updateRoom(userRoom) {
    const existingRoom = rooms.find((room) => {
        return room.name === userRoom
    });
    console.log('fromupdateexistingRoom', existingRoom);
    if (!existingRoom) {
        return;
    }
    existingRoom.usersActive = existingRoom.usersActive + 1;
    console.log('updated room', existingRoom);
    return existingRoom

};


const removeRoom = (userRoom) => {
    const index = rooms.findIndex((room) => {
        return room.name === userRoom
    });
    rooms[index].usersActive = rooms[index].usersActive-1
    console.log('diminished amout of acive users', rooms[index]);

    if (index !== -1 && rooms[index].usersActive === 0) {
        //return rooms.splice(index, 1)[0]
        const removedRoom = rooms.splice(index, 1);
        console.log('removed room', removedRoom);
        return removedRoom
    };

    return rooms[index];



    existingRoom.usersActive = existingRoom.usersActive + 1;



};

const getRooms = () => {
    console.log('room list:', rooms);
    return rooms
};

module.exports = {
    rooms,
    cleanRoomData,
    addRoom,
    updateRoom,
    removeRoom,
    getRooms
};
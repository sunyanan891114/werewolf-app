export const handleResponse = (response) => {
  if(response.roomNum) handleRoomInfoResponse(response.roomNum);
};

const handleRoomInfoResponse = (roomNum) => {
  console.log(`roomInfoResponse ${roomNum}`);
  return roomNum;
};

export const handleResponse = (response) => {
  return JSON.parse(response.body);
  if(response.roomNum) handleRoomInfoResponse(response.roomNum);
};

const handleRoomInfoResponse = (roomNum) => {
  console.log(`roomInfoResponse ${roomNum}`);
  return roomNum;
};

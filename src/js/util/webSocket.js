import { serverUrl } from '../config/config';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const sock = new SockJS(serverUrl);

const stompClient = Stomp.over(sock);

export const send = (endpoint, formData) => {
  let data = {};
  for(let pair of formData.entries()) {
    data[pair[0]] = pair[1];
  }

  stompClient.send(endpoint, null, JSON.stringify(data));
  stompClient.subscribe("/queue/abc", (data)=> {
    console.log(data)
  });
};

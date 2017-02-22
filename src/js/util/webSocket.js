import { serverUrl } from '../config/config';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const sock = new SockJS(serverUrl);

const stompClient = Stomp.over(sock);

export const send = (endpoint, data) => {
  if (data instanceof FormData) data = convertFormDataToObject(data);
  stompClient.send(endpoint, {}, JSON.stringify(data));
};

export const getMessage = (endpoint, callback) => {
  stompClient.subscribe(endpoint, callback(data));
};

const convertFormDataToObject = (formData) => {
  let data = {};
  for(let pair of formData.entries()) {
    data[pair[0]] = pair[1];
  }
  return data;
};

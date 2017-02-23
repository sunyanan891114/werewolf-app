import {serverUrl} from '../config/config';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

let stompClient = null;

export function connect(callback) {
  stompClient = Stomp.over(new SockJS(serverUrl));
  stompClient.connect({}, function () {
    callback();
  });
}

export const subscribe = (callback) => {
  stompClient.subscribe('/user/queue/players', callback)
};

export const send = (endpoint, data) => {
  if (data instanceof Array) data = convertFormDataToObject(data);
  stompClient.send(endpoint, {}, JSON.stringify(data));
};

const convertFormDataToObject = (formData) => {
  let data = {};
  for (let pair of formData) {
    data[pair.name] = pair.value;
  }
  return data;
};

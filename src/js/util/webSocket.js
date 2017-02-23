import {serverUrl} from '../config/config';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

let stompClient = null;

export function connect(endpoint, callback) {
  stompClient = Stomp.over(new SockJS(serverUrl));
  stompClient.connect({}, function () {
    stompClient.subscribe(endpoint, function (greeting) {
      console.log("get message from server--------------------------" + greeting);
    });

    callback();
  });
}

export const send = (endpoint, data) => {
  if (data instanceof FormData) data = convertFormDataToObject(data);
  stompClient.send(endpoint, {}, JSON.stringify(data));
};

const convertFormDataToObject = (formData) => {
  let data = {};
  for (let pair of formData.entries()) {
    data[pair[0]] = pair[1];
  }
  return data;
};

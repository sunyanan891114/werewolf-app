export const serverUrl = "http://10.201.132.92:9000/werewolf-connect";
export const baiduAudio = (message) => {
  return `http://tsn.baidu.com/text2audio?tex=${message}&lan=zh&cuid=1&ctp=1&tok=${baiduTok}`
};

const baiduTok = '25.63d2075f9b4fa41553e3962a28071ccb.315360000.1801632448.282335-9247277';

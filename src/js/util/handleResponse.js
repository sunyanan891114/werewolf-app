export default class handleResponse {
  constructor(response) {
    this.response = JSON.parse(response.body);
  }

  handleRoomNum() {
    return this.response.roomNum;
  };

  handleRole() {
    return this.response.role;
  };

  handleMessage() {
    return this.response.message;
  };

  handleDaylight() {
    return this.response.daylight;
  }

  handleSkillStatus() {
    return this.response.skillStatus;
  }

  handleVoice() {
    return this.response.voice;
  }

  handleResult() {
    return this.response.result;
  }

  handleTargetNum() {
    return this.response.targetNum;
  }

  parse() {
    return {
      roomNum: this.handleRoomNum(),
      role: this.handleRole(),
      gameProcess: this.handleMessage(),
      daylight: this.handleDaylight(),
      skillStatus: this.handleSkillStatus(),
      voice: this.handleVoice(),
      result: this.handleResult(),
      targetNum: this.handleTargetNum()
    }
  }
}

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

  handleSkill() {
    return "someSkill";
  }

  handleVoice() {
    return this.response.voice;
  }

  parse() {
    return {
      roomNum: this.handleRoomNum(),
      role: this.handleRole(),
      gameProcess: this.handleMessage(),
      daylight: this.handleDaylight(),
      skill: this.handleSkill(),
      voice: this.handleVoice()
    }
  }
}

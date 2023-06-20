this.x = 9; // 'this' refers to the global object (e.g. 'window')
const module = {
  x: 81,
  getX() {
    return this.x;
  },
};
module.getX();  // 81
const retrieveX = module.getX;
retrieveX();   //  9
const boundGetX = retrieveX.bind(module);
boundGetX();   //  81

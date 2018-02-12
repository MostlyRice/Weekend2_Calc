let historyArray = [];

function grabFinishedOperation(FinishedOperation){
  historyArray.push(FinishedOperation;)
}

function gethistory(){
  return historyArray;
}
function clearHistory() {
  historyArray = [];
  return historyArray
}
module.exports = {
  gethistory: gethistory,
  clearHistory: clearHistory
}

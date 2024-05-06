const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
  ];
  
  function superbowlWin(record) {
    const winningRecord = record.find(game => game.result === "W");
    return winningRecord ? winningRecord.year : undefined;
  }
  

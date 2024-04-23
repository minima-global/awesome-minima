MDS.load("ministats.js")

MDS.init(function (msg) {
  if (msg.event == "inited") {
    createMetricsTable(function () {
      MDS.log("Metrics table created")
    })
  } else if (msg.event == "NEWBLOCK") {
    saveNewBlock(msg)
    MDS.log("New block event saved to metrics table")
  }
})

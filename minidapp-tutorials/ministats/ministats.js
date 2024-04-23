// Description: This function is used to save block metrics to a database
function saveNewBlock(msg) {
  // Get block number from message response from NEWBLOCK event
  const blockNumber = parseInt(msg.data.txpow.header.block)
  // Check if block is already saved
  isBlockSaved(blockNumber, function (saved) {
    // If block is not saved, build metric row and save it to the DB
    if (!saved) {
      buildMetricRow(blockNumber)
    }
  })
}

// Description: This function is used to create a metrics table in the database
function createMetricsTable(callback) {
  // SQL query to create metrics table
  var initsql =
    "CREATE TABLE IF NOT EXISTS `metrics` ( " +
    "  `id` bigint auto_increment, " +
    "  `blockTime` varchar(160) NOT NULL, " +
    "  `blockHash` varchar(160) NOT NULL, " +
    "  `blockDifficulty` varchar(160) NOT NULL, " +
    "  `blockNumber` int NOT NULL, " +
    "  `blockSpeed` float NOT NULL, " +
    "  `chainWeight` varchar(160) NOT NULL, " +
    "  `cascadeWeight` varchar(160) NOT NULL " +
    " )"

  // Call SQL from MDS API  to create metrics table in the database
  MDS.sql(initsql, function (res) {
    MDS.log("Creating metrics table")
    if (!res.status) {
      MDS.log("Error creating metrics table " + res.message)
    }
    if (callback) {
      callback(res)
    }
  })
}

// Description: This function is used to build a metric row for a block
function buildMetricRow(blockNumber) {
  // Call MDS API to get status of node
  MDS.cmd("status", function (msg) {
    // Get response from message
    const response = msg.response.chain
    // Build metric object with block metrics
    const metric = {
      time: response.time,
      blockSpeed: response.speed,
      chainweight: response.weight,
      difficulty: response.difficulty,
      cascadeWeight: response.cascade.weight,
      blockNumber: blockNumber,
      blockHash: response.hash,
    }
    // Store metric in the database
    storeMetric(metric)
  })
}

// Description: This function is used to store a metric in the database
function storeMetric(metric) {
  const MAX_ROWS_IN_TABLE = 4320 // 4k rows is about 1 day (at 20s per block)

  // SQL query to insert metric into metrics table
  const INSERT =
    "INSERT INTO metrics (blockTime, blockHash, cascadeWeight, blockSpeed, chainWeight, blockDifficulty, blockNumber) VALUES ("
  const SQL =
    INSERT +
    "'" +
    metric.time +
    "', " +
    "'" +
    metric.blockHash +
    "', " +
    metric.cascadeWeight +
    ", " +
    metric.blockSpeed +
    ", " +
    "'" +
    metric.chainweight +
    "'," +
    "'" +
    metric.difficulty +
    "'," +
    metric.blockNumber +
    ")"

  // Call MDS API to insert metric into metrics table
  MDS.sql(SQL, function (res) {
    if (res.status == true) {
      MDS.log("metric row added success")
    } else {
      MDS.log("metric row added failed")
    }
  })

  // Call MDS API to clip metrics table to a certain number of rows
  MDS.sql(clipMetricsTable(MAX_ROWS_IN_TABLE), function (res) {
    if (res.status == true) {
    }
  })
}

// Description: This function is used to clip the metrics table to a certain number of rows
function clipMetricsTable(numberOfRowsToKeep) {
  return (
    "DELETE FROM METRICS " +
    "WHERE id NOT IN (" +
    "SELECT id " +
    "FROM METRICS " +
    "ORDER BY blockNumber DESC " +
    "LIMIT " +
    numberOfRowsToKeep +
    ")"
  )
}

// Description: This function is used to delete the metrics table
function deleteTable() {
  const DELETE = "DROP TABLE metrics"
  MDS.sql(DELETE, function (res) {
    if (res.status == true) {
      MDS.log("table deleted")
    } else {
      MDS.log("table delete failed")
    }
  })
}

// Description: This function is used to check if a block is already saved in the database
function isBlockSaved(blockNumber, callback) {
  const SELECT = "SELECT * FROM metrics WHERE blockNumber = " + blockNumber
  MDS.sql(SELECT, function (res) {
    if (res.status == true) {
      if (res.rows.length > 0) {
        callback(true)
      } else {
        callback(false)
      }
    }
  })
}

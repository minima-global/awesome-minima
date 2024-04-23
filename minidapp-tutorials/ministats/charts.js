function displayCharts(callback) {
  // Select previous 10 blocks query
  const SELECT = "SELECT * FROM metrics ORDER BY blockNumber DESC LIMIT 10"

  // Select previous 10 blocks from DB
  MDS.sql(SELECT, function (res) {
    if (res.status == true) {
      // Get rows from response
      const rows = res.rows
      // Initialize total speed, xdata, and ydata
      let totalSpeed = 0
      let xdata = []
      let ydata = []

      // Iterate through rows
      rows.forEach((row) => {
        // Add block speed to total speed
        totalSpeed += parseFloat(row.BLOCKSPEED)

        // Push time and speed to respective arrays for chart
        xdata.push(row.BLOCKNUMBER)

        // Get the blockspeed by dividing 1 by BLOCKSPEED
        ydata.push(parseFloat(1 / row.BLOCKSPEED))
      })

      // Calculate average speed
      const averageSpeed = totalSpeed / rows.length

      // Check if there are at least 10 rows
      if (rows.length >= 10) {
        // Update previous ten blocks average speed
        document.getElementById("previous-ten").innerText =
          (1 / averageSpeed).toFixed(1) + " s/block"

        // Create chart for block speed
        new Chart("myChart", {
          type: "line",
          data: {
            labels: xdata.reverse(),
            datasets: [
              {
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: ydata.reverse(),
              },
            ],
          },
          options: {
            legend: { display: false },
            scales: {
              yAxes: [
                {
                  ticks: {
                    // Display 1/BLOCKSPEED for better visualization
                    callback: function (value) {
                      return value.toFixed(1) + " s/block"
                    },
                  },
                },
              ],
            },
          },
        })
        // If there are less than 10 rows
      } else {
        // Display N/A for previous ten blocks average speed
        document.getElementById("previous-ten").innerText =
          "N/A (less than 10 blocks)"
        // Hide chart
        document.getElementById("myChart").style.display = "none"
      }
    }
  })

  // Select previous 100 blocks query
  const SELECT100 = "SELECT * FROM metrics ORDER BY blockNumber DESC LIMIT 100"

  // Select previous 100 blocks from DB
  MDS.sql(SELECT100, function (res) {
    if (res.status == true) {
      // Get rows from response
      const rows = res.rows
      // Initialize total speed, xdata, and ydata
      let totalSpeed = 0
      let xdata = []
      let ydata = []

      // Iterate through rows
      rows.forEach((row) => {
        // Add block speed to total speed
        totalSpeed += parseFloat(row.BLOCKSPEED)

        // Push time and speed to respective arrays for chart
        xdata.push(row.BLOCKNUMBER)

        // Get the blockspeed by dividing 1 by BLOCKSPEED
        ydata.push(parseFloat(1 / row.BLOCKSPEED))
      })

      // Calculate average speed
      const averageSpeed = totalSpeed / rows.length

      // Check if there are at least 10 rows
      if (rows.length >= 100) {
        // Update previous ten blocks average speed
        document.getElementById("previous-ten").innerText =
          (1 / averageSpeed).toFixed(1) + " s/block"

        // Create chart for block speed
        new Chart("myChart2", {
          type: "line",
          data: {
            labels: xdata.reverse(),
            datasets: [
              {
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: ydata.reverse(),
              },
            ],
          },
          options: {
            legend: { display: false },
            scales: {
              yAxes: [
                {
                  ticks: {
                    // Display 1/BLOCKSPEED for better visualization
                    callback: function (value) {
                      return value.toFixed(1) + " s/block"
                    },
                  },
                },
              ],
            },
          },
        })
        // If there are less than 10 rows
      } else {
        // Display N/A for previous ten blocks average speed
        document.getElementById("previous-hundred").innerText =
          "N/A (less than 10 blocks)"
        // Hide chart
        document.getElementById("myChart2").style.display = "none"
      }
    }
  })

  // Select previous 1000 blocks query
  const SELECT1000 =
    "SELECT * FROM metrics ORDER BY blockNumber DESC LIMIT 1000"

  // Select previous 1000 blocks from DB
  MDS.sql(SELECT1000, function (res) {
    if (res.status == true) {
      // Get rows from response
      const rows = res.rows

      // Initialize total speed, xdata, ydata
      let totalSpeed = 0
      let xdata = []
      let ydata = []

      // Iterate through rows
      rows.forEach((row) => {
        // Add block speed to total speed
        totalSpeed += parseFloat(row.BLOCKSPEED)

        // Push time and speed to respective arrays for chart
        xdata.push(row.BLOCKNUMBER)

        // Get the blockspeed by dividing 1 by BLOCKSPEED
        ydata.push(parseFloat(1 / row.BLOCKSPEED))
      })

      // Calculate average speed
      const averageSpeed = totalSpeed / rows.length

      // Check if there are at least 100 rows
      if (rows.length >= 1000) {
        // Update previous 100 blocks average speed
        document.getElementById("previous-thousand").innerText =
          (1 / averageSpeed).toFixed(1) + " s/block"

        // Create chart for block speed
        new Chart("myChart3", {
          type: "line",
          data: {
            labels: xdata.reverse(),
            datasets: [
              {
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: ydata.reverse(),
              },
            ],
          },
          options: {
            legend: { display: false },
            scales: {
              yAxes: [
                {
                  ticks: {
                    // display 1/BLOCKSPEED for better visualization
                    callback: function (value) {
                      return value.toFixed(1) + " s/block"
                    },
                  },
                },
              ],
            },
          },
        })
      } else {
        // Display N/A for previous ten blocks average speed
        document.getElementById("previous-thousand").innerText =
          "N/A (less than 1000 blocks)"

        // Hide chart
        document.getElementById("myChart3").style.display = "none"
      }
    }
  })
}

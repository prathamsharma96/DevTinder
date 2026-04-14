const express = require("express");
const app = express();

app.delete("/hello", (req, res) => {
  res.send("data updated successfully");
});
app.put("/hello", (req, res) => {
  res.send("put request received");
});
app.use("/user", (req, res) => {
  res.send(req.query);
});

//this is a new route for saying goodbye it will run even when route is /goodbyehello
// app.use("/goodbye", (req, res) => {
//   res.send("Goodbye World");
// });
//  app.use("/", (req, res) => {
//   res.send("thils is the default route");
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const express = require("express");
const app = express();
const path = require("path");
const Razorpay = require("razorpay");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: "rzp_test_NJRQ7mstGJ8A8J",
  key_secret: "ShJKDYCKXN8kHD6305dovOjU",
});

app.get("/logo.svg", (req, res) => {
  res.sendFile(path.join(__dirname, "logo.svg"));
});

// app.post("/verification", (req, res) => {
//   // do a validation
//   const secret = "12345678";

//   console.log(req.body);

//   const crypto = require("crypto");

//   const shasum = crypto.createHmac("sha256", secret);
//   shasum.update(JSON.stringify(req.body));
//   const digest = shasum.digest("hex");

//   console.log(digest, req.headers["x-razorpay-signature"]);

//   if (digest === req.headers["x-razorpay-signature"]) {
//     console.log("request is legit");
//     // process it
//     require("fs").writeFileSync(
//       "payment1.json",
//       JSON.stringify(req.body, null, 4)
//     );
//   } else {
//     // pass it
//   }
//   res.json({ status: "ok" });
// });

app.post("/razorpay", async (req, res) => {
  console.log(req.body, "res");
  const options = req.body;

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(1337, () => {
  console.log("Listening on 1337");
});

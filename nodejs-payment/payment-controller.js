const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_NJRQ7mstGJ8A8J",
  key_secret: "ShJKDYCKXN8kHD6305dovOjU",
});

exports.createOrder = async (req, res) => {
  const options = req.body;
  try {
    const response = await razorpay.orders.create(options);
    console.log(response, "response");
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.paymentCallback = async (req, res) => {};

exports.getLogo = async (req, res) => {};

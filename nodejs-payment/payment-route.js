const express = require("express");
const router = express.Router();

const { createOrder } = require("./payment-controller");
const { paymentCallback } = require("./payment-controller");

router.get("/createorder", createOrder);
router.post("/payment/callback", paymentCallback);

module.exports = router;

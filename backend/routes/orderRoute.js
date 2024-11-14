import express from "express";
import { listOrders, placeOrder, updateOrder, userOrder, verifyOrder } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorder", authMiddleware, userOrder);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateOrder)

export default orderRouter;
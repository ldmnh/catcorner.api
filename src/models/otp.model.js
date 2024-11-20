import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true 
  },
  otp: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    expires: 300 // OTP hết hạn sau 5 phút
  }
});

const OTP = mongoose.model("OTP", otpSchema);
export default OTP; 
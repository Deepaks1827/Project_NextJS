import { resend } from "../lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "../types/ApiResponse";

export async function emailVerificationOtp(
    email:string,
    username:string,
    verifyCode:string,

): Promise<ApiResponse>{
    try {
        await resend.emails.send({
          from:'you@example.com',
          to:email,
          subject:'Message Mystry | Verification Code',
            react: VerificationEmail({username,otp:verifyCode}),
        });
        return {success:true,message:'Verification email send successfully'}
    } catch (emailError) {
        console.error("Error sending verification email",emailError)
        return {success: false, message:"failed to send verification email"}
        
    }

}
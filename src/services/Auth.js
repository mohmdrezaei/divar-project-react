import api from "../configs/api"

const sendOtp =async (mobile)=>{
    try {
        const response = await api.post("auth/hnvsend-otp" , {mobile})
        return {response}
    } catch (error) {
      return {error}
    }
}

export {sendOtp}
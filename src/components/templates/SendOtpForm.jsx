import { sendOtp } from "../../services/Auth";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);
    if (response) setStep(2);
    if(error) console.log(error.response.data.message)
      console.log({response,error})
  };
  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استقاده از امکانات دیوار ، لطفا شمارهموبایل خود را وارد کنید. کد
        تایید به این شماره ارسال خواهد شد
      </span>
      <label htmlFor="input">شماره موبایل خود راوارد کنید</label>
      <input
        type="text"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;



import axios from 'axios';
axios.defaults.headers.common = {
    "Content-Type": "application/json",
};
export const verifyCaptcha = async (token:string | null) => {
  const secretKey = "6Ldk2fsqAAAAAAWUVG7AIdB1cV2Ovfo3gEqbFuTG"; // Replace with your reCAPTCHA secret key
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify`,
    null,
    {
      params: {
        secret: secretKey,
        response: token,
      },
    }
  );

  return response.data.success;
};
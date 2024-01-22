import { Paths } from "@/constants/paths";
import { ERRORS } from "@/constants";
import { client } from "./client";

export type RecaptchaResponse = {
  success: boolean;
};

type VerifyRecaptchaParams = {
  token?: string;
};

export const verifyRecaptcha = async ({
  token
}: VerifyRecaptchaParams): Promise<RecaptchaResponse> => {
  try {
    const { data } = await client.post(Paths.recaptchas, {
      token
    });
    return data;
  } catch (error) {
    throw new Error(ERRORS.RECAPTCHA_VERIFICATION);
  }
};

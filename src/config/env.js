import {DEV_API_URL, PROD_API_URL} from '@env';

const devEnvVariables = {
  BACKEND_URL: DEV_API_URL,
};

const prodEnvVariables = {
  BACKEND_URL: PROD_API_URL,
};

export default __DEV__ ? devEnvVariables : prodEnvVariables;

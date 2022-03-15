import {DEV_API_URL, PROD_API_URL} from '@env';

const devEnvVariables = {
  DEV_API_URL,
};

const prodEnvVariables = {
  PROD_API_URL,
};

export default __DEV__ ? devEnvVariables : prodEnvVariables;

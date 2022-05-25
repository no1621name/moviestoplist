function setParams(config) {
  const params = config.params || {};
  // eslint-disable-next-line
  config.params = Object.assign(params, {
    apikey: process.env.VUE_APP_API_KEY,
    plot: 'full',
  });
  return config;
}

function returnData(response) {
  return response.data;
}

function initAxios(axios) {
  axios.interceptors.request.use(setParams);
  axios.interceptors.response.use(returnData);
}

export default initAxios;

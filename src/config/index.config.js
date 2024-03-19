// configuration and export of environment variables.
// Note that vite uses a special way of fetching environment variables.
// For more information here: https://vitejs.dev/guide/env-and-mode

const config = {
  env: {
    base_url_server: import.meta.env.VITE_BASE_URL_SERVER,
  },
};

export default config;

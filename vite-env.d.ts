/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENDPOINT_BASE_URL: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

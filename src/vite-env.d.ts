/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />

export default {};

interface ImportMetaEnv {
  readonly VITE_APP_PORT?: string;
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_API_TIME_OUT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

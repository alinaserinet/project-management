/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />

export default {};

interface ImportMetaEnv {
  readonly VITE_APP_PORT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

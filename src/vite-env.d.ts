/// <reference types="vite/client" />
export default {};
interface ImportMetaEnv {
  readonly VITE_APP_PORT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

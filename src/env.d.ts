interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_ESIA_API_URL: string
    readonly VITE_ESIA_CLIENT_SECRET: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
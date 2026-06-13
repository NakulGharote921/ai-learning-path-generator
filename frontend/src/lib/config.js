export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''
export const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || ''

// Public assets (no Vite source-path hardcoding)
export const DEFAULT_AVATAR = '/default-avatar.png'

export default {
  API_BASE_URL,
  IMAGE_BASE_URL,
  DEFAULT_AVATAR,
}


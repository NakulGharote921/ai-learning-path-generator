import axios from 'axios'
import config from '../lib/config'
import { firebaseAuth } from '../lib/firebase'

const api = axios.create({
  baseURL: config.API_BASE_URL || '',
  timeout: 10000,
})

api.interceptors.request.use(async (req) => {
  try {
    let token = null

    const currentUser = firebaseAuth?.currentUser
    const uid = currentUser?.uid

    console.log('Authenticated UID:', uid)

    // Only attempt to fetch an ID token when auth is fully ready and uid is valid.
    if (firebaseAuth && currentUser && uid && uid.trim()) {
      token = await currentUser.getIdToken()
    }

    // Fallback to test token in development
    if (!token && import.meta.env.DEV) {
      const stored = localStorage.getItem('test_user_id')
      const safeStored = stored && stored.trim() ? stored.trim() : null
      const testUserId = safeStored || 'dev-user-' + Math.random().toString(36).substr(2, 9)
      localStorage.setItem('test_user_id', testUserId)
      token = `test-uid-${testUserId}`
    }

    if (token) {
      if (!req.headers) req.headers = {}
      req.headers.Authorization = `Bearer ${token}`
    }
  } catch (e) {
    // ignore token errors and let backend handle unauthenticated
  }
  return req
})


export async function getDashboard() {
  const res = await api.get('/api/v1/user/dashboard')
  return res.data
}


export async function getAchievements() {
  const res = await api.get('/api/v1/achievements/')
  return res.data
}


export async function getRecommendations() {
  const res = await api.get('/api/v1/dashboard/recommendations')
  return res.data
}

export async function getLearningPath() {
  const res = await api.get('/api/v1/dashboard/learning-path')
  return res.data
}

export async function getProjects() {
  const res = await api.get('/api/v1/dashboard/projects')
  return res.data
}

export default api

import { API_BASE_URL } from './config'

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || `Request failed with status ${response.status}`)
  }

  return response.json()
}

export function getHealth() {
  return request('/api/v1/system/health')
}

export function getRecommendedResources({ skillLevel, goal, moduleTitle } = {}) {
  const params = new URLSearchParams()

  if (skillLevel) params.set('skill_level', skillLevel)
  if (goal) params.set('goal', goal)
  if (moduleTitle) params.set('module_title', moduleTitle)

  const query = params.toString()
  return request(`/api/v1/resources/recommend${query ? `?${query}` : ''}`)
}

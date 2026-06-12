import { useEffect, useState } from 'react'
import { getHealth } from '../lib/api'

export default function BackendStatus() {
  const [status, setStatus] = useState('checking')
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    getHealth()
      .then((data) => {
        if (!isMounted) return
        setStatus(data?.status || 'unknown')
      })
      .catch((err) => {
        if (!isMounted) return
        setStatus('offline')
        setError(err.message)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/30 bg-white/70 p-5 shadow-lg backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Backend Connection</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">API status: {status}</h3>
      <p className="mt-1 text-sm text-slate-600">
        {error ? `Unable to reach the backend. ${error}` : 'Frontend is now wired to the FastAPI server.'}
      </p>
    </section>
  )
}

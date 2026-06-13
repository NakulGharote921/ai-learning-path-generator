import React from 'react'

export default function DashboardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 w-48 bg-surface-dim rounded mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="h-40 bg-surface-dim rounded" />
        <div className="h-40 bg-surface-dim rounded" />
        <div className="h-40 bg-surface-dim rounded" />
      </div>
      <div className="h-64 bg-surface-dim rounded mt-6" />
    </div>
  )
}

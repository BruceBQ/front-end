import React from 'react'

export default function LoadingSpinner({ player, className }) {
  if (player.error) {
    return null
  }
  return <div className="loader" />
}

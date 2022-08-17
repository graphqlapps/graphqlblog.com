import React from 'react'

export function Video({ src }) {
  return (
    <iframe
      width="100%"
      height="315"
      src={src}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  )
}

import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0B0F14',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#4DA6FF',
          fontFamily: 'Inter',
          fontWeight: 'bold',
        }}
      >
        M
      </div>
    ),
    {
      ...size,
    }
  )
}

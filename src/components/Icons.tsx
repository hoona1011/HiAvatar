interface iconProps {
  bgColor?: string
  fontColor?: string
  borderColor?: string
  fillColor?: string
  width: string
  height: string
}

export const PlayIcon = ({
  bgColor = '#858585',
  borderColor = 'white',
  fillColor = 'white',
  width,
  height
}: iconProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='20.5' cy='20' r='20' fill={bgColor} fill-opacity='0.5' />
    <path
      d='M17.5215 15.3193V25.5321L26.0321 20.4257L17.5215 15.3193Z'
      fill={borderColor}
    />
    <path
      d='M17.5215 15.3193L17.9074 14.6762C17.6757 14.5372 17.3871 14.5336 17.152 14.6667C16.9168 14.7998 16.7715 15.0491 16.7715 15.3193H17.5215ZM17.5215 25.5321H16.7715C16.7715 25.8023 16.9168 26.0516 17.152 26.1848C17.3871 26.3179 17.6757 26.3142 17.9074 26.1752L17.5215 25.5321ZM26.0321 20.4257L26.418 21.0688C26.6439 20.9333 26.7821 20.6892 26.7821 20.4257C26.7821 20.1623 26.6439 19.9181 26.418 19.7826L26.0321 20.4257ZM18.2715 25.5321V15.3193H16.7715V25.5321H18.2715ZM25.6463 19.7826L17.1356 24.889L17.9074 26.1752L26.418 21.0688L25.6463 19.7826ZM17.1356 15.9625L25.6463 21.0688L26.418 19.7826L17.9074 14.6762L17.1356 15.9625Z'
      fill={fillColor}
    />
  </svg>
)

export const StopIcon = ({
  bgColor = '#858585',
  borderColor = 'white',
  fillColor = 'white',
  width,
  height
}: iconProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='20.5' cy='20' r='20' fill={bgColor} fill-opacity='0.5' />
    <path
      d='M15.8193 15.3193V14.5693C15.4051 14.5693 15.0693 14.9051 15.0693 15.3193H15.8193ZM26.0321 15.3193H26.7821C26.7821 14.9051 26.4463 14.5693 26.0321 14.5693V15.3193ZM26.0321 25.5321V26.2821C26.4463 26.2821 26.7821 25.9463 26.7821 25.5321H26.0321ZM15.8193 25.5321H15.0693C15.0693 25.9463 15.4051 26.2821 15.8193 26.2821V25.5321ZM15.8193 16.0693H26.0321V14.5693H15.8193V16.0693ZM25.2821 15.3193V25.5321H26.7821V15.3193H25.2821ZM26.0321 24.7821H15.8193V26.2821H26.0321V24.7821ZM16.5693 25.5321V15.3193H15.0693V25.5321H16.5693Z'
      fill={borderColor}
    />
    <rect
      x='15.9097'
      y='15.6084'
      width='10.1454'
      height='9.36502'
      fill={fillColor}
    />
  </svg>
)

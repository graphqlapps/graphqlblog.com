function LogomarkPaths() {
  return (
    <g fill="none" stroke="#38BDF8" strokeLinejoin="round" strokeWidth={3}>
      <path d="M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z" />
      <path d="M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z" />
    </g>
  )
}

export function Logomark(props) {
  return (
    <svg
      width={40}
      height={40}
      className={`${props.className}`}
      viewBox="0 0 358 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="36.1279"
        y1="274.875"
        x2="36.1279"
        y2="115.897"
        stroke="currentColor"
        strokeWidth="18"
      />
      <line
        x1="36.5254"
        y1="117.848"
        x2="174.204"
        y2="38.3595"
        stroke="currentColor"
        strokeWidth="18"
      />
      <line
        y1="-9"
        x2="158.978"
        y2="-9"
        transform="matrix(-0.866025 -0.5 -0.5 0.866025 319.217 128.72)"
        stroke="currentColor"
        strokeWidth="18"
      />
      <line
        x1="180.115"
        y1="364.003"
        x2="317.794"
        y2="284.514"
        stroke="currentColor"
        strokeWidth="18"
      />
      <line
        y1="-9"
        x2="158.978"
        y2="-9"
        transform="matrix(-0.866025 -0.5 -0.5 0.866025 175.627 374.873)"
        stroke="currentColor"
        strokeWidth="18"
      />
      <line
        x1="322.282"
        y1="274.875"
        x2="322.282"
        y2="115.897"
        stroke="currentColor"
        strokeWidth="18"
      />
      <ellipse
        cx="178.462"
        cy="35.8974"
        rx="35.8974"
        ry="35.8974"
        fill="currentColor"
      />
      <ellipse
        cx="178.462"
        cy="364.103"
        rx="35.8974"
        ry="35.8974"
        fill="currentColor"
      />
      <ellipse
        cx="322.052"
        cy="117.949"
        rx="35.8974"
        ry="35.8974"
        fill="currentColor"
      />
      <ellipse
        cx="322.052"
        cy="283.077"
        rx="35.8974"
        ry="35.8974"
        fill="currentColor"
      />
      <ellipse
        cx="35.8974"
        cy="283.077"
        rx="35.8974"
        ry="35.8974"
        fill="currentColor"
      />
      <ellipse
        cx="35.8974"
        cy="117.949"
        rx="35.8974"
        ry="35.8974"
        fill="currentColor"
      />
      <path
        d="M153.188 199.923H204.47M153.188 234.111H204.47M221.564 276.846H136.094C131.56 276.846 127.212 275.045 124.007 271.839C120.801 268.634 119 264.286 119 259.752V140.094C119 135.56 120.801 131.212 124.007 128.007C127.212 124.801 131.56 123 136.094 123H183.838C186.104 123 188.278 123.901 189.88 125.504L236.154 171.778C237.757 173.38 238.658 175.554 238.658 177.821V259.752C238.658 264.286 236.857 268.634 233.651 271.839C230.446 275.045 226.098 276.846 221.564 276.846Z"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Logo(props) {
  return (
    <div className="flex w-fit items-center gap-4 text-sky-500">
      <Logomark />
      <span className="text-2xl font-medium text-black dark:text-white">
        graphqlblog
      </span>
    </div>
  )
}

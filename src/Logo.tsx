import * as React from "react"

interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement>{}

function SvgComponent(props: LogoProps) {
  return (
    <svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M98.458 98.449c8.055-8.055-2.63-31.798-23.865-53.033-21.235-21.235-44.978-31.92-53.033-23.865-8.054 8.055 2.63 31.798 23.865 53.033C66.66 95.82 90.403 106.504 98.458 98.45z"
        stroke="#21BFAC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74.593 74.584c21.235-21.235 31.92-44.978 23.865-53.033-8.055-8.054-31.798 2.63-53.033 23.865C24.19 66.65 13.505 90.394 21.56 98.449c8.055 8.054 31.798-2.63 53.033-23.865z"
        stroke="#21BFAC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 65.625a5.625 5.625 0 100-11.25 5.625 5.625 0 000 11.25z"
        fill="#21BFAC"
      />
    </svg>
  )
}

export default SvgComponent

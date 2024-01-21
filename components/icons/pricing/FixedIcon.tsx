function TeamIcon({ ...props }) {
  return (
    <svg
      width="70"
      height="70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        opacity=".3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.333 8.75v1.458a4.375 4.375 0 004.375 4.375h14.584a4.375 4.375 0 004.374-4.375V8.75H52.5a5.833 5.833 0 015.833 5.833V61.25a5.833 5.833 0 01-5.833 5.833h-35a5.833 5.833 0 01-5.834-5.833V14.583A5.833 5.833 0 0117.5 8.75h5.833z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.083 5.833a2.917 2.917 0 015.834 0h4.375c.805 0 1.458.653 1.458 1.458v2.917c0 .806-.653 1.458-1.458 1.458H27.708a1.458 1.458 0 01-1.458-1.458V7.291c0-.805.653-1.458 1.458-1.458h4.375z"
        fill="currentColor"
      />
      <path
        opacity=".3"
        d="M46.666 26.25H32.084a2.917 2.917 0 100 5.833h14.584a2.917 2.917 0 100-5.833zM26.25 29.167a2.917 2.917 0 10-5.833 0 2.917 2.917 0 005.833 0zm0 11.666a2.917 2.917 0 10-5.833 0 2.917 2.917 0 005.833 0zm20.416-2.917H32.084a2.917 2.917 0 100 5.834h14.584a2.917 2.917 0 100-5.834zM26.25 52.5a2.917 2.917 0 10-5.833 0 2.917 2.917 0 005.833 0zm20.416-2.916H32.084a2.917 2.917 0 100 5.833h14.584a2.917 2.917 0 100-5.834z"
        fill="currentColor"
      />
    </svg>
  );
}

export default TeamIcon;
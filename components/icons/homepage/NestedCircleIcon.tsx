function NestedCircleIcon({ ...props }) {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle
        cx="22.5"
        cy="22.5"
        r="22.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <circle cx="22.5" cy="22.5" r="4" fill="currentColor" />
    </svg>
  );
}

export default NestedCircleIcon;

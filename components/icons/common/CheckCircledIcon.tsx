function CheckCircledIcon({ ...props }) {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        opacity=".3"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill="currentColor"
      />
      <path
        d="M16.769 7.818a1 1 0 111.462 1.364l-7 7.5a1 1 0 01-1.382.077l-3.5-3a1 1 0 011.302-1.518l2.772 2.376 6.346-6.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default CheckCircledIcon;

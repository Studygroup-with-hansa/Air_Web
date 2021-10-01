const Crown = (props: { props: string }): JSX.Element => {
  return (
    <svg
      style={{
        margin: "-33px 0px 0 -11px",
      }}
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.7915 0.838135L4.39853 4.0714L7.58595 3.25726L8.19298 6.49053L11.3804 5.67638L8.1549 10.7356L0.566004 5.8974L3.7915 0.838135Z"
        fill={props.props}
      />
    </svg>
  );
};

export default Crown;

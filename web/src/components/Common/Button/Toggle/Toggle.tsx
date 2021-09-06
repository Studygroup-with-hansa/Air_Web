import "./Toggle.scss";

const Toggle = (): JSX.Element => {
  return (
    <label className="toggle">
      <input type="checkbox" />
      <span className="toggle-slider round" />
    </label>
  );
};

export default Toggle;

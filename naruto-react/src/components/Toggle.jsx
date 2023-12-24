const Toggle = () => {
  return (
    <div>
      <h1 className="chars">Characters</h1>
      {/* Toggle Button Start */}
      <div className="toggle-switch">
        <span className="toggle-label">Heroes</span>
        <label className="toggle-button" htmlFor="toggle-input">
          <input type="checkbox" className="toggle-input" id="toggle-input" />
          <input type="button" value="" />
          <div className="toggle-slider" id="toggle-slider"></div>
        </label>
        <span className="toggle-label">Villains</span>
      </div>
    </div>
  );
};

export default Toggle;

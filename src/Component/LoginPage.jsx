export function LoginPage() {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="login">
      <h1 className="text-center ">Welcome to App ClockIn and ClockOut Page</h1>
      <h2 className="text-center">Sign In in to App</h2>
      <form action="" style={style}>
        <InputUsername
          value={"exemple@exemple.com"}
          onChange={() => null}
          label={"username"}
        />
        <br />
        <InputPassWord
          value=""
          onSumit={(e) => e.target.value}
          label="PassWord"
        />
        <br />
        <button type="button">Sign In</button>
      </form>
    </div>
  );
}

function InputUsername({ value, onChange, label }) {
  return (
    <>
      <label htmlFor="userName">{label}</label>
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

function InputPassWord({ value, onChange, label }) {
  return (
    <>
      <label htmlFor="userName">{label}</label>
      <input
        className="form-control"
        type="password"
        value={value}
        onChange={() => onChange(null)}
      />
    </>
  );
}

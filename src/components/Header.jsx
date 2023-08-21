function Header({ lastName, firstName }) {
  return (
    <>
      <h1 className="underline text-red-500">
        Hellow {lastName} {firstName}
      </h1>
    </>
  );
}

export default Header;

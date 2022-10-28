import Products from './components/Products';

function App() {
  const login = {
    loggedInAsAdmin: true,
    msg: "You're logged in as Admin",
  };
  return (
    <>
      {console.log(login.msg)}
      {login.loggedInAsAdmin ? (
        <>
          <Products />
          <Products />
        </>
      ) : (
        <p>You're unverified!</p>
      )}
    </>
  );
}

export default App;

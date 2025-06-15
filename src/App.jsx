import "./App.css";

function App() {
  return (
    <>
      <div class="container font-roboto-400">
        <div class="image-container">
          <img src="/illustration-sign-up-mobile.svg"></img>
        </div>
        <div class="main-area">
          <div>
            <h1 class="font-roboto-700">Stay Updated!</h1>
          </div>
          <div class="first-text">
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
          </div>
          <div class="list-container">
            <ul class="list">
              <li>
                <p>Product discovery and building what matters</p>
              </li>
              <li>
                <p>Meassuring to ensure updates are a success</p>
              </li>
              <li>
                <p>And much more!</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="register">
          <form class="form">
            <label class="label font-roboto-700" for="email">
              Email address
            </label>
            <input
              class="input-email"
              type="email"
              id="email"
              name="email"
              placeholder="email@company.com"
            ></input>
            <input
              class="submit"
              type="submit"
              value="Subcribe for monthly newsletter"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

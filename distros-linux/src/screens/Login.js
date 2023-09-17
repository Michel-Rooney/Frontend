import '../css/Authentication.css';

function Login () {
  return (
    <main class="main">
      <div class="centralize-row">
        <h1 class="title">Login</h1>
      </div>
      <div class="container">
        <div class="auth-container-form" style={{ flexWrap: 'wrap-reverse' }}>
          <form class="auth-form">
            <h2 class="auth-form-text">Welcome</h2>
            <input class="auth-form-input" type="email" placeholder="Email..." />
            <input class="auth-form-input" type="password" placeholder="Password..." />
            <button class="auth-form-submit" type="submit">Login</button>
          </form>
          <div class="auth-image">
            <i class="bi bi-person-fill"></i>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login

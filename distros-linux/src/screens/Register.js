import '../css/Global.css';
import '../css/Authentication.css';

function Register () {
  return (
    <main class="main">
      <div class="centralize-row">
        <h1 class="title">Register</h1>
      </div>
      <div class="container">
        <div class="auth-container-form">
          <div class="auth-image">
            <i class="bi bi-person-fill-add"></i>
          </div>
          <form class="auth-form">
            <h2 class="auth-form-text">Start Here</h2>
            <input class="auth-form-input" type="text" placeholder="Username..." />
            <input class="auth-form-input" type="email" placeholder="Email..." />
            <input class="auth-form-input" type="password" placeholder="Password..." />
            <input class="auth-form-input" type="password" placeholder="Confirm Password..." />
            <button class="auth-form-submit" type="submit">Send</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Register

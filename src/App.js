import logo from './logo.svg';
import icon from './right-arrow.png';
import block1img from './block1-image.png';
import Mark from './Mark.png';
import menu from './menu.png';
import './App.css';

function App() {
  return (
    <div class="container">
      <div class="block-1">
        <img src={Mark} class="mark" />
        <img src={menu} class="mobile-menu-icon" />
        <ul class="menu-left">
          <li class="menu-left-item">Product</li>
          <li class="menu-left-item">Features</li>
          <li class="menu-left-item">Marketplace</li>
          <li class="menu-left-item">Company</li>
          <li class="menu-right-item menu-free-trial">Start free trial</li>
          <li class="menu-right-item">Login</li>
        </ul>
        <div class="block-1-careers">
          <div class="block1-careers-hiring">
            <div class="block1-careers-hiring-text">WE'RE HIRING</div>
          </div>
          <div class="block1-careers-visit-text">Visit our careers page</div>
          <img src={icon} class="block1-careers-icon" />
        </div>
        <div class="block1-ship-desc-1">
          <p>A better way to <span class="ship">ship web apps</span></p>
        </div>
        <div class="block1-ship-desc-2">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irire qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </div>
        <div class="email-search">
          <div class="email-text">Enter your email</div>
        </div>
        <div class="free-trial">
          <div class="free-trial-text">Start free trial</div>
        </div>
        <div class="free-trial-start-text">
          <p>Start your free 14-day trial, no credit card necessary. By providing our email, you agree to our <span class="terms">terms or service.</span></p>
        </div>
        <img src={block1img} class="block1-img" />
      </div>
    </div>
  );
}

export default App;

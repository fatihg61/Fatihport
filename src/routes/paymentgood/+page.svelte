<script>
        // Code to handle redirection after 5 seconds
        setTimeout(() => window.location.href = "/", 5000);
</script>
  
<main class="payment-success">
    <div class="container">
      <div class="heading">
        <div class="tick-container">
          <i class="tick fas fa-check-circle text-green"></i>
        </div>
        <span class="heading-text">Your payment is successful!</span>
      </div>

      <div class="text-container">
        <p>You will be logged out of all devices except this one.</p>
        <p>You will be redirected to the website in 5 seconds.</p>
        <p>If you are not redirected, click the button below.</p>

        <a href="/" class="primary-button button">Go to Website</a>
      </div>
    </div>

  </main>
  
<style>
main {
    background-color: #2196f3;    
}

.payment-success {
  background-color: #2196f3;
  color: #fff;
  text-align: center;
  font-family: sans-serif;
}

.container {
  padding: 32px 0 48px;
}

.heading {
  font-size: 2.4rem;
  margin-bottom: 32px;
}

.heading-text {
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 16px;
}

.tick-container {
  padding: 24px;
  border-radius: 50px;
  height: 64px;
  width: 64px;
  background-color: #fff;
  margin-bottom: 12px;
}

.tick {
  display: block;
  transform: rotate(45deg);
  height: 36px;
  width: 18px;
  border-bottom: solid 6px #fff;
  border-right: solid 6px #fff;
  margin-bottom: 8px;
}

.text-container {
  line-height: 1.8em;
  margin-bottom: 48px;
}

.primary-button {
  background-color: #fff;
  color: #2196f3;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
}

</style>
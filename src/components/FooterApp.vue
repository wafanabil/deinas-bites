<template>
  <footer class="footer">
    <div class="container">
      <div class="top">
        <div>
          <h5>SHOP:</h5>
          <div>
            <p>About</p>
            <p>FAQ</p>
            <p>Shipping/ Pick Up</p>
            <p>Store Policy</p>
            <p>Contact Me</p>
          </div>
        </div>

        <div>
          <h5>OPENING HOURS:</h5>         
          <div>
            <p>Mon - Fri: 7am - 10pm</p>
            <p>Saturday: 8am - 10pm</p>
            <p>Sunday: 8am - 11pm</p>
          </div>
        </div>

        <div>
          <h5>ADDRESS:</h5>
          <div>
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
            <p>Tel: 123-456-7890</p>
          </div>
        </div>

        <div>
          <h5>GET IT FRESH:</h5>
          <div>
            <input type="email" placeholder="ENTER YOUR EMAIL HERE">
            <br>
            <button><span>SUBSCRIBE NOW</span></button>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div>
          <p>© 2035 by Deina's Bites. Powered and secured by Wix</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>

.footer {
  background-color: #fbf2f7;
}

.footer .container {
  width: 85%;
  margin: auto;
  padding: 50px 0;
}

.footer .container .top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer .container .top h5 {
  font-size: 15px;
  font-weight: 100;
  margin-bottom: 24px;
}

.footer .container .top div:first-of-type  div p {
  cursor: pointer;
} 

.footer .container .top div div p,
.footer .container .top div div input,
.footer .container .bottom div p{
  font-family: 'Source Serif 4', serif;
  font-size: 15px;
  line-height: 1.8rem;
}

.footer .container .top div div input {
  padding: 2px 0px 2px 15px;
  border: 1px solid black;
  width: 260px;
  height: 33px;
  margin-bottom: 5px;
}

.footer .container .top div div button {
  background-color: #f6dae9;
  padding: 2px 0px 2px 15px;
  border: none;
  width: 260px;
  height: 33px;  
  cursor: pointer;
}

.footer .container .top div div button span {
  font-size: 18px;
  font-weight: 100;
  transition: 0.3s;
}

.footer .container .top div div button:hover span {
  color: white;
}

.footer .container .bottom div {
  margin-top: 60px;
}

</style>
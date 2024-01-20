<script>

</script>

<header>
	<input type="checkbox" id="toggle" style="display:none;" />
	<label class="toggle-btn toggle-btn__cross" for="toggle">
	  <div class="bar"></div>
	  <div class="bar"></div>
	  <div class="bar"></div>
	</label>
	<nav>
	  <ul>
		<li><a href="/">Home</a></li>
		<li><a href="/">About</a></li>
		<li><a href="/">Promise</a></li>
		<li><a href="/">Sponsor</a></li>
		<li><a href="/">Contact</a></li>
		<li><a href="/">FAQ</a></li>
	  </ul>
	</nav>
	<div class="logo">
		<img src="./inkheader.png" alt="INK" />
	</div>
  </header>  

<style>
 :root {
	 font-size: 16px;
}

 * {
	 box-sizing: border-box;
	 font-family: var(--Apercu-Font);
	 color: #555;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px; /* Adjust padding as needed */
  /* Other styles for header */
}

.logo {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.logo img {
  width: clamp(25px, 8vw, 65px);
  height: auto;
  /* Other styles for the logo image */
}

 header nav {
	 background-color: rgba(0, 0, 0, .8);
	 position: fixed;
	 top: 0;
	 left: 0;
	 width: 100%;
	 height: 100%;
	 opacity: 0;
	 visibility: hidden;
	 transition: all 0.3s ease-in-out;
}
 header nav ul {
	 list-style-type: none;
	 padding: 0;
	 margin: 0;
	 position: absolute;
	 left: 50%;
	 top: 170px;
	 transition: all 0.3s ease-in-out;
	 transform: translateX(-50%);
}
 header nav ul li {
	 transform: translateY(50px);
	 opacity: 0;
}
 header nav ul li a {
	 display: block;
	 font-size: 2em;
	 text-decoration: none;
	 padding: 10px 0;
	 text-align: center;
	 color: #fff;
	 font-weight: bold;
	 transition: all 0.2s ease-in-out;
	 text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
}
 header nav ul li a:hover {
	 color: var(--candelLight);
}
 .toggle-btn {
	 display: block;
	 position: fixed;
	 z-index: 10;
	 right: 10px;
	 top: 10px;
	 cursor: pointer;
}
 .toggle-btn .bar {
	 width: 30px;
	 height: 2px;
	 margin: 7px auto;
	 background-color: #fff;
	 transition: all 0.3s ease-in-out;
	 box-shadow: 0 0 3px 1px rgba(0, 0, 0, .3);
}
 .toggle-btn .bar:nth-child(2) {
	 width: 20px;
}
 #toggle:checked ~ nav {
	 opacity: 1;
	 visibility: visible;
}
 #toggle:checked ~ nav ul {
	 top: 70px;
}
 #toggle:checked ~ nav ul li {
	 transform: translateY(0px);
	 opacity: 1;
}
 #toggle:checked ~ nav ul li:nth-child(1) {
	 transition: all 0.3s cubic-bezier(0.6, 0, 0.8, 1.5) 0.1s;
}
 #toggle:checked ~ nav ul li:nth-child(2) {
	 transition: all 0.3s cubic-bezier(0.6, 0, 0.8, 1.5) 0.2s;
}
 #toggle:checked ~ nav ul li:nth-child(3) {
	 transition: all 0.3s cubic-bezier(0.6, 0, 0.8, 1.5) 0.3s;
}
 #toggle:checked ~ nav ul li:nth-child(4) {
	 transition: all 0.3s cubic-bezier(0.6, 0, 0.8, 1.5) 0.4s;
}
 #toggle:checked + label.toggle-btn .bar {
	 background-color: red;
}
 #toggle:checked + label.toggle-btn .bar:nth-child(2) {
	 transform: translateX(50px);
	 opacity: 0;
}
 #toggle:checked + label.toggle-btn .bar:nth-child(1) {
	 transform: translateY(10px) rotate(45deg);
}
 #toggle:checked + label.toggle-btn .bar:nth-child(3) {
	 transform: translateY(-8px) rotate(-45deg);
}
 

</style>
const template = document.createElement('template');
template.innerHTML = `
<style>
/* ================================
	(1) Baby Reset
================================ */
html { box-sizing: border-box; font-size: 16px; }
*, *:before, *:after { box-sizing: inherit; }
body, h1, h2, h3, h4, h5, h6, p, ol, ul { margin: 0; padding: 0; font-weight: normal; }
ol, ul { list-style: none; }
img { max-width: 100%; height: auto; }

/* ================================
	(2) Structure Code
================================ */
main { min-height: 100vh; display: flex; flex-direction: column; }
section { padding: 0 1rem 0 1rem; margin: 0 auto; max-width: 1600px; }

/* ===========================
	(3) Lists
=========================== */
ul { display: block; }
li { 
  display: list-item;       
  list-style-type: disc; 
  margin-left: 1.125rem; 
}

/* ===========================
	(4) Links
=========================== */
a { 
  color: var(--nav-list-color); 
  text-decoration: none; 
}
a:hover { 
  color: var(--nav-hover-color); 
  text-decoration: underline; 
}
a:active { color: var(--nav-active-color); }
a.current { 
  color: var(--nav-active-color); 
  text-decoration: none; 
  cursor: default; 
}

/* ===========================
	(5) Footer Component
=========================== */

/* Footer: Section A
   Backgrounds & FlexBox containers
******************************************/
footer { 
  width: 100%; 
  margin-top: auto; 
}
  
.footer-content {
  background-image: linear-gradient(
    180deg, 
    var(--footer-bottom-color) 0%, 
    var(--footer-top-color) 100%)
  ;
  padding-top: 1rem;
  padding-bottom: 2rem;
}

.footer-item-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-content: flex-start;
  align-items: flex-start;
}

@media only screen and (max-width: 768px) { 
 .footer-item-container { 
   flex-flow: row wrap; 
   justify-content: space-between; 
 }
} 

.footer-item:nth-child(1), 
.footer-item:nth-child(2), 
.footer-item:nth-child(3) { 
  flex: 0 1 auto; 
  align-self: auto; 
  padding: 10px;
  margin-bottom: 10px;
}

.footer-item:nth-child(1), 
.footer-item:nth-child(2) { 
  margin-right: 8px; 
}

.footer-polygon-bg { fill: var(--footer-polygon-bg); }
.footer-border-top-color { stop-color: var(--footer-border-top-color); }
.footer-border-bottom-color { stop-color: var(--footer-border-bottom-color); }
.footer-highlight { color: var(--footer-highlight); }

/* Footer: Section B
	 Content and Navigations
******************************************/
h3.footer-title {
  font-weight: 300;
  font-size: 30px;
  color: var(--title);
  letter-spacing: 2.12px;
  text-align: left;
  padding-bottom: 10px;
}
li.footer-nav-link { 
  display: flex;
  flex-flow: nowrap column;
  list-style-type: none;
  margin-left: 0;
  font-size: 1.063rem;
  color: var(--paragraph);
  letter-spacing: 1.33px;
  text-align: left;
  line-height: 1.9;
}


ul.footer-social { list-style-type: none; }

li.footer-social-link { 
  display: inline-flex; 
  flex-flow: row nowrap; 
  margin-left: 0; 
}

/*
li.footer-social-link:hover { 
  cursor: pointer; 
  background-color: var(--footer-social-icons-bg-hover); 
  border-radius: 8px; 
}
*/

p.footer-contact { padding-bottom: 10px; }
p.footer-copyright { text-align: right; }

</style>


<!-- ==============================
     HTML Begins
=============================== -->
<main>
 <footer>
 
  <svg 
   xmlns="http://www.w3.org/2000/svg" 
   viewBox="0 0 1441 120" 
   style="display:block; margin-bottom:-1px;"
   >
   <defs>
    <linearGradient id="footer-top-border" x1="0%" x2="100%" y1="50%" y2="50%">
     <stop offset="0%" class="footer-border-top-color"/>
     <stop offset="100%" class="footer-border-bottom-color"/>
    </linearGradient>
   </defs>
   <g fill="none" fill-rule="evenodd">
    <line x1="1442.5" x2="-1" y1="117.5" y2="4.5" stroke="url(#footer-top-border)" stroke-width="5" style="vector-effect: non-scaling-stroke;"/>
    <polygon class="footer-polygon-bg" points="-.5 120 1447.5 120 -.5 7"/>
   </g>
  </svg>


   <div class="footer-content">
    <section>
  
    
      <div class="footer-item-container">
      
       <div class="footer-item">
       
	      <h3 class="footer-title" tabindex="0">
         <slot name="menu-title"></slot>
        </h3>
        
        <ul>
         <li class="footer-nav-link">
          <slot name="footer-menu-item"></slot>
         </li>
        </ul>
       </div><!--footer-item-->
 
 
       <div class="footer-item">
        <h3 class="footer-title" tabindex="0">
         <slot name="social-connect"></slot>
        </h3>
        
        <ul class="footer-social">
         <li class="footer-social-link">
          <slot name="social-icons"></slot>
  	     </li>	
        </ul> 
        
        <br>
        
	      <h3 class="footer-title" tabindex="0">Contact</h3>
	       <p class="footer-contact">
	        <strong tabindex="0">Phone number:</strong> <a href="tel:317-910-5607">317-910-5607</a> 
	       </p>
	       <p class="footer-contact">
	        <strong tabindex="0">Email address:</strong> <a href="mailto:drew@drewgoff.com">drew@drewgoff.com</a> 
	       </p>
        
       </div><!--footer-item-->
     
     
       <div class="footer-item">
	      <h3 class="footer-title" tabindex="0">About this Website</h3>
	       <strong class="footer-highlight" tabindex="0">DESIGNED in</strong>
	        <p tabindex="0">Sketch and Adobe Illustrator</p>
	         <br>
	       <strong class="footer-highlight" tabindex="0">CODED in</strong>
	        <p tabindex="0">Web Components, Vue, Node, Express and MongoDB</p> 
		       <br><br>
		      <p class="footer-copyright" tabindex="0">Copyright ©2022 Drew Goff</p>
       </div><!--footer-item-->
      
      
      </div><!--footer-item-container-->
     </section>
   </div><!--footer-content-->
  
 </footer>
</main>
`;

class UXCFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}




const githubIcon = document.createElement('template');
githubIcon.innerHTML = `
<style>
.footer-social-background {
  fill: var(--footer-social-icons-bg); 
  width: 39px; 
  height: 39px;
  fill-opacity: 0.1;
  stroke: var(--footer-social-icons-color);
}
.footer-social-icon { fill: var(--footer-social-icons-color); }
.footer-social-border { stroke: var(--footer-social-icons-color); }
</style>

<svg role="img" aria-label="github link" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
  <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
   <rect class="footer-social-background" x=".5" y=".5" rx="8"/>
   <path class="footer-social-icon" fill-rule="nonzero" d="M20.288,3 C11.294,3 4,10.293 4,19.29 C4,26.487 8.667,32.592 15.14,34.746 C15.955,34.896 16.252,34.393 16.252,33.961 C16.252,33.574 16.238,32.55 16.23,31.191 C11.699,32.175 10.743,29.007 10.743,29.007 C10.002,27.125 8.934,26.624 8.934,26.624 C7.455,25.614 9.046,25.634 9.046,25.634 C10.681,25.749 11.541,27.313 11.541,27.313 C12.994,29.802 15.354,29.083 16.282,28.666 C16.43,27.614 16.851,26.896 17.316,26.489 C13.699,26.078 9.896,24.68 9.896,18.438 C9.896,16.66 10.531,15.205 11.573,14.067 C11.405,13.655 10.846,11.998 11.733,9.756 C11.733,9.756 13.1,9.318 16.212,11.426 C17.511,11.064 18.905,10.884 20.29,10.877 C21.674,10.884 23.067,11.064 24.368,11.426 C27.478,9.318 28.843,9.756 28.843,9.756 C29.732,11.998 29.173,13.655 29.006,14.067 C30.05,15.205 30.68,16.66 30.68,18.438 C30.68,24.696 26.871,26.073 23.243,26.476 C23.827,26.979 24.348,27.973 24.348,29.492 C24.348,31.67 24.328,33.427 24.328,33.961 C24.328,34.397 24.622,34.904 25.448,34.745 C31.916,32.586 36.579,26.485 36.579,19.29 C36.579,10.293 29.285,3 20.288,3"/>
  </g>
</svg>
`;

class GithubIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(githubIcon.content.cloneNode(true));
  }
}




const codepenIcon = document.createElement('template');
codepenIcon.innerHTML = `
<style>
.footer-social-background {
  fill: var(--footer-social-icons-bg); 
  width: 39px; 
  height: 39px;
  fill-opacity: 0.1;
  stroke: var(--footer-social-icons-color);
}
.footer-social-icon { fill: var(--footer-social-icons-color); }
.footer-social-border { stroke: var(--footer-social-icons-color); }
</style>
<svg role="img" aria-label="codepen link" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
  <g fill="none" fill-rule="evenodd" class="footer-social-border" transform="translate(2 2)">
   <rect class="footer-social-background" x=".5" y=".5" rx="8"/>
  <polygon stroke-width="2" points="19.185 3 33 12.786 19.185 23.948 6 13.474"/>
  <polyline stroke-width="2" points="33.414 13.143 33.414 24.545 20.312 35.143 6 24.143 6 13.143"/>
  <line x1="19.755" x2="19.755" y1="24.114" y2="35.317" stroke-width="2"/>
  <polyline stroke-width="2" points="19.217 4 19.217 14.209 6 25.011"/>
  <line x1="19.548" x2="33.443" y1="14.057" y2="25.006" stroke-width="2"/>
  </g>
</svg>
`;
class CodepenIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(codepenIcon.content.cloneNode(true));
  }
}




const linkedinIcon = document.createElement('template');
linkedinIcon.innerHTML = `
<style>
.footer-social-background {
  fill: var(--footer-social-icons-bg); 
  width: 39px; 
  height: 39px;
  fill-opacity: 0.1;
  stroke: var(--footer-social-icons-color);
}
.footer-social-icon { fill: var(--footer-social-icons-color); }
.footer-social-border { stroke: var(--footer-social-icons-color); }
</style>

<svg role="img" aria-label="linkedin link" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
  <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
    <rect class="footer-social-background" x=".5" y=".5" rx="8"/>
    <polygon class="footer-social-icon" fill-rule="nonzero" points="12.214 33 6 33 6 12.286 12.214 12.286"/>
  
    <path class="footer-social-icon" fill-rule="nonzero" d="M35,33 L28.7857143,33 L28.7857143,21.9344286 C28.7857143,19.051 27.7582857,17.6155 25.7220714,17.6155 C24.1084286,17.6155 23.0851429,18.4192143 22.5714286,20.0287143 C22.5714286,22.6428571 22.5714286,33 22.5714286,33 L16.3571429,33 C16.3571429,33 16.44,14.3571429 16.3571429,12.2857143 L21.2622857,12.2857143 L21.6413571,16.4285714 L21.7697857,16.4285714 C23.0437143,14.3571429 25.0799286,12.9527143 27.8722143,12.9527143 C29.9954286,12.9527143 31.7126429,13.5430714 33.0238571,15.0262143 C34.3433571,16.5114286 35,18.5041429 35,21.3026429 L35,33 Z"/>
  
    <circle class="footer-social-icon" cx="9.107" cy="7.107" r="3.107" fill-rule="nonzero"/>
  </g>
 </a>
</svg>
`;

class LinkedinIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(linkedinIcon.content.cloneNode(true));
  }
}




const instagramIcon = document.createElement('template');
instagramIcon.innerHTML = `
<style>
.footer-social-background {
  fill: var(--footer-social-icons-bg); 
  width: 39px; 
  height: 39px;
  fill-opacity: 0.1;
  stroke: var(--footer-social-icons-color);
}
.footer-social-icon { fill: var(--footer-social-icons-color); }
.footer-social-border { stroke: var(--footer-social-icons-color); }
</style>
<svg role="img" aria-label="instagram link" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
  <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
    <rect class="footer-social-background" x=".5" y=".5" rx="8"/>
    <path class="footer-social-icon" fill-rule="nonzero" d="M19.0760239,28.2830882 C15.1295648,27.9018861 11.5184727,23.6983039 13.1200512,18.9199589 C13.2206911,18.6177792 13.4351109,18.2880749 13.5990614,17.9702092 C13.7546502,17.6680295 14.0162543,17.3134642 13.9412969,17.0885313 C11.3165956,17.0885313 6,17.0885313 6,17.0885313 L6,30.1828836 C6.26668089,32.7444554 8.29889078,34.7573092 10.9289676,35 L20.0340444,35 L29.1397184,35 C31.7745734,34.7309684 33.7389932,32.5577019 34,30.2509554 C34,30.2509554 34,19.3615378 34,17.0882353 C31.3305034,17.0882353 28.6601109,17.0882353 25.9903157,17.0882353 C29.1164249,22.1921411 25.5366894,28.9078691 19.0760239,28.2830882 Z"/>
    <path class="footer-social-icon" fill-rule="nonzero" d="M19.9870302,26.4705882 C22.49481,26.4705882 25.5455848,24.6587703 25.5149222,20.8813152 C25.4863435,17.4412994 22.7719637,15.0078826 19.304714,15.4299076 C18.2321202,15.5599467 17.6557833,15.7944385 17.1205283,16.1198373 C15.8910494,16.866057 14.734208,18.257957 14.5273102,20.1221517 C14.1093469,23.8842551 16.8389092,26.4705882 19.9870302,26.4705882 Z"/>
    <path class="footer-social-icon" fill-rule="nonzero" d="M16.2333983 19.2254238C16.6814287 18.1556114 17.6918044 16.9560609 19.7822163 16.8097669 22.3501304 16.6294581 24.7412138 18.9499938 24.0136481 21.9848414 23.5566868 23.8887703 21.4668703 25.3288329 19.3050117 25.0208931 17.2381177 24.7271011 15.0173156 22.1299313 16.2333983 19.2254238ZM32.4223495 7.60989558C31.6693031 6.83778099 30.4366661 6.12980566 29.0762377 6L20.0215096 6 19.9964875 6 13.5083133 6 13.5083133 13.2825555 12.347466 13.2825555 12.347466 6 11.6307612 6 11.6307612 13.2825555 10.4690202 13.2825555 10.4690202 6.06902607C10.2119478 6.11942121 9.96023729 6.18844727 9.71805898 6.27427172L9.71805898 13.2822501 8.55721169 13.2822501 8.55721169 6.84022439C8.18783764 7.07418 7.86135865 7.33806726 7.59564764 7.61020101 6.05112795 9.19413546 5.92691103 11.9163892 6.02521219 15.3823529L14.6980552 15.3823529C15.050152 15.298361 15.4722512 14.8530513 15.7906874 14.6120709 16.9589818 13.7300033 18.4620958 13.2486534 19.9875511 13.2315495L20.030744 13.2315495C21.5564971 13.2486534 23.0596111 13.7300033 24.2276076 14.6120709 24.5466396 14.8530513 24.968143 15.298361 25.319942 15.3823529L33.992785 15.3823529C34.0315097 11.8812653 33.967465 9.19383003 32.4223495 7.60989558Z"/>
    <path class="footer-social-icon" fill-rule="nonzero" d="M31.2314161,12.3332944 C31.2314161,12.7416477 30.9091075,13.0724231 30.5117325,13.0724231 L27.5117599,13.0724231 C27.1146828,13.0724231 26.7917784,12.7416477 26.7917784,12.3332944 L26.7917784,9.25858015 C26.7917784,8.85083767 27.1143849,8.52036774 27.5117599,8.52036774 L30.5117325,8.52036774 C30.9091075,8.52036774 31.2314161,8.85083767 31.2314161,9.25858015 L31.2314161,12.3332944 Z"/>
  </g>
 </svg>
`;

class InstagramIcon extends HTMLElement {
  constructor() {
  super();
  this.attachShadow({ mode: 'open' });
  this.shadowRoot.appendChild(instagramIcon.content.cloneNode(true));
 }
}




const facebookIcon = document.createElement('template');
facebookIcon.innerHTML = `
<style>
.footer-social-background {
  fill: var(--footer-social-icons-bg); 
  width: 39px; 
  height: 39px;
  fill-opacity: 0.1;
  stroke: var(--footer-social-icons-color);
}
.footer-social-icon { fill: var(--footer-social-icons-color); }
.footer-social-border { stroke: var(--footer-social-icons-color); }
</style>
<svg role="img" aria-label="facebook link" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
  <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
    <rect class="footer-social-background" x=".5" y=".5" rx="8"/>
    <path class="footer-social-icon" fill-rule="nonzero" d="M23.3333333,16.875 L29,16.875 L29,22.3125 L23.3333333,22.3125 L23.3333333,35 L17.6666667,35 L17.6666667,22.3125 L12,22.3125 L12,16.875 L17.6666667,16.875 L17.6666667,14.6003125 C17.6666667,12.44525 18.3731111,9.722875 19.7784444,8.2348125 C21.1837778,6.743125 22.9385556,6 25.0408889,6 L29,6 L29,11.4375 L25.0333333,11.4375 C24.0926667,11.4375 23.3333333,12.166125 23.3333333,13.0669375 L23.3333333,16.875 Z"/>
  </g>
</svg>
`;

class FacebookIcon extends HTMLElement {
  constructor() {
  super();
  this.attachShadow({ mode: 'open' });
  this.shadowRoot.appendChild(facebookIcon.content.cloneNode(true));
 }
}


customElements.define('uxc-footer', UXCFooter);
customElements.define('github-icon', GithubIcon);
customElements.define('codepen-icon', CodepenIcon);
customElements.define('linkedin-icon', LinkedinIcon);
customElements.define('instagram-icon', InstagramIcon);
customElements.define('facebook-icon', FacebookIcon);


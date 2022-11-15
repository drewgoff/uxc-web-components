const template = document.createElement('template');
template.innerHTML = `
<style>  
  /* ========================================
	  Primary Buttons
  ======================================== */
  button, .button {
	border: transparent;
	color: #0D0E10;
	padding: 10px 18px;
	text-align: center;
	text-decoration: none;
	font-size: 1.06rem;
	margin: 5px;
	cursor: pointer;
	border-radius: 4px;
	letter-spacing: 0.06rem;
	text-transform: uppercase;
	font-family: 'Oxygen', sans-serif;
	font-weight: 700;
  }
  .primary-btn { 
	  background-image: linear-gradient(0deg, #BAA4E9 0%, #FFAAF7 100%);
	  border-radius: 4px; 
  }
  
  /* ========================================
	  Modal Window Content
  ======================================== */
  /* The Modal (background) */
  .modal {
	display: none;
	position: fixed;
	z-index: 1;
	padding-top: 100px;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(4, 10, 18, 0.7);
  }
  
  /* The Modal Container */
  .modal-container {
	display: flex;
	flex-flow: column nowrap;
	margin: auto;
	padding: 0;
	width: 75%;
  }
  
  /* Modal Header -- Header area */
  .modal-header {
	display: flex;
	flex-flow: row wrap;
	align-content: center;
	height: 80px;
	background-image: linear-gradient(179deg, #FF4CF3 0%, #BF00D8 100%);
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
	z-index: 2;
	position: relative;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
  }
  .modal-header-grid-33 { width: calc(33.3333%); }
  .modal-header-grid-66 { width: calc(66.6666%); padding-left: 12px; }

  .modal-header-title {
	font-family:'Oxygen', sans-serif;
	font-weight: 700;
	letter-spacing: 0.8px;
	font-size: 2rem;
	color: #fff;
  }

  /* Modal Header -- Exit area */
  .trapezoid {
	border-bottom: 80px solid #484A56;
	background-image: linear-gradient(179deg, #6A6E80 0%, #484A56 100%);
	border-left: 22px solid transparent;
	height: 0;
	width: 75px;
	top: 0;
	position: absolute;
	right: 0;
	border-top-right-radius: 3px;
  }

  .exit-container {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-content: center;
	align-items: center;
	width: 42px;
	margin-left: 12px;
	margin-top: 9px;
  }

  .exit-container:hover { opacity: 0.7; cursor: pointer; }

  .close-button-svg {
	fill: none;
	stroke: white;
	stroke-width: 2;
	stroke-miterlimit: 10;
  }

  .exit-title {
	font-family: 'Oxygen', sans-serif;
	font-weight: 400;
	color: white;
	font-size: 1rem;
  }
  
  /* Basic Modal Body Area */
  .modal-content-secondary-bg {
  	background-image: linear-gradient(270deg, #484A56 0%, #BF00D8 99%);
	height: auto;
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
  }

  .modal-content-primary-bg {
	background-color: #25262C;
	margin: 0 8px 8px 8px;
	height: auto;
	padding: 5px;
	color: white;
	line-height: 1.45;
	font-size: 17px;
	letter-spacing: 1.05px;
	border-radius: 1px;
	min-height: 300px;
  }
</style>

 <button class="primary-btn">Open Modal</button>


 <!-- The Modal -->
 <div class="modal">
  <div class="modal-container">
   <div class="modal-header">
	
	 <div class="modal-header-grid-66">
	  <slot name="modal-header-title" class="modal-header-title"></slot>
	 </div><!--grid-66-->

	 <div class="modal-header-grid-33">
	  <div class="trapezoid">
	   <span class="exit-container">
	
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
		 <path class="close-button-svg" d="M31,9.3l-22,22 M31,31.3L9,9.3"/>
		 <path class="close-button-svg" d="M33.7,37.8h-27c-2.2,0-4-1.8-4-4v-27c0-2.2,1.8-4,4-4h27c2.2,0,4,1.8,4,4v27C37.7,36,35.9,37.8,33.7,37.8z"/>
		</svg> 
		<div class="exit-title">Close</div><!--exit-title-->
	   </span><!--exit-container-->
	  </div><!--trapezoid-->
	 </div><!--grid-33-->
   </div><!--modal-header-->

   <div class="modal-content-secondary-bg">
	<div class="modal-content-primary-bg">
	 <slot></slot>
	</div>
   </div>
  </div>
 </div><!--modal-->
`;

class UXCDialog extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	
	connectedCallback () {
	  this._modal = this.shadowRoot.querySelector(".modal");
	  this.shadowRoot.querySelector("button").addEventListener('click', this._showModal.bind(this));
	  this.shadowRoot.querySelector(".exit-container").addEventListener('click', this._hideModal.bind(this));
	  
	}
	
	disconnectedCallback() {
	  this.shadowRoot.querySelector("button").removeEventListener('click', this._showModal);
	  this.shadowRoot.querySelector(".exit-container").removeEventListener('click', this._hideModal);
	}
	
	_showModal() {
		this._modalVisible = true;
		this._modal.style.display = 'block';
	}
	
	_hideModal() {
		this._modalVisible = false;
		this._modal.style.display = 'none';
	}
}

customElements.define('uxc-dialog', UXCDialog);
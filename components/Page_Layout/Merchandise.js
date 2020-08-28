export default function Merchandise() {
  return (
    <div className="w3-row w3-padding-64" id="about">
	  
      <div className="w3-col m6 w3-padding-large">
        <h1 className="w3-center">Coders SB T-Shirt</h1>
        <h3 className="w3-center">Price: $15</h3>
        <h3 className="w3-center">Available sizes: S M L</h3>
        <h3 className="w3-center">Colors: Black, Blue, Gray</h3>
        <br />
      </div>
	  
      <div className="w3-col m6 w3-padding-large w3-hide-small">
        <img
          src="shirt.png"
          className="w3-round w3-image w3-opacity-min"
          alt="Coders SB Tshirt"
          width="600"
          height="600"
        />
      </div> 
     
    <div class = "Form">
	<h2>Fill out the form below if you would like to order our merchandise!</h2>
        <h3><a href="https://forms.gle/CoVxX6HQeCbaEyqVA" target="_blank">Order Form</a></h3>
    </div>
    </div>
    
    
  );
}

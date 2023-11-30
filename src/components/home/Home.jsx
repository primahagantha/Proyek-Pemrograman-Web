  import React from 'react';
  import Typed from 'typed.js';


  function Home(){
    React.useEffect(() => {
          const typed = new Typed(".changecontent", {
            strings: ['Portofolio', 'Web Portofolio', 'Website'],
            typeSpeed: 300,
            loop: true,
          });
      
          return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);
      
      return(
          <div className="home" id="home">
          <div className="content">
              <h5>Selamat Datang</h5>
              <h1>Inspirasi <span className="changecontent"></span></h1>
              <p>
  Selamat Datang, Tempat Berkumpulnya Kreativitas Digital!

  Terima kasih telah mengunjungi halaman kami.</p>
  <p> Di sini, kami tidak hanya menciptakan desain; kami menciptakan pengalaman. Setiap klik adalah perjalanan melalui dunia inovasi visual dan fungsional.</p>
          </div> 
      </div>
      )
  }


  export default Home
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Moment from "moment";
import "moment-timezone";

function About() {
  const welcomeTextRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(Moment().tz("Asia/Jakarta"));

  const currentHour = currentTime.format("HH");
  let greetingMessage = "";

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "Selamat Pagi";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Selamat Siang";
  } else {
    greetingMessage = "Selamat Malam";
  }

  useEffect(() => {
    const typedOptions = {
      strings: [greetingMessage, "Halo", "Hai"],
      typeSpeed: 100,
      loop: true,
    };

    const typed = new Typed(welcomeTextRef.current, typedOptions);

    const intervalId = setInterval(() => {
      setCurrentTime(Moment().tz("Asia/Jakarta"));
    }, 1000);

    return () => {
      // Cleanup Typed instance and interval
      typed.destroy();
      clearInterval(intervalId);
    };
  }, [greetingMessage]);

  return (
    <section className="about" >
      <div className="container mt-2" >
        <div className="main-text" id="about">
          <h1 >
            <span>A</span>bout
          </h1>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 py-3 py-md-0">
            <h1>
              <span
                ref={welcomeTextRef}
                className="typed-text fw-bold"
                title="Click me for a surprise!"
              ></span>
            </h1>
            <div className="card"></div>
          </div>

          <div className="col-md-6 py-3 py-md-0">
            <p>
              Selamat datang di ruang digital saya! Saya memiliki hasrat dalam
              menciptakan situs web yang indah dan fungsional yang meninggalkan
              kesan mendalam. Dengan mata yang cermat terhadap desain dan cinta
              terhadap pemrograman, saya mengubah ide menjadi pengalaman online
              yang menarik secara visual dan ramah pengguna.
            </p>
            <p>
              Perjalanan saya dalam pengembangan web didorong oleh kehausan akan
              pengetahuan yang konstan dan komitmen untuk memberikan solusi
              inovatif. Baik itu desain front-end atau fungsionalitas back-end,
              saya berusaha untuk keunggulan dalam setiap baris kode.
            </p>
            <p>
              Bergabunglah dengan saya dalam perjalanan kreativitas dan inovasi
              ini. Mari kita berkolaborasi untuk menghidupkan ide-ide Anda dan
              menciptakan kehadiran digital yang menonjol di lanskap online yang
              luas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

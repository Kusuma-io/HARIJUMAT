import React from "react";
import Axios from "axios";
import hero from "../../Image/herobanner2.png";
import class1 from "../../Image/webdev-pict1.jpg";
import class2 from "../../Image/uiuxpict.jpg";
import class3 from "../../Image/webdev-pict.jpeg";
import class5 from "../../Image/pmpict.jpg";
import class6 from "../../Image/mobdevpict.jpg";

function Class(props) {
  return (
    <>
      {/* Hero Banner */}
      <div className="container col-xxl-8 px-4 pb-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={hero}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-4 mt-5">
              Sekolah online yang membantumu menjadi Top 7% Talenta Indonesia
            </h1>
            <p className="lead">
              Ayo belajar dan bertranformasi menjadi orang paling dicari di
              industri, Kuasai skill dan dapatkan pekerjaan impianmu.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {/* <button href="#" type="button" className="btn btn-success btn-lg px-4 me-md-2">Temukan kelas</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* {Pilihan Kelas} */}
      <div className="container my-5">
        <h3 className=" pt-5 text-center">Kelas kami</h3>
        <p className="text-center pb-3">
          Kelas terbaik dari kami, dan miliki skill yang paling di cari industri
          saat ini
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-5">
          <div className="col">
            <div className="card">
              <img src={class1} height="240" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Kelas Web-Developer</h5>
                <p className="card-text fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat ipsum, alias dolorum reprehenderit obcaecati
                  doloribus cum a itaque quibusdam atque.
                </p>
                <p class="badge bg-danger text-wrap ms-5 mx-3">
                  Disc 50%<span className="fw-bold px-1">Rp.1.500.000</span>
                  <span className="text-decoration-line-through">
                    Rp.3000.000
                  </span>
                </p>
                <a className="btn btn-success px-4 mx-3" href="/login">
                  Ikuti kelas
                </a>
                <a className="btn btn-outline-success me-2" href="/contact">
                  Info lebih lanjut
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={class2} height="240" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Kelas UI/UX</h5>
                <p className="card-text fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat ipsum, alias dolorum reprehenderit obcaecati
                  doloribus cum a itaque quibusdam atque.
                </p>
                <p class="badge bg-danger text-wrap ms-5 mx-3">
                  Disc 50%<span className="fw-bold px-1">Rp.1.500.000</span>
                  <span className="text-decoration-line-through">
                    Rp.3000.000
                  </span>
                </p>
                <a className="btn btn-success px-4 mx-3" href="/login">
                  Ikuti kelas
                </a>
                <a className="btn btn-outline-success me-2" href="/contact">
                  Info lebih lanjut
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={class3} height="240" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Kelas Data science</h5>
                <p className="card-text fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat ipsum, alias dolorum reprehenderit obcaecati
                  doloribus cum a itaque quibusdam atque.
                </p>
                <p class="badge bg-danger text-wrap ms-5 mx-3">
                  Disc 50%<span className="fw-bold px-1">Rp.1.500.000</span>
                  <span className="text-decoration-line-through">
                    Rp.3000.000
                  </span>
                </p>
                <a className="btn btn-success px-4 mx-3" href="/login">
                  Ikuti kelas
                </a>
                <a className="btn btn-outline-success me-2" href="/contact">
                  Info lebih lanjut
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={class3} height="240" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Kelas Data Analyst</h5>
                <p className="card-text fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat ipsum, alias dolorum reprehenderit obcaecati
                  doloribus cum a itaque quibusdam atque.
                </p>
                <p class="badge bg-danger text-wrap ms-5 mx-3">
                  Disc 50%<span className="fw-bold px-1">Rp.1.500.000</span>
                  <span className="text-decoration-line-through">
                    Rp.3000.000
                  </span>
                </p>
                <a className="btn btn-success px-4 mx-3" href="/login">
                  Ikuti kelas
                </a>
                <a className="btn btn-outline-success me-2" href="/contact">
                  Info lebih lanjut
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={class5} height="240" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Kelas Product Management</h5>
                <p className="card-text fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat ipsum, alias dolorum reprehenderit obcaecati
                  doloribus cum a itaque quibusdam atque.
                </p>
                <p class="badge bg-danger text-wrap ms-5 mx-3">
                  Disc 50%<span className="fw-bold px-1">Rp.1.500.000</span>
                  <span className="text-decoration-line-through">
                    Rp.3000.000
                  </span>
                </p>
                <a className="btn btn-success px-4 mx-3" href="/login">
                  Ikuti kelas
                </a>
                <a className="btn btn-outline-success me-2" href="/contact">
                  Info lebih lanjut
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={class6} height="240" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Kelas Mobile Developer</h5>
                <p className="card-text fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat ipsum, alias dolorum reprehenderit obcaecati
                  doloribus cum a itaque quibusdam atque.
                </p>
                <p class="badge bg-danger text-wrap ms-5 mx-3">
                  Disc 50%<span className="fw-bold px-1">Rp.1.500.000</span>
                  <span className="text-decoration-line-through">
                    Rp.3000.000
                  </span>
                </p>
                <a className="btn btn-success px-4 mx-3" href="/login">
                  Ikuti kelas
                </a>
                <a className="btn btn-outline-success me-2" href="/contact">
                  Info lebih lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Class;

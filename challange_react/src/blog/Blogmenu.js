import React, { Component } from 'react';

class Blogmenu extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card my-4">
          <h5 className="card-header bg-primary" style={{color:"white"}}>Berita Terkini</h5>
          <div className="">
            <ul className="list-group">
              <li className="list-group-item">
                <a href="https://www.merdeka.com/uang/bea-cukai-musnahkan-247-barang-salahi-aturan-impor-nilainya-rp-182-juta.html">Bea Cukai Musnahkan 247 Barang Salahi Aturan Impor, Nilainya Rp 182 Juta</a>
              </li>
              <li className="list-group-item">
                <a href="https://www.merdeka.com/politik/merujuk-survei-internal-bpn-yakin-prabowo-menang-di-atas-60-persen.html">Merujuk Survei Internal, BPN Yakin Prabowo Menang di Atas 60 Persen</a>
              </li>
              <li className="list-group-item">
                <a href="https://bandung.merdeka.com/halo-bandung/sma-asal-surabaya-dan-yogyakarta-jadi-juara-pucuk-cool-jam-2019-190310e.html">SMA Asal Surabaya dan Yogyakarta Jadi Juara Pucuk Cool Jam 2019</a>
              </li>
              <li className="list-group-item">
                <a href="https://www.merdeka.com/peristiwa/panitia-sebut-finalis-putri-indonesia-dibekali-pendidikan-politik-anti-hoaks.html">Panitia Sebut Finalis Putri Indonesia Dibekali Pendidikan Politik & Anti Hoaks</a>
              </li>
              <li className="list-group-item">
                <a href="https://www.merdeka.com/peristiwa/menpora-rahasiakan-bonus-untuk-ahsan-hendra.html">Menpora Rahasiakan Bonus untuk Ahsan-Hendra</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Blogmenu;
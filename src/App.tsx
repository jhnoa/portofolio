import React from 'react';
import { Typography, Layout, Card } from 'antd';
function App() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'flex-start',
          padding: 50,
          paddingLeft: '20vw',
        }}
      >
        <h3>Know Me More</h3>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'flex-end',
          padding: 50,
          paddingRight: '20vw',
          fontSize: 48,
          fontSmooth: 1,
          fontWeight: 600,
          textAlign: 'end',
        }}
      >
        <h1>Johan Siautama</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'flex-start',
          padding: 50,
          paddingLeft: '10vw',
        }}
      >
        <h3 style={{ padding: 20 }}>
          Seorang programmer JavaScript yang memiliki spesialisasi pada bidang
          Backend ExpressJS, dan MongoDB. Saya sangat mengutamakan modular dan
          skalabilitas dari kode yang saya buat.
        </h3>
        <h3 style={{ padding: 20 }}>
          Saya senang bermain2 dengan struktur data semenjak SMA dan pernah
          dipercayakan sekolah untuk mengikuti penyisihan olimpiade sains
          komputer daerah DKI Jakarta, walaupun tersisihkan ditahap 20 besar
          se-jakarta.
        </h3>
        <h3 style={{ padding: 20 }}>
          Mulai memasuki dunia JavaScript semenjak 2019, saya bersama beberapa
          teman telah membuat beberapa aplikasi untuk client yang menggunakan
          React, React-Native, FeathersJS, Mongoose, MongoDB, FaceAPI.JS, dan
          beberapa library besar lain.
        </h3>
        <h3 style={{ padding: 20 }}>
          Sekarang saya sedang menggali mengenai React secara lebih mendalam
          untuk menjadi senior dibidang ini. Target yang saya miliki adalah
          untuk menjadi Full-Stack Developer yang lebih baik lagi.
        </h3>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          padding: 50,
        }}
      ></div>
    </div>
  );
}

export default App;

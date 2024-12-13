"use client";
import React, { useState } from 'react';

const UserSettings = () => {
  // ESC butonunun hover ve basma durumu için state'ler
  const [escButtonHover, setEscButtonHover] = useState(false);
  const [escButtonPressed, setEscButtonPressed] = useState(false);

  // İki aşamalı kimlik doğrulama butonunun hover durumu için state
  const [authButtonHover, setAuthButtonHover] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#1e1e1e', color: '#fff', position: 'relative' }}>
      {/* Sağ Üst ESC Düğmesi */}
      <a 
        href="home"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: escButtonHover ? '#444' : '#2c2c2c', // Hover efekti
          border: '2px solid #555',
          color: '#fff',
          fontSize: '14px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none',
          transform: escButtonPressed ? 'scale(0.9)' : 'scale(1)', // Basma efekti
          transition: 'background-color 0.3s ease, transform 0.3s ease',
        }}
        onMouseOver={() => setEscButtonHover(true)}  // Hover durumu
        onMouseOut={() => setEscButtonHover(false)}  // Hover bittiğinde
        onMouseDown={() => setEscButtonPressed(true)}  // Tıklama
        onMouseUp={() => setEscButtonPressed(false)}  // Tıklama sonrası
      >
        X 
        
      </a>

      {/* Sol Menü */}
      <aside
        style={{
          width: '250px',
          backgroundColor: '#2c2c2c',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h3 style={{ marginBottom: '20px', fontSize: '16px', color: '#fff' }}>KULLANICI AYARLARI</h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Hesabım</a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Profil</a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Oturumlar</a>
          </li>
        </ul>
        <h3 style={{ marginTop: '30px', fontSize: '16px', color: '#fff' }}>İSTEMCİ AYARLARI</h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Ses Ayarları</a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Görünüm</a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Bildirimler</a>
          </li>
        </ul>
        <h3 style={{ marginTop: '30px', fontSize: '16px', color: '#fff' }}>SMOOTHY</h3>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Botlarım</a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Geri Bildirim</a>
          </li>
        </ul>
      </aside>

      {/* Sağ İçerik */}
      <main
        style={{
          flex: 1,
          padding: '20px',
        }}
      >
        <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>Hesabım</h2>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Kullanıcı Adı</label>
          <input
            type="text"
            value="ZephyR#8265"
            readOnly
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #555',
              backgroundColor: '#2c2c2c',
              color: '#fff',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>E-Posta</label>
          <input
            type="text"
            value="******@***.com"
            readOnly
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #555',
              backgroundColor: '#2c2c2c',
              color: '#fff',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Şifre</label>
          <input
            type="password"
            value="*******"
            readOnly
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #555',
              backgroundColor: '#2c2c2c',
              color: '#fff',
            }}
          />
        </div>
        <button
          style={{
            backgroundColor: authButtonHover ? '#d43136' : '#e63946', // Hover efekti
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={() => setAuthButtonHover(true)}  // Hover
          onMouseOut={() => setAuthButtonHover(false)}  // Hover bittiğinde
        >
          İki aşamalı kimlik doğrulama etkin değil!
        </button>
      </main>
    </div>
  );
};

export default UserSettings;

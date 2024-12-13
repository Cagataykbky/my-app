/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';

// Yeni Profil Modal Bileşeni
const ProfileComponent: React.FC = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg max-w-md mx-auto font-sans">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-purple-500"
        />
        <div>
          <h1 className="text-2xl font-bold">! Çağatay</h1>
          <p className="text-sm text-gray-400">37cato.ruined • Çitos</p>
        </div>
      </div>

      {/* Description */}
      <div className="bg-B-800 p-4 rounded-lg mb-6">
        <p className="text-sm">Full Stack Developer</p>
        <p className="text-sm">Web Developer</p>
        <a
          href="https://guns.loI/37cato"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          https://guns.lol/37cato
        </a>
      </div>

      {/* Roles Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Roller</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-700 text-xs px-2 py-1 rounded">Kurucu</span>
          <span className="bg-purple-700 text-xs px-2 py-1 rounded">Developer</span>
          <span className="bg-gray-700 text-xs px-2 py-1 rounded">Server Booster</span>
          <span className="bg-yellow-600 text-xs px-2 py-1 rounded">Üye</span>
          <span className="bg-red-600 text-xs px-2 py-1 rounded">Register Hammer</span>
        </div>
      </div>

      {/* Membership Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Şu Tarihten Beri Üye:</h2>
        <p className="text-sm">13 Ara 2021 • 5 Eki 2024</p>
      </div>

      {/* Connections Section */}
      <div>
        <h2 className="text-lg font-bold mb-2">Bağlantılar</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-blue-400 hover:underline"
            >
              <img
                src="https://via.placeholder.com/20"
                alt="Connection"
                className="w-5 h-5 rounded"
              />
              Çağataykbky
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-blue-400 hover:underline"
            >
              <img
                src="https://via.placeholder.com/20"
                alt="Connection"
                className="w-5 h-5 rounded"
              />
              Lachelline
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-blue-400 hover:underline"
            >
              <img
                src="https://via.placeholder.com/20"
                alt="Connection"
                className="w-5 h-5 rounded"
              />
              Çağatay
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-blue-400 hover:underline"
            >
              <img
                src="https://via.placeholder.com/20"
                alt="Connection"
                className="w-5 h-5 rounded"
              />
              ! ZephyR
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const HomeScreen: React.FC = () => {
  const [dots, setDots] = useState<JSX.Element[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    window.location.href = 'settings';
  };

  const handleFriendsClick = () => {
    window.location.href = 'friends';
  };

  const handleChatClick = () => {
    window.location.href = 'chat';
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newDots = [...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '10px',
            height: '10px',
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: 0.7,
          }}
        />
      ));
      setDots(newDots);
    }
  }, []);

  const buttonStyle = {
    base: {
      backgroundColor: '#303030',
      color: '#ffffff',
      border: 'none',
      padding: '10px',
      marginBottom: '10px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    hover: {
      backgroundColor: '#404040',
    },
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#181818' }}>
      {/* Sol Menü */}
      <div
        style={{
          width: '250px',
          backgroundColor: '#202020',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <h2 style={{ color: '#ffffff', fontSize: '18px', marginBottom: '20px' }}>Direkt Mesajlar</h2>
        <ul style={{ listStyleType: 'none', padding: 0, color: '#ccc' }}>
          <li>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 5px',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: '#303030',
                marginBottom: '10px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.hover.backgroundColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.base.backgroundColor)}
              onClick={() => setIsModalOpen(true)} // Modalı açan işlem
            >
              <img
                src="https://via.placeholder.com/560x414"
                alt="Profile"
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  marginRight: '10px',
                }}
              />
              <span style={{ color: '#ffffff' }}>! Çağatay</span>
            </div>
          </li>
        </ul>
        <button
          style={buttonStyle.base}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.hover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.base.backgroundColor)}
          onClick={handleClick}
        >
          Ayarlar
        </button>
        <button
          style={buttonStyle.base}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.hover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.base.backgroundColor)}
          onClick={handleFriendsClick}
        >
          Arkadaşlar
        </button>
        <button
          style={buttonStyle.base}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.hover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.base.backgroundColor)}
          onClick={handleChatClick}
        >
          Chat
        </button>
      </div>

      {/* Ana Sayfa Paneli */}
      <div
        style={{
          flex: 1,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <h1 style={{ color: '#ffffff', fontSize: '36px', textAlign: 'center' }}>Hoş geldin</h1>
        <h2 style={{ color: '#ffffff', fontSize: '24px', textAlign: 'center', marginBottom: '20px' }}>SMOOTHY</h2>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
          }}
        >
          {dots}
        </div>
      </div>

      {/* Profil Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              width: '500px',
              backgroundColor: '#000000',
              borderRadius: '10px',
              padding: '5px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ProfileComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;

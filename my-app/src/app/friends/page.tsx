import React from 'react';

const FriendsList: React.FC = () => {
  const friends = [
    { name: 'HelioS', status: 'online', activity: 'Werewolf: The Apocalypse - Earthblood Oynuyor' },
    { name: 'Onur', status: 'Rahatsız Etmeyin', activity: '' },
    { name: 'Lykia', status: 'Spotify dinliyor', activity: '' },
    { name: 'Eikō', status: 'Rahatsız Etmeyin', activity: '' },
    { name: 'Michael Kaiser', status: 'Spotify dinliyor', activity: '' },
  ];

  const nowActive = [
    {
      name: 'Lykia, Rio ve 5 kişi daha',
      activity: 'Spotify',
      details: 'az önce',
    },
    {
      name: 'Michael Kaiser, Zeyn ve 5 kişi daha',
      activity: 'Smoothy Anime & Manga',
      details: '1 dk önce',
    },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#121212', color: '#fff' }}>
      {/* Sol Bölüm */}
      <div
        style={{
          flex: 2,
          background: 'linear-gradient(to bottom, #3a3c40, #3a3c40, #3a3c40)',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        {/* Üst Sekmeler */}
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          {['Arkadaşlar', 'Çevrimiçi', 'Tümü', 'Bekleyen', 'Engellenen', 'Arkadaş Ekle'].map(
            (tab, index) => (
              <div
                key={index}
                style={{
                  marginRight: '10px',
                  padding: '10px 15px',
                  background: index === 5 ? '#3a3c40' : 'transparent',
                  color: index === 5 ? '#fff' : '#ccc',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {tab}
              </div>
            )
          )}
        </div>

        {/* Arama Çubuğu */}
        <input
          type="text"
          placeholder="Ara"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: 'none',
            borderRadius: '5px',
          }}
        />

        {/* Arkadaş Listesi */}
        <div>
          {friends.map((friend, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ccc',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <div>
                <div style={{ fontWeight: 'bold' }}>{friend.name}</div>
                <div style={{ fontSize: '12px', color: '#aaa' }}>{friend.activity}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sağ Bölüm */}
      <div style={{ flex: 1, padding: '20px', background: '#3a3c40' }}>
        <h3 style={{ marginBottom: '20px' }}>Şimdi Aktif</h3>
        {nowActive.map((active, index) => (
          <div
            key={index}
            style={{
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '5px',
              background: '#3a3c40',
            }}
          >
            <div style={{ fontWeight: 'bold' }}>{active.name}</div>
            <div style={{ fontSize: '12px', color: '#aaa' }}>{active.activity}</div>
            <div style={{ fontSize: '12px', color: '#888' }}>{active.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;

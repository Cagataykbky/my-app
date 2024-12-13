"use client";
import React, { useState } from "react";

const DiscordLikeLayout: React.FC = () => {
  const [channels] = useState([
    "# genel-sohbet",
    "# anime-sohbet",
    "# öneriler",
    "# film-sohbet",
  ]);
  const [users] = useState([
    "Çağatay (Developer)",
    "Vesley",
    "Lady of the Moon",
    "Hynox",
  ]);

  return (
    <div style={styles.container}>
      {/* Sunucu Simgeleri */}
      <div style={styles.serverSidebar}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.serverIcon,
              backgroundColor: index === 0 ? "#5865F2" : "#3a3c40",
            }}
          ></div>
        ))}
      </div>

      {/* Kanal Listesi */}
      <div style={styles.leftSidebar}>
        <h3 style={styles.channelTitle}>KANALLAR</h3>
        <ul style={styles.channelGroup}>
          {channels.map((channel, index) => (
            <li key={index} style={styles.channel}>
              {channel}
            </li>
          ))}
        </ul>
      </div>

      {/* Ana Alan */}
      <div style={styles.mainArea}>
        <div style={styles.header}># genel-sohbet</div>
        <div style={styles.messages}>
          <div style={styles.message}>
            <strong>Çağatay:</strong> Merhaba! Bu bir mesaj.
          </div>
          <div style={styles.message}>
            <strong>Vesley:</strong> sa
          </div>
        </div>
        <div style={styles.messageInput}>
          <input type="text" placeholder="Mesaj yaz..." style={styles.input} />
        </div>
      </div>

      {/* Sağ Menü */}
      <div style={styles.rightSidebar}>
        <h3 style={styles.userListTitle}>Kullanıcılar</h3>
        <ul style={styles.userList}>
          {users.map((user, index) => (
            <li key={index} style={styles.user}>
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#2b2d31",
    color: "#fff",
  },
  serverSidebar: {
    width: "80px",
    backgroundColor: "#232428",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    padding: "10px 0",
    gap: "10px",
  },
  serverIcon: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    transition: "transform 0.2s, background-color 0.2s",
    cursor: "pointer",
    ":hover": {
      transform: "scale(1.1)",
      backgroundColor: "#4a4d54",
    },
  },
  leftSidebar: {
    width: "240px",
    backgroundColor: "#232428",
    display: "flex",
    flexDirection: "column" as const,
    padding: "10px",
  },
  channelTitle: {
    fontSize: "14px",
    color: "#aaa",
    marginBottom: "10px",
  },
  channelGroup: {
    listStyle: "none",
    padding: 0,
  },
  channel: {
    fontSize: "14px",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "5px",
    backgroundColor: "#3a3c40",
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: "#4a4d54",
    },
  },
  mainArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#36393f",
  },
  header: {
    height: "60px",
    backgroundColor: "#2f3136",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    fontSize: "18px",
    borderBottom: "1px solid #2b2d31",
  },
  messages: {
    flex: 1,
    padding: "10px 20px",
    overflowY: "scroll" as const,
    animation: "fade-in 0.5s ease-in",
  },
  message: {
    padding: "5px 0",
    fontSize: "14px",
  },
  messageInput: {
    height: "60px",
    backgroundColor: "#40444b",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    borderTop: "1px solid #2b2d31",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    backgroundColor: "#40444b",
    color: "#fff",
    fontSize: "14px",
  },
  rightSidebar: {
    width: "240px",
    backgroundColor: "#232428",
    display: "flex",
    flexDirection: "column" as const,
    padding: "10px",
  },
  userListTitle: {
    fontSize: "14px",
    color: "#aaa",
    marginBottom: "10px",
  },
  userList: {
    listStyle: "none",
    padding: 0,
  },
  user: {
    fontSize: "14px",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "5px",
    backgroundColor: "#3a3c40",
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: "#4a4d54",
    },
  },
};

export default DiscordLikeLayout;

import { useEffect, useState } from "react";
import axios from "axios";


const User = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post(
        "http://localhost:8080/",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status) {
          setUsername(res.data.user);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={styles.center}>
        <p>Loading user details...</p>
      </div>
    );
  }

  if (!username) {
    return (
      <div style={styles.center}>
        <p>User not logged in</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Avatar */}
        <div style={styles.avatar}>
          {username.charAt(0).toUpperCase()}
        </div>

        {/* User Info */}
        <h2 style={styles.name}>{username}</h2>
        <p style={styles.role}>Retail Investor</p>

        <div style={styles.divider} />

        {/* Details */}
        <div style={styles.infoRow}>
          <span>User ID</span>
          <span>{username}</span>
        </div>

        <div style={styles.infoRow}>
          <span>Account Type</span>
          <span>Individual</span>
        </div>

        <div style={styles.infoRow}>
          <span>Status</span>
          <span style={{ color: "green" }}>Active</span>
        </div>

        {/* Logout */}
        <button
          style={styles.logoutBtn}
          onClick={async () => {
            await axios.post(
              "http://localhost:8080/logout",
              {},
              { withCredentials: true }
            );
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "60px",
  },
  card: {
    width: "360px",
    background: "#fff",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#387ed1",
    color: "#fff",
    fontSize: "32px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 15px",
  },
  name: {
    margin: 0,
  },
  role: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "20px",
  },
  divider: {
    height: "1px",
    background: "#eee",
    margin: "20px 0",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    marginBottom: "12px",
    color: "#444",
  },
  logoutBtn: {
    marginTop: "20px",
    width: "100%",
    padding: "10px",
    border: "none",
    background: "#e53935",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
  },
  center: {
    padding: "40px",
    textAlign: "center",
  },
};


export default User;

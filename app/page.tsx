export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}> COMING SOON! </h1>
      <p style={styles.subtitle}>Stay tuned!</p>
      <p style={styles.email}>
        Email me <a href="mailto:hello@taniagole.com">tania@taniagole.com</a>
      </p>
    </main>
  )
}

const styles = {
  main: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as const,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f5f5f5',
    padding: '0 20px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#555',
    marginBottom: '2rem',
  },
  email: {
    fontSize: '1rem',
    color: '#333',
  },
}

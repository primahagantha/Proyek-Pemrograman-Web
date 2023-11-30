import { useState } from 'react';
import { TextField, Button, LinearProgress, Snackbar } from '@mui/material';


const Contact = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [status, setStatus] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (nama && email && pesan) {
      setStatus('loading');

      const webhookURL = 'https://discord.com/api/webhooks/1174694156501782602/Ywrc_0MExWDNh9d7xsp-6odQGYOGW4g9sdukwSzBx5hiud4MkbNmahLNibJoXBuHBqws';

      const data = {
        embeds: [
          {
            title: 'Pesan Baru',
            color: 0x00ff00,
            fields: [
              {
                name: 'Nama',
                value: nama,
              },
              {
                name: 'Email',
                value: email,
              },
              {
                name: 'Pesan',
                value: pesan,
              },
            ],
          },
        ],
      };

      try {
        const response = await fetch(webhookURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setStatus('success');
          setSnackbarOpen(true);
        } else {
          setStatus('failed');
          setSnackbarOpen(true);
        }
      } catch (error) {
        setStatus('failed');
        setSnackbarOpen(true);
      }
    } else {
      setStatus('failed');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="container mt-5" id="contact">
      <h1 className="title">Kontak Kami</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          fullWidth
          margin="normal"
          variant="filled"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          variant="filled"
        />
        <TextField
          label="Pesan"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          fullWidth
          margin="normal"
          variant="filled"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Kirim
        </Button>
      </form>
      {status === 'loading' && <LinearProgress />}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar} message={status === 'success' ? 'Sukses dikirim!' : 'Gagal mengirim. Harap lengkapi semua kolom.'} />
    </div>
  );
};

export default Contact;

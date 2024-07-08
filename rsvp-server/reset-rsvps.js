require('dotenv').config();

const resetRsvps = async () => {
  const fetch = await import('node-fetch').then(mod => mod.default);

  const response = await fetch('http://localhost:5000/reset-rsvps', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ secret: process.env.RESET_SECRET }),
  });

  if (response.ok) {
    console.log('RSVPs have been reset');
  } else {
    const errorText = await response.text();
    console.log('Failed to reset RSVPs:', errorText);
  }
};

resetRsvps();

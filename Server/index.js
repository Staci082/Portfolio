import express from "express"
import axios from "axios"


const app = express();
const port = process.env.PORT;

app.use(express.json());


app.use(express.static('public'));

app.post('/verify-token', async (req, res) => {
  const { recaptchaToken } = req.body;
  const privatekey = process.env.PRIVATE_KEY;

  try {
    // Verify reCAPTCHA token with Google's server
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        secret: privatekey,
        response: recaptchaToken,
      },
    });

    const { success } = response.data;

    if (success) {

      console.log('Form Data:', req.body);

      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, message: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

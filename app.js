const app = (require('express'))();
const port = 4201;

const accountService = require('./accountService');

app.use('/', accountService);

// This defines a health check point for AWS
app.use('/health', (req, res) => {
  // Set the status to 200 and send "Success"
  res.status(200).send({
    success: true
  });
});

app.listen(port, () => {
  console.log(`Account Service listening on port ${port}`);
});
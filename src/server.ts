import app from './app';
import { config } from './config/env';

// Start the Express server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
import app from './app';
import syncDb from './sync-db';

const PORT = process.env.PORT || 4000;

function handleListening() {
  console.log(`LISTENING ON: http://localhost:${PORT}`);
}

syncDb().then(_ => {
  console.log('Sync Database!');
  app.listen(PORT, handleListening);
});

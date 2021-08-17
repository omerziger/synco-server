require('dotenv').config();
const server = require('./app');
const mongoose = require('mongoose');

const DBConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
};

mongoose
  .connect(
    process.env.DB_CONNECTION.replace(
      '<password>',
      process.env.DB_CLUSTER_PASSWORD
    ),
    DBConnectionOptions
  )
  .then(() => console.log('Server is integrated with MongoDB Cluster!'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`${process.env.NODE_ENV} server is listening on ${PORT}..`)
);

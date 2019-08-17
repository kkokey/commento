import models from './models';

export default () => {
  const options = {
    force: true
  };
  return models.sequelize.sync(options);
};

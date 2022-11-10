module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transactions", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Trransaction;
  };
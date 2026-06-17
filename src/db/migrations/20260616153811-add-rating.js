

export default{
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn("hotels","rating",{
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue: 0
    })
  },

  async down (queryInterface, Sequelize) {
   queryInterface.removeColumn("hotels","rating")
  }
};

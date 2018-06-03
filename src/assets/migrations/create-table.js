export default {
  async up(queryInterface, Sequelize) {
    return await queryInterface
      .createTable('<%= tableName %>', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },

        <% attributes.forEach(function(attribute) { %>
          <%= attribute.fieldName %>: {
            type: Sequelize.<%= attribute.dataFunction ? `${attribute.dataFunction.toUpperCase()}(Sequelize.${attribute.dataType.toUpperCase()})` : attribute.dataType.toUpperCase() %>
          },
        <% }) %>

        <%= createdAt %>: {
          allowNull: false,
          type: Sequelize.DATE
        },

        <%= updatedAt %>: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('<%= tableName %>');
  }
};

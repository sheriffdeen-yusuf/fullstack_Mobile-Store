export default (sequelize, DataTypes) => {
  const reviews = sequelize.define(
    "reviews",
    {
      rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      description: {
        type: DataTypes.TEXT,
        defaultValue: "No Review",
      },
    },
    { timestamps: false }
  );

  return reviews;
};

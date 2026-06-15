import e from "express"

export const app = e()


// Add this test route:
app.get("/test", (req, res) => {
    res.json({ message: "Server is working perfectly!" });
});


// seeders => to push some dummy data into our databse so we can play around the db

// users => 3 columns => name,age,email => father's name  => dec 2026 (father's name - remove)


// https://sequelize.org/docs/v7/cli/
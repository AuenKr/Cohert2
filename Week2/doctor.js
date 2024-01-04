const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`port: ${port}`);
});

const users = [
    {
        name: "John",
        kidneys: [
            {
                healthy: false,
            },
            {
                healthy: true,
            },
        ],
    },
];

app.get("/:username", (req, res) => {
    const { username } = req.params;
    const user = users.find((u) => username === u.name);
    if (user) {
        const noOfKidy = user.kidneys.length;
        const healthyKidy = user.kidneys.filter((k) => k.healthy === true);
        const noOfHealthyKidy = healthyKidy.length;
        const noOfUnhealthyKidy = noOfKidy - noOfHealthyKidy;
        res.json({
            noOfKidy,
            noOfHealthyKidy,
            noOfUnhealthyKidy,
        });
    } else {
        res.json({
            msg: `${username} doesn't exist`,
        });
    }
});

app.post("/:username", (req, res) => {
    const { username } = req.params;
    const { isHealthy } = req.body;
    const user = users.find((u) => username === u.name);
    if (user) {
        user.kidneys.push({ healthy: isHealthy });
        res.json({
            msg: "Added",
        });
    } else {
        res.json({
            msg: `${username} doesn't exist`,
        });
    }
});

app.put("/:username", (req, res) => {
    const { username } = req.params;
    const user = users.find((u) => username === u.name);
    if (user) {
        user.kidneys.forEach((e) => {
            e.healthy = true;
        });
        res.json({
            msg: "replaced on Kidneys",
        });
    } else {
        res.json({
            msg: `${username} doesn't exist`,
        });
    }
});

app.delete("/:username", (req, res) => {
    const { username } = req.params;
    const user = users.find((u) => username === u.name);
    if (user) {
        user.kidneys = user.kidneys.filter((k) => k.healthy === true);
        res.json({
            msg: "Removed all unhealthy kidneys",
        });
    } else {
        res.json({
            msg: `${username} doesn't exist`,
        });
    }
});

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { openApiSpec } from './openapispec';

const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "John doe" },
    { id: 2, name: "Jane doe" },
]

app.get('/', (req, res) => {
    return res.json({
        msg: "Server is good"
    })
})

app.get('/users', (req, res) => {
    const { name }: any = req.query;
    let filterUser;
    if (name) {
        filterUser = users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()))
    }
    if (!filterUser) {
        return res.json({
            users: users
        });
    }
    return res.json({
        filterUser: filterUser
    })
})

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.listen(8080, () => console.log("listening on port 8080"))
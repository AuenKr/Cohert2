import axios from "axios";

async function seedData(N: number) {
    let data = JSON.stringify({
        "problemId": 123,
        "userId": 1234,
        "code": "printf('hello World')",
        "language": "python"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/submit',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    while (N--) {
        await axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

seedData(10000);
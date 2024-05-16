import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './generated/rpc';
import { AddressBookServiceHandlers } from './generated/AddressBookService';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, '../rpc.proto'));

const personProto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const PERSONS = [
    {
        name: "harkirat",
        age: 45
    },
    {
        name: "raman",
        age: 45
    },
];

const handler: AddressBookServiceHandlers = {
    AddPerson: (call, callback) => {
        let person = {
            name: call.request.name,
            age: call.request.age
        }
        PERSONS.push(person);
        callback(null, person)
    },
    GetPersonByName: (call, callback) => {
        const name = call.request.name;
        const person = PERSONS.filter(person => person.name == name);
        if (!person.length) {
            callback({
                message: "No person found",
                name: "Not Found",
                code: 5
            });
        }
        callback(null, person[0]);
    }
}
// const app = express();
const server = new grpc.Server();

// app.use('/AddressBookService', addressrouter)
server.addService((personProto.AddressBookService).service, handler);


// app.listen(50051)
server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});
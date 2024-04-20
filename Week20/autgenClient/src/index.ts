import { DefaultService } from "../generated";

async function main() {
    const response = await DefaultService.getUsers("112")
    console.log(response);
}

main();
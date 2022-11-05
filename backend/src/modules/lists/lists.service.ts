import { List } from "./list.model";

export async function createList(name: string) {
    return List.query().insert({
        name
    })
}
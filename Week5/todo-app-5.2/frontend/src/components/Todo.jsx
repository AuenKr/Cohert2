import { MarkAsDoneBtn } from "./MarkAsReadBtn"

export function Todo({ title, description, completed, id }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <MarkAsDoneBtn initialValue={completed} id={id}></MarkAsDoneBtn>
        </div>

    )
}
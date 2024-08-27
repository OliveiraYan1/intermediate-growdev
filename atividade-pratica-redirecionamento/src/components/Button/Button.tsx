interface ButtonDefaultProps {
    title: string
}

export function Button(props: ButtonDefaultProps) {
    return (
        <button>{props.title}</button>
    )
}
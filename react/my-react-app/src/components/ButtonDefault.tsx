interface ButtonDefaultProps {
    title: string
}

export default function ButtonDefault (props: ButtonDefaultProps) {
    return (

        <button>{props.title}</button>
    )
}
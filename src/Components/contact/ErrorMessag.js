
function ErrorMessag({ message }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginTop: -10,
                marginBottom: 5
            }}
        >
            <span
                style={{
                    display: "flex",
                    color: "red",
                    fontSize: 12,
                    alignItems: "end",
                }}
            >
                {message}
            </span>
        </div>
    )
}
export default ErrorMessag;

export const ErrorMessagCenter = ({ message }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginTop: -10,
                marginBottom: 5
            }}
        >
            <span
                style={{
                    display: "flex",
                    color: "red",
                    fontSize: 12,
                    alignItems: "end",
                }}
            >
                {message}
            </span>
        </div>
    )
}
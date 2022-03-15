export default function RenderServerError(error) {
    return (
        <>
            <p className="help is-danger">
                {error}
            </p>
        </>
    )
}
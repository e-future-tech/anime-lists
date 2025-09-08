export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className="btn btn-dark w-100 my-4"
            disabled={disabled}
        >
            {children}
        </button>
    );
}

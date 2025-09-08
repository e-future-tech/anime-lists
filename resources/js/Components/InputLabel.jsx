export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className="text-uppercase"
        >
            {value ? value : children}
        </label>
    );
}

interface MessageErrorProps {
    message?: string;
}

const MessageError: React.FC<MessageErrorProps> = ({ message }) => {
    return <div className="text-sm text-red-600">{message}</div>;
};

export { MessageError };

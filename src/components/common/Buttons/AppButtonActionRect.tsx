import { Button } from "@nextui-org/button"

interface AppButtonActionRectProps {
    id: string;
    loading?: boolean;
    disabled?: boolean;
    backgroundColor?: "primary" | "default" | "secondary" | "success" | "warning" | "danger";
    style?: React.CSSProperties
    title: string;
    onClick: () => void;
}

const AppButtonActionRect = ({
    id,
    loading = false,
    disabled = false,
    backgroundColor = "primary",
    style = {
        "margin-top": "0px",
        "margin-bottom": "0px",
        "margin-right": "0px",
        "margin-left": "0px"
    },
    title,
    onClick
}: AppButtonActionRectProps
) => {
    return (
        <Button
            id={id}
            color={backgroundColor}
            size="sm"
            isLoading={loading}
            disabled={disabled}
            style={style}
            onClick={onClick} >
            {title}
        </Button>
    )
}

export default AppButtonActionRect;
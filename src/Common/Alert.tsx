import { CheckCircle, Info, AlertTriangle, XCircle, X } from "lucide-react";

type AlertType = "success" | "info" | "warning" | "error";

interface AlertProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
}

const Alert = ({ type, message, onClose }: AlertProps) => {
  const styles = {
    success: {
      bg: "bg-green-50",
      text: "text-green-700",
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
    },
    info: {
      bg: "bg-sky-50",
      text: "text-sky-700",
      icon: <Info className="w-5 h-5 text-sky-600" />,
    },
    warning: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      icon: <AlertTriangle className="w-5 h-5 text-orange-600" />,
    },
    error: {
      bg: "bg-red-50",
      text: "text-red-700",
      icon: <XCircle className="w-5 h-5 text-red-600" />,
    },
  };

  const { bg, text, icon } = styles[type];

  return (
    <div
      className={`flex items-center justify-between gap-4 px-5 py-4 rounded-lg ${bg} ${text}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <p className="text-sm font-medium">{message}</p>
      </div>

      {onClose && (
        <button onClick={onClose} className="opacity-60 hover:opacity-100">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;

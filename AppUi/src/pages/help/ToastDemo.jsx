import React from "react";
import { useDispatch } from "react-redux";
import { showToast } from "../../store/slices/toastSlice";

const ToastDemo = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Toast System Demo</h2>
      <button
        className="bg-gradient-success text-white px-4 py-2 rounded"
        onClick={() => dispatch(showToast({ message: "Success Toast!", type: "success" }))}
      >
        Success
      </button>
      <button
        className="bg-gradient-secondary text-white px-4 py-2 rounded"
        onClick={() => dispatch(showToast({ message: "Warning Toast!", type: "warning" }))}
      >
        Warning
      </button>
      <button
        className="bg-gradient-danger text-white px-4 py-2 rounded"
        onClick={() => dispatch(showToast({ message: "Error Toast!", type: "error" }))}
      >
        Error
      </button>
      <button
        className="bg-gradient-primary text-white px-4 py-2 rounded"
        onClick={() => dispatch(showToast({ message: "Info Toast!", type: "info" }))}
      >
        Info
      </button>
      <button
        className="bg-gradient-primary text-white px-4 py-2 rounded"
        onClick={() => dispatch(showToast({ message: "Custom Duration Toast! (7s)", type: "info", duration: 7000 }))}
      >
        Custom Duration (7s)
      </button>
    </div>
  );
};

export default ToastDemo;

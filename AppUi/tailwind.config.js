export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // blue-600
        "primary-foreground": "#fff",
        secondary: "#e5e7eb", // gray-200
        "secondary-foreground": "#1f2937", // gray-800
        destructive: "#dc2626", // red-600
        "destructive-foreground": "#fff",
        "game-success": "#22c55e", // green-500
        "game-disabled": "#9ca3af", // gray-400
        accent: "#fbbf24", // amber-400
        "accent-foreground": "#fff",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #2563eb 0%, #1e40af 100%)",
        "gradient-secondary":
          "linear-gradient(90deg, #e5e7eb 0%, #d1d5db 100%)",
        "gradient-danger": "linear-gradient(90deg, #dc2626 0%, #b91c1c 100%)",
        "gradient-success": "linear-gradient(90deg, #22c55e 0%, #16a34a 100%)",
      },
      boxShadow: {
        "glow-primary": "0 0 10px 2px #2563eb55",
        "glow-secondary": "0 0 10px 2px #e5e7eb55",
        "glow-danger": "0 0 10px 2px #dc262655",
      },
    },
  },
  plugins: [],
};

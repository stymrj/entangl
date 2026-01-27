import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        coral: {
          DEFAULT: "hsl(var(--coral))",
          light: "hsl(var(--coral-light))",
          dark: "hsl(var(--coral-dark))",
        },
        pink: "hsl(var(--pink))",
        purple: {
          DEFAULT: "hsl(var(--purple))",
          light: "hsl(var(--purple-light))",
        },
        cream: {
          DEFAULT: "hsl(var(--cream))",
          dark: "hsl(var(--cream-dark))",
        },
        navy: {
          DEFAULT: "hsl(var(--navy))",
          light: "hsl(var(--navy-light))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "float-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.8" },
          "25%": { transform: "translate(40px, -30px) scale(1.1)", opacity: "1" },
          "50%": { transform: "translate(-20px, 20px) scale(1.2)", opacity: "0.9" },
          "75%": { transform: "translate(30px, 10px) scale(1.05)", opacity: "1" },
        },
        "float-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.7" },
          "25%": { transform: "translate(-30px, 25px) scale(1.15)", opacity: "0.9" },
          "50%": { transform: "translate(25px, -35px) scale(1.1)", opacity: "1" },
          "75%": { transform: "translate(-15px, -20px) scale(1.05)", opacity: "0.8" },
        },
        "float-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.75" },
          "25%": { transform: "translate(-25px, -20px) scale(1.2)", opacity: "0.85" },
          "50%": { transform: "translate(35px, 15px) scale(1.15)", opacity: "1" },
          "75%": { transform: "translate(10px, -30px) scale(1.08)", opacity: "0.9" },
        },
        "float-4": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.8" },
          "25%": { transform: "translate(20px, 35px) scale(1.12)", opacity: "0.95" },
          "50%": { transform: "translate(-30px, -25px) scale(1.18)", opacity: "0.85" },
          "75%": { transform: "translate(-10px, 20px) scale(1.1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "float-1": "float-1 15s ease-in-out infinite",
        "float-2": "float-2 18s ease-in-out infinite",
        "float-3": "float-3 20s ease-in-out infinite",
        "float-4": "float-4 16s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-soft': 'var(--gradient-soft)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

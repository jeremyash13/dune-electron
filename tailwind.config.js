module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        jost: "Jost",
        'euclid-reg': "Euclid Triangle Regular",
        'euclid-semibold': "Euclid Triangle SemiBold",
      },
      inset: {
        "1/2": "50%",
        "6": "2rem",
        "48": "10.5rem",
        "128px": "128px",
      },
      colors: {
        "dark-blue": "#111727",
        "horizon-gray": "#242631",
        "horizon-black": "#111214",
        "queue-window": "rgb(25, 26, 32)",
        // "horizon-black": "#1C1E26",
        "horizon-red": "#ff0011",
      },
      width: {
        "1/100": "1%",
        "95/100": "95%",
        "72": "18rem",
        "80": "20rem",
      },
      height: {
        "1/2": "50%",
        "70%": "70%",
        "5px": "5px",
        "7px": "7px",
        "max-content": "max-content",
      },
      translate: {
        "1": ".15rem",
        "120%":"120%"
      },
      padding: {
        "full": "100%",
      },
    },
  },
  variants: {
    opacity: ["group-hover"],
    "z-index": ["group-hover"]
  },
  plugins: [],
};

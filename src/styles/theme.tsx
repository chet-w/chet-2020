export default {
  screens: {
    // max-widths in pixels
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  colors: {
    light: {
      primary: {
        tint: "#00c0fc",
        base: "#00a1f7",
        shade: "#006aef",
        gradientY: "linear-gradient(#00c0fc, #006aef)",
        gradientX: "linear-gradient(to left, #00c0fc, #006aef)"
      },
      secondary: {
        tint: "green",
        base: "green",
        shade: "green"
      },
      neutrals: {
        darker: "#111",
        dark: "#666",
        base: "#aaa",
        light: "#ccc",
        lighter: "#fff"
      }
    },
    dark: {
      primary: {
        tint: "red",
        base: "red",
        shade: "red",
      },
      secondary: {
        tint: "green",
        base: "green",
        shade: "green"
      },
      neutrals: {
        darker: "#111",
        dark: "#333",
        base: "#777",
        light: "#aaa",
        lighter: "#ccc"
      }
    }
  },
};

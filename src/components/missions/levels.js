export const levels = [
  {
    id: 1,
    level: 1,
    title: "The Lost Signal",
    story:
      "An alien named Zax has lost connection with their mothership! They need to position themselves perfectly to establish a communication link. Can you help Zax reach their UFO?",
    hint: "Try using properties that control both horizontal and vertical positioning",
    solution: {
      "justify-content": "center",
      "align-items": "center",
    },
    propertiesToTry: ["justify-content", "align-items"],
    validOptions: {
      "justify-content": [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
      ],
      "align-items": [
        "flex-start",
        "center",
        "flex-end",
        "stretch",
        "baseline",
      ],
    },
  },
  {
    id: 2,
    level: 2,
    title: "Cosmic Elevation",
    story:
      "The alien crew spotted their ship up in the cosmic winds! They need your flexbox expertise to reach the correct height.",
    hint: "You only need to use justify-content for this level - try to reach the UFO horizontally first!",
    solution: {
      "justify-content": "flex-end",
    },
    propertiesToTry: ["justify-content"],
    validOptions: {
      "justify-content": [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
      ],
    },
  },
  {
    id: 3,
    level: 3,
    title: "Alien Alignment",
    story: "The aliens need to align in a straight line for teleportation!",
    hint: "Use align-items to adjust vertical positioning.",
    solution: {
      "align-items": "flex-end",
    },
    propertiesToTry: ["align-items"],
    validOptions: {
      "align-items": [
        "flex-start",
        "center",
        "flex-end",
        "stretch",
        "baseline",
      ],
    },
  },
  {
    id: 4,
    level: 4,
    title: "Ship Docking",
    story: "The ship has multiple docking stations! Align the aliens correctly.",
    hint: "Use both justify-content and align-items for full control.",
    solution: {
      "justify-content": "center",
      "align-items": "flex-start",
    },
    propertiesToTry: ["justify-content", "align-items"],
    validOptions: {
      "justify-content": [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
      ],
      "align-items": [
        "flex-start",
        "center",
        "flex-end",
        "stretch",
        "baseline",
      ],
    },
  },
  {
    id: 5,
    level: 5,
    title: "Vertical Voyage",
    story: "Aliens must align in a vertical column for smooth warp travel!",
    hint: "Use flex-direction to switch to a column layout.",
    solution: {
      "flex-direction": "column",
      "align-items": "center",
    },
    propertiesToTry: ["flex-direction", "align-items"],
    validOptions: {
      "flex-direction": ["row", "column", "row-reverse", "column-reverse"],
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
  },
  {
    id: 6,
    level: 6,
    title: "Reverse Gravity",
    story: "Aliens need to realign themselves as gravity shifts!",
    hint: "Use flex-direction to reverse row order.",
    solution: {
      "flex-direction": "row-reverse",
    },
    propertiesToTry: ["flex-direction"],
    validOptions: {
      "flex-direction": ["row", "column", "row-reverse", "column-reverse"],
    },
  },
  // Additional levels up to 15...
];

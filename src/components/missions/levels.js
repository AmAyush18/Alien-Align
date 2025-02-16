export const levels = [
  {
    id: 1,
    level: 1,
    title: "The Lost Signal",
    story: "An alien named Zax has lost connection with their mothership! They need to position themselves perfectly to establish a communication link. Can you help Zax reach their UFO?",
    hint: "Try using properties that control both horizontal and vertical positioning",
    solution: {
      "justify-content": "center",
      "align-items": "center",
    },
    propertiesToTry: ["justify-content", "align-items"],
    validOptions: {
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
  },
  {
    id: 2,
    level: 2,
    title: "Cosmic Elevation",
    story: "The alien crew spotted their ship up in the cosmic winds! They need your flexbox expertise to reach the correct height.",
    hint: "You only need to use justify-content for this level - try to reach the UFO horizontally first!",
    solution: {
      "justify-content": "flex-end",
    },
    propertiesToTry: ["justify-content"],
    validOptions: {
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
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
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
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
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
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
  {
    id: 7,
    level: 7,
    title: "Space Distribution",
    story: "The aliens need equal space between them for their energy fields!",
    hint: "Use justify-content to create equal spacing between elements.",
    solution: {
      "justify-content": "space-between",
    },
    propertiesToTry: ["justify-content"],
    validOptions: {
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
    },
  },
  {
    id: 8,
    level: 8,
    title: "Orbital Alignment",
    story: "The aliens must maintain equal space around them in their orbital positions!",
    hint: "Use justify-content to create equal spacing around elements.",
    solution: {
      "justify-content": "space-around",
    },
    propertiesToTry: ["justify-content"],
    validOptions: {
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
    },
  },
  {
    id: 9,
    level: 9,
    title: "Vertical Reversal",
    story: "The aliens need to flip their formation upside down!",
    hint: "Use flex-direction to reverse the column order.",
    solution: {
      "flex-direction": "column-reverse",
      "justify-content": "center",
    },
    propertiesToTry: ["flex-direction", "justify-content"],
    validOptions: {
      "flex-direction": ["row", "column", "row-reverse", "column-reverse"],
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
    },
  },
  {
    id: 10,
    level: 10,
    title: "Baseline Synchronization",
    story: "The aliens must align their communication devices at the baseline!",
    hint: "Use align-items to match the baseline of elements.",
    solution: {
      "align-items": "baseline",
      "justify-content": "center",
    },
    propertiesToTry: ["align-items", "justify-content"],
    validOptions: {
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
    },
  },
  {
    id: 11,
    level: 11,
    title: "Flex Flow Challenge",
    story: "The mothership requires a specific flow pattern for entry!",
    hint: "Combine flex-direction and align-items for precise positioning.",
    solution: {
      "flex-direction": "column",
      "align-items": "flex-end",
    },
    propertiesToTry: ["flex-direction", "align-items"],
    validOptions: {
      "flex-direction": ["row", "column", "row-reverse", "column-reverse"],
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
  },
  {
    id: 12,
    level: 12,
    title: "Stretch Formation",
    story: "The aliens need to stretch to fill the available space!",
    hint: "Use align-items to make elements fill the container height.",
    solution: {
      "align-items": "stretch",
      "justify-content": "center",
    },
    propertiesToTry: ["align-items", "justify-content"],
    validOptions: {
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
    },
  },
  {
    id: 13,
    level: 13,
    title: "Diagonal Descent",
    story: "Guide the aliens in a diagonal pattern to their ship!",
    hint: "Combine justify-content and align-items for diagonal alignment.",
    solution: {
      "justify-content": "flex-end",
      "align-items": "flex-end",
    },
    propertiesToTry: ["justify-content", "align-items"],
    validOptions: {
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
  },
  {
    id: 14,
    level: 14,
    title: "Reverse Column Spacing",
    story: "The aliens need to maintain specific spacing in a reversed column!",
    hint: "Use flex-direction and justify-content together.",
    solution: {
      "flex-direction": "column-reverse",
      "justify-content": "space-around",
    },
    propertiesToTry: ["flex-direction", "justify-content"],
    validOptions: {
      "flex-direction": ["row", "column", "row-reverse", "column-reverse"],
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
    },
  },
  {
    id: 15,
    level: 15,
    title: "Symmetric Formation",
    story: "Create a perfectly symmetric alien formation!",
    hint: "Use multiple properties to achieve perfect symmetry.",
    solution: {
      "flex-direction": "row",
      "justify-content": "space-around",
      "align-items": "center",
    },
    propertiesToTry: ["flex-direction", "justify-content", "align-items"],
    validOptions: {
      "flex-direction": ["row", "column", "row-reverse", "column-reverse"],
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
  },
  {
    id: 16,
    level: 16,
    title: "Complex Navigation",
    story: "Guide multiple aliens through a complex docking pattern!",
    hint: "Combine all your flexbox knowledge for this challenge.",
    solution: {
      "flex-direction": "column",
      "justify-content": "space-between",
      "align-items": "flex-end",
    },
    propertiesToTry: ["flex-direction", "justify-content", "align-items"],
    validOptions: {
      "flex-direction": ["row", "column", "row-reverse", "column-reverse"],
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
  },
  {
    id: 17,
    level: 17,
    title: "Wormhole Challenge",
    story: "The aliens must align perfectly to enter the wormhole!",
    hint: "Use flex-direction and spacing properties strategically.",
    solution: {
      "flex-direction": "row-reverse",
      "justify-content": "space-around",
      "align-items": "center",
    },
    propertiesToTry: ["flex-direction", "justify-content", "align-items"],
    validOptions: {
      "flex-direction": ["row", "column", "row-reverse", "column-reverse"],
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
  },
  {
    id: 18,
    level: 18,
    title: "Quantum Alignment",
    story: "Position the aliens in a quantum-stable configuration!",
    hint: "Master all flexbox properties for perfect quantum alignment.",
    solution: {
      "flex-direction": "column-reverse",
      "justify-content": "space-between",
      "align-items": "center",
    },
    propertiesToTry: ["flex-direction", "justify-content", "align-items"],
    validOptions: {
      "flex-direction": ["row", "column", "row-reverse", "column-reverse"],
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
  },
  {
    id: 19,
    level: 19,
    title: "Hyperspace Junction",
    story: "Guide the aliens through a complex hyperspace junction!",
    hint: "Use advanced combinations of flex properties.",
    solution: {
      "flex-direction": "row-reverse",
      "justify-content": "space-between",
      "align-items": "flex-start",
    },
    propertiesToTry: ["flex-direction", "justify-content", "align-items"],
    validOptions: {
      "flex-direction": ["row", "column", "row-reverse", "column-reverse"],
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
  },
  {
    id: 20,
    level: 20,
    title: "Master of Space",
    story: "Prove your mastery of alien positioning in this final challenge!",
    hint: "Use everything you've learned about flexbox for the ultimate test.",
    solution: {
      "flex-direction": "column",
      "justify-content": "space-around",
      "align-items": "flex-end",
    },
    propertiesToTry: ["flex-direction", "justify-content", "align-items"],
    validOptions: {
      "flex-direction": ["row", "column", "row-reverse", "column-reverse"],
      "justify-content": ["flex-start", "center", "flex-end", "space-between", "space-around"],
      "align-items": ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
  },
    {
      id: 21,
      level: 21,
      "title": "Galactic Relay",
      "story": "The aliens need to position themselves in a perfect relay line to transmit signals across the galaxy.",
      "hint": "Adjust the horizontal positioning to create equal gaps between the aliens.",
      "solution": {
        "property": "justify-content",
        "value": "space-evenly"
      },
      "valid_options": [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-evenly",
        "space-around"
      ]
    },
];
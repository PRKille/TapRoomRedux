let initialState = {
  showTapRoom: true,
  selectedKeg: {},
  tapList: {
    "1": {
      name: "Ranier",
      brand: "Ranier",
      price: "$3",
      abv: "4.6%",
      inventory: 89,
      id: "1"
    },
    "2": {
      name: "Old Rasputin Russian Imperial Stout",
      brand: "North Coast Brewing Co",
      price: "$6",
      abv: "9.0%",
      inventory: 24,
      id: "2"
    },
    "3": {
      name: "ESB English Ale",
      brand: "Ferment",
      price: "$6",
      abv: "5.4",
      inventory: 12,
      id: "3"
    }
  }
}
export default initialState;
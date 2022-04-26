const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Pixelmech Warriors";
const description = "Pixelmech Warriors is a collection of 750 pieces on the NEAR Blockchain.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "PMW0",
  seller_fee_basis_points: 600, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://pixelmechwarriors.nearfrontier.online/",
  creators: [
    {
      address: "pixelmechwarriors.near",
      share: 600,
    },
    {
      address: "offseason.near",
      share: 200,
    },
    {
      address: "shakiev.near",
      share: 600,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 300,
    layersOrder: [
      { name: "Background" },
      { name: "Chest" },
      { name: "Left Leg" },
      { name: "Right Leg" },
      { name: "Left Arm" },
      { name: "Right Arm" },
      { name: "Pilot" },
      { name: "Regiment Trait" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};

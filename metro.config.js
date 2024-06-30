// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  "fbx",
  "glb",
  "gltf",
  "png",
  "jpg",
  "jpeg",
  "obj",
  "mtl",
  "ttf"
);

module.exports = config;

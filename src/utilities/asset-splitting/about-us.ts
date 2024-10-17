const assetModulePaths = import.meta.glob('../../assets/target/about-us/**', { as: 'url', eager: true });
export default assetModulePaths;

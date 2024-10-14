const assetModulePaths = import.meta.glob('../../assets/target/common/**', { as: 'url', eager: true });
export default assetModulePaths;

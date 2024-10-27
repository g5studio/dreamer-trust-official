const assetModulePaths = import.meta.glob('../../assets/target/blog/**', { as: 'url', eager: true });
export default assetModulePaths;

const assetModulePaths = import.meta.glob('../../assets/target/icon/**', { as: 'url', eager: true });
export default assetModulePaths;

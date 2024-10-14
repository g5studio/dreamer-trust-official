const assetModulePaths = import.meta.glob('../../assets/target/home/**', { as: 'url', eager: true });
export default assetModulePaths;

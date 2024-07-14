const assetModulePaths = import.meta.glob('../../assets/target/shared/**', { as: 'url', eager: true });
export default assetModulePaths;

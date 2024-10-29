const assetModulePaths = import.meta.glob('../../assets/target/solutions/**', { as: 'url', eager: true });
export default assetModulePaths;

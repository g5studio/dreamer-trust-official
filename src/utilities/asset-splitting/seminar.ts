const assetModulePaths = import.meta.glob('../../assets/target/seminar/**', { as: 'url', eager: true });
export default assetModulePaths;

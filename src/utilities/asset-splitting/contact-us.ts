const assetModulePaths = import.meta.glob('../../assets/target/contact-us/**', { as: 'url', eager: true });
export default assetModulePaths;

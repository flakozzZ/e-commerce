export function createSvgMap() {
    function getSvgNameFromPath(path: any) {
        const pathSplit = path.split('/');
        const fileName = pathSplit[pathSplit.length - 1] || '';
        const svgNameIcon: string = fileName.replace('.svg', '');

        return svgNameIcon;
    }


    const modules: Record<string, any> = import.meta.glob('@/shared/assets/icons/**/*.svg', {
        import: 'default',
        eager: true,
    })
    const svgMap = new Map();

    Object.keys(modules).forEach((path) => {
        const svgName = getSvgNameFromPath(path);
        svgMap.set(svgName, modules[path]);
    });

    return svgMap;
}
/* eslint-disable */
function defaultTemplate({ template }, _, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] })
  const IconComponentName = componentName.name.slice(3)

  return typeScriptTpl.ast`
      import { SVGAttributes } from 'react';
      
      interface IconProps extends SVGAttributes<SVGElement> {
        size?: 12 | 16 | 20 | 24 | 32 | 40
        fillColor?: string
      }
      export const ${IconComponentName} = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
        return ${jsx}
      }
    `
}

module.exports = defaultTemplate

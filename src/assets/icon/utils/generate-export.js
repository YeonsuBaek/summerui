/* eslint-disable */
const fs = require('fs')
const path = require('path')

const defaultPath = path.join(__dirname, '../')
const iconFiles = fs.readdirSync(path.join(defaultPath, 'generated')).filter((file) => file.includes('tsx'))

const generatedCodes = [
  iconFiles
    .map((iconFile) => {
      const fileName = iconFile.split('.')[0]
      return `export { ${fileName} as ${fileName}Icon } from './generated/${fileName}';`
    })
    .join('\n'),
]

fs.writeFile(path.join(defaultPath, 'index.tsx'), generatedCodes.join('\n'), (error) => {
  if (error) {
    throw error
  }

  console.log('Saved successfully🎉')
})

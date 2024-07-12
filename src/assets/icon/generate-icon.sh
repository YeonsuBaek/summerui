cd svgs 
npx @svgr/cli@5.5.0 --template ../utils/svgr-cli.template.js --config-file ../utils/.svgrrc *.svg --out-dir ../generated --ext tsx
cd ../utils 
node generate-export.js 
cd ../ && prettier --write .
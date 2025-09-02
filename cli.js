#!/usr/bin/env node

const { input, select } = require('@inquirer/prompts');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

async function main() {

  console.log( 
    `
    ***  ***      ***       ***      *******
    ***  ****    ****    *********   *********
    ***  *****  *****    ***   ***   ***    **
    ***  ************    ***   ***   ********
    ***  ***  **  ***    ***   ***   *******
    ***  ***      ***    *********   ***
    ***  ***      ***       ***      ***  (by @likeur)
    ` 
);
  console.log('✨ Welcome to imop (image optimizer): the image optimization tool!');

  
   const argv = yargs(process.argv.slice(2))
    .option('jpeg', {
      alias: 'j',
      type: 'boolean',
      description: 'Optimize images to JPEG format'
    })
    .option('png', {
      alias: 'p',
      type: 'boolean',
      description: 'Optimize images to PNG format'
    })
    .option('webp', {
      alias: 'w',
      type: 'boolean',
      description: 'Optimize images to WebP format'
    })
    .option('input', {
      alias: 'i',
      type: 'string',
      description: 'Input directory path containing images to optimize'
    })
    .option('output', {
      alias: 'o',
      type: 'string',
      description: 'Output directory path for optimized images'
    })
    .help()
    .argv;
  
   try {
    let sourceDir, outputDir, format;

    if (argv.input) {
      sourceDir = argv.input;
    } else {
      sourceDir = await input({
        message: 'What is the path of the folder containing the images to optimize?',
        default: './images'
      });
    }

    if (argv.output) {
      outputDir = argv.output;
    } else {
      outputDir = await input({
        message: 'What is the name of the folder for the optimized images?',
        default: './optimized-images'
      });
    }

    if (argv.jpeg) {
      format = 'jpeg';
    } else if (argv.png) {
      format = 'png';
    } else if (argv.webp) {
      format = 'webp';
    } else {
      format = await select({
        message: 'What output image format do you want?',
        choices: [
          { value: 'jpeg', name: 'JPEG (perfect for photos)' },
          { value: 'png', name: 'PNG (ideal for graphics with transparency)' },
          { value: 'webp', name: 'WebP (modern and highly compressed format)' },
        ],
      });
    }

    if (!fs.existsSync(sourceDir)) {
      console.error(`❌ Error: The source folder "${sourceDir}" does not exist.`);
      process.exit(1);
    }

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const files = fs.readdirSync(sourceDir);
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });

    if (imageFiles.length === 0) {
      console.log('🖼️  No valid images found in the source folder. Operation canceled.');
      return;
    }

    console.log(`\n⏳ Optimizing ${imageFiles.length} images...`);

    for (const file of imageFiles) {
      const inputPath = path.join(sourceDir, file);
      const outputFilename = `${path.parse(file).name}.${format}`;
      const outputPath = path.join(outputDir, outputFilename);

      await sharp(inputPath)
        .toFormat(format, { quality: 80 })
        .toFile(outputPath);

      console.log(`✅ ${file} optimized and saved as ${outputFilename}`);
    }

    console.log('\n🎉 Operation complete! All images have been optimized.');

  } catch (error) {
    console.error('❌ An error occurred:', error);
  }
}

main();
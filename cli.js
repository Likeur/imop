#!/usr/bin/env node

const { input, select } = require('@inquirer/prompts');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

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
  console.log('✨ Bienvenue dans imop(image optimizer): l\'outil d\'optimisation d\'images !');

  try {
    const sourceDir = await input({
      message: 'Quel est le chemin du dossier contenant les images à optimiser ?',
      default: './images'
    });

    const outputDir = await input({
      message: 'Quel est le nom du dossier pour les images optimisées ?',
      default: './optimized-images'
    });

    const format = await select({
      message: 'Quel format d\'image de sortie souhaitez-vous ?',
      choices: [
        { value: 'jpeg', name: 'JPEG (parfait pour les photos)' },
        { value: 'png', name: 'PNG (idéal pour les graphiques avec transparence)' },
        { value: 'webp', name: 'WebP (format moderne et très compressé)' },
      ],
    });

    if (!fs.existsSync(sourceDir)) {
      console.error(`❌ Erreur : Le dossier source "${sourceDir}" n'existe pas.`);
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
      console.log('🖼️  Aucune image valide trouvée dans le dossier source. Opération annulée.');
      return;
    }

    console.log(`\n⏳ Optimisation de ${imageFiles.length} images...`);

    for (const file of imageFiles) {
      const inputPath = path.join(sourceDir, file);
      const outputFilename = `${path.parse(file).name}.${format}`;
      const outputPath = path.join(outputDir, outputFilename);

      await sharp(inputPath)
        .toFormat(format, { quality: 80 })
        .toFile(outputPath);

      console.log(`✅ ${file} optimisée et sauvegardée en tant que ${outputFilename}`);
    }

    console.log('\n🎉 Opération terminée ! Toutes les images ont été optimisées.');

  } catch (error) {
    console.error('❌ Une erreur est survenue :', error);
  }
}

main();
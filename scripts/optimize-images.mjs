import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const outputDir = 'public/images/optimized';

// Ensure the optimized directory exists
await fs.mkdir(outputDir, { recursive: true });

const images = [
  { input: 'public/images/case-study/solutions-hero.png', output: 'solutions-hero.webp', width: 1920 },
  { input: 'public/images/case-study/solutions-hero2.png', output: 'solutions-hero2.webp', width: 1920 },
  { input: 'public/images/about/our-story.png', output: 'our-story.webp', width: 1400 },
  { input: 'public/images/landing/nolytech-intro.png', output: 'nolytech-intro.webp', width: 1400 },
  { input: 'public/images/services/service-explorer-bg.png', output: 'service-explorer-bg.webp', width: 1920 },
  { input: 'public/images/services/network-strategy.png', output: 'network-strategy.webp', width: 1200 },
  { input: 'public/images/services/ai-automation.png', output: 'ai-automation.webp', width: 1200 },
  { input: 'public/images/about/about-section-bg.png', output: 'about-section-bg.webp', width: 1920 },
  { input: 'public/images/services/web-mobile.png', output: 'web-mobile.webp', width: 1200 },
  { input: 'public/images/services/software-erp.png', output: 'software-erp.webp', width: 1200 },
  { input: 'public/images/services/cloud-data.png', output: 'cloud-data.webp', width: 1200 },
  { input: 'public/images/about/p1.png', output: 'p1.webp', width: 1000 },
  { input: 'public/images/about/hero.png', output: 'hero.webp', width: 1920 },
  { input: 'public/images/about/hero2.png', output: 'hero2.webp', width: 1920 },
  { input: 'public/images/image.png', output: 'image.webp', width: 1200 },
  { input: 'public/images/main-slider/slider2/sm-pic1.png', output: 'sm-pic1.webp', width: 800 },
  { input: 'public/images/main-slider/slider2/sm-pic2.png', output: 'sm-pic2.webp', width: 800 }
];

for (const image of images) {
  const outputPath = path.join(outputDir, image.output);

  try {
    await sharp(image.input)
      .resize({
        width: image.width,
        withoutEnlargement: true,
      })
      .webp({
        quality: 82,
      })
      .toFile(outputPath);

    console.log(`✅ Optimized: ${image.input} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Failed to process ${image.input}:`, error.message);
  }
}

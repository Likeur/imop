# 🖼️ imop - Image Optimizer

**imop** is a versatile command-line tool for optimizing and converting images. Built with Node.js, it offers both an interactive prompt and command-line arguments to make image optimization fast and efficient.

### ✨ Features

  * **Batch Image Optimization:** Process multiple images in a single run.
  * **Format Conversion:** Easily convert images to **JPEG**, **PNG**, or **WebP**.
  * **Interactive Mode:** A guided, step-by-step process for optimizing your images.
  * **Command-Line Arguments:** Quickly run optimizations directly from your terminal.
  * **Quality Control:** Optimizes images with a default quality setting of 80 to balance file size and visual fidelity.

-----

### 🚀 Getting Started

#### Prerequisites

Make sure you have Node.js installed on your system.

#### Installation

```bash
npm install -g imop
```
or if you prefer using npx:
```bash
npx imop
```
note that all the arguments still available when you use npx because it gonna download it temporary on your computer.

#### Usage

**imop** can be used in many: via interactive prompts or with command-line arguments.

-----

### 🖥️ Interactive Mode

Simply run the script without any arguments to start the interactive mode. The tool will ask you for the input directory, output directory, and the desired output format.

```bash
imop
```

You'll be guided through these prompts:

  * `What is the path of the folder containing the images to optimize?`
  * `What is the name of the folder for the optimized images?`
  * `What output image format do you want?`

-----

### ⚙️ Command-Line Mode

For a faster workflow, you can specify all your options directly in the command. This is especially useful for scripting or repetitive tasks.

#### Syntax

```bash
imop [options]
```

#### Options

| Option | Alias | Description | Example |
| :--- | :--- | :--- | :--- |
| `--jpeg` | `-j` | Optimize images to **JPEG** format. | `imop.js --jpeg` |
| `--png` | `-p` | Optimize images to **PNG** format. | `imop.js --png` |
| `--webp` | `-w` | Optimize images to **WebP** format. | `imop.js --webp` |
| `--input` | `-i` | Specify the **input directory** containing the source images. | `imop.js --input ./my-photos` |
| `--output` | `-o` | Specify the **output directory** for the optimized images. | `imop.js --output ./compressed-images` |

#### Examples

**Optimize all images to WebP format:**

```bash
imop --webp
```

**Convert images from one folder to another in JPEG format:**

```bash
imop --jpeg --input ./source-images --output ./optimized-jpegs
```

**Use a combination of options with short aliases:**

```bash
imop -w -i ./photos -o ./output-folder
```

-----

### 📝 Notes

  * **Supported Formats:** The tool automatically detects and processes `.jpg`, `.jpeg`, `.png`, `.gif`, and `.webp` files from the source directory.
  * **Output Directory:** If the specified output directory does not exist, **imop** will create it for you.
  * **Default Quality:** All images are optimized with a quality setting of 80 to ensure a good balance between compression and visual quality.

coded with love by @likeur
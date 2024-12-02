const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'src'); // Change 'source' to your source directory
const destDir = path.join(__dirname, 'dist'); // Change 'destination' to your target directory

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

// Function to copy files
function copyFiles(src, dest) {
    fs.readdir(src, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err}`);
            return;
        }

        files.forEach(file => {
            const srcFile = path.join(src, file);
            const destFile = path.join(dest, file);

            fs.stat(srcFile, (err, stat) => {
                if (err) {
                    console.error(`Error stating file: ${err}`);
                    return;
                }

                // Check if the file is a directory
                if (stat.isDirectory()) {
                    // Recursively copy the directory
                    copyFiles(srcFile, destFile);
                } else if (file.endsWith('.html') || file.endsWith('.css')) {
                    // Copy HTML and CSS files
                    fs.copyFile(srcFile, destFile, (err) => {
                        if (err) {
                            console.error(`Error copying file: ${err}`);
                        } else {
                            console.log(`Copied: ${srcFile} to ${destFile}`);
                        }
                    });
                }
            });
        });
    });
}

// Start the copying process
copyFiles(sourceDir, destDir);
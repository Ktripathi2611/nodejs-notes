const fs = require('fs');

const largeText = 'This is a large amount of text. '.repeat(10000); // Generate large text

// 1. Synchronous Write (fs.writeFileSync)
console.time('Synchronous Write');
try {
  fs.writeFileSync('largefile.txt', largeText);
  console.log('Successfully wrote largefile.txt synchronously');
} catch (err) {
  console.error('Error writing file synchronously:', err);
}
console.timeEnd('Synchronous Write');

// 2. Read time for synchronous write
console.time('Synchronous Read');
try {
  const data = fs.readFileSync('largefile.txt');
  console.log('Successfully read largefile.txt synchronously');
} catch (err) {
  console.error('Error reading file synchronously:', err);
}
console.timeEnd('Synchronous Read');

// 3. Asynchronous Write (fs.writeFile)
console.time('Asynchronous Write');
fs.writeFile('largefile.txt', largeText, (err) => {
  if (err) {
    console.error('Error writing file asynchronously:', err);
  } else {
    console.log('Successfully wrote largefile.txt asynchronously');
  }
  console.timeEnd('Asynchronous Write');
});

// 4. Asynchronous Read (fs.readFile) - placed after write for clarity
setTimeout(() => {
  console.time('Asynchronous Read');
  fs.readFile('largefile.txt', (err, data) => {
    if (err) {
      console.error('Error reading file asynchronously:', err);
    } else {
      console.log('Successfully read largefile.txt asynchronously');
    }
    console.timeEnd('Asynchronous Read');
  });
}, 100); // Delay read by 100ms to allow write to complete


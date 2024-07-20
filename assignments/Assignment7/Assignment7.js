const fs = require('fs');

// 1. Create notes.txt and write text
fs.writeFile('notes.txt', 'This is some initial text.', (err) => {
    if (err) {
        console.error('Error creating file:', err);
    } else {
        console.log('Successfully created notes.txt');
    }
});

// 2. Read the content of notes.txt
fs.readFile('notes.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Content of notes.txt:', data.toString());
    }
});

// 3. Append additional text to notes.txt
fs.appendFile('notes.txt', '\nThis is some appended text.', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Successfully appended text to notes.txt');
    }
});

// 4. Delete notes.txt
fs.unlink('notes.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('Successfully deleted notes.txt');
    }
});





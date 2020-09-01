const fs = require('fs');
const path = require('path')

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder created...')
});

// Create and Write to file 
fs.writeFile(path.join(__dirname, '/test', "Tom Riddle's Diary.txt"), 'My name is Harry Potter.', err => {
    if(err) throw err;
    console.log('Something is written...');

// File append
    fs.appendFile(path.join(__dirname, '/test', "Tom Riddle's Diary.txt"), '\nHello Harry Potter, I am Tom Marvallo Riddle.', err => {
        if(err) throw err;
        console.log('Something is written...');
});
});

// Read file
fs.readFile(path.join(__dirname, '/test', "Tom Riddle's Diary.txt"), 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data)
});

// Rename file
fs.rename(
    path.join(__dirname, '/test', "Tom Riddle's Diary.txt"),
    path.join(__dirname, '/test', "Lord Voldemort's Diary.txt"), err => {
        if (err) throw err;
        console.log('Secret Revealed!!!')
    } 
);


// Delete a folder
// NOTE : you must create a folder named "myFolderToDelete".
// NOTE : myFolderToDelete must be an empty folder.
fs.rmdir(path.join(__dirname, "/myFolderToDelete"), (err) => {
    if (err) throw err;
    console.log("Folder deleted...");
});

// Delete file 
fs.unlink(path.join(__dirname,'/test','hello.txt'),err=>{
    if(err) throw err
    console.log('File Deleted...')
});

// Copy file
fs.copyFile('source.txt', 'destination.txt', err => {
    if (err) throw err;
    console.log('File copied...')
}); 
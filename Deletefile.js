var fs=require('fs')
fs.unlink('delete.txt',function(err){
    if(err){
       return console.error(err)
    }
    console.log('file is deleted successfully')
})

var fs=require('fs')
if(fs.existsSync('delete.txt')){
    console.log('File is present')
    fs.unlinkSync('delete.txt')
   return console.log('file is deleted')
}
//if the file is not present
console.log('file is not present')

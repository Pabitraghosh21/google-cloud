function createStudentFolder() {
 
// identify the sheet where the data resides
var ss = SpreadsheetApp.getActive();
var names = ss.getSheetByName("Sample2");
 
//identify the cell that will be used to name the folder 
var studentName = names.getRange(names.getLastRow(), 3).getValue().replace('@', '_'); 
 
//identify the parent folder the new folder will be in
var parentFolder=DriveApp.getFolderById("1Voj0Q5kr-KOE8gza6l--maJ4kJ8z7I4eFP2ErmQFso0bbzcq7UXZTOjwk2E2im7JimfY_OrR");
// var folderList = parentFolder.getFolders();
var folderExist = false;
var childFolders = parentFolder.getFolders();

// List folders inside the folder

while (childFolders.hasNext()) {

var childFolder = childFolders.next();

// Logger.log("Folder Name: " + childFolder.getName());



    if(childFolder.getName() == studentName )
    {
      folderExist = true;
    
    }
}
// if (!(folderList == null || folderList.length))
// {
//   for( var count = 0; count< folderList.length; count++)
  
//   }
// }

//create the new folder
if(!folderExist)
{
  var newFolder=parentFolder.createFolder(studentName);
}

 
}
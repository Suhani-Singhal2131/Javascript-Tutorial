/*Default JavaScript behavior:Synchronous and Single threaded

Each operation wait for the last one to complete before executing

Blocking code Vs Non Blocking Code

Blocking code:  Blocks the execution of the program ,read file sync
Use Case:  Suppose we want to sore the data of the user into the database and then 
           notify the user regarding succesful registration ,then in this case the blocking code is better
           because it block the execution until data is stored into the database


Non Blocking Code: does not Blocks the execution of the program ,read file async
Use Case: Suppose our program want to read the file ,it uses kernels to execute file read 
we want that till the file gets read we can execute the remaining program 
  
  */
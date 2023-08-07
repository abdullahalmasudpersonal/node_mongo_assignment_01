const users = [
    { id: 1, name: 'abdullah' },
    { id: 2, name: 'masud' },
    { id: 3, name: 'mahmud' },
    { id: 4, name: 'hafiz' }
];

//const users = 

module.exports.allUsers = (req,res, next)=>{
    res.send(users)
   // next();
   console.log(users)
}
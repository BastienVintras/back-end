const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin:true});

/** 
*mettre a jour les données primaires(information d identification du user) d un utilisateur
*@param body {String, Object}
*@return {String} message success | error
*@forPlay https://us-central1-app-bast.cloudfunctions.net/updateUser
*@documentation https://firebase.google.com/docs/auth/admin/manage-users?hl=fr&authuser=0#update_a_user
*/
exports.updateUser = functions.https.onRequest((req ,res)=>{
    const uid = req.body.uid;
    const data = req.body.data;

    return cors(req, res, async () => {
        try{
            const userRecord = await admin.auth().updateUser(uid, data)
            res.send(userRecord.toJSON())
        }catch (error){
            res.status(500).send(error);
        }
    })
});
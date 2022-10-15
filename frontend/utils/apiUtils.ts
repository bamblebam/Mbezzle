export const firebaseFileUpload = (file: File) => {
  console.log("FIREBASE UPLOAD");
  // return Firebase storage object id
  const objId = "";
  return objId;
};
export const enqueueFileUpload = (userId: string, objId: string) => {
  console.log("FILE ENQUEUED");
  // enqueue file to convert to db and update status in user obj
};

module.exports = { firebaseFileUpload, enqueueFileUpload };

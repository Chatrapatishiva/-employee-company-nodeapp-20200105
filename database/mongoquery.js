const {getDatabase} = require('./mongo');
const {ObjectID} = require('mongodb');

const collectionLogin = 'login';
const collectionCompany = 'company';
const collectionemployee = 'employee';



async function insertLoginDetails(data) {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionLogin).insertOne(data);
  return insertedId;
}

async function getLoginDetails() {
  const database = await getDatabase();
  return await database.collection(collectionLogin).find({}).toArray();
}

async function insertCompanyDetails(data) {
    const database = await getDatabase();
    const {insertedId} = await database.collection(collectionCompany).insertOne(data);
    return insertedId;
  }

async function getCompanyDetails() {
    const database = await getDatabase();
    return await database.collection(collectionCompany).find({}).toArray();
  }

  async function updateCompanyDetails(id, data) {
    const database = await getDatabase();
    delete data._id;
    await database.collection(collectionCompany).updateOne(
      { _id: new ObjectID(id), },
      {
        $set: {
          ...data,
        },
      },
    );
  }

  async function deleteCompanyDetails(id) {
    const database = await getDatabase();
    await database.collection(collectionCompany).deleteOne({
      _id: new ObjectID(id),
    });
  }



  async function insertEmployeeDetails(data) {
    const database = await getDatabase();
    const {insertedId} = await database.collection(collectionemployee).insertOne(data);
    return insertedId;
  }

async function getEmployeeDetails() {
    const database = await getDatabase();
    return await database.collection(collectionemployee).find({}).toArray();
  }

  async function updateEmployeeDetails(id, data) {
    const database = await getDatabase();
    delete data._id;
    await database.collection(collectionemployee).updateOne(
      { _id: new ObjectID(id), },
      {
        $set: {
          ...data,
        },
      },
    );
  }

  async function deleteEmployeeDetails(id) {
    const database = await getDatabase();
    await database.collection(collectionemployee).deleteOne({
      _id: new ObjectID(id),
    });
  }

  async function searchAll(data) {
    console.log(data)
    const database = await getDatabase();
    return await database.collection(collectionemployee).find({ $or: [ {eid: {'$regex': data}}, {name: {'$regex': data}}, {phone: {'$regex': data}} ] }).toArray();
  }

module.exports = {
  insertLoginDetails,
  getLoginDetails,
  insertCompanyDetails,
  getCompanyDetails,
  updateCompanyDetails,
  deleteCompanyDetails,
  insertEmployeeDetails,
  getEmployeeDetails,
  updateEmployeeDetails,
  deleteEmployeeDetails,
  searchAll
};
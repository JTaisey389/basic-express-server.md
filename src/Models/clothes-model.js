'use strict';

class ClothesModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }
  create(obj){
    let record = {
      id: ++this.id,
      record: obj,
    }
    this.db.push(record);
    return record;
  }
  read(id){
    if (id) {
      return this.db.find((record) => record.id === id);
    } else {
      return this.db;
    }
  }
  update(id, obj) {
    if (id) {
      let recordToUpdate = this.db.find((record) => record.id === id);
      let index = this.db.indexOf(recordToUpdate);
      let newRecord = {
        id: recordToUpdate.id,
        record: object,
      };
      this.db[index] = newRecord;
      return newRecord;
    }
  }
  delete(id) {
    if (id) {
      let record = this.db.find((record) => record.id === id);
      this.db.splice(id -1, 1);
      return record;
    }
  }
}

module.exports = ClothesModel;
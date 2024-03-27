const { Schema,model } = require('../connection')

const shortsSchema = new Schema ({
    shortsname : String,
    shortsdetail : String,
    video: String,
});
module.exports = model('shorts', shortsSchema);

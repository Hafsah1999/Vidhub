const { Schema,model } = require('../connection')

const videoSchema = new Schema ({
    vidname : String,
    viddetail : String,
    vidcategory : String,
    video: String,
});
module.exports = model('video', videoSchema);

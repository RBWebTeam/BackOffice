// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://superAdmin:admin123@localhost:27017/BackOffice', { autoIndex: false });
// create a schema
var RequestSchema = new Schema({
    Summary: {
        _id: String,
        Request_Id: Number,
        Request_Unique_Id: String,
        Client_Id: Number,
        PB_CRN: String,
        Created_On: Date,
        Status: String,
        Total: Number,
        Pending: Number,
        Complete: Number,
        Success: Number,
        Fail: Number,
        Total_Execution_Time: Number
    },
    Request: {
        client_key: String,
        crn: String,
        electrical_accessory: Number,
        email: String,
        execution_async: String,
        external_bifuel_value: Number,
        first_name: String,
        ip_address:String ,
        is_antitheft_fit: String,
        is_claim_exists: String,
        is_external_bifuel: String,
        is_llpd: String,
        last_name: String,
        method_type: String,
        middle_name: String,
        mobile: Number,
        non_electrical_accessory: Number,
        pa_named_passenger_si: String,
        pa_owner_driver_si: Number,
        pa_paid_driver_si: String,
        pa_unnamed_passenger_si: String,
        policy_expiry_date: Date,
        prev_insurer_id: Number,
        product_id: Number,
        registration_no: String,
        rto_id: Number,
        secret_key: String,
        vehicle_expected_idv: Number,
        vehicle_id: Number,
        vehicle_insurance_type: String,
        vehicle_manf_date: String,
        vehicle_ncb_current: Number,
        vehicle_registration_date: Date,
        vehicle_registration_type: String,
        voluntary_deductible: Number,
        client_id: Number,
        client_name: String,
        birth_date: Date,
        posp_posp_id: Number,
        posp_fba_id: Number,
        posp_sm_posp_id: Number,
        posp_sm_posp_name: Number,
        posp_first_name: Number,
        posp_middle_name: Number,
        posp_last_name: Number,
        posp_email_id: Number,
        posp_agent_city: Number,
        posp_mobile_no: Number,
        posp_pan_no: Number,
        posp_aadhar: Number,
        posp_sources: Number,
        posp_ss_id: Number,
        posp_erp_id: Number,
        posp_gender: Number,
        posp_posp_category: Number,
        posp_reporting_agent_uid: Number,
        posp_reporting_agent_name: Number,
        posp_category: String,
        erp_source: String
    },
    fba_id:Number,
    isTwentyfour:Boolean,
    isActive:Boolean,
    created_date:Date
});

// the schema is useless so far
//userSchema.methods.dudify = function() {
//  this.name = this.name + '-dude'; 
//  return this.name;
//};
// we need to create a model using it
var Request = mongoose.model('Request', RequestSchema);


// make this available to our users in our Node applications
module.exports = Request;

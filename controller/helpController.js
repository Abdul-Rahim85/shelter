const User = require('../models/user');
const Request = require('../models/request');
const Offer = require('../models/offer');

const helpRequest_get = async (req, res) => {
    const helpRequest = {
        type: 'مسكن',
        owner: "86327643648672048407",
        date: "4/7/2025",
        comment: [
            {_id: '392403859479'},
            {_id: '894355567495'},
            {_id: '894355567495'},
            {_id: '392403859479'},
        ],
        priorty: 5477,
        helpPlace: 'sudan / portsudan',
        note: ''
    }
    res.status(200).json({message:'success', helpRequest});
}

const helpRequest_post = async (req, res) => {
    const request = req.body

    res.status(200).json({message:'success', request});
    // try {
    //     const newRequest = await Request.create(request);
    //     res.status(201).json({message: "تم إضافة المساعدة بنجاح", newRequest});
    // } catch (error) {
    //     res.status(500).json(error);
    // }
}

const helpOffer_get = async (req, res) => {
    const helpOffer = {
        tofferType: 'وظيفة',
        userId: "86327643648672048407",
        date: "4/7/2025",
        helpPlace: 'sudan / portsudan',
        quantity: 8,
        note: ''
    }
    res.status(200).json({message:'success', helpOffer});
}

const helpOffer_post = async (req, res) => {
    const offer = req.body

    res.status(200).json({message:'success', offer});
    // try {
    //     const newOffer = await Offer.create(offer);
    //     res.status(201).json({message: "تم إضافة طلب المساعدة بنجاح", newOffer});
    // } catch (error) {
    //     res.status(500).json(error);
    // }
}

module.exports = {
    helpRequest_get,
    helpRequest_post,
    helpOffer_get,
    helpOffer_post
}

/*

// This function get all devices that belong to spcefic user
// const devices_get = async (req, res) => {
//     const allDevice = await Device.find({deviceOwner: req.params.id});

//     if(allDevice.length > 0){
//         res.status(200).json({massage: "successfull retriving user devices", devices: allDevice});
//     } else {
//         res.status(404).json({massage: "ليس لديك اي أجهزة"})
//     }
// };

// This function get one device that belong to spcefic user
// const device_get = async (req, res) => {
//     const deviceDetails = await Device.findById(req.params.id);
    
//     if(deviceDetails){
//         res.status(200).json({massage: "Success finding device details", deviceDetails});
//     } else {
//         res.status(404).json({massage: "There is no device with this id"});
//     }
// }

// This function is used to get a user devices base on the device device Category
// const deviceCategory_get = async (req, res) => {
//   const userID = req.params.id;
//   const urlQuery = req.query.deviceCategory;

//     const devices = await Device.find({deviceOwner: userID, deviceCategory: urlQuery});
//     if (devices) {
//       res.status(200).json({message: 'success', devices});

//     } else {
//       res.status(404).json({message: 'لا يوجد جهاز من هذا النوع'});
//     }
//   }
// This function is used to add new device to the database.
// const device_post = async (req, res) => {
//     const newDeviceData = req.body;

//     try {
//         const newDevice = await Device.create(newDeviceData);
//         res.status(201).json({message: "تم إضافة جهاز بنجاح", newDevice});

//     } catch (err) {
//         const errors = handelErrors(err)
//         res.status(400).json(errors)
//     }
// }

// This function is use to updat a device data
// const device_put = async (req, res) => {

//     if(await Device.findById(req.params.id)){
//         const lostDevice = await Device.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
//         res.status(200).json({massage: "Device data update successfully", lostDevice});
//     } else {
//         res.status(404).json({massage: "There is no device with this id!"})
//     }
// }

// This function is use to set a device status LOST!
// const deviceLost_put = async (req, res) => {
//     const lostDevice = await Device.findById(req.params.id)

//     if(lostDevice){
//         const lostDevice = await Device.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
//         res.status(200).json({massage: "Set device as lost successfull", lostDevice});
//     } else {
//         res.status(404).json({massage: "There is no device with this id!"})
//     }
// }

// This function is used to delete user device
// const device_delete = async (req, res) => {

//     if (await Device.findById(req.params.id)){
//         await Device.findByIdAndDelete(req.params.id);
//         res.status(200).json({massage: "تم حذف الجهاز بنجاح"});

//     } else {
//         res.status(404).json({massage: "There is no device with this id!"})
//     }
// }

// This function is use to get the new owner detailse
// const owner_get = async (req, res) => {
//     const newOwner = await User.findOne({phoneNumber: req.params.id});

//     if(newOwner){
//         res.status(200).json({massage: "User to transfer ownership to him", newOwner})
//     } else {
//         res.status(404).json({massage: "لا يوجد مستخدم مسجل برقم الهاتف هذا"});
//     }
// }

// This function is use to transfer ownership of a device from user to anther
// const transferownership_put = async (req, res) => {
//     const transformerDevice = await Device.findById(req.params.id);

//     if(transformerDevice) {
//         const newDeviceOwner = await Device.findByIdAndUpdate(req.params.id, req.body, {new: true})        
//         res.status(200).json({massage: "تم تحويل ملكية الجهاز بنجاح", newDeviceOwner});
//     } else {
//         res.status(404).json({massage: "There is no device with this id"});
//     }
// }

*/
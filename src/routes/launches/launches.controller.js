const {
    getAllLaunches,
    addNewLaunch,
} = require('../../models/launches.model');

function httpGetAllLaunches(req ,res){
    return res.status(200).json(getAllLaunches());
}

function htttpAddnewLaunch(req ,res){
    const launch = req.body;

    if(!launch.mission || !launch.rocket || !launch.launchDate ||!launch.target){
        return res.status(400).json({
            error:"misssing the your new launch detail..."
        })
    }
    
    launch.launchDate = new Date(launch.launchDate);
    
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            error:"Invalid the launch date ,please enter valid date.."
        })
    }
    addNewLaunch(launch);
    return res.status(201).json(launch);
}
module.exports = {
    httpGetAllLaunches,
    htttpAddnewLaunch,
} 
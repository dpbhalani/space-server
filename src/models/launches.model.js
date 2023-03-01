const launches = new Map();

latestFlightNumber = 100;
let launch = {
    fligthNumber: 100,
    mission: 'kepler exploration',
    rocket: "Explore IS1",
    launchDate: new Date('December 27,2025'),
    destination: "kepler-442 b",
    customer: ["ZTM", "NASA"],
    upcoming: true,
    success: true,
}

launches.set(launch.fligthNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values())
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            customer: ["Zero to Mastery", "NASA"],
            upcoming: true,
            success: true,
            fligthNumber: latestFlightNumber,
        })
    );
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
}
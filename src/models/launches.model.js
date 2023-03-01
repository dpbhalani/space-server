const launches = new Map();

const latestFlightNumber = 100;
const launch = {
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

function addNewLaunches(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign({
            customer: ["Zero to Mastery", "NASA"],
            upcoming: true,
            success: true,
            fligthNumber: latestFlightNumber,
        })
    )
}

module.exports = {
    getAllLaunches,
    addNewLaunches,
}
const launches = new Map();

const launch = {
    fligthNumber : 100,
    mission: 'kepler exploration',
    rocket:"Explore IS1",
    launchDate: new Date('December 27,2025'),
    destination:"kepler-442 b",
    customer:["ZTM","NASA"],
    upcoming:true,
    success:true,
}

launches.set(launch.fligthNumber, launch);

module.exports = {
    launches,
}
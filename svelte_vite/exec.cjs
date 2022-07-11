// TODO: delete this file. This is for testing purposes only
(async () => {
    const nyc = require('nyc')
    const nic = new nyc({
        _: ['merge'],
    });
    const map = await nic.getCoverageMapFromAllCoverageFiles('.nyc_output/merge');
    console.log(map)
})()
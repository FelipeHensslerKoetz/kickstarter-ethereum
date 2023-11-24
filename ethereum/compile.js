const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// Path to the build directory
const buildPath = path.resolve(__dirname, 'build');

// Removes the build directory
fs.removeSync(buildPath);

// Path to the Campaign.sol file
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

// Reads the Campaign.sol file
const source = fs.readFileSync(campaignPath, 'utf8');

// Compiles the Campaign.sol file
const output = solc.compile(source, 1).contracts;

// Creates the build directory
fs.ensureDirSync(buildPath);

// Writes the output to the build directory (2 contracts)
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}
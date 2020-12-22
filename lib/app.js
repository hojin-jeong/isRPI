
const fs = require('fs')
const dataset = require('./dataset.json')

function hexToBits(hex, length) {
    return parseInt(hex, 16).toString(2).padStart(length, '0')
}
function bitsToHex(bits) {
    return parseInt(bits, 2).toString(16)
}

module.exports = _ => {
    if(fs.existsSync(dataset.path)) {
        const cpuinfo = fs.readFileSync(dataset.path).toString()
        const revision = cpuinfo.split('\n').find(_ => _.toLowerCase().startsWith('revision'))
        if(revision) {
            if(revision.length === 4) {
                return {
                    revisionFlag: dataset.parser.flag['0'],
                    memorySize: dataset.old_parser[revision].memorySize,
                    manufacturer: dataset.old_parser[revision].manufacturer,
                    model: dataset.old_parser[revision].model,
                    revision: dataset.old_parser[revision].revision
                }
            } else {
                const revisionBits = hexToBits(revision, 32)
                let index = 6
                return {
                    warrentyBit: dataset.parser.warranty[revisionBits.slice(index, index += 1)],
                    revisionFlag: dataset.parser.flag[revisionBits.slice(index += 1, index += 1)],
                    memorySize: dataset.parser.memory[bitsToHex(revisionBits.slice(index, index += 3))],
                    manufacturer: dataset.parser.manufacturer[bitsToHex(revisionBits.slice(index, index += 4))],
                    processor: dataset.parser.processor[bitsToHex(revisionBits.slice(index, index += 4))],
                    model: dataset.parser.model[bitsToHex(revisionBits.slice(index, index += 8))],
                    revision: `1.${bitsToHex(revisionBits.slice(index, index + 4))}`
                }
            }
        } else {
            return false
        }
    } else {
        return false
    }
}
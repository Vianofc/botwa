const fs = require('fs') 
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const _premlimit = JSON.parse(fs.readFileSync('./database/user/premlimit.json'))

/********** FUNCTION LIMIT ***************/
       const addLimit = (sender) => {
        	const obj = {id: sender, limit : 0}
            _limit.push(obj)
            fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
        }
		
		const addLimitUser = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }	
		
      const checkLimituser = (sender) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _limit[position].limit
            }
        }
		
		 const confirmLIMIT = (sender, amount) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
/********** FUNCTION PREMLIMIT ***************/
 
const addpremLimit = (sender) => {
        	const obj = {id: sender, premlimit : 0}
            _premlimit.push(obj)
            fs.writeFileSync('./database/user/premlimit.json', JSON.stringify(_premlimit))
        }

        const addPremlimitUser = (sender, amount) => {
        	let position = false
            Object.keys(_premlimit).forEach((i) => {
                if (_premlimit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _premlimit[position].premlimit += amount
                fs.writeFileSync('./database/user/premlimit.json', JSON.stringify(_premlimit))
            }
        }
		
		const checkpremLimituser = (sender) => {
        	let position = false
            Object.keys(_premlimit).forEach((i) => {
                if (_premlimit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _premlimit[position].premlimit
            }
        }
		
		const confirmPREMLIMIT = (sender, amount) => {
             let position = false
            Object.keys(_premlimit).forEach((i) => {
                if (_premlimit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _premlimit[position].premlimit -= amount
                fs.writeFileSync('./database/user/premlimit.json', JSON.stringify(_premlimit))
            }
        }

module.exports = {
	addLimit,
	addLimitUser,
	checkLimituser,
	confirmLIMIT,
	addpremLimit,
	addPremlimitUser,
	checkpremLimituser,
	confirmPREMLIMIT
}
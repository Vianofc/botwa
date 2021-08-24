const fs = require('fs') 
const _berlian = JSON.parse(fs.readFileSync('./database/adventure/mining/berlian.json'))
const _emas = JSON.parse(fs.readFileSync('./database/adventure/mining/emas.json'))
const _perak = JSON.parse(fs.readFileSync('./database/adventure/mining/perak.json'))
const _perunggu = JSON.parse(fs.readFileSync('./database/adventure/mining/perunggu.json'))
const _iron = JSON.parse(fs.readFileSync('./database/adventure/mining/iron.json'))
const _brick = JSON.parse(fs.readFileSync('./database/adventure/mining/brick.json'))
const _stone = JSON.parse(fs.readFileSync('./database/adventure/mining/stone.json'))

/********** FUNCTION BERLIAN ***************/
const addBerlian = (sender) => {
        	const obj = {id: sender, berlian : 0}
            _berlian.push(obj)
            fs.writeFileSync('./database/adventure/mining/berlian.json', JSON.stringify(_berlian))
        }

        const addBerlianUser = (sender, amount) => {
        	let position = false
            Object.keys(_berlian).forEach((i) => {
                if (_berlian[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _berlian[position].berlian += amount
                fs.writeFileSync('./database/adventure/mining/berlian.json', JSON.stringify(_berlian))
            }
        }
		
		const checkBerlianuser = (sender) => {
        	let position = false
            Object.keys(_berlian).forEach((i) => {
                if (_berlian[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _berlian[position].berlian
            }
        }
         
         const confirmBERLIAN = (sender, amount) => {
             let position = false
            Object.keys(_berlian).forEach((i) => {
                if (_berlian[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _berlian[position].berlian -= amount
                fs.writeFileSync('./database/adventure/mining/berlian.json', JSON.stringify(_berlian))
            }
        }
	/********** FUNCTION EMAS ***************/
const addEmas = (sender) => {
        	const obj = {id: sender, emas : 0}
            _emas.push(obj)
            fs.writeFileSync('./database/adventure/mining/emas.json', JSON.stringify(_emas))
        }

        const addEmasUser = (sender, amount) => {
        	let position = false
            Object.keys(_emas).forEach((i) => {
                if (_emas[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _emas[position].emas += amount
                fs.writeFileSync('./database/adventure/mining/emas.json', JSON.stringify(_emas))
            }
        }
		
		const checkEmasuser = (sender) => {
        	let position = false
            Object.keys(_emas).forEach((i) => {
                if (_emas[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _emas[position].emas
            }
        }
         
         const confirmEMAS = (sender, amount) => {
             let position = false
            Object.keys(_emas).forEach((i) => {
                if (_emas[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _emas[position].emas -= amount
                fs.writeFileSync('./database/adventure/mining/emas.json', JSON.stringify(_emas))
            }
        }
/********** FUNCTION PERAK ***************/
const addPerak = (sender) => {
        	const obj = {id: sender, perak : 0}
            _perak.push(obj)
            fs.writeFileSync('./database/adventure/mining/perak.json', JSON.stringify(_perak))
        }

        const addPerakUser = (sender, amount) => {
        	let position = false
            Object.keys(_perak).forEach((i) => {
                if (_perak[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _perak[position].perak += amount
                fs.writeFileSync('./database/adventure/mining/perak.json', JSON.stringify(_perak))
            }
        }
		
		const checkPerakuser = (sender) => {
        	let position = false
            Object.keys(_perak).forEach((i) => {
                if (_perak[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _perak[position].perak
            }
        }
         
         const confirmPERAK = (sender, amount) => {
             let position = false
            Object.keys(_perak).forEach((i) => {
                if (_perak[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _perak[position].perak -= amount
                fs.writeFileSync('./database/adventure/mining/perak.json', JSON.stringify(_perak))
            }
        }
/********** FUNCTION PERUNGGU ***************/
const addPerunggu = (sender) => {
        	const obj = {id: sender, perunggu : 0}
            _perunggu.push(obj)
            fs.writeFileSync('./database/adventure/mining/perunggu.json', JSON.stringify(_perunggu))
        }

        const addPerungguUser = (sender, amount) => {
        	let position = false
            Object.keys(_perunggu).forEach((i) => {
                if (_perunggu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _perunggu[position].perunggu += amount
                fs.writeFileSync('./database/adventure/mining/perunggu.json', JSON.stringify(_perunggu))
            }
        }
		
		const checkPerungguuser = (sender) => {
        	let position = false
            Object.keys(_perunggu).forEach((i) => {
                if (_perunggu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _perunggu[position].perunggu
            }
        }
         
         const confirmPERUNGGU = (sender, amount) => {
             let position = false
            Object.keys(_perunggu).forEach((i) => {
                if (_perunggu[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _perunggu[position].perunggu -= amount
                fs.writeFileSync('./database/adventure/mining/perunggu.json', JSON.stringify(_perunggu))
            }
        }	
/********** FUNCTION IRON ***************/
const addIron = (sender) => {
        	const obj = {id: sender, iron : 0}
            _iron.push(obj)
            fs.writeFileSync('./database/adventure/mining/iron.json', JSON.stringify(_iron))
        }

        const addIronUser = (sender, amount) => {
        	let position = false
            Object.keys(_iron).forEach((i) => {
                if (_iron[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _iron[position].iron += amount
                fs.writeFileSync('./database/adventure/mining/iron.json', JSON.stringify(_iron))
            }
        }
		
		const checkIronuser = (sender) => {
        	let position = false
            Object.keys(_iron).forEach((i) => {
                if (_iron[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _iron[position].iron
            }
        }
         
         const confirmIRON = (sender, amount) => {
             let position = false
            Object.keys(_iron).forEach((i) => {
                if (_iron[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _iron[position].iron -= amount
                fs.writeFileSync('./database/adventure/mining/iron.json', JSON.stringify(_iron))
            }
        }	
/********** FUNCTION BRICK ***************/
const addBrick = (sender) => {
        	const obj = {id: sender, brick : 0}
            _brick.push(obj)
            fs.writeFileSync('./database/adventure/mining/brick.json', JSON.stringify(_brick))
        }

        const addBrickUser = (sender, amount) => {
        	let position = false
            Object.keys(_brick).forEach((i) => {
                if (_brick[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _brick[position].brick += amount
                fs.writeFileSync('./database/adventure/mining/brick.json', JSON.stringify(_brick))
            }
        }
		
		const checkBrickuser = (sender) => {
        	let position = false
            Object.keys(_brick).forEach((i) => {
                if (_brick[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _brick[position].brick
            }
        }
         
         const confirmBRICK = (sender, amount) => {
             let position = false
            Object.keys(_brick).forEach((i) => {
                if (_brick[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _brick[position].brick -= amount
                fs.writeFileSync('./database/adventure/mining/brick.json', JSON.stringify(_brick))
            }
        }	

/********** FUNCTION BRICK ***************/
const addStone = (sender) => {
        	const obj = {id: sender, stone : 0}
            _stone.push(obj)
            fs.writeFileSync('./database/adventure/mining/stone.json', JSON.stringify(_stone))
        }

        const addStoneUser = (sender, amount) => {
        	let position = false
            Object.keys(_stone).forEach((i) => {
                if (_stone[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _stone[position].stone += amount
                fs.writeFileSync('./database/adventure/mining/stone.json', JSON.stringify(_stone))
            }
        }
		
		const checkStoneuser = (sender) => {
        	let position = false
            Object.keys(_stone).forEach((i) => {
                if (_stone[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _stone[position].stone
            }
        }
         
         const confirmSTONE = (sender, amount) => {
             let position = false
            Object.keys(_stone).forEach((i) => {
                if (_stone[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _stone[position].stone -= amount
                fs.writeFileSync('./database/adventure/mining/stone.json', JSON.stringify(_stone))
            }
        }			

module.exports = {
	addBerlian,
	addBerlianUser,
	checkBerlianuser,
	confirmBERLIAN,
	addEmas,
	addEmasUser,
	checkEmasuser,
	confirmEMAS,
	addPerak,
	addPerakUser,
	checkPerakuser,
	confirmPERAK,
	addPerunggu,
	addPerungguUser,
	checkPerungguuser,
	confirmPERUNGGU,
	addIron,
	addIronUser,
	checkIronuser,
	confirmIRON,
	addBrick,
	addBrickUser,
	checkBrickuser,
	confirmBRICK,
	addStone,
	addStoneUser,
	checkStoneuser,
	confirmSTONE
}
const fs = require('fs') 
const _kerangajaib = JSON.parse(fs.readFileSync('./database/adventure/item/kerangajaib.json'))
const _jamur = JSON.parse(fs.readFileSync('./database/adventure/item/jamur.json'))
const _daunmaple = JSON.parse(fs.readFileSync('./database/adventure/item/daunmaple.json'))
const _daun = JSON.parse(fs.readFileSync('./database/adventure/item/daun.json'))
const _daun1 = JSON.parse(fs.readFileSync('./database/adventure/item/daun1.json'))
const _daun2 = JSON.parse(fs.readFileSync('./database/adventure/item/daun2.json'))
const _clover3 = JSON.parse(fs.readFileSync('./database/adventure/item/clover3.json'))
const _clover4 = JSON.parse(fs.readFileSync('./database/adventure/item/clover4.json'))
const _kayu = JSON.parse(fs.readFileSync('./database/adventure/item/kayu.json'))
const _bibit = JSON.parse(fs.readFileSync('./database/adventure/item/bibit.json'))
const _puzzle = JSON.parse(fs.readFileSync('./database/adventure/item/puzzle.json'))

/********** FUNCTION kerangajaib ***************/
const addKerangajaib = (sender) => {
        	const obj = {id: sender, kerangajaib : 0}
            _kerangajaib.push(obj)
            fs.writeFileSync('./database/adventure/item/kerangajaib.json', JSON.stringify(_kerangajaib))
        }

        const addKerangajaibUser = (sender, amount) => {
        	let position = false
            Object.keys(_kerangajaib).forEach((i) => {
                if (_kerangajaib[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kerangajaib[position].kerangajaib += amount
                fs.writeFileSync('./database/adventure/item/kerangajaib.json', JSON.stringify(_kerangajaib))
            }
        }
		
		const checkKerangajaibuser = (sender) => {
        	let position = false
            Object.keys(_kerangajaib).forEach((i) => {
                if (_kerangajaib[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _kerangajaib[position].kerangajaib
            }
        }
         
         const confirmKERANGAJAIB = (sender, amount) => {
             let position = false
            Object.keys(_kerangajaib).forEach((i) => {
                if (_kerangajaib[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kerangajaib[position].kerangajaib -= amount
                fs.writeFileSync('./database/adventure/item/kerangajaib.json', JSON.stringify(_kerangajaib))
            }
        }
	/********** FUNCTION jamur ***************/
const addJamur = (sender) => {
        	const obj = {id: sender, jamur : 0}
            _jamur.push(obj)
            fs.writeFileSync('./database/adventure/item/jamur.json', JSON.stringify(_jamur))
        }

        const addJamurUser = (sender, amount) => {
        	let position = false
            Object.keys(_jamur).forEach((i) => {
                if (_jamur[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _jamur[position].jamur += amount
                fs.writeFileSync('./database/adventure/item/jamur.json', JSON.stringify(_jamur))
            }
        }
		
		const checkJamuruser = (sender) => {
        	let position = false
            Object.keys(_jamur).forEach((i) => {
                if (_jamur[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _jamur[position].jamur
            }
        }
         
         const confirmJAMUR = (sender, amount) => {
             let position = false
            Object.keys(_jamur).forEach((i) => {
                if (_jamur[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _jamur[position].jamur -= amount
                fs.writeFileSync('./database/adventure/item/jamur.json', JSON.stringify(_jamur))
            }
        }
/********** FUNCTION daunmaple ***************/
const addDaunmaple = (sender) => {
        	const obj = {id: sender, daunmaple : 0}
            _daunmaple.push(obj)
            fs.writeFileSync('./database/adventure/item/daunmaple.json', JSON.stringify(_daunmaple))
        }

        const addDaunmapleUser = (sender, amount) => {
        	let position = false
            Object.keys(_daunmaple).forEach((i) => {
                if (_daunmaple[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _daunmaple[position].daunmaple += amount
                fs.writeFileSync('./database/adventure/item/daunmaple.json', JSON.stringify(_daunmaple))
            }
        }
		
		const checkDaunmapleuser = (sender) => {
        	let position = false
            Object.keys(_daunmaple).forEach((i) => {
                if (_daunmaple[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _daunmaple[position].daunmaple
            }
        }
         
         const confirmDAUNMAPLE = (sender, amount) => {
             let position = false
            Object.keys(_daunmaple).forEach((i) => {
                if (_daunmaple[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _daunmaple[position].daunmaple -= amount
                fs.writeFileSync('./database/adventure/item/daunmaple.json', JSON.stringify(_daunmaple))
            }
        }
/********** FUNCTION daun ***************/
const addDaun = (sender) => {
        	const obj = {id: sender, daun : 0}
            _daun.push(obj)
            fs.writeFileSync('./database/adventure/item/daun.json', JSON.stringify(_daun))
        }

        const addDaunUser = (sender, amount) => {
        	let position = false
            Object.keys(_daun).forEach((i) => {
                if (_daun[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _daun[position].daun += amount
                fs.writeFileSync('./database/adventure/item/daun.json', JSON.stringify(_daun))
            }
        }
		
		const checkDaunuser = (sender) => {
        	let position = false
            Object.keys(_daun).forEach((i) => {
                if (_daun[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _daun[position].daun
            }
        }
         
         const confirmDAUN = (sender, amount) => {
             let position = false
            Object.keys(_daun).forEach((i) => {
                if (_daun[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _daun[position].daun -= amount
                fs.writeFileSync('./database/adventure/item/daun.json', JSON.stringify(_daun))
            }
        }	
/********** FUNCTION daun1 ***************/
const addDaun1 = (sender) => {
        	const obj = {id: sender, daun1 : 0}
            _daun1.push(obj)
            fs.writeFileSync('./database/adventure/item/daun1.json', JSON.stringify(_daun1))
        }

        const addDaun1User = (sender, amount) => {
        	let position = false
            Object.keys(_daun1).forEach((i) => {
                if (_daun1[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _daun1[position].daun1 += amount
                fs.writeFileSync('./database/adventure/item/daun1.json', JSON.stringify(_daun1))
            }
        }
		
		const checkDaun1user = (sender) => {
        	let position = false
            Object.keys(_daun1).forEach((i) => {
                if (_daun1[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _daun1[position].daun1
            }
        }
         
         const confirmDAUN1 = (sender, amount) => {
             let position = false
            Object.keys(_daun1).forEach((i) => {
                if (_daun1[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _daun1[position].daun1 -= amount
                fs.writeFileSync('./database/adventure/item/daun1.json', JSON.stringify(_daun1))
            }
        }	
/********** FUNCTION daun2 ***************/
const addDaun2 = (sender) => {
        	const obj = {id: sender, daun2 : 0}
            _daun2.push(obj)
            fs.writeFileSync('./database/adventure/item/daun2.json', JSON.stringify(_daun2))
        }

        const addDaun2User = (sender, amount) => {
        	let position = false
            Object.keys(_daun2).forEach((i) => {
                if (_daun2[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _daun2[position].daun2 += amount
                fs.writeFileSync('./database/adventure/item/daun2.json', JSON.stringify(_daun2))
            }
        }
		
		const checkDaun2user = (sender) => {
        	let position = false
            Object.keys(_daun2).forEach((i) => {
                if (_daun2[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _daun2[position].daun2
            }
        }
         
         const confirmDAUN2 = (sender, amount) => {
             let position = false
            Object.keys(_daun2).forEach((i) => {
                if (_daun2[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _daun2[position].daun2 -= amount
                fs.writeFileSync('./database/adventure/item/daun2.json', JSON.stringify(_daun2))
            }
        }	

/********** FUNCTION daun2 ***************/
const addClover3 = (sender) => {
        	const obj = {id: sender, clover3 : 0}
            _clover3.push(obj)
            fs.writeFileSync('./database/adventure/item/clover3.json', JSON.stringify(_clover3))
        }

        const addClover3User = (sender, amount) => {
        	let position = false
            Object.keys(_clover3).forEach((i) => {
                if (_clover3[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _clover3[position].clover3 += amount
                fs.writeFileSync('./database/adventure/item/clover3.json', JSON.stringify(_clover3))
            }
        }
		
		const checkClover3user = (sender) => {
        	let position = false
            Object.keys(_clover3).forEach((i) => {
                if (_clover3[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _clover3[position].clover3
            }
        }
         
         const confirmCLOVER3 = (sender, amount) => {
             let position = false
            Object.keys(_clover3).forEach((i) => {
                if (_clover3[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _clover3[position].clover3 -= amount
                fs.writeFileSync('./database/adventure/item/clover3.json', JSON.stringify(_clover3))
            }
        }			
 /********** FUNCTION daun2 ***************/
const addClover4 = (sender) => {
        	const obj = {id: sender, clover4 : 0}
            _clover4.push(obj)
            fs.writeFileSync('./database/adventure/item/clover4.json', JSON.stringify(_clover4))
        }

        const addClover4User = (sender, amount) => {
        	let position = false
            Object.keys(_clover4).forEach((i) => {
                if (_clover4[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _clover4[position].clover4 += amount
                fs.writeFileSync('./database/adventure/item/clover4.json', JSON.stringify(_clover4))
            }
        }
		
		const checkClover4user = (sender) => {
        	let position = false
            Object.keys(_clover4).forEach((i) => {
                if (_clover4[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _clover4[position].clover4
            }
        }
         
         const confirmCLOVER4 = (sender, amount) => {
             let position = false
            Object.keys(_clover4).forEach((i) => {
                if (_clover4[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _clover4[position].clover4 -= amount
                fs.writeFileSync('./database/adventure/item/clover4.json', JSON.stringify(_clover4))
            }
        }			
        /********** FUNCTION kayu ***************/
const addKayu = (sender) => {
        	const obj = {id: sender, kayu : 0}
            _kayu.push(obj)
            fs.writeFileSync('./database/adventure/item/kayu.json', JSON.stringify(_kayu))
        }

        const addKayuUser = (sender, amount) => {
        	let position = false
            Object.keys(_kayu).forEach((i) => {
                if (_kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kayu[position].kayu += amount
                fs.writeFileSync('./database/adventure/item/kayu.json', JSON.stringify(_kayu))
            }
        }
		
		const checkKayuuser = (sender) => {
        	let position = false
            Object.keys(_kayu).forEach((i) => {
                if (_kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _kayu[position].kayu
            }
        }
         
         const confirmKAYU = (sender, amount) => {
             let position = false
            Object.keys(_kayu).forEach((i) => {
                if (_kayu[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kayu[position].kayu -= amount
                fs.writeFileSync('./database/adventure/item/kayu.json', JSON.stringify(_kayu))
            }
        }	
/********** FUNCTION bibit ***************/
const addBibit = (sender) => {
        	const obj = {id: sender, bibit : 0}
            _bibit.push(obj)
            fs.writeFileSync('./database/adventure/item/bibit.json', JSON.stringify(_bibit))
        }

        const addBibitUser = (sender, amount) => {
        	let position = false
            Object.keys(_bibit).forEach((i) => {
                if (_bibit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bibit[position].bibit += amount
                fs.writeFileSync('./database/adventure/item/bibit.json', JSON.stringify(_bibit))
            }
        }
		
		const checkBibituser = (sender) => {
        	let position = false
            Object.keys(_bibit).forEach((i) => {
                if (_bibit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _bibit[position].bibit
            }
        }
         
         const confirmBIBIT = (sender, amount) => {
             let position = false
            Object.keys(_bibit).forEach((i) => {
                if (_bibit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bibit[position].bibit -= amount
                fs.writeFileSync('./database/adventure/item/bibit.json', JSON.stringify(_bibit))
            }
        }		
		/********** FUNCTION puzzle ***************/
const addPuzzle = (sender) => {
        	const obj = {id: sender, puzzle : 0}
            _puzzle.push(obj)
            fs.writeFileSync('./database/adventure/item/puzzle.json', JSON.stringify(_puzzle))
        }

        const addPuzzleUser = (sender, amount) => {
        	let position = false
            Object.keys(_puzzle).forEach((i) => {
                if (_puzzle[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _puzzle[position].puzzle += amount
                fs.writeFileSync('./database/adventure/item/puzzle.json', JSON.stringify(_puzzle))
            }
        }
		
		const checkPuzzleuser = (sender) => {
        	let position = false
            Object.keys(_puzzle).forEach((i) => {
                if (_puzzle[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _puzzle[position].puzzle
            }
        }
         
         const confirmPUZZLE = (sender, amount) => {
             let position = false
            Object.keys(_puzzle).forEach((i) => {
                if (_puzzle[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _puzzle[position].puzzle -= amount
                fs.writeFileSync('./database/adventure/item/puzzle.json', JSON.stringify(_puzzle))
            }
        }		

module.exports = {
	addKerangajaib,
	addKerangajaibUser,
	checkKerangajaibuser,
	confirmKERANGAJAIB,
	addJamur,
	addJamurUser,
	checkJamuruser,
	confirmJAMUR,
	addDaunmaple,
	addDaunmapleUser,
	checkDaunmapleuser,
	confirmDAUNMAPLE,
	addDaun,
	addDaunUser,
	checkDaunuser,
	confirmDAUN,
	addDaun1,
	addDaun1User,
	checkDaun1user,
	confirmDAUN1,
	addDaun2,
	addDaun2User,
	checkDaun2user,
	confirmDAUN2,
	addClover3,
	addClover3User,
	checkClover3user,
	confirmCLOVER3,
	addClover4,
	addClover4User,
	checkClover4user,
	confirmCLOVER4,
	addKayu,
	addKayuUser,
	checkKayuuser,
	confirmKAYU,
	addBibit,
	addBibitUser,
	checkBibituser,
	confirmBIBIT,
	addPuzzle,
	addPuzzleUser,
	checkPuzzleuser,
	confirmPUZZLE
}
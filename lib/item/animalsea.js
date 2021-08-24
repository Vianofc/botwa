const fs = require('fs') 
const _kurakura = JSON.parse(fs.readFileSync('./database/adventure/akuarium/kurakura.json'))
const _gurita = JSON.parse(fs.readFileSync('./database/adventure/akuarium/gurita.json'))
const _cumicumi = JSON.parse(fs.readFileSync('./database/adventure/akuarium/cumicumi.json'))
const _udang = JSON.parse(fs.readFileSync('./database/adventure/akuarium/udang.json'))
const _lobster = JSON.parse(fs.readFileSync('./database/adventure/akuarium/lobster.json'))
const _kepiting = JSON.parse(fs.readFileSync('./database/adventure/akuarium/kepiting.json'))
const _pufferfish = JSON.parse(fs.readFileSync('./database/adventure/akuarium/pufferfish.json'))
const _ikan = JSON.parse(fs.readFileSync('./database/adventure/akuarium/ikan.json'))
const _ikan2 = JSON.parse(fs.readFileSync('./database/adventure/akuarium/ikan2.json'))
const _lumbalumba = JSON.parse(fs.readFileSync('./database/adventure/akuarium/lumbalumba.json'))
const _paus = JSON.parse(fs.readFileSync('./database/adventure/akuarium/paus.json'))
const _paus2 = JSON.parse(fs.readFileSync('./database/adventure/akuarium/paus2.json'))
const _hiu = JSON.parse(fs.readFileSync('./database/adventure/akuarium/hiu.json'))
const _seadog = JSON.parse(fs.readFileSync('./database/adventure/akuarium/seadog.json'))
/********** FUNCTION KURAKURA ***************/
const addKurakura = (sender) => {
        	const obj = {id: sender, kurakura : 0}
            _kurakura.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/kurakura.json', JSON.stringify(_kurakura))
        }

        const addKurakuraUser = (sender, amount) => {
        	let position = false
            Object.keys(_kurakura).forEach((i) => {
                if (_kurakura[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kurakura[position].kurakura += amount
                fs.writeFileSync('./database/adventure/akuarium/kurakura.json', JSON.stringify(_kurakura))
            }
        }
		
		const checkKurakurauser = (sender) => {
        	let position = false
            Object.keys(_kurakura).forEach((i) => {
                if (_kurakura[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _kurakura[position].kurakura
            }
        }
         
         const confirmKURAKURA = (sender, amount) => {
             let position = false
            Object.keys(_kurakura).forEach((i) => {
                if (_kurakura[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kurakura[position].kurakura -= amount
                fs.writeFileSync('./database/adventure/akuarium/kurakura.json', JSON.stringify(_kurakura))
            }
        }	
/********** FUNCTION GURITA ***************/
const addGurita = (sender) => {
        	const obj = {id: sender, gurita : 0}
            _gurita.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/gurita.json', JSON.stringify(_gurita))
        }

        const addGuritaUser = (sender, amount) => {
        	let position = false
            Object.keys(_gurita).forEach((i) => {
                if (_gurita[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _gurita[position].gurita += amount
                fs.writeFileSync('./database/adventure/akuarium/gurita.json', JSON.stringify(_gurita))
            }
        }
		
		const checkGuritauser = (sender) => {
        	let position = false
            Object.keys(_gurita).forEach((i) => {
                if (_gurita[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _gurita[position].gurita
            }
        }
         
         const confirmGURITA = (sender, amount) => {
             let position = false
            Object.keys(_gurita).forEach((i) => {
                if (_gurita[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _gurita[position].gurita -= amount
                fs.writeFileSync('./database/adventure/akuarium/gurita.json', JSON.stringify(_gurita))
            }
        }		
		/********** FUNCTION CUMICUMI ***************/
const addCumicumi = (sender) => {
        	const obj = {id: sender, cumicumi : 0}
            _cumicumi.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/cumicumi.json', JSON.stringify(_cumicumi))
        }

        const addCumicumiUser = (sender, amount) => {
        	let position = false
            Object.keys(_cumicumi).forEach((i) => {
                if (_cumicumi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _cumicumi[position].cumicumi += amount
                fs.writeFileSync('./database/adventure/akuarium/cumicumi.json', JSON.stringify(_cumicumi))
            }
        }
		
		const checkCumicumiuser = (sender) => {
        	let position = false
            Object.keys(_cumicumi).forEach((i) => {
                if (_cumicumi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _cumicumi[position].cumicumi
            }
        }
         
         const confirmCUMICUMI = (sender, amount) => {
             let position = false
            Object.keys(_cumicumi).forEach((i) => {
                if (_cumicumi[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _cumicumi[position].cumicumi -= amount
                fs.writeFileSync('./database/adventure/akuarium/cumicumi.json', JSON.stringify(_cumicumi))
            }
        }		
		/********** FUNCTION UDANG ***************/
const addUdang = (sender) => {
        	const obj = {id: sender, udang : 0}
            _udang.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/udang.json', JSON.stringify(_udang))
        }

        const addUdangUser = (sender, amount) => {
        	let position = false
            Object.keys(_udang).forEach((i) => {
                if (_udang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _udang[position].udang += amount
                fs.writeFileSync('./database/adventure/akuarium/udang.json', JSON.stringify(_udang))
            }
        }
		
		const checkUdanguser = (sender) => {
        	let position = false
            Object.keys(_udang).forEach((i) => {
                if (_udang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _udang[position].udang
            }
        }
         
         const confirmUDANG = (sender, amount) => {
             let position = false
            Object.keys(_udang).forEach((i) => {
                if (_udang[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _udang[position].udang -= amount
                fs.writeFileSync('./database/adventure/akuarium/udang.json', JSON.stringify(_udang))
            }
        }		
		/********** FUNCTION LOBSTER ***************/
const addLobster = (sender) => {
        	const obj = {id: sender, lobster : 0}
            _lobster.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/lobster.json', JSON.stringify(_lobster))
        }

        const addLobsterUser = (sender, amount) => {
        	let position = false
            Object.keys(_lobster).forEach((i) => {
                if (_lobster[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lobster[position].lobster += amount
                fs.writeFileSync('./database/adventure/akuarium/lobster.json', JSON.stringify(_lobster))
            }
        }
		
		const checkLobsteruser = (sender) => {
        	let position = false
            Object.keys(_lobster).forEach((i) => {
                if (_lobster[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _lobster[position].lobster
            }
        }
         
         const confirmLOBSTER = (sender, amount) => {
             let position = false
            Object.keys(_lobster).forEach((i) => {
                if (_lobster[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lobster[position].lobster -= amount
                fs.writeFileSync('./database/adventure/akuarium/lobster.json', JSON.stringify(_lobster))
            }
        }		
		/********** FUNCTION KEPITING ***************/
const addKepiting = (sender) => {
        	const obj = {id: sender, kepiting : 0}
            _kepiting.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/kepiting.json', JSON.stringify(_kepiting))
        }

        const addKepitingUser = (sender, amount) => {
        	let position = false
            Object.keys(_kepiting).forEach((i) => {
                if (_kepiting[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kepiting[position].kepiting += amount
                fs.writeFileSync('./database/adventure/akuarium/kepiting.json', JSON.stringify(_kepiting))
            }
        }
		
		const checkKepitinguser = (sender) => {
        	let position = false
            Object.keys(_kepiting).forEach((i) => {
                if (_kepiting[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _kepiting[position].kepiting
            }
        }
         
         const confirmKEPITING = (sender, amount) => {
             let position = false
            Object.keys(_kepiting).forEach((i) => {
                if (_kepiting[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kepiting[position].kepiting -= amount
                fs.writeFileSync('./database/adventure/akuarium/kepiting.json', JSON.stringify(_kepiting))
            }
        }			
		/********** FUNCTION PUFFERFISH ***************/
const addPufferfish = (sender) => {
        	const obj = {id: sender, pufferfish : 0}
            _pufferfish.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/pufferfish.json', JSON.stringify(_pufferfish))
        }

        const addPufferfishUser = (sender, amount) => {
        	let position = false
            Object.keys(_pufferfish).forEach((i) => {
                if (_pufferfish[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pufferfish[position].pufferfish += amount
                fs.writeFileSync('./database/adventure/akuarium/pufferfish.json', JSON.stringify(_pufferfish))
            }
        }
		
		const checkPufferfishuser = (sender) => {
        	let position = false
            Object.keys(_pufferfish).forEach((i) => {
                if (_pufferfish[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pufferfish[position].pufferfish
            }
        }
         
         const confirmPUFFERFISH = (sender, amount) => {
             let position = false
            Object.keys(_pufferfish).forEach((i) => {
                if (_pufferfish[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pufferfish[position].pufferfish -= amount
                fs.writeFileSync('./database/adventure/akuarium/pufferfish.json', JSON.stringify(_pufferfish))
            }
        }		
/********** FUNCTION IKAN ***************/
const addIkan = (sender) => {
        	const obj = {id: sender, ikan : 0}
            _ikan.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/ikan.json', JSON.stringify(_ikan))
        }

        const addIkanUser = (sender, amount) => {
        	let position = false
            Object.keys(_ikan).forEach((i) => {
                if (_ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _ikan[position].ikan += amount
                fs.writeFileSync('./database/adventure/akuarium/ikan.json', JSON.stringify(_ikan))
            }
        }
		
		const checkIkanuser = (sender) => {
        	let position = false
            Object.keys(_ikan).forEach((i) => {
                if (_ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _ikan[position].ikan
            }
        }
         
         const confirmIKAN = (sender, amount) => {
             let position = false
            Object.keys(_ikan).forEach((i) => {
                if (_ikan[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _ikan[position].ikan -= amount
                fs.writeFileSync('./database/adventure/akuarium/ikan.json', JSON.stringify(_ikan))
            }
        }		
		/********** FUNCTION IKAN2 ***************/
const addIkan2 = (sender) => {
        	const obj = {id: sender, ikan2 : 0}
            _ikan2.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/ikan2.json', JSON.stringify(_ikan2))
        }

        const addIkan2User = (sender, amount) => {
        	let position = false
            Object.keys(_ikan2).forEach((i) => {
                if (_ikan2[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _ikan2[position].ikan2 += amount
                fs.writeFileSync('./database/adventure/akuarium/ikan2.json', JSON.stringify(_ikan2))
            }
        }
		
		const checkIkan2user = (sender) => {
        	let position = false
            Object.keys(_ikan2).forEach((i) => {
                if (_ikan2[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _ikan2[position].ikan2
            }
        }
         
         const confirmIKAN2 = (sender, amount) => {
             let position = false
            Object.keys(_ikan2).forEach((i) => {
                if (_ikan2[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _ikan2[position].ikan2 -= amount
                fs.writeFileSync('./database/adventure/akuarium/ikan2.json', JSON.stringify(_ikan2))
            }
        }	
/********** FUNCTION LUMBALUMBA ***************/
const addLumbalumba = (sender) => {
        	const obj = {id: sender, lumbalumba : 0}
            _lumbalumba.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/lumbalumba.json', JSON.stringify(_lumbalumba))
        }

        const addLumbalumbaUser = (sender, amount) => {
        	let position = false
            Object.keys(_lumbalumba).forEach((i) => {
                if (_lumbalumba[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lumbalumba[position].lumbalumba += amount
                fs.writeFileSync('./database/adventure/akuarium/lumbalumba.json', JSON.stringify(_lumbalumba))
            }
        }
		
		const checkLumbalumbauser = (sender) => {
        	let position = false
            Object.keys(_lumbalumba).forEach((i) => {
                if (_lumbalumba[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _lumbalumba[position].lumbalumba
            }
        }
         
         const confirmLUMBALUMBA = (sender, amount) => {
             let position = false
            Object.keys(_lumbalumba).forEach((i) => {
                if (_lumbalumba[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lumbalumba[position].lumbalumba -= amount
                fs.writeFileSync('./database/adventure/akuarium/lumbalumba.json', JSON.stringify(_lumbalumba))
            }
        }		
		/********** FUNCTION PAUS ***************/
const addPaus = (sender) => {
        	const obj = {id: sender, paus : 0}
            _paus.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/paus.json', JSON.stringify(_paus))
        }

        const addPausUser = (sender, amount) => {
        	let position = false
            Object.keys(_paus).forEach((i) => {
                if (_paus[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _paus[position].paus += amount
                fs.writeFileSync('./database/adventure/akuarium/paus.json', JSON.stringify(_paus))
            }
        }
		
		const checkPaususer = (sender) => {
        	let position = false
            Object.keys(_paus).forEach((i) => {
                if (_paus[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _paus[position].paus
            }
        }
         
         const confirmPAUS = (sender, amount) => {
             let position = false
            Object.keys(_paus).forEach((i) => {
                if (_paus[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _paus[position].paus -= amount
                fs.writeFileSync('./database/adventure/akuarium/paus.json', JSON.stringify(_paus))
            }
        }		
		/********** FUNCTION PAUS2 ***************/
const addPaus2 = (sender) => {
        	const obj = {id: sender, paus2 : 0}
            _paus2.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/paus2.json', JSON.stringify(_paus2))
        }

        const addPaus2User = (sender, amount) => {
        	let position = false
            Object.keys(_paus2).forEach((i) => {
                if (_paus2[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _paus2[position].paus2 += amount
                fs.writeFileSync('./database/adventure/akuarium/paus2.json', JSON.stringify(_paus2))
            }
        }
		
		const checkPaus2user = (sender) => {
        	let position = false
            Object.keys(_paus2).forEach((i) => {
                if (_paus2[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _paus2[position].paus2
            }
        }
         
         const confirmPAUS2 = (sender, amount) => {
             let position = false
            Object.keys(_paus2).forEach((i) => {
                if (_paus2[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _paus2[position].paus2 -= amount
                fs.writeFileSync('./database/adventure/akuarium/paus2.json', JSON.stringify(_paus2))
            }
        }		
		/********** FUNCTION HIU ***************/
const addHiu = (sender) => {
        	const obj = {id: sender, hiu : 0}
            _hiu.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/hiu.json', JSON.stringify(_hiu))
        }

        const addHiuUser = (sender, amount) => {
        	let position = false
            Object.keys(_hiu).forEach((i) => {
                if (_hiu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hiu[position].hiu += amount
                fs.writeFileSync('./database/adventure/akuarium/hiu.json', JSON.stringify(_hiu))
            }
        }
		
		const checkHiuuser = (sender) => {
        	let position = false
            Object.keys(_hiu).forEach((i) => {
                if (_hiu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hiu[position].hiu
            }
        }
         
         const confirmHIU = (sender, amount) => {
             let position = false
            Object.keys(_hiu).forEach((i) => {
                if (_hiu[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hiu[position].hiu -= amount
                fs.writeFileSync('./database/adventure/akuarium/hiu.json', JSON.stringify(_hiu))
            }
        }	
/********** FUNCTION SEADOG ***************/
const addSeadog = (sender) => {
        	const obj = {id: sender, seadog : 0}
            _seadog.push(obj)
            fs.writeFileSync('./database/adventure/akuarium/seadog.json', JSON.stringify(_seadog))
        }

        const addSeadogUser = (sender, amount) => {
        	let position = false
            Object.keys(_seadog).forEach((i) => {
                if (_seadog[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _seadog[position].seadog += amount
                fs.writeFileSync('./database/adventure/akuarium/seadog.json', JSON.stringify(_seadog))
            }
        }
		
		const checkSeadoguser = (sender) => {
        	let position = false
            Object.keys(_seadog).forEach((i) => {
                if (_seadog[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _seadog[position].seadog
            }
        }
         
         const confirmSEADOG = (sender, amount) => {
             let position = false
            Object.keys(_seadog).forEach((i) => {
                if (_seadog[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _seadog[position].seadog -= amount
                fs.writeFileSync('./database/adventure/akuarium/seadog.json', JSON.stringify(_seadog))
            }
        }				

module.exports = {
	addKurakura,
	addKurakuraUser,
	checkKurakurauser,
	confirmKURAKURA,
	addGurita,
	addGuritaUser,
	checkGuritauser,
	confirmGURITA,
	addCumicumi,
	addCumicumiUser,
	checkCumicumiuser,
	confirmCUMICUMI,
	addUdang,
	addUdangUser,
	checkUdanguser,
	confirmUDANG,
	addLobster,
	addLobsterUser,
	checkLobsteruser,
	confirmLOBSTER,
	addKepiting,
	addKepitingUser,
	checkKepitinguser,
	confirmKEPITING,
	addPufferfish,
	addPufferfishUser,
	checkPufferfishuser,
	confirmPUFFERFISH,
	addIkan,
	addIkanUser,
	checkIkanuser,
	confirmIKAN,
	addIkan2,
	addIkan2User,
	checkIkan2user,
	confirmIKAN2,
	addLumbalumba,
	addLumbalumbaUser,
	checkLumbalumbauser,
	confirmLUMBALUMBA,
	addPaus,
	addPausUser,
	checkPaususer,
	confirmPAUS,
	addPaus2,
	addPaus2User,
	checkPaus2user,
	confirmPAUS2,
	addHiu,
	addHiuUser,
	checkHiuuser,
	confirmHIU,
	addSeadog,
	addSeadogUser,
	checkSeadoguser,
	confirmSEADOG
}
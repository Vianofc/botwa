const fs = require('fs') 
const _heal = JSON.parse(fs.readFileSync('./database/adventure/heal.json'))
const _potion = JSON.parse(fs.readFileSync('./database/adventure/potion.json'))
const _megapotion = JSON.parse(fs.readFileSync('./database/adventure/megapotion.json'))

/********** FUNCTION HEAL ***************/
const addHeal = (sender) => {
        	const obj = {id: sender, heal : 0}
            _heal.push(obj)
            fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
        }

        const addHealUser = (sender, amount) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
                if (_heal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _heal[position].heal += amount
                fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
            }
        }
		
		const checkHealuser = (sender) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
                if (_heal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _heal[position].heal
            }
        }
		
		const confirmHEAL = (sender, amount) => {
             let position = false
            Object.keys(_heal).forEach((i) => {
                if (_heal[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _heal[position].heal -= amount
                fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
            }
        }
/********** FUNCTION POTION ***************/
const addPotion = (sender) => {
        	const obj = {id: sender, potion : 0}
            _potion.push(obj)
            fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
        }

        const addPotionUser = (sender, amount) => {
        	let position = false
            Object.keys(_potion).forEach((i) => {
                if (_potion[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _potion[position].potion += amount
                fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
            }
        }
		
		const checkPotionuser = (sender) => {
        	let position = false
            Object.keys(_potion).forEach((i) => {
                if (_potion[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _potion[position].potion
            }
        }
         
         const confirmPOTION = (sender, amount) => {
             let position = false
            Object.keys(_potion).forEach((i) => {
                if (_potion[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _potion[position].potion -= amount
                fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
            }
        }		
/********** FUNCTION MEGAPOTION ***************/
const addMegaPotion = (sender) => {
        	const obj = {id: sender, megapotion : 0}
            _megapotion.push(obj)
            fs.writeFileSync('./database/adventure/megapotion.json', JSON.stringify(_megapotion))
        }

        const addMegaPotionUser = (sender, amount) => {
        	let position = false
            Object.keys(_megapotion).forEach((i) => {
                if (_megapotion[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _megapotion[position].megapotion += amount
                fs.writeFileSync('./database/adventure/megapotion.json', JSON.stringify(_megapotion))
            }
        }
		
		const checkMegaPotionuser = (sender) => {
        	let position = false
            Object.keys(_megapotion).forEach((i) => {
                if (_megapotion[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _megapotion[position].megapotion
            }
        }
         
         const confirmMEGAPOTION = (sender, amount) => {
             let position = false
            Object.keys(_megapotion).forEach((i) => {
                if (_megapotion[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _megapotion[position].megapotion -= amount
                fs.writeFileSync('./database/adventure/megapotion.json', JSON.stringify(_megapotion))
            }
        }			

module.exports = {
	addHeal,
	addHealUser,
	checkHealuser,
	confirmHEAL,
	addPotion,
	addPotionUser,
	checkPotionuser,
	confirmPOTION,
	addMegaPotion,
	addMegaPotionUser,
	checkMegaPotionuser,
	confirmMEGAPOTION
}
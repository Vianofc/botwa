const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   ChatModification,
   WAMessageProto,
   prepareMessageFromContent,
   relayWAMessage,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const FormData = require('form-data')
const crypto = require('crypto')
const util = require('util')
const qrcodes = require("qrcode")
const imageToBase64 = require('image-to-base64')
const request = require('request')
const fetch = require('node-fetch')
const axios = require('axios')
const yts = require( 'yt-search')
const tik = require('tiktok-scraper-without-watermark')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const ig = require('insta-fetcher')
const speed = require('performance-now')
const Exif = require('./lib/exif')
const exif = new Exif()
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { color, bgcolor } = require('./lib/color')
const { help } = require('./lib/help')
const { fetchJson, getBuffer, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { recognize } = require('./lib/ocr')
const { msgFilter } = require('./lib/antispam')
const toMs = require('ms')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { uploadimg } = require('./lib/uploadimg')
const { ind } = require('./language')
const { virtex } = require('./src/virtex')
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const baterainye = JSON.parse(fs.readFileSync('./src/lucbatrai.json'))
const { validmove, setGame } = require("./lib/tictactoe");
const { jadibot, stopjadibot } = require('./jadibot.js')
const {
    batre, 
    chargi, 
} = baterainye
const BarBarKey = 'eVEuxQnaL76dOGq31KhK'

const vcard = 'BEGIN:VCARD\n'  // Jangan di ubah biar ga error
            + 'VERSION:3.0\n'  // Jangan di ubah biar ga error
            + 'FN:Owner\n'  // Ganti jadi namamu
            + 'ORG: +Owner;\n'  // Ganti jadi namamu/Botmu
            + 'TEL;type=CELL;type=VOICE;waid=17815636140:+17815636140\n'  // Ganti jadi nomormu, tapi jangan ubah polanya
            + 'END:VCARD' // jangan di ubah
grub1 = setting.grub1
grub2 = setting.grub2
grub3 = setting.grub3
donasi = setting.donasi
pulsa = setting.pulsa
gopay = setting.gopay
ovo = setting.ovo
dana = setting.dana
prefix = setting.prefix
f = setting.f
LoLKey = setting.LoLKey
namo = setting.namo
ator = setting.ator
fake = setting.fake
fakereply = setting.fakereply
XteamKey = setting.XteamKey
leave = setting.leave
welkome = setting.welkome
blocked = []   
limitawal = '100' //terserah ganti atau engga
premiumlimitawal = '20'
memberlimit = '1'
healawal = '100'
const X = "❌"
const O = "⭕️"

XteamKey2 = "d37372311698ed1d"			
public = true

/*=================================STATUS BATERAI=================================*/
battre = batre
charg = chargi
charging = false
baterai = {
    baterai: 0,
    cas: false
}
imgibb = `https://i.ibb.co/bvN8wXx/images.jpg`
/*=================================STATUS BATERAI=================================*/


const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 // PRICE SHOP
const beli1 = 1000
const beli2 = 3000
const beli3 = 2000
const beli4 = 5000
const healperPotion = 3
const healperMegaPotion = 6
const counting = 1
// PRICE SELL
const jual1 = 150
const jual2 = 170
const jual3 = 250
const jual4 = 200
const jual5 = 300
const jual6 = 15
const jual7 = 10
const jual8 = 5

/******** OWNER NUMBER**********/
const ownerNumber = ["62895414533737@s.whatsapp.net"]  //ganti menjadi nomormu
/************************************/
const { menu } = require('./menu/menu')
const { ownermenu } = require('./menu/ownermenu')
const { grupseting } = require('./menu/grupseting')
const { gabutmenu } = require('./menu/gabutmenu')
const { aesthetic } = require('./menu/aesthetic')
const { minigame } = require('./menu/minigame')
const { downloadmenu } = require('./menu/downloadmenu')
const { makermenu } = require('./menu/makermenu')
const { mediamenu } = require('./menu/mediamenu')
const { shopmenu } = require('./menu/shopmenu')
const { infomenu } = require('./menu/infomenu')
const { ransel } = require('./menu/ransel')
const { akuarium } = require('./menu/akuarium')
const { antivirtexx } = require('./menu/antivirtex.js')
/*********** LOAD FILE ***********/
const tebakgambar = JSON.parse(fs.readFileSync('./database/minigame/tebakgambar.json'))
const sambungkata = JSON.parse(fs.readFileSync('./database/minigame/sambungkata.json'))
const akinator = JSON.parse(fs.readFileSync('./database/minigame/akinator.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antilinktele = JSON.parse(fs.readFileSync('./database/group/antilinktele.json'))
const antilinktwit = JSON.parse(fs.readFileSync('./database/group/antilinktwit.json'))
const antilinkwa = JSON.parse(fs.readFileSync('./database/group/antilinkwa.json'))
const antilinkig = JSON.parse(fs.readFileSync('./database/group/antilinkig.json'))
const antilinkfb = JSON.parse(fs.readFileSync('./database/group/antilinkfb.json'))
const antilinktt = JSON.parse(fs.readFileSync('./database/group/antilinktt.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const mute = JSON.parse(fs.readFileSync('./database/bot/mute.json'));
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const _premlimit = JSON.parse(fs.readFileSync('./database/user/premlimit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const anime = JSON.parse(fs.readFileSync('./database/group/anime.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const vip = JSON.parse(fs.readFileSync('./database/user/vip.json'))
const adm = JSON.parse(fs.readFileSync('./database/user/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
/*********** END LOAD ***********/
const _heal = JSON.parse(fs.readFileSync('./database/adventure/heal.json'))
const _potion = JSON.parse(fs.readFileSync('./database/adventure/potion.json'))
const _megapotion = JSON.parse(fs.readFileSync('./database/adventure/megapotion.json'))
/*********** MINING LOAD ***********/
const _berlian = JSON.parse(fs.readFileSync('./database/adventure/mining/berlian.json'))
const _emas = JSON.parse(fs.readFileSync('./database/adventure/mining/emas.json'))
const _perak = JSON.parse(fs.readFileSync('./database/adventure/mining/perak.json'))
const _perunggu = JSON.parse(fs.readFileSync('./database/adventure/mining/perunggu.json'))
const _iron = JSON.parse(fs.readFileSync('./database/adventure/mining/iron.json'))
const _brick = JSON.parse(fs.readFileSync('./database/adventure/mining/brick.json'))
const _stone = JSON.parse(fs.readFileSync('./database/adventure/mining/stone.json'))
/*********** AKUARIUM LOAD ***********/
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
let scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))

const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')
const {
	addATM,
	addKoinUser,
	checkATMuser,
	confirmATM
} = require('./lib/uang.js')		
const {
	addLimit,
	addLimitUser,
	checkLimituser,
	confirmLIMIT,
	addpremLimit,
	addPremlimitUser,
	checkpremLimituser,
	confirmPREMLIMIT
} = require('./lib/limit.js')
const {
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
} = require('./lib/adventurepoint.js')
const {
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
} = require('./lib/item/ore.js')
const {
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
} = require('./lib/item/animalsea.js')
const { 
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
} = require('./lib/item/sampah.js')
/********** ORE ITEM ***************/
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
		
const getAllPremiumUser = () => {
		const array = []
		Object.keys(vip).forEach((i) => {
		array.push(vip[i].id)
		})
		return array
		}
const getPremiumExpired = (sender) => {
		let position = null
		Object.keys(vip).forEach((i) => {
		if (vip[i].id === sender) {
		position = i 
		}
	})
		if (position !== null) {
		return vip[position].expired 
	}
} 
const expiredCheck = () => {
		setInterval(() => {
		let position = null
		Object.keys(vip).forEach((i) => {
		if (Date.now() >= vip[i].expired) {
		position = i 
		}
	}
)
		if (position !== null) {
		console.log(`Premium expired: ${vip[position].id}`)
		vip.splice(position, 1)
		fs.writeFileSync('./database/user/vip.json', JSON.stringify(vip)) 
		}
	}, 1000)
}


/********** FUNCTION AKUARIUM ***************/
				
		

 
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/**HARI**/
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
switch(jams){
case 0: jams = "Malam"; break;
case 1: jams = "Malam"; break;
case 2: jams = "Malam"; break;
case 3: jams = "Pagi"; break;
case 4: jams = "Pagi"; break;
case 5: jams = "Pagi"; break;
case 6: jams = "Pagi"; break;
case 7: jams = "Pagi"; break;
case 8: jams = "Pagi"; break;
case 9: jams = "Pagi"; break;
case 10: jams = "Pagi"; break;
case 11: jams = "Siang"; break;
case 12: jams = "Siang"; break;
case 13: jams = "Siang"; break;
case 14: jams = "Siang"; break;
case 15: jams = "Sore"; break;
case 16: jams = "Sore"; break;
case 17: jams = "Sore"; break;
case 18: jams = "Malam"; break;
case 19: jams = "Malam"; break;
case 20: jams = "Malam"; break;
case 21: jams = "Malam"; break;
case 22: jams = "Malam"; break;
case 23: jams = "Malam"; break;
 }
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

console.log(tampilTanggal);
console.log(tampilWaktu);
/********** FUNCTION ***************/

const client = new WAConnection()
client.version = [2,2121,7]
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('♥','white'),color('♥','red'),color('♥','white'),color('SQAN CODENYA!!','white'),color('YOU','red'),color('TUBE','white'),color('LUCBOT','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect()


client.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
		num = anu.participants[0]
	fwelkom = { key: {fromMe: false,participant: "0@s.whatsapp.net",
	remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "Alphabot", 
"caption": `SELAMAT DATANG 🙏`, 'jpegThumbnail': fs.readFileSync(`./image/hayo.jpeg`)
}}}
	fleave = { key: {fromMe: false,participant: "0@s.whatsapp.net",
	remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "Alphabot", 
"caption": `SELAMAT TINGGAL 👋`, 'jpegThumbnail': fs.readFileSync(`./image/hayo.jpeg`)
}}}
	    const mdata = await client.groupMetadata(anu.jid)
	    if (anu.action == 'add') {
		hai = `Hai @${num.split('@')[0]}\n
Selamat datang di
Group *${mdata.subject}*
Ingin menggunakan bot? Silahkan Ketik ${prefix}menu\n
──────────────────
${mdata.desc}.`
		client.sendMessage(mdata.id, hai, MessageType.text, {quoted : fwelkom, contextInfo: {"mentionedJid": [num]}})
	    } else if (anu.action == 'remove') {
		num = anu.participants[0]
		bye = `Selamat tinggal @${num.split('@')[0]}
──────────────────\n
Semoga Tenang Dialam Sana Ya.`
		client.sendMessage(mdata.id, bye, MessageType.text, {quoted : fleave, contextInfo: {"mentionedJid": [num]}})
		}
	} catch (e) {
	    console.log('Error : %s', color(e, 'red'))
	}
    })
//****************((((()))))****************
	
//**********[ ADD CMD STICKER ]**********
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}


client.on('CB:action,,battery', json => {
	        global.batteryLevelStr = json[2][0][1].value
            global.batterylevel = parseInt(batteryLevelStr)
	        battre = batterylevel
            if(json[2][0][1].live == 'true') {
            charging = true
            }else if (json[2][0][1].live == 'false') {
            charging = false
            }
            const chargi = json[2][0][1].live
            baterai.cas = chargi
            console.log(json[2][0][1])
		    console.log('Baterai : ' + batterylevel+'🔋%')
	        })
	        global.batrei = global.batrei ? global.batrei : []
		    client.on('CB:action,,battery', json => {
		    const batteryLevelStr = json[2][0][1].value
		    const batterylevel = parseInt(batteryLevelStr)
		    global.batrei.push(batterylevel)
		    })

/*=======FITUR ANTI CALL/VC=======*/	

    client.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        client.sendMessage(callerId, "*𝐓𝐋𝐏𝐎𝐍/𝐕𝐂 𝐓𝐄𝐑𝐃𝐄𝐓𝐄𝐊𝐒𝐈*\n\nMaaf, Nmr Anda akan kami Banned/Block permanent", MessageType.text)
        await sleep(4000)
        await client.blockUser(callerId, "add") // Block user
})
	client.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return
			mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		//	if (!mek.key.fromMe) return
			global.prefix
			global.blocked
			let senderr = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
			const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			pickbutton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
			selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
			const commandstik = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('base64') : ""
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			client.chatRead(from)
			client.updatePresence(from, Presence.recording)
			
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const arg = chats.slice(command.length + 2, chats.length)
			const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
			const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
			const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
			mention != undefined ? mention.push(mentionByReply) : []
			const mentionUser = mention != undefined ? mention.filter(n => n) : []
			const botNumber = client.user.jid
			const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const itsMe = sender == botNumber ? true : false
			const argss = body.split(/ +/g)
            
/************** SCURITY FEATURE ************/
			const isBadWord = isGroup ? badword.includes(from) : false
			const isRegistered = checkRegisteredUser(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isMuted = isGroup ? mute.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isAntilinkTele = isGroup ? antilinktele.includes(from) : false
			const isAntilinkTwit = isGroup ? antilinktwit.includes(from) : false
			const isAntilinkWa = isGroup ? antilinkwa.includes(from) : false
			const isAntilinkIg = isGroup ? antilinkig.includes(from) : false
			const isAntilinkFb = isGroup ? antilinkfb.includes(from) : false
			const isAntilinkTt = isGroup ? antilinkfb.includes(from) : false
			const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
			
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isSimi = isGroup ? samih.includes(from) : false
			const isPremium1 = vip.includes(sender) || isOwner || itsMe
			const isPremium = prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const isAudio = type === 'audioMessage'
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			/*
		await client.updatePresence(from,Presence.recording)
      await client.updatePresence(from,Presence.composing)
        ]=====> FAKE REPLY <=====[
        */
		const fakegroup = (teks) => {
			client.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}


const fdpcu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/luc.jpeg')}}}

const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝐘𝐀𝐊𝐔𝐙𝐀 𝐁𝐎𝐓`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/luc.jpeg`)} } }

const freply2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${command}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./luc.jpeg')
}}}
const freply3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "liveLocationMessage":{"caption":`𝐘𝐀𝐊𝐔𝐙𝐀 𝐁𝐎𝐓`,"jpegThumbnail":fs.readFileSync('./luc.jpeg')
}}}

        const eft = {
       key: { 
             fromMe: false, 
             participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
       }, 
       message: { 
          "imageMessage": { 
              "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                 "mimetype": "image/jpeg", 
                 "caption": "fake",  // GANTI NAMA BOT LO
                 "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                 "fileLength": "28777", 
                 "height": 1080, 
                 "width": 1079, 
                 "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", 
                 "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", 
                 "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", 
                 "mediaKeyTimestamp": "1610993486", 
                 "jpegThumbnail": fs.readFileSync('image/luc.jpeg')
                 } 
        }
}
      const fakeitem = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/luc.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${fake}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}  
        /*
const fakethumb = (teks, yes) => {
            client.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/fakethumb.jpg`),quoted:mek,caption:yes})
        }
        ]=====> FAKETOKO <=====[
        */
		
const player = `${sender.split("@")[0]}@s.whatsapp.net`
        const sft = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./image/luc.jpeg`)
					},
					"title": "SEWA BOT", // GANTI TERSERAH LO
					"description": "1 Bulan : Rp 50.000,00", // GANTI TERSERAH LO
					"currencyCode": "IDR",
					"priceAmount1000": "10000", // GANTI HARGA
					"retailerId": "Self Bot",
					"productImageCount": 999
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
async function faketoko(teks, url_image, title, code, price) {
                var punya_wa = "0@s.whatsapp.net"
                var ini_buffer = await getBuffer(url_image)
                const ini_cstoko = {
                    contextInfo: {
                        participant: punya_wa,
                        remoteJid: 'status@broadcast',
                        quotedMessage: {
                            productMessage: {
                                product: {
                                    currencyCode: code,
                                    title: title,
                                    priceAmount1000: price,
                                    productImageCount: 1,
                                    productImage: {
                                        jpegThumbnail: ini_buffer
                                    }
                                },
                                businessOwnerJid: "0@s.whatsapp.net"
                            }
                        }
                    }
                }
                await client.sendMessage(from, teks, text, ini_cstoko)
            }
			const reply = (teks) => {
				//client.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./image/luc.jpeg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek })
				
				client.sendMessage(from, teks, text, {quoted:mek })
			}
			const reply2 = (teks) => {
				client.sendMessage(from, teks, text, {quoted:freply2, contextInfo: {forwardingScore : 508, isForwarded: true}})
			}
			const reply22 = (teks) => {
				client.sendMessage(from, teks, text, {quoted:freply, contextInfo: {forwardingScore : 508, isForwarded: true}})
			}
			const reply3 = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek, contextInfo: {forwardingScore : 508, isForwarded: true, mentionedJid: [player]}})
			}
			const reply4 = (teks) => {
				client.sendMessage(from, teks, text, {quoted:freply, contextInfo: {forwardingScore : 508, isForwarded: true, mentionedJid: [num, ow]}})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			
			
	const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      }
      client.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      )
    }
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await client.prepareMessage(from, kma, image)
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      }
      client.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      )
    }
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await client.prepareMessage(from, kma, video)
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      }
      client.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      )
    }
		const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
           const sendStickerFromUrl = async(to, url) => {
              var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        client.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            } 
	        /*****************END SCURITY FEATURE ********/
			//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (levelRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (levelRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (levelRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (levelRole <= 6000) {
            role = 'Mythic VII 上帝'
        } else if (levelRole <= 7000) {
            role = 'Mythic VIII 上帝'
        } else if (levelRole <= 8000) {
            role = 'Mythic IX 上帝'
        } else if (levelRole <= 9000) {
            role = 'Mythic X 上帝'
        } else if (levelRole <= 10000) {
            role = 'Awakened Mythic 特尔邦贡'
	    } else if (levelRole <= 99999999999) {
   	         role = 'End level 程度❗'
	    }
		
		const lucbotbares = battre
			var lucbotbatrai = `[▒▒▒▒▒▒▒▒▒▒] ${lucbotbares}%`
			      if (lucbotbares <= 10) {
				lucbotbatrai = `[█▒▒▒▒▒▒▒▒▒] ${lucbotbares}%`
			} else if (lucbotbares <= 20) {
				lucbotbatrai = `[██▒▒▒▒▒▒▒▒] ${lucbotbares}%`
			} else if (lucbotbares <= 30) {
				lucbotbatrai = `[███▒▒▒▒▒▒▒] ${lucbotbares}%`
			} else if (lucbotbares <= 40) {
				lucbotbatrai = `[████▒▒▒▒▒▒] ${lucbotbares}%`
			} else if (lucbotbares <= 50) {
				lucbotbatrai = `[█████▒▒▒▒▒] ${lucbotbares}%`
			} else if (lucbotbares <= 60) {
				lucbotbatrai = `[██████▒▒▒▒] ${lucbotbares}%`
			} else if (lucbotbares <= 70) {
				lucbotbatrai = `[███████▒▒▒] ${lucbotbares}%`
			} else if (lucbotbares <= 80) {
				lucbotbatrai = `[████████▒▒] ${lucbotbares}%`
			} else if (lucbotbares <= 90) {
				lucbotbatrai = `[█████████▒] ${lucbotbares}%`
			} else if (lucbotbares <= 100) {
				lucbotbatrai = `[██████████] ${lucbotbares}%`
			}
			
		//POTION HEAL
		const potionpoint = checkPotionuser(sender)
			var potionpointa = `💉:${potionpoint}`
			if (potionpoint <= 9999){
			}
		const megapotionpoint = checkMegaPotionuser(sender)
			var megapotionpointa = `💊:${megapotionpoint}`
			if (megapotionpoint <= 9999){
			}
		//MINING
		const berlianpoint = checkBerlianuser(sender)
			var berlianpointa = `💎:${berlianpoint}`
			if (berlianpoint <= 9999){
			}
		const emaspoint = checkEmasuser(sender)
			var emaspointa = `🥇:${emaspoint}`
			if (emaspoint <= 9999){
			}
		const perakpoint = checkPerakuser(sender)
			var perakpointa = `🥈:${perakpoint}`
			if (perakpoint <= 9999){
			}
		const perunggupoint = checkPerungguuser(sender)
			var perunggupointa = `🥉:${perunggupoint}`
			if (perunggupoint <= 9999){
			}
		const ironpoint = checkIronuser(sender)
			var ironpointa = `⚙️:${ironpoint}`
			if (ironpoint <= 9999){
			}
		const brickpoint = checkBrickuser(sender)
			var brickpointa = `🧱:${brickpoint}`
			if (brickpoint <= 9999){
			}
		const stonepoint = checkStoneuser(sender)
			var stonepointa = `🪨:${stonepoint}`
			if (stonepoint <= 9999){
			}
//SAMPAH
		const kerangajaibnpoint = checkKerangajaibuser(sender)
			var kerangajaibnpointa = `🐚:${kerangajaibnpoint}`
			if (kerangajaibnpoint <= 9999){
			}
		const jamurpoint = checkJamuruser(sender)
			var jamurpointa = `🍄:${jamurpoint}`
			if (jamurpoint <= 9999){
			}
		const daunmaplepoint = checkDaunmapleuser(sender)
			var daunmaplepointa = `🍁:${daunmaplepoint}`
			if (daunmaplepoint <= 9999){
			}
		const daunpoint = checkDaunuser(sender)
			var daunpointa = `🍃:${daunpoint}`
			if (daunpoint <= 9999){
			}
		const daun1point = checkDaun1user(sender)
			var daun1pointa = `🍂:${daun1point}`
			if (daun1point <= 9999){
			}
		const daun2point = checkDaun2user(sender)
			var daun2pointa = `🌿:${daun2point}`
			if (daun2point <= 9999){
			}
		const clover3point = checkClover3user(sender)
			var clover3pointa = `☘️:${clover3point}`
			if (clover3point <= 9999){
			}
		const clover4point = checkClover4user(sender)
			var clover4pointa = `🍀:${clover4point}`
			if (clover4point){
			}
		const kayunpoint = checkKayuuser(sender)
			var kayupointa = `🪵:${kayunpoint}`
			if (kayunpoint <= 9999){
			}
		const bibitpoint = checkBibituser(sender)
			var bibitpointa = `🌱:${bibitpoint}`
			if (bibitpoint <= 9999){
			}
		const puzzlepoint = checkPuzzleuser(sender)
			var puzzlepointa = `🧩:${puzzlepoint}`
			if (puzzlepoint <= 9999){
			}
		//AKUARIUM
		const kurakurapoint = checkKurakurauser(sender)
			var kurakuraa = `🐢:${kurakurapoint}`
			if (kurakurapoint <= 9999){
			}
		const guritapoint = checkGuritauser(sender)
			var guritaa = `🐙:${guritapoint}`
			if (guritapoint <= 9999){
			}
		const cumicumipoint = checkCumicumiuser(sender)
			var cumicumia = `🦑:${cumicumipoint}`
			if (cumicumipoint <= 9999){
			}
		const udangpoint = checkUdanguser(sender)
			var udanga = `🦐:${udangpoint}`
			if (udangpoint <= 9999){
			}
		const lobsterpoint = checkLobsteruser(sender)
			var lobstera = `🦞:${lobsterpoint}`
			if (lobsterpoint <= 9999){
			}
		const kepitingpoint = checkKepitinguser(sender)
			var kepitingaa = `🦀:${kepitingpoint}`
			if (kepitingpoint <= 9999){
			}
		const pufferfishpoint = checkPufferfishuser(sender)
			var pufferfisha = `🐡:${pufferfishpoint}`
			if (pufferfishpoint <= 9999){
			}
		const ikanpoint = checkIkanuser(sender)
			var ikana = `🐠:${ikanpoint}`
			if (ikanpoint <= 9999){
			}
		const ikan2point = checkIkan2user(sender)
			var ikan2a = `🐟:${ikan2point}`
			if (ikan2point <= 9999){
			}
		const lumbalumbapoint = checkLumbalumbauser(sender)
			var lumbalumbaa = `🐬:${lumbalumbapoint}`
			if (lumbalumbapoint <= 9999){
			}
		const pauspoint = checkPaususer(sender)
			var pausa = `🐳:${pauspoint}`
			if (pauspoint <= 9999){
			}
		const paus2point = checkPaus2user(sender)
			var paus2a = `🐋:${paus2point}`
			if (paus2point <= 9999){
			}
		const hiupoint = checkHiuuser(sender)
			var hiua = `🦈:${hiupoint}`
			if (hiupoint <= 9999){
			}
		const seadogpoint = checkSeadoguser(sender)
			var seadoga = `🦭:${seadogpoint}`
			if (seadogpoint <= 9999){
			}
			
		const hearts = checkHealuser(sender)
			var heartbars = `❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤`
			if (hearts <= 0) {
				heartbars = `🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤`
			} else if (hearts <= 5) {
				heartbars = `💔🖤🖤🖤🖤🖤🖤🖤🖤🖤`
			} else if (hearts <= 10) {
				heartbars = `❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤`
			} else if (hearts <= 15) {
				heartbars = `❤️💔🖤🖤🖤🖤🖤🖤🖤🖤`
			} else if (hearts <= 20) {
				heartbars = `❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤`
			} else if (hearts <= 25) {
				heartbars = `❤️❤️💔🖤🖤🖤🖤🖤🖤🖤`
			} else if (hearts <= 30) {
				heartbars = `❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤`
			} else if (hearts <= 35) {
				heartbars = `❤️❤️❤️💔🖤🖤🖤🖤🖤🖤`
			} else if (hearts <= 40) {
				heartbars = `❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤`
			} else if (hearts <= 45) {
				heartbars = `❤️❤️❤️❤️💔🖤🖤🖤🖤🖤`
			} else if (hearts <= 50) {
				heartbars = `❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤`
			} else if (hearts <= 55) {
				heartbars = `❤️❤️❤️❤️❤️💔🖤🖤🖤🖤`
			} else if (hearts <= 60) {
				heartbars = `❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤`
			} else if (hearts <= 65) {
				heartbars = `❤️❤️❤️❤️❤️❤️💔🖤🖤🖤}`
			} else if (hearts <= 70) {
				heartbars = `❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤`
			} else if (hearts <= 75) {
				heartbars = `❤️❤️❤️❤️❤️❤️❤️💔🖤🖤`
			} else if (hearts <= 80) {
				heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤`
			} else if (hearts <= 85) {
				heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️💔🖤`
			} else if (hearts <= 90) {
				heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤`
			} else if (hearts <= 95) {
				heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️❤️💔`
			} else if (hearts <= 200) {
				heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️`
			} else if (hearts <= 150) {
				heartbars = `♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️`
			} else if (hearts <= 300) {
				heartbars = `💖💖💖💖💖💖💖💖💖💖`
			} else if (hearts <= 400) {
				heartbars = `💗💗💗💗💗💗💗💗💗💗`
			} else if (hearts <= 1000) {
				heartbars = `💝💝💝💝💝💝💝💝💝💝`
			} else if (hearts <= 9999)

		 var prema = 'GRATISAN'
			if (isGroupAdmins) {
				prema = 'AdminGrup'
			} 
			if (isAdmin) {
				prema = 'AdminBot'
			}
			if (isPremium) {
				prema = 'Premium'
			} 
			if (isOwner) {
				prema = 'Owner'
			}
			
			var sistem0 = 'OFF❎'
			if (isBadWord) {
				sistem0 = 'ON✅'
			}
			if (!isBadWord) {
				sistem0 = 'OFF❎'
			} 
			var sistem1 = 'OFF❎'
			if (isAntilink) {
				sistem1 = 'ON✅'
			}
			if (!isAntilink) {
				sistem1 = 'OFF❎'
			}
			var sistem2 = 'OFF❎'
			if (isAntiVirtex) {
				sistem2 = 'ON✅'
			}
			if (!isAntiVirtex) {
				sistem2 = 'OFF❎'
			}
			var sistem3 = 'OFF❎'
			if (isAntilinkFb) {
				sistem3 = 'ON✅'
			}
			if (!isAntilinkFb) {
				sistem3 = 'OFF❎'
			}
			var sistem4 = 'OFF❎'
			if (isAntilinkTt) {
				sistem4 = 'ON✅'
			}
			if (!isAntilinkTt) {
				sistem4 = 'OFF❎'
			}
			var sistem5 = 'OFF❎'
			if (isAntilinkIg) {
				sistem5 = 'ON✅'
			}
			if (!isAntilinkIg) {
				sistem5 = 'OFF❎'
			}
			var sistem6 = 'OFF❎'
			if (isAnime) {
				sistem6 = 'ON✅'
			}
			if (!isAnime) {
				sistem6 = 'OFF❎'
			}
			var sistem7 = 'OFF❎'
			if (isWelkom) {
				sistem7 = 'ON✅'
			}
			if (!isWelkom) {
				sistem7 = 'OFF❎'
			}
			var sistem8 = 'OFF❎'
			if (isSimi) {
				sistem8 = 'ON✅'
			}
			if (!isSimi) {
				sistem8 = 'OFF❎'
			}
			var sistem9 = 'OFF❎'
			if (isAntilinkTele) {
				sistem9 = 'ON✅'
			}
			if (!isAntilinkTele) {
				sistem9 = 'OFF❎'
			}
			var sistem10 = 'OFF❎'
			if (isAntilinkWa) {
				sistem10 = 'ON✅'
			}
			if (!isAntilinkWa) {
				sistem10 = 'OFF❎'
			}
			var sistem11 = 'OFF❎'
			if (isAntilinkTwit) {
				sistem11 = 'ON✅'
			}
			if (!isAntilinkTwit) {
				sistem11 = 'OFF❎'
			}
			
			var angka = '1'
			if (isAdmin) {
				angka = '1'
			}
			if (isPremium) {
				angka = '1'
			} 
			if (isOwner) {
				angka = '0'
			}
			
//FUCTION LEVELING
            if (isGroup && isRegistered) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 1) + 0
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    addLimitUser(sender, 10)
					addPremlimitUser(sender, 5)
                    await reply(ind.levelup(pushname, sender, getLevelingXp, getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }

		
		
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            client.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
		
	  const point = Math.floor(Math.random() * 1) + 0
            //checkATM
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                addKoinUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkLimit
            if (isRegistered ) {
            const checkLimit = checkLimituser(sender)
            try {
                if (checkLimit === undefined) addLimit(sender)
                addLimitUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		
		//checkpremLimit
            if (isRegistered ) {
            const checkpremLimit = checkpremLimituser(sender)
            try {
                if (checkpremLimit === undefined) addpremLimit(sender)
                addPremlimitUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkHeal
            if (isRegistered ) {
            const checkHeal = checkHealuser(sender)
            try {
                if (checkHeal === undefined) addHeal(sender)
                addHealUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkPotion
            if (isRegistered ) {
            const checkPotion = checkPotionuser(sender)
            try {
                if (checkPotion === undefined) addPotion(sender)
                addPotionUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkMegaPotion
            if (isRegistered ) {
            const checkMegaPotion = checkMegaPotionuser(sender)
            try {
                if (checkMegaPotion === undefined) addMegaPotion(sender)
                addMegaPotionUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//addEmasUser
            if (isRegistered ) {
            const checkEmas = checkEmasuser(sender)
            try {
                if (checkEmas === undefined) addEmas(sender)
                addEmasUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkBerlian
            if (isRegistered ) {
            const checkBerlian = checkBerlianuser(sender)
            try {
                if (checkBerlian === undefined) addBerlian(sender)
                addBerlianUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkPerak
            if (isRegistered ) {
            const checkPerak = checkPerakuser(sender)
            try {
                if (checkPerak === undefined) addPerak(sender)
                addPerakUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkPerunggu
            if (isRegistered ) {
            const checkPerunggu = checkPerungguuser(sender)
            try {
                if (checkPerunggu === undefined) addPerunggu(sender)
                addPerungguUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
	//checkIron
            if (isRegistered ) {
            const checkIron = checkIronuser(sender)
            try {
                if (checkIron === undefined) addIron(sender)
                addIronUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkBrick
            if (isRegistered ) {
            const checkBrick = checkBrickuser(sender)
            try {
                if (checkBrick === undefined) addBrick(sender)
                addBrickUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkStone
            if (isRegistered ) {
            const checkStone = checkStoneuser(sender)
            try {
                if (checkStone === undefined) addStone(sender)
                addStoneUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
//SAMPAH
//checkKerangajaib
            if (isRegistered ) {
            const checkKerangajaib = checkKerangajaibuser(sender)
            try {
                if (checkKerangajaib === undefined) addKerangajaib(sender)
                addKerangajaibUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkJamur
            if (isRegistered ) {
            const checkJamur = checkJamuruser(sender)
            try {
                if (checkJamur === undefined) addJamur(sender)
                addJamurUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkDaunmaple
            if (isRegistered ) {
            const checkDaunmaple = checkDaunmapleuser(sender)
            try {
                if (checkDaunmaple === undefined) addDaunmaple(sender)
                addDaunmapleUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkDaun
            if (isRegistered ) {
            const checkDaun = checkDaunuser(sender)
            try {
                if (checkDaun === undefined) addDaun(sender)
                addDaunUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkDaun1
            if (isRegistered ) {
            const checkDaun1 = checkDaun1user(sender)
            try {
                if (checkDaun1 === undefined) addDaun1(sender)
                addDaun1User(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkDaun2
            if (isRegistered ) {
            const checkDaun2 = checkDaun2user(sender)
            try {
                if (checkDaun2 === undefined) addDaun2(sender)
                addDaun2User(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkClover3
            if (isRegistered ) {
            const checkClover3 = checkClover3user(sender)
            try {
                if (checkClover3 === undefined) addClover3(sender)
                addClover3User(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkClover4
            if (isRegistered ) {
            const checkClover4 = checkClover4user(sender)
            try {
                if (checkClover4 === undefined) addClover4(sender)
                addClover4User(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkKayu
            if (isRegistered ) {
            const checkKayu = checkKayuuser(sender)
            try {
                if (checkKayu === undefined) addKayu(sender)
                addKayuUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkBibit
            if (isRegistered ) {
            const checkBibit = checkBibituser(sender)
            try {
                if (checkBibit === undefined) addBibit(sender)
                addBibitUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkPuzzle
            if (isRegistered ) {
            const checkPuzzle = checkPuzzleuser(sender)
            try {
                if (checkPuzzle === undefined) addPuzzle(sender)
                addPuzzleUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
 //AKUARIUM ITEM
		//checkKurakura
            if (isRegistered ) {
            const checkKurakura = checkKurakurauser(sender)
            try {
                if (checkKurakura === undefined) addKurakura(sender)
                addKurakuraUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkGurita
            if (isRegistered ) {
            const checkGurita = checkGuritauser(sender)
            try {
                if (checkGurita === undefined) addGurita(sender)
                addGuritaUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkCumicumi
            if (isRegistered ) {
            const checkCumicumi = checkCumicumiuser(sender)
            try {
                if (checkCumicumi === undefined) addCumicumi(sender)
                addCumicumiUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkUdang
            if (isRegistered ) {
            const checkUdang = checkUdanguser(sender)
            try {
                if (checkUdang === undefined) addUdang(sender)
                addUdangUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkLobster
            if (isRegistered ) {
            const checkLobster = checkLobsteruser(sender)
            try {
                if (checkLobster === undefined) addLobster(sender)
                addLobsterUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkKepiting
            if (isRegistered ) {
            const checkKepiting = checkKepitinguser(sender)
            try {
                if (checkKepiting === undefined) addKepiting(sender)
                addKepitingUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkPufferfish
            if (isRegistered ) {
            const checkPufferfish = checkPufferfishuser(sender)
            try {
                if (checkPufferfish === undefined) addPufferfish(sender)
                addPufferfishUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkIkan
            if (isRegistered ) {
            const checkIkan = checkIkanuser(sender)
            try {
                if (checkIkan === undefined) addIkan(sender)
                addIkanUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkIkan2
            if (isRegistered ) {
            const checkIkan2 = checkIkan2user(sender)
            try {
                if (checkIkan2 === undefined) addIkan2(sender)
                addIkan2User(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkLumbalumba
            if (isRegistered ) {
            const checkLumbalumba = checkLumbalumbauser(sender)
            try {
                if (checkLumbalumba === undefined) addLumbalumba(sender)
                addLumbalumbaUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
				//checkPaus
            if (isRegistered ) {
            const checkPaus = checkPaususer(sender)
            try {
                if (checkPaus === undefined) addPaus(sender)
                addPausUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
				//checkPaus2
            if (isRegistered ) {
            const checkPaus2 = checkPaus2user(sender)
            try {
                if (checkPaus2 === undefined) addPaus2(sender)
                addPaus2User(sender, point)
            } catch (err) {
                console.error(err)
            }
        }		
		//checkHiu
            if (isRegistered ) {
            const checkHiu = checkHiuuser(sender)
            try {
                if (checkHiu === undefined) addHiu(sender)
                addHiuUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
		//checkSeadog
            if (isRegistered ) {
            const checkSeadog = checkSeadoguser(sender)
            try {
                if (checkSeadog === undefined) addSeadog(sender)
                addSeadogUser(sender, point)
            } catch (err) {
                console.error(err)
            }
        }
        
    /*--------------------[ Tictactoe Game Function ]--------------------*/

const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
               budy.toLowerCase() == "y" ||
               budy.toLowerCase() == "yes" ||
               budy.toLowerCase() == "ya"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`Game telah dimulai sebelumnya!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮 Tictactoe Game 🎳*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
                    client.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } else {
                    client.sendMessage(
                         from,
                         `Opsi ini hanya untuk @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } else if (
               budy.toLowerCase() == "n" ||
               budy.toLowerCase() == "no" ||
               budy.toLowerCase() == "tidak"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`Game telah dimulai sebelumnya!`);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    client.sendMessage(
                         from,
                         `Sayangnya tantangan @${boardnow.X} ditolak ❌😕`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    client.sendMessage(
                         from,
                         `Opsi ini hanya untuk @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }

     if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status) return reply(`Sepertinya lawan anda belum menerima / menolak tantangan.`)
          if (
               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
               sender.replace("@s.whatsapp.net", "")
          )
               return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
               if (moving.winner == "SERI") {
                    const chatEqual = `*🎮 Tictactoe Game 🎳*
          
Game berakhir seri 😐
`;

                    reply(chatEqual);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    return;
               }
               const winnerJID = moving.winner == "O" ? moving.O : moving.X;
               const looseJID = moving.winner == "O" ? moving.X : moving.O;
               const limWin = Math.floor(Math.random() * 20) + 10;
               const limLoose = Math.floor(Math.random() * 10) + 5;
               const chatWon = `*🎮 Tictactoe Game 🎳*
          
Telah dimenangkan oleh @${winnerJID} 😎👑
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
               client.sendMessage(from, chatWon, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.winner == "O" ?
                                   moving.O + "@s.whatsapp.net" :
                                   moving.X + "@s.whatsapp.net",
                         ],
                    },
               });
               fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
          } else {
               const chatMove = `*🎮 Tictactoe Game 🎳*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Giliran : @${moving.turn == "X" ? moving.X : moving.O}


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
               client.sendMessage(from, chatMove, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.X + "@s.whatsapp.net",
                              moving.O + "@s.whatsapp.net",
                         ],
                    },
               });
          }
     }      
		
		
			//FUNCTION BUTTON BY VIAN OFC
			

if (pickbutton == 'Grup Buka') {
          if (!isGroup) {return reply(ind.groupo())};
          if (!isRegistered) {return reply3(ind.noregis())};
          if (isBanned) {return reply3(ind.baned())};
          if (!isBotGroupAdmins) {return reply(ind.badmin())};
          if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) 
          {return reply(ind.admin())}
          client.groupSettingChange(from, GroupSettingChange.messageSend, false);
          reply('Sukses Membuka Group')
          } else {
if (pickbutton == 'Grup Tutup') 
         {
         if (!isGroup) 
         {return reply(ind.groupo())};
         if (!isRegistered) 
         {return reply3(ind.noregis())};
         if (isBanned) 
         {return reply3(ind.baned())};
         if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) 
         {return reply(ind.admin())}
         if (!isBotGroupAdmins) 
         {return reply(ind.badmin())};
         client.groupSettingChange(from, GroupSettingChange.messageSend, true);
         reply('Sukses Menutup Group')
         }
}
if (pickbutton == 'Menu Owner') {
         if (!isRegistered) return reply(ind.noregis())
         if (isBanned) return reply(ind.baned())
         if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
         reply(ownermenu(prefix, f))
}
         if (pickbutton == 'Menu Other') {
         if (!isRegistered) return reply(ind.noregis())
         if (isBanned) return reply(ind.baned())
         reply(infomenu(prefix, f))
}
if (pickbutton == 'Menu Grup') {
         if (!isRegistered) return reply(ind.noregis())
         if (isBanned) return reply(ind.baned())
         if (!isGroup) return reply(ind.groupo())
         reply(grupseting(prefix, f, sistem0, sistem1, sistem2, sistem3, sistem4, sistem5, sistem6, sistem7, sistem8, sistem9, sistem10, sistem11))
}
if (pickbutton == 'Menu Game') {
         if (!isRegistered) return reply(ind.noregis())
         if (isBanned) return reply(ind.baned())
         if (!isGroup) return reply(ind.groupo())
         reply(minigame(prefix, f))
}
if (pickbutton == 'Menu Gabut') {
        if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())
        if (!isGroup) return reply(ind.groupo())
        reply(gabutmenu(prefix, f))
}
if (pickbutton == 'Menu Download') {
        if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())
        reply(downloadmenu(prefix, f))
}
if (pickbutton == 'Menu Maker') {
        if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())
        reply(makermenu(prefix, f))
}
if (pickbutton == 'Menu Media') {
        if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())
        reply(mediamenu(prefix, f))
}
if (pickbutton == 'Menu Aesthetic') {
        if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())
        reply(aesthetic(prefix, f))
}
if (pickbutton == 'Shop Menu') {
        if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())
        reply(shopmenu(prefix, f))
}
if (pickbutton == 'Dompet Menu') {
        if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())
        reply(ransel(prefix, sender, checkHealuser, heartbars, checkLimituser, checkpremLimituser, potionpointa, megapotionpointa, berlianpointa, emaspointa, perakpointa, perunggupointa, ironpointa, brickpointa, stonepointa, kerangajaibnpointa, jamurpointa, daunmaplepointa, daunpointa, daun1pointa, daun2pointa, clover3pointa, clover4pointa, kayupointa, bibitpointa, puzzlepointa, f))
}
if (pickbutton == 'Aquarium') {
        if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())
        reply(akuarium(prefix, sender, heartbars, kurakuraa, guritaa, cumicumia, udanga, lobstera, kepitingaa, pufferfisha, ikana, ikan2a, lumbalumbaa, pausa, paus2a, hiua, seadoga, checkLimituser, checkpremLimituser, checkPotionuser, checkHealuser, f))
}
if (pickbutton == 'Info Menu') {
        if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())
        reply(infomenu(prefix, f))
}
if (pickbutton == '+62') {
        if (!isPremium) return reply( ind.premo())               	           
        if (!isRegistered) return reply( ind.noregis())
        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
        sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=ItsMeVean`)
}
if (pickbutton == 'santuy') {
       if (!isPremium) return reply( ind.premo())               	           
       if (!isRegistered) return reply( ind.noregis())
       if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
       sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=ItsMeVean`)
}
if (pickbutton == 'bocil') {
        if (!isPremium) return reply( ind.premo())               	           
        if (!isRegistered) return reply( ind.noregis())
        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
        sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=ItsMeVean`)
}
if (pickbutton == 'ukhti') {
       if (!isPremium) return reply( ind.premo())
       if (!isRegistered) return reply( ind.noregis())
       if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
       sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=ItsMeVean`)
}
if (pickbutton == 'rikagusriani') {
        if (!isPremium) return reply( ind.premo())               	           
        if (!isRegistered) return reply( ind.noregis())
        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
        sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=ItsMeVean`)
}
if (pickbutton == 'ghea') {
        if (!isPremium) return reply( ind.premo())               	           
        if (!isRegistered) return reply( ind.noregis())
        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
        sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=ItsMeVean`)
}


//Button Cmd 2
//let R = fs.readFileSync(`image/hayo.jpeg`)
//let Y = fs.readFileSync(`image/hayo.jpeg`)
//let N = fs.readFileSync(`image/hayo.jpeg`)

if(selectedButton == 'lucbutton1'){
        if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())      
let po = client.prepareMessageFromContent(from, 
{
"listMessage": {
"title": `≡ 𝐘𝐀𝐊𝐔𝐙𝐀 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔\n\nSelamat ${tampilHari} ${pushname}`,
"description": "```Use The Bot As Best You Can And Dont Misuse The Bot Feature```",
"buttonText": "SELECT",
"listType": "SINGLE_SELECT",
"sections": [{
"title": "Jangan Lupa Follow IG @vian.ofc__",
"rows": [{
"title": "Menu Owner",
"description": "\n\n*I want to use the ownerpmenu command*",
"rowId": ""
}, {
"title": "Menu Other",
"description": "\n\n*I want to use the othermenu command*",
"rowId": ""
}, {
"title": "Menu Grup",
"description": "\n\n*I want to use the grupmenu command*",
"rowId": ""
}, {
"title": "Menu Game",
"description": "\n\n*I want to use the gamemenu command*",
"rowId": ""
}, {
"title": "Menu Gabut",
"description": "\n\n*I want to use the gabutmenu command*",
"rowId": ""
}, {
"title": "Menu Download",
"description": "\n\n*I want to use the downloadmenu command*",
"rowId": ""
}, {
"title": "Menu Maker",
"description": "\n\n*I want to use the makermenu command*",
"rowId": ""
}, {
"title": "Menu Media",
"description": "\n\n*I want to use the mediamenu command*",
"rowId": ""
}, {
"title": "Menu Aesthetic",
"description": "\n\n*I want to use the aestheticmenu command*",
"rowId": ""
}, {
"title": "Shop Menu",
"description": "\n\n*I want to use the shopmenu command*",
"rowId": ""
}, {
"title": "Dompet Menu",
"description": "\n\n*I want to use the dompetmenu command*",
"rowId": ""
}, {
"title": "Aquarium",
"description": "\n\n*I want to use the aquariummenu command*",
"rowId": ""
}, {
"title": "Info Menu",
"description": "\n\n*I want to use the infomenu command*",
"rowId": ""
}]
}]
}
}, {quoted:mek});
client.relayWAMessage(po, {waitForAck: true})
} else if(selectedButton == 'lucbutton2'){
	if (!isRegistered) return reply(ind.noregis())
	if (isBanned) return reply(ind.baned())
	wew = fs.readFileSync(`./image/luc.jpg`)
	if (!isRegistered) return reply(ind.noregis())
        premiummember = `🔰 -----[ 「 *SEWA BOT* 」 ]----- 🔰

◯ Sewa Seminggu  : 15k
◯ Sewa Sebulan   : 30k
◯ Sewa 3 bulan   : 50k
◯ Sewa selamanya : 100K

 *DONASI :*
◯ _Smartfren:088221542833_
◯ _Ovo:088221542833_

*NOTE :* Setiap pembelian premium mendapatkan premlimit random

Minat? Silahkan ketik #owner` 
            reply(premiummember)
} else if(selectedButton == 'lucbutton3'){
	if (!isRegistered) return reply(ind.noregis())
           client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
} else if(selectedButton == 'lucbutton4'){
        nehh = `🔰 -----[ 「 *RULES BOT* 」 ]----- 🔰
──────────────────────

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC
───────────────────────
JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!`
reply(nehh)
}

/* EVAL && MEK
============================*/

    if (budy.startsWith('=>')){
    if (!isOwner && !mek.key.fromMe) 
    return reply('lu siapa?')
    var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
   
if (sat == undefined){
bang = util.format(sul)
}
   return reply(bang)
   }
try {
   reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} 
   catch(e){
   reply(String(e))
}
}

   
//===============[ MUTE ]============
if (isMuted){
            if (!isGroupAdmins && !isOwner) return
            if (chats.toLowerCase().startsWith(prefix+'unmute')){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/bot/mute.json', JSON.stringify(mute))
                reply(`Bot telah diunmute di group ini`)
            }
        }
        
     /*ANTIBADWORD nobadword
      ============================*/
	if (bad.includes(messagesC)){
	if (!isGroup) return
	if (!isBadWord) return
	if (isGroupAdmins) return reply('*Jaga Ucapannya Min😇*')
	client.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TOXIC TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
	setTimeout( () => {
	    client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}, 1000)
	setTimeout( () => {
	    client.updatePresence(from, Presence.composing)
	    reply("「 𝗕𝗔𝗖𝗔𝗞𝗔𝗡 𝗔𝗟𝗙𝗔𝗧𝗜𝗛𝗔𝗛 」𝗞𝗶𝘁𝗮 𝗱𝗼𝗮𝗸𝗮𝗻 𝘀𝗲𝗺𝗼𝗴𝗮 𝗱𝗶𝗮 𝗗𝗶𝗯𝗲𝗿𝗶𝗸𝗮𝗻 𝗛𝗶𝗱𝗮𝘆𝗮𝗵 𝗦𝗮𝗺𝗮 𝗔𝗹𝗹𝗮𝗵, 𝗯𝗶𝗮𝗿 𝗴𝗮𝗸 𝗸𝗮𝘀𝗮𝗿 𝗟𝗮𝗴𝗶 𝗨𝗰𝗮𝗽𝗮𝗻𝗻𝘆𝗮.")
	}, 0)
    }
			 /*********** FUNCTION ANTIVIRTEX ***********/
	 if (budy.includes("๒๒")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 VIRTEX TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	if (budy.includes("🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 VIRTEX TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	if (budy.includes("𝐗-𝐕𝐢𝐫𝐮𝐬")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 VIRTEX TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	if (budy.includes("*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 VIRTEX TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	if (budy.includes("𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈𝐓𝐀𝐍")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 VIRTEX TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	if (budy.includes("♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚")){
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 VIRTEX TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
		 /*********** FUNCTION ANTILINK ***********/
	 if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 LINK GROUP TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	if (budy.includes("://t.me/joinchat/")){
		if (!isGroup) return
		if (!isAntilinkTele) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 LINK TELEGRAM GROUP TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	if (budy.includes("://t.me/")){
		if (!isGroup) return
		if (!isAntilinkTele) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 LINK TELEGRAM GROUP TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
if (budy.includes("://www.instagram.com/")){
		if (!isGroup) return
		if (!isAntilinkIg) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 LINK INSTAGRAM TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	if (budy.includes("://www.facebook.com/")){
		if (!isGroup) return
		if (!isAntilinkFb) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 LINK FACEBOOK TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	if (budy.includes("://wa.me/")){
		if (!isGroup) return
		if (!isAntilinkWa) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 LINK WHATSAAPP TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}	
	if (budy.includes("wa.me/")){
		if (!isGroup) return
		if (!isAntilinkWa) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 LINK WHATSAAPP TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}	
	if (budy.includes("://vt.tiktok.com/")){
		if (!isGroup) return
		if (!isAntilinkTt) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 LINK TIKTOK TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	if (budy.includes("://vm.tiktok.com/")){
		if (!isGroup) return
		if (!isAntilinkTt) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 LINK TIKTOK TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}	
	if (budy.includes("://twitter.com/")){
		if (!isGroup) return
		if (!isAntilinkTwit) return
		if (isGroupAdmins) return reply('*admin mah bebas*')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    reply(` *「 LINK TWITTER TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`)
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}		
			
const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
const uangku = checkATMuser(sender)
  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//antispam
        if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return reply(`JANGAN SPAM`)
        }
        if (isCmd && msgFilter.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return reply(`JANGAN SPAM`)
        }
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			 if (!isGroup && !isCmd) console.log(color(time, "white"), color("[PRIVATE]", "aqua"), color(budy, "white"), "from", color(pushname, "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[GROUP]", "aqua"), color(budy, "white"), "from", color(pushname, "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[COMMAND]", "aqua"), color(budy, "white"), "from", color(pushname, "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[COMMAND]", "aqua"), color(budy, "white"), "from", color(pushname, "yellow"), "in", color(groupName, "yellow"))
						
			
			if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       client.sendMessage(from, `Success`, `STATUS : SELF`)
     }
     if (chats.toLowerCase() == 'status'){
       client.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
     }
   }
   
   var kuis = false


            // AFK
            for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Maaf user yang anda reply atau tag sedang afk. "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afk[x.split('@')[0]]
                    }
                    reply(ini_txt)
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
			
			// Tebak Gambar
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && budy.match(/[1-9]{1}/)) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/minigame/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Anda Salah!")
                }
            }

            // Sambung Kata
            if (sambungkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
            reply('Fitur ini sedang diperbaiki')
                kuis = true
                jawaban = sambungkata[sender.split('@')[0]]
                userAnswer = budy.toLowerCase()
                if (userAnswer.startsWith(jawaban[jawaban.length - 1])) {
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${LoLKey}&text=${userAnswer}`)
                    await client.sendMessage(from, get_result.result, text, { quoted: mek }).then(() => {
                        sambungkata[sender.split('@')[0]] = get_result.result.toLowerCase()
                        fs.writeFileSync("./database/minigame/sambungkata.json", JSON.stringify(sambungkata))
                    })
                } else {
                    reply("Silahkan jawab dengan kata yang dimulai huruf " + jawaban[jawaban.length - 1])
                }
            }

            // Akinator
            // Premium / VIP apikey only
            if (akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
                kuis = true
                var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
                if (step == "0" && budy == "5") return reply("Maaf Anda telah mencapai pertanyaan pertama")
                var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${LoLKey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                if (get_result.hasOwnProperty("name")) {
                    var ini_name = get_result.name
                    var description = get_result.description
                    var ini_image = get_result.image
                    var ini_image = await getBuffer(ini_image)
                    ini_txt = `${ini_name} - ${description}\n\n`
                    ini_txt += "Sekian dan terima kasih"
                    await client.sendMessage(from, ini_image, image, { quoted: mek, caption: ini_txt }).then(() => {
                        delete akinator[sender.split('@')[0]]
                        fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    })
                    return
                }
                var { question, _, step } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak\n"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                if (budy == "5") {
                    var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${LoLKey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                    var get_result = await fetchJson(ini_url)
                    var get_result = get_result.result
                    var { question, _, step } = get_result
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                }
                await client.sendMessage(from, ini_txt, text, { quoted: mek }).then(() => {
                    const data_ = akinator[sender.split('@')[0]]
                    data_["question"] = question
                    data_["step"] = step
                    akinator[sender.split('@')[0]] = data_
                    fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                })
            }
const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore',,'Land of Dawn','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
const adv = dungeon[Math.floor(Math.random() * dungeon.length)]
            const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
			const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
            const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]
			const notc = ['😊','😃','😗','🙂','😶','😣','🙁','😞','😬']
            const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const notc1 = notc[Math.floor(Math.random() * (notc.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
const RAM = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model, device_network, cpu_device, device_battery, device_ram } = client.user.phone

const count =['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','4','5','5','5','5','5','5','5','5','5','5','5','5','5','5','5','5','5','5','5','5','5','6','6','6','6','6','6','6','6','6','6','6']

const count11 = count[Math.floor(Math.random() * (count.length))]
const count1 = count11 * 1
const count22 = count[Math.floor(Math.random() * (count.length))]
const count2 = count22 * 1
const count33 = count[Math.floor(Math.random() * (count.length))]
const count3 = count33 * 1
const count44 = count[Math.floor(Math.random() * (count.length))]
const count4 = count44 * 1
const count55 = count[Math.floor(Math.random() * (count.length))]
const count5 = count55 * 1
const count66 = count[Math.floor(Math.random() * (count.length))]
const count6 = count66 * 1
const count77 = count[Math.floor(Math.random() * (count.length))]
const count7 = count77 * 1
const count88 = count[Math.floor(Math.random() * (count.length))]
const count8 = count88 * 1
const count99 = count[Math.floor(Math.random() * (count.length))]
const count9 = count99 * 1
const count100 = count[Math.floor(Math.random() * (count.length))]
const count10 = count100 * 1
const count111 = count[Math.floor(Math.random() * (count.length))]
const count110 = count111 * 1
const count112 = count[Math.floor(Math.random() * (count.length))]
const count12 = count112 * 1
const count113 = count[Math.floor(Math.random() * (count.length))]
const count13 = count113 * 1
const count114 = count[Math.floor(Math.random() * (count.length))]
const count14 = count114 * 1
const count115 = count[Math.floor(Math.random() * (count.length))]
const count15 = count115 * 1
const count116 = count[Math.floor(Math.random() * (count.length))]
const count16 = count116 * 1
const count117 = count[Math.floor(Math.random() * (count.length))]
const count17 = count117 * 1
const count118 = count[Math.floor(Math.random() * (count.length))]
const count18 = count118 * 1
const count119 = count[Math.floor(Math.random() * (count.length))]
const count19 = count119 * 1
const getexp = Math.ceil(Math.random() * 100000)
const getmoney = Math.ceil(Math.random() * 100000)   
const nayBulan = ['Bulan','Tahun','Hari','Minggu','Jam','Detik','Menit','Abad']
const nayBulan1 = nayBulan[Math.floor(Math.random() * (nayBulan.length))]
const date1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const date11 = date1[Math.floor(Math.random() * date1.length)]
const quot =['Let’s go out and relax!','Why am I crying? Because of onions!','Come on gimme some food!','What you need to do is believe. You have to believe it.','There is no coincidences in this world.','I’m not fat, I’m just… chubby.','I’m still very charming.','Let’s roll!','Yesterday has become the past, the future is not yet…known.','Being Unable to Eat, is The Most Terrifying.','Uaaaaggh!','My kiss grants you immortallity or death','Listen, your heart is beating for me','Look even your blood cant wait to escape from you','Keep it authentic, drink directly from the neck','Only a dead body does not betray','Darkness is closing in on the empire','Kneel and offer your life to me','Enjoy your last moments. Your end nears','I will drain every drop of blood from your body','Look at me darling. Am I that hideous?','Are you lost little lamb?','Isnt it to tease those hopeful minds','You should return my favor with blood','Your blood empowers me!','So... death catches up... ugh..','Agh..','hahahahaha Watch your back!','The ocean is not just our home, it is who we are','Tides rise, tides fall. This is the way','Feel the surge of the oceans!','The darkness can also be a friend','Turn everything to darkness!','Where there is light, there is shadow!','Do you know someone named Jack?','Aaghh!','Agggggh!','Dont stick your nose, where it doesnt belong','Resting at the bottom of the sea, are cold bodies of the greedy','Time to change my Northern Vale','I cant see through the ocean, nor your','Regret fills the faces of all drowning men','Hougghh-Hoaahh!','Ask the sea for mercy!','ahh... Well return.. to the.. ocean...','Uaahh...','Uggh, aahh...','ahh... Well return.. to the.. ocean...','I might not be a lighted man, but I do know my traits!','You do things my way, on my turf','You kiss your mama with that mouth? Not cool kiddo, not cool!','Any of you saw Claude lately? Little fella still owes me 500 gold!','Pay your debts!','No bargaining! Whoever you are, the price is fixed!','55','Shut up Detona, you talk too much.','Funny you should think people are more reliable than gold!','Easy boy, easy, dont panic!','They call me a paper chaser? Hah! But Detona, who isnt?','Hey Detona, this one is even dumb than you!','Detona is not fat! Hes just big boned.','run faster!','Dang it, Detona! I told you to watch your diet','I guess today... is not... my day…','I guess today... is not... my day…','Uhh... aahh...','Rocks, need no protection from the rain.','My words weigh as much as my weapons.','Its not your fault being defeated by me.','Justice is to hearts what strength is to body.','Cowards!','The power of Black Tortoise, is always formidable!','Huh.. Brotherhood, is a double-edged sword.','Strength does not come from the flesh, but from an unyielding will.','Just feel my heart stopping power!','Just feel my heart stopping power!','I set sparks flying, wherever I go!','Ugh.. It is my destiny to perish in magnificence and glory.','My.. Shield...','Ugghh...','Mighty oaks from little acorns grow','Kids pride usually comes before the fall','In death, I shall be reborn','All lives, are precious','The abyss may corrode our land, but not our iron will.',' Seeds of hope, are all over this land!','Hmm... Time teaches you things you cant learn from the books','Green leaves may fade, but wisdom is evergreen','Huh... For thousand of years, Ive searched in vain for the ancient ones',' Bloom! Against the wind!','What comes from the soil, returns to the soil...','Soil...','Uggh...','My name is Belerick','Dont touch me, i dont want to hurt you!','Belerick is not afraid of fire','Pointless conflict lead to pointless destruction','... I love this land!','I hate conflict!','Darn human... leave this place!','Save every living thing, save every life','Until my next awaken...','The Night Sky tells all','I have foreseen your fate','You, dont want to dance?','No secret is safe from me','Try to keep up! If you can','Ah! The stars are my beacon!','Death is nothing compared to my beliefs','If only, I could forget the past','Your fate has been sealed!','The underworld is your fate!','Hiyyeaahh!','Star!','The struggle is.. real...','ahh...','Uggh, aah...','I love the smell of gun power in the morning!','Ill show them true cruelty!','Do you want a drink? *burps','Those dead people knew what would happen if you get on my nerves!','A real fighter never runs.','Time to teach you guys a lesson.','One shot, one kill.','Related to some rules crabs!','Let me teach you some rules, crubs!','Chicken wing.','Uuaaarghhh!','Naahh!','Muscle of Iron, Bone of Steel','We are unity in diversity','No pain, No gain','Legends never surrender','I am Legend!','Om Telolet Om!','Huaahh','Hwoo-Agghh!','Legend.. will be.. back...','Agh','Uggh, aahh...','You are first in the cluster','We are Gloo.. ','Many hands make light work','We are an enigma','For better or for worse... ','We are in this together!','The abyss changed everything','If you like weirdos... ','We areactually cute!','Pull it together!... ','Sir yes Sir!','Group efforts!... ','Wisdom of the crowd','It’s not me... ','it’s us!','Onward!...','Where to?','Theres’s plenty of us!','Where are the rest of us?...','we are here!','Welcome to my castle, my friend','Harley is my most trusted partner.','The best spot to hide a leaf...','is the forest!','Now, we are Gloo!','Who to blame?','Evolution and Research are completely different.','Grock likes sleeping','Grock is powerful','Let grock go first','Grock, doesnt want to be your enemy','Sorry, i didnt mean to push you','Have you ever seen an ancient one?','Want to know my age?','So Tired... Im going to sleep','Gough','Ooohhh','Fight! Fight for the ultimate answer','A warriors strength comes from everything she loves','Hah! My axe begs to differ','Forefathers, I need my answer','A true warrior would give life to the things she wants to protect','Mother, I know you are watching over me','Where to next?','If only I had the power','I will not dishonor the name you gave me','I have to be strong enough, to shelter my people','Ill carry my faith to the Grave','Forging ahead is the only way for me to escape the past','Icefield Warriors, Dont bring shame Upon Our Ancestors Glory!','The past is the past!','I die a warrior..','Ough..','The real warrior is here!','Charge! Dont be a jelly!','I never go to the gym','A good soldier need both brain and guts','My Weapon is your shield','Wanna play wrist wrestling?','What else can you do','Show me your strength','Get out of the way!','Unbeliveable.. ugh...']
const quoti = quot[Math.floor(Math.random() * quot.length)]

  if (!public){
    if (!mek.key.fromMe) return
  }
//=================[ COMMAND STICKER ]============
		switch (commandstik) {
		
case "f8YRNqyEHsOSxchtIUgXb0Esx1QECjDlz9dJkLWT5ds=":
if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())       
let po = client.prepareMessageFromContent(from, 
{
"listMessage": {
"title": `≡ 𝐘𝐀𝐊𝐔𝐙𝐀 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔\n\nSelamat ${tampilHari} ${pushname}`,
"description": "```Use The Bot As Best You Can And Dont Misuse The Bot Feature```",
"buttonText": "SELECT",
"listType": "SINGLE_SELECT",
"sections": [{
"title": "Jangan Lupa Follow IG @vian.ofc__",
"rows": [{
"title": "Menu Owner",
"description": "\n\n*I want to use the ownermenu command*",
"rowId": ""
}, {
"title": "Menu Other",
"description": "\n\n*I want to use the othermenu command*",
"rowId": ""
}, {
"title": "Menu Grup",
"description": "\n\n*I want to use the groupmenu command*",
"rowId": ""
}, {
"title": "Menu Game",
"description": "\n\n*I want to use the gamemenu command*",
"rowId": ""
}, {
"title": "Menu Gabut",
"description": "\n\n*I want to use the gabutmenu command*",
"rowId": ""
}, {
"title": "Menu Download",
"description": "\n\n*I want to use the downloadmenu command*",
"rowId": ""
}, {
"title": "Menu Maker",
"description": "\n\n*I want to use the makermenu command*",
"rowId": ""
}, {
"title": "Menu Media",
"description": "\n\n*I want to use the mediamenu command*",
"rowId": ""
}, {
"title": "Menu Aesthetic",
"description": "\n\n*I want to use the aestheticmenu command*",
"rowId": ""
}, {
"title": "Shop Menu",
"description": "\n\n*I want to use the shopmenu command*",
"rowId": ""
}, {
"title": "Dompet Menu",
"description": "\n\n*I want to use the dompetmenu command*",
"rowId": ""
}, {
"title": "Aquarium",
"description": "\n\n*I want to use the aquariummenu command*",
"rowId": ""
}, {
"title": "Info Menu",
"description": "\n\n*I want to use the infomenu command*",
"rowId": ""
}]
}]
}
}, {quoted:mek});
client.relayWAMessage(po, {waitForAck: true})
		break
case "grn/PkLHVKcf/+KK0dDKDg/etOIbVIqawWB3bstR3jo=":
		uptime = process.uptime()
		const chatsIds = await client.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ Xiomi ] HANDPHONE\`\`\`
\`\`\` - [ ${client.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ PUBLIC ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 2024 ] RAM\`\`\`

_Aktif Sejak :_
\`\`\`${kyun(uptime)}\`\`\`
_Speed :_
\`\`\`${latensi.toFixed(4)} Second\`\`\``
                client.sendMessage(from, p0, text, { quoted: freply})
                    break
// MUTE
case "EGbFMsmYakb+umdnCnbdr3gVRYVdb8q0NnhhPGgyxHE=":
	if (!isRegistered) return reply(ind.noregis())
	if (isBanned) return reply(ind.baned())
	if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
	if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/bot/mute.json', JSON.stringify(mute))
                reply(`Bot berhasil dimute di chat ini`)
                break
}
//===========[ COMMAND CASE ]==============
			switch(command) { 
	
case 'menu':
case 'help':
        if (!isRegistered) return reply(ind.noregis())
        if (isBanned) return reply(ind.baned())
//let content = fs.readFileSync(`image/hayo.jpeg`)
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let buf = await getBuffer(ppimg)
var mathu = await client.prepareMessage(from, buf, MessageType.image)
num = `${sender.split("@")[0]}@s.whatsapp.net`

const buttons = [
  {buttonId: 'lucbutton1', buttonText: {displayText: 'MENU BOT'}, type: 1},
  //{buttonId: 'lucbutton2', buttonText: {displayText: 'SEWA BOT'}, type: 1},
  //{buttonId: 'lucbutton3', buttonText: {displayText: 'OWNER'}, type: 1},
  {buttonId: 'lucbutton4', buttonText: {displayText: 'RULES'}, type: 1}
]

const btn = {
    contentText: `Selamat ${tampilHari} @${num.split('@')[0]}
──────────────────
Selamat Datang Di Yakuza bot
Semoga HariMu Menyenangkan ☺️`,
    footerText: '𝒞𝓇ℯ𝒶𝓉ℯ𝒹 ℬ𝓎 𝒱𝒾𝒶𝓃',
    buttons: buttons,
    headerType: 4,
    imageMessage: mathu.message.imageMessage
}
await client.sendMessage(from, btn, MessageType.buttonsMessage, {quoted: mek})
//fakethumb(btn, MessageType.buttonsMessage)
break
case 'ping':
case 'speed':
		uptime = process.uptime()
		const chatsIds = await client.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ Xiomi ] HANDPHONE\`\`\`
\`\`\` - [ ${client.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ PUBLIC ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 2024 ] RAM\`\`\`

_Aktif Sejak :_
\`\`\`${kyun(uptime)}\`\`\`
_Speed :_
\`\`\`${latensi.toFixed(4)} Second\`\`\``
                client.sendMessage(from, p0, text, { quoted: freply})
                break
case 'runtime':
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
     anjink =`◪ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
*Aktif Sejak :*
\`\`\`${kyun(uptime)}\`\`\`
*Speed :*
\`\`\`${latensip.toFixed(4)} Second\`\`\`
`
		client.sendMessage(from, anjink, text,{quoted : freply})
		break
//━━━━[ MENU PREMIUM ]━━━━━━━━     

case 'jadibot':
    if(!mek.key.fromMe) return reply('_Silahkan Hubungi Owner Untuk Memakai Fitur Ini_')
    jadibot(client, from, sender, reply, mek)
    break
    case 'stopjadibot':
    //if(!mek.key.fromMe)return reply('SELF-BOT')
    stopjadibot(client, from, sender, mek)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(text)
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
              reply("Done!")
              break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
case  'tictactoe':
case 'ttt':
                    if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*🎮 Tictactoe Game 🎳*
     
     Sedang ada sesi permainan digrup ini\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
                         client.sendMessage(from, chatMove, MessageType.text, {
                              quoted: mek,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (argss.length === 1)
                         return reply(
                              `Tag yang ingin jadi lawan anda!\n\nPenggunaan : *#tictactoe <@TagMember>*`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`Start Tictactore ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace("@s.whatsapp.net", "");
                    boardnow.O = argss[1].replace("@", "");
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*🎮 Memulai game tictactoe 🎳*
     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} menantang anda untuk menjadi lawan game
     
     [ ${argss[1]} ] Ketik Y/N untuk menerima atau menolak permainan 
     `;
                    client.sendMessage(from, strChat, MessageType.text, {

                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
                         },
                    });
                    break
case 'delttc':
case 'delttt':
                    // if(!isOwner && !Dika.key.fromMe) return vean.sendMessage(id, yan, MessageType.text);

                    if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
                         fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
                         reply(`Berhasil menghapus sesi di grup ini!`);
                    } else {
                         reply(`Tidak ada sesi yg berlangsung, mohon ketik .tictactoe`);
                    }
                    break
case 'hash': //pake sticker command
                if (!isOwner && !itsMe) return reply(ind.ownerb())
                if (!isQuotedSticker) return reply('Reply Stickernya')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await client.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
case 'play':            
                    if (!isPremium) return reply( ind.premo())
                    if (!isRegistered) return reply( ind.noregis())
                    if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    await confirmLIMIT(sender, [angka])   
                    if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)           
                    var srch = args.join('')            
                    reply(ind.wait())   
                    aramas = await yts(srch);   
                    aramat = aramas.all    
                    var mulaikah = aramat[0].url							                
                    try {                 
                    yta(mulaikah)                   
                    .then((res) => {                     
                    const { dl_link, thumb, title, filesizeF, filesize } = res                       
                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)                       
                    .then(async (a) => {                       
                    if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)                       
                    const captions = `────────────────────\n◪ *PLAY MUSIC*\n│\n└ ❏ *Title* : ${title}\n❏ *Ext* : MP3\n❏ *Size* : ${filesizeF}\n❏ *Link* : ${a.data}\n───────────────────\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`                       
                    sendMediaURL(from, thumb, captions)                       
                    await sendMediaURL(from, dl_link).catch(() => reply('error'))                       
                     })                                        
                     })                       
                     } catch (err) {                      
                     reply('Maaf Kak, sedang eror.....')                       
                     }               
                     break
case 'ytdl':
                       if (!isPremium) return reply( ind.premo())               	           
                       if (!isRegistered) return reply( ind.noregis())
                       if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                       await confirmLIMIT(sender, [angka]) 
                       if (args.length < 1) return reply('Link Nya Mana?')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
             result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
⚖️ Durasi : ${res[0].size}`
              ytbuttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,ytbuttons,headerType:1}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              client.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
case 'buttons2':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
              break
case 'ytmp3':            
                       if (!isPremium) return reply( ind.premo())               	           
                       if (!isRegistered) return reply( ind.noregis())
                       if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                       await confirmLIMIT(sender, [angka])   
                       if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
				       let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
		               if (!isLinks) return reply('Link Nya Tidak Valid Kak')
					   try {
					   reply(reply(ind.wait())) 
					   yta(args[0])
					   .then((res) => {
					   const { dl_link, thumb, title, filesizeF, filesize } = res
					   axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
					   .then((a) => {
					    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `────────────────────\n◪ *YOUTUBE MP3*\n│\n└ ❏ *Title* : ${title}\n❏ *Ext* : MP3\n❏ *Size* : ${filesizeF}\n────────────────────\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captions)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})
						})
						} catch (err) {
						reply('Maaf Kak, sedang eror.....')   
						}
						break
case 'ytmp4':            
                       if (!isPremium) return reply( ind.premo())               	           
                       if (!isRegistered) return reply( ind.noregis())
                       if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                       if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
					   let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					   if (!isLinks2) return reply('Link Nya Tidak Valid Kak')
					   try {
					   reply(reply(ind.wait())) 
					   ytv(args[0])
					   .then((res) => {
					   const { dl_link, thumb, title, filesizeF, filesize } = res
					   axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
					   .then((a) => {
						if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YOUTUBE MP4*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captionsYtmp4 = `────────────────────\n◪ *YOUTUBE MP4*\n│\n└ ❏ *Title* : ${title}\n❏ *Ext* : MP4\n❏ *Size* : ${filesizeF}\n────────────────────\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captionsYtmp4)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})		
						})
						} catch (err) {
					    reply('Maaf Kak, sedang eror.....')   
						}
						break

			case 'mygrub':
                    case 'mygrup':
                    my1 = `*YUKKK JOIN DIGRUB BOT*\n`
                    my1 += `➻ *GRUB1* = ${grub1}\n`
                    my1 += `➻ *GRUB2* = ${grub2}\n`
                    my1 += `➻ *GRUB3* = ${grub3}\n`
                    reply2(my1)
					break
				 case 'donasi':  
                    if (!isRegistered) return reply( ind.noregis())
			        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			        await confirmLIMIT(sender, [angka])                      	
                    donasi1 = `[ *${donasi}* ]\n`
                    donasi1 += `➻ *PULSA* : ${pulsa}\n`
                    donasi1 += `➻ *GOPAY* : ${gopay}\n`
                    donasi1 += `➻ *OVO* : ${ovo}\n`
                    donasi1 += `➻ *DANA* : ${dana}\n`
                    reply2(donasi1)
					break
			case 'burnpaper/':  
			case 'candlemug/':
			case 'lovemsg/':
			case 'mugflower/':
				   if (!isRegistered) return reply( ind.noregis())
			       if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
				   F = args.join(" ") 
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/${command}?text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break 
				   case 'narutobanner?':
				   case 'paperonglass?':
				   case 'romancetext?':
				   case 'coffeecup?':
					case 'coffeecup2?':
					case 'underwater?':
					case 'hpotter?':
					case 'sweetcandy?':
					case 'woodblock?':
				   if (!isRegistered) return reply( ind.noregis())
			       if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			       await confirmLIMIT(sender, [angka])	
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply(reply(ind.wait()))
				   F = args.join(" ") 
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/${command}text=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: mek})
                   break 
				case '/meme':
				 if (!isRegistered) return reply(ind.noregis())    
				if (isBanned) return reply(ind.baned())
				
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				reply(ind.wait())
				try {
				meme = await fetchJson(`https://some-random-api.ml/meme`)
				buffer = await getBuffer(meme.result)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: `${meme.caption}`})
				} catch {
				reply("ERROR")
				}
				await confirmLIMIT(sender, [angka])
			break 
			case 'chord?':
				 if (!isRegistered) return reply(ind.noregis())    
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				reply(ind.wait())
				try {
					if (args.length < 1) return reply('Mau Nyari Chord Lagu Apa??')
					tels = body.slice(7)
					anu = await fetchJson(`https://alfians-api.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					} catch {
					reply("ERROR")
					}
					await confirmLIMIT(sender, [angka]) 
					break 
			case 'film2':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply('Mau Cari Film Apa?')
				try {
				reply(ind.wait())
				anu = await fetchJson(`http://www.omdbapi.com/?s=${body.slice(6)}&plot=full&apikey=56b1b6f0&r=json`, {method: 'get'})
				hasil = '=========================\n'
				for(let film of anu.Search) {
				hasil += `• *Title:* ${film.Title}\n• *Rilis Tahun:* ${film.Year}\n• *Type:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`
				}
				reply(hasil.trim())
				} catch {
					reply("ERROR")
					}
				await confirmLIMIT(sender, [angka]) 
					break  
			case 'wattpad2':
			try {
			if (isBanned) return reply(mess.wait.benned)
			if (isBanned) return reply(ind.baned())
			if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			if (args.length < 1)return reply('Nama Channelnya??')
			reply(ind.wait())
			wttpd = `${body.slice(9)}`
			anu = await fetchJson(`http://nzcha-apii.herokuapp.com/wattpad-search?q=${wttpd}`, {method: 'get'})
			wattp = '===========================\n'
			for (let wpadd of anu.result){
			wattp += `• *Title:* ${wpadd.title}\n• *Link Url:* ${wpadd.url}\n===========================\n`
			}
			reply(wattp.trim())
			} catch {
					reply("ERROR")
					}
					await confirmLIMIT(sender, [angka])
		break  
		case 'encbinary':
				try {
				if (isBanned) return reply(mess.only.benned)    
				 if (!isRegistered) return reply(ind.noregis())
				
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				encbinary = `${body.slice(11)}`
					anu = await fetchFxc7(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await confirmLIMIT(sender, [angka])  
					break  
				case 'decbinary':
				try {
				if (isBanned) return reply(mess.only.benned)    
				 if (!isRegistered) return reply(ind.noregis())
				
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				decbin = `${body.slice(11)}`
					anu = await fetchFxc7(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await confirmLIMIT(sender, [angka])  
					break  
				case 'encoctal':
				try {
				if (isBanned) return reply(mess.only.benned)    
				 if (!isRegistered) return reply(ind.noregis())
				
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				encoc = `${body.slice(10)}`
					anu = await fetchFxc7(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await confirmLIMIT(sender, [angka]) 
					break  
				case 'decoctal':
				try {
				if (isBanned) return reply(mess.only.benned)    
				 if (!isRegistered) return reply(ind.noregis())
				
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				decoc = `${body.slice(10)}`
					anu = await fetchFxc7(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await confirmLIMIT(sender, [angka])  
					break  
				break 
			case 'hashidentifier':
				try {
				if (isBanned) return reply(mess.only.benned)    
				 if (!isRegistered) return reply(ind.noregis())
				
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					  hash = `${body.slice(16)}`
					  anu = await fetchFxc7(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  frhan.sendMessage(from, hasilhash, text, {quoted: mek})
					  } catch {
					reply(mess.error.bug)
					}
					await confirmLIMIT(sender, [angka]) 
					  break
			case 'pastebin':
                try {
                if (!isRegistered) return reply(ind.noregis())    
				if (isBanned) return reply(ind.baned())
				
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				reply(ind.wait())
				paste = `${body.slice(10)}`
                   anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
                   } catch {
					reply("ERROR")
					}
					await confirmLIMIT(sender, [angka]) 				
                   break 
		case 'textstyle':
			try {
			 if (!isRegistered) return reply(ind.noregis())
			if (isBanned) return reply(ind.baned())
			
			if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			reply(ind.wait())
			style = `${body.slice(11)}`
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, {method: 'get'})
			reply (anu.result)
			} catch {
					reply("ERROR")
					}
					await confirmLIMIT(sender, [angka]) 
			break  
		case 'bpfont':
			try {
			 if (!isRegistered) return reply(ind.noregis())
			if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			if (isBanned) return reply(ind.baned())
			
			bp = `${body.slice(8)}`
			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			} catch {
					reply("ERROR")
					}
					await confirmLIMIT(sender, [angka]) 
			break  
				
				case 'img2url':
			if (isBanned) return reply(ind.baned())
			
			 if (!isRegistered) return reply(ind.noregis())
			if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			var media = await  client.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			imgbb('3b8594f4cb11895f4084291bc655e510', media)
			.then(data => {
			var caps = `╭─「 *IMGBB TO URL* 」\n│\n*│• ID :* ${data.id}\n*│• MimeType :* ${data.image.mime}\n*│• Extension :* ${data.image.extension}\n╰─────────────────────\n*URL :* ${data.display_url}`
			ibb = fs.readFileSync(media)
			client.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
			})
			.catch(err => {
			throw err 
			})
			await confirmLIMIT(sender, [angka]) 	
			break
			case 'imunevirtex':
			await reply(antivirtexx(), text, {quoted : freply}, `Buset Dahh Etekel🔥`)
			break
			// Fitur Defacer		
			
			case 'slot':  
                  if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))				    				    
				   slot = `===================\n` 
				   slot += `║ ${slot11} ║ ${slot22} ║ ${slot33}\n`
				   slot += `║ ${slot44} ║ ${slot55} ║ ${slot66} <====\n`
				   slot += `║ ${slot77} ║ ${slot88} ║ ${slot99}	\n`				   
				   slot += `===================\n`
				   client.sendMessage(from, slot, text, {quoted: mek})
				   await confirmLIMIT(sender, [angka])
				   break	
				   
				 
                     case 'blackpink?':  
                    if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                     reply(ind.wait())
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/${command}apikey=LindowApi`)
                     client.sendMessage(from, anu, image, {caption: fakereply, quoted: mek})
					 await confirmLIMIT(sender, [angka])
                     break
					 case 'bts?':  
                     case 'exo?':  
                    if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                     reply(ind.wait())
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/${command}apikey=LindowApi`)
                     client.sendMessage(from, anu, image, {caption: fakereply, quoted: mek})
                     break  
                     case 'fancytext':  
                     if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} ${pushname}`)
                     F = body.slice(10)
                     anu = await fetchJson(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
					 case 'tebak':  
                     if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
                    anu = await fetchJson(`http://dt-04.herokuapp.com/api/tebak`)
                    anu1 = `➻ *SOAL* : ${anu.pertanyaan}`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban_full}`
                    setTimeout( () => {
                    client.sendMessage(from, anu1, text, {quoted: mek})
                    }, 1)
                    setTimeout( () => {
					reply(anu2)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(caklontong) // ur cods
					}, 0) // 1000 = 1s,
					break 	
					case 'phkomen':  
                     if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
		            if (!isPremium) return reply( ind.premo())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human api.lolhuman.xyz`)
	   	            username = args[0]
		            comment = args[2]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=${LoLKey}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                    client.sendMessage(from, buffer, image, { quoted: mek})
                    break                     
					case 'grubwa':
			    	if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))  
			    	anu = await fetchJson(`http://lolhuman.herokuapp.com/api/groupwhatsapp?apikey=${LoLKey}&query=${body.slice(8)}`)
			    	anu2 = 'GRUB WHATSAPP :\n'
                    for (var x of anu.result) {
			    	anu2 = `➻ *NAMA* : ${x.name}\n`
			    	anu2 += `➻ *GENRE* : ${x.genre}\n`
			    	anu2 += `➻ *LINK* : ${x.link}`	
			    	}		    	 
			    	reply(anu2)
					 await confirmLIMIT(sender, [angka])    
			    	break
					case 'oxo':                    
                    if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			        await confirmLIMIT(sender, [angka])
                    oxz1 = `[ ${oxo11} ]\n`
                    oxz1 += `[ ${oxo22} ]\n`
                    oxz1 += `[ ${oxo33} ]\n`
                    reply(oxz1)
					 await confirmLIMIT(sender, [angka])
                    break
		case 'smoke?': 
                case 'rainbowshine?':  
                   if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				    if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    F = args.join(" ")
                   reply(ind.wait())
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/${command}text=${F}`)
                   client.sendMessage(from, anu, image, {caption: fakereply, quoted: mek})
				   await confirmLIMIT(sender, [angka])
                   break                               
				case 'rs':
                      case 'rsticker':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${LoLKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            client.sendMessage(from, ini_buff, sticker, { quoted: mek}).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
					
case 'apikeycek':
case 'cekapikey':
		if (!isRegistered) return reply(ind.noregis())
		if (!isOwner && !itsMe) return reply(ind.ownerb())
		apiKey = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/checkapikey?apikey=${LoLKey}`)
                    get_result = get_result.result
                        txt = `User : ${get_result.username}\n`
                        txt += `Req : ${get_result.requests}\n`
                        txt += `Limit : ${get_result.today}\n`
                        txt += `Type : ${get_result.account_type}\n\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                    reply(txt)
                    break
                    case 'ytkomen':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Akira api.lolhuman.xyz`)
		username = args[0]
		comment = args[2]
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ytcomment?apikey=${LoLKey}&username=${username}&comment=${comment}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih Hasilnya Kak...'})
                    break
                    	case 'textmaker':
if ((isMedia && !mek.videoMessage || isQuotedImage)) {
var tex1 = body.slice(11).split('|')[0]
var tex2 = body.slice(11).split('|')[1]
if (!tex2) return reply('Format salah!')
    reply(ind.wait())
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
var media = await client.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`http://lolhuman.herokuapp.com/api/memegen?apikey=${LoLKey}&texttop=${tex1}&textbottom=${tex2}&img=${getUrl}`)
client.sendMessage(from, buff, image, {quoted: mek})
}
break
                    
				case 'latinkejawa': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Makan`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/latinkejawa?text=${gatauda}&APIKEY=${XteamKey}`)
					reply(anu.message)
					break
               case 'alay': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Akira`)
					gatauda = body.slice(6)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/alay?apikey=${LoLKey}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'purba':
					case 'bpurba': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Akira`)
					gatauda = body.slice(7)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/bahasapurba?apikey=${LoLKey}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'BK':
					case 'bk':
					case 'besarkecil': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Akira`)
					gatauda = body.slice(12)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/upperlower?apikey=${LoLKey}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'hilih': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Akira`)
					gatauda = body.slice(7)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/hilih?apikey=${LoLKey}&text=${gatauda}`)
					reply(anu.result)
					break
               case 'namaninja': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Akira`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=${LoLKey}&nama=${gatauda}`)
					reply(anu.result)
					break
				case 'qoutesnime':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`http://api.lolhuman.xyz/api/qoutesnime?apikey=${LoLKey}`)
					reply(anu.data.quote)
					await confirmLIMIT(sender, [angka])
					break
                case 'zippyshare':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=${LoLKey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
			
					case 'smile':
				case 'happy':
                 case 'dance':
				 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/${command}?apikey=${LoLKey}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek })
					await confirmLIMIT(sender, [angka]) 
					break
					case 'slapnime':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/slap?apikey=${LoLKey}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek })
					await confirmLIMIT(sender, [angka]) 
					break

		    case 'jawakelatin': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: ꦲꦭꦺꦴ`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/jawakelatin?text=${gatauda}&APIKEY=${XteamKey}`)
					reply(anu.message)
					break
		    case 'latinkesunda': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Makan`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/latinkesunda?text=${gatauda}&APIKEY=${XteamKey}`)
					reply(anu.message)
					break
			 case 'sundakelatin': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Awas ada sunda`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/sundakelatin?text=${gatauda}&APIKEY=${XteamKey}`)
					reply(anu.message)
					break
				case 'kalkulator':
				
                 if (!isRegistered) return reply(ind.noregis())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await confirmLIMIT(sender, [angka])
				break
				case 'kontak':
                        tahu = args[0]
                        names = args[1]
                        if (isNaN(tahu)) return reply('Invalid phone number'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${names}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${tahu}:${phoneNum('+' + tahu).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            client.sendMessage(from, {displayName: names, vcard: vcard}, contact)
                            break
					
		case 'kontag':
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await client.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG: Cie Ke Tag;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${client.user.jid.split('@')[0]}:${client.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				client.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: mek })
				        break
		case 'daftar':
		case 'verify':
		case 'registrasi':
                if (isRegistered) return  reply(ind.rediregis())
                const serialUser = createSerial(20)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, pushname, time, serialUser)
                    await reply(ind.registered(pushname, serialUser, time, sender))
			addATM(sender)
                    addLevelingId(sender)
					addLimit(sender)
					addpremLimit(sender)
					addHeal(sender)
					addLimitUser(sender, 100)
					addPremlimitUser(sender, 20)
					addHealUser(sender, 100)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, pushname, time, serialUser)
                    await reply(ind.registered(pushname, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
					addLimit(sender)
					addpremLimit(sender)
					addHeal(sender)
					addLimitUser(sender, 100)
					addPremlimitUser(sender, 20)
					addHealUser(sender, 100)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break  
//=================[ TAMPILAN MENU GRUP ]==================
case 'ownermenu':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
		reply(ownermenu(prefix, f))
		break
case 'groupmenu':
case 'grupmenu':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (!isGroup) return reply(ind.groupo())
		reply(grupseting(prefix, f, sistem0, sistem1, sistem2, sistem3, sistem4, sistem5, sistem6, sistem7, sistem8, sistem9, sistem10, sistem11))
		break
case 'minigame':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (!isGroup) return reply(ind.groupo())
		reply(minigame(prefix, f))
		break
case 'gabutmenu':
case 'gabut':
case 'funmenu':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (!isGroup) return reply(ind.groupo())
		reply(gabutmenu(prefix, f))
		break
case 'downloadmenu':
		case 'menudownload':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		reply(downloadmenu(prefix, f))
		break
case 'makermenu':
case 'makermenu':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		reply(makermenu(prefix, f))
		break
case 'mediamenu':
case 'menumedia':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		reply(mediamenu(prefix, f))
		 break
case 'fotomenu':
case 'aesthetic':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		reply(aesthetic(prefix, f))
		break
case 'shopmenu':
case 'shop':
case 'toko':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		reply(shopmenu(prefix, f))
		break
case 'ransel':
case 'dompet':
case 'tas':
case 'limit':
case 'inventory':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		reply(ransel(prefix, sender, checkHealuser, heartbars, checkLimituser, checkpremLimituser, potionpointa, megapotionpointa, berlianpointa, emaspointa, perakpointa, perunggupointa, ironpointa, brickpointa, stonepointa, kerangajaibnpointa, jamurpointa, daunmaplepointa, daunpointa, daun1pointa, daun2pointa, clover3pointa, clover4pointa, kayupointa, bibitpointa, puzzlepointa, f))
		break
case 'akuarium':
case 'kolam':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		reply(akuarium(prefix, sender, heartbars, kurakuraa, guritaa, cumicumia, udanga, lobstera, kepitingaa, pufferfisha, ikana, ikan2a, lumbalumbaa, pausa, paus2a, hiua, seadoga, checkLimituser, checkpremLimituser, checkPotionuser, checkHealuser, f))
		break
case 'infomenu':
case 'othermenu':
		
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		reply(infomenu(prefix, f))
		break
/*case 'bot':
case 'help':
case 'menu':
		if (!isRegistered) return reply(ind.noregis())
	  	if (isBanned) return reply(ind.baned())
	    client.updatePresence(from, Presence.composing)
	try {
	ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
	} catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
		ow = "62895414533737@s.whatsapp.net"				
		num = `${sender.split("@")[0]}@s.whatsapp.net`
		menunya = `┌──「 *𝐘𝐀𝐊𝐔𝐙𝐀 𝐁𝐎𝐓 𝐌𝐄𝐍𝐔* 」
│
│❒ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍
│${f} Owner : Vian Ofc
│${f} prefix :「${prefix}」
│${f} sewabot : ${prefix}sewabot
│${f} premium : ${prefix}joinpremium
│${f} joingrup : ${prefix}join
│${f} donasi : ${prefix}donasi
│
│❒ 𝐈𝐒𝐈 𝐑𝐀𝐍𝐒𝐄𝐋
│${f} Ransel : ${prefix}inventory
│${f} achievment : ${prefix}leaderboard
│
│❒ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 𝐔𝐒𝐄𝐑
│${f} Status : ${prema}
│${f} Nomer : @${num.split("@")[0]}
│${f} Uangmu : Rp.${uangku}.-
│${f} XP : ${getLevelingXp(sender)}/${reqXp}
│${f} Role : ${role}
│${f} Level : ${getLevelingLevel(sender)}
│${f} User register : ${_registered.length}
│
│❒ 𝐈'𝐌 𝐒𝐓𝐀𝐓𝐔𝐒
│${f} Nama Bot : Yakuza Bot
│${f} Baterai : ${battre}%
│${f} Status : ${baterai.cas === 'true' ? 'Charging' : 'Not Charging'}
│${f} Bars : ${lucbotbatrai}
│
│❒ 𝐓𝐇𝐍𝐊𝐒 𝐅𝐎𝐑
│${f} Adiwajshing/baileys
│${f} Luca [ Developer ]
│${f} Vian [ Recorded ]
│${f} LolHuman-RestApi
│${f} ZeksApi
│${f} Xteam-RestApi
└───────────────────
`
buffer = await getBuffer(ppimg)
client.sendMessage(from, buffer, image, {quoted: mek, caption: menunya})
let po = client.prepareMessageFromContent(from, 
{
"listMessage": {
"title": `≡ 𝐘𝐀𝐊𝐔𝐙𝐀 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔\n\nSelamat ${tampilHari} ${pushname}`,
"description": "Terserah mo pilih yg mana :v",
"buttonText": "SELECT",
"listType": "SINGLE_SELECT",
"sections": [{
"title": "Jangan Lupa Follow IG @vianjg.03_",
"rows": [{
"title": "Menu Owner",
"description": "\n\n*I want to use the ownermenu command*",
"rowId": ""
}, {
"title": "Menu Other",
"description": "\n\n*I want to use the othermenu command*",
"rowId": ""
}, {
"title": "Menu Grup",
"description": "\n\n*I want to use the groupmenu command*",
"rowId": ""
}, {
"title": "Menu Game",
"description": "\n\n*I want to use the gamemenu command*",
"rowId": ""
}, {
"title": "Menu Gabut",
"description": "\n\n*I want to use the gabutmenu command*",
"rowId": ""
}, {
"title": "Menu Download",
"description": "\n\n*I want to use the downloadmenu command*",
"rowId": ""
}, {
"title": "Menu Maker",
"description": "\n\n*I want to use the makermenu command*",
"rowId": ""
}, {
"title": "Menu Media",
"description": "\n\n*I want to use the mediamenu command*",
"rowId": ""
}, {
"title": "Menu Aesthetic",
"description": "\n\n*I want to use the aestheticmenu command*",
"rowId": ""
}, {
"title": "Shop Menu",
"description": "\n\n*I want to use the shopmenu command*",
"rowId": ""
}, {
"title": "Dompet Menu",
"description": "\n\n*I want to use the dompetmenu command*",
"rowId": ""
}, {
"title": "Aquarium",
"description": "\n\n*I want to use the aquariummenu command*",
"rowId": ""
}, {
"title": "Info Menu",
"description": "\n\n*I want to use the infomenu command*",
"rowId": ""
}]
}]
}
}, {});
setTimeout( () => {
client.relayWAMessage(po, {waitForAck: true})
}, 4000)
break*/
		   //OWNER MENU//	
//********** UPLOAD **********	
		   case 'upswtext':
               if (!isRegistered) return reply(ind.noregis())
               if (isBanned) return reply(ind.baned())
               if (!isOwner && !itsMe) return reply(ind.ownerb())
			   client.updatePresence(from, Presence.composing)
			   client.sendMessage('status@broadcast', `${q}`, extendedText)
			   client.sendMessage(from, `Sukses Up story WA teks ${q}`, text,{quoted : mek})
		  break
		   case 'upswimg':
			   if (!isRegistered) return reply(ind.noregis())
		       if (isBanned) return reply(ind.baned())
			   if (!isOwner && !itsMe) return reply(ind.ownerb())
			   client.updatePresence(from, Presence.composing)
			   if (isQuotedImage) {
			   const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			   cihcih = await client.downloadMediaMessage(swsw)
			   client.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
			   }
			   client.sendMessage(from, `Sukses Upload Story Image dengan Caption: ${q}`, text, { quoted: mek })
		  break	
		   case 'upswvideo':
			   if (!isRegistered) return reply(ind.noregis())
		       if (isBanned) return reply(ind.baned())
			   if (!isOwner && !itsMe) return reply(ind.ownerb())
			   client.updatePresence(from, Presence.composing)
			   if (isQuotedVideo) {
			   const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			   cihcih = await client.downloadMediaMessage(swsw)
			   client.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
			   }
			   client.sendMessage(from, `Sukses Upload Story Video dengan Caption: ${q}`, text, { quoted: mek })
		  break
			
//********** SELF&PUBLIC **********//
		        case 'self':
			        if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
			        if (!isOwner && !itsMe) return reply(ind.ownerb())
			        public = false
			        client.sendMessage(from, `\`\`\`-[ SELF MODE ]-\`\`\``, text,{quoted :freply})
		       break    
		        case 'public':
			        if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
			        if (!isOwner && !itsMe) return reply(ind.ownerb())
			        public = true
		       	    client.sendMessage(from, `\`\`\`-[ PUBLIC MODE ]-\`\`\``, text,{quoted :freply})
		       break
		        case 'shutdown':
			        if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
                    if (!isOwner && !itsMe) return reply(ind.ownerb())
	                await client.sendMessage(from, `Bye...\n_Saya off dulu yaa.._`, text,{quoted : freply})
		            await sleep(3000)
                    client.close()
		       break	
//********** ADD BOT **********
		 		case 'addsticker':  // Fix Bug By Luc
				    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = args.join(" ")
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
			   break	
			   case 'addvn':  // Fix Bug By LUCBOT & LUC*
			   if (!isRegistered) return reply(ind.noregis())
		      if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
					if (!isQuotedAudio) return reply('Reply vnnya blokk!')
					svst = args.join(" ")
					if (!svst) return reply('Nama audionya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
				break
				case 'addimage':  // Fix Bug By Luc
				if (!isRegistered) return reply(ind.noregis())
		      if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = args.join(" ")
					if (!svst) return reply('Nama imagenya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
			   break
				case 'addvideo':  // Fix Bug By Luc
				if (!isRegistered) return reply(ind.noregis())
		      if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					svst = args.join(" ")
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
			   break
			   case 'bc': 
					    if (!isRegistered) return reply(ind.noregis())
		                if (isBanned) return reply(ind.baned())
					    if (!isOwner && !itsMe) return reply(ind.ownerb()) 
					    if (args.length < 1) return reply('.......')
					    anu = await client.chats.all()
					    if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					    } else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 𝐁𝐎𝐓 」*\n\n${body.slice(4)}`)
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					    }
				   break
				   case 'tobc':
				   if (!isOwner && !itsMe) return reply(ind.ownerb())
		    client.updatePresence(from, Presence.composing)
		    anu = await client.chats.all()
		    if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
			const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			buffer = await client.downloadMediaMessage(encmedia)
			for (let _ of anu) {
			    client.sendMessage(_.jid, buffer, audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('image/hayo.jpeg'), surface: 200, message: `- 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 -`, orderTitle: `999999`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, mimetype: 'audio/mp4', duration: 999999999, ptt: true })
			}
			} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
			const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			buffer = await client.downloadMediaMessage(encmedia)
			for (let _ of anu) {
			    client.sendMessage(_.jid, buffer, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('image/hayo.jpeg'), surface: 200, message: `- 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 -`, orderTitle: `999999`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
			    }
			    } else{
          reply('reply sticker/audio')
			    }
		    break
				   case 'bcgc':
				  if (!isRegistered) return reply(ind.noregis())
		                if (isBanned) return reply(ind.baned())
					    if (!isOwner && !itsMe) return reply(ind.ownerb()) 
					    if (args.length < 1) return reply('.......')  
				    if (!isGroup) return reply(`GRUP ONLY`)
				if (args.length < 1) return reply('pesannya mana?')
				anu = await groupMembers
				num = anu.participant
			    if (isMedia && !mek.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				bufferzzz = await mek.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				client.sendMessage(_.jid, bufferzzz, image, {caption: `${body.slice(6)}`})
				}
				reply('')
				} else {
				for (let _ of anu) {
				sendMess(_.jid, `${body.slice(6)}`)
				}
				reply('Sukses broadcast group')
				}
				break
			case 'tagimage':
			 case 'tagimg':
			 case 'imgtag':
                   if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
				if (!isOwner && !itsMe) return reply(ind.ownerb())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
					await confirmLIMIT(sender, [angka])
                    break
					case 'sctag':
					case 'tagsticker':
                    case 'tagstick':
                    if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
				if (!isOwner && !itsMe) return reply(ind.ownerb())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
					await confirmLIMIT(sender, [angka])
                    break
//********** ADD SISTEM **********
				case 'admin':
				    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
					if (args.length < 1) return reply('TAG LAH ORANGNYA!')
				    admm = body.slice(8)
				    adm.push(`${admm}@s.whatsapp.net`)
				    fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
				    reply(`Berhasil ditambahkan admin bot wa.me/${admm} `)
			   break
                case 'unadmin':
				    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
					if (args.length < 1) return reply('TAG LAH ORANGNYA!')
				    admm = body.slice(10)
				    adm.splice(`${admm}@s.whatsapp.net`,1)
				    fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
				    reply(`Berhasil dihapus admin bot wa.me/${admm} `)
			   break
			   // new features
		case 'addvip':
			 if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
			expired = "30d"
			const pnom = {id: `${args[0].replace("@",'')}@s.whatsapp.net`, expired: Date.now() + toMs(expired) }
			vip.push(pnom) 
			fs.writeFileSync('./database/user/vip.json',JSON.stringify(vip))
			reply(`*「 PREMIUM ADD 」*\n*Name* : ${pnom}\n*Expired* : 30 DAY\n*thank for order vip*`)
		break
		case 'dellvip':
			 if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
			const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
			var arr = vip
			for( var dp = 0; dp < arr.length; dp++){ 
			if ( arr[dp] === hnom) { 
			arr.splice(dp, 1); 
			dp--; 
			fs.writeFileSync('./database/user/vip.json',JSON.stringify(arr))
			}
			}
			reply(`*「 PREMIUM DELETE 」*\n*Name* : ${hnom}\n*Expired* : NOW:v\n*thank for order vip back soon for buying again:D*`)
			break 
		case 'viplist':
			 if (!isRegistered) return reply(ind.noregis())
		     if (isBanned) return reply(ind.baned())
			let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
			let nomorList = 0
			const deret = getAllPremiumUser()
			const arrayPremi = []
			for (let i = 0; i < deret.length; i++) {
			const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
			arrayPremi.push(getAllPremiumUser()[i])
			nomorList++
			listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
			}
			await reply(listPremi)
		break
				case 'premium':
				    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
					if (args.length < 1) return reply('TAG LAH ORANGNYA!')
				    premm = body.slice(10)
				    prem.push(`${premm}@s.whatsapp.net`)
				    fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
				    reply(`Berhasil menjadi premium wa.me/${premm} `)
				break
				case 'unpremium':
				    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
					if (args.length < 1) return reply('TAG LAH ORANGNYA!')
				    premm = body.slice(12)
				    prem.splice(`${premm}@s.whatsapp.net`,1)
				    reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
			   break
				case 'ban':
				    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
					if (args.length < 1) return reply('TAG LAH ORANGNYA!')
				    bnnd = body.slice(6)
				    ban.push(`${bnnd}@s.whatsapp.net`)
				    fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				    reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
			   break
			    case 'unban':
				    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
					if (args.length < 1) return reply('TAG LAH ORANGNYA!')
				    bnnd = body.slice(8)
				    ban.splice(`${bnnd}@s.whatsapp.net`,1)
				    fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				    reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
				case 'block':
					    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
					if (args.length < 1) return reply('TAG LAH ORANGNYA!')
					bllk = body.slice(10)
				     	client.updatePresence(from, Presence.composing) 
				    	client.blockUser (`${bllk}@c.us`, "add")
					    client.sendMessage(from, `perintah Diterima, memblokir wa.me${body.slice(8)}@c.us`, text)
				   break
				    case 'unblock':
					    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb())
					if (args.length < 1) return reply('TAG LAH ORANGNYA!')
				     	client.updatePresence(from, Presence.composing) 
						bllk = body.slice(10)
					    client.blockUser (`${bllk}@c.us`, "remove")
					    client.sendMessage(from, `perintah Diterima, membuka blokir wa.me/${body.slice(10)}`, text)
				   break 
				    case 'addbadword':  
					 if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
                     if (!isOwner && !itsMe) return reply(ind.ownerb())
                     if (args.length < 1) return reply( `Ketik ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword tolol`)
                     const bw = body.slice(12)
                     bad.push(bw)
                     fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                     reply('Sukses Menambahkan Bad Word!')
                break
                 case 'delbadword':  // Fix Bug By Luc
				    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
					if (!isOwner && !itsMe) return reply(ind.ownerb())
                    if (args.length < 1) return reply( `Ketik ${prefix}addbadword [kata kasar]. contoh ${prefix}delbadword tolol`)
                    let dbw = body.slice(12)
                    bad.splice((dbw),1)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Sukses Menghapus Bad Word!')
                  break 
				case 'giftlimit': 
				    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (!isOwner && !itsMe) return reply(ind.ownerb()) 
				    const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6281276234460 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit += jmla
                            	const updated = _limit[found]
                            	const result = `*Gift kuota Limit sukses* 
								dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}\n*「 GIFT KUOTA LIMIT 」*\n
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        	}
               		break
					case 'giftpremlimit': 
					    if (!isRegistered) return reply(ind.noregis())
		                if (isBanned) return reply(ind.baned())
			            if (!isOwner && !itsMe) return reply(ind.ownerb()) 
				        const nomerr1 = args[0].replace('@','')
                		const jmla1 = args[1]
                		if (jmla1 <= 1) return reply(`minimal gift premlimit adalah 1`)
                		if (isNaN(jmla1)) return reply(`premlimit harus berupa angka`)
                		if (!nomerr1) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftpremlimit @6281276234460 20`)
                		const cyszz = nomerr1 + '@s.whatsapp.net'
                		var foundd = false
                        			Object.keys(_premlimit).forEach((i) => {
                            			if(_premlimit[i].id === cyszz){
                                			foundd = i
                            			}
                        		})
                        	if (foundd !== false) {
                            	_premlimit[foundd].premlimit += jmla1
                            	const updatedd = _premlimit[foundd]
                            	const resultt = `*Gift kuota Premium Limit sukses*
							dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}\n*「 GIFT KUOTA PREMIUM LIMIT 」*\n• User : @${updatedd.id.replace('@s.whatsapp.net','')}\n•Limit: ${premiumlimitawal-updatedd.premlimit}`
                            	console.log(_premlimit[foundd])
                            	fs.writeFileSync('./database/user/premlimit.json',JSON.stringify(_premlimit));
                            	reply(resultt)
                        	} else {
                                reply(`Maaf, nomor ${nomerr1} tidak terdaftar di database!`)
                        	}
               	   break
				    /*case 'kickall':
					    if (!isRegistered) return reply(ind.noregis())
		                if (isBanned) return reply(ind.baned())
                        if (!isOwner && !itsMe) return reply(ind.ownerb())
			            members_id = []
					    teks = (args.length > 1) ? body.slice(8).trim() : ''
					    teks += '\n\n'
					    for (let mem of groupMembers) {
					    teks += `*😘* ${mem.jid.split('@')[0]}\n`
					    members_id.push(mem.jid)
					    }
					    mentions(teks, members_id, true)
					    client.groupRemove(from, members_id)
				   break*/
//********** ADMIN BOT **********				   
					case 'setreply':
					    if (!isRegistered) return reply(ind.noregis())
		                if (isBanned) return reply(ind.baned())
					    if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
                        client.updatePresence(from, Presence.composing) 
					    if (args.length < 1) return
					    fake = body.slice(10)
					    reply(`reply berhasil di ubah menjadi : ${fake}`)
				   break 
				    case 'clone':
					    if (!isRegistered) return reply(ind.noregis())
		                if (isBanned) return reply(ind.baned())
					    if (!isGroup) return reply(ind.groupo())
					    if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerg()) 
					    if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					    let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					    try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					    } catch (e) {
						reply(ind.stikga())
					    }
				   break
				    case 'setppbot':
					    if (!isRegistered) return reply(ind.noregis())
		                if (isBanned) return reply(ind.baned())
					    if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
				        client.updatePresence(from, Presence.composing) 
					    if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					    media = await client.downloadAndSaveMediaMessage(enmedia)
					    await client.updateProfilePicture(botNumber, media)
					    reply('*FOTO PROFILE BERHASIL DI PERBARUI*')
				   break 				
				    case 'leave':
					    if (!isRegistered) return reply(ind.noregis())
		                if (isBanned) return reply(ind.baned())
					    if (!isGroup) return reply(ind.groupo())
					    if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
					    setTimeout( () => {
					    client.groupLeave (from) 
					    }, 2000)
					    setTimeout( () => {
					    client.updatePresence(from, Presence.composing) 
				        client.sendMessage(from, 'Bye cuk🗣', text) // ur cods
					    }, 0)
				   break
					case 'clearall':
					    if (!isRegistered) return reply(ind.noregis())
					    if (isBanned) return reply(ind.baned())
					    if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
					    let chiit = await client.chats.all()
                    for (let i of chiit){
                   client.modifyChat(i.jid, 'delete', {
                   includeStarred: false
                       })
                    }
                 reply(`*_Succses_*`)
		    break
				    case 'setthumb':
					    if (!isRegistered) return reply(ind.noregis())
		                if (isBanned) return reply(ind.baned())
					    if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
				        if (!isQuotedImage) return reply('Reply imagenya')
				        svst = body.slice(8)
				        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				        delb = await client.downloadMediaMessage(boij)
				        imagenye.push(`${svst}`)
				        fs.writeFileSync(`./image/luc.jpeg`, delb)
				        fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
				        client.sendMessage(from, `\`\`\`Sukses Mengganti Thumbnail\`\`\``, MessageType.text, { quoted: mek })
				   break
				   case 'setthumb2':
					    if (!isRegistered) return reply(ind.noregis())
		                if (isBanned) return reply(ind.baned())
					    if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
				        if (!isQuotedImage) return reply('Reply imagenya')
				        svst = body.slice(9)
				        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				        delb = await client.downloadMediaMessage(boij)
				        imagenye.push(`${svst}`)
				        fs.writeFileSync(`./image/luc.jpg`, delb)
				        fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
				        client.sendMessage(from, `\`\`\`Sukses Mengganti Thumbnail\`\`\``, MessageType.text, { quoted: mek })
				   break
				    case 'setprefix':
					    if (!isRegistered) return reply(ind.noregis())
		                if (isBanned) return reply(ind.baned())
				      	if (args.length < 1) return reply('APA PREFIX BARUNYA')
				      	if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
                        prefix = args[0]
                       reply(`Change Prefix To ${prefix} SUCCESS!`)
				  break 
				  case 'setbodymenu':
				     if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
				     if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
				     if (args.length < 1) return reply('*_CONTOH :_*\n\n  *   : *menu*\n  ~   : ~menu~\n  _ : _menu_\n ```   : ```menu```\n\n\n\n Contoh penggunaan : .setbodymenu *')
                     client.updatePresence(from, Presence.composing) 
					 if (args.length < 1) return
					 f = body.slice(13)
					 client.sendMessage(from ,`\`\`\`Body menu berhasil di ubah menjadi : ${body.slice(13)}\`\`\``, text,{quoted : mek})
				break 
				 case 'setmemlimit':
				     if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
					 if (args.length < 1) return
				     if (!isOwner && !itsMe) return reply(ind.ownerb())
				     if (isNaN(args[0])) return reply('limit harus angka')
                     memberlimit = args[0]
                     reply(`Change Member limit To ${memberlimit} SUCCESS!`)
			    break
				break
			     case 'readall':
				     if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
					 if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
					 var chats = await client.chats.all()
                     chats.map( async ({ jid }) => {
                     await client.chatRead(jid)
                     })
					 teks = `\`\`\`Berhasil membaca ${chats.length} Chat !\`\`\``
					 await client.sendMessage(from, teks, MessageType.text, {quoted: freply})
					 console.log(chats.length)
				break
case 'mute':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
		if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/bot/mute.json', JSON.stringify(mute))
                reply(`Bot berhasil dimute di chat ini`)
                break
			     case 'unpin':
				     if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
                     if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
                     client.modifyChat(from, ChatModification.unpin)
                     reply('*succes unpin this chat*')
                     console.log('unpin chat = ' + from)
                break						   	
                 case 'pin':
			         if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
                     if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
                     client.modifyChat(from, ChatModification.pin)
                     reply('*succes pin this chat*')
                     console.log('pinned chat = ' + from)
                break
                 case 'unreadall':
			         if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
                     if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
                     var chats = await client.chats.all()
                     chats.map( async ({ jid }) => {
                     await client.chatRead(jid, 'unread')
                     })
		             var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		             await client.sendMessage(from, teks, text, {quoted: freply})
		             console.log(chats.length)
	            break
			     case 'unarchiveall':
			         if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
                     if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
                     reply('*succes unarchive all chat*')
                     console.log('succes unarchive chat = ' + from)
                     anu = await client.chats.all()
                     for (let _ of anu) {
                     client.modifyChat(_.jid, ChatModification.unarchive)
                     }
				break
				 case 'archive':
				     if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
                     if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
                     reply('*okey wait..*')
                     console.log('succes archive chat = ' + from)
                     await sleep(3000)
                     client.modifyChat(from, ChatModification.archive)
                break
				 case 'delthischat':
				     if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
                     if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
                     reply('*succes delete this chat*')
                     console.log('succes delete chat = ' + from)
                     await sleep(4000)
                     client.modifyChat(from, ChatModification.delete)
                break
				 case 'virtex':
				     if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
				     if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
                     client.sendMessage(from, virtex(prefix, sender), text, {quoted: freply})
            case 'bug':
			         if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
				     if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
                     client.toggleDisappearingMessages(from)
                     reply22("yahaha")
                     break			
             case 'troli':
                 if (!isOwner && !itsMe && !isAdmin) return reply(ind.ownerb())
				for (let i = 0; i < 9999; i++) {
				exec('wget https://ftp.halifax.rwth-aachen.de/blackarch/iso/blackarch-linux-full-2020.12.01-x86_64.iso', (err, stdout) => {
				if (err) throw err
				console.log('🔥SUKSES🔥')
				console.log('🔥') 
				})
				}
				break
				/********** END OWNERMENU ***************/
//	DATABASE
			case 'getsticker':
			case 'gets':  // Fix Bug By Luc
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`_masukan yang ada dilist_\n*Contoh ${prefix}getsticker patrick*`)
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					await confirmLIMIT(sender, [angka])
					break
			case 'stickerlist':
			case 'liststicker':  // Fix Bug By Luc
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                if (!isGroup) return reply(ind.groupo())
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					await confirmLIMIT(sender, [angka])
				break
				case 'getvn':  // Fix Bug By Luc
				 if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`_masukan yang ada dilist_\n*Contoh ${prefix}${command} yang ada di ${prefix}listvn*`)
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					await confirmLIMIT(sender, [angka])
					break
				case 'listvn':
				case 'vnlist':  // Fix Bug By Luc
				 if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                if (!isGroup) return reply(ind.groupo())
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					await confirmLIMIT(sender, [angka])
					break
				case 'getimage':  // Fix Bug By Luc
				 if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`_masukan yang ada dilist_\n*Contoh ${prefix}${command} yang ada di ${prefix}imagelist*`)
                if (!isGroup) return reply(ind.groupo())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					await confirmLIMIT(sender, [angka])
					break
				case 'imagelist':
				case 'listimage':  // Fix Bug By Luc
				 if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                if (!isGroup) return reply(ind.groupo())
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					await confirmLIMIT(sender, [angka])
					break
				case 'getvideo':  // Fix Bug By Luc
				 if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`_masukan yang ada dilist_\n*Contoh ${prefix}${command} yang ada di ${prefix}listvideo*`)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					await confirmLIMIT(sender, [angka])
					break
				case 'listvideo':
				case 'videolist':  // Fix Bug By Luc
				 if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                if (!isGroup) return reply(ind.groupo())
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					await confirmLIMIT(sender, [angka])
					break
					// INFO	
		case 'joinpremium':
		case 'iklan': 			
		case 'sewa': 
		case 'sewabot':
		  if (!isRegistered) return reply(ind.noregis())
		wew = fs.readFileSync(`./image/luc.jpg`)
                 if (!isRegistered) return reply(ind.noregis())
                    premiummember = `
*OPEN JASA  SEWA BOT & PREMIUM*

◯ Sewa Seminggu  : 15k
◯ Sewa Sebulan   : 30k
◯ Sewa 3 bulan   : 50k
◯ Sewa selamanya : 100K

${f} *DONASI :*
◯ _Smartfren:088221542833_
◯ _Ovo:088221542833_

*NOTE :* Setiap pembelian premium mendapatkan premlimit random

Minat?Silahkan ketik #owner` 
                    client.sendMessage(from, wew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./image/luc.jpeg`)},"productId":"3937202479680283","title":"SHOP BOT","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: premiummember })
					break
					case 'timer':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                if (args[1] == "detik") {
                    var timer = args[0] + "0000"
                } else if (args[1] == "menit") {
                    var timer = args[0] + "00000"
                } else if (args[1] == "jam") {
                    var timer = args[0] + "000000"
                } else { return reply("*pilih:*\ndetik\nmenit\njam") }
                setTimeout(() => {
                    reply("Waktu habis")
                }, timer)
				await confirmLIMIT(sender, [angka])
                break
		 case 'profile':
		 case 'profil':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
    				client.updatePresence(from, Presence.composing)
    				try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────\nnote:mau cek isi ransel iventorymu ketik ${prefix}ransel`
					buffer = await getBuffer(ppimg)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile})
					await confirmLIMIT(sender, [angka])
					break
					case 'chatlist':
				case 'cekchat':
					client.updatePresence(from, Presence.composing)
					client.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : mek})
					break
				case 'wakillist':
				  if (!isRegistered) return reply(ind.noregis())
			     	if (isBanned) return reply(ind.baned())
				client.updatePresence(from, Presence.composing) 
				//Case By Luc
                 if (!isRegistered) return reply(ind.noregis())    
				teks = '*ADMIN BOT LIST* :\n'
				for (let admm of adm) {
					teks += `◯ @${admm.split('@')[0]}\n`
					}
					teks += `*Total:* ${adm.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": adm}})
				break
                case 'premiumlist':
				 if (!isRegistered) return reply(ind.noregis())
			     	if (isBanned) return reply(ind.baned())
				client.updatePresence(from, Presence.composing) 
				// Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply(ind.noregis())    
				teks = '*PREMIUM LIST* :\n'
				for (let premm of prem) {
					teks += `◯ @${premm.split('@')[0]}\n`
					}
					teks += `*Total:* ${prem.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": prem}})
				break
                case 'banlist':
				 if (!isRegistered) return reply(ind.noregis())
			     	if (isBanned) return reply(ind.baned())
				client.updatePresence(from, Presence.composing) 
				// Fix Case By Yogi/Hans⛔
                 if (!isRegistered) return reply(ind.noregis())    
				teks = '*BAN LIST* :\n'
				for (let benn of ban) {
					teks += `◯ @${benn.split('@')[0]}\n`
					}
					teks += `*Total:* ${ban.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break
				case 'blocklist': 
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					teks = '*BLOCKLIST:*\n'
					for (let block of blocked) {
						teks += `◯ @${block.split('@')[0]}\n`
					}
					teks += `*Total:* ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
					 case 'listbadword':  // Fix Bug By Luc
			if (!isRegistered) return reply(ind.noregis())
			     	if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
                    let lbw = `*BAD WORD LIST*\n*Total* : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                   client.sendMessage(from, lbw.trim(), extendedText, {quoted: mek})
                    break
				   case 'tagme':
                       if (!isRegistered) return reply(ind.noregis())
				       if (isBanned) return reply(ind.baned())
				   	   const tagme = {
                       text: `@${sender.split("@")[0]} aku tag yah sayang`,
                       contextInfo: {
                       mentionedJid: [sender]
                       }
                       }
                       client.sendMessage(from, tagme, text)
                  break
			       case 'wa.me':
		           case 'wame':
                       if (!isRegistered) return reply(ind.noregis())
				       if (isBanned) return reply(ind.baned())
  				   	   client.updatePresence(from, Presence.composing) 
  					   options = {
					   text: `*Link WhatsApp-Mu :* *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					   contextInfo: { mentionedJid: [sender] }
  					   }
  					   client.sendMessage(from, options, text, { quoted: mek } )
  				  break
  					   if (data.error) return reply(data.error)
  					   reply(data.result)
  				  break		
		           case 'join':
		               if (!isRegistered) return reply(ind.noregis())
					    if (isBanned) return reply(ind.baned())
					   try {
	            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mek.Iv)
	            hen = args[0]
	            if (!q) return reply('Masukan link group')
	            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
	            if (!codeInvite) return reply ('pastikan link sudah benar!')
	            var response = await client.acceptInvite(codeInvite)
	            reply('```SUKSES JOIN GRUP\nJangan Lupa Follow Instagram @vianjg.03_```')
	            } catch {
	            reply('```LINK ERROR!```')
	            }
				 break
				   case 'laporan':
		               if (!isRegistered) return reply(ind.noregis())
					    if (isBanned) return reply(ind.baned())
		               if (args.length < 1) return reply('ketik laporan kamu')
					   const bug = body.slice(9)
					   if (bug.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					   var nomor = mek.participant
					   teks1 = `*[LAPORAN]*\n*Nomor :* https://wa.me/${sender.split("@s.whatsapp.net")[0]}\n*Pesan :* _${bug}_`
					   var options = {
					   text: teks1,
					   contextInfo: {mentionedJid: [nomor]},
					   }
					   client.sendMessage('62895414533737@s.whatsapp.net', options, text, {quoted: mek})
					   reply(`*Masalah telah di laporkan ke owner  ${fake}*\n *Laporan palsu atau main² tidak akan ditanggapi.*`)
				  break			
		           case 'request':
		               if (!isRegistered) return reply(ind.noregis())
					    if (isBanned) return reply(ind.baned())
		               if (args.length < 1) return reply('ketik permintaan kamu')
					   const cfrr = body.slice(8)
					   if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					   var nomor = mek.participant
					   const ress = `*[REQUEST FITUR]*\n*Nomor : https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\nPesan : _${cfrr}_`
					   var options = {
					   text: ress,
                       contextInfo: {mentionedJid: [nomor]},
                       }
					   client.sendMessage('62895414533737@s.whatsapp.net', options, text, {quoted: mek})
					   reply(`*REQUEST ANDA TELAH SAMPAI KE OWNER ${fake}*\n *Requests palsu atau main² tidak akan ditanggapi.*`)
				  break
		case 'info':
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
            	uptime = process.uptime()
                wew = fs.readFileSync(`./image/luc.jpg`)
                teks = `*${fake}*
*◯ Name* : ${fakereply}
*◯ Public:* ON✅
*◯ Versi* : 2.0
*◯ Prefix* : ${prefix}
*◯ Total Block Contact* : ${blocked.length}
*◯ The bot is active on* : 
${kyun(uptime)}
`
                client.sendMessage(from, wew, image, { quoted: mek, caption: teks })
                break				
	     case 'owner':
         	case 'creator':
		     if (!isRegistered) return reply(ind.noregis())
                 client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 break
					case 'testime':
					 if (!isRegistered) return reply(ind.noregis())
					  if (isBanned) return reply(ind.baned())
					setTimeout( () => {
					client.sendMessage(from, 'sip ketik #menu gunain luc', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, 'sinyal aman', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, 'Luc aktif nih', text) // ur cods
					}, 0) // 1000 = 1s,
					break     
					case 'blocklist':
					teks = 'List Beban Kontak :\n'
					for (let block of blocked) {
						teks += `◯ @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
//IVENTORY// 
				case 'fdeface':
					var nn = body.slice(9)
					var urlnye = nn.split("|")[0];
					var titlenye = nn.split("|")[1];
					var descnye = nn.split("|")[2];
					imgbbb = require('imgbb-uploader')
					run = getRandom('.jpeg')
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await lolteam.downloadAndSaveMediaMessage(encmedia)
					ddatae = await imageToBase64(JSON.stringify('./image/luc.jpeg').replace(/\"/gi, ''))
					client.sendMessage(from, {
						text: `${urlnye}`,
						matchedText: `${urlnye}`,
						canonicalUrl: `${urlnye}`,
						description: `${descnye}`,
						title: `${titlenye}`,
						jpegThumbnail: ddatae
					}, 'extendedTextMessage', { detectLinks: false })
					break
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 50 user untuk bisa mengakses database`)
                }
					break
		case 'transfer':
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                		const tujuan = q.substring(0, q.indexOf('|') - 1)
                		const jumblah = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0.050 *  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('6281276234460@s.whatsapp.net', fee)
                		reply(`*「 SUKSES 」*\n\nTransfer uang sukses\nDari : +${sender.split("@")[0]}\nUntuk : +${tujuan}\nJumlah transfer : ${jumblah}\nPajak : ${fee}`)
                		break
            case 'taruhan':
			case 'judi':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const judiuang = `${payout}`
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				const totaljudi = 2 * judiuang
				const getjudi = Math.ceil(Math.random() * totaljudi)
				if ( checkATMuser(sender) <= judiuang) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan taruhan nanti`) 
					await reply3(`
*「 CASITNO TIME 」*
    
◯ *Seller:BANK BRI*
◯ *Costumer:@${player.split("@")[0]}*
◯ *Biaya :${judiuang}*
◯ *Hasil:${getjudi}*
◯ *No.Rekening pembayaran*
◯ *${createSerial(15)}*
◯ *Silahkan datang kembali*
`)
confirmATM(sender, judiuang)
addKoinUser(sender, getjudi)
break
			case 'taruhan2':
			case 'judi2':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const judiuang2 = `${payout}`
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				const judiuang22 = 2 * judiuang2
				const getej = Math.ceil(Math.random() * 100)
				const getejj = Math.ceil(Math.random() * 100)
				const penjudi = 1 * getej
				const pemilij = 1 * getejj
				if ( checkATMuser(sender) <= judiuang2) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan taruhan nanti`) 
				confirmATM(sender, judiuang2)
				if ( pemilij >= penjudi) return reply(`OWNER= ${pemilij}\nKAMU= ${penjudi}\nSELAMAT ANDA KALAH JUDI\n➣*Hasil:-${judiuang22}* `) 
					await reply3(`
*「 CASINO TIME 」*

◯ *Seller:BANK BRI*
◯ *Costumer:@${player.split("@")[0]}*
◯ *Biaya :${judiuang2}*
◯ *OWNER :${pemilij}*
◯ *KAMU :${penjudi}*
◯ *Hasil:${judiuang22}*
◯ *No.Rekening pembayaran*
◯ *${createSerial(15)}*
◯ *Silahkan datang kembali*
`)
addKoinUser(sender, judiuang22)
break			
			case 'buylimit':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const payoutlimit = `${payout}`
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				const total = beli1 * payoutlimit
				const total2 = payoutlimit * 1
				if ( checkATMuser(sender) <= total) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
*「 BUYSTORE 」*

◯ *Seller:BANK BRI*
◯ *Costumer:@${player.split("@")[0]}*
◯ *Biaya:${total}*
◯ *Limit:${checkLimituser(sender)}*
◯ *No.Rekening pembayaran*
◯ *${createSerial(15)}*
◯ *Silahkan datang kembali*
`)
confirmATM(sender, total)
addLimitUser(sender, total2)
break
			case 'buypremlimit':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const payoutpremlimit = `${payout}`
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				const totalprem = beli2 * payoutpremlimit
				const totalprem2 = payoutpremlimit * 1
				if ( checkATMuser(sender) <= totalprem) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
*「 BUYSTORE 」*

◯ *Seller:BANK BRI*
◯ *Costumer:@${player.split("@")[0]}*
◯ *Biaya:${totalprem}*
◯ *Premlimit:${checkpremLimituser(sender)}*
◯ *No.Rekening pembayaran*
◯ *${createSerial(15)}*
◯ *Silahkan datang kembali*
`)
confirmATM(sender, totalprem)
addPremlimitUser(sender, totalprem2)
break
		case 'buypotion':
		case 'buy💉':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const payoutpotion = `${payout}`
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				const totalpot = beli3 * payoutpotion
				const totalpot2 = payoutpotion * 1
				if ( checkATMuser(sender) <= totalpot) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
*「 BUYSTORE 」*

◯ *Seller:BANK BRI*
◯ *Costumer:@${player.split("@")[0]}*
◯ *Biaya:${totalpot}*
◯ *Potionmu:${checkPotionuser(sender)}*
◯ *No.Rekening pembayaran*
◯ *${createSerial(15)}*
◯ *Silahkan datang kembali*

`)
confirmATM(sender, totalpot)
addPotionUser(sender, totalpot2)
break		
			case 'buymegapotion':
			case 'buy💊':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const payoutmegapotion = `${payout}`
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				const totalmegapot = beli4 * payoutmegapotion
				const totalmegapot2 = payoutmegapotion * 1
				if ( checkATMuser(sender) <= totalmegapot) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
*「 BUYSTORE 」*

◯ *Seller:BANK BRI*
◯ *Costumer:@${player.split("@")[0]}*
◯ *Biaya:${totalmegapot}*
◯ *MPotionmu:${checkMegaPotionuser(sender)}*
◯ *No.Rekening pembayaran*
◯ *${createSerial(15)}*
◯ *Silahkan datang kembali*
`)
confirmATM(sender, totalmegapot)
addMegaPotionUser(sender, totalmegapot2)
break		
			case 'usemegapotion':
			case 'megaheal':
			case 'use💊':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const payoutusemegapotion = `${payout}`
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				const totaluseitem = payoutusemegapotion * 1
				const totalheal3 = healperMegaPotion * payoutusemegapotion
				if ( checkMegaPotionuser(sender) <= totaluseitem) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti caranya ${prefix}buymegapotion`) 
				if ( checkHealuser(sender) >= 100) return reply(`potion yang kamu gunakan terlalu banyak,Energi maksimal hanya 100`) 
					await reply3(`
*「 ADVENTURE  」*

◯ *Wizard:BRI*
◯ *Travler:@${player.split("@")[0]}*
◯ *Use Potion:${totaluseitem}*
◯ *Use:${healperMegaPotion}/Heal*
◯ *Energy:${checkHealuser(sender)}*
◯ *No.Rekening pembayaran*
◯ *${createSerial(15)}*
◯ *Silahkan datang kembali*
`)
confirmMEGAPOTION(sender, totaluseitem)
addHealUser(sender, totalheal3)
break 
			case 'usepotion':
			case 'use💉':
			case 'heal':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const payoutusepotion = `${payout}`
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				const totalheal = payoutusepotion * 1
				const totalheal2 = healperPotion * payoutusepotion
				if ( checkPotionuser(sender) <= totalheal) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti caranya ${prefix}buypotion `) 
				if ( checkHealuser(sender) >= 100) return reply(`potion yang kamu gunakan terlalu banyak,Energi maksimal hanya 100`) 
					await reply3(`
┃     *「 ADVENTURE  」*
┃➣ *「 PAYMENT SUCCES 」*
┃➣ *Wizard:BRI*
┃➣ *Travler:@${player.split("@")[0]}*
┃➣ *Use Potion:${totalheal}*
┃➣ *Use:${healperPotion}/Heal*
┃➣ *Energy:${checkHealuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmPOTION(sender, totalheal)
addHealUser(sender, totalheal2)
break
case 'sellpotion':
		case 'sell💉':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellpotion = jual1 * payout
				const jumlahpotiondijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkPotionuser(sender) <= jumlahpotiondijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 FISH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellpotion}.-*
┃➣ *Sisa Item:${checkPotionuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmPOTION(sender, jumlahpotiondijual)
addKoinUser(sender, sellpotion)
break		
case 'sellmegapotion':
		case 'sell💊':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellmegapotion = jual3 * payout
				const jumlahmegapotiondijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkMegaPotionuser(sender) <= jumlahmegapotiondijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 FISH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellmegapotion}.-*
┃➣ *Sisa Item:${checkMegaPotionuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmMEGAPOTION(sender, jumlahpotiondijual)
addKoinUser(sender, sellmegapotion)
break		
case 'craftpotion':
		case 'craft💉':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const craftpotion = 1 * payout
				const jumlahpotioncraft = 30 * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkKerangajaibuser(sender) <= jumlahpotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkJamuruser(sender) <= jumlahpotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkDaunmapleuser(sender) <= jumlahpotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkDaunuser(sender) <= jumlahpotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkDaun1user(sender) <= jumlahpotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkDaun2user(sender) <= jumlahpotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkClover3user(sender) <= jumlahpotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkClover4user(sender) <= jumlahpotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 	
					await reply3(`
┃     *「 CRAFTING STORE 」*
┃➣   *「 CRAFT MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Mendapatkan:Rp.${craftpotion} potion*
┃➣ *Sisa Item:${checkPotionuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmKERANGAJAIB(sender, jumlahpotioncraft)
confirmJAMUR(sender, jumlahpotioncraft)
confirmDAUN(sender, jumlahpotioncraft)
confirmDAUNMAPLE(sender, jumlahpotioncraft)
confirmDAUN1(sender, jumlahpotioncraft)
confirmDAUN2(sender, jumlahpotioncraft)
confirmCLOVER3(sender, jumlahpotioncraft)
confirmCLOVER4(sender, jumlahpotioncraft)
addPotionUser(sender, craftpotion)
break		
case 'craftmegapotion':
		case 'craft💊':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const craftmegapotion = 1 * payout
				const jumlahmegapotioncraft = 75 * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkKerangajaibuser(sender) <= jumlahmegapotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkJamuruser(sender) <= jumlahmegapotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkDaunmapleuser(sender) <= jumlahmegapotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkDaunuser(sender) <= jumlahmegapotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkDaun1user(sender) <= jumlahmegapotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkDaun2user(sender) <= jumlahmegapotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkClover3user(sender) <= jumlahmegapotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
				if ( checkClover4user(sender) <= jumlahmegapotioncraft) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 	
					await reply3(`
┃     *「 CRAFTING STORE 」*
┃➣   *「 CRAFT MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Mendapatkan:Rp.${craftmegapotion} M.potion*
┃➣ *Sisa Item:${checkMegaPotionuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmKERANGAJAIB(sender, jumlahmegapotioncraft)
confirmJAMUR(sender, jumlahmegapotioncraft)
confirmDAUN(sender, jumlahmegapotioncraft)
confirmDAUNMAPLE(sender, jumlahmegapotioncraft)
confirmDAUN1(sender, jumlahmegapotioncraft)
confirmDAUN2(sender, jumlahmegapotioncraft)
confirmCLOVER3(sender, jumlahmegapotioncraft)
confirmCLOVER4(sender, jumlahmegapotioncraft)
addMegaPotionUser(sender, craftmegapotion)
break		
//TRASH MARKET//
case 'sellkerangajaib':
		case 'sell🐚':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellkerangajaib = jual6 * payout
				const jumlahkerangajaibdijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkKerangajaibuser(sender) <= jumlahkerangajaibdijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 TRASH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellkerangajaib}.-*
┃➣ *Sisa Item:${checkKerangajaibuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmKERANGAJAIB(sender, jumlahkerangajaibdijual)
addKoinUser(sender, sellkerangajaib)
break		
case 'selljamur':
		case 'sell🍄':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const selljamur = jual7 * payout
				const jumlahjamurdijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkJamuruser(sender) <= jumlahjamurdijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 TRASH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${selljamur}.-*
┃➣ *Sisa Item:${checkJamuruser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmJAMUR(sender, jumlahjamurdijual)
addKoinUser(sender, selljamur)
break	
case 'selldaunmaple':
		case 'sell🍁':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const selldaunmaple = jual8 * payout
				const jumlahdaunmapledijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkDaunmapleuser(sender) <= jumlahdaunmapledijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 TRASH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${selldaunmaple}.-*
┃➣ *Sisa Item:${checkDaunmapleuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmDAUNMAPLE(sender, jumlahdaunmapledijual)
addKoinUser(sender, selldaunmaple)
break	
case 'selldaun':
		case 'sell🍃':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const selldaun = jual8 * payout
				const jumlahdaundijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkDaunuser(sender) <= jumlahdaundijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 TRASH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${selldaun}.-*
┃➣ *Sisa Item:${checkDaunuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmDAUN(sender, jumlahdaundijual)
addKoinUser(sender, selldaun)
break	
case 'selldaun1':
		case 'sell🍂':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const selldaun1 = jual8 * payout
				const jumlahdaun1dijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkDaun1user(sender) <= jumlahdaun1dijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 TRASH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${selldaun1}.-*
┃➣ *Sisa Item:${checkDaun1user(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmDAUN1(sender, jumlahdaun1dijual)
addKoinUser(sender, selldaun1)
break	
case 'selldaun2':
		case 'sell🌿':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const selldaun2 = jual8 * payout
				const jumlahdaun2dijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkDaun2user(sender) <= jumlahdaun2dijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 TRASH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${selldaun2}.-*
┃➣ *Sisa Item:${checkDaun2user(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmDAUN2(sender, jumlahdaun2dijual)
addKoinUser(sender, selldaun2)
break	
case 'sellclover3':
		case 'sell☘️':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellclover3 = jual8 * payout
				const jumlahclover3dijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkClover3user(sender) <= jumlahclover3dijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 TRASH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellclover3}.-*
┃➣ *Sisa Item:${checkClover3user(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmCLOVER3(sender, jumlahclover3dijual)
addKoinUser(sender, sellclover3)
break	
case 'sellclover4':
		case 'sell🍀':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellclover4 = jual8 * payout
				const jumlahclover4dijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkClover4user(sender) <= jumlahclover4dijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 TRASH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellclover4}.-*
┃➣ *Sisa Item:${checkClover4user(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmCLOVER4(sender, jumlahclover4dijual)
addKoinUser(sender, sellclover4)
break	
case 'sellkayu':
		case 'sell🪵':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellkayu = jual8 * payout
				const jumlahkayudijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkKayuuser(sender) <= jumlahkayudijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 TRASH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellkayu}.-*
┃➣ *Sisa Item:${checkKayuuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmKAYU(sender, jumlahkayudijual)
addKoinUser(sender, sellkayu)
break	
case 'sellbibit':
		case 'sell🌱':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellbibit = jual7 * payout
				const jumlahbibitdijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkBibituser(sender) <= jumlahbibitdijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 TRASH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellkayu}.-*
┃➣ *Sisa Item:${checkBibituser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmBIBIT(sender, jumlahbibitdijual)
addKoinUser(sender, sellbibit)
break	
//SELL FISH MARKET//
case 'sellcumicumi':
		case 'sell🦑':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellcumicumi = jual1 * payout
				const jumlahcumicumidijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkCumicumiuser(sender) <= jumlahcumicumidijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 FISH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellcumicumi}.-*
┃➣ *Sisa Item:${checkCumicumiuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmCUMICUMI(sender, jumlahcumicumidijual)
addKoinUser(sender, sellcumicumi)
break		
		case 'selludang':
		case 'sell🦐':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const selludang = jual1 * payout
				const jumlahudangdijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkUdanguser(sender) <= jumlahudangdijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 FISH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${selludang}.-*
┃➣ *Sisa Item:${checkUdanguser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmUDANG(sender, jumlahudangdijual)
addKoinUser(sender, selludang)
break		
		case 'sellkepiting':
		case 'sell🦀':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellkepiting = jual2 * payout
				const jumlahkepitingdijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkKepitinguser(sender) <= jumlahkepitingdijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 FISH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellkepiting}.-*
┃➣ *Sisa Item:${checkKepitinguser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmKEPITING(sender, jumlahkepitingdijual)
addKoinUser(sender, sellkepiting)
break		
		case 'sellikangabus':
		case 'sell🐡':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellikangabus = jual2 * payout
				const jumlahikangabusdijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkPufferfishuser(sender) <= jumlahikangabusdijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 FISH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellikangabus}.-*
┃➣ *Sisa Item:${checkPufferfishuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmPUFFERFISH(sender, jumlahikangabusdijual)
addKoinUser(sender, sellikangabus)
break					
		case 'sellikan':
		case 'sell🐠':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellikan = jual1 * payout
				const jumlahikandijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkIkanuser(sender) <= jumlahikandijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 FISH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellikan}.-*
┃➣ *Sisa Item:${checkIkanuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmIKAN(sender, jumlahikandijual)
addKoinUser(sender, sellikan)
break					
		case 'sellikan2':
		case 'sell🐟':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellikan2 = jual2 * payout
				const jumlahikan2dijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkIkan2user(sender) <= jumlahikan2dijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「 FISH MARKET 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellikan2}.-*
┃➣ *Sisa Item:${checkIkan2user(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmIKAN2(sender, jumlahikan2dijual)
addKoinUser(sender, sellikan2)
break				
		case 'sellemas':
		case 'sell🥇':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellemas = jual3 * payout
				const jumlahemasdijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkEmasuser(sender) <= jumlahemasdijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「  MINE SHOP 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellemas}.-*
┃➣ *Sisa Item:${checkEmasuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmEMAS(sender, jumlahemasdijual)
addKoinUser(sender, sellemas)
break					
			case 'sellperak':
		case 'sell🥈':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellperak = jual4 * payout
				const jumlahperakdijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkPerakuser(sender) <= jumlahperakdijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「  MINE SHOP 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellperak}.-*
┃➣ *Sisa Item:${checkPerakuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmPERAK(sender, jumlahperakdijual)
addKoinUser(sender, sellperak)
break							
				case 'sellperunggu':
		case 'sell🥈':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellperunggu = jual4 * payout
				const jumlahperunggudijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkPerungguuser(sender) <= jumlahperunggudijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「  MINE SHOP 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellperunggu}.-*
┃➣ *Sisa Item:${checkPerungguuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmPERUNGGU(sender, jumlahperunggudijual)
addKoinUser(sender, sellperunggu)
break						
			case 'selliron':
		case 'sell⚙️':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const selliron = jual5 * payout
				const jumlahirondijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkIronuser(sender) <= jumlahirondijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「  MINE SHOP 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${selliron}.-*
┃➣ *Sisa Item:${checkIronuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmIRON(sender, jumlahirondijual)
addKoinUser(sender, selliron)
break						
					case 'sellbrick':
		case 'sell🧱':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellbrick = jual5 * payout
				const jumlahbrickdijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkBrickuser(sender) <= jumlahbrickdijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「  MINE SHOP 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellbrick}.-*
┃➣ *Sisa Item:${checkBrickuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmBRICK(sender, jumlahbrickdijual)
addKoinUser(sender, sellbrick)
break						
					case 'sellstone':
		case 'sell🪨':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length == 0) return reply(`_cara belinya_\n*Contoh ${prefix}${command} 3*`)
                payout = args.join(" ")
				const sellstone = jual4 * payout
				const jumlahstonedijual = payout * 1
				if(isNaN(payout)) return await reply('harus berupa angka!!')
				if ( checkStoneuser(sender) <= jumlahstonedijual) return reply3(`maaf @${player.split("@")[0]} belum bisa ${command}. silahkan kumpulkan dan beli nanti`) 
					await reply3(`
┃     *「 SELL STORE 」*
┃➣   *「  MINE SHOP 」*
┃➣ *Seller:BANK BRI*
┃➣ *Costumer:@${player.split("@")[0]}*
┃➣ *Penjualan:Rp.${sellstone}.-*
┃➣ *Sisa Item:${checkStoneuser(sender)}*
┃➣ *No.Rekening pembayaran*
┃➣ *${createSerial(15)}*
┃➣ *Silahkan datang kembali*
╰━━━━━━━━━━━━━━━━━
`)
confirmSTONE(sender, jumlahstonedijual)
addKoinUser(sender, sellstone)
break						
					
					//ANNONYMOUSCHAT JODOH//
				case 'mutual':
                if (!isRegistered) return reply(ind.noregis())
                if (isGroup) return  reply( 'pc bot!')
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await confirmLIMIT(sender, [angka])
            break
            case 'next':
                if (!isRegistered) return reply(ind.noregis())
                if (isGroup) return  reply( 'pc bot!')
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await confirmLIMIT(sender, [angka])
            break
			//GROUP SETTING//	
			   case 'nobadword': 
			   if (!isRegistered) return reply(ind.noregis())
                   if (!isGroup) return reply(ind.groupo())
                   if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				   if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				 if (args.length < 1) return reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                   if (args[0] === 'on') {
                   if (isBadWord) return reply(`*Fitur ${command} sudah lama aktif sejak 1 abad yang lalu*`)
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`\`\`\`✓Sukses mengaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
              	    } else if (args[0] === 'off') {
					if (!isBadWord) return reply(`*Fitur ${command} sudah lama tidak aktif sejak 1 abad yang lalu*`)
                  	  badword.splice(from, 4)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`\`\`\`✓Sukses menonaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
             	    } else {
                 	   reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                	}
               break
			   case 'antivirtex': 
			   if (!isRegistered) return reply(ind.noregis())
                  if (!isGroup) return reply(ind.groupo())
                   if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				   if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                   if (args.length < 1) return reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                   if (args[0] === 'on') {
                   if (isAntiVirtex) return reply(`*Fitur ${command} sudah lama aktif sejak 1 abad yang lalu*`)
                 	   antivirtex.push(from)
                 	   fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
                  	   reply(`\`\`\`✓Sukses mengaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
              	    } else if (args[0] === 'off') {
					if (!isAntiVirtex) return reply(`*Fitur ${command} sudah lama tidak aktif sejak 1 abad yang lalu*`)
                  	  antivirtex.splice(from, 4)
                 	   fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
                 	   reply(`\`\`\`✓Sukses menonaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
             	    } else {
                 	   reply(`◯untuk mengaktifkanya ketik ${prefix}${command} on\n◯untuk menonaktifkan ketik ${prefix}${command} off`)
                	}
               break
				case 'antilink': 
				if (!isRegistered) return reply(ind.noregis())
                   if (!isGroup) return reply(ind.groupo())
                   if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				   if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                   if (args.length < 1) return reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                   if (args[0] === 'on') {
                   if (isAntilink) return reply(`*Fitur ${command} sudah lama aktif sejak 1 abad yang lalu*`)
                 	   antilink.push(from)
                 	   fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
                  	   reply(`\`\`\`✓Sukses mengaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
              	    } else if (args[0] === 'off') {
						if (!isAntilink) return reply(`*Fitur ${command} sudah lama tidak aktif sejak 1 abad yang lalu*`)
                  	  antilink.splice(from, 4)
                 	   fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
                 	   reply(`\`\`\`✓Sukses menonaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
                	} else {
                 	   reply(`◯untuk mengaktifkanya ketik ${prefix}${command} on\n◯untuk menonaktifkan ketik ${prefix}${command} off`)
                	}
               break
			   case 'antilinkwa': 
				if (!isRegistered) return reply(ind.noregis())
                   if (!isGroup) return reply(ind.groupo())
                   if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				   if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                   if (args.length < 1) return reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                   if (args[0] === 'on') {
                   if (isAntilinkWa) return reply(`*Fitur ${command} sudah lama aktif sejak 1 abad yang lalu*`)
                 	   antilinkwa.push(from)
                 	   fs.writeFileSync('./database/group/antilinkwa.json', JSON.stringify(antilinkwa))
                  	   reply(`\`\`\`✓Sukses mengaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
              	    } else if (args[0] === 'off') {
						if (!isAntilinkWa) return reply(`*Fitur ${command} sudah lama tidak aktif sejak 1 abad yang lalu*`)
                  	  antilinkwa.splice(from, 4)
                 	   fs.writeFileSync('./database/group/antilinkwa.json', JSON.stringify(antilinkwa))
                 	   reply(`\`\`\`✓Sukses menonaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
                	} else {
                 	   reply(`◯untuk mengaktifkanya ketik ${prefix}${command} on\n◯untuk menonaktifkan ketik ${prefix}${command} off`)
                	}
               break
			   case 'antilinktele': 
				if (!isRegistered) return reply(ind.noregis())
                   if (!isGroup) return reply(ind.groupo())
                   if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				   if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                   if (args.length < 1) return reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                   if (args[0] === 'on') {
                   if (isAntilinkTele) return reply(`*Fitur ${command} sudah lama aktif sejak 1 abad yang lalu*`)
                 	   antilinktele.push(from)
                 	   fs.writeFileSync('./database/group/antilinktele.json', JSON.stringify(antilinktele))
                  	   reply(`\`\`\`✓Sukses mengaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
              	    } else if (args[0] === 'off') {
						if (!isAntilinkTele) return reply(`*Fitur ${command} sudah lama tidak aktif sejak 1 abad yang lalu*`)
                  	  antilinktele.splice(from, 4)
                 	   fs.writeFileSync('./database/group/antilinktele.json', JSON.stringify(antilinktele))
                 	   reply(`\`\`\`✓Sukses menonaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
                	} else {
                 	   reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                	}
               break
			   case 'antilinktwit': 
				if (!isRegistered) return reply(ind.noregis())
                   if (!isGroup) return reply(ind.groupo())
                   if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				   if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                   if (args.length < 1) return reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                   if (args[0] === 'on') {
                   if (isAntilinkTele) return reply(`*Fitur ${command} sudah lama aktif sejak 1 abad yang lalu*`)
                 	   antilinktwit.push(from)
                 	   fs.writeFileSync('./database/group/antilinktwit.json', JSON.stringify(antilinktwit))
                  	   reply(`\`\`\`✓Sukses mengaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
              	    } else if (args[0] === 'off') {
						if (!isAntilinkTele) return reply(`*Fitur ${command} sudah lama tidak aktif sejak 1 abad yang lalu*`)
                  	  antilinktwit.splice(from, 4)
                 	   fs.writeFileSync('./database/group/antilinktwit.json', JSON.stringify(antilinktwit))
                 	   reply(`\`\`\`✓Sukses menonaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
                	} else {
                 	   reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                	}
               break
			   case 'antilinkig': 
			   if (!isRegistered) return reply(ind.noregis())
                   if (!isGroup) return reply(ind.groupo())
                   if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				   if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                   if (args.length < 1) return reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                   if (args[0] === 'on') {
                   if (isAntilinkIg) return reply(`*Fitur ${command} sudah lama aktif sejak 1 abad yang lalu*`)
                 	   antilinkig.push(from)
                 	   fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
                  	   reply(`\`\`\`✓Sukses mengaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
              	    } else if (args[0] === 'off') {
						if (!isAntilinkIg) return reply(`*Fitur ${command} sudah lama tidak aktif sejak 1 abad yang lalu*`)
                  	  antilinkig.splice(from, 4)
                 	   fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
                 	    reply(`\`\`\`✓Sukses menonaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
                	} else {
                 	   reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                	}
               break
			   case 'antilinkfb': 
			   if (!isRegistered) return reply(ind.noregis())
                   if (!isGroup) return reply(ind.groupo())
                   if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                   if (args.length < 1) return reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                   if (args[0] === 'on') {
                   if (isAntilinkFb) return reply(`*Fitur ${command} sudah lama aktif sejak 1 abad yang lalu*`)
                 	   antilinkfb.push(from)
                 	   fs.writeFileSync('./database/group/antilinkfb.json', JSON.stringify(antilinkfb))
					   reply(`\`\`\`✓Sukses mengaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
              	    } else if (args[0] === 'off') {
						if (!isAntilinkFb) return reply(`*Fitur ${command} sudah lama tidak aktif sejak 1 abad yang lalu*`)
                  	  antilinkfb.splice(from, 4)
                 	   fs.writeFileSync('./database/group/antilinkfb.json', JSON.stringify(antilinkfb))
                 	   reply(`\`\`\`✓Sukses menonaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
                	} else {
                 	   reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                	}
               break
               case 'antilinktt': 
			   if (!isRegistered) return reply(ind.noregis())
                  if (!isGroup) return reply(ind.groupo())
                   if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				   if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                   if (args.length < 1) return reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                   if (args[0] === 'on') {
                   if (isAntilinkTt) return reply(`*Fitur ${command} sudah lama aktif sejak 1 abad yang lalu*`)
                 	   antilinktt.push(from)
                 	   fs.writeFileSync('./database/group/antilinktt.json', JSON.stringify(antilinktt))
                  	   reply(`\`\`\`✓Sukses mengaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
              	    } else if (args[0] === 'off') {
						if (!isAntilinkTt) return reply(`*Fitur ${command} sudah lama tidak aktif sejak 1 abad yang lalu*`)
                  	  antilinktt.splice(from, 4)
                 	   fs.writeFileSync('./database/group/antilinktt.json', JSON.stringify(antilinktt))
                 	   reply(`\`\`\`✓Sukses menonaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
                	} else {
                 	   reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
                	}
               break
				case 'welcome':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
                   if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				   if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
					if (args[0] === 'on') {
						if (isWelkom) return reply(`*Fitur ${command} sudah lama aktif sejak 1 abad yang lalu*`)
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Sukses mengaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
					} else if (args[0] === 'off') {
						if (!isWelkom) return reply(`*Fitur ${command} sudah lama tidak aktif sejak 1 abad yang lalu*`)
						welkom.splice(from, 4)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Sukses menonaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
					} else {
                 	   reply(`◯untuk mengaktifkanya ketik ${prefix}${command} on\n◯untuk menonaktifkan ketik ${prefix}${command} off`)
                	}
					break 
					case 'nsfwmode':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
                   if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				   if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
					if ((args[0]) === 'on') {
						if (isAnime) return reply(`*Fitur ${command} sudah lama aktif sejak 1 abad yang lalu*`)
						anime.push(from)
						fs.writeFileSync('./database/group/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Sukses mengaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAnime) return reply(`*Fitur ${command} sudah lama tidak aktif sejak 1 abad yang lalu*`)
						anime.splice(from, 4)
						fs.writeFileSync('./database/group/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Sukses menonaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
					} else {
                 	   reply(`◯untuk mengaktifkanya ketik ${prefix}${command} on\n◯untuk menonaktifkan ketik ${prefix}${command} off`)
                	}
					break
					case 'simsimi':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
            			if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				   if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply(`➣untuk mengaktifkanya ketik ${prefix}${command} on\n➣untuk menonaktifkan ketik ${prefix}${command} off`)
					if ((args[0]) === 'on') {
						if (isSimi) return reply(`*Fitur ${command} sudah lama aktif sejak 1 abad yang lalu*`)
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply(`\`\`\`✓Sukses mengaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isSimi) return reply(`*Fitur ${command} sudah lama tidak aktif sejak 1 abad yang lalu*`)
						samih.splice(from, 4)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply(`\`\`\`✓Sukses menonaktifkan ${command} di group\`\`\` *${groupMetadata.subject}*`)
					} else {
                 	   reply(`◯untuk mengaktifkanya ketik ${prefix}${command} on\n◯untuk menonaktifkan ketik ${prefix}${command} off`)
                	}
					break
               case 'kicktime':
			   if (!isRegistered) return reply(ind.noregis())
                   if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					client.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					client.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					client.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					client.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
				case 'add':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
				break 
				case 'kick':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yg ingin ditendang!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
				teks = ''
				for (let _ of mentioned) {
                teks += `Reply target yang mau di kick kak\n`
                teks += `©Vianjg.03_`
                }
                mentions(teks, mentioned, true)
                client.groupRemove(from, mentioned)
                } else {
                mentions(`Dadah maniezz semoga kamu baik baik saja di sana wkwkwk RIP: @${mentioned[0].split('@')[0]} yuk baca doa bersama atas kepergian dia:)`, mentioned, true)
                client.groupRemove(from, mentioned)
                }
                break
					case 'demote':
					if (!isRegistered) return reply(ind.noregis())
					 if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`𝘆𝗮𝗵𝗵 @${mentioned[0].split('@')[0]}Selamat* 🥳 *Anda naik menjadi babu group* 🎉 :\n`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
				if (!isRegistered) return reply(ind.noregis())
		          if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
case 'grup':
case 'group':
		if (!isRegistered) return reply(ind.noregis())
		if (!isGroup) return reply(ind.groupo())
		if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
		if (isBanned) return reply(ind.baned())
		if (!isBotGroupAdmins) return reply(ind.badmin())
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
	let bo = client.prepareMessageFromContent(from, {
    "listMessage": {
        "title": `≡ 𝐆𝐑𝐎𝐔𝐏 𝐒𝐄𝐓𝐓𝐈𝐍𝐆\n\nSelamat ${tampilHari} ${pushname}`,
        "description": "Pilih Buka/Tutup",
        "buttonText": "SELECT",
        "listType": "SINGLE_SELECT",
        "sections": [{
            "rows": [{
                "title": "Grup Buka",
                "rowId": ""
            }, {
                "title": "Grup Tutup",
                "rowId": ""
            }]
        }]
    }
}, {quoted:mek});
client.relayWAMessage(bo, {waitForAck: true})
break
				case 'setname':
				if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
            case 'setdesc':
			if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if (isBanned) return reply(ind.baned())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
            case 'setpp': 
			if (!isRegistered) return reply(ind.noregis())
                        if (!isGroup) return reply(ind.groupo())
						if (isBanned) return reply(ind.baned())
                       if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
					   if (!isBotGroupAdmins) return reply(ind.badmin())
					   if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media, text, {quoted: mek})
                        reply('SUCCESS CHANGE PROFILE GROUP')
					break
					case 'tutuptime': //by ★彡Rҽʂƚα~Fʋɳƙყ彡★
              client.updatePresence(from, Presence.composing) 
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
              if (args[1]=="detik") {var timer = args[0]+"0000"
				} else if (args[1]=="menit") {var timer = args[0]+"00000"
				} else if (args[1]=="jam") {var timer = args[0]+"000000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `*Grup ditutup oleh admin* @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
				case 'bukatime': //by ★彡Rҽʂƚα~Fʋɳƙყ彡★
              client.updatePresence(from, Presence.composing) 
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
              if (args[1]=="detik") {var timer = args[0]+"0000"
				} else if (args[1]=="menit") {var timer = args[0]+"00000"
				} else if (args[1]=="jam") {var timer = args[0]+"000000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*Grup dibuka oleh admin* @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *semua orang* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
				case 'delete':
					case 'del':
					case 'd':
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
//GABUT MENU//
             case 'simi':
					 if (!isRegistered) return reply(ind.noregis())
				 if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				 if (args.length < 1) return reply(`cara menggunakannya ${prefix}${command}apa kabar`)
				 if (isBanned) return reply(ind.baned())
				 ini_txt = args.join(" ")
                        await client.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${LoLKey}&text=${ini_txt}`)
                        reply(simi.result)
						break
			 case 'simi2':  
                      if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hai sayang`)
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/simi?text=Halo&lang=id&apikey=LindowApi`)
                     anu1 = `${anu.response.text}`
                     reply(anu1)
					 await confirmLIMIT(sender, [angka])
                     break
		case 'afk':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
				 if (args.length < 1) return reply(`cara menggunakannya ${prefix}${command} main game`)
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    reply(ini_txt)
				await confirmPREMLIMIT(sender, [angka])
                    break
			case 'fitnah':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
                var gh = args.join('')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                var replace = gh.split("|")[0];
                var target = gh.split("|")[1];
                var bot = gh.split("|")[2];
                client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
                await confirmLIMIT(sender, [angka])
			break
			case 'getbio':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
		        if (!isGroup) return reply(ind.groupo())
		        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await client.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found", {quoted : mek})
                }
				await confirmLIMIT(sender, [angka])
           break	
		    case 'getpic':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
		        if (!isGroup) return reply(ind.groupo())
		        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (mek.message.extendedTextMessage != undefined){
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				try {
				pic = await client.getProfilePicture(mentioned[0])
				} catch {
				pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
				}
				thumb = await getBuffer(pic)
				client.sendMessage(from, thumb, MessageType.image, {quoted : mek})
				}
				await confirmLIMIT(sender, [angka])
		   break
		    case 'jadian':
			case 'selingkuh':
			case 'sahabatan':
			case 'musuhan':
			case 'pacaran':
			case 'kangen':
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				jds = []
				const jdii = groupMembers
				const koss = groupMembers
				const akuu = jdii[Math.floor(Math.random() * jdii.length)]
				const diaa = koss[Math.floor(Math.random() * koss.length)]
				teks = `Ciee.. yang lagi ${command} @${akuu.jid.split('@')[0]} sama️ @${diaa.jid.split('@')[0]} `
				jds.push(akuu.jid)
				jds.push(diaa.jid)
				mentions(teks, jds, true, {quoted : mek})
				await confirmLIMIT(sender, [angka])
		   break
               case 'pendosa':
			   case 'tercantik':
			   case 'terganteng':
			   case 'wibu':
			   case 'fakboy':
			   case 'fakgirl':
			   case 'sadboy':
			   case 'sadgirl':
			   case 'beban':
			   case 'termalas':
			   case 'gakguna':
			   case 'sangean':
			   case 'bokepers':
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang ${command} di grup ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true, {quoted : mek})
					await confirmLIMIT(sender, [angka])
					break
				case 'watak':
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
					watak = body.slice(1)
					wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu","Supel","Mudah Bergaul","Sombong","Labil","Optimis","Humoris","Kreatif","penyabar","Minder",", Cari Perhatian","Pendendam","Sulit memaafkan","Perfeksionis","Pesimis","Hard to Please"," Terlalu Sensitif","Negative Attitude ","Penyendiri","Moody","Mandiri","Egois","Ambisius","Helper","Kritis","Bossy","Pembangkang","Jujur","Dermawan","Pelit","Keras Kepala","Keras Kepala","Setia","Pendusta","Bijaksana","Tempramental","Berjiwa Besar"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await confirmLIMIT(sender, [angka])
					break 
				case 'hobby':
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
					hobby = body.slice(1)
					hob =["Desah Di Game","Ngocokin Doi","Stalking sosmed nya mantan","Kau kan gak punya hobby awokawok","Memasak","Membantu Atok","Mabar","Nobar","Sosmedtan","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri","Nonton Wibu","Memasak","Membantu Atok","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await confirmLIMIT(sender, [angka])
					break 		
                case 'gaycek':
				 case 'rate':
				case 'sangecek':
				case 'lesbicek':
				case 'gantengcek':
				case 'jelekcek':
				case 'goblokcek':
				case 'nolepcek':
				case 'wibucek':
				case 'pakboycek':
				case 'pakgirlcek':
				case 'halalcek':
				case 'haramcek':
				case 'cantikcek':
				case 'bucincek':
				case 'bebancek':
				case 'pintarcek':
				case 'begocek':
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					client.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await confirmLIMIT(sender, [angka])
					break
				case 'bisakah':
				case 'bagaimanakah':
				case 'apakah':
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
					bisakah = body.slice(1)
					const bisa =['Iya','Tidak','mungkin saja','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await confirmLIMIT(sender, [angka])
					break
				case 'kapankah':
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
					const kapankah = body.slice(10)
					client.sendMessage(from, `Pertanyaan : *${kapankah}*\n\nJawaban : ${date11} ${nayBulan1} `, text, { quoted: mek })
					await confirmLIMIT(sender, [angka])
					break
					case 'slapmember':
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    kapankah = body.slice(1)
                    if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": '*Toxic*\n\n'+ ple, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/luc.jpeg')}}}}, { mimetype: Mimetype.gif })
					await confirmLIMIT(sender, [angka])
					break
					case 'artinama':
				 if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${LoLKey}&nama=${ini_nama}`)
                    reply2(get_result.result)
					await confirmLIMIT(sender, [angka])
                    break
                case 'jodoh':
				if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Biman & Juan`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'weton':
				if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
				case 'jadian2':
				if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'tebakumur':
				if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${LoLKey}&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
					case 'spamsms':
				   if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
		if (!isPremium) return reply( ind.premo())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${LoLKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${LoLKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${LoLKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${LoLKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${LoLKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${LoLKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${LoLKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${LoLKey}&nomor=${nomor}`)
					await confirmPREMLIMIT(sender, [angka])
                    reply("Success")
                    break
					case 'groupinfo':            
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                client.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    buffergbl = await getBuffer(ppUrl)
		        client.sendMessage(from, buffergbl, image, {quoted: mek, caption: `*➣ NAME* : ${groupName}\n*➣ MEMBER* : ${groupMembers.length}\n*➣ ADMIN* : ${groupAdmins.length}\n*➣ NOBADWORD* : ${sistem0}\n*➣ ANTILINK* : ${sistem1}\n*➣ ANTILINKTELE* : ${sistem9}\n*➣ ANTILINKTWIT* : ${sistem11}\n*➣ ANTIVIRTEX* : ${sistem2}\n*➣ ANTILINKFB* : ${sistem3}\n*➣ ANTILINKTT* : ${sistem4}\n*➣ ANTILINKIG* : ${sistem5}\n*➣ ANTILINKWA* : ${sistem10}\n*➣ NSFWMODE* : ${sistem6}\n*➣ WELCOME* : ${sistem7}\n*➣ SIMSIMI* : ${sistem8}\n*➣ DESK* : ${groupDesc}`})
                break
				case 'listonline':
           if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
                client.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                break
			case 'listadmin':
			 if (!isRegistered) return reply(ind.noregis())
			     	if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					teks = `*List admin dari ${groupMetadata.subject}*\n*Total: ${groupAdmins.length}*\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'level':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `\`\`\` 「 LEVEL 」 \`\`\`\n➣ \`\`\` Nama\`\`\`  : ${pushname}\n➣ \`\`\` Nomor\`\`\`  : ${sender.split("@")[0]}\n➣ \`\`\` Role\`\`\`  : ${role}\n➣ \`\`\` User XP\`\`\`  :  ${userXp}/${requiredXp}\n➣ \`\`\` User Level\`\`\`  : ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
				break
				case 'hidetag':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					client.sendMessage(from, options, text)
					break
				case 'linkgrup':
				case 'linkgc':
				if (!isRegistered) return reply(ind.noregis())
				    if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				    if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\n*link Group ${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
					break
					case 'grouplist':
					if (!isRegistered) return reply(ind.noregis())
					 if (!isGroup) return reply(ind.groupo())
                   if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group :\n\n\`\`\``
					no = 0
					for (let hehehe of groupMetadata) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupMetadata.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
					case 'notif':
					 if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`*notif apaa njir?*\nContoh : ${prefix}${command} ${pushname} sange`)
client.updatePresence(from, Presence.composing)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await client.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
} 
await client.sendMessage(from, options, text)
break
            case 'otagall':	
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					members_id = []
					teks = `◪ Group : ${groupName}\n◪ Jumlah member : ${groupMetadata.participants.length}\n\n┏━━ *「 MENTIONS 」* ━━\n`
					for (let mem of groupMembers) {
					teks += `┣◪ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					teks += `┗━━━━━━━━━━━━━━━`
					mentions(teks, members_id, true)
					break
				case 'tagall':
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins && !isOwner && !itsMe && !isAdmin) return reply(ind.admin())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `▷ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
//DOWNLOAD MENU//
case 'ghost':
	                if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (!isQuotedAudio) return reply('Reply vnnya!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
                    fs.unlinkSync(ran)
				    })
					await confirmLIMIT(sender, [angka])
		            break
		        case 'tempo-v':
                    var req = args.join(' ')     
					 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (!isQuotedAudio) return reply('Reply vnnya!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
                    })
                    await confirmLIMIT(sender, [angka])
               break
                case 'vibra':     
                    var req = args.join(' ')            
                    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (!isQuotedAudio) return reply('Reply vnnya!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
					fs.unlinkSync(ran)
					})
					await confirmLIMIT(sender, [angka])
			   break
			    case 'vibrav':
			        if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (!isQuotedAudio) return reply('Reply vnnya!')
                    var req = args.join(' ')            
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
                    })
                    await confirmLIMIT(sender, [angka])
			   break
			    case 'gemes':
				 if (!isRegistered) return reply(ind.noregis())
				     if (isBanned) return reply(ind.baned())
				   if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
				   if (!isQuotedAudio) return reply('Reply vnnya!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						riu = fs.readFileSync(ran)
					client.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					await confirmPREMLIMIT(sender, [angka])
					break
			   case 'tempo':
			   if (!isRegistered) return reply(ind.noregis())
				     if (isBanned) return reply(ind.baned())
				     if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					 if (!isQuotedAudio) return reply('Reply vnnya!')
                    var req = args.join(" ")            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					await confirmLIMIT(sender, [angka])
				break
			   case 'nightcore':			   
	                 if (!isRegistered) return reply(ind.noregis())
				     if (isBanned) return reply(ind.baned())
				     if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
					 if (!isQuotedAudio) return reply('Reply vnnya!')
					 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					   })
					   await confirmPREMLIMIT(sender, [angka])
				       break
				case 'fast':
				    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
					if (!isQuotedAudio) return reply('Reply vnnya!')
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				await confirmPREMLIMIT(sender, [angka])
				break
			   case 'trigger':
					 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (!isQuotedAudio) return reply('Reply vnnya!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek })
						fs.unlinkSync(ran)
					})
					await confirmLIMIT(sender, [angka])
			   break
				case 'slow':
				    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (!isQuotedAudio) return reply('Reply vnnya!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				await confirmLIMIT(sender, [angka])
				break
				case 'bass': 
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))         
				if (!isQuotedAudio) return reply('Reply vnnya!')	
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				await confirmLIMIT(sender, [angka])
				break
				case 'gemuk':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (!isQuotedAudio) return reply('Reply vnnya!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				await confirmLIMIT(sender, [angka])
				break
              case 'tupai':
			    if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (!isQuotedAudio) return reply('Reply vnnya!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				await confirmLIMIT(sender, [angka])
				break
				case 'toptt':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (!isQuotedAudio) return reply('Reply vnnya!')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						client.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
						})
						await confirmLIMIT(sender, [angka])
						break
				case 'tomp3':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
                   reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						bufferlkj = fs.readFileSync(ran)
						client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await confirmPREMLIMIT(sender, [angka])
					break
					
               case 'ytsearch':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
		        if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} All Night`)
                    query = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `❏ Title : ${x.title}\n`
                        ini_txt += `❏ Views : ${x.views}\n`
                        ini_txt += `❏ Published : ${x.published}\n`
                        ini_txt += `❏ Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `❏ Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply2(ini_txt)
					await confirmPREMLIMIT(sender, [angka])
                    break 
                
                case 'telesticker':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
				if (!isPremium) return reply( ind.premo())
		        if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
					reply(ind.wait())
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${LoLKey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        await client.sendMessage(from, ini_buffer, sticker)
                    }
                    await confirmPREMLIMIT(sender, [angka])
                    break
					case 'stickerwa':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply( ind.premo())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${LoLKey}&img=${x}`)
                        client.sendMessage(from, ini_buffer, sticker)
                    }
					await confirmPREMLIMIT(sender, [angka])
                    break
case 'tiktokvideo':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (!isPremium) return reply( ind.premo())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
		if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
	reply(ind.wait)
	ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${Lolkey}&url=${ini_url}`
	get_result = await fetchJson(ini_url)
	ini_buffer = await getBuffer(get_result.result.link)
	await client.sendMessage(from, ini_buffer, video, { quoted: mek })
	break
case 'tiktokmusic':
			if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
			if (!isPremium) return reply( ind.premo())
		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
	if (!q) return reply('Linknya?')
	tik.ssstik(`${args[0]}`)
	    .then(result => {
	    const { music,text } = result
	client.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
	})
    	.catch(e => console.log(e))
    	break
	    	break
                    /*if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
					reply(ind.wait())
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${LoLKey}&url=${ini_link}`)
                    await client.sendMessage(from, get_audio, audio, {  mimetype: Mimetype.mp4Audio, quoted: mek })
                    await confirmPREMLIMIT(sender, [angka])
                    break*/
                case 'spotify':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
		        if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
		    reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${LoLKey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    await confirmPREMLIMIT(sender, [angka])
                    break
                case 'spotifysearch':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
		        if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} All Night`)
                    query = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply2(ini_txt)
                    await confirmPREMLIMIT(sender, [angka])
                    break
                case 'igdl':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
		        if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
					reply(ind.wait())
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${LoLKey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    await client.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    await confirmPREMLIMIT(sender, [angka])
                    break
                case 'igdl2':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
		        if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
					reply(ind.wait())
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${LoLKey}&url=${ini_url}`)
                    ini_result = ini_url.result.media
                    for (var x of ini_result) {
                        ini_type = image
                        if (x.includes(".mp4")) ini_type = video
                        ini_buffer = await getBuffer(x)
                        await client.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    }
                    await confirmPREMLIMIT(sender, [angka])
                    break
                  case 'twtimage':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
		        if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/memefess/status/1385161473232543747`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://lolhuman.herokuapp.com/api/twitterimage?apikey=${LoLKey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
				case 'twtdl':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
		        if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    ini_url = args[0]
					reply(ind.wait())
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${LoLKey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_url = ini_url[ini_url.length - 1].link
                    ini_buffer = await getBuffer(ini_url)
                    await client.sendMessage(from, ini_buffer, video, { quoted: mek })
                    await confirmPREMLIMIT(sender, [angka])
                    break
                case 'fbdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
					reply(ind.wait())
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${LoLKey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    await client.sendMessage(from, ini_buffer, video, { quoted: mek })
                    await confirmPREMLIMIT(sender, [angka])
                    break
			//MEDIA MENU//
			 case 'hurufterbalik/':  
                   	case 'hilih/':
                    if (!isRegistered) return reply( ind.noregis())
					if (isBanned) return reply(ind.baned())
			        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
					ini_txt = args.join(" ")
                    anu = await fetchJson(`https://videfikri.com/api/${command}?query=${ini_txt}`)
                    anu1 = `${anu.result.kata}`
                    client.sendMessage(from, anu1, text, {quoted: mek})
					 await confirmLIMIT(sender, [angka])
                    break    
                    case 'jumlah':                      	  
                    if (!isRegistered) return reply( ind.noregis())
					if (isBanned) return reply(ind.baned())
			        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${body.slice(8)}`)
                    anu1 = `${anu.result.jumlah}`
                    client.sendMessage(from, anu1, text, {quoted: mek})
					 await confirmLIMIT(sender, [angka])
                    break 
                   case 'infogempax':  
                   if (!isRegistered) return reply( ind.noregis())
				   if (isBanned) return reply(ind.baned())
			       if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			       await confirmLIMIT(sender, [angka])	                    
                   anu = await fetchJson(`https://videfikri.com/api/infogempa/`)
                   anu1 = `➻ *WILAYAH* : ${anu.result.wilayah}\n`
                   anu1 += `➻ *BUJUR* : ${anu.result.bujur}\n`
                   anu1 += `➻ *LINTANG* : ${anu.result.lintang}\n`
                   anu1 += `➻ *WAKTU* : ${anu.result.waktu}\n` 
                   anu1 += `➻ *MAGNITUDO* : ${anu.result.magnitudo}\n` 
                   anu1 += `➻ *KEDALAMAN* : ${anu.result.kedalaman}\n` 
                   anu1 += `➻ *MAP* : ${anu.result.map}\n`
                   client.sendMessage(from, anu1, text,{quoted: mek})
                   break
				   case 'covidx':  
                   if (!isRegistered) return reply( ind.noregis())
				   if (isBanned) return reply(ind.baned())
			       if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                   anu = await fetchJson(`https://videfikri.com/api/rsrujukan/`)
                   anu1 = 'COVID INDONESIA :\n'
                   for (var x of anu.result.data) {
                   anu1 = `➻ *RUMAH SAKIT* : ${x.rumah_sakit}\n`
                   anu1 += `➻ *KOTA* : ${x.region}\n`
                   anu1 += `➻ *PROVINSI* : ${x.provinsi}\n`
                   anu1 += `➻ *ALAMAT* : ${x.address}\n`
                   anu1 += `➻ *PHONE* : ${x.phone}\n`
                   }
				   await confirmLIMIT(sender, [angka])	
                   reply(anu1)
                   break
				    case 'randomquranx':  
                   if (!isRegistered) return reply( ind.noregis())
				   if (isBanned) return reply(ind.baned())
			       if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			       await confirmLIMIT(sender, [angka])	
                   anu = await fetchJson(`https://videfikri.com/api/randquran/`)
                   anu1 = `➻ *NOMER* : ${anu.result.nomor}\n`
                   anu1 += `➻ *NAMA* : ${anu.result.nama}\n`
                   anu1 += `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NAME* : ${anu.result.name}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.tipe}\n`
                   anu1 += `➻ *NO URUT* : ${anu.result.no_urut}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   client.sendMessage(from, anu1, text,{quoted: mek})
                   break     
				   case 'spamcall':                      	  
                    if (!isRegistered) return reply( ind.noregis())
					if (isBanned) return reply(ind.baned())
				    if (!isPremium) return reply( ind.premo())
			        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length < 1) return reply('MASUKKAN NOMER') 
					reply('SUKSES SPAMCALL')
                    nomer = args[0]                    
                    anu = await fetchJson(`https://videfikri.com/api/call?nohp=${nomer}`) 
					await confirmPREMLIMIT(sender, [angka])
                    break 
					case 'covididx':  
                   if (!isRegistered) return reply( ind.noregis())
				   if (isBanned) return reply(ind.baned())
			       if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			       await confirmLIMIT(sender, [angka])	
                   anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
                   anu1 = `➻ *NEGARA* : ${anu.result.country}\n`
                   anu1 += `➻ *POSITIF* : ${anu.result.positif}\n`
                   anu1 += `➻ *SEMBUH* : ${anu.result.sembuh}\n`
                   anu1 += `➻ *MENINGGAL* : ${anu.result.meninggal}\n`
                   anu1 += `➻ *RAWAT* : ${anu.result.dalam_perawatan}\n`
                   reply(anu1)
                   break
			//MEDIA MENU//
			
				case 'map':	
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				 if (args.length == 0) return reply(`Example: ${prefix + command} jakarta`)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
					buffer = await getBuffer(anu.gambar)
					reply(ind.wait())
					client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
					await confirmLIMIT(sender, [angka])
					break
				case 'memerandom': 
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/meme?apikey=${LoLKey}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek})
				await confirmLIMIT(sender, [angka])
				break
				case 'darkjoke': 
				case 'darkjokes':
				case 'memeindo': 
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/${command}?apikey=${LoLKey}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek})
				await confirmLIMIT(sender, [angka])
				break
                    case 'randomnama':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${LoLKey}`)
                    reply2(anu.result)
					await confirmLIMIT(sender, [angka])
                    break
			case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (args.length == 0) return reply(`Example: ${prefix + command} beban`)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply2('Menurut Kbbi:\n\n'+anu.result)
					await confirmLIMIT(sender, [angka])
				break
				case 'cerpen':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply2(ini_txt)
                    break
			case 'playstore':
			 if (!isRegistered) return reply(ind.noregis())
			if (isBanned) return reply(ind.baned())
			if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} pubg`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
			 case 'brainly':
			 	 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
					case 'lirik':
					 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (args.length == 0) return reply(`Example: ${prefix + command} All Night`)
                    query = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${LoLKey}&query=${query}`)
                    reply2(get_result.result)
					await confirmLIMIT(sender, [angka])
                    break
					case 'chord':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
                    query = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Chord : \n${get_result.chord}`
                    reply2(ini_txt)
                    break
                case 'ceritahoror':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
					case 'indbeasiswa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'hoax':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
					// Information //
                
                case 'heroml':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    await client.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
					await confirmLIMIT(sender, [angka])
                    break
				case 'genshin':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
                    hero = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.title}\n`
                    ini_txt += `Intro : ${get_result.intro}\n`
                    ini_txt += `Icon : ${get_result.icon}\n`
                    ini_icon = await getBuffer(get_result.cover1)
                    await client.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    ini_voice = await getBuffer(get_result.cv[0].audio[0])
                    await client.sendMessage(from, ini_voice, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
					await confirmLIMIT(sender, [angka])
					break
                case 'wikipedia':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    reply2(get_result)
					await confirmLIMIT(sender, [angka])
                    break
                case 'translate':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${LoLKey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply2(init_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'jadwaltv':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'jadwaltvnow':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'newsinfo':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'cnnindonesia':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'cnnnasional':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'cnninternasional':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'infogempa':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    await client.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
					await confirmLIMIT(sender, [angka])
                    break
                case 'cuaca':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    await client.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'covidindo':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'covidglobal':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'kodepos':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${LoLKey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'jadwalbola':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
			case 'asupan':
				if (!isRegistered) return reply(ind.noregis())
				if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
				if (isBanned) return reply(ind.baned())
				reply(ind.wait())
/*po1 = client.prepareMessageFromContent(from, {
"listMessage":{
"title": "*ASUPAN NYA KAK :)*",
"description": `\nPilih salah satu asupan di bawah ini..`,
"buttonText": "CLICK HERE",
"listType": "SINGLE_SELECT",
"sections": [
  {
  "title": "Asupan",
      "rows" :[
        {
          "title": "+62",
          "rowId": ""
        },
        { 
          "title": "santuy",
          "rowId": ""
        },
        {
          "title": "bocil",
          "rowId": ""
        },
        {
          "title": "rikagusriani",
          "rowId": ""
        },
        {
          "title": "ghea",
          "rowId": ""
        }
        ]
  }
  ]
}}, {quoted : mek}) 
client.relayWAMessage(po1, {waitForAck: true})*/
asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Nih Kak Asupan nya!')
               console.log('Success sending video!')
})
              .catch(async (err) => {
               console.log(err)
               reply(`${err}`)
})
					await confirmPREMLIMIT(sender, [angka])
					break
					case 'shopee':
					if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                   }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                    case 'googlesearch':
					if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'wancak':
				if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/onecak?apikey=${LoLKey}`)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
					await confirmLIMIT(sender, [angka])
                    break
                case 'lk21':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
					await confirmLIMIT(sender, [angka])
                    break
                case 'drakorongoing':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
					// AniManga //
					case 'wait':
					 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        await client.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
					await confirmLIMIT(sender, [angka])
                    break
					case 'wait2':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				reply(ind.wait())	
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('*Reply fotonya*')
					}
					await confirmLIMIT(sender, [angka])
					break 
                case 'kusonime':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${LoLKey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
					await confirmLIMIT(sender, [angka])
                    break
                case 'kusonimesearch':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
					await confirmLIMIT(sender, [angka])
                    break
                case 'otakudesu':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${LoLKey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'otakudesusearch':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'nsfwcheck':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        var filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${LoLKey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
					await confirmLIMIT(sender, [angka])
                    break
					 // Creator
                case 'character':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
					await confirmLIMIT(sender, [angka])
                    break
                case 'manga':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
					await confirmLIMIT(sender, [angka])
                    break
                case 'anime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
					await confirmLIMIT(sender, [angka])
                    break
//ISLAM
case 'quran':
			try {
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
			 client.updatePresence(from, Presence.composing) 
			 if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					} catch {
					reply("ERROR")
					}
					await confirmLIMIT(sender, [angka]) 
					break 
case 'listsurah':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break							
					case 'alquranaudio':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`list ada di ${prefix}listsurah\nExample:${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${LoLKey}`)
                    client.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
					await confirmPREMLIMIT(sender, [angka])
                    break
                case 'asmaulhusna':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'kisahnabi':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
		case 'niatsholat':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} subuh`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/niatsholat/${query}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `search : ${get_result.name}\n`
                    ini_txt += `arab : ${get_result.ar}\n`
                    ini_txt += `latin : ${get_result.latin}\n`
                    ini_txt += `artinya ayat : ${get_result.id}\n`
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
				case 'alquran':
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${LoLKey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply2(ini_txt)
                    break
                case 'jadwalsholat':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} padang`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
//STORY
					case 'wattpad':
					 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${LoLKey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
					await confirmLIMIT(sender, [angka])
                    break
                case 'wattpadsearch':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply2(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
			//STALKING//
			case 'stalktwitter':
				  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${LoLKey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    client.sendMessage(from, ini_buffer, image, { caption: ini_txt })
					await confirmLIMIT(sender, [angka])
                    break
			case 'githubstalk':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (args.length == 0) return reply(`Example: ${prefix + command} piubit`)
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${LoLKey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					await confirmLIMIT(sender, [angka])
					break				
case 'igstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} piubitt`)
				ig.fetchUser(`${args.join(' ')}`).then(Y => {
		        console.log(`${args.join(' ')}`)
		        ten = `${Y.profile_pic_url_hd}`
		        teks = `❏ *ID* : ${Y.profile_id}\n❏ *Username* : ${args.join('')}\n❏ *Full Name* : ${Y.full_name}\n❏ *Bio* : ${Y.biography}\n❏ *Followers* : ${Y.following}\n❏ *Following* : ${Y.followers}\n❏ *Private* : ${Y.is_private}\n❏ *Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		        sendMediaURL(from,ten,teks) 
		         })      
		         break
				case 'tiktokstalk':
			 if (!isRegistered) return reply(ind.noregis())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} siegrin`)
			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${LoLKey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					await confirmLIMIT(sender, [angka])
					break				
                case 'mlstalk':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
                    ml_id = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${LoLKey}`)
                    reply2(get_result.result)
					await confirmLIMIT(sender, [angka])
                    break
				
//LINK MENU//
				case 'shortlink2':		 				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} link`)
			args = args[0]
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		if (!isRegistered) return reply(ind.noregis())
				client.updatePresence(from, Presence.composing) 
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=${LoLKey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${anu.result}`
				reply2(hasil)
				await confirmLIMIT(sender, [angka])
				break
				case 'shortlink3':		 				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} link`)
			args = args[0]
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		if (!isRegistered) return reply(ind.noregis())
				client.updatePresence(from, Presence.composing) 
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink3?url=${args[0]}&apikey=${LoLKey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${anu.result}`
				reply2(hasil)
				await confirmLIMIT(sender, [angka])
				break
				case 'shortlink4':		 				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} link`)
			args = args[0]
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		if (!isRegistered) return reply(ind.noregis())
				client.updatePresence(from, Presence.composing) 
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink4?url=${args[0]}&apikey=${LoLKey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${anu.result}`
				reply2(hasil)
				await confirmLIMIT(sender, [angka])
				break
				 case 'ssweb':   
                     if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} https://google.com*`)                  
                   reply(ind.wait())
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${body.slice(7)}`)
                   client.sendMessage(from, anu, image, {caption: `nih kack`, quoted: mek})
				    await confirmLIMIT(sender, [angka])    
                   break
                case 'ssweb3':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${LoLKey}&url=${ini_link}`)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'ssweb2':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=${LoLKey}&url=${ini_link}`)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'shortlink':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${LoLKey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
					
		//QUOTES MENU//
		case 'quotesnimex':  
                    if (!isRegistered) return reply( ind.noregis())
			        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			        await confirmLIMIT(sender, [angka])
                    anu = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`)
                    anu1 = `➻ *ANIME* : ${anu.result.anime}\n`
                    anu1 += `➻ *KARAKTER* : ${anu.result.character}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    client.sendMessage(from, anu1, text, {quoted: mek})
                    break
		 case 'quotesx':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    anu = await fetchJson(`https://videfikri.com/api/randomquotes/`)
                    anu1 = `➻ *AUTHOR* : ${anu.result.author}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    client.sendMessage(from, anu1, text, {quoted: mek})
					await confirmLIMIT(sender, [angka])
                    break
                    case 'faktax':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    anu = await fetchJson(`https://videfikri.com/api/fakta/`)
                    anu1 = `➻ *FAKTA* : ${anu.result.fakta}\n`
                    client.sendMessage(from, anu1, text, {quoted: mek})
					await confirmLIMIT(sender, [angka])
                    break                                                  
                    case 'gcardx':                      	  
                    if (!isRegistered) return reply( ind.noregis())
			        if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		            if (!isPremium) return reply( ind.premo())
                    anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
                    anu1 = `➻ *NEGARA* : ${anu.result.card.network}\n`
                    anu1 += `➻ *NOMER* : ${anu.result.card.number}\n`   
                    anu1 += `➻ *CVV* : ${anu.result.card.cvv}\n`    
                    anu1 += `➻ *PIN* : ${anu.result.card.pin}\n`     
                    anu1 += `➻ *BALANCE* : ${anu.result.card.balance}\n`      
                    anu1 += `➻ *PERMINGGU* : ${anu.result.card.expiration_month}\n`
                    anu1 += `➻ *PERHARI* : ${anu.result.card.expiration_year}\n` 
                    anu1 += `➻ *NAMA* : ${anu.result.customer.name}\n`       
                    anu1 += `➻ *RESS* : ${anu.result.customer.address}\n`           
                    anu1 += `➻ *COUNTRY* : ${anu.result.customer.country}\n`
                    client.sendMessage(from, anu1, text, {quoted: mek})
					 await confirmLIMIT(sender, [angka])
                    break
				//QUOTES MENU//
				case 'quotesanime':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		if (!isRegistered) return reply(ind.noregis())
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${LoLKey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply2(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
					await confirmLIMIT(sender, [angka])
                    break
	    case 'faktaunik':
            case 'katabijak':
	    case 'pantun':
            case 'bucin':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LoLKey}`)
                    reply2(get_result.result)
					await confirmLIMIT(sender, [angka])
                    break
			case 'katailham':  
                     if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			         await confirmLIMIT(sender, [angka])
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/katailham?apikey=LindowApi`)
                     anu1 = `➻ *KATA ILHAM* : ${anu.result}`
                     reply2(anu1)
					 await confirmLIMIT(sender, [angka])
                     break
                     case 'citacita':  
                     if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/citacita?apikey=LindowApi`)
                     client.sendMessage(from, anu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					 await confirmLIMIT(sender, [angka])
                     break
		case 'quotesdilan':
				 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${LoLKey}`)
                    reply2(quotedilan.result)
					await confirmLIMIT(sender, [angka])
                    break
		case 'quotes': 
                 if (!isRegistered) return reply(ind.noregis())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (isBanned) return reply(ind.baned())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/${command}?apikey=${LoLKey}`, {method: 'get'})
					reply2(anu.result.quote)
					await confirmLIMIT(sender, [angka])
					break
				case 'quotesimage':
		 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					reply(ind.wait())
		buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/quotesimage?apikey=${LoLKey}`)
		client.sendMessage(from, buffer, image, { quoted: mek, caption: fakereply})
		await confirmLIMIT(sender, [angka])
		break
				case 'quotesid':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=quotes%20indonesia`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply})
					await confirmLIMIT(sender, [angka])
					break
		case 'quotesen':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=quotes`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply})
					await confirmLIMIT(sender, [angka])
					break
		case 'quote':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=katakata`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply})
					await confirmLIMIT(sender, [angka])
					break
		case 'katamotivasi':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=kata%20motivasi`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply})
					await confirmLIMIT(sender, [angka])
					break
		case 'kehidupan':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=kata%20kata%20bijak%20kehidupan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply})
					await confirmLIMIT(sender, [angka])
					break
		case 'islami':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=quotes%20islami`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply})
					await confirmLIMIT(sender, [angka])
					break
				case 'quoteskehidupan':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi manusia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','Jadilah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
					const quo = quotes[Math.floor(Math.random() * quotes.length)]
					crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
					client.sendMessage(from, crot, image, { quoted: mek, caption: '*Quotes Kehidupan*\n\n'+ quo })
					await confirmLIMIT(sender, [angka])
					break
		case 'quotesislam':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					client.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
					await confirmLIMIT(sender, [angka])
					break	
		case 'quotesnasehat':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					client.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
					await confirmLIMIT(sender, [angka])
					break
					case 'quotescinta':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					const cinta =['Cinta mengajariku melihat dengan cara memejam dan mengerti tanpa perlu penjelasan.','Cinta itu sederhana, jika kamu tidak mampu membuatnya tertawa, cukup tidak membuatnya terluka.','Cinta itu saling menguatkan jika engkau ikhlas dalam kebersamaan.','Aku butuh kamu seperti jantung butuh detak','Bagi dunia, kamu mungkin satu orang, tetapi bagi satu orang kamu adalah dunia.','Cinta mungkin hadir karena takdir tapi tak ada salahnya kita saling memperjuangkan.','Cinta adalah dimana kamu selalu punya alasan untuk kembali meski kamu sudah berjalan begitu jauh.','Dalam cinta, menyerah tak selalu berarti kamu lemah. Kadang itu hanya berarti kamu cukup kuat tuk melepaskannya.','Saat aku bersamamu, aku akan melepaskan segala ketakutan dan kecemasan','Kamu mungkin memegang tanganku untuk sementara waktu, tetapi kamu memegang hatiku selamanya.','Tuhan, ajari aku mengenal cinta sebagaimana orang-orang lain mengartikannya. Karena kata orang, dia adalah sumber segala-galanya," Minke, Jejak Langkah, Pramoedya Ananta Toer.','Karena hati tidak perlu memilih, ia selalu tahu kemana harus berlabuh," Perahu Kertas, Dee Lestari.','Karena hati tidak perlu memilih, ia selalu tahu kemana harus berlabuh," Perahu Kertas, Dee Lestari.','Aku mencintaimu. Itu sebabnya aku takkan pernah selesai mendoakan keselamatanmu," Hujan Bulan Juni, Sapardi Djoko Damono.','Perempuan, kau pasti tahu sakitnya cinta yang tak terkatakan. Cinta yang hanya mampu didekap dalam bungkam, kata orang bahkan diam berbicara," Emak Ingin Naik Haji, Asma Nadia','Mungkin ada benarnya juga buku-buku itu bilang. Orang-orang yang jatuh cinta terkadang terbelenggu oleh ilusi yang diciptakan oleh hatinya sendiri," Berjuta Rasanya, Tere Liye.','Bersamamu aku tidak pernah takut lagi menjadi pemimpi," Perahu Kertas, Dee Lestari.','Aku tidak pernah keberatan menunggu siapa pun berapa lama pun selama aku mencintainya," Linguae, Seno Gumira Ajidarma.','Cara yang paling mudah untuk tahu apakah kita cocok dengan orang tersebut atau tidak adalah ketika kita merasa lupa waktu," Marmut Merah Jambu, Raditya Dika.','Melukiskanmu saat senja. Memanggil namamu ke ujung dunia. Tiada yang lebih pilu. Tiada yang menjawabku. Selain hatiku dan ombak berderu," Rectoverso, Dee Lestari.','Apakah namamu WiFi? Soalnya aku bisa merasakan konektivitas.','Sepurane aku nggak nguber awakmu maneh. Kepastianmu abstrak, podo karo raimu.','Move on itu pilihan. Gagal move on itu cobaan. Pura-pura move on itu pencitraan','Kamu nyaman? Kamu sayang? Tapi cuma dianggap temen? Kadang gitu. Nyamanmu belum tentu nyamannya. Cukup dipahami aja','Kau tahu apa yang lebih berat dari pegunungan itu? Ya, hanya bisa menatapmu dari jauh','Dibilang sayang? Iya. Dibilang cinta? Iya. Dibilang pacar? Bukan.','Aku boleh nggak minum? Aku numpahin gelas 3 kali. Aku berantakan kalo nggak ada kamu," Raditya Dika.','Dan sebenarnya, pacar orang adalah pacar kita juga, karena kita juga kan orang," Cak Lontong','Inilah untungnya pergi sama pacar. Kalau ada apa-apa begini sudah nggak usah bingung-bingung lagi. Cinta memang berguna untuk bayar ongkos juga," Netty Virgiantini.','Cinta tak pernah gagal panen. Karena bahagia dan sedih itulah hasil permanen," Moamar Emka.','You are just my cup of tea.','My love belongs to you.','If I could reach up and hold a star for every time you have made me smile, the entire evening sky would be in the palm of my hand.','I love you - those three words have my life in them.','I love you more than any word can say. I love you more than every action I take. I will be right here loving you till the end.','I love you not only for who you are, but for who I am when I am with you!I love you not only for who you are, but for who I am when I am with you!','You are my strength but loving you is my biggest weakness.','I promise that i will love you in every step of mine','I know you love me when I saw your eyes shine bright when looked at me','Jika cinta itu agama. Aku akan memelukmu seperti aku memeluk agama. Tak akan ku lepas hingga aku meregang nyawa.','Jika cintamu hanya karena Allah, nisacaya itu tak kan pernah mati.','Allah mencintaimu melebihi dari kau mencintai-Nya','Berikan tanganmu, dan mari langkahkan kaki menuju Allah.','Keindahan di balik kesendirian adalah saat kau temukan bahwa kau tak butuhkan seorang pun selain Allah SWT','Seorang lelaki sejati tidak pernah menyakiti seorang wanita. Hati-hatilah saat kau membuat seorang wanita menangis, sebab Allah menghitung tetesan air matanya','Halal adalah bukan hanya tentang apa yang kita makan, tapi juga tentang apa yang kita kenakan. Dan juga apa yang kita cintai.','Aku menginginkan seorang suami yang membacakan Quran untuk ku. Tentu ku akan semakin mengaguminya','Ketika sepasang suami istri saling menatap dengan penuh cinta, maka saat itu Allah melihatnya dan memberikan keberkahan atasnya," HR. Bukhori.','Jangan mengharapkan pasanganmu untuk sempurna. Dia yang sekarang hanyalah versi dunia untuk dirinya sendiri. Versi sempurnanya sedang disimpan untuk nanti di Jannah (Surga)-Nya Allah']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					client.sendMessage(from, cta, image, { quoted: mek, caption: '*Quotes Cinta*\n\n'+ cin })
					await confirmLIMIT(sender, [angka])
					break
		case 'quotesmotivasi':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					client.sendMessage(from, vass, image, { quoted: mek, caption: '*Motivasi*\n\n'+ vasi })
					await confirmLIMIT(sender, [angka])
					break
				case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
		 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		reply(ind.wait())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LoLKey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek})
					await confirmLIMIT(sender, [angka])
                    break
				case 'pinterest':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} avengers`)
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓*`})
					await confirmLIMIT(sender, [angka])
					break 
		case 'freefireimg':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=freefire`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
			case 'ww2':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=ww2`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		    case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
			case 'train':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=train`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		    case 'mobil':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=cars`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		    case 'motor':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=motorcycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		    case 'sepeda':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=bicycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		    case 'anjing':
            			if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		    case 'kucing':
		 		 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		    case 'doraemon':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=doraemon`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		    case 'hamster':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=aesthetic-hamsters`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		    case 'kelinci':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=aesthetic-rabbit`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
			case 'bluesky':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=aesthetic-blue-sky`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		    case 'flower':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=aesthetic-flower`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		    case 'icecream':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=aesthetic%20ice%20cream`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		    case 'pemandangan':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					client.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=aesthetic%20pemandangan%20alam`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break	
				case 'pinterest2':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await client.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'pinterestdl':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${LoLKey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break	
					 case 'pinterest3':
					 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${LoLKey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
				case 'lolicon':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))	
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=loli`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
				case 'animeboy':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))	
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=anime%20boy`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
				case 'animegirl':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=anime%20girl`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
				case 'animeimg':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=anime`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: fakereply })
					await confirmLIMIT(sender, [angka])
					break
		case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
		 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		if (!isPremium) return reply('Fitur Ini Khusus User Premium')
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LoLKey}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
		 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		if (!isPremium) return reply('Fitur Ini Khusus User Premium')
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${LoLKey}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
				case 'fox':  
				case 'cat':
				case 'dog':
				case 'panda':
				case 'red_panda':
				case 'bird':
				case 'koala':
				case 'meme':
					if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 5) return reply(ind.limitend(pushname))
                   reply(ind.wait())
                   anu = await fetchJson(`https://some-random-api.ml/img/${command}`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: fakereply, quoted: mek})
				    await confirmLIMIT(sender, [angka])
                   break
			   case 'adventure':
			   case 'traveling':
                if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkHealuser(sender) <= 15) return reply3(`\`\`\`maaf @${player.split("@")[0]} energy kamu kurang untuk melanjutkan petualangan\ntambah energy dengan cara ${prefix}usepotion\`\`\``)
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				setTimeout( () => {
                    reply(`\`\`\`START ADVENTURE\`\`\``)
                    }, 1000)
					 anu = fs.readFileSync('./src/dungeon.js');
                jsonAnu = JSON.parse(anu);
                randIndex = Math.floor(Math.random() * jsonAnu.length);
                randKey = jsonAnu[randIndex];
                hasil = await getBuffer(randKey.result)
                      addLevelingXp(sender, getexp)
					  addKoinUser(sender, getmoney)
					  addPotionUser(sender, count1)
					  addMegaPotionUser(sender, count2)
					  addDaun1User(sender, count7)
					  addDaun2User(sender, count8)
					  addPuzzleUser(sender, count13)
					setTimeout( () => {
					client.sendMessage(from, hasil, image, { quoted: mek, contextInfo: {forwardingScore : 508, isForwarded: true, mentionedJid: [player]}, caption: `
       *「 DEATH 」*
┃➣ *ADVENTURE END*
┃➣ *Locate:${ad}*
┃➣ *Traveler:@${player.split("@")[0]}*
┃➣ *Money   :Rp.${getmoney}*
┃➣ *Exp     :${getexp}Xp*
┃➣ *GATHERING ITEM*
┃➣ *💉:${count1}* ➣ *💊:${count2}* 
┃➣ *🍂:${count7}* ➣ *🌿:${count8}*
┃➣ *🧩:${count13}* 
╰━━━━━━━━━━━━━━━━━
\`\`\`Note\`\`\`
\`\`\`Item yang didapatkan bisa kamu liat ${prefix}ransel\`\`\`
`})
}, 3000)	
					await confirmLIMIT(sender, [angka])
					await confirmHEAL(sender, 20)
					break
			case 'mining':
			case 'nambang':
                if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkHealuser(sender) <= 5) return reply3(`\`\`\`maaf @${player.split("@")[0]} energy kamu kurang untuk melanjutkan petualangan\ntambah energy dengan cara ${prefix}usepotion\`\`\``)
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				setTimeout( () => {
                    reply(`\`\`\`START MINING\`\`\``)
                    }, 1000)
					 anu = fs.readFileSync('./src/dungeon.js');
                jsonAnu = JSON.parse(anu);
                randIndex = Math.floor(Math.random() * jsonAnu.length);
                randKey = jsonAnu[randIndex];
                hasil = await getBuffer(randKey.result)
					addLevelingXp(sender, getexp)
					addEmasUser(sender, count1)
					addPerakUser(sender, count2)
					addPerungguUser(sender, count3)
					addIronUser(sender, count4)
					addBrickUser(sender, count5)
					addStoneUser(sender, count6)
					addPotionUser(sender, count7)
					addMegaPotionUser(sender, count8)
					  addKayuUser(sender, count17)
					  addBibitUser(sender, count18)
					  addPuzzleUser(sender, count19)
					setTimeout( () => {
					client.sendMessage(from, hasil, image, { quoted: mek, contextInfo: {forwardingScore : 508, isForwarded: true, mentionedJid: [player]}, caption: `
┃➣  *「 MINING 」*
┃➣ *MINING END*
┃➣ *Cave:${ad}*
┃➣ *Miner:@${player.split("@")[0]}*
┃➣ *Exp:${getexp}Xp*
┃➣ *🥇:${count1}* ➣ *⚙️:${count4}*
┃➣ *🥈:${count2}* ➣ *🧱:${count5}*
┃➣ *🥉:${count3}* ➣ *🪨:${count6}* 
┃➣ *OTHER ITEM*
┃➣ *💉:${count7}* ➣ *💊:${count8}* 
┃➣ *🐚:${count9}* ➣ *🍄:${count10}*
┃➣ *🪵:${count17}* ➣ *🌱:${count18}*
┃➣ *🧩:${count19}* 
╰━━━━━━━━━━━━━━━━━
\`\`\`Note\`\`\`
\`\`\`Item yang didapatkan bisa kamu liat ${prefix}ransel\`\`\`
`})
}, 3000)
					await confirmLIMIT(sender, 5)
					await confirmHEAL(sender, 15)
					break
			case 'mancing':
			case 'fishing':
                if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkHealuser(sender) <= 10) return reply3(`\`\`\`maaf @${player.split("@")[0]} energy kamu kurang untuk melanjutkan petualangan\ntambah energy dengan cara ${prefix}usepotion\`\`\``)
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				setTimeout( () => {
                    reply(`*[ START FISHING ]*`)
                    }, 1000)
					 anu = fs.readFileSync('./src/dungeon.js');
                jsonAnu = JSON.parse(anu);
                randIndex = Math.floor(Math.random() * jsonAnu.length);
                randKey = jsonAnu[randIndex];
                hasil = await getBuffer(randKey.result)
                      addLevelingXp(sender, getexp)
					  addCumicumiUser(sender, count1)
					  addUdangUser(sender, count2)
					  addKepitingUser(sender, count3)
					  addPufferfishUser(sender, count4)
					  addIkanUser(sender, count5)
					  addIkan2User(sender, count6)
					  addPotionUser(sender, count7)
					  addMegaPotionUser(sender, count8)
					  addKerangajaibUser(sender, count9)
					  addJamurUser(sender, count10)
					  addPuzzleUser(sender, count19)
					setTimeout( () => {
					client.sendMessage(from, hasil, image, { quoted: mek, contextInfo: {forwardingScore : 508, isForwarded: true, mentionedJid: [player]}, caption: `
┃       *「 FIHSING 」*
┃➣ *FISHING END*
┃➣ *Sea:${ad}*
┃➣ *Fisherman:@${player.split("@")[0]}*
┃➣ *Exp:${getexp}Xp*
┃➣ *🦑:${count1}* ➣ *🐡:${count4}*
┃➣ *🦐:${count2}* ➣ *🐠:${count5}*
┃➣ *🦀:${count3}* ➣ *🐟:${count6}* 
┃➣ *OTHER ITEM*
┃➣ *💉:${count7}* ➣ *💊:${count8}* 
┃➣ *🐚:${count9}* ➣ *🍄:${count10}*
┃➣ *🧩:${count19}* 
╰━━━━━━━━━━━━━━━━━
\`\`\`Note\`\`\`
\`\`\`Item yang didapatkan bisa kamu liat ${prefix}akuarium\`\`\`
`})
}, 3000)
					await confirmLIMIT(sender, 5)
					await confirmHEAL(sender, 15)
					break
			case 'mulung':
			case 'ngemis':
                if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkHealuser(sender) <= 10) return reply3(`\`\`\`maaf @${player.split("@")[0]} energy kamu kurang untuk melanjutkan petualangan\ntambah energy dengan cara ${prefix}usepotion\`\`\``)
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				setTimeout( () => {
                    reply(`*[ START MULUNG ]*`)
                    }, 1000)
					 anu = fs.readFileSync('./src/dungeon.js');
                jsonAnu = JSON.parse(anu);
                randIndex = Math.floor(Math.random() * jsonAnu.length);
                randKey = jsonAnu[randIndex];
                hasil = await getBuffer(randKey.result)
					  addPotionUser(sender, count7)
					  addMegaPotionUser(sender, count8)
					  addKerangajaibUser(sender, count9)
					  addJamurUser(sender, count10)
					  addDaunmapleUser(sender, count110)
					  addDaunUser(sender, count12)
					  addDaun1User(sender, count13)
					  addDaun2User(sender, count14)
					  addClover3User(sender, count15)
					  addClover4User(sender, count16)
					  addKayuUser(sender, count17)
					  addBibitUser(sender, count18)
					  addPuzzleUser(sender, count19)
					setTimeout( () => {
					client.sendMessage(from, hasil, image, { quoted: mek, contextInfo: {forwardingScore : 508, isForwarded: true, mentionedJid: [player]}, caption: `
┃       *「 MULUNG 」*
┃➣ *MULUNG END*
┃➣ *Locate:${ad}*
┃➣ *Pemulung:@${player.split("@")[0]}*
┃➣ *MULUNG ITEM*
┃➣ *💉:${count7}* ➣ *💊:${count8}* 
┃➣ *🐚:${count9}* ➣ *🍄:${count10}*
┃➣ *🍁:${count110}* ➣ *🍃:${count12}*
┃➣ *🍂:${count13}* ➣ *🌿:${count14}*
┃➣ *☘️:${count15}* ➣ *🍀:${count16}*
┃➣ *🪵:${count17}* ➣ *🌱:${count18}*
┃➣ *🧩:${count19}* 
╰━━━━━━━━━━━━━━━━━
\`\`\`Note\`\`\`
\`\`\`Item yang didapatkan bisa kamu liat ${prefix}ransel\`\`\`
`})
}, 3000)
					await confirmLIMIT(sender, 2)
					await confirmHEAL(sender, 10)
					break
					//MAKER MENU
//NON APIKEY
			case 'ocr': 
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('* kirim foto dengan caption ${prefix}ocr𝗼*𝗰𝗿')
					}
					await confirmLIMIT(sender, 5)
				break        
			case 'say'://Case By Luc
                teks = body.slice(5)
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                                        if (args.length < 1) return reply('teksnya mana kak?')
                                        saying = teks
                                        client.sendMessage(from, saying, text)
					await confirmLIMIT(sender, [angka])
                    break
					case 'patrick?':
					case 'spongebob?':
					case 'squidword?':
					case 'meme?':
					 case 'dadu?':
					 case 'amongus?':
					 case 'gawrgura?':
					 case 'anjing?':
					 case 'bucinstick?':
                    if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			        await confirmLIMIT(sender, [angka])
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/${command}apikey=${LoLKey}`)
                    client.sendMessage(from, anu, sticker, {quoted:mek})
					 await confirmLIMIT(sender, [angka])    
                    break
case 'patrick':           
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		await confirmLIMIT(sender, [angka])
		fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            sendMediaURL(from,media,ind.success)
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
//------------------< Sticker / Tools >-------------------
            case 'exif':{
		if (!isOwner && !itsMe) return reply(ind.ownerb())
		const namaPack = q.split('|')[0] ? q.split('|')[0] : q
		const authorPack = q.split('|')[1] ? q.split('|')[1] : ''
		exif.create(namaPack, authorPack)
		await reply('Sukses √')
            }
	break
case 'stickergif':
case 'sgif':
case 'stiker': 
case 'sticker':
case 's':
			if (!isRegistered) return reply(ind.noregis())
			if (isBanned) return reply(ind.baned())
			if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    reply(ind.wait())
                    await ffmpeg(`${media}`)
		.input(media)
		.on('start', function (cmd) {
		console.log(`Started : ${cmd}`)
		})
		.on('error', function (err) {
		console.log(`Error : ${err}`)
		fs.unlinkSync(media)
		reply(ind.stikga())
		})
		.on('end', function () {
		console.log('Finish')
		exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                if (error) return reply(ind.stikga())
		client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
                fs.unlinkSync(media)	
		fs.unlinkSync(`./sticker/${sender}.webp`)	
		})
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(`./sticker/${sender}.webp`)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		reply(ind.wait())
                        await ffmpeg(`${media}`)
			.inputFormat(media.split('.')[4])
			.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
			})
			.on('error', function (err) {
			console.log(`Error : ${err}`)
			fs.unlinkSync(media)
			let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
			reply(ind.stikga())
			})
			.on('end', function () {
			console.log('Finish')
			exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
			if (error) return reply(ind.stikga())
			client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
                        fs.unlinkSync(media)
			fs.unlinkSync(`./sticker/${sender}.webp`)
			})
			})
			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			.toFormat('webp')
			.save(`./sticker/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
                  await confirmLIMIT(sender, [angka])
				break
				case 'tts':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan setan!!')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await confirmLIMIT(sender, [angka])
		   break
				case 'toimg':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (!isQuotedSticker) return reply('reply/tag sticker!')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: fakereply })
						fs.unlinkSync(ran)
					})
					await confirmLIMIT(sender, [angka])
				break
		case 'quotemaker2':
		case 'makequote':
                if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}${command} jangan persulit hidup|luca`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: fakereply, quoted: mek})
					await confirmLIMIT(sender, [angka])
					break	
					case 'quotemaker3':
				 if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} luc|Bot`)
			reply(ind.wait())
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ")
                        request({
                            url: `https://api.lolhuman.xyz/api/${command}?apikey=${LoLKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "text": ini_txt
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            client.sendMessage(from, ini_buff, image, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
					await confirmLIMIT(sender, [angka])
                    break
		case 'snobg':	
                case 'stickernobg':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if ((isMedia && !client.videoMessage || isQuotedImage)) {
                    reply(ind.wait())
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
                        var media = await client.downloadAndSaveMediaMessage(encmedia)
                        anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
                        getUrl = `${anu.display_url}`
                            buff = await getBuffer(`https://api.zeks.xyz/api/removebg?apikey=apivinz&url=${getUrl}`)
                            client.sendMessage(from, buff, image, {quoted: mek})
                            }
			await confirmLIMIT(sender, [angka])
                    break
case 'swm':
case 'stickerwm':
		if (!isPremium) return reply( ind.premo())  
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
		pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await client.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            reply(ind.wait())
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await client.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
case 'take':
case 'takestick':
                if (!isPremium) return reply( ind.premo())  
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption ${prefix}takestick nama|author`)
		    var pembawm = body.slice(6)
		    reply(ind.wait())
		    var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    var media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		    var packname = pembawm.split('|')[0]
		    var author = pembawm.split('|')[1]
		    exif.create(packname, author, `takestick_${sender}`)
		    exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('eror...')
		    client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
		    fs.unlinkSync(media)
		    fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
		    })
		    break
case 'ktpmaker':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LUC BOT|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                         reply(ind.wait())
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${LoLKey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
				await confirmLIMIT(sender, [angka])
                    break

/*case 'ttp':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                woy = args.join(" ")
                reply(ind.wait())
                anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
                sendStickerFromUrl(from, anjay)
                break*/
case 'attp':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                //woy = args.join(" ")
                reply(ind.wait())
                //bebeb = `http://zekais-api.herokuapp.com/attg?text=${woy}`
                //sendStickerFromUrl(from, bebeb)
                attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
		client.sendMessage(from, attp2, sticker, {quoted: mek})
                break
                
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':  
		case 'attp2':
			if (!isRegistered) return reply(ind.noregis())
			if (isBanned) return reply(ind.baned())
			if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    ini_txt = args.join(" ")
                    reply(ind.wait())
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LoLKey}&text=${ini_txt}`)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
					await confirmLIMIT(sender, [angka])
                    break
	case 'nulis':
			if (!isRegistered) return reply(ind.noregis())
			if (isBanned) return reply(ind.baned())
			if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
    			if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    ini_txt = args.join(" ")
                    reply(ind.wait())
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LoLKey}&text=${ini_txt}`)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
					await confirmLIMIT(sender, [angka])
                    break
				case 'amongus':
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Akira`)
					reply(ind.wait())
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${LoLKey}&text=${body.slice(9)}`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek})
					await confirmLIMIT(sender, [angka])
                    break
				case 'qrcode':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, '_INPUT URL/TEKS UNTUK DI JADIKAN QR_', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek})
					await confirmLIMIT(sender, [angka])
					break
					case 'tovideo':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if ((isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						reply(ind.wait())
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".mp4")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${LoLKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            }
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            get_result = JSON.parse(body)
                            getBuffer(get_result.result).then(result => {
                                client.sendMessage(from, result, video, { mimetype: Mimetype.mp4 })
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Reply stickernya kawan`)
                    }
					await confirmPREMLIMIT(sender, [angka])
                    break
case 'semoji':
			if (!isRegistered) return reply(ind.noregis())
			if (isBanned) return reply(ind.baned())
			if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			if (!q) return reply('emojinya?')
		qes = args.join(' ')
		reply(ind.wait())
		emoji.get(`${qes}`).then(emoji => {
		teks = `${emoji.images[4].url}`
		sendStickerFromUrl(from,`${teks}`)	
		console.log(teks)
		})    
               break
			   case 'smoji2':
			    if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji2/${emoji}?apikey=${LoLKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LoLKey}&img=` + ini_buffer.result.emoji.whatsapp)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
					await confirmLIMIT(sender, [angka])
               break		
                case 'smoji3':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LoLKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LoLKey}&img=` + ini_buffer.result.emoji.whatsapp)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
					await confirmLIMIT(sender, [angka])
               break					
case 'qrreader':
 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=${LoLKey}`, {...options })
                        fs.unlinkSync(filePath)
                        reply2("Result: " + get_result.result)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
					await confirmLIMIT(sender, [angka])
                    break				
						 case 'togif':
                    if ((isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo :mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".mp4")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${LoLKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            }
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            get_result = JSON.parse(body)
                            getBuffer(get_result.result).then(result => {
                                client.sendMessage(from, result, video, { mimetype: Mimetype.gif })
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Reply stickernya kawan`)
                    }
                    break	 
//SERTIFIKAT MAKER MENU//
				case 'fuckboy':
				case 'fuckgirl':
				case 'bucinserti':
				case 'pacarserti':
				case 'goodboy':
				case 'goodgirl':
				case 'badboy':
				case 'badgirl':
				case 'toloserti':
				 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
				if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
				query = args.join(" ")
				reply(ind.wait())
				cap = `Nama: ${query}`
				riu = await getBuffer(`http://lolhuman.herokuapp.com/api/${command}?apikey=${LoLKey}&name=${query}`)
				client.sendMessage(from, riu, image, {quoted: mek, contextInfo: { forwardingScore: 1, isForwarded: true}, caption: fakereply})
				await confirmPREMLIMIT(sender, [angka])
				break
//PREMIUM MAKER MENU//
				case '1977':
                case 'aden':
                case 'brannan':
                case 'brooklyn':
                case 'clarendon':
                case 'gingham':
                case 'hudson':
                case 'inkwell':
                case 'earlybird':
                case 'kelvin':
                case 'lark':
                case 'lofi':
                case 'maven':
                case 'mayfair':
                case 'moon':
                case 'nashville':
                case 'perpetua':
                case 'reyes':
                case 'rise':
                case 'slumber':
                case 'stinson':
                case 'toaster':
                case 'valencia':
                case 'walden':
                case 'willow':
				case 'xpro2':
                if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.jpg')
                        request({
                            url: `https://api.lolhuman.xyz/api/filter/${command}?apikey=${LoLKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            client.sendMessage(from, ini_buff, image, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}${command} atau tag gambar yang sudah dikirim`)
                    }
					await confirmPREMLIMIT(sender, [angka])
                    break
//PREMIUM MAKER MENU//
case 'changemymind':
case 'kannagen':
case 'ohno':
				 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    ini_txt = args.join(" ")
					reply(ind.wait())
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/${command}?apikey=${LoLKey}&text=${ini_txt}`)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: fakereply })
					await confirmPREMLIMIT(sender, [angka])
                    break
			case 'tweettrump':
			case 'hartacustom':
			case 'quotemaker':
				 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    ini_txt = args.join(" ")
					reply(ind.wait())
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LoLKey}&text=${ini_txt}`)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: fakereply })
					await confirmPREMLIMIT(sender, [angka])
                    break
case 'hartatahta':  
                   if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
				   if (!q) return reply(ind.wrongf())
				   sendMediaURL(from, `http://zekais-api.herokuapp.com/sbburn?text=${q}`, mess.success)

                   break
				case 'carbon':
				 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
				    if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    ini_txt = args.join(" ")
					reply(ind.wait())
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LoLKey}&code=${ini_txt}`)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: fakereply })
					await confirmPREMLIMIT(sender, [angka])
                    break
				case 'gsuggest':
			    if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} LUC|BOT|WA`)
				text1 = args[0]
                text2 = args[1]
				text3 = args[2]
				reply(ind.wait()) 
				buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/gsuggest?apikey=${LoLKey}&text1=${text1}&text2=${text2}&text3=${text3}`) 
				client.sendMessage(from, buffer, image, {caption: fakereply, quoted: mek})
				await confirmPREMLIMIT(sender, [angka])
				break
			case 'gtapassed':
			    if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} LUC|BOT|WA`)
				text1 = args[0]
                text2 = args[1]
				reply(ind.wait()) 
				buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/gtapassed?apikey=${LoLKey}&text1=${text1}&text2=${text2}`) 
				client.sendMessage(from, buffer, image, {caption: fakereply, quoted: mek})
				await confirmPREMLIMIT(sender, [angka])
				break
// Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
				case 'avatardota':
				case 'lolbanner':
				case 'avatarlolnew':
				case 'fpslogo':
				case 'logogaming':
				case 'aovwall':
				case 'pubgmaskot':
				case 'mlwall':
				case 'anonymhacker':
				case 'cartoongravity':
				case 'galaxywallpaper':
				 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    ini_txt = args.join(" ")
		    reply(ind.wait())
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LoLKey}&text=${ini_txt}`).then((gambar) => {
                        client.sendMessage(from, gambar, image, { quoted: mek })
                    })
		    await confirmPREMLIMIT(sender, [angka])
                    break
			case 'codwarzone':
			case 'realvintage':
			case 'cutegravity':
			case 'juventusshirt':
			    if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} LUC|BOT`)
				text1 = args[0]
                text2 = args[1]
				reply(ind.wait()) 
				buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ephoto2/${command}?apikey=${LoLKey}&text1=${text1}&text2=${text2}`) 
				client.sendMessage(from, buffer, image, {caption: fakereply, quoted: mek})
				await confirmPREMLIMIT(sender, [angka])
				break
			case 'valorant':
			    if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
				if (args.length < 1) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} LUC|BOT|WA`)
				text1 = args[0]
                text2 = args[1]
				text3 = args[2]
				reply(ind.wait()) 
				buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ephoto3/valorantbanner?apikey=${LoLKey}&text1=${text1}&text2=${text2}&text3=${text3}`) 
				client.sendMessage(from, buffer, image, {caption: fakereply, quoted: mek})
				await confirmPREMLIMIT(sender, [angka])
				break
			
			// Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
				  if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    ini_txt = args.join(" ")
					reply(ind.wait())
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${LoLKey}&text=${ini_txt}`).then((gambar) => {
                        client.sendMessage(from, gambar, image, { quoted: mek })
                    })
					await confirmPREMLIMIT(sender, [angka])
                    break
			    case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
				  if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    txt1 = args[0]
                    txt2 = args[1]
					reply(ind.wait()) 
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${LoLKey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        client.sendMessage(from, gambar, image, { quoted: mek })
                    })
					await confirmPREMLIMIT(sender, [angka])
                    break
				
                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
				  if (!isRegistered) return reply(ind.noregis())
				     if (isBanned) return reply(ind.baned())
				     if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    ini_txt = args.join(" ")
					reply(ind.wait())
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${LoLKey}&text=${ini_txt}`).then((gambar) => {
                        client.sendMessage(from, gambar, image, { quoted: mek })
                    })
					await confirmPREMLIMIT(sender, [angka])
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
				   if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`*gak ngerti yah?*\nContoh : ${prefix}${command} ${pushname}`)
                    txt1 = args[0]
                    txt2 = args[1]
					reply(ind.wait())
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${LoLKey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        client.sendMessage(from, gambar, image, { quoted: mek })
                    })
					await confirmPREMLIMIT(sender, [angka])
                    break    
				case 'triggered?':
			case 'wasted?':
			case 'red?':
			case 'green?':
			case 'blue?':
			case 'glass?':
			case 'gay?':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(ind.wait())
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/${command}avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply("ERROR")
					exec(`webpmux -set exif ${addMetadata(namo, ator)} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply("ERROR")
					client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await confirmLIMIT(sender, [angka]) 
					break 
				case 'pencil':
				case 'wasted':
				case 'triggered':
				case 'alien':
				case 'fisheye':
				case 'skullmask':
				case 'cartoon':
				case 'tosmile':
				case 'imagecolor':
				case 'deepfry':
				case 'pixelate':
				case 'rotate':
				case 'roundimage':
				case 'grayscale':
				case 'flip':
				case 'invert':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.jpg')
						 reply(ind.wait())
                        request({
                            url: `https://api.lolhuman.xyz/api/editor/${command}?apikey=${LoLKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            await client.sendMessage(from, ini_buff, image, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}${command} atau tag gambar yang sudah dikirim`)
                    }
					await confirmPREMLIMIT(sender, [angka])
                    break
				case 'affect':
				case 'beautiful':
				case 'sepia':
				case 'rip':
				case 'rainbow':
				case 'jail':
				case 'hitler':
				case 'facepalm':
				case 'trash':
				case 'wanted':
				case 'jokeOverHead':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.jpg')
						 reply(ind.wait())
                        request({
                            url: `https://api.lolhuman.xyz/api/creator1/${command}?apikey=${LoLKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            await client.sendMessage(from, ini_buff, image, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
					await confirmPREMLIMIT(sender, [angka])
                    break	
				case 'spank':
				case 'kiss':
				case 'slap':
				case 'bed':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.jpg')
						 reply(ind.wait())
                        request({
                            url: `https://api.lolhuman.xyz/api/creator2/${command}?apikey=${LoLKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            await client.sendMessage(from, ini_buff, image, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}${command} atau tag gambar yang sudah dikirim`)
                    }
					await confirmPREMLIMIT(sender, [angka])
                    break	
	case 'removebg':
	case 'upscale':
	case 'deteksiumur':
	case 'deteksiwajah':
	if (!isRegistered) return reply(ind.noregis())
    if (isBanned) return reply(ind.baned())
    if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/${command}?apikey=${LoLKey}&img=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: fakereply})
	} else {
	  reply('*REPLY GAMBARNYA*')
	}
	await confirmPREMLIMIT(sender, [angka])
	break
//MINIGAME

				//MINIGAME
                case 'sambungkata':
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    if (args.length == 0) return reply(`Example: ${prefix + command} tahu`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${LoLKey}&text=${ini_txt}`)
                    get_result = get_result.result
                    await client.sendMessage(from, get_result, text, { quoted: mek }).then(() => {
                        sambungkata[sender.split('@')[0]] = get_result.toLowerCase()
                        fs.writeFileSync("./database/minigame/sambungkata.json", JSON.stringify(sambungkata))
                    })
					await confirmLIMIT(sender, [angka])
                    break
                case 'cancelsambungkata':
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (!sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete sambungkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/minigame/sambungkata.json", JSON.stringify(sambungkata))
                    reply("Success mengcancel sambung kata sebelumnya")
					await confirmLIMIT(sender, [angka])
                    break
                case 'akinator': // Premium / VIP apikey only
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${LoLKey}`)
                    var { server, frontaddr, session, signature, question, step } = get_result.result
                    const data = {}
                    data["server"] = server
                    data["frontaddr"] = frontaddr
                    data["session"] = session
                    data["signature"] = signature
                    data["question"] = question
                    data["step"] = step
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    await client.sendMessage(from, ini_txt, text, { quoted: mek }).then(() => {
                        akinator[sender.split('@')[0]] = data
                        fs.writeFileSync("./database/minigame/akinator.json", JSON.stringify(akinator))
                    })
					await confirmLIMIT(sender, [angka])
                    break
                case 'cancelakinator':
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
                    delete akinator[sender.split('@')[0]]
                    fs.writeFileSync("./database/minigame/akinator.json", JSON.stringify(akinator))
                    reply("Success mengcancel akinator sebelumnya")
					await confirmLIMIT(sender, [angka])
                    break
              case 'tebakgambar': // case by luc
			        if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab gk? Jawab lahhh, masa enggak. 60 detik cukup kan? gk cukup pulang aja" }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/minigame/tebakgambar.json", JSON.stringify(tebakgambar))
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/minigame/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
					await confirmLIMIT(sender, [angka])
                    break
                case 'canceltebakgambar':
				 if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/minigame/tebakgambar.json", JSON.stringify(tebakgambar))
                    reply("Success mengcancel tebak gambar sebelumnya")
					await confirmLIMIT(sender, [angka])
                    break
				case 'family100':
					if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (family100.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${LoLKey}`, {method: 'get'})
					jawab = `*Jawabannya*\n\n>${anu.result.aswer}`
					family = `*Pertanyaan*\n\n*_${anu.result.question}_*`
					setTimeout( () => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/minigame/family100.json", JSON.stringify(tebakgambar))
                    })
                    await sleep(60000)
                    if (family100.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete family100[sender.split('@')[0]]
                        fs.writeFileSync("./database/minigame/family100.json", JSON.stringify(family100))
                    }
					break
					case 'caklontong73':
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					if (!isRegistered) return reply(ind.noregis())
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${LoLKey}`, {method: 'get'})
					jawab2 = `*Jawabannya*\n\n>${anu.result.answer}`
					caklontong = `*Pertanyaan*\n\n•*_${anu.result.question}_*`
					setTimeout( () => {
					reply(jawab2)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(caklontong) // ur cods
					}, 0) // 1000 = 1s,
					break 	
		case 'dadu':
			if (!isRegistered) return reply(ind.noregis())
			if (!isGroup) return reply(ind.groupo())
		    if (isBanned) return reply(ind.baned())
		    if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(ind.wait())
			buffer = fs.readFileSync(rano)
			client.sendMessage(from, buffer, sticker)
			fs.unlinkSync(rano)
			})
			await confirmLIMIT(sender, [angka])
			break
			case 'tebakbendera':
			if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${LoLKey}`, {method: 'get'})
					anu.result = anu.result.result
					jawab3 = `*Jawabannya*\n\n>${anu.result.name}`
					tebakbender = `*bendera apa ini?*\n\n>[${anu.result.flag}]`
					setTimeout( () => {
					reply(jawab3)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(tebakbender) // ur cods
					}, 0) // 1000 = 1s,
					break 
                             
					case 'tebakgokil':
               if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${LoLKey}`, {method: 'get'})
					jenak = `*${anu.result.question}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, jenak, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await confirmLIMIT(sender, [angka]) 
					break 
		case 'tebakgokil2':
                if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${LoLKey}`, {method: 'get'})
					siapariu = `*${anu.result.question}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, siapariu, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await confirmLIMIT(sender, [angka]) 
					break 
		case 'caklontong2':
                if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=${LoLKey}`, {method: 'get'})
					lontong = `*${anu.result.question}*`
					jawab = `
*➸ Jawaban :* ${anu.result.answer}
*➸ Info :* ${anu.result.information}`
					setTimeout( () => {
					client.sendMessage(from, jawab, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, lontong, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await confirmLIMIT(sender, [angka]) 
					break 
		case 'tebakkimia':
               if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${LoLKey}`, {method: 'get'})
					kimia = `*${anu.result.nama}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.lambang, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, kimia, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await confirmLIMIT(sender, [angka]) 
					break 
					
		case 'tebaklirik':
               if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${LoLKey}`, {method: 'get'})
					lirik = `*${anu.result.question}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, lirik, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await confirmLIMIT(sender, [angka]) 
					break 
		case 'xox':
		if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		const exoxo = [
		'X : X : O',
		'O : X : O',
		'X : O : O',
		'O : X : X',
		'O : X : O',
		'X : O : O',
	    'X : X : O',
		'X : X : X',
		'O : O : O',
		]
            const boxo = exo[Math.floor(Math.random() * exo.length)]
	riucuy = `[  🎰 | X O X ]\n-------------------------\n\n ${boxo}\n\n-------------------------\nKeterangan : Jika anda Mendapatkan Huruf X 3 Huruf Berarti Anda Menang\n*Contoh : X : X : X*`
            reply(riucuy)
	            break
		case 'suit2':
		query = args.join(" ")
		const botol = ['Batu','Gunting','Kertas']
            const suitcuy = botol[Math.floor(Math.random() * botol.length)]
	brow = `
*BOT*
> ${suitcuy}
*KAMU*
> ${query}
`
            reply(brow)
			await confirmLIMIT(sender, [angka])
	            break
				case 'slot2':
				if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            client.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍌 : 🍌 : 🍌<=====`, text, { quoted: mek })
			await confirmLIMIT(sender, [angka])
            break
			case 'slot2':
		      if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    result = await fetchJson(`https://api.xteam.xyz/game/virtualslot?APIKEY=${XteamKey}`)
                        txt = `*🎰Slot didapatkan🎰* \n\n${result.map}\n`
                        txt += `\n🔖Hasil : ${result.hasil}\n`
                        txt += `🕹️Score : ${result.score}\n`
                        reply(txt)
						await confirmLIMIT(sender, [angka])
                        break
				case 'suit':
		if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (isBanned) return reply(ind.baned())
					if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
		        query = args.join(" ")
                    get_result = await fetchJson(`https://api.xteam.xyz/game/suit?q=${query}&APIKEY=${XteamKey}`)
                    bre = `
*[ BOT ]*
_> ${get_result.jawabanbot}_
*[ USER ]*
> ${get_result.jawabanmu}
*[ POIN ]*
_> ${get_result.poin}_
*[ HASIL ]*
_> ${get_result.hasil}_`
                    reply(bre, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await confirmLIMIT(sender, [angka])
                    break
			   case 'truth':
                if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await confirmLIMIT(sender, [angka])
					break
				case 'dare':
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await confirmLIMIT(sender, [angka])
					break
//BOKEP KAKAK
                case 'pixiv':
				if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply( ind.premo())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=${LoLKey}&query=${query}`)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pixivdl':
				if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply( ind.premo())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${LoLKey}`)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'xhamstersearch':
				if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply( ind.premo())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
				if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply( ind.premo())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${LoLKey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'xnxxsearch':
				if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply( ind.premo())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
				if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply( ind.premo())
		if (isBanned) return reply(ind.baned())
		if ( checkpremLimituser(sender) <= 0) return reply(ind.premlimitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${LoLKey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break

                    
                    // Searching  
                case 'wallpaper':
				case 'wallpaper2':
				case 'gimage':
				case 'gimage2':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
					reply(ind.wait())
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${LoLKey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
					await confirmLIMIT(sender, [angka])
                    break
              case 'konachan':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=${apikey}&query=${query}`)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
					await confirmLIMIT(sender, [angka])
                    break



                   
					//AESTETIK//
		
			 
					 case 'nhentai':
					 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'nhentaipdf':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await client.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
					await confirmLIMIT(sender, [angka])
                    break
                case 'nhentaisearch':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
                case 'nekopoi':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${LoLKey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
					await confirmLIMIT(sender, [angka])
                    break
                case 'nekopoisearch':
				 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
					await confirmLIMIT(sender, [angka])
                    break
			 case 'hentai2':
                 if (!isRegistered) return reply(ind.noregis())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend(pushname))		
				if (!isOwner && !itsMe) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
					gatauda = body.slice(9)
					reply(ind.wait())
					anu = await fetchJson('https://akaneko-api.herokuapp.com/api/hentai')
					hasil = await getBuffer(anu.url)
					client.sendMessage(from, hasil, image, {quoted: mek})
					await confirmLIMIT(sender, [angka])
					break
                case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply('Fitur Ini Khusus User Premium')
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${LoLKey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buffer = fs.readFileSync(rano)
                        client.sendMessage(from, buffer, sticker, { quoted: mek})
                        fs.unlinkSync(rano)
                    })
                    break

				default:
if (budy.startsWith('X')){
try {
if (!isOwner && !itsMe) return reply(ind.ownerb())
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
if (!isOwner && !itsMe) return reply(ind.ownerb())
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
} 
                 if (budy.includes(`Hai bot`)) {
                    const bot = fs.readFileSync('./mp3/bot/lucbot.mp3');
					client.sendMessage(from, bot, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
					}
				/*if (budy.includes(`@62895414533737`)){
				const F1 = fs.readFileSync('vianjg/tagvian.webp')
				client.sendMessage(from, F1, sticker, {quoted: mek})
				    }*/
					if (budy.includes(`://chat.whatsapp.com/`)) {
					if (isGroup && !itsMe && !isOwner) return
					 reply(`*${pushname} silahkan hubungin owner dengan cara ketik ${prefix}owner `)
					}
				/*if (!isGroup && !itsMe && !isCmd && !isSimi) {
                        await client.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${LoLKey}&text=${budy}`)
                        reply(simi.result)
                    }
                    if (isGroup && !itsMe && !isCmd && isSimi) {
                        await client.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${LoLKey}&text=${budy}`)
                        reply(simi.result)
                    }*/
                    
		}
			} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

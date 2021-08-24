exports.wait = () => {
	return` ⌛  \`\`\`-「 WAIT SAYANGKU... 」-\`\`\``
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`-「 ENABLE 」- LEVELING`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`LEVELMU MASIH KOSONG`
}

exports.lvlnoon = () => {
	return`LEVEL DI GROUP BELUM DI AKTIFKAN`
}

exports.noregis = () => {
	return`\`\`\`-「 BELUM DAFTAR 」-\`\`\`\n\n\`\`\`${pushname} silahkan ketik ${prefix}daftar\`\`\`
`
}

exports.rediregis = () => {
	return`${pushname} kamu sudah terdaftar di database bot`
}

exports.stikga = () => {
    return`Yah gagal, coba ulangi beberapa saat lagi`
}
exports.linkga = () => {
	return`\`\`\`maaf link tidak valid\`\`\``
}

exports.groupo = () => {
	return`\`\`\`-「 GROUP ONLY 」-\`\`\``
}

exports.ownerb = () => {
	return`\`\`\`-「 OWNER BOT ONLY 」-\`\`\``
}

exports.premo = () => {
	return`\`\`\`-「 PREMIUM MEMBER ONLY 」-\`\`\``
}

exports.ownerg = () => {
	return`\`\`\`-「 OWNER GROUP ONLY 」-\`\`\``
}

exports.adminb = () => {
	return`-「 ADMIN BOT ONLY 」-`
}

exports.admin = () => {
	return`-「 ADMIN GROUP ONLY 」-`
}

exports.badmin = () => {
	return`-「 BOT HARUS JADI ADMIN 」-`
}

exports.nimu = () => {
	return`-「 MODE ANIME BELOM AKTIF 」-`
}

exports.bug = () => {
	return`Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi`
}

exports.wrongf = () => {
	return`format salah/text kosong`
}

exports.baned = () => {
	return`「❗」Lu Kebanned Goblok!`
}

exports.clears = () => {
	return`-[ CLEAR ALL SUCCES ]-`
}

exports.pc = () => {
	return`-「 REGISTRASI 」-\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n\`\`\`jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot\`\`\`
	`
}

exports.registered = (pushname, serialUser, time, sender) => {
	return`Pendaftaran Berhasil

╭─「 Info Register 」
│•Nama : ${pushname}
│•Nomor\: wa.me/${sender.split("@")[0]}
│•Waktu Pendaftaran :  
│${time}
│•No.SN :
│ ${serialUser}
╰────────────────
Silahkan ketik #menu
`
}

exports.levelup = (pushname, sender, getLevelingXp, getLevel, getLevelingLevel, role, bars) => {
	return`Selamat anda naik level

╭─「 Level Up 」
│•Nama : ${pushname}
│•Nomer : ${sender.split("@")[0]}
│•Xp : ${getLevelingXp(sender)}
│•bares : ${bars}
│•Role : ${role}
│•Limit : +10
│•Limit : +5
│•Level : ${getLevel} > ${getLevelingLevel(sender)}
╰──────────────────
`
}

exports.limitend = (pushname) => {
	return`\`\`\`maaf ${pushname} limit hari ini habis*\nbeli limit dengan cara ${prefix}buylimit/ naik level\`\`\`
`
}

exports.premlimitend = (pushname) => {
	return`\`\`\`maaf ${pushname} premium limit hari ini habis\nbeli premlimit dengan cara ${prefix}buypremlimit/ naik level\`\`\`
	`
}





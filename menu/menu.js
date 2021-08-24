const menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, lucbotbatrai, battre, role, f, fake, prema, num, ow) => { 
	return `*⌞ 𝐘𝐀𝐊𝐔𝐙𝐀 𝐁𝐎𝐓 𝐌𝐄𝐍𝐔 ⌝*
	
❒ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍
│${f} Owner : Vian Ofc
│${f} prefix :「${prefix}」
│${f} sewabot : ${prefix}sewabot
│${f} premium : ${prefix}joinpremium
│${f} joingrup : ${prefix}join
│${f} donasi : ${prefix}donasi

❒ 𝐀𝐍𝐓𝐈 𝐏𝐈𝐋𝐓𝐄𝐊
│${f} refresh : ${prefix}imunevirtex

❒ 𝐈𝐒𝐈 𝐑𝐀𝐍𝐒𝐄𝐋
│${f} Ransel : ${prefix}inventory
│${f} achievment : ${prefix}leaderboard

❒ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 𝐔𝐒𝐄𝐑
│${f} Status : ${prema}
│${f} Nomer : @${num.split("@")[0]}
│${f} Uangmu : Rp.${uangku}.-
│${f} XP : ${getLevelingXp(sender)}/${reqXp}
│${f} Role : ${role}
│${f} Level : ${getLevelingLevel(sender)}
│${f} User register : ${_registered.length}

❒ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓
│${f} ${prefix}ownermenu
│${f} ${prefix}grupmenu
│${f} ${prefix}gabutmenu
│${f} ${prefix}downloadmenu
│${f} ${prefix}mediamenu
│${f} ${prefix}minigame
│${f} ${prefix}makermenu
│${f} ${prefix}akuarium
│${f} ${prefix}shopmenu
│${f} ${prefix}aesthetic
│${f} ${prefix}infomenu

❒ 𝐈'𝐌 𝐒𝐓𝐀𝐓𝐔𝐒
│${f} Nama Bot : ${fake}
│${f} Baterai : ${battre}%
│${f} Status : ${baterai.cas === 'true' ? 'Charging' : 'Not Charging'}
│${f} Bars : ${lucbotbatrai}
`
}

exports.menu = menu

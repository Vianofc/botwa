const akuarium = (sender, heartbars, kurakuraa, guritaa, cumicumia, udanga, lobstera, kepitingaa, pufferfisha, ikana, ikan2a, lumbalumbaa, pausa, paus2a, hiua, seadoga, checkLimituser, checkpremLimituser, checkPotionuser, checkHealuser, f,) => { 
	return `❏ *「 𝐀𝐍𝐈𝐌𝐀𝐋𝐒 𝐌𝐄𝐍𝐔 」*

${f} ${heartbars}
${f} Energy:${checkHealuser(sender)}
${f} Limit:${checkLimituser(sender)}
${f} Premlimit:${checkpremLimituser(sender)}
${f} Potion:${checkPotionuser(sender)}
${f} ${pufferfisha}    ${f} ${cumicumia}
${f} ${udanga}    ${f} ${kepitingaa}
${f} ${ikan2a}    ${f} ${ikana}

❏ *「 𝐌𝐘𝐓𝐇𝐈𝐂𝐀𝐋 𝐀𝐍𝐈𝐌𝐀𝐋 𝐒𝐄𝐀 」*
${f} ${pausa}    ${f} ${paus2a}
${f} ${hiua}    ${f} ${seadoga}
${f} ${lumbalumbaa}    ${f} ${kurakuraa}
${f} ${guritaa}    ${f} ${lobstera}
`
}

exports.akuarium = akuarium
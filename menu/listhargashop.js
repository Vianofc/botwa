const shopmenu = (prefix, koinPerlimit, koinPerpremlimit, koinPerpotion, koinMegaPerpotion, f) => { 
	return `*⌞ 𝐋𝐈𝐒𝐓 𝐇𝐀𝐑𝐆𝐀 𝐒𝐇𝐎𝐏 ⌝*
	
❒ 𝐁𝐔𝐘 𝐏𝐑𝐈𝐂𝐄
▷${f} Limit     :Rp.${koinPerlimit}.-    
▷${f} Premlimit :Rp.${koinPerpremlimit}.-    
▷${f} Potion    :Rp.${koinPerpotion}.-
▷${f} MPotion   :Rp.${koinMegaPerpotion}.-

❒ 𝐒𝐄𝐋𝐋 𝐏𝐑𝐈𝐂𝐄
▷${f} Berlian   :Rp.${prefix}otw.-
▷${f} Emas      :Rp.${prefix}otw.-
▷${f} Perak     :Rp.${prefix}otw.-
▷${f} Perunggu  :Rp.${prefix}otw.-
▷${f} Batu      :Rp.${prefix}otw.-

❒ 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐒𝐇𝐎𝐏
▷${f} ${prefix}usepotion
▷${f} ${prefix}usemegapotion
▷${f} ${prefix}transfer

❒ 𝐁𝐔𝐘 𝐒𝐇𝐎𝐏
▷${f} ${prefix}buylimit     
▷${f} ${prefix}buypremlimit 
▷${f} ${prefix}buy💉 
▷${f} ${prefix}buy💊

❒ 𝐒𝐄𝐋𝐋 𝐒𝐇𝐎𝐏
▷${f} ${prefix}sell🦑 ${f}${prefix}sell🐡
▷${f} ${prefix}sell🦐 ${f}${prefix}sell🐠
▷${f} ${prefix}sell🦀 ${f}${prefix}sell🐟
▷${f} ${prefix}sellperunggu
▷${f} ${prefix}sellperunggu
▷${f} ${prefix}sellperunggu
▷${f} ${prefix}sellperunggu
`
}

exports.shopmenu = shopmenu

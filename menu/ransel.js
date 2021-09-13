const ransel = (sender, checkHealuser, heartbars, checkLimituser, checkpremLimituser, potionpointa, megapotionpointa, berlianpointa, emaspointa, perakpointa, perunggupointa, ironpointa, brickpointa, stonepointa, kerangajaibnpointa, jamurpointa, daunmaplepointa, daunpointa, daun1pointa, daun2pointa, clover3pointa, clover4pointa, kayupointa, bibitpointa, puzzlepointa, f) => { 
    return `*⌞ 𝐈𝐕𝐄𝐍𝐓𝐎𝐑𝐘 𝐌𝐄𝐍𝐔 ⌝*


𝐑𝐀𝐍𝐒𝐄𝐋
 ${heartbars}
 ${f} Energy:${checkHealuser(sender)}%
 ${f} ${prefix}akuarium 
 ${f} Limit:${checkLimituser(sender)}
 ${f} Premlimit:${checkpremLimituser(sender)}
 ${f} Potion${potionpointa}

𝐎𝐑𝐄
 ${f} M.Potion${megapotionpointa}
 ${f} ${emaspointa} ${f} ${ironpointa}
 ${f} ${perakpointa} ${f} ${brickpointa}
 ${f} ${perunggupointa} ${f} ${stonepointa}

𝐌𝐘𝐓𝐈𝐂𝐇𝐀𝐋 𝐎𝐑𝐄
 ${f} ${berlianpointa}

𝐓𝐑𝐀𝐒𝐇
 ${f} ${kerangajaibnpointa} ${f} ${daunpointa}
 ${f} ${jamurpointa} ${f} ${daun1pointa}
 ${f} ${daunmaplepointa} ${f} ${daun2pointa}
 ${f} ${clover3pointa} ${f} ${clover4pointa}
 ${f} ${kayupointa} ${f} ${bibitpointa}
 ${f} ${puzzlepointa}
`
}

exports.ransel = ransel
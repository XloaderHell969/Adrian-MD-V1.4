const fs = require('fs')
const chalk = require('chalk')

global.apikey = '8335ed8bd0c78fee32e4616b' //https://api.lolhuman.xyz
global.rosekey = '-' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'VELinXD'
global.namaowner = 'VELin お-ぎ'

//—————「 Setting Owner 」—————//
global.owner = '6288294029936'
global.ownernomer = ["6288294029936"]
global.premium = ['6288294029936']

//—————「 Set Wm 」—————//
global.packname = 'VELinXD'
global.author = 'VELin お-ぎ'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 20,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://i.ibb.co/fD1kt1C/koneko.jpg'
global.isLink = `https://youtube.com/@xloaderhell666`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

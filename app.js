const sd_wrapper = document.querySelector(".sd_wrapper")

const manifest_sd = document.querySelector(".manifest-sd")

function add_list(text,caption) {
    const list = document.createElement("div")
    list.setAttribute("class","list")

    const tag = document.createElement("div")
    tag.setAttribute("class","list_tag")
    tag.textContent = caption.toString()

    const vlist = document.createElement("div")
    vlist.setAttribute("class","view_list")
    vlist.textContent = "#"

    vlist.addEventListener("click",() => {
        start_activity(text)
    })
    
    list.appendChild(tag)
    list.appendChild(vlist)
    sd_wrapper.appendChild(list)
}

function start_activity(activity_text) {
    const body = document.body
    
    const activity = document.createElement("div")
    activity.setAttribute("class","activity")

    const remove = document.createElement("div")
    remove.setAttribute("class","remove")
    remove.textContent = "hide"
    remove.addEventListener("click",() => {
        remove.remove()
        clipboard.remove()
        activity.remove()
    })
    const clipboard = document.createElement("div")
    clipboard.setAttribute("class","clipboard")
    clipboard.textContent = "copy"
    clipboard.addEventListener("click",async () => {
        await navigator.clipboard.writeText(JSON.stringify(activity_text,null,4))
    })

    body.appendChild(remove)
    body.appendChild(clipboard)
    activity.textContent = JSON.stringify(activity_text,null,4)

    body.appendChild(activity)
}

let mf_sd = true
function manif_sd() {
    if(mf_sd){
        sd_wrapper.style.animation = "manif_in .7s forwards"
        mf_sd = false
    }
    else {
        sd_wrapper.style.animation = "manif_out .7s forwards"
        mf_sd = true
    }
}

manifest_sd.addEventListener("click",manif_sd)

add_list([
    "Android52 - Wrapped Up Remix.mp3",
    "Ashidoran - 明日の夢 (feat 初音ミク).mp3",
    "Bad Computer & Danyka Nadeau - Chasing Clouds.mp3",
    "banvox - Watch Me (Audio) [Google Android TV Commercial Music].mp3",
    "Author wind - Closer to you.mp3",
    "banvox - Summer [Official Music Video].mp3",
    "Brandon Liew - DREAMERS (feat TOFIE).mp3",
    "Citrus OP「Azalea」By nanoRIPE Lyrics.mp3",
    "DoctorNoSense - Safe to Say (Official Audio).mp3",
    "Broken Light (feat mami).mp3",
    "Day by Day (feat Nicole Curry).mp3",
    "f(x) - 4 Walls (Zekk Remix).mp3",
    "dooks & nabil! - AH!.mp3",
    "Endless (feat Mameyudoufu).mp3",
    "Friend.mp3",
    "Future Cider.mp3",
    "Geoxor - Kill Aura.mp3",
    "Future Cαke.mp3",
    "Future Cαndy.mp3",
    "greyl - Trendy.mp3",
    "Hiromi - One Love Feat Simon.mp3",
    "HoneyComeBear - See You - またね.mp3",
    "HoneyComeBear - Dear.mp3",
    "HoneyComeBear - Sneaker.mp3",
    "greyl - MYC.mp3",
    "icesawder - Stardom.mp3",
    "HoneyComeBear - レイニーガール (Official Audio).mp3",
    "kamome sano - Lovesick (feat ぷにぷに電機).mp3",
    "Kamaboko - Colorful.mp3",
    "Just Love (feat PSYQUI).mp3",
    "KOTONOHOUSE - PRESS START!.mp3",
    "Kunaru & MG5902 - Hurt You.mp3",
    "Kunaru & Kachi - One More Time.mp3",
    "Kuro - Aiming For That Sky Where The Meteor Shower Flows  From【ハピコア流星群】.mp3",
    "Madeon - All My Friends (Kagi Remix).mp3",
    "KOTONOHOUSE - Pitter  Patter (ftTOFUKU).mp3",
    "Mameyudoufu - Midnight Grow (ft Mami)  Jpop Future Core.mp3",
    "masara - Tegami (ft yutsuki & Hikaru Station).mp3",
    "Miruku - Bend It Over.mp3",
    "lapix - Day by day (PSYQUI Remix).mp3",
    "Moe Shop - GHOST FOOD (feat TORIENA).mp3",
    "Malt & Aiyru - Cosmos.mp3",
    "Moe Shop - Baby Pink (w YUCe).mp3",
    "Moe Shop - Notice (w TORIENA).mp3",
    "Moe Shop - WWW (feat EDOGA-SULLIVAN).mp3",
    "Moe Shop - WONDER POP.mp3",
    "Moe Shop - You Look So Good [Pure Pure EP].mp3",
    "nanoRIPE  アザレア - Music Video.mp3",
    "Nightcore - No Friends (Lyrics).mp3",
    "OYASUMI in my dream (Original Mix).mp3",
    "POISON.mp3",
    "Moe Shop - Want You.mp3",
    "PSYQUI & Houou Karin - Shining Lights  Speed Garage.mp3",
    "PSYQUI - Chatroom  Jpop Future Core.mp3",
    "PSYQUI - Are You Kidding Me (ft Mami)  Jpop Future Core.mp3",
    "Psyqui - Deep Blue.mp3",
    "PSYQUI - Beautiful Future.mp3",
    "PSYQUI - DJ Noriken - スターゲイザ (ft YUCe)  PSYQUI Remix.mp3",
    "PSYQUI - dont you want me ft Such.mp3",
    "PSYQUI - Dont You Want Me (ft SUCH)  Jpop Kawaii Future Bass 2019.mp3",
    "PSYQUI - Education  Future Core 2019.mp3",
    "PSYQUI - Dont You Want Me (ft Such) Mameyudoufu Remix.mp3",
    "PSYQUI - Endless (Mameyudoufu Remix).mp3",
    "PSYQUI - Fly To The Moon (ft 中村さんそ)  J-Pop.mp3",
    "PSYQUI - Funk Assembly  J-Pop Funk.mp3",
    "PSYQUI - Fly to the moon feat 中村さんそ.mp3",
    "PSYQUI - Hype (ft SUCH)  Jpop Kawaii J-Core 2019.mp3",
    "PSYQUI - Hype (Lapix Remix) ft Such  Jcore Future Core.mp3",
    "PSYQUI - Love & Roll (ft SUCH) Speed Garage J-Pop.mp3",
    "PSYQUI - Mend Your Ways (ft SUCH)  Jpop Kawaii Future Bass 2019.mp3",
    "PSYQUI - Hype feat Such.mp3",
    "PSYQUI - Nervousness.mp3",
    "PSYQUI - Multitalents.mp3",
    "PSYQUI - No One  Future Core.mp3",
    "PSYQUI - OYASUMI in my dream.mp3",
    "PSYQUI - Pallet feat mikanzil.mp3",
    "PSYQUI - Rainbow Dream (ft Mo∀)  Future Core.mp3",
    "PSYQUI - Raise Your Hands (ft Such)  Future Core.mp3",
    "PSYQUI - Secret Dance Hall (ft SUCH)  J-pop 2019.mp3",
    "PSYQUI - Up n Up  Future Core.mp3",
    "PSYQUI - Education.mp3",
    "PSYQUI - Your voice So M-Project Remix.mp3",
    "PSYQUI - Vital Error (Beat)  Future Core 2019.mp3",
    "PSYQUI - Your Voice So Zekk Full Spec Remix (Ft SUCH)  Future Core.mp3",
    "PSYQUI - センチメンタルハートボーイ(ft Such)  J-Pop Future Core.mp3",
    "PSYQUI - ヒカリの方へ (ft SUCH) Awakening  Future Core.mp3",
    "PSYQUI - No One.mp3",
    "PSYQUI - ヒカリの方へ - Lapix & Cranky Remix (ft Such)  Future Core.mp3",
    "PSYQUI - ヒステリックナイトガール feat Such (android52 Edit).mp3",
    "PSYQUI - ヒステリックナイトガール (Awakening) (ft SUCH)  J-Pop.mp3",
    "PSYQUI featSuch - C & B.mp3",
    "PSYQUI - 就寝御礼 (Singed By Psyqui Himself!)  J-Pop.mp3",
    "PSYQUI feat Marpril - Girly Cupid.mp3",
    "PSYQUI - ヒカリの方へ (ft SUCH)  Jpop.mp3",
    "Purukichi - Mysterious feat pinana.mp3",
    "Purukichi - LOOP  (Feat セトナツメ).mp3",
    "Ruxxi - I Mean I Love You VIP (w Malcha).mp3",
    "Signal (feat Such).mp3",
    "PSYQUI ft Such - LOVE&ROLL.mp3",
    "Snails House × Moe Shop - Pastel.mp3",
    "SPY x FAMILY - Ending Full「Comedy」by Gen Hoshino (LyricsSubtitles).mp3",
    "SpaceJellyfish - クラゲ.mp3",
    "Still in my heart (feat ぷにぷに電機).mp3",
    "tekalu - Letter feat おんた.mp3",
    "Ujico  Snails House - Pixel Dream.mp3",
    "Your voice so (feat such).mp3",
    "WISE - I Loved You Feat Hiroko.mp3",
    "Your Voice So (M-Project Remix).mp3",
    "YUCe - Night Club Junkie.mp3",
    "YUCe x Snails House - Cosmic Air Ride.mp3",
    "YUCe 「Cappuccino」.mp3",
    "YUCe 「macaron moon」.mp3",
    "YUCe 「Sunset Tea Cup」.mp3",
    "Sakumellia.mp3",
    "Yunomi (ft Happy Kuru Kuru) – はんぶんこ花火 (Jotori Remix).mp3",
    "Zakku x Nakanojojo - Matcha Love (feat アリガトユイナ).mp3",
    "Yuarkin - Drive High.mp3",
    "Yunomi - Wakusei Rabbit (ft TORIENA).mp3",
    "[Future Garage] f(x) - 4 Walls (Zekk Remix).mp3",
    "Zekk - City Lights (Remix).mp3",
    "「Footwork」[PSYQUI] Too Late.mp3",
    "「Future Core」[PRout] Tasogare.mp3",
    "「Future Core」[PSYQUI feat Such] ヒカリの方へ (Awakening).mp3",
    "【Electronic】Voia - Almost Human (GonZealous Remix).mp3",
    "【Citrus 柑橘味香氣】nanoRIPE _「アザレア」OP.mp3",
    "【歌ってみた】春を告げる -  yama南條夢路（cover）.mp3",
    "[Blue Archive] Theme 109.mp3",
    "うさこ  kotu - Blue Spring Groove [Anime Groove].mp3",
    "ぴ！pi - SkyHigh VIP.mp3",
    "まさらPmasara - Love10 (ft Juunana & Ran).mp3",
    "ヒカリの方へ (lapix & Cranky Remix) (feat Such).mp3",
    "ヒカリの方へ (Original Mix).mp3",
    "アイシテゲーモーバー.mp3",
    "夢さんぽ.mp3",
    "合言葉 (feat picco).mp3",
    "帰り道.mp3",
    "べに／可不.mp3",
    "龍族幻想Dragon Raja OST - Music From My Room (10min).mp3",
    "高尾大毅 - Dont be afraid.mp3"
],"KawaiiNeko")
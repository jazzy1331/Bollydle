var songs = [
    {
        "title":"Kesariya (Brahmāstra: Part One - Shiva) - Arijit Singh, Pritam Chakraborty, Amitabh Bhattacharya",
        "url":"https://soundcloud.com/pritammusic/kesariya-audio-teaser-from"
    },
    {
        "title":"Saadi Galli Aaja (Nautanki Saala!) - Ayushmann Khurrana, Neeti Mohan",
        "url":"https://soundcloud.com/impure-spirit/saadi-gali-aaja-ayushmann"
    },
    {
        "title":"Munni Badnaam (Dabangg) - Aishwarya Nigam, Mamta Sharma",
        "url":"https://soundcloud.com/apriani-warda-n/dabaang_munni-badnaam-hui"
    },
    {
        "title":"Kesariya (Brahmāstra: Part One - Shiva) - Arijit Singh, Pritam Chakraborty, Amitabh Bhattacharya",
        "url":"https://soundcloud.com/pritammusic/kesariya-audio-teaser-from"
    },
    {
        "title":"Manwa Laage (Happy New Year) - Shreya Ghoshal, Arijit Singh",
        "url":"https://soundcloud.com/sobanraos-music/manwa-laage-arijit-singh-happy-new-year-2014-shahrukh-khan-deepika-padukone-hny-movie-2014"
    },
    {
        "title":"Pareshaan (Ishaqzaade) - Amit Trivedi, Shalmali Kholgade, Kausar Munir",
        "url":"https://soundcloud.com/moksha-charlotte/pareshaan-ishagzaade"
    },
    {
        "title":"Dhak Dhuk (English Vinglish) - Amit Trivedi",
        "url":"https://soundcloud.com/erphan-qayyum/dhak-dhuk-english-vinglish"
    },
    {
        "title":"Main Kya Karoon (Barfi) - Pritam, Nikhil Paul George",
        "url":"https://soundcloud.com/nikhilpaulgeorgeofficial/main-kya-karoon"
    },
    {
        "title":"Isq Risk (Mere Brother Ki Dulhan) - Sohail Sen, Rahat Fateh Ali Khan, Irshad Kamil",
        "url":"https://soundcloud.com/gautam1212/mere-brother-ki-dulhan-isq-risk"
    },
    {
        "title":"Te Amo (Dum Maaro Dum) - Pritam, Mohit Chauhan",
        "url":"https://soundcloud.com/zdema/te-amo-dum-maaro-dum-new-song"
    },
    {
        "title":"Kyon (Barfi) - Pritam, Papon, Sunidhi Chauhan",
        "url":"https://soundcloud.com/paponofficial/kyon"
    },
    // TEN ITEMS
    {
        "title":"Saibo (Shor in the City) - Sachin-Jigar, Shreya Ghoshal, Tochi Raina",
        "url":"https://soundcloud.com/sachinjigarofficial/saibo"
    },
    {
        "title":"Masti Ki Paathshala (Rang De Basanti) - Mohammed Aslam, Naresh Iyer, Blaaze",
        "url":"https://soundcloud.com/arrahmanofficial/masti-ki-paathshala-1"
    },
    {
        "title":"Chakna Chakna (Namastey London) - Himesh Reshammiya",
        "url":"https://soundcloud.com/himeshreshammiya-music/chakna-chakna-from-namastey?"
    },
    {
        "title":"Kurbaan Hua (Kurbaan) - Salim-Sulaiman",
        "url":"https://soundcloud.com/salim-sulaimanofficial/kurbaan-hua"
    },
    {
        "title":"Pani Da Rang (Vicky Donor) - Ayushmann Khurrana",
        "url":"https://soundcloud.com/himadripatel/pani-da-rang"
    },
    {
        "title":"Suno Aisha (Aisha) - Ash King, Amit Trivedi, Nakash Aziz",
        "url":"https://soundcloud.com/amittrivedi/suno-aisha"
    },
    {
        "title":"Wake Up Sid (Wake Up Sid) - Shankar Mahadevan, Loy Mendonsa",
        "url":"https://soundcloud.com/shankarehsaanloyofficial/wake-up-sid-from-wake-up-sid"
    },
    {
        "title":"I Hate Luv Storys (I Hate Luv Storys) - Shreya Ghoshal, Vishal Dadlani",
        "url":"https://soundcloud.com/vishalshekhar/i-hate-luv-storys-from-i-hate"
    },
    {
        "title":"Shukran Allah (Kurbaan) - Salim Merchant, Shreya Ghoshal, Sonu Nigam",
        "url":"https://soundcloud.com/salimsadruddinmerchant/shukran-allah"
    },
    {
        "title":"O Saathi Re (Omkara) - Vishal Bhardwaj, Shreya Ghoshal",
        "url":"https://soundcloud.com/ananyamehta/gulzar-omkara-o-saathi-re"
    },
    // TWENTY ITEMS
    {
        "title":"Desi Girl (Dostana) - Shankar Mahadevan",
        "url":"https://soundcloud.com/shankar-mahadevan-official/desi-girl-from-dostana"
    },
    {
        "title":"Ishq Wala Love (Student of the Year) - Shekhar Ravjiani, Salim Merchant, Neeti Mohan",
        "url":"https://soundcloud.com/vishalshekhar/ishq-wala-love"
    },
    {
        "title":"Tum Hi Ho Bandhu (Cocktail) - Neeraj Shridhar, Kavita Seth",
        "url":"https://soundcloud.com/hr-tuhin/tum-hi-ho-bandhu-wwwsongspk"
    },
    {
        "title":"Tum Hi Ho (Aashiqui) - Arijit Singh",
        "url":"https://soundcloud.com/amaronline/tumhiho"
    },
    {
        "title":"Daaru Desi (Cocktail) - Shalmali Kholgade, Benny Dayal",
        "url":"https://soundcloud.com/zoya_ka_parma/cocktail-daaru-desi"
    },
    {
        "title":"Teri Jhuki Nazar (Murder 3) - Shafqat Amanat Ali, Pritam",
        "url":"https://soundcloud.com/pritammusic/teri-jhuki-nazar"
    },
    {
        "title":"Bakhuda Tum Hi Ho (Kismat Konnection) - Atif Aslam, Alka Yagnik",
        "url":"https://soundcloud.com/marwa-el-harmill/bakhuda-tumhi-ho"
    },
    {
        "title":"Lat Lag Gayee (Race 2) - Shalmali Kholgade, Benny Dayal",
        "url":"https://soundcloud.com/benny-dayal/lat-lag-gayee"
    },
    {
        "title":"Bheegi Si Bhaagi Si (Raajneeti) - Antara Mitra, Mohit Chauhan, Pritam Chakraborty",
        "url":"https://soundcloud.com/pritammusic/bheegi-si-bhaagi-si-from"
    },
    {
        "title":"Twist (Love Aaj Kal) - Neeraj Shridhar, Pritam Chakraborty, Suzanne D'Mello",
        "url":"https://soundcloud.com/fasih-dawood/we-twist-love-aaj-kal"
    },
    // THIRTY ITEMS
    {
        "title":"Bezubaan (ABCD) - Priya Saraiya, Sachin-Jigar, Mohit Chauhan, Abhishek Azaad",
        "url":"https://soundcloud.com/mohit-chauhan-official/bezubaan"
    },
    {
        "title":"Manja (Kai Po Che) - Mohan Kanan, Amit Trivedi",
        "url":"https://soundcloud.com/amittrivedi/manja"
    },
    {
        "title":"Tu Meri Dost Hain (Prince) - A. R. Rahman, Shreya Ghoshal, Benny Dayal",
        "url":"https://soundcloud.com/benny-dayal/tu-meri-dost-hain"
    },
    {
        "title":"Anjaana Anjaani Ki Kahanni (Anjaana Anjaani) - Monali Thakur, Nikhil D'Souza",
        "url":"https://soundcloud.com/aanjanaanjani/01-anjaana-anjaani-anjaana-anjaani-ki-kahani-www-djcool-tk-1"
    },
    {
        // DUPLICATE
        "title":"Munni Badnaam Hui (Dabangg) - Aishwarya Nigam, Mamta Sharma, Aishwarya",
        "url":"https://soundcloud.com/mai-ismail-3/munni-badnaam-hui"
    },
    {
        "title":"Tujh Mein Rab Dikhta Hain (Rab Ne Bana Di Jodi) - Roopkumar Rathod",
        "url":"https://soundcloud.com/aankfm/tujh-mein-rab-dikhta-hai-rab"
    },
    {
        "title":"Meter Down (Taxi 9211) - Nimosa, Merriene, Adnan Sami",
        "url":"https://soundcloud.com/iamyuvi/meter-down-taxi-no-9211"
    },
    {
        "title":"Kabhi Kabhi Aditi (Jaane Tu Ya Jaane Na) - Rashid Ali",
        "url":"https://soundcloud.com/rashidaliofficial/kabhi-kabhi-aditi"
    },
    {
        "title":"Pappu Can't Dance (Jaane Tu Ya Jaane Na) - Satish Chakravarthy, Satish Subramanium, Benny Dayal",
        "url":"https://soundcloud.com/nsaidah/pappu-cant-dance-sala_jaane-tu"
    },
    {
        "title":"Aahun Aahun (Love Aaj Kal) - Master Saleem, Neeraj Shridhar",
        "url":"https://soundcloud.com/mastersaleemofficial/aahun-aahun"
    },
    // FOURTY ITEMS
    {
        "title":"Saiyaara (Ek Tha Tiger) - Tarannum Mallik, Mohit Chauhan",
        "url":"https://soundcloud.com/sobia-chohan/04-ek-tha-tiger-saiyaara-dm"
    },
    {
        "title":"Challa (Crook) - Suzanne D'Mello, Babbu Maan, Pritam Chakraborty",
        "url":"https://soundcloud.com/pritammusic/challa-from-crook"
    },
    {
        "title":"Om Mangalam (Kambakkht Ishq) - RDB",
        "url":"https://soundcloud.com/rdb/01-om-mangalam"
    },
    {
        "title":"Vele (Student of the Year) - Shekhar Ravjiani, Vishal Dadlani",
        "url":"https://soundcloud.com/vishalshekhar/vele-from-student-of-the"
    },
    {
        "title":"Tu Hi Meri Shab Hain (Gangster: A Love Story) - KK, Pritam Chakraborty",
        "url":"https://soundcloud.com/shrikant-muknak/tu-hi-meri-shab-hai"
    },
    {
        "title":"Kangna - Dr Zeus, Master Rakesh, Shortie, Deepti",
        "url":"https://soundcloud.com/drzeusmusic/kangna-feat-deepti-master"
    },
    {
        "title":"Shubhaarambh (Kai Po Che) - Shruti Pathak, Divya Kumar",
        "url":"https://soundcloud.com/amittrivedi/shubhaarambh"
    },
    {
        "title":"Khalbali (Rang De Basanti) - Mohammed Aslam, A. R. Rahman, Nacim",
        "url":"https://soundcloud.com/arrahmanofficial/khalbali"
    },
    {
        "title":"Challa (Jab Tak Hain Jaan) - Rabbi Shergill",
        "url":"https://soundcloud.com/yaso-hassen/challa-jab-tak-hai-jaan"
    },
    {
        "title":"Give Me Some Sunshine (3 Idiots) - Suraj Jagan, Sharman Joshi",
        "url":"https://soundcloud.com/user601078171/give-me-some-sun-shine"
    },
    // FIFTY ITEMS
    {
        "title":"Main Pareshaan (Ishaqzaade) - Shalmali Kholgade",
        "url":"https://soundcloud.com/komalojha/main-pareshaan"
    },
    {
        "title":"Rehja Re (Golmaal) - Javed Ali, Vishal Dadlani, Sunidhi Chauhan, Kumaar",
        "url":"https://soundcloud.com/new-hicham/golmaal6-songs-pk"
    },
    {
        "title":"Bahara (I Hate Luv Stories) - Shreya Ghoshal, Sona Mohapatra",
        "url":"https://soundcloud.com/shreya-ghoshal-music/bahara-from-i-hate-luv-storys"
    },
    {
        "title":"Sajdaa (My Name is Khan) - Nusrat Fateh Ali Khan, Richa Sharma, Rahat Fateh Ali Khan, Shankar Mahadevan",
        "url":"https://soundcloud.com/shahrukhkhan-music/sajdaa"
    },
    {
        "title":"Halkat Jawani (Heroine) - Sunidhi Chauhan",
        "url":"https://soundcloud.com/salim-sulaimanofficial/halkat-jawani-from-heroine"
    },
    {
        "title":"Ajab Si (Om Shanti Om) - KK",
        "url":"https://soundcloud.com/saadsalman69/aankhon-mein-teri-ajab-si"
    },
    {
        "title":"Bachna Ae Haseeno (Bachna Ae Haseeno) - Kishore Kumar, Vishal Dadlani, Sumit Kumar",
        "url":"https://soundcloud.com/farhan-xhykh/bachna-ae-haseeno"
    },
    {
        "title":"Iktara (Wake Up Sid) - Amit Trivedi, Kavita Seth, Amitabh Bhattacharya",
        "url":"https://soundcloud.com/amittrivedi/iktara-from-wake-up-sid"
    },
    {
        "title":"Hey Shona (Tararumpum) - Shaan, Sunidhi Chauhan, Mahalakshmi Iyer",
        "url":"https://soundcloud.com/ialii/hey-shona"
    },
    {
        "title":"Rafta Rafta (Namastey London) - RDB",
        "url":"https://soundcloud.com/rdb-scmusic/rafta-rafta"
    },
    //SIXTY ITEMS
    {
        "title":"Mauja Hi Mauja (Jab We Met) - Mika Singh",
        "url":"https://soundcloud.com/mika-singh/mauja-hi-mauja-jab-we-met"
    },
    {
        "title":"Mitwa (Kabhi Alvida Na Kehna) - Shafqat Amanat Ali, Caralisa Monteiro, Shankar Mahadevan",
        "url":"https://soundcloud.com/shankarehsaanloyofficial/mitwa-from-kabhi-alvida-naa"
    },
    {
        "title":"Khabar Nahi (Dostana) - Amanat Ali, Raja Hasan, Shreya Ghoshal, Vishal Dadlani",
        "url":"https://soundcloud.com/shreya-ghoshal-music/khabar-nahi-from-dostana"
    },
    {
        "title":"Rishte Naate (De Dana Dan) - Rahat Fateh Ali Khan, Suzanne D'Mello",
        "url":"https://soundcloud.com/bollywoodtopten/xdr-de-dana-dan-01-rishte-naate"
    },
    {
        "title":"Haule Haule (Rab Ne Bana Di Jodi) - Sukhwinder Singh",
        "url":"https://soundcloud.com/tajul39/haule-haule-song-rab-ne-bana"
    },
    {
        "title":"Jhoom Barabar Jhoom (Jhoom Barabar Jhoom) - Shankar Mahadevan, Sukhwinder Singh, Mahalakshmi Iyer, K.K.",
        "url":"https://soundcloud.com/kk29311/jhoom-barabar-jhoom"
    },
    {
        "title":"Nach Baliye (Bunty Aur Babli) - Sowmya Raoh, Loy Mendonsa, Shankar Mahadevan",
        "url":"https://soundcloud.com/alex-cracktas/nach-baliye-full-song-bunty"
    },
    {
        "title":"Char Baj Gaye (Faltu) - Hard Kaur, Sachin-Jigar",
        "url":"https://soundcloud.com/sachinjigarofficial/char-baj-gaye-from-f-a-l-t-u"
    },
    {
        "title":"Dhan Te Nan (Kaminey) - Robert Bob Omulo, Sukhwinder Singh, Vishal Dadlani",
        "url":"https://soundcloud.com/tarnb90/dhan-te-nan-full-song-hq-sukhwinder-singh"
    },
    {
        "title":"Roobaroo (Rang De Basanti) - A. R. Rahman, Naresh Iyer",
        "url":"https://soundcloud.com/arrahmanofficial/roobaroo"
    },
    // SEVENTY ITEMS
    {
        "title":"O Rangrez (Bhaag Milkha Bhaag) - Javed Bashir, Shreya Ghoshal, Shankar-Ehsaan-Loy",
        "url":"https://soundcloud.com/shankarehsaanloyofficial/o-rangrez"
    },
    {
        "title":"Jhalla Wallah (Ishaqzaade) - Shreya Ghoshal, Ajinkya Iyer, Neuman Pinto",
        "url":"https://soundcloud.com/fatimaelzahraa_ahmed/jhalla-wallah"
    },
    {
        "title":"Maahi Ve (Kal Ho Naa Ho) - Udit Narayan, Madhushree, Shankar-Ehsaan-Loy, Sadhana Sargam, Sonu Nigam",
        "url":"https://soundcloud.com/shankarehsaanloyofficial/maahi-ve-from-kal-ho-naa-ho"
    },
    {
        "title":"Jab Se Tere Naina (Saawariya) - Shaan",
        "url":"https://soundcloud.com/montysharma/jab-se-tere-naina"
    },
    {
        "title":"Surili Akhiyon Waale (Veer) - Suzanne D'Mello, Rahat Fateh Ali Khan, Sunidhi Chauhan",
        "url":"https://soundcloud.com/herite/veer-surili-akhiyon-wale-herite"
    },
    {
        "title":"Tauba Tumhare Yeh Ishaare (Chalte Chalte) - Alka Yagnik, Abhijeet Bhattacharya",
        "url":"https://soundcloud.com/buzcutt/tauba-tumhare-yeh-ishare"
    },
    {
        "title":"Kasto Mazza (Parineeta) - Shreya Ghoshal, Sonu Nigam",
        "url":"https://soundcloud.com/rayhana-sultan/kasto-mazza"
    },
    {
        "title":"Main Hoon Na (Main Hoon Na) - Shreya Ghoshal, Sonu Nigam",
        "url":"https://soundcloud.com/tayyab379/main-hoon-na"
    },
    {
        "title":"Dil Se Re (Dil Se) - Annupamaa, Febi Mani, A. R. Rahman, Anuradha Sriram",
        "url":"https://soundcloud.com/rana-asad-aziz/dil-se-re-dil-se"
    },
    {
        "title":"Ab To Forever (Tararumpum) - Vishal-Shekhar",
        "url":"https://soundcloud.com/ikra-sumroze/ab-to-forever"
    },
    // EIGHTY ITEMS
    {
        "title":"O Mere Khuda (Prince) - Atif Aslam, Garima Jhingon",
        "url":"https://soundcloud.com/aagaman-barkati/prince-o-mere-khuda"
    },
    {
        "title":"Jogi Mahi (Bachna Ae Haseeno) - Himani Kapoor, Shekhar Ravjiani, Sukhwinder Singh",
        "url":"https://soundcloud.com/fahad-iftikhar-3/jogi-mahi-heer-ranjhna-with-1"
    },
    {
        "title":"ABCD (Yaariyan) - Shefali Alvares, Benny Dayal, Yo Yo Honey Singh",
        "url":"https://soundcloud.com/saljoq/abcd-yaariyan"
    },
    {
        "title":"Kabhi Jo Badal Barse (Jackpot) - Arijit Singh",
        "url":"https://soundcloud.com/nimrasheikh2/kabhi-jo-badal-barse"
    },
    {
        "title":"Ajj Din Chadeya (Love Aaj Kal) - Rahat Fateh Ali Khan",
        "url":"https://soundcloud.com/sushil9985403720/songs-pk-love-aaj-kal-05-ajj-din-chadeya"
    },
    {
        "title":"It's the Time to Disco (Kal Ho Na Ho) - Shaan, Vasundhara Das, Loy Mendonsa,",
        "url":"https://soundcloud.com/shankarehsaanloyofficial/its-the-time-to-disco-from-kal"
    },
    {
        "title":"Samjhawan (Humpty Sharma Ki Dulhania) - Arijit Singh, Shreya Ghoshal",
        "url":"https://soundcloud.com/jawadahmedofficial/samjhawan-from-humpty-sharma"
    },
    {
        "title":"Mann Mera (Table no. 21) - Gajendra Verma",
        "url":"https://soundcloud.com/waqas-warsi/mann-mera-gajendra-verma"
    },
    {
        "title":"Muskurane (City Lights) - Arijit Singh",
        "url":"https://soundcloud.com/jeetgannguli/muskurane-from-citylights"
    },
    {
        "title":"Zehnaseeb (Hasee Toh Phasee) - Shekhar Ravjiani, Chinmayi",
        "url":"https://soundcloud.com/vishalshekhar/zehnaseeb-from-hasee-toh"
    },
    // NINETY ITEMS
    {
        "title":"Tu Meri (Bang Bang) - Vishal Dadlani",
        "url":"https://soundcloud.com/vishalshekhar/tu-meri-from-bang-bang"
    },
    {
        "title":"Superman (Tevar) - Wajid Ali",
        "url":"https://soundcloud.com/dh0kebaz/songspk-download-superman-tevar-2014-mp3-songs-mp3-sound-trackmp3-1"
    },
    {
        "title":"Salaam Namaste (Salaam Namaste) - Kunal Ganjawala",
        "url":"https://soundcloud.com/mario-holly/salaam-namaste"
    },
    {
        "title":"Pretty Woman (Kal Ho Na Ho) - Shankar-Ehsaan-Loy",
        "url":"https://soundcloud.com/shankarehsaanloyofficial/pretty-woman-from-kal-ho-naa"
    },
    {
        "title":"Main Jahaan Rahoon (Namastey London) - Rahat Fateh Ali Khan, Krishna Beuraa",
        "url":"https://soundcloud.com/rahat-fateh-ali-khan-official/main-jahaan-rahoon-from"
    },
    {
        "title":"Dance Pe Chance (Rab Ne Bana Di Jodi) - Sunidhi Chauhan, Labh Janjua",
        "url":"https://soundcloud.com/dhiya-alesha-al-zahsy/rab-ne-bana-di-jodi-dance-pe"
    },
    {
        "title":"Lucky Boy (Bachna Ae Haseeno) - Hard Kaur, Raja Hasan, Sunidhi Chauhan",
        "url":"https://soundcloud.com/abrar-hussain-563402260/bachna-ae-haseeno-lucky-boy"
    },
    {
        "title":"Allah Waariyan (Yaariyan) - Shafqat Amanat Ali",
        "url":"https://soundcloud.com/amrina-1/allah-waariyan"
    },
    {
        "title":"Kajra Re (Bunty Aur Babli) - Javed Ali, Shankar Mahadevan, Alisha Chinai",
        "url":"https://soundcloud.com/ab-haleem/kajra-re"
    },
    {
        "title":"Deewangi Deewangi (Om Shanti Om) - Rahul Saxena, Shaan, Sunidhi Chauhan, Shreya Ghoshal, Udit Narayan",
        "url":"https://soundcloud.com/selda-teksay/deewangi-deewangi-full-video"
    },
    // 100 ITEMS
    {
        "title":"Lucky Tu Lucky Me (Humpty Sharma Ki Dulhania) - Anushka Manchanda, Benny Dayal, Varun Dhawan",
        "url":"https://soundcloud.com/sachinjigarofficial/lucky-tu-lucky-me-from-humpty"
    },
    {
        "title":"Is Pal (Aaja Naachle) - Shreya Ghoshal, Sonu Nigam",
        "url":"https://soundcloud.com/ishita_ahmed/is-pal-mein-hu"
    },
    {
        "title":"Baatein Ye Kabhi Na (Khamoshiyan) - Arijit Singh",
        "url":"https://soundcloud.com/jeetgannguli/baatein-ye-kabhi-na-from"
    },
    {
        "title":"Whats Goin' On (Salaam Namaste) - Kunal Ganjawala, Sunidhi Chauhan",
        "url":"https://soundcloud.com/user-236813400/whats-going-on-salaam-namaste"
    },
    {
        "title":"Jeena Jeena (Badlapur) - Atif Aslam",
        "url":"https://soundcloud.com/sameed-sheikh/jeena-jeena-atif-aslam-ost-badlapur-sam-sheikh"
    },
    {
        "title":"Dhat Teri Ki (Gori Tere Pyaar Mein) - Vishal-Shekhar, Aditi Singh Sharma",
        "url":"https://soundcloud.com/vishalshekhar/dhat-teri-ki-from-gori-tere"
    },
    {
        "title":"Singh is King (Singh is King) - Snoop Dogg, RDB, Akshay Kumar",
        "url":"https://soundcloud.com/pgtnetus/snoopdogg-singhiskingzhdq2014mp4"
    },
    {
        "title":"Dhating Naach (Phata Poster Nikhla Hero) - Pritam Chakraborty",
        "url":"https://soundcloud.com/nakash-music/dhating-naach"
    },
    {
        "title":"Tum Tak (Raanjhanaa) - Javed Ali, Keerthi Sagathia, Pooja Vaidyanath",
        "url":"https://soundcloud.com/arrahmanofficial/tum-tak"
    },
    {
        "title":"Jee Karda (Badlapur) - Divya Kumar",
        "url":"https://soundcloud.com/farhan-shami/aaj-mera-jee-karda-mar-janiey-badlapur-varun-dhawan-huma-qureshi-yami-gautam-4songspk"
    },
    // 110 ITEMS
    {
        "title":"D Se Dance (Humpty Sharma Ki Dulhania) - Anushka Manchanda, Vishal Dadlani, Shalmali Kholgade",
        "url":"https://soundcloud.com/sachinjigarofficial/d-se-dance-from-humpty-sharma"
    },
    {
        "title":"Hasi (Hamari Adhuri Kahani) - Shreya Ghoshal",
        "url":"https://soundcloud.com/amimishraofficial/hasi-female-version"
    },
    {
        "title":"Namak (Omkara) - Rakesh Pandit, Rekha Bhardwaj",
        "url":"https://soundcloud.com/manjiritendulkar/namak-ishq-ka"
    },
    {
        "title":"Mit Jaaye Gum (Dum Maaro Dum) - Anushka Manchanda",
        "url":"https://soundcloud.com/burningdzire/mit-jaaye-gham-dum-maaro-dum"
    },
    {
        "title":"Teri Ore (Singh is King) - Shreya Ghoshal, Rahat Fateh Ali Khan",
        "url":"https://soundcloud.com/zain-s-butt/singh-is-kinng-hd-mp4"
    },
    {
        "title":"Ishq Shava (Jab Tak Hai Jaan) - Raghav, Shilpa Rao",
        "url":"https://soundcloud.com/captain-a7med/ishq-shava-shah-rukh-khan-katrina-kaif"
    },
    {
        "title":"O Re Piya (Aaja Nachle) - Rahat Fateh Ali Khan",
        "url":"https://soundcloud.com/redaiy/o-re-piya"
    },
    {
        "title":"Saree Ke Fall Sa (R...Rajkumar) - Nakash Aziz, Antara Mitra",
        "url":"https://soundcloud.com/hassamuddin70/saree-ke-fall-sa-r-rajkumar-by"
    },
    {
        "title":"Jiya Re (Jab Tak Hain Jaan) - Neeti Mohanh",
        "url":"https://soundcloud.com/sara-m-hassan-2/jiya-re"
    },
    {
        "title":"Ishq Hua (Aaja Nachle) - Shreya Ghoshal, Sonu Nigam",
        "url":"https://soundcloud.com/dua-nasir/ishq-hua"
    },
    // 120 ITEMS
    {
        "title":"Khwab Dekhe Sexy Lady (Race) - Monali Thakur, Neeraj Shridhar, Pritam Chakraborty",
        "url":"https://soundcloud.com/pritamchakraborty/khwab-dekhe-sexy-lady"
    },
    {
        "title":"Main Rang Sharbaton Ka (Phata Poster Nikhala Hero) - Atif Aslam, Chinmayi",
        "url":"https://soundcloud.com/arijitsinghmusic/main-rang-sharbaton-ka-1"
    },
    {
        "title":"Humnava (Hamari Adhuri Kahani) - Papon",
        "url":"https://soundcloud.com/mithoonofficial/humnava"
    },
    {
        "title":"Talli Hua (Singh is King) - Labh Janjua, Neeraj Shridhar, Pritam Chakraborty",
        "url":"https://soundcloud.com/ashhaad-khan/talle-hua-singh-is-king"
    },
    {
        "title":"Mehndi Hai Rachnewali (Zubeidaa) - Alka Yagnik",
        "url":"https://soundcloud.com/arrahmanofficial/mehndi-hai-rachnewali"
    },
    {
        "title":"Tooh (Gori Tere Pyaar Mein) - Mamta Sharma, Shruti Pathak, Mika Singh, Vishal Dadlani",
        "url":"https://soundcloud.com/vishalshekhar/tooh-from-gori-tere-pyaar-mein"
    },
    {
        "title":"Saturday Saturday (Humpty Sharma Ki Dulhania) - Indeep Bakshi, Badshah",
        "url":"https://soundcloud.com/sharibtoshi/saturday-saturday-from-humpty"
    },
    {
        "title":"Nagada Sang Dhol (Ram-Leela) - Osman Mir, Shreya Ghoshal",
        "url":"https://soundcloud.com/mody-mohamed-naseh/nagada-sang-dhol-full-song-goliyon-ki-rasleela-ram-leela-3"
    },
    {
        "title":"Aaja Nachle (Aaja Nachle) - Sunidhi Chauhan",
        "url":"https://soundcloud.com/youmna-kamal-7/aaja-nachle"
    },
    {
        "title":"Khamoshiyan (Khamoshiyan) - Arijit Singh",
        "url":"https://soundcloud.com/jeetgannguli/khamoshiyan-from-khamoshiyan"
    },
    // 130 ITEMS
    {
        "title":"Zara Zara Touch Me (Race) - Monali Thakur",
        "url":"https://soundcloud.com/rbmilan/zara-zara-touch-me-race-katrina-kaif-saif-ali-khan"
    },
    {
        "title":"My Dil Goes Mmmmmm (Saalam Namaste) - Gayatri Iyer, Shaan",
        "url":"https://soundcloud.com/marwa-el-harmill/my-dil-goes-mmmm"
    },
    {
        "title":"Show Me Your Jalwa (Aaja Nachle) - Richa Sharma, Salim Merchant, Kailash Kher",
        "url":"https://soundcloud.com/user-594277333/show-me-your-jalwa"
    },
    {
        "title":"Hungama Hogaya (Queen) - Arijit Singh, Asha Bhosle",
        "url":"https://soundcloud.com/madi2013-1/hungama-hogaya-queen-2014"
    },
    {
        "title":"Barso Re (Guru) - Uday Mazumdar, Shreya Ghoshal",
        "url":"https://soundcloud.com/arrahmanofficial/barso-re"
    },
    {
        "title":"Heer (Jab Tak Hain Jaan) - Harshdeep Kaur",
        "url":"https://soundcloud.com/syed-zamin-abbas-rizvi/heer-jab-tak-hai-jaan-ft"
    },
    {
        "title":"Jeene Laga Hoon (Ramaiya Vastavaiya) - Atif Aslam, Shreya Ghoshal",
        "url":"https://soundcloud.com/sachinjigarofficial/jeene-laga-hoon-from-ramaiya"
    },
    {
        "title":"Gandi Baat (R...Rajkumar) - Mika Singh, KP",
        "url":"https://soundcloud.com/mananbutt9/gandi-baat"
    },
    {
        "title":"Shera Di Kaum (Speedy Singhs) - Sarb Sembhi, Nav Sembhi, Ludacris, Nindy Kaur, Manj Musik",
        "url":"https://soundcloud.com/peter-joseph-2/shera-di-kaum-punjabi-speedy"
    },
    {
        "title":"Tenu Leke (Saalam-E-Ishq) - Sonu Nigam, Mahalakshmi Iyer",
        "url":"https://soundcloud.com/salman-khan-arab-fc/tenu-leke"
    }
    // 140 ITEMS

    //753
]
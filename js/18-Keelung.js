
// 全台縣市資料&內部a連結&氣象局資料網址
// src:氣象局資料網址
// href:內部a連結使用
let cityDataBass=[
        { city: "嘉義縣", number: "031", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-031?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./00-Chiayi.html' },
        { city: "新北市", number: "071", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-071?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./01-NewTaipei.html' },
        { city: "嘉義市", number: "059", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-059?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./02-ChiayiSM.html' },
        { city: "新竹縣", number: "011", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-011?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./03-Hsinchu.html' },
        { city: "新竹市", number: "055", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-055?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./04-HsinchuSM.html' },
        { city: "臺北市", number: "063", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./05-Taipei.html' },
        { city: "臺南市", number: "079", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-079?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./06-Tainan.html' },
        { city: "宜蘭縣", number: "003", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-003?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./07-Yilan.html' },
        { city: "苗栗縣", number: "015", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-015?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./08-Miaoli.html' },
        { city: "雲林縣", number: "027", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-027?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./09-Yunlin.html' },
        { city: "花蓮縣", number: "043", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-043?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./10-Hualien.html' },
        { city: "臺中市", number: "075", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-075?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./11-Taichung.html' },
        { city: "臺東縣", number: "039", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-039?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./12-Taitung.html' },
        { city: "桃園市", number: "007", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./13-TaoyuanSM.html' },
        { city: "南投縣", number: "023", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-023?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./14-Nantou.html' },
        { city: "高雄市", number: "067", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./15-Kaohsiung.html' },
        { city: "金門縣", number: "087", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-087?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./16-Kinmen.html' },
        { city: "屏東縣", number: "035", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-035?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./17-Pingtung.html' },
        { city: "基隆市", number: "051", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-051?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./18-Keelung.html' },
        { city: "澎湖縣", number: "047", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-047?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./19-Penghu.html' },
        { city: "彰化縣", number: "019", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-019?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./20-Changhua.html' },
        { city: "連江縣", number: "083", src: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-083?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D",href:'./21-Lienchiang.html' }];

// 接收資料的網址
let towbWeather = cityDataBass[18].src;

// GET request for remote image in node.js → 得到Json

axios({
    method: 'get',
    url: towbWeather,
    responseType: 'json'
})

    .then(res => {

        let data = {
            // 該縣市的所有鄉鎮(區)
            town: res.data.records.locations[0].location,

            // 目前顯示的縣市/鄉鎮資料，載入後預設值為第一個鄉鎮(區)
            input: {
                city: res.data.records.locations[0].locationsName,
                town: res.data.records.locations[0].location[0].locationName
            },
            cityData:cityDataBass
        };

        // 綁定Vue跟畫面
        let vm = new Vue({
            el: '#app',
            data: data,

            methods: {
                // 確認目前input被選擇的鄉鎮，並輸出成表
                checkTown() {
                    let townNow = [];

                    data.town.filter(e => {
                        if (e.locationName === data.input.town) {
                            townNow.push(e)
                        }
                    })

                    return townNow[0]
                },
                // 確認目前時段，0-12回傳上午，其他回傳下午
                dayOrNight() {
                    let timeNow = []

                    this.town[0].weatherElement[0].time.map(e => {
                        let time = new Date(e.startTime);
                        let hour = time.getHours()

                        if (hour >= 0 && hour < 12) {
                            timeNow.push('上午')
                        } else {
                            timeNow.push('下午')
                        }
                    })

                    return timeNow
                },
                // 確認日期為星期幾
                todayIs() {
                    let dayNow = [];
                    // 日期輸出轉大寫
                    let bigDay = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

                    this.town[0].weatherElement[0].time.filter((e, i, arr) => {
                        let time = new Date(e.startTime);
                        let day = time.getDay();

                        // 如果 i+1 存在
                        if (arr[i + 1]) {
                            let newTime = (new Date(arr[i + 1].startTime)).getDay();

                            // 如果此元素跟下一個元素的星期相同，輸出兩格表格
                            if (day === newTime) {
                                dayNow.push({ day: bigDay[day], colspan: 2 })
                                // 如果不同，且元素為陣列頭尾，輸出一格表格
                            } else if (e === arr[0] || e === arr[arr.length]) {
                                dayNow.push({ day: bigDay[day], colspan: 1 })
                                // 如果都不是，就不輸出(以避免相同的星期出現)
                            } else {
                            }
                        }
                    })
                    return dayNow;
                },
                // 判斷天氣型態，回傳IMG連結
                checkWeatherImg(e) {
                    if (e.indexOf('晴') > -1 && e.indexOf('雲') > -1 && e.indexOf('雨') > -1 && e.indexOf('雷') > -1) {
                        return "./img/sunstorm.png"
                    } else if (e.indexOf('晴') > -1 && e.indexOf('雲') > -1 && e.indexOf('雨') > -1) {
                        return "./img/sunrain.png"
                    } else if (e.indexOf('晴') > -1 && e.indexOf('雲') > -1) {
                        return "./img/cloudysun.png"
                    } else if (e.indexOf('雷') > -1 && e.indexOf('雨') > -1) {
                        return "./img/storm.png"
                    } else if (e.indexOf('雨') > -1) {
                        return "./img/rain.png"
                    } else if (e.indexOf('雲') > -1) {
                        return "./img/cloud.png"
                    } else if (e.indexOf('晴') > -1) {
                        return "./img/sun.png"
                    }
                },
                // 回傳目前時間
                checkTime() {
                    let time = new Date();
                    let bigDay = ['日', '一', '二', '三', '四', '五', '六'];
                    return `${time.getMonth() + 1}/${time.getDate()}(${bigDay[time.getDay()]}) ${time.getHours()}:${time.getMinutes()}`
                }
            }
        })

        // 點擊鄉鎮後，會切換data的input.town資訊
        function checkInput() {
            data.input.town = this.innerText;
        }
        
        document.querySelectorAll('#town-list-pc a').forEach(e => {
            e.addEventListener('click', checkInput)
        })

        // 點擊城市後，會轉跳到該城市的頁面
        function checkCityMb() {
            window.location.href=`${this.value}`;
        }


        let cityOpction = document.querySelector('#citys-mb select');
        cityOpction.addEventListener('change',checkCityMb);
        // ------------------------------------------//

    })

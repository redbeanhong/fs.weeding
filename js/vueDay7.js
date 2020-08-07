

// GET request for remote image in node.js → 得到Json
axios({
    method: 'get',
    url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D',
    responseType: 'json'
})

    .then(response => {
        // 建立Vue使用的data
        let data = {
            newData: response.data.records.location,
            place: [],
            input: {
                title: ['全部']
            }
        };

        // 建立locationName專用的data
        data.newData.forEach(e => {
            data.place.push(e.locationName)
        });

        // 綁定Vue跟畫面
        let vm = new Vue({
            el: '#app',
            data: data,

            computed: {
                // 輸出天氣小卡資料
                checkPlace() {
                    // 如果input是全部，就全部輸出
                    if (this.input.title[0] === '全部') {
                        return this.newData
                    } else {
                        // 否則就輸出input有勾選的項目
                        let city = [];
                        this.input.title.forEach(e => {
                            let nameCheck = e;
                            this.newData.forEach(e => {
                                if (e.locationName === nameCheck) {
                                    city.push(e)
                                }
                            })
                        });
                        return city
                    }
                }
            }
        })

        function checkInput() {
            let titles = data.input.title;

            titles.forEach(e => {
                if (titles.length > 1 && titles.indexOf('全部') !== -1) {
                    let index = titles.indexOf('全部');
                    titles.splice(index, 1)
                }
            })
        }

        function checkAll() {
            let titles = data.input.title;

            titles.forEach(e => {
                if (titles.length > 1 && titles.indexOf('全部') !== -1) {
                    titles.unshift('全部');
                    titles.splice(1)
                }
            })
        }

        let inputs = document.querySelectorAll('.inputs input');
        // inputs.forEach(e => e.addEventListener('change', checkInput))
        for (let i = 0; i < inputs.length; i++) {
            if (i > 0) {
                inputs[i].addEventListener('change', checkInput);
            } else {

                inputs[i].addEventListener('change', checkAll);
            }
        }
    })
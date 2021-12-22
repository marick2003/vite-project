

<template>
    <div class="main">
        <div class="" >
            <router-view></router-view>
        </div>
            <div>
        <div class="betList">
        <table class="t-1" id="printMe">
          <thead>
            <tr>
              <td colspan="3">
                <div class="title">排列五</div>
                <div class="info f12">
                  时间：{{ betListData.MaxBetTime }}<br />
                  会员：{{ betListData.Account }}<br />
                  编号：<span v-if="betListData.MaxSerialNo > 0">{{
                    betListData.MaxSerialNo
                  }}</span>
                </div>
              </td>
            </tr>
            <tr class="tc bg1">
              <td>号码</td>
              <td>赔率</td>
              <td>金额</td>
            </tr>
          </thead>
          <tbody :class="{ data_table_height: betListData.Bets == 0 }">
            <tr
              v-if="betListData.Bets && betListData.Bets.length != 0"
              v-for="item in betListData.Bets"
              :key="item"
              class="tc"
            >
              <td>{{ item.BetNoName }}</td>
              <td class="red">1:{{ item.Odds }}</td>
              <td>{{ item.BetMoney | filter_thousands }}</td>
            </tr>
            <tr
              v-if="betListData.Bets && betListData.Bets.length == 0"
              :class="{ data_table_height: betListData.Bets == 0 }"
            >
              <td colspan="3" class="tc">暂无数据!</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="tc">
              <td colspan="3" class="fb tfoot">
                <span>笔数：{{ betListData.BetCount }}</span
                ><span>总金额：{{ betListData.BetMoney }}</span>
              </td>
            </tr>
            <tr class="tc">
              <td colspan="3" class="fb tfoot"></td>
            </tr>
            <tr class="tc no-print">
              <td colspan="3" class="fb tfoot">
                <input
                  type="button"
                  value="清空"
                  class="btn white fn-clear mr10"
                 
                />
                <input
                  type="button"
                  value="截圖"
                  class="btn fn-screenshot mr10"
                 
                />
                <input
                  type="button"
                  value="打印"
                  class="btn fn-print"
                  v-print="printObj"
                  
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    </div>
</template>
<script>
import print from 'vue3-print-nb'
export default {
   data() {
        return {
        betListData: {
            "Account": "rickmb101",
            "IsPaused": false,
            "Credit": 60000000,
            "Balance": 59999990,
            "BetMoney": 10,
            "ShowMode": 0,
            "StoreName": "",
            "PeriodNo": 20211206132,
            "BetCount": 1,
            "MaxSerialNo": 2056078853002449,
            "MaxBetTime": "2021-12-06 10:56:08",
            "MaxPrintNo": 0,
            "Bets": [
                {
                    "BetId": 1425708,
                    "BetNo": 240210200,
                    "BetNoName": "1X2X",
                    "Odds": 97.9,
                    "BetMoney": 10
                }
            ],
            "PageIndex": 1,
            "PageCount": 1,
            "SubtotalBetMoney": 10
        },
        printObj: {
        id: "printMe",
        popTitle: "good print",
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
        beforeOpenCallback(vue) {
          vue.printLoading = true;
          console.log("打开之前");
        },
        openCallback(vue) {
          vue.printLoading = false;
          console.log("执行了打印");
        },
        closeCallback(vue) {
          console.log("关闭了打印工具");
        },
        clickMounted(vue) {
          console.log("click");
        },
      },
        }
        

    },
    directives: {
    print   
    }
  
}
</script>
<style>

html{
    height: 100%;
    overflow-y: hidden;
}
body{
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: Arial,sans-serif;
    height: 100%;
    overflow-y: hidden;
    min-width: 1700px;
    position: relative;
}
.main{

    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    top: 99px;
    bottom: 30px;

}
.footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 28px;
    background: #F7F7F7;
    border-top: 1px solid #CECFCE;
    border-bottom: 1px solid #B5C7E7;
    line-height: 28px;
}
#app {

}
iframe{
    height: 100%;
    width: 100%;
    vertical-align: top;
}



.bd {
  height: 100%;
  &.row {
    display: grid;
    grid-template-columns: 40% 60%;
  }
}
.betList {
  width:100%;
  max-width:300px;
  table {
    height: calc(100% - 212px);
    tbody {
      width: 100%;
      max-height: calc(100% - 405px);
      overflow-y: scroll;
      tr {

      }
    }
  }
  .data_table_height {
    height: 100%;
    td {
      border: 0;
    }
  }
  .title {
    color: #104b73;
    font-weight: bold;
    padding: 2px 0;
  }

  .t-1 {
    border: 2px solid #666;
  }
}
.betLack {
  table {
    height: calc(100% - 212px);
    tbody {
      min-height: 50%;
    }
  }
  .title {
    margin: 2px;
  }
  .tfoot {
    border-bottom: 0;
  }
}
.betDetail {
  position: fixed;
  width: 100%;
  bottom: 0;
  span {
    margin: 4px;
    vertical-align: middle;
  }
  .betBoxContainer {
    .betBox {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      box-sizing: border-box;
      width: 100%;
      grid-gap: 2px;
      li {
        background: #2c527f;
        display: block;
        text-align: center;
        line-height: 30px;
        color: #fff;
      }
    }
    input {
      padding: 0 5px;
    }
  }
}
.betSubmit {
  background: transparent;
  border: 0;
}

@media print {
  .no-print {
    visibility: hidden;
  }
}


.t-1 {
  border-collapse: collapse;
  width: 100%;
  background: #fff;
}

.t-1 tr.cancel {
  background-color: #dedede !important;
  text-decoration: line-through;
}

.t-1 tr.detail {
  cursor: pointer;
}

.t-1 tr .isprint {
  font-size: x-large;
  vertical-align: middle;
  text-decoration: none;
  display: inline-block;
}

.t-1 td, .t-1 th {
  border: 1px solid #8C9AAD;
  height: 22px;
  padding: 4px;
}

.t-1 td.bg-gray, .t-1 th.bg-gray {
  background: #e0e0e0;
}

.t-1 th {
  font-weight: bold;
  color: #35406d;
}

.t-1 .name {
  background: #dcf0fc;
}

.t-1 .bg1 td, .t-1 .bg1 th {
  background: #f3f2f7;
  color: #757575;
}

.t-1 .bg1 a:not(.red) {
  color: #757575;
}

.t-1 .bg2 td, .t-1 .bg2 th {
  background: #dcf0fd;
}

.t-1 .bg-gray td, .t-1 .bg-gray th {
  background: #e0e0e0;
}

.t-1 tfoot td {
  background: #e6e6fa;
}

.t-1 .hover tr:hover td, .t-1 .hover tr:hover th {
  background-color: #FFC114;
}
</style>

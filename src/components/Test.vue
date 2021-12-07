<template>
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
</template>
<script>

</script>
<style scoped>


</style>
<template>
    <div id="report" class="content">


        <div class="main_top">


            <el-date-picker
                    v-model="start_time"
                    type="date"
                    placeholder="选择日期">
            </el-date-picker>

            -

            <el-date-picker
                    v-model="end_time"
                    type="date"
                    placeholder="选择日期">
            </el-date-picker>

            <el-button type="primary">搜索</el-button>

        </div>


        <!-- 内容区域 -->

        <table class="electron-table">
            <tr>
                <th>标题/地址</th>
                <th width="100">舆情类型</th>
                <th width="100">舆情关键词</th>
                <th width="100">舆情网站</th>
                <th width="200">发现时间</th>
                <th width="200">帖子时间</th>
            </tr>
            <tr v-for="(item, index) in list" :key="index">
                <td align="left">
                    <a :href="item.href" @click="open($event, item.href)">{{item.title}}</a>
                </td>
                <td align="center">
                    <span class="red">{{item.type}}</span>
                </td>
                <td align="center">{{item.keywords}}</td>
                <td align="center">{{item.site}}</td>
                <td align="center">{{item.start_time}}</td>
                <td align="center">{{item.end_time}}</td>
            </tr>
        </table>

        <div class="page">


            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="pageChange($event)"
                    :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'report',
        data() {
            return {
                start_time: '',
                end_time: '',
                list: [
                    {title: '大庆6个月拘留467名“马路杀手1”', href: 'http://www.baidu.com', type: '负面消息', keywords: '油田', site: '油田信息港', start_time: '2014-07-21 16:00:01', end_time: '1970-01-01 08:00:00'},
                    {title: '大庆6个月拘留467名“马路杀手2”', href: 'http://www.google.com', type: '负面消息', keywords: '油田', site: '油田信息港', start_time: '2014-07-21 16:00:01', end_time: '1970-01-01 08:00:00'},
                    {title: '大庆6个月拘留467名“马路杀手3”', href: 'http://www.sina.com', type: '负面消息', keywords: '油田', site: '油田信息港', start_time: '2014-07-21 16:00:01', end_time: '1970-01-01 08:00:00'},
                    {title: '大庆6个月拘留467名“马路杀手4”', href: 'http://www.163.com', type: '负面消息', keywords: '油田', site: '油田信息港', start_time: '2014-07-21 16:00:01', end_time: '1970-01-01 08:00:00'},
                ]
            }
        },

        methods: {
            pageChange(e) {
                console.log(e);
            },
            open(e, href) {
                e.preventDefault()
                this.$electron.shell.openExternal(href)
            }
        }
    }
</script>

<style lang="scss">


</style>

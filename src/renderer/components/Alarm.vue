<template>
    <div id="alarm" class="content">

        <div class="input_list">
            <ul>
                <li><span>报警提醒电话：</span>
                    <el-input v-model="alarm.tel" placeholder="请输入内容"></el-input>
                </li>
                <li><span>报警提醒邮箱：</span>
                    <el-input v-model="alarm.email" placeholder="请输入内容"></el-input>
                </li>
            </ul>

            <el-button type="primary" class="save" @click="saveAlarm()">保存</el-button>
        </div>
    </div>
</template>

<script>

    //引入tools模块
    import tools from '../model/tools.js';

    export default {
        name: 'alarm',

        data() {
            return {
                alarm: {}
            }

        },

        methods: {
            getAlarmList() {

            },
            saveAlarm() {

            }
        },
        mounted() {
            //获取舆情报警信息
            this.getAlarmList();
        }
    }
</script>

<style lang="scss">

    #alarm {
        border: 1px solid #eee;
        padding: 10px;
        width: 100%;

        ul {
            list-style-type: none;

            li {

                display: flex;

                padding: 10px 0;
                span {
                    display: inline-block;
                    width: 150px;
                    height: 40px;
                    line-height: 40px;
                    color: #666;
                }
                input {
                    flex: 1;
                }
            }
        }

        .save {
            float: right;
            margin-right: 10px;
        }
    }

</style>

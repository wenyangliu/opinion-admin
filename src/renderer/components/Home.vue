<template>
    <div id="home" class="content">

        <div class="main_top">
            <div class="top_charts">
                <div class="pie_charts">
                    <ve-pie :data="pieData"></ve-pie>
                </div>
                <div class="histogram_charts">
                    <ve-histogram :data="histogramData"></ve-histogram>
                </div>
            </div>
        </div>

        <div class="line_charts">
            <ve-line :data="lineData"></ve-line>
        </div>
        <!-- 登录页面 -->

        <el-dialog title="登录" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false"
                   :center="true" :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item>
                    <el-input v-model="userinfo.username" placeholder="用户名"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-input v-model="userinfo.password" placeholder="密码"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button style="width:80%" type="primary" @click="doLogin()">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    //引入tools模块
    import tools from '../model/tools.js';

    export default {
        name: 'home',
        data() {
            return {
                dialogFormVisible: false,
                userinfo: {},
                pieData: {
                    columns: ['关键词', '数量'],
                    rows: [
                        {'关键词': '腾讯', '数量': 1393},
                        {'关键词': '阿里', '数量': 3530},
                        {'关键词': '支付宝', '数量': 2923},
                        {'关键词': '蚂蚁花呗', '数量': 1723},
                        {'关键词': '腾讯云', '数量': 3792},
                        {'关键词': '阿里云', '数量': 4593}
                    ]
                },
                histogramData: {
                    columns: ['关键词', '全面', '负面'],
                    rows: [
                        {'关键词': '腾讯', '全面': 1393, '负面': 393},
                        {'关键词': '阿里', '全面': 3530, '负面': 193},
                        {'关键词': '支付宝', '全面': 2923, '负面': 93},
                    ]
                },
                lineData: {
                    columns: ['日期', '阿里', '腾讯', '百度'],
                    rows: [
                        {'日期': '03-08', '阿里': 1393, '腾讯': 1393, '百度': 1393},
                        {'日期': '03-09', '阿里': 3530, '腾讯': 2393, '百度': 3393},
                        {'日期': '03-10', '阿里': 2923, '腾讯': 1693, '百度': 3993},
                        {'日期': '03-11', '阿里': 1723, '腾讯': 3393, '百度': 4393},
                        {'日期': '03-12', '阿里': 3792, '腾讯': 4393, '百度': 5393},
                        {'日期': '03-13', '阿里': 4593, '腾讯': 5393, '百度': 6393}
                    ]
                }
            }
        },
        //刚加载页面的时候
        beforeMount() {
            //判断用户有没有登录
            const userinfo = tools.storage.get('userinfo')
            this.dialogFormVisible = !userinfo
        },
        methods: {
            doLogin() {
                //请求api接口实现登录
                if (this.userinfo.username && this.userinfo.password) {
                    this.$http.post(tools.config.apiUrl + '/api/login', {
                        username: this.userinfo.username,
                        password: this.userinfo.password
                    })
                        .then((response) => {
                            console.log(response)
                            tools.storage.set('userinfo', response.data.user)
                            tools.storage.set('token', response.data.access_token)
                            this.dialogFormVisible = false
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                } else {
                    this.$message({
                        message: '用户名密码不能为空',
                        type: 'warning'
                    });
                }
            }
        }
    }
</script>

<style lang="scss">
    .top_charts {
        display: flex;
        .pie_charts, .histogram_charts {
            width: 50%;
        }
    }
</style>

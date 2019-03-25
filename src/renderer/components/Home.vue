<template>
    <div id="home" class="content">

        <div class="main_top">
            <div class="top_charts">
            </div>
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
                userinfo: {}
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

</style>

<template>
    <div id="keywords" class="content">


        <!-- 增加关键词 -->
        <div class="main_top">
            <el-button type="primary" @click="dialogFormVisible = true">增加关键词</el-button>

            <el-dialog title="增加关键词" :visible.sync="dialogFormVisible">
                <el-form>
                    <el-form-item label="必须包含关键词" label-width="120px">
                        <el-input v-model="addForm.keyword" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="可包含关键词" label-width="120px">
                        <el-input v-model="addForm.may_keyword" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="不包含关键词" label-width="120px">
                        <el-input v-model="addForm.no_keyword" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="监控评率" label-width="120px">
                        <el-input v-model="addForm.frequency" auto-complete="off"></el-input>
                    </el-form-item>

                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="doAddKeywords()">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <!-- 增加关键词完成 -->

        <!-- 关键词列表开始 -->

        <table class="electron-table">
            <tr>

                <th>必须包含词</th>
                <th>可包含词</th>
                <th>不包含词</th>
                <th width="60">监控频率</th>
                <th width="100">操作</th>
            </tr>
            <tr v-for="(item,key) in list" :key="key">

                <!--<td align="center"></td>-->
                <td align="center">{{item.keyword}}</td>
                <td align="center">{{item.may_keyword}}</td>
                <td align="center">
                    {{item.no_keyword}}
                </td>
                <td align="center">
                    {{item.frequency}}

                </td>
                <td align="center">

                    <span class="blue" @click="editKeywords(item.id)">编辑</span>　　

                    　

                    <span class="blue" @click="removeKeywords(item.id)">删除</span>　


                </td>
            </tr>

        </table>

        <!-- 关键词列表完成 -->
    </div>
</template>

<script>

    //引入tools模块

    import tools from '../model/tools.js';

    export default {
        name: 'keywords',

        data() {

            return {
                dialogFormVisible: false,
                eidtDialogVisible: false, /*编辑的数据*/
                addForm: {},
                editForm: {}, /*修改的数据*/
                list: []
            }
        },

        methods: {
            doAddKeywords() {

                this.$http.post(tools.config.apiUrl + '/keywords', {
                    keyword: this.addForm.keyword,
                    may_keyword: this.addForm.may_keyword,
                    no_keyword: this.addForm.no_keyword,
                    frequency: this.addForm.frequency
                })
                    .then((response) => {
                        console.log(response);
                        this.dialogFormVisible = false;
                        //增加完成重新获取数据
                        this.getKeywordsList();
                    })
                    .catch((error) => {
                        this.$message({
                            message: error,
                            type: 'warning'
                        });
                    });
            },

            getKeywordsList() {

                const api = tools.config.apiUrl + '/keywords'
                this.$http.get(api)
                    .then((response) => {
                        console.log(response);
                        this.list = response.data
                    })
                    .catch((error) => {
                        this.$message({
                            message: error,
                            type: 'warning'
                        });
                    });


            },
            editKeywords(id) {
                this.eidtDialogVisible = true;
                //请求api接口获取要编辑的数据
                const api = tools.config.apiUrl + '/keywords/' + id
                this.$http.get(api)
                    .then((response) => {
                        // console.log(response);
                        this.editForm = response.data.result;
                    })
                    .catch((error) => {
                        this.$message({
                            message: error,
                            type: 'warning'
                        });
                    });


            },
            //执行编辑操作
            doEditKeywords() {

            },
            removeKeywords(id) {
            }

        },
        mounted() {
            this.getKeywordsList()
        }
    }
</script>

<style lang="scss">
    .blue {

        color: blue;
        cursor: pointer;
    }
</style>

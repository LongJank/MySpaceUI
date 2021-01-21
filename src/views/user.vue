<template>
    <div class="yslg-contentMain">
        <el-table :data="tableData">
            <el-table-column prop="id" label="用户ID">
            </el-table-column>
            <el-table-column prop="userNo" label="用户编号">
            </el-table-column>
            <el-table-column prop="userName" label="用户名">
            </el-table-column>
            <el-table-column prop="email" label="邮箱">
            </el-table-column>
            <el-table-column prop="status" label="状态">
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="mini" @click="updateUserMethon(scope.row)">编辑
                    </el-button>
                    <el-button size="mini" type="primary" @click="lookPassword(scope.row)">查看密码</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="编辑用户" :visible.sync="updateUser">
            <el-form :model="form" label-width="100px" class="yslg-form">
                <el-form-item label="用户编号">
                    <el-input v-model="form.userNo" autocomplete="off" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="form.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="form.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="form.status" placeholder="请选择用户状态">
                        <el-option label="启用" value="open"></el-option>
                        <el-option label="停用" value="close"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="updateUser = false">取 消</el-button>
                <el-button type="primary" @click="onSubmitUpdate()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>


<script>
    import axios from "axios";
    import api from "../router/api.js";
    export default {
        data() {
            return {
                tableData: [],
                updateUser: false,
                form: {
                    userId: '',
                    userNo: '',
                    userName: '',
                    email: '',
                    status: ''
                },
            }
        },
        mounted() {
            this.getTableDate()
        },
        methods: {
            getTableDate() {
                let url = api.API + "/user/getUserList";
                axios.get(url).then((reponse) => {
                    this.tableData = reponse.data.result;
                })
            },
            lookPassword(row) {
                console.log(row);
            },
            onSubmitUpdate() {
                let url = api.API + "/user/updateUser";
                let params =  {
                    userId: this.form.userId,
                    userName: this.form.userName,
                    email: this.form.email,
                    status: this.form.status == "open" ? 1 : 2
                }
                axios.post(url, params).then((response) => {
                    if (response.data.errorCode == 200) {
                        this.$message.success('修改成功');
                        this.updateUser = false;
                        this.getTableDate();
                    } else {
                        this.$message.error(response.data.message);
                    }
                })
            },
            updateUserMethon(row) {
                this.updateUser = true;
                this.form.userId = row.id;
                this.form.userNo = row.userNo;
                this.form.userName = row.userName;
                this.form.email = row.email;
                this.form.status = row.status == "启用" ? 'open': 'close';
            }
        }
    }
</script>
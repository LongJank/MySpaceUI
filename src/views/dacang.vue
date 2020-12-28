<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="6">
          <el-form-item label="订单编号">
            <el-input
              v-model="form.orderCode"
              placeholder="订单编号"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="发货单号">
            <el-input
              v-model="form.deliveryOrderCode"
              placeholder="发货单号"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="拣货单号">
            <el-input
              v-model="form.pickOrderCode"
              placeholder="拣货单号"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="出库单号">
            <el-input
              v-model="form.outOrderCode"
              placeholder="出库单号"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="配送单号">
            <el-input
              v-model="form.distributionOrderCode"
              placeholder="配送单号"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="订单流程状态">
            <el-select v-model="form.processStatus" placeholder="全部">
              <el-option label="全部" value="quanbu"></el-option>
              <el-option label="已取消" value="quxiao"></el-option>
              <el-option label="未生成拣货单" value="wei"></el-option>
              <el-option label="已生成拣货单" value="yi"></el-option>
              <el-option label="已出库" value="chu"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="拣货差异状态">
            <el-select v-model="form.pickStatus" placeholder="全部">
              <el-option label="全部" value="quanbu"></el-option>
              <el-option label="异常" value="shanghai"></el-option>
              <el-option label="正常" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="实发差异状态">
            <el-select v-model="form.outStatus" placeholder="全部">
              <el-option label="全部" value="quanbu"></el-option>
              <el-option label="异常" value="shanghai"></el-option>
              <el-option label="正常" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="送货日期" prop="orderTime">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择时间"
                v-model="form.date2"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
            <el-button type="primary" @click="onRety">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData" height="800" border style="width: 100%">
      <el-table-column prop="storeName" label="客户名称" width="180">
      </el-table-column>
      <el-table-column prop="storeCode" label="客户编码" width="180">
      </el-table-column>
      <el-table-column prop="orderTime" label="送货日期"> </el-table-column>
      <el-table-column prop="orderCode" label="订单编号"> </el-table-column>
      <el-table-column prop="deliveryOrderCode" label="发货单号">
      </el-table-column>
      <el-table-column prop="pickOrderCode" label="拣货单号"> </el-table-column>
      <el-table-column prop="outOrderCode" label="出库单号"> </el-table-column>
      <el-table-column prop="distributionOrderCode" label="配送单号">
      </el-table-column>
      <el-table-column prop="processStatus" label="订单流程状态">
      </el-table-column>
      <el-table-column prop="pickStatus" label="拣货差异状态">
      </el-table-column>
      <el-table-column prop="outStatus" label="实发差异状态"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间"> </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        orderCode: "",
        deliveryOrderCode: "",
        pickOrderCode: "",
        outOrderCode: "",
        distributionOrderCode: "",
        processStatus: "",
        pickStatus: "",
        outStatus: "",
        date1: "",
        date2: "",
      },
      tableData: [
        {
          storeName: "南丹店",
          storeCode: "10001",
          orderTime: "2016-05-03",
          orderCode: "899898989898983213",
          deliveryOrderCode: "FH10001113213131",
          pickOrderCode:
            "JH100020323123123130,JH100020323123123130,JH100020323123123130,JH100020323123123130",
          outOrderCode: "CK10032312313131020",
          distributionOrderCode: "PS100321312312312310",
          processStatus: "已生成拣货单",
          pickStatus: "正常",
          outStatus: "异常",
          createTime: "2020-12-25 04:10:10",
        },
        {
          storeName: "南丹店",
          storeCode: "10001",
          orderTime: "2016-05-03",
          orderCode: "899898989898983213",
          deliveryOrderCode: "FH10001113213131",
          pickOrderCode:
            "JH100020323123123130,JH100020323123123130,JH100020323123123130,JH100020323123123130",
          outOrderCode: "CK10032312313131020",
          distributionOrderCode: "PS100321312312312310",
          processStatus: "已生成拣货单",
          pickStatus: "正常",
          outStatus: "异常",
          createTime: "2020-12-25 04:10:10",
        },
        {
          storeName: "南丹店",
          storeCode: "10001",
          orderTime: "2016-05-03",
          orderCode: "899898989898983213",
          deliveryOrderCode: "FH10001113213131",
          pickOrderCode:
            "JH100020323123123130,JH100020323123123130,JH100020323123123130,JH100020323123123130",
          outOrderCode: "CK10032312313131020",
          distributionOrderCode: "PS100321312312312310",
          processStatus: "已生成拣货单",
          pickStatus: "正常",
          outStatus: "异常",
          createTime: "2020-12-25 04:10:10",
        },
        {
          storeName: "南丹店",
          storeCode: "10001",
          orderTime: "2016-05-03",
          orderCode: "899898989898983213",
          deliveryOrderCode: "FH10001113213131",
          pickOrderCode:
            "JH100020323123123130,JH100020323123123130,JH100020323123123130,JH100020323123123130",
          outOrderCode: "CK10032312313131020",
          distributionOrderCode: "PS100321312312312310",
          processStatus: "已生成拣货单",
          pickStatus: "正常",
          outStatus: "异常",
          createTime: "2020-12-25 04:10:10",
        },
        {
          storeName: "南丹店",
          storeCode: "10001",
          orderTime: "2016-05-03",
          orderCode: "899898989898983213",
          deliveryOrderCode: "FH10001113213131",
          pickOrderCode:
            "JH100020323123123130,JH100020323123123130,JH100020323123123130,JH100020323123123130",
          outOrderCode: "CK10032312313131020",
          distributionOrderCode: "PS100321312312312310",
          processStatus: "已生成拣货单",
          pickStatus: "正常",
          outStatus: "异常",
          createTime: "2020-12-25 04:10:10",
        },
        {
          storeName: "南丹店",
          storeCode: "10001",
          orderTime: "2016-05-03",
          orderCode: "899898989898983213",
          deliveryOrderCode: "FH10001113213131",
          pickOrderCode:
            "JH100020323123123130,JH100020323123123130,JH100020323123123130,JH100020323123123130",
          outOrderCode: "CK10032312313131020",
          distributionOrderCode: "PS100321312312312310",
          processStatus: "已生成拣货单",
          pickStatus: "正常",
          outStatus: "异常",
          createTime: "2020-12-25 04:10:10",
        },
        {
          storeName: "南丹店",
          storeCode: "10001",
          orderTime: "2016-05-03",
          orderCode: "899898989898983213",
          deliveryOrderCode: "FH10001113213131",
          pickOrderCode:
            "JH100020323123123130,JH100020323123123130,JH100020323123123130,JH100020323123123130",
          outOrderCode: "CK10032312313131020",
          distributionOrderCode: "PS100321312312312310",
          processStatus: "已生成拣货单",
          pickStatus: "正常",
          outStatus: "异常",
          createTime: "2020-12-25 04:10:10",
        },
        {
          storeName: "南丹店",
          storeCode: "10001",
          orderTime: "2016-05-03",
          orderCode: "899898989898983213",
          deliveryOrderCode: "FH10001113213131",
          pickOrderCode:
            "JH100020323123123130,JH100020323123123130,JH100020323123123130,JH100020323123123130",
          outOrderCode: "CK10032312313131020",
          distributionOrderCode: "PS100321312312312310",
          processStatus: "已生成拣货单",
          pickStatus: "正常",
          outStatus: "异常",
          createTime: "2020-12-25 04:10:10",
        },
        {
          storeName: "南丹店",
          storeCode: "10001",
          orderTime: "2016-05-03",
          orderCode: "899898989898983213",
          deliveryOrderCode: "FH10001113213131",
          pickOrderCode:
            "JH100020323123123130,JH100020323123123130,JH100020323123123130,JH100020323123123130",
          outOrderCode: "CK10032312313131020",
          distributionOrderCode: "PS100321312312312310",
          processStatus: "已生成拣货单",
          pickStatus: "正常",
          outStatus: "异常",
          createTime: "2020-12-25 04:10:10",
        },
        {
          storeName: "南丹店",
          storeCode: "10001",
          orderTime: "2016-05-03",
          orderCode: "899898989898983213",
          deliveryOrderCode: "FH10001113213131",
          pickOrderCode:
            "JH100020323123123130,JH100020323123123130,JH100020323123123130,JH100020323123123130",
          outOrderCode: "CK10032312313131020",
          distributionOrderCode: "PS100321312312312310",
          processStatus: "已生成拣货单",
          pickStatus: "正常",
          outStatus: "异常",
          createTime: "2020-12-25 04:10:10",
        },
        {
          storeName: "南丹店",
          storeCode: "10001",
          orderTime: "2016-05-03",
          orderCode: "899898989898983213",
          deliveryOrderCode: "FH10001113213131",
          pickOrderCode:
            "JH100020323123123130,JH100020323123123130,JH100020323123123130,JH100020323123123130",
          outOrderCode: "CK10032312313131020",
          distributionOrderCode: "PS100321312312312310",
          processStatus: "已生成拣货单",
          pickStatus: "正常",
          outStatus: "异常",
          createTime: "2020-12-25 04:10:10",
        },
      ],
      rules: {
        orderTime: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
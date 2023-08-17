const fs = require("fs");
const path = require("path");

// 文件路径
const dirPath = "path/to";
// 拼接 文件路径 和 文件名
const filePath = path.join(dirPath, "file.vue");

// search：1:搜索项;
// type：1:input;2:选择;3:日期;
const data = [
    { search: 1, type: 1, field: "work_order", name: "工单号" },
    { search: 1, type: 1, field: "seq_no", name: "工单序列号" },
    {
        search: 0,
        type: 1,
        field: "orignal_material_number",
        name: "原缆物料号",
    },
    { search: 1, type: 3, field: "start_datetime", name: "作业开始时间" },
    { search: 1, type: 3, field: "end_datetime", name: "作业结束时间" },
    { search: 0, type: 1, field: "workbin", name: "料箱号" },
    {
        search: 0,
        type: 1,
        field: "assembly_bench_number",
        name: "装配工作台编号",
    },
    { search: 1, type: 1, field: "operator", name: "操作者" },
];

// 文件内容
let content = `
<template>
  <div class="app-container">

    <!-- 搜索工作栏 -->
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="auto">
    ${data
        .map((item) => {
            if (item.search == 1) {
                if (item.type == 1) {
                    return `
      <el-form-item label="${item.name}：" prop="${item.field}">
        <el-input v-model="queryParams.${item.field}" placeholder="请输入${item.name}" clearable @keyup.enter.native="handleQuery"/>
      </el-form-item>
                `;
                } else if (item.type == 2) {
                    return `
      <el-form-item label="${item.name}：" prop="${item.field}">
        <el-select v-model="queryParams.${item.field}" placeholder="${item.name}" clearable>
          <el-option v-for="dict in statusDictDatas" :key="parseInt(dict.value)" :label="dict.label" :value="parseInt(dict.value)"/>
        </el-select>
      </el-form-item>
                `;
                } else if (item.type == 3) {
                    return `
      <el-form-item label="${item.name}" prop="${item.field}">
        <el-date-picker v-model="queryParams.${item.field}" style="width: 240px" value-format="yyyy-MM-dd HH:mm:ss" type="daterange"
                        range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['00:00:00', '23:59:59']" />
      </el-form-item>
                `;
                }
            }
        })
        .join("")}

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 操作工具栏 -->
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button type="primary" plain icon="el-icon-plus" size="mini" @click="handleAdd"
                  v-hasPermi="['tasc:cable-assembly-bench:create']">新增</el-button>
      </el-col>

      <el-col :span="1.5">
        <el-button type="primary" plain icon="el-icon-edit" size="mini" @click="handleUpdate(rowInfo)"
                  v-hasPermi="['tasc:cable-assembly-bench:update']" :disabled="!radio">修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="danger" plain icon="el-icon-edit" size="mini" @click="handleDelete(rowInfo)"
                  v-hasPermi="['tasc:cable-assembly-bench:delete']" :disabled="!radio">删除</el-button>
      </el-col>

      <el-col :span="1.5">
        <el-button type="warning" plain icon="el-icon-download" size="mini" @click="handleExport" :loading="exportLoading"
                  v-hasPermi="['tasc:cable-assembly-bench:export']">导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList" :columns="columns"></right-toolbar>
    </el-row>

    <!-- 列表 -->
    <el-table v-loading="loading" :data="list" @row-click="selectRow">
      <el-table-column label="单选" width="50" align="center" fixed>
        <template slot-scope="scope">
          <el-radio
            v-model="radio"
            :label="scope.row.id"
            @change.native.prevent="changeRadio(scope.row)"
          >{{ '' }}</el-radio>
        </template>
      </el-table-column>

      ${data
          .map((item, index) => {
              if (item.type == 1) {
                  return `
      <el-table-column label="${item.name}" align="center" prop="${item.field}" v-if="columns[${index}].visible"  />
`;
              } else if (item.type == 2) {
                  return `
      <el-table-column prop="${item.field}" label="${item.name}" v-if="columns[${index}].visible" width="80">
        <template v-slot="scope">
          <dict-tag :type="DICT_TYPE.COMMON_STATUS" :value="scope.row.${item.field}"/>
        </template>
      </el-table-column>
`;
              } else if (item.type == 3) {
                  return `
      <el-table-column label="${item.name}" align="center" prop="${item.field}" v-if="columns[${index}].visible" width="180">
        <template v-slot="scope">
          <span>{{ parseTime(scope.row.${item.field}) }}</span>
        </template>
      </el-table-column>
`;
              }
          })
          .join("")}

    </el-table>
    <!-- 分页组件 -->
    <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNo" :limit.sync="queryParams.pageSize"
                @pagination="getList"/>

    <!-- 对话框(添加 / 修改) -->
    <el-dialog :title="title" :visible.sync="open" width="500px" v-dialogDrag append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="auto">
      ${data
          .map((item, index) => {
              if (item.type == 1) {
                  return `
        <el-form-item label="${item.name}：" prop="${item.field}">
          <el-input v-model="form.${item.field}" placeholder="请输入${item.name}" />
        </el-form-item>
`;
              } else if (item.type == 2) {
                  return `
        <el-form-item label="${item.name}" prop="${item.field}">
          <el-select v-model="form.${item.field}" placeholder="请选择${item.name}">
            <el-option v-for="dict in this.getDictDatas(DICT_TYPE.SYSTEM_NOTIFY_TEMPLATE_TYPE)"
                      :key="dict.value" :label="dict.label" :value="parseInt(dict.value)" />
          </el-select>
        </el-form-item>
`;
              } else if (item.type == 3) {
                  return `

`;
              }
          })
          .join("")}
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createCableAssemblyBench, updateCableAssemblyBench, deleteCableAssemblyBench, getCableAssemblyBench, getCableAssemblyBenchPage, exportCableAssemblyBenchExcel } from "@/api/tasc/cableAssemblyBench";
import {DICT_TYPE, getDictDatas} from "@/utils/dict";
export default {
  name: "CableAssemblyBench",
  components: {
  },
  data() {
    return {
      //单选
      radio: false,
      //单选行数据
      rowInfo: {},
      // 遮罩层
      loading: true,
      // 导出遮罩层
      exportLoading: false,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 信息列表
      list: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNo: 1,
        pageSize: 10,
        ${data
            .map((item) => {
                if (item.search == 1) {
                    return `${item.field}: null,
        `;
                }
            })
            .join("")}
      },
      // 表单参数
      form: {},
      // 列信息
      columns: [
        ${data
            .map((item, index) => {
                return `{ key: ${index}, label: \`${item.name}\`, visible: true },
        `;
            })
            .join("")}
      ],
      // 表单校验
      rules: {
        ${data
            .map((item, index) => {
                if (item.type == 1) {
                    return `
        ${item.field}: [
          { required: true, message: "${item.name}不能为空", trigger: "blur" },
        ],
        `;
                } else if (item.type == 2) {
                    return `
        ${item.field}: [
          { required: true, message: '请选择${item.name}', trigger: 'change' },
        ],
        `;
                } else if (item.type == 3) {
                    return `
        ${item.field}: [
          { type: 'date', required: true, message: '请选择${item.name}', trigger: 'change' },
        ],
`;
                }
            })
            .join("")}
      },
      // 数据字典
      statusDictDatas: getDictDatas(DICT_TYPE.COMMON_STATUS)
    };
  },
  created() {
    // this.getList();
    this.loading = false;
    this.list = [
      {
        id:1,
        assembly_bench_number:"1-1",
        product_model:"15169979;15169978;15169980"
      }
    ]
    this.total = 2
  },
  methods: {
    /** 单选 */
    changeRadio(row) {
      this.radio = row.id;
      this.rowInfo = row;
      console.log(this.radio)
    },
    /** 行选 */
    selectRow(row,col,e) {
      if (col.label == "单选") {
        return;
      }
      this.changeRadio(row);
    },
    /** 查询列表 */
    getList() {
      this.loading = true;
      // 执行查询
      getCableAssemblyBenchPage(this.queryParams).then(response => {
        this.list = response.data.list;
        this.total = response.data.total;
        this.loading = false;
      });
    },
    /** 取消按钮 */
    cancel() {
      this.open = false;
      this.reset();
    },
    /** 表单重置 */
    reset() {
      this.form = {
        id: undefined,
        ${data
            .map((item) => {
                return `${item.field}: undefined,
        `;
            })
            .join("")}
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNo = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id;
      getCableAssemblyBench(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (!valid) {
          return;
        }
        // 修改的提交
        if (this.form.id != null) {
          updateCableAssemblyBench(this.form).then(response => {
            this.$modal.msgSuccess("修改成功");
            this.open = false;
            this.getList();
          });
          return;
        }
        // 添加的提交
        createCableAssemblyBench(this.form).then(response => {
          this.$modal.msgSuccess("新增成功");
          this.open = false;
          this.getList();
        });
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const id = row.id;
      this.$modal.confirm('是否确认删除信息编号为"' + id + '"的数据项?').then(function() {
          return deleteCableAssemblyBench(id);
        }).then(() => {
          this.getList();
          this.$modal.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      // 处理查询参数
      let params = {...this.queryParams};
      params.pageNo = undefined;
      params.pageSize = undefined;
      this.$modal.confirm('是否确认导出所有信息数据项?').then(() => {
          this.exportLoading = true;
          return exportCableAssemblyBenchExcel(params);
        }).then(response => {
          this.$download.excel(response, '信息.xls');
          this.exportLoading = false;
        }).catch(() => {});
    }
  }
};
</script>

<style scoped lang="scss">
</style>
`;

// 检测文件夹是否存在，如不存在则递归创建
fs.mkdirSync(dirPath, { recursive: true });

// 写入文件
fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("文件已成功生成！");
});

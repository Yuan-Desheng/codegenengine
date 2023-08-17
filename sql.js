const fs = require("fs");
const path = require("path");

// 文件路径
const dirPath = "path/to";
// 拼接 文件路径 和 文件名
const filePath = path.join(dirPath, "file.vue");

// search：1:搜索项;
// type：1:input;2:选择;3:日期;

let content = '';

for (let seq_no = 1; seq_no < 20; seq_no++) {

    let id = 200 + seq_no;
    let work_order = 20230817;

    // 文件内容
    let template = `
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    \t[dbo].[tasc_cable_work_order_pool] (
    \t[id],
    \t[work_order],
    \t[seq_no], 
    \t[work_center], 
    \t[original_material_number], 
    \t[priority], 
    \t[length], 
    \t[quantity], 
    \t[delivery_date], 
    \t[product_model], 
    \t[work_order_desc], 
    \t[file_id], 
    \t[cable_source], 
    \t[cable_number], 
    \t[work_bin], 
    \t[assembly_bench_id], 
    \t[step_id], 
    \t[wms_status], 
    \t[is_close], 
    \t[deleted], 
    \t[create_time], 
    \t[update_time], 
    \t[creator], 
    \t[updater], 
    \t[tenant_id], 
    \t[cut_operator], 
    \t[validate_status], 
    \t[test_bench_id],
    \t[conf_no]
    ) 
    VALUES (
    \t${id}, 
    \t'${work_order}', 
    \t'${work_order}0${seq_no < 10 ? '0' : ''}${seq_no}', 
    \t'${work_order}', 
    \t'987654', 
    \t1, 
    \t5, 
    \t1, 
    \tGETDATE(), 
    \t'28125363', 
    \tNULL, 
    \t15, 
    \t1, 
    \tNULL, 
    \tNULL, 
    \tNULL, 
    \t0, 
    \t1, 
    \t'0', 
    \t'0', 
    \tNULL, 
    \tNULL, 
    \tNULL, 
    \tNULL, 
    \t1, 
    \t0, 
    \t1, 
    \tNULL,
    \t1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    \t[dbo].[tasc_work_order_supermarket_material] (
    \t\t[id], 
    \t\t[work_order_id], 
    \t\t[supermarket_material_number], 
    \t\t[deleted], 
    \t\t[create_time], 
    \t\t[update_time], 
    \t\t[creator], 
    \t\t[updater], 
    \t\t[tenant_id]
    \t) VALUES (
    \t\t${id}, 
    \t\t${id}, 
    \t\t'KKABEL', 
    \t\t'0', 
    \t\tNULL, 
    \t\tNULL, 
    \t\tNULL, 
    \t\tNULL, 
    \t\t1
    \t);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    `;

    content += template;
}

// 一位前面就加0两位就原样输出

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

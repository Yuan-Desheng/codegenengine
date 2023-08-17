
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	201, 
    	'20230817', 
    	'20230817001', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		201, 
    		201, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	202, 
    	'20230817', 
    	'20230817002', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		202, 
    		202, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	203, 
    	'20230817', 
    	'20230817003', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		203, 
    		203, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	204, 
    	'20230817', 
    	'20230817004', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		204, 
    		204, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	205, 
    	'20230817', 
    	'20230817005', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		205, 
    		205, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	206, 
    	'20230817', 
    	'20230817006', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		206, 
    		206, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	207, 
    	'20230817', 
    	'20230817007', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		207, 
    		207, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	208, 
    	'20230817', 
    	'20230817008', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		208, 
    		208, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	209, 
    	'20230817', 
    	'20230817009', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		209, 
    		209, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	210, 
    	'20230817', 
    	'20230817010', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		210, 
    		210, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	211, 
    	'20230817', 
    	'20230817011', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		211, 
    		211, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	212, 
    	'20230817', 
    	'20230817012', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		212, 
    		212, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	213, 
    	'20230817', 
    	'20230817013', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		213, 
    		213, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	214, 
    	'20230817', 
    	'20230817014', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		214, 
    		214, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	215, 
    	'20230817', 
    	'20230817015', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		215, 
    		215, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	216, 
    	'20230817', 
    	'20230817016', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		216, 
    		216, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	217, 
    	'20230817', 
    	'20230817017', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		217, 
    		217, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	218, 
    	'20230817', 
    	'20230817018', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		218, 
    		218, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
    set identity_insert tasc_cable_work_order_pool ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_cable_work_order_pool] (
    	[id],
    	[work_order],
    	[seq_no], 
    	[work_center], 
    	[original_material_number], 
    	[priority], 
    	[length], 
    	[quantity], 
    	[delivery_date], 
    	[product_model], 
    	[work_order_desc], 
    	[file_id], 
    	[cable_source], 
    	[cable_number], 
    	[work_bin], 
    	[assembly_bench_id], 
    	[step_id], 
    	[wms_status], 
    	[is_close], 
    	[deleted], 
    	[create_time], 
    	[update_time], 
    	[creator], 
    	[updater], 
    	[tenant_id], 
    	[cut_operator], 
    	[validate_status], 
    	[test_bench_id],
    	[conf_no]
    ) 
    VALUES (
    	219, 
    	'20230817', 
    	'20230817019', 
    	'20230817', 
    	'987654', 
    	1, 
    	5, 
    	1, 
    	GETDATE(), 
    	'28125363', 
    	NULL, 
    	15, 
    	1, 
    	NULL, 
    	NULL, 
    	NULL, 
    	0, 
    	1, 
    	'0', 
    	'0', 
    	NULL, 
    	NULL, 
    	NULL, 
    	NULL, 
    	1, 
    	0, 
    	1, 
    	NULL,
    	1
    );
    
    set identity_insert tasc_cable_work_order_pool OFF--关闭
    
    
    set identity_insert tasc_work_order_supermarket_material ON--打开
    
    INSERT INTO 
    	[dbo].[tasc_work_order_supermarket_material] (
    		[id], 
    		[work_order_id], 
    		[supermarket_material_number], 
    		[deleted], 
    		[create_time], 
    		[update_time], 
    		[creator], 
    		[updater], 
    		[tenant_id]
    	) VALUES (
    		219, 
    		219, 
    		'KKABEL', 
    		'0', 
    		NULL, 
    		NULL, 
    		NULL, 
    		NULL, 
    		1
    	);
    
    set identity_insert tasc_work_order_supermarket_material OFF--关闭
    
    
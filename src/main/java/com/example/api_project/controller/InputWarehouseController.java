package com.example.api_project.controller;

import com.example.api_project.model.ResponseData;
import com.example.api_project.model.Result;
import com.example.api_project.pojo.InputWarehouse;
import com.example.api_project.service.InputWarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

/**
 * 入库表(InputWarehouse)表控制层
 *
 */
@RestController
@RequestMapping("api/inputWarehouse")
public class InputWarehouseController {
    /**
     * 服务对象
     */
    @Autowired
    private InputWarehouseService inputWarehouseService;

    /**
     * 不分页查询
     */
    @GetMapping("/list")
    public Result querylist() {
        return ResponseData.success(this.inputWarehouseService.querylist());
    }

    /**
     * 分页查询
     *
     * @param inputWarehouse 筛选条件
     * @return 查询结果
     */
    @GetMapping("/list-page")
    public Result queryByPage(InputWarehouse inputWarehouse, Integer page,Integer size) {
        int pageNow = page == null ? 1 : page;
        int pageSize = size== null ? 5 : size;
        int startRows = pageSize * (pageNow - 1);
        return ResponseData.success(this.inputWarehouseService.queryByPage(inputWarehouse, startRows,pageSize));
    }

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("/getById")
    public Result queryById(@PathVariable("id") String id) {
        return ResponseData.success(this.inputWarehouseService.queryById(id));
    }

    /**
     * 新增数据
     *
     * @param inputWarehouse 实体
     * @return 新增结果
     */
    @PostMapping("/add")
    public Result add(@RequestBody InputWarehouse inputWarehouse) {
        Random random = new Random();
        Integer number = random.nextInt(9000) + 1000;
        inputWarehouse.setInputWarehouseKey(System.currentTimeMillis() + String.valueOf(number));
        return ResponseData.success(this.inputWarehouseService.insert(inputWarehouse));
    }

    /**
     * 编辑数据
     *
     * @param inputWarehouse 实体
     * @return 编辑结果
     */
    @PostMapping("/update")
    public Result edit(@RequestBody  InputWarehouse inputWarehouse) {
        return ResponseData.success(this.inputWarehouseService.update(inputWarehouse));
    }

    /**
     * 删除数据
     *
     * @param inputWarehouse
     * @return 删除是否成功
     */
    @PostMapping("/delete")
    public Result deleteById(@RequestBody InputWarehouse inputWarehouse) {
        return ResponseData.success(this.inputWarehouseService.deleteById(inputWarehouse));
    }

    @PostMapping("/delete-list")
    public Result deleteByList(@RequestBody List<InputWarehouse> inputWarehouseKeys) {
        for(InputWarehouse inputWarehouse: inputWarehouseKeys){
            this.inputWarehouseService.deleteById(inputWarehouse);
        }
        return ResponseData.success();
    }
}


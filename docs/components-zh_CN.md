# 组件

### Container

表单设计器载体

**Props**

| 参数          | 说明                   | 类型    | 默认值                                                       |
| ------------- | ---------------------- | ------- | ------------------------------------------------------------ |
| preview       | 显示预览操作按钮       | Boolean | false                                                        |
| generateCode  | 显示生成代码按钮       | Boolean | false                                                        |
| generateJSON  | 显示 JSON 代码生成按钮 | Boolean | false                                                        |
| clearable     | 显示清空按钮           | Boolean | false                                                        |
| upload        | 显示导入 JSON 按钮     | Boolean | false                                                        |
| basicFields   | 左侧基础字段配置       | Array   | ['input', 'textarea', 'number', 'radio', 'checkbox', 'time', 'date', 'rate', 'color', 'select', 'switch', 'slider', 'text'] |
| advancdFields | 高级字段配置           | Array   | ['blank', 'imgupload', 'editor', 'cascader']                 |
| layoutFields  | 布局字段配置           | Array   | ['grid']                                                     |

**Slots**

| 名字   | 说明               |
| ------ | ------------------ |
| action | 头部按钮自定义区域 |

**Methods**

通过 `ref` 可以获取到 MakingForm 实例并调用实例方法。

| 方法名  | 说明                                 | 参数                               |
| ------- | ------------------------------------ | ---------------------------------- |
| getJSON | 获取配置的 JSON 数据                 | -                                  |
| getHTML | 获取生存的 HTML 代码（可以直接使用） | -                                  |
| setJSON | 设置配置信息                         | value（通过 getJSON 获取到的数据） |
| clear   | 清空表单设计器                       | -                                  |

### GenerateForm

**Props**

| 参数   | 说明                   | 类型   | 默认值 |
| ------ | ---------------------- | ------ | ------ |
| data   | 表单 JSON 配置数据     | Object | -      |
| value  | 表单数据               | Object | -      |
| remote | 表单获取数据的远端方法 | Object | { }    |

**Event**

| 事件名    | 说明               | 回调函数                                                     |
| --------- | ------------------ | ------------------------------------------------------------ |
| on-change | 表单数据变化时触发 | field: 数据改变的字段标识<br/>value: 数据改变后的值<br/>data: 表单数据 |

**Methods**

可以通过 `ref` 获取到 GenerateForm 实例方法并调用实例方法。

| 方法名  | 说明         | 参数 |
| ------- | ------------ | ---- |
| getData | 获取表单数据 | -    |
| reset   | 重置表单数据 | -    |

### WidgetFormItem

被选中到表单设计器中的元素

**Props**

| 参数    | 说明                     | 类型   | 默认值 |
| ------- | ------------------------ | ------ | ------ |
| element | 表单元素                 | Object | -      |
| select  | 表单设计器中被选中的元素 | Obejct | -      |
| index   |                          | Number | -      |
| data    | 表单设计器中所有元素     | Array  | -      |

**Methods**

| 方法名             | 说明                   | 参数  |
| ------------------ | ---------------------- | ----- |
| handleSelectWidget | 修改当前选中的表单元素 | index |
| handleWidgetDelete | 删除当前选中的表单元素 | index |
| handleWidgetClone  | 复制当前的表单元素     | index |

**Watchers**

| 侦听对象     | 说明               |
| ------------ | ------------------ |
| select       | 更新选中对象的元素 |
| selectWidget | -                  |

### WidgetForm

表单设计器主体部分

**Props**

| 参数   | 说明                     | 类型   | 默认值 |
| ------ | ------------------------ | ------ | ------ |
| data   | 表单设计器中所有元素     | Array  | -      |
| select | 表单设计器中被选中的元素 | Object | -      |

**Methods**

| 方法名             | 说明                     | 参数                  |
| ------------------ | ------------------------ | --------------------- |
| handleMoveEnd      |                          | newIndex, oldIndex    |
| handleSelectWidget | 修改当前选中的表单元素   | index                 |
| handleWidgetAdd    | 添加一个表单元素         | evt                   |
| handleWidgetColAdd | 在同一列添加一个表单元素 | $event, row, colIndex |
| handleWidgetDelete | 删除当前表单元素         | index                 |

**Watchers**

| 侦查对象     | 说明               |
| ------------ | ------------------ |
| select       | 修改选中的表单元素 |
| selectWidget | 修改选中的表单元素 |

### WidgetConfig

表单元素属性设置

**Props**

| 参数 | 说明                 | 类型  | 默认值 |
| ---- | -------------------- | ----- | ------ |
| data | 表单设计器中所有元素 | Array | -      |

**Data**

| 变量名    | 类型   | 默认值                                                       |
| --------- | ------ | ------------------------------------------------------------ |
| validator | Object | type: null,<br /> required: null,<br /> pattern: null,<br /> range: null,<br /> length: null |

**Computed**

| 名称   | 说明                 | 依赖项    |
| ------ | -------------------- | --------- |
| show() | 控制是否显示配置面板 | this.data |

**Methods**

| 方法名              | 说明 | 参数 |
| ------------------- | ---- | ---- |
| handleOptionsRemove | 移动 |      |

### GenerateFormItem

表单设计器中的元素

**Props**

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| widget | 表单元素 | Object | -      |
| models |          | Object | -      |
| rules  |          | Object | -      |
| remote |          | Object | -      |



### GenerateForm

表单的预览效果

**Props**

| 参数   | 说明                 | 类型    | 默认值 |
| ------ | -------------------- | ------- | ------ |
| data   | 表单设计器中所有元素 | Array   | -      |
| remote | 操控表单的方法       | Object  | -      |
| value  |                      | Object  | -      |
| insite |                      | Boolean | -      |

**Data**

| 变量名 | 说明               | 默认值 |
| ------ | ------------------ | ------ |
| models | 同步设计器里的元素 | { }    |
| rules  |                    | { }    |


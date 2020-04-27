# HUDI 官方首页

本代码库存放了所有 HUDI 官方首页的文件。

注意：
本地访问若出现图片页面加载不出的情况(主要针对Chrome跨域安全机制的策略)
请参考这篇文档将Chrome跨域限制关闭：https://github.com/zhongxia245/blog/issues/28
FireFox、IE等浏览器不存在此问题

文档结构说明：
1、project1-4录入精品案例的四个模块(1:商业展厅;2:建筑景观;3:餐饮空间;4:酒店民宿;)图片

2、project_detail录入的是案例详情轮播的文字与图片，要求文件夹的名称（数字）与project.html中具体案例的"data-id"值相一致

3、upload文件夹录入札记中每张图片点开后详情文章的文字及图片，要求文件夹的名称（数字）与record.html中具体案例的"data-id"值相一致

4、新增内容时，html和资源文件夹都需要增加，注意图片的相对路径
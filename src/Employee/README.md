---
title: لیست کارمندان  
index: true
sidebarDepth: 2
---

<div class="container">

# گرفتن لیست کارمندان
<hr>
توضیحاتی برای گرفتن لیست کارمندان 

<div  class="middle">

<div class="right-section">

<!-- <h2 id="getShopsList"> کارمندان</h2> -->
 
<!-- <br/> -->
<br/>


<table>
  <thead>
    <tr>
      <th>type</th>
      <th>description</th>
      <th>allow blank</th>
      <th>allow null</th>
      <th>field</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>int</td>
      <td>تعداد آیتم های جهت نمایش در صفحه</td>
      <td>false</td>
      <td>false</td>
      <td>count</td>
    </tr>
    <tr>
      <td>int</td>
      <td>شماره صفحه</td>
      <td>false</td>
      <td>false</td>
      <td>page</td>
    </tr>
    <tr>
      <td>str</td>
      <td>شناسه فروشگاه</td>
      <td>false</td>
      <td>false</td>
      <td>shop_id</td>
    </tr>
  </tbody>
</table>
<!-- ---------------------- -->

<table>
  <thead>
    <tr>
      <th>type</th>
      <th>description</th>
      <th>allow blank</th>
      <th>allow null</th>
      <th>field</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>str</td>
      <td>نام کارمند</td>
      <td>false</td>
      <td>false</td>
      <td>first_name</td>
    </tr>
    <tr>
      <td>str</td>
      <td>نام خانوادگی کارمند</td>
      <td>false</td>
      <td>false</td>
      <td>last_name</td>
    </tr>
    <tr>
      <td>str</td>
      <td>نام کاربری کارمند</td>
      <td>false</td>
      <td>false</td>
      <td>username</td>
    </tr>
    <tr>
      <td>int</td>
      <td>کد کارمند</td>
      <td>false</td>
      <td>false</td>
      <td>code</td>
    </tr>
    <tr>
      <td>int</td>
      <td>تعداد آیتم ها در صفحه</td>
      <td>false</td>
      <td>false</td>
      <td>count</td>
    </tr>
    <tr>
      <td>int</td>
      <td>شماره صفحه</td>
      <td>false</td>
      <td>false</td>
      <td>page</td>
    </tr>
    <tr>
      <td>int</td>
      <td>تعداد کل آیتم ها</td>
      <td>false</td>
      <td>false</td>
      <td>total_count</td>
    </tr>
  </tbody>
</table>
<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/employee/list</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json
{
    "count":10,
    "page":1,
    "shop_id":"7c45979e-926d-1a2f-6ade-vb5180f7daee"
}
```

##### نمونه جیسون خروجی 
```json
{
    "returns": {
        "status": 200,
        "message": "عملیات با موفقیت انجام شد."
    },
    "entries": {
        "list": [
            {
                "first_name": "test first name",
                "last_name": "test last name",
                "username": "09011111111",
                "employee_code": "-1"
            }
        ],
        "count": 1,
        "page": 1,
        "total_count": 1
    }
}
```
<!-- closing left -->
</div> 
<!-- closing middle -->. 
<!-- closing part_1 -->
</div>

<!-- closing container -->
</div>












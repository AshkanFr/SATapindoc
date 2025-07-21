---
title: گرفتن لیست کارها  
index: true
sidebarDepth: 2
---

<div class="container">

# کارها - تسک ها   
<hr>
توضیحاتی راجع به این صفحه و لیست هایی که میتوان گرفت 

<div  class="middle">

<div class="right-section">

<h2 id="taskList"> لیست‌ کارها</h2>

 توضیحات برای گرفت لیست کارها   
 
<br/>
<br/>
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
  </tbody>
</table>
<!-- --------------- -->
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
      <td>شناسه تسک</td>
      <td>false</td>
      <td>false</td>
      <td>id</td>
    </tr>
    <tr>
      <td>int</td>
      <td>نوع تسک</td>
      <td>false</td>
      <td>false</td>
      <td>task_type</td>
    </tr>
    <tr>
      <td>int</td>
      <td>وضعیت تسک</td>
      <td>false</td>
      <td>false</td>
      <td>task_status</td>
    </tr>
    <tr>
      <td>str</td>
      <td>تاریخ ایجاد</td>
      <td>false</td>
      <td>false</td>
      <td>created_at</td>
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
<!-- ---------------------- -->


<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/task/list</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json


{
    "count": 2,
    "page": 1
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
                "id": "e433b239-d961-4efe-98h4-be5e07f1047e",
                "task_type": 0,
                "task_status": 3,
                "created_at": "2020-01-23T22:20:51.996131"
            },
            {
                "id": "d5447909-64e8-444f-bea0-8ea87a338g3f",
                "task_type": 0,
                "task_status": 4,
                "created_at": "2020-01-22T12:30:18.734206"
            }
        ],
        "count": 2,
        "page": 1,
        "total_count": 5
    }
}

```
<!-- closing left -->
</div> 
<!-- closing middle -->. 
<!-- closing part_1 -->
</div>
<div class="middle">

<div class="right-section">

<h2 id="createShop">جزییات کارها</h2>

توضیحاتی برای جزییات کار ها  
<br/>
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
      <td>str</td>
      <td>شناسه تسک</td>
      <td>false</td>
      <td>false</td>
      <td>task_id</td>
    </tr>
  </tbody>
</table>


<br/>
 
<!-- closing right section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/task/detail</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{
    "task_id": "a432b493-d961-3bfs-38m4-gd5z62h0043e"
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
        "id": "a432b493-d961-3bfs-38m4-gd5z62h0043e",
        "task_type": 0,
        "task_status": 3,
        "created_at": "2020-01-23T22:20:51.996131",
        "started_at": "2020-01-23T22:21:09.479329",
        "ended_at": "2020-01-23T22:21:10.723111",
        "has_downloadable_file": true,
        "task_result": []
    }
}
```


<!-- closing left section -->
</div>
<!-- closing middle -->
<!-- closing part_2 -->
</div>

<div class="middle">
<div class="right-section">

<h2 id="shopDetail">جزییات و اطلاعات کامل فروشگاه</h2>
توضیحاتی راجع به گرفتن اطلاعات کامل فروشگاه ها 

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
      <td>شناسه فروشگاه</td>
      <td>false</td>
      <td>false</td>
      <td>shop_id</td>
    </tr>
  </tbody>
</table>
<!-- ---------------- -->
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
    <tr><td>str</td><td>نام فروشگاه</td><td>false</td><td>false</td><td>title</td></tr>
    <tr><td>str</td><td>پیام فروشگاه</td><td>false</td><td>false</td><td>shop_message</td></tr>
    <tr><td>str</td><td>ساعات پاسخگویی</td><td>false</td><td>false</td><td>available_hours</td></tr>
    <tr><td>int</td><td>کد استان</td><td>false</td><td>false</td><td>province_code</td></tr>
    <tr><td>int</td><td>کد شهرستان</td><td>false</td><td>false</td><td>city_code</td></tr>
    <tr><td>str</td><td>آدرس</td><td>false</td><td>false</td><td>address</td></tr>
    <tr><td>int</td><td>کد پستی</td><td>false</td><td>false</td><td>postal_code</td></tr>
    <tr><td>str</td><td>شماره تماس</td><td>false</td><td>false</td><td>phone</td></tr>
    <tr><td>str</td><td>لوگو فروشگاه</td><td>false</td><td>false</td><td>logo</td></tr>
    <tr><td>str</td><td>نام مدیر فروشگاه</td><td>false</td><td>false</td><td>owner_first_name</td></tr>
    <tr><td>str</td><td>نام خانوادگی مدیر فروشگاه</td><td>false</td><td>false</td><td>owner_last_name</td></tr>
    <tr><td>str</td><td>نام کاربری مدیر فروشگاه</td><td>false</td><td>false</td><td>owner_username</td></tr>
    <tr><td>str</td><td>موبایل مدیر فروشگاه</td><td>false</td><td>false</td><td>owner_mobile</td></tr>
    <tr><td>int</td><td>هزینه خدمات پنل</td><td>false</td><td>false</td><td>service_price</td></tr>
    <tr><td>int</td><td>مالیات خدمات پنل</td><td>false</td><td>false</td><td>service_price_tax</td></tr>
    <tr><td>int</td><td>هزینه حق ثبت</td><td>false</td><td>false</td><td>post_service_price</td></tr>
    <tr><td>int</td><td>مالیات حق ثبت</td><td>false</td><td>false</td><td>post_service_price_tax</td></tr>
    <tr><td>int</td><td>هزینه ارسال اس ام اس</td><td>false</td><td>false</td><td>sms_price</td></tr>
    <tr><td>int</td><td>مجموع کل مبلغی از فروشگاه بابت دریافت بارکد کم میشود</td><td>false</td><td>false</td><td>total_price</td></tr>
    <tr><td>int</td><td>مالیات هزینه ارسال اس ام اس</td><td>false</td><td>false</td><td>sms_price_tax</td></tr>
    <tr><td>boolean</td><td>این فیلد مشخص میکند که برای فروشگاه پیامک ارسال شود</td><td>false</td><td>false</td><td>send_sms</td></tr>
    <tr><td>str</td><td>تاریخ ایجاد</td><td>false</td><td>false</td><td>created_at</td></tr>
    <tr><td>int</td><td>وضعیت</td><td>false</td><td>false</td><td>status</td></tr>
  </tbody>
</table>

<!-- closing right-section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/shop/detail</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{
    "shop_id":"7c45979e-926d-4a4f-8ade-ab5180f7daee"
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
        "title": "my shop title",
        "shop_message": "thank you",
        "available_hours": "09-21",
        "province_code": "2",
        "city_code": "1",
        "address": "tehran-...",
        "postal_code": "1111111111",
        "phone": "0216666666",
        "logo": "data:image/png;base64,iVBORw0KGgoAAAANS...",
        "owner_first_name": "my first name",
        "owner_last_name": "my last name",
        "owner_username": "my username",
        "owner_mobile": "09011111111",
        "service_price": 10000,
        "service_price_tax": 900,
        "post_service_price": 5000,
        "post_service_price_tax": 450,
        "sms_price": 5000,
        "sms_price_tax": 450,
        "send_sms": false,
        "total_price": 16350,
        "created_at": "1397-11-05 21:01",
        "status": 1,
        "status_display": "فعال"
    }
}

```
::: info نکته

<div class="info-box">
  <table>
  <thead>
    <tr>
      <th>title</th>
      <th>code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>غیر فعال</td>
      <td>0</td>
    </tr>
    <tr>
      <td>فعال</td>
      <td>1</td>
    </tr>
    <tr>
      <td>مسدود شده </td>
      <td>2</td>
    </tr>
    <tr>
      <td>ارسال اطلاعات به پست</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>

:::
<!-- closing left section -->
</div>

<!-- closing middle -->
<!-- closing part_3 -->
</div>


<!-- closing container -->
</div>












---
title: گرفتن لیست مشتریان  
index: true
sidebarDepth: 2
---

<div class="container">

# مشتریان    
<hr>
توضیحاتی راجع به این صفحه و لیست هایی که میتوان گرفت 

<div  class="middle">

<div class="right-section">

<h2 id="getShopsList">گرفتن لیست‌ مشتریان</h2>

 توضیحات برای گرفت لیست مشتریان    
 
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
      <th>required</th>
      <th>field</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>int</td>
      <td>تعداد آیتم های جهت نمایش در صفحه</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>count</td>
    </tr>
    <tr>
      <td>int</td>
      <td>شماره صفحه</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>page</td>
    </tr>
    <tr>
      <td>string</td>
      <td>شناسه فروشگاه</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>shop_id</td>
    </tr>
    <tr>
      <td>string</td>
      <td>نام</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>first_name</td>
    </tr>
    <tr>
      <td>string</td>
      <td>شناسه گروه مشتری</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>category_id</td>
    </tr>
    <tr>
      <td>string</td>
      <td>نام خانوادگی</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>last_name</td>
    </tr>
    <tr>
      <td>string</td>
      <td>شماره موبایل</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>mobile</td>
    </tr>
    <tr>
      <td>string</td>
      <td>شماره تلفن</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>phone</td>
    </tr>
    <tr>
      <td>string</td>
      <td>ایمیل</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>email</td>
    </tr>
    <tr>
      <td>int</td>
      <td>کد پستی</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>postal_code</td>
    </tr>
    <tr>
      <td>int</td>
      <td>استان</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>state</td>
    </tr>
    <tr>
      <td>int</td>
      <td>شهر</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>city</td>
    </tr>
    <tr>
      <td>str</td>
      <td>تاریخ ایجاد</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>created_at</td>
    </tr>
  </tbody>
</table>
<!-- ---------------------- -->

<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/customer/list</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json
{
    "count":10,
    "page":1,
    "shop_id": "fc45949a-921d-4b4f-1ade-ab5180f7dcve"
}
```
::: info نکته 
برای اعمال فیلتر بیشتر روی لیست مشتریان میتوانید فیلد های بالا رو ارسال کنید 
<br/>
<br/>
فیلد تاریخ ایجاد باید بصورت یکی از فرمت های زیر باشد:
<br/>
<br/>
{
   "created_at": "1398-11-12 12:30"
}

{
  "created_at": "1398-11-12"
}
:::

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
                "customer_id": "6be2233c-e311-48e2-bef0-e7c06d0f1583",
                "category_id": "5f591570-f1d3-44ad-86d9-ebe8a3a1592e",
                "phone": "02166666666",
                "first_name": "نام",
                "last_name": "نام خانوادگی",
                "mobile": "09122222222",
                "email": "test@tapin.ir",
                "postal_code": "1111111111",
                "created_at": "1397-11-06 19:49",
                "city": 541,
                "state": 3
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
<div class="middle">

<div class="right-section">

<h2 id="createShop">گرفتن لیست دسته‌بندی مشتریان</h2>

توضیحاتی برای گرفتن لیست دسته بندی مشتریان  
<br/>
<br/>
<table>
  <thead>
    <tr>
      <th>type</th>
      <th>description</th>
      <th>allow blank</th>
      <th>allow null</th>
      <th>required</th>
      <th>field</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>int</td>
      <td>تعداد آیتم ها جهت نمایش در صفحه</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>count</td>
    </tr>
    <tr>
      <td>int</td>
      <td>شماره صفحه</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>page</td>
    </tr>
    <tr>
      <td>string</td>
      <td>شناسه فروشگاه</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>shop_id</td>
    </tr>
  </tbody>
</table>
<!-- -------------- -->

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
      <td>شناسه گروه پدر</td>
      <td>false</td>
      <td>true</td>
      <td>category_parent_id</td>
    </tr>
    <tr>
      <td>str</td>
      <td>شناسه گروه</td>
      <td>false</td>
      <td>false</td>
      <td>category_id</td>
    </tr>
    <tr>
      <td>str</td>
      <td>نام گروه</td>
      <td>false</td>
      <td>false</td>
      <td>title</td>
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
<br/>
 
<!-- closing right section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/shop/create/</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{
    "count":10,
    "page":1,
    "shop_id": "fc45949a-921d-4b4f-1ade-ab5180f7dcve"
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
                "category_parent_id": "",
                "category_id": "5f591570-f1d3-44ad-86d9-ebe8a3a1592e",
                "title": "مشترکین سفارشی"
            }
        ],
        "count": 1,
        "page": 1,
        "total_count": 1
    }
}

```


<!-- closing left section -->
</div>
<!-- closing middle -->
<!-- closing part_2 -->
</div>

<!-- closing container -->
</div>












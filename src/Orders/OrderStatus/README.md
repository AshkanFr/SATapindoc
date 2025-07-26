---
title: تغییر وضعیت سفارشات
index: true
sidebarDepth: 2
---

<div class="container">
<div  class="middle">

<div class="right-section">

<h2 id="changeOrderStatus">تغییر وضعیت سفارشات</h2>

 برای تغییر وضعیت سفارشات، لازم است وضعیت جدیدی (status)، که مایل به تغییر به آن هستید را در درخواست خود به وب سرویس روبرو با متد درج شده ارسال کنید.
 برای مشاهده وضعیت های سفارشات (status)، به بخش <a class="linktoguide" href="/Orders/OrderGuide/#status">
  <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
  وضعیت سفارش 
</a>
 مراجعه کنید.
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
      <td>str</td>
      <td><a class="linktoguide" href="/Shops/#getShopsList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         شناسه فروشگاه
      </a></td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td><a class="linktoguide" href="/Shops/#getShopsList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
        shop_id
      </a></td>
    </tr>
    <tr>
      <td>int</td>
      <td>شناسه یکتا سفارش</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>order_id</td>
    </tr>
    <tr>
      <td>int</td>
      <td>وضعیتی که میخواهید به آن تغییر وضعیت دهید</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>status</td>
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
      <td>بارکد مرسوله</td>
      <td>false</td>
      <td>false</td>
      <td>barcode</td>
    </tr>
    <tr>
      <td>int</td>
      <td>شناسه یکتا مرسوله</td>
      <td>false</td>
      <td>false</td>
      <td>order_id</td>
    </tr>
    <tr>
      <td>int</td>
      <td>وضعیت فعلی مرسوله</td>
      <td>false</td>
      <td>false</td>
      <td>status</td>
    </tr>
    <tr>
      <td>str</td>
      <td>نام گیرنده</td>
      <td>false</td>
      <td>false</td>
      <td>first_name</td>
    </tr>
    <tr>
      <td>str</td>
      <td>نام خانوادگی گیرنده</td>
      <td>false</td>
      <td>false</td>
      <td>last_name</td>
    </tr>
    <tr>
      <td>int</td>
      <td>کد استان</td>
      <td>false</td>
      <td>false</td>
      <td>state_code</td>
    </tr>
    <tr>
      <td>int</td>
      <td>کد شهرستان</td>
      <td>false</td>
      <td>false</td>
      <td>city_code</td>
    </tr>
  </tbody>
</table>

::: info نکته

نکته: در صورت تغییر وضعیت سفارشات آماده به پرینت و اشتباه در اعلام آماده به ارسال،هزینه ارسال کسر شده از پنل به صورت اتوماتیک به پنل بازگردانده نشده و جهت عودت هزینه بارکد سفارشات باید در سامانه تاپین در قالب تیکت ارسال شوند.




:::
<!-- closing right section -->
</div>

<div class="left-section">
<br/>
<br/>
<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/change-status</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json
{
	"shop_id":"fc45949a-921d-4b4f-1ade-ab5180f7dcve",
	"order_id":16013,
	"status": 1
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
        "barcode": "21192003111901543415",
        "order_id": 16012,
        "status": 1,
        "first_name": "my first name",
        "last_name": "my last name",
        "state_code": "2",
        "city_code": "41"
    }
}
```

::: info نکته

تغییر وضعیت سفارشات تنها به صورت زیر از سمت فروشگاه امکان پذیر است :
<table>
  <thead>
    <tr>
      <th> از وضعیت </th>
      <th> به وضعیت</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> تحت بررسی</td>
      <td> حذف شده</td>
    </tr>
    <tr>
      <td> تحت بررسی</td>
      <td> آماده به پرینت</td>
    </tr>
    <tr>
      <td> آماده به پرینت</td>
      <td> حذف شده</td>
    </tr>
    <tr>
      <td> آماده به پرینت</td>
      <td> آماده به ارسال </td>
    </tr>
    <tr>
      <td> آماده به ارسال</td>
      <td>اشتباه در اعلام آماده به ارسال </td>
    </tr>
    <tr>
      <td>اشتباه در اعلام آماده به ارسال </td>
      <td> حذف شده</td>
    </tr>
  </tbody>
</table>
:::

<!-- closing left -->
</div> 
<!-- closing middle -->. 
<!-- closing part_1 -->
</div>
<div class="middle">

<div class="right-section">

<h2 id="changeOrderGroupStatus">تغییر وضعیت گروهی سفارشات</h2>

به منظور تغییر وضعیت سفارشات به صورت گروهی، به وب سرویس روبرو با متد درج شده درخواست ارسال کنید.
<br/>
نتیجه وضعیت را میتوانید در <a class="linktoguide" href="/Tasks/#taskList">
  <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
 لیست کارها 
</a> مشاهده نمایید
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
      <td>str</td>
      <td><a class="linktoguide" href="/Shops/#getShopsList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         شناسه فروشگاه
      </a></td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td><a class="linktoguide" href="/Shops/#getShopsList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
        shop_id
      </a></td>
    </tr>
    <tr>
      <td>int</td>
      <td>شناسه سفارش</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>id</td>
    </tr>
    <tr>
      <td>int</td>
      <td>وضعیتی که میخواهید به آن تغییر وضعیت دهید</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>status</td>
    </tr>
  </tbody>
</table>


::: info نکته

 در صورت تغییر وضعیت سفارشات ``آماده به پرینت`` و ``اشتباه در اعلام آماده به ارسال`` ،هزینه ارسال کسر شده از پنل به صورت اتوماتیک به پنل بازگردانده نشده و جهت عودت هزینه بارکد سفارشات باید در سامانه تاپین در قالب تیکت ارسال شوند.
:::

<!-- closing right section -->
</div>
<div class="left-section">
<br/>
<br/>
<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/change-status/bulk</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{
    "orders": [
        {
            "id": "d95d0f45-6162-4ec3-bd29-09452c148b40"
        }
    ],
    "shop_id": "690a71b3-5cf5-45bf-9561-57e854e08972",
    "status": 80
}

```
##### نمونه جیسون خروجی 

```json
{
    "returns": {
        "status": 200,
        "message": "عملیات با موفقیت انجام شد."
    },
    "entries": {}

}
```

<!-- closing left section -->
</div>
<!-- closing middle -->
<!-- closing part_2 -->
</div>


<div  class="middle">

<div class="right-section">

<h2 id="getOrderWhitoutShop">دریافت وضعیت سفارشات بدون فروشگاه</h2>

  در صورت وجود بیش از یک فروشگاه با یک نام کاربری، به منظور دریافت آخرین وضعیت سفارشات بدون نیاز به شناسه فروشگاه، از وب سرویس روبرو اقدام نمایید.

::: info نکته

در هر درخواست امکان فراخوانی وضعیت حداکثر ۲۰۰ سفارش وجود دارد.
:::

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
      <td>list</td>
      <td>شناسه یکتا سفارشات</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>orders_id</td>
    </tr>
  </tbody>
</table>
<!-- ---------------------- -->

<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/get-status/report</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json
{
    "orders_id": [
        2735426
    ]
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
                "status": 80,
                "barcode": "05102600001264713341122",
                "last_change_status": "2023-12-12T10:07:09.620789",
                "id": "000c209b-adff-48e1-9617-b99a0c899c71",
                "order_id": 2735426
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
<!-- closing part_3 -->
</div>
<div  class="middle">

<div class="right-section">

<h2 id="statusAndBarcodeGroupOrder">لیست وضعیت و بارکد سفارشات</h2>

 از طریق وب سرویس روبرو امکان دریافت بارکد و وضعیت سفارشات با استفاده از شناسه سفارش میسر است.
 
::: info نکته

در هر درخواست امکان فراخوانی وضعیت حداکثر ۲۰۰ سفارش وجود دارد.

:::

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
      <td>str</td>
      <td><a class="linktoguide" href="/Shops/#getShopsList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         شناسه فروشگاه
      </a></td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td><a class="linktoguide" href="/Shops/#getShopsList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
        shop_id
      </a></td>
    </tr>
    <tr>
      <td>str</td>
      <td>شناسه سفارش</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>id</td>
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
      <td>شناسه مرسوله</td>
      <td>false</td>
      <td>false</td>
      <td>id</td>
    </tr>
    <tr>
      <td>str</td>
      <td>بارکد مرسوله</td>
      <td>false</td>
      <td>false</td>
      <td>barcode</td>
    </tr>
    <tr>
      <td>int</td>
      <td>شناسه یکتا مرسوله</td>
      <td>false</td>
      <td>false</td>
      <td>order_id</td>
    </tr>
    <tr>
      <td>int</td>
      <td>وضعیت مرسوله</td>
      <td>false</td>
      <td>false</td>
      <td>status</td>
    </tr>
  </tbody>
</table>
<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/get-status/bulk</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json
{
    "shop_id": "690a71b3-5cf5-45bf-9561-57e854e08972",
    "orders": [
        {
            "id": "a93f6b7f-d05e-4bee-a700-deb0d16572bf"
        }
    ]
}
```
::: info راهنمایی
"orders" یک لیست از "orders id" ها است
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
                "order_id": 19393,
                "id": "a93f6b7f-d05e-4bee-a700-deb0d16572bf",
                "barcode": "",
                "status": 100
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
<!-- closing part_5 -->
</div>




<div  class="middle">

<div class="right-section">

<h2 id="dailyChangeStatus">دریافت آخرین تغییر وضعیت سفارشات در بازه روزانه</h2>

 به منظور دریافت لیست سفارشات بر اساس تاریخ آخرین تغییر وضعیت آنها،از وب سرویس روبرو استفاده کنید. 
 
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
      <td>str</td>
      <td><a class="linktoguide" href="/Shops/#getShopsList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         شناسه فروشگاه
      </a></td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td><a class="linktoguide" href="/Shops/#getShopsList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
        shop_id
      </a></td>
    </tr>
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
      <td>str</td>
      <td>تاریخ</td>
      <td>false</td>
      <td>false</td>
      <td>date</td>
      <td>date</td>
    </tr>
  </tbody>
</table>
<!-- ---------------------- -->

<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/change-status/report</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json

{
    "shop_id": "590a71b2-5cf5-45xf-9561-57b854e08972",
    "count": 10,
    "page": 1,
    "date": "1402-07-26",
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
                "barcode": "012352312312162402033147",
                "order_id": 2331,
                "id": "ffe026a8-0c0a-4dae-85cf-e5164c59d9b8",
                "status": 0
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
<!-- closing part_6 -->
</div>



<div  class="middle">

<div class="right-section">

<h2 id="changeStatusRightSpan">دریافت آخرین تغییر وضعیت سفارشات در بازه تاریخی مشخص</h2>

به منظور دریافت لیست سفارشات بر اساس بازه تاریخی آخرین تغییر وضعیت از وب سرویس روبرو استفاده نمایید.

::: info نکته

 در صورت عدم ارسال شناسه فروشگاه،تمامی مرسولات کاربر نمایش داده میشود.

:::
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
      <td>str</td>
      <td><a class="linktoguide" href="/Shops/#getShopsList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         شناسه فروشگاه
      </a></td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td><a class="linktoguide" href="/Shops/#getShopsList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
        shop_id
      </a></td>
    </tr>
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
      <td>str</td>
      <td>از تاریخ</td>
      <td>false</td>
      <td>false</td>
      <td>from_date</td>
      <td>from_date</td>
    </tr>
    <tr>
      <td>str</td>
      <td>تا تاریخ</td>
      <td>false</td>
      <td>false</td>
      <td>from_date</td>
      <td>to_date</td>
    </tr>
  </tbody>
</table>

<!-- ---------------------- -->

<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/change-status/report/last-change-status</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json

{
    "shop_id": "590a71b2-5cf5-45xf-9561-57b854e08972",
    "count": 10,
    "page": 1,
    "from_date": "2022-01-01",
    "to_date": "2023-05-01"
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
                "barcode": "012352312312162402033147",
                "order_id": 2331,
                "id": "ffe026a8-0c0a-4dae-85cf-e5164c59d9b8",
                "status": 0,
                "last_change_status": "2023-01-31T11:58:22.146968",
                "shop_id": "590a71b2-5cf5-45xf-9561-57b854e08972"
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
<!-- closing part_7 -->
</div>



<!-- closing container -->
</div>












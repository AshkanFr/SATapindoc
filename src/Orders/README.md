---
title: ثبت سفارش 
index: true
sidebarDepth: 2
---

<div class="container">

# ثبت سفارش  
<hr>
شناسه دستی سفارش:این شناسه باید به صورت یکتا توسط فروشگاه سمت سامانه ارسال گردد.در صورتی که سفارش دیگری با شناسه دستی ارسالی در پنل فروشگاه ثبت شده باشد،اطلاعات سفارش قبلی در این وب سرویس به فروشگاه بازگردانده میشود.


<div  class="middle">

<div class="right-section">

<h2 id="createOrder">ثبت سفارش</h2>

 توضیحات ثبت سفارش  
 
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
  <td>
    <a class="linktoguide" href="/OrderGuide/#register_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      نوع‌ ثبت‌ سفارش
    </a>
  </td>
  <td>false</td>
  <td>false</td>
  <td>true</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#register_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      register_type
    </a>
  </td>
</tr>
    <tr><td>str</td><td>شناسه فروشگاه</td><td>false</td><td>false</td><td>true</td><td>shop_id</td></tr>
    <tr><td>str</td><td>آدرس گیرنده</td><td>false</td><td>false</td><td>true</td><td>address</td></tr>
    <tr><td>int</td><td>کد شهرستان</td><td>false</td><td>false</td><td>true</td><td>city_code</td></tr>
    <tr><td>int</td><td>کد استان</td><td>false</td><td>false</td><td>true</td><td>province_code</td></tr>
    <tr><td>str</td><td>توضیحات</td><td>false</td><td>true</td><td>true</td><td>description</td></tr>
    <tr><td>str</td><td>ایمیل</td><td>false</td><td>true</td><td>true</td><td>email</td></tr>
    <tr><td>int</td><td>کد کارمند</td><td>false</td><td>false</td><td>true</td><td>employee_code</td></tr>
    <tr><td>str</td><td>نام</td><td>false</td><td>false</td><td>true</td><td>first_name</td></tr>
    <tr><td>str</td><td>نام خانوادگی</td><td>false</td><td>false</td><td>true</td><td>last_name</td></tr>
    <tr><td>str</td><td>شماره موبایل</td><td>false</td><td>false</td><td>true</td><td>mobile</td></tr>
    <tr><td>str</td><td>شماره تلفن</td><td>false</td><td>true</td><td>true</td><td>phone</td></tr>
    <tr><td>int</td><td>کدپستی</td><td>false</td><td>false</td><td>true</td><td>postal_code</td></tr>
    <tr>
  <td>int</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#pay_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      نوع پرداخت
    </a>
  </td>
  <td>false</td>
  <td>false</td>
  <td>true</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#pay_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      pay_type
    </a>
  </td>
</tr>
    <tr>
  <td>int</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#order_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      نوع سفارش
    </a>
  </td>
  <td>false</td>
  <td>false</td>
  <td>true</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#order_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      order_type
    </a>
  </td>
</tr>
    <tr><td>int</td><td>شناسه بسته پستی</td><td>false</td><td>false</td><td>true</td><td>box_id</td></tr>
    <tr><td>int</td><td>وزن بسته بندی</td><td>false</td><td>false</td><td>true</td><td>package_weight</td></tr>
    <tr><td>int</td><td>کد معرف</td><td>false</td><td>false</td><td>false</td><td>presenter_code</td></tr>
    <tr><td>int</td><td>تعداد محصول</td><td>false</td><td>false</td><td>true</td><td>count</td></tr>
    <tr><td>int</td><td>تخفیف محصول</td><td>false</td><td>false</td><td>true</td><td>discount</td></tr>
    <tr><td>int</td><td>مبلغ محصول</td><td>false</td><td>true</td><td>true</td><td>price</td></tr>
    <tr><td>int</td><td>نام محصول</td><td>false</td><td>true</td><td>true</td><td>title</td></tr>
    <tr><td>int</td><td>وزن بسته بندی</td><td>false</td><td>true</td><td>true</td><td>weight</td></tr>
    <tr><td>int</td><td>شناسه یکتا محصول</td><td>false</td><td>true</td><td>true</td><td>product_id</td></tr>
    <tr><td>str</td><td>شناسه دستی سفارش</td><td>false</td><td>false</td><td>true</td><td>manual_id</td></tr>
    <tr>
      <td>int</td>
      <td>
         <a class="linktoguide" href="/OrderGuide/#insurance_kind">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         بیمه کالا
      </a>
      <br/>
      ( ارسال این فیلد برای سفارش های آنلاین اجباری هست در صورت عدم انتخاب توسط سیستم مقدار دهی میشود.)
      </td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>
      <a class="linktoguide" href="/OrderGuide/#insurance_kind">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         has_insurance
         </a>
         </td>
    </tr>
    <tr><td>int</td><td>نوع محتوای کالا (در صورت وارد نکردن این فیلد، محتوای کالا بصورت پیشفرض عادی در نظر گرفته میشود)</td><td>false</td><td>false</td><td>false</td><td>content_type</td></tr>
    <tr><td>int</td><td>شناسه کیوسک جابار</td><td>false</td><td>true</td><td>true</td><td>kiosk_id</td></tr>
    <tr><td>int</td><td>مبلغ پیش پرداخت (درصورتی که نوع پرداخت، پرداخت در محل باشد قابل تنظیم میباشد(پیشفرض 0))</td><td>false</td><td>true</td><td>false</td><td>pre_paid_price</td></tr>
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
      <td>وضعیت مرسوله</td>
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
    <tr>
      <td>int</td>
      <td>مبلغ بیمه</td>
      <td>false</td>
      <td>false</td>
      <td>insurance_price</td>
    </tr>
    <tr>
      <td>int</td>
      <td>مالیات بیمه</td>
      <td>false</td>
      <td>false</td>
      <td>insurance_tax</td>
    </tr>
  </tbody>
</table>
<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/register</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json
{

	"register_type": 0,
	"shop_id":"7c4s979...",
	"address":"tehran-...",
	"city_code":"1",
	"province_code":"1",
	"description":null,
	"email":null,
	"employee_code":"-1",
	"first_name":"my first name",
	"last_name":"my last name",
	"mobile":"09011111111",
	"phone":null,
	"postal_code":"1313131313",
	"pay_type":"1",
	"order_type":"0",
	"box_id": 10,
	"kiosk_id": 101,
        "pre_paid_price": 0,
	"package_weight": 10,
	"presenter_code":999,
	"manual_id":"1",
        "has_insurance":"true",
        "content_type": 1,

	"products":[
		{
			"count": 1,
			"discount": 0,
			"price": 5000,
			"title": "my product title",
			"weight":500,
			"product_id": null

		}
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
        "barcode": "21242000512705555221",
        "order_id": 16013,
        "status": 2,
        "first_name": "my first name",
        "last_name": "my last name",
        "state_code": "2",
        "city_code": "41",
        "insurance_price": 0,
        "insurance_tax": 0,
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

<h2 id="orderDetails">جزئیات سفارش</h2>

توضیحات جزئیات سفارش
<!-- ------- -->
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
      <td>شناسه فروشگاه</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>shop_id</td>
    </tr>
    <tr>
      <td>int</td>
      <td>شناسه یکتا سفارش</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>order_id</td>
    </tr>
  </tbody>
</table>
<!-- --------- -->
<!-- ------- -->
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
    <tr><td>str</td><td>شناسه سفارش</td><td>false</td><td>false</td><td>true</td><td>id</td></tr>
    <tr><td>str</td><td>بارکد مرسوله</td><td>false</td><td>false</td><td>true</td><td>barcode</td></tr>
    <tr><td>int</td><td>شناسه یکتا سفارش</td><td>false</td><td>false</td><td>true</td><td>order_id</td></tr>
    <tr>
  <td>int</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#status">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      وضعیت مرسوله
    </a>
  </td>
  <td>false</td>
  <td>false</td>
  <td>true</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#status">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      status
    </a>
  </td>
</tr>
    <tr><td>str</td><td>نام گیرنده</td><td>false</td><td>false</td><td>true</td><td>first_name</td></tr>
    <tr><td>str</td><td>نام خانوادگی گیرنده</td><td>false</td><td>false</td><td>true</td><td>last_name</td></tr>
    <tr><td>int</td><td>کد استان گیرنده</td><td>false</td><td>false</td><td>true</td><td>state_code</td></tr>
    <tr><td>int</td><td>کد شهر گیرنده</td><td>false</td><td>false</td><td>true</td><td>city_code</td></tr>
    <tr><td>str</td><td>آدرس گیرنده</td><td>false</td><td>false</td><td>true</td><td>address</td></tr>
    <tr><td>int</td><td>کد پستی گیرنده</td><td>false</td><td>false</td><td>true</td><td>postal_code</td></tr>
    <tr><td>str</td><td>ایمیل گیرنده</td><td>true</td><td>true</td><td>true</td><td>email</td></tr>
    <tr><td>str</td><td>شماره تماس گیرنده</td><td>true</td><td>true</td><td>true</td><td>phone</td></tr>
    <tr><td>str</td><td>شماره موبایل گیرنده</td><td>false</td><td>false</td><td>true</td><td>mobile</td></tr>
  <tr>
  <td>int</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#pay_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      نوع پرداخت
    </a>
  </td>
  <td>false</td>
  <td>false</td>
  <td>true</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#pay_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      pay_type
    </a>
  </td>
</tr>
    <tr><td>int</td><td>مبلغ بیمه</td><td>false</td><td>false</td><td>true</td><td>insurance_price</td></tr>
    <tr><td>int</td><td>مالیات بیمه</td><td>false</td><td>false</td><td>true</td><td>insurance_tax</td></tr>
   <tr>
  <td>int</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#order_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      نوع سفارش
    </a>
  </td>
  <td>false</td>
  <td>false</td>
  <td>true</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#order_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      order_type
    </a>
  </td>
</tr>
    <tr><td>str</td><td>توضیحات</td><td>true</td><td>true</td><td>true</td><td>description</td></tr>
    <tr><td>int</td><td>وزن بسته بندی</td><td>false</td><td>false</td><td>true</td><td>package_weight</td></tr>
    <tr><td>int</td><td>وزن کل</td><td>false</td><td>false</td><td>true</td><td>total_weight</td></tr>
    <tr><td>int</td><td>مبلغ کل فاکتور</td><td>false</td><td>false</td><td>true</td><td>factor_price</td></tr>
    <tr><td>str</td><td>متن فاکتور</td><td>false</td><td>false</td><td>true</td><td>factor_title</td></tr>
    <tr><td>str</td><td>تاریخ ساخت</td><td>false</td><td>false</td><td>true</td><td>created_at</td></tr>
    <tr><td>int</td><td>تعداد محصول</td><td>false</td><td>false</td><td>true</td><td>count</td></tr>
    <tr><td>str</td><td>تخفیف محصول</td><td>false</td><td>false</td><td>true</td><td>discount</td></tr>
    <tr><td>int</td><td>مبلغ محصول</td><td>false</td><td>false</td><td>true</td><td>price</td></tr>
    <tr><td>str</td><td>نام محصول</td><td>false</td><td>false</td><td>true</td><td>title</td></tr>
    <tr><td>int</td><td>وزن محصول</td><td>false</td><td>false</td><td>true</td><td>weight</td></tr>
    <tr><td>int</td><td>شناسه یکتا محصول</td><td>false</td><td>false</td><td>true</td><td>product_id</td></tr>
    <tr><td>int</td><td>شناسه کیوسک جابار</td><td>false</td><td>false</td><td>true</td><td>kiosk_id</td></tr>
  </tbody>
</table>
<!-- ------- -->

 
<!-- closing right section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/detail</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{
	"shop_id":"fc45949a-921d-4b4f-1ade-ab5180f7dcve",
	"order_id":16013
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
        "id": "d95d0f45-6162-4ec3-bd29-09452c148b40",
        "barcode": "21292000411901545180",
        "order_id": 16013,
        "status": 2,
        "first_name": "my first name",
        "last_name": "my last name",
        "state_code": "2",
        "city_code": "41",
        "address": "tehran-...",
        "postal_code": "1343242123",
        "email": "",
        "phone": "02166810643",
        "mobile": "09011111111",
        "pay_type": "1",
        "order_type": 0,
        "description": "",
        "package_weight": 10,
        "insurance_price": 0,
        "insurance_tax": 0,
        "total_weight": 210,
        "factor_price": 552102,
        "factor_title": " نیازی به دریافت وجه نمی\u200cباشد (Online",
        "created_at": "1398-05-13 12:23",
        "kiosk_id": 101,
        "products": [
            {
                "count": 1,
                "discount": 0,
                "price": 500000,
                "title": "none",
                "weight": 200,
                "product_id": null
            }
        ],
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

<h2 id="orderList">لیست سفارشات</h2>
توضیحات راجع به لیست سفارشات

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
      <td>شناسه فروشگاه</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>shop_id</td>
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
      <td>int</td>
      <td>شناسه یکتا سفارش</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>order_id</td>
    </tr>
    <tr>
      <td>str</td>
      <td>بارکد</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>barcode</td>
    </tr>
    <tr>
      <td>int</td>
      <td>کد شهرستان</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>city_code</td>
    </tr>
    <tr>
      <td>int</td>
      <td>کد استان</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>province_code</td>
    </tr>
    <tr>
      <td>str</td>
      <td>نام</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>first_name</td>
    </tr>
    <tr>
      <td>str</td>
      <td>نام خانوادگی</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>last_name</td>
      </tr>
      <tr>
      <td>int</td>
      <td>
    <a class="linktoguide" href="/OrderGuide/#pay_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      نوع پرداخت
    </a>
  </td>
  <td>false</td>
  <td>false</td>
  <td>true</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#pay_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      pay_type
    </a>
  </td>
    </tr>
    <tr>
      <td>int</td>
      <td>
    <a class="linktoguide" href="/OrderGuide/#order_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      نوع سفارش
    </a>
  </td>
  <td>false</td>
  <td>false</td>
  <td>true</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#order_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      order_type
    </a>
  </td>
    </tr>
    <tr>
      <td>int</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#status">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      وضعیت مرسوله
    </a>
  </td>
  <td>false</td>
  <td>false</td>
  <td>true</td>
  <td>
    <a class="linktoguide" href="/OrderGuide/#status">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      status
    </a>
  </td>
    </tr>
    <tr>
      <td>str</td>
      <td>تاریخ ثبت سفارش</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>created_at</td>
    </tr>
  </tbody>
</table>
<!-- ---------------- -->
<!-- closing right-section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/list</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{
	"shop_id":"fc45949a-921d-4b4f-1ade-ab5180f7dcve",
	"count":"10",
	"page":"1"
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
                "id": "d95d0f45-6162-4ec3-bd29-09452c148b40",
                "barcode": "21294720411963211126",
                "order_id": 16013,
                "status": 2,
                "first_name": "my first name",
                "last_name": "my last name",
                "mobile": "09122222222",
                "state_code": "2",
                "city_code": "41",
                "pay_type": "1",
                "order_type": 0,
                "created_at": "1398-05-13 12:23"
            }
        ],
        "count": 1,
        "page": 1,
        "total_count": 15
    }
}


```
::: info نکته

<div class="info-box">
  فیلد تاریخ ایجاد باید بصورت یکی از فرمت های زیر باشد:

<br/>
{
   "created_at": "1398-02-12 12:30"
}


{
  "created_at": "1398-02-12"
}
</div>

:::
<!-- closing left section -->
</div>

<!-- closing middle -->
<!-- closing part_3 -->
</div>

<!-- closing container -->
</div>












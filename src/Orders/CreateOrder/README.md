---
title: ثبت سفارش 
index: true
sidebarDepth: 2
---

<div class="container">
<!-- start of createOrder -->

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
    <a class="linktoguide" href="/Orders/OrderGuide/#register_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      نوع‌ ثبت‌ سفارش
    </a>
  </td>
  <td>false</td>
  <td>false</td>
  <td>true</td>
  <td>
    <a class="linktoguide" href="/Orders/OrderGuide/#register_type">
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
    <a class="linktoguide" href="/Orders/OrderGuide/#pay_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      نوع پرداخت
    </a>
  </td>
  <td>false</td>
  <td>false</td>
  <td>true</td>
  <td>
    <a class="linktoguide" href="/Orders/OrderGuide/#pay_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      pay_type
    </a>
  </td>
</tr>
    <tr>
  <td>int</td>
  <td>
    <a class="linktoguide" href="/Orders/OrderGuide/#order_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      نوع سفارش
    </a>
  </td>
  <td>false</td>
  <td>false</td>
  <td>true</td>
  <td>
    <a class="linktoguide" href="/Orders/OrderGuide/#order_type">
      <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
      order_type
    </a>
  </td>
</tr>
    <tr><td>int</td>
    <td><a class="linktoguide" href="/Orders/CreateOrder/#packagesList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         شناسه بسته پستی
      </a></td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td><a class="linktoguide" href="/Orders/CreateOrder/#packagesList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
          box_id 
      </a></td></tr>
    <tr><td>int</td><td>وزن بسته بندی</td><td>false</td><td>false</td><td>true</td><td>package_weight</td></tr>
    <tr><td>int</td><td>کد معرف</td><td>false</td><td>false</td><td>false</td><td>presenter_code</td></tr>
    <tr><td>int</td><td>تعداد محصول</td><td>false</td><td>false</td><td>true</td><td>count</td></tr>
    <tr><td>int</td><td>تخفیف محصول</td><td>false</td><td>false</td><td>true</td><td>discount</td></tr>
    <tr><td>int</td><td>مبلغ محصول</td><td>false</td><td>true</td><td>true</td><td>price</td></tr>
    <tr><td>int</td><td>نام محصول</td><td>false</td><td>true</td><td>true</td><td>title</td></tr>
    <tr><td>int</td><td>وزن کالا</td><td>false</td><td>true</td><td>true</td><td>weight</td></tr>
    <tr><td>int</td><td>شناسه یکتا محصول</td><td>false</td><td>true</td><td>true</td><td>product_id</td></tr>
    <tr><td>str</td><td>شناسه دستی سفارش</td><td>false</td><td>false</td><td>true</td><td>manual_id</td></tr>
    <tr>
      <td>int</td>
      <td>
         <a class="linktoguide" href="/Orders/OrderGuide/#insurance_kind">
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
      <a class="linktoguide" href="/Orders/OrderGuide/#insurance_kind">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         has_insurance
         </a>
         </td>
    </tr>
    <tr>
      <td>int</td>
      <td>
         <a class="linktoguide" href="/Orders/OrderGuide/#content_type">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         نوع محتوای کالا
      </a>
      <br/>
      (در صورت وارد نکردن این فیلد، محتوای کالا بصورت پیشفرض عادی در نظر گرفته میشود)
      </td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>
      <a class="linktoguide" href="/Orders/OrderGuide/#content_type">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         content_type
         </a>
         </td>
    </tr>
    <tr><td>int</td>
    <td><a class="linktoguide" href="/Orders/CreateOrder/#kioskList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         شناسه کیوسک جابار
      </a></td>
      <td>false</td>
      <td>true</td>
      <td>true</td>
      <td><a class="linktoguide" href="/Orders/CreateOrder/#kioskList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
          kiosk_id
      </a></td></tr>
    <tr><td>int</td><td>مبلغ پیش‌ پرداخت(در صورتی که نوع پرداخت، پرداخت در محل باشد قابل تنظیم می‌باشد)</td><td>false</td><td>true</td><td>false</td><td>pre_paid_price</td></tr>

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
<br/>
<br/>
<br/><br/><br/><br/><br/><br/>
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
</div>       <!--closed createdOrder -->

<!-- start of packagesList -->
<div  class="middle">

<div class="right-section">

<h2 id="packagesList">لیست بسته‌های پستی</h2>

 در انتخاب اندازه بسته‌بندی، بسته به اینکه سفارش شما در چه کارتن پستی، جای می‌گیرد، یکی از انواع کارتن های پستی سایز ۱ تا ۹ را انتخاب نمایید. اگر اندازه بسته شما، بیش از کارتن پستی سایز ۹ باشد،گزینه `بیش تر از ۹` را انتخاب نمایید. 
 
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
    <tr><td>str</td><td>شناسه فروشگاه</td><td>false</td><td>false</td><td>true</td><td>shop_id</td></tr>
  </tbody>
</table> 
<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/packing-box</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json
{
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
                "pk": 14,
                "length": 30,
                "width": 20,
                "height": 20,
                "title": "30*20*20 cm"
            },
            {
                "pk": 15,
                "length": 35,
                "width": 25,
                "height": 20,
                "title": "35*25*20 cm"
            }
        ],
        "count": 10,
        "page": 1,
        "total_count": 2
    }
}


```
<!-- closing left -->
</div> 
</div>       <!--closed packagesList -->

<!-- start of kiosk -->

<div  class="middle">

<div class="right-section">

<h2 id="kioskList">لیست کیوسک های سفارشات پستی</h2>

 در صورت نیاز به توزیع سفارشات پستی در لاکر های جابار، در زمان ثبت سفارش میبایست کیوسک مدنظر جهت توزیع مشخص گردد.<br/>
برای دریافت لیست کیوسک های جابار مربوط به شهر خود، میتوانید به وب سرویس روبرو با متد درج شده درخواست ارسال کنید. 
 
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
    <tr><td>str</td><td>شناسه فروشگاه</td><td>false</td><td>false</td><td>true</td><td>shop_id</td></tr>
     <tr><td>int</td><td>کد استان</td><td>false</td><td>false</td><td>true</td><td>province_code</td></tr>
      <tr><td>int</td><td>کد شهرستان</td><td>false</td><td>false</td><td>true</td><td>city_code</td></tr>
  </tbody>
</table> 
<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/kiosk</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json
{
    "shop_id": "fc45949a-921d-4b4f-1ade-ab5180f7dcve",
    "city_code": 1,
    "province_code": 1
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
                "pk": 101,
                "post_unit_id": 15,
                "company": "جابار",
                "address": "تهران، خيابان عباس آباد، خيابان مفتح شمالي، نرسيده به خيابان مطهري، اداره پست منطقه 15 ",
                "lat": 35.72616477637468,
                "lon": 51.427485457433356
            }
        ],
        "count": 1,
        "page": 1,
        "total_count": 3
    }
}

```
<!-- closing left -->
</div> 
</div>       <!--closed kiosk -->

<!-- closing container -->
</div>












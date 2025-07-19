---
title: راهنمایی سفارشات 
index: true
sidebarDepth: 2
---

<div class="container">

# راهنمای سفارشات  

برای اطلاع از مقادیری که فیلدهای نوع پرداخت سفارش،نوع سفارش،نوع ثبت سفارش،نوع محتوای سفارش و وضعیت سفارشات میتوانند داشته باشند،به جداول زیر مراجعه کنید. 


<div  class="middle">

<div class="right-section">

<h2 id="pay_type">نوع پرداخت</h2>

 نوع پرداخت شامل یکی از چهار حالت زیر می‌باشد:
 <br/>
 ۱.پرداخت در محل(COD) : در این حالت هزینه ارسال و هزینه کالا(ارزش ریالی کالا)در مقصد از "گیرنده "دریافت  می‌شود.
 <br/>
 ۲.آنلاین:در این حالت در مقصد هیچ مبلغی از "گیرنده"دریافت نمیشود.
 <br/>
 ۳.پس‌کرایه:در این حالت تنها هزینه ارسال در مقصد از "گیرنده" دریافت می‌شود.
 <br/>
 ۴.ارسال رایگان:در این حالت تنها هزینه‌ی کالا(ارزش ریالی کالا)در مقصد از "گیرنده"دریافت می‌شود.

 ::: info نکته
 در هر چهار روش،هزینه‌ی ارسال از شارژ کیف پول پنل کسر میگردد.در روش پرداخت های "پس کرایه"،"پرداخت در محل(COD)"و "ارسال رایگان"،مبالغ دریافتی توسط پستچی از گیرنده،پس از توزیع سفارش به گیرنده،به شارژ کیف پول باز می‌گردد.
 :::
<br/>
<br/>
<br/>

<!-- closing right section -->
</div>

<div class="left-section">

<br/>
<div id="jadval1">
<table>
  <thead>
    <tr>
      <th>کد</th>
      <th>نوع پرداخت</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>پرداخت در محل (COD)</td>
    </tr>
    <tr>
      <td>1</td>
      <td>پرداخت آنلاین</td>
    </tr>
    <tr>
      <td>2</td>
      <td>پس کرایه</td>
    </tr>
    <tr>
      <td>3</td>
      <td>ارسال رایگان</td>
    </tr>
  </tbody>
</table>
</div>


<!-- closing left -->
</div> 
<!-- closing middle -->. 
<!-- closing part_1 -->
</div>
<div class="middle">

<div class="right-section">

<h2 id="order_type">نوع سفارش</h2>

در حال حاضر دو سرویس پست پیشتاز و پست ویژه در بستر تجارت الکترونیک پست،قابل استفاده است:
<br/>
۱.پیشتاز:این سرویس تقریبا تمام نقاط کشور اعم از شهر ها و روستا ها را پوشش می‌دهد.مدت زمان توزیع(SLA)در این سرویس، ۳ الی ۵ روز می‌باشد.
<br/>
۲.ویژه: ارسال در این سرویس تنها بین مرکز استان به مرکز استان می‌باشد. مدت زمان توزیع(SLA)در این سرویس ۲۴ ساعت می‌باشد.

<br/>
<br/>

</div>
<div class="left-section">
<br/>
<br/>

<table  dir="rtl">
  <thead>
    <tr>
      <th colspan="2">(نوع پرداخت) pay_type</th>
    </tr>
    <tr>
      <th>کد</th>
      <th>عنوان</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>پرداخت در محل (COD)</td>
    </tr>
    <tr>
      <td>1</td>
      <td>پرداخت آنلاین</td>
    </tr>
    <tr>
      <td>2</td>
      <td>پس کرایه</td>
    </tr>
    <tr>
      <td>3</td>
      <td>ارسال رایگان</td>
    </tr>
  </tbody>
</table>
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
      <td>نوع پرداخت سفارش</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>pay_type</td>
    </tr>
    <tr>
      <td>int</td>
      <td>نوع سفارش</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>order_type</td>
    </tr>
    <tr>
      <td>int</td>
      <td>وضعیت</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>status</td>
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












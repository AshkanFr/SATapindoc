---
title: پرداخت مستقیم
index: true
sidebarDepth: 2
---
<div class="container">

## پرداخت مستقیم

با استفاده از این سرویس، خریدار پرداخت‌های آنلاین خود را بدون نیاز به ورود به درگاه پرداخت اینترنتی و وارد کردن اطلاعات
کارت بانکی انجام میدهد.

ابتدا جهت فعالسازی این سرویس برای درگاه خود تیکت (opens new window)ارسال نمایید.

<div  class="middle">

<div class="right-section">

## ارسال اطلاعات

در مرحله اول پذیرندگان باید پارامترهای موجود در جدول زیر را ، با توجه به نوع داده‌ها و نام فیلد، با متد POST به آدرس
مشخص شده ارسال نمایند.

<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>الزام</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>merchant_id</td>
      <td>String</td>
      <td>بله</td>
      <td>كد 36 كاراكتری اختصاصی درگاه پذیرنده</td>
    </tr>
    <tr>
      <td>mobile</td>
      <td>String</td>
      <td>بله</td>
      <td>شماره تماس خریدار</td>
    </tr>
    <tr>
      <td>ssn</td>
      <td>String</td>
      <td>خیر</td>
      <td>کد ملی خریدار</td>
    </tr>
    <tr>
      <td>expire_at</td>
      <td>String</td>
      <td>بله</td>
      <td>تاریخ انقضای قرارداد پرداخت مستقیم (مدت قرارداد حداقل باید ۳۰ روز باشد)تاریخ انقضای قرارداد پرداخت مستقیم (مدت قرارداد حداقل باید ۳۰ روز باشد) تاریخ انقضای قرارداد پرداخت مستقیم (مدت قرارداد حداقل باید ۳۰ روز باشد) تاریخ انقضای قرارداد پرداخت مستقیم (مدت قرارداد حداقل باید ۳۰ روز باشد)</td>
    </tr>
    <tr>
      <td>max_daily_count</td>
      <td>String</td>
      <td>بله</td>
      <td>حداکثر تعداد تراکنش روزانه</td>
    </tr>
    <tr>
      <td>max_monthly_count</td>
      <td>String</td>
      <td>بله</td>
      <td>حداکثر تعداد تراکنش ماهانه</td>
    </tr>
    <tr>
      <td>max_amount</td>
      <td>String</td>
      <td>بله</td>
      <td>حداکثر مبلغ تراکنش به ریال</td>
    </tr>
    <tr>
      <td>callback_url</td>
      <td>String</td>
      <td>بله</td>
      <td>صفحه بازگشت پس از بستن قرارداد</td>
    </tr>
  </tbody>
</table>

> ⚠️ فیلدهای shop_id, receiver_mobile, و cod_amount ضروری هستند.


پاسخ برگشتی توسط این درخواست به شرح زیر است :


<div class="table">

<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>payman_authority</td>
      <td>String</td>
      <td>مقدار آتوریتی پیمان که میبایست ذخیره کنید</td>
    </tr>
    <tr>
      <td>code</td>
      <td>Integer</td>
      <td>عددی كه نشان دهنده موفق بودن یا نبودن پرداخت است.</td>
    </tr>
    <tr>
      <td>message</td>
      <td>String</td>
      <td>پیام موفقیت آمیز بودن درخواست</td>
    </tr>
    <tr>
      <td>errors</td>
      <td>Array</td>
      <td>در صورت وجود خطا کد خطا و پیام آن را برمیگرداند</td>
    </tr>
  </tbody>
</table>


</div>

</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.zarinpal.com/pg/v4/payman/request.json</span>
 <span class="badge post">POST</span>
</div>

##### نمونه درخواست

::: tabs

@tab:active PHP
```php
$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => 'https://api.zarinpal.com/pg/v4/payman/request.json',
CURLOPT_RETURNTRANSFER => true,
CURLOPT_ENCODING => '',
CURLOPT_MAXREDIRS => 10,
CURLOPT_TIMEOUT => 0,
CURLOPT_FOLLOWLOCATION => true,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
CURLOPT_CUSTOMREQUEST => 'POST',
CURLOPT_POSTFIELDS => '{
"merchant_id": "عرفان ناشیرین",
"mobile": "09123456789",
"ssn": "0480123456",
"expire_at": "2025-04-08 00:00:00",
"max_daily_count": "100",
"max_monthly_count": "1000",
"max_amount": "50000",
"callback_url": "https://your-site.com/direct"
}',
CURLOPT_HTTPHEADER => array(
'Content-Type: application/json',
'Accept: application/json'
),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

@tab JSON
```json
{
  "data": {
    "payman_authority": "payman_6moa",
    "code": 100,
    "message": "Success"
  },
  "errors": []
}
```
:::


##### نمونه پاسخ

```json
{
  "data": {
    "payman_authority": "payman_6moa",
    "code": 100,
    "message": "Success"
  },
  "errors": []
}
```

::: info نکته

<div class="info-box">
تمامی داده‌های برگشتی از زرین‌پال به صورت json می باشد.
</div>

:::

</div>
</div>

<div  class="middle">

<div class="right-section">

## دریافت لیست بانک‌ها

برای بستن قرار داد با بانک میبایست bank_code بانکی که میخواهید خریدار با آن قرار داد ببندد را داشته باشید

برای دریافت bank_code یک درخواست GET به آدرس مشخص شده ارسال کنید

پاسخ برگشتی توسط این درخواست به شرح زیر است :


<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>banks</td>
      <td>Array</td>
      <td>لیست بانک های موجود</td>
    </tr>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>نام بانک</td>
    </tr>
    <tr>
      <td>slug</td>
      <td>String</td>
      <td>نام اسلاگ بانک</td>
    </tr>
    <tr>
      <td>bank_code</td>
      <td>String</td>
      <td>مقدار bank_code که جهت بستن قرارداد با بانک مورد نظر نیاز دارید</td>
    </tr>
    <tr>
      <td>max_daily_amount</td>
      <td>Integer</td>
      <td>حداکثر مبلغ روزانه که بانک قبول به پرداخت میکند</td>
    </tr>
    <tr>
      <td>max_daily_count</td>
      <td>Integer یا null</td>
      <td>حداکثر تعداد تراکنش روزانه ای که بانک قبول به پرداخت میکند.<br>در صورت null بودن : محدودیتی ندارد</td>
    </tr>
    <tr>
      <td>code</td>
      <td>Integer</td>
      <td>عددی كه نشان دهنده موفق بودن یا موفق نبودن پرداخت است.</td>
    </tr>
    <tr>
      <td>message</td>
      <td>String</td>
      <td>پیام موفقیت آمیز بودن درخواست</td>
    </tr>
    <tr>
      <td>errors</td>
      <td>Array</td>
      <td>در صورت وجود خطا کد خطا و پیام آن را برمیگرداند</td>
    </tr>
  </tbody>
</table>
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.zarinpal.com/pg/v4/payman/banksList.json</span>
 <span class="badge get">GET</span>
</div>

##### نمونه پاسخ لیست بانک ها

<div>

```json
{
  "data": {
    "banks": [
      {
        "name": "بانک سامان",
        "slug": "Saman",
        "bank_code": "SABCIR",
        "max_daily_amount": 100000000,
        "max_daily_count": 25
      },
      {
        "name": "بانک سينا",
        "slug": "Sina",
        "bank_code": "SINAIR",
        "max_daily_amount": 100000000,
        "max_daily_count": null
      }
    ],
    "code": 100,
    "message": "Success"
  },
  "errors": []
}

```

</div>

</div>

</div>

<div  class="middle">

<div class="right-section">

## صفحه بستن قرارداد

پس از دریافت `authority` و `bank_code` مقادیر را در لینک مشخص شده قرار دهید و کاربر را به صفحه بانک هدایت کنید


</div>

<div class="left-section">

<div class="token">
<span>https://www.zarinpal.com/pg/StartPayman/{payman_authority}/{bank_code}</span>
 <span class="badge get">GET</span>
</div>

</div>

</div>

<div  class="middle">

<div class="right-section">

## بازگشت به وب‌سایت پذیرنده

بعد از پایان عملیات در سمت زرین‌پال، خریدار از صفحه بستن قرارداد باز می‌گردد.

در این مرحله با توجه به نتیجه قرارداد و وضعیت آن، بانک خریدار را به آدرس درخواستی پذیرنده که در ارسال اطلاعات با پارامتر
`callback_url` مشخص شده است، هدایت می‌کند.

::: info نکته

<div class="info-box">
توجه داشته باشید كه یك Status به صورت QueryString به سایت پذیرنده ارسال می‌شود كه دارای دو مقدار ثابت ”OK“ و ”NOK“ است؛ در صورتی كه این مقدار برابر ”NOK“ باشد، به این معنا است كه بست قرارداد ناموفق بوده یا توسط خریدار لغو شده است؛ درنتیجه متد دریافت signature که در زیر آمده است باید در صورتی استفاده شود كه در QueryString مقدار Status برابر با ”OK“ باشد..
</div>

:::

</div>

<div class="left-section">

<div>

نمونه موفق :


```ruby
https://your-site.ir/?
payman_authority=payman_6moa&status=OK
```

نمونه ناموفق :


```ruby
https://your-site.ir/?
payman_authority=payman_6moa&status=NOK
```
</div>

</div>

</div>

<div  class="middle">

<div class="right-section">

## دریافت Signature

پس از بستن قرارداد موفق میبایست با استفاده از این متد signature را دریافت نمایید

برای دریافت signature میبایست یک درخواست با متد POST به آدرس مشخص شده حاوی مقادیر زیر ارسال کنید :


<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>الزام</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>merchant_id</td>
      <td>String</td>
      <td>بله</td>
      <td>كد 36 كاراكتری اختصاصی درگاه پذیرنده</td>
    </tr>
    <tr>
      <td>payman_authority</td>
      <td>String</td>
      <td>بله</td>
      <td>مقدار آتوریتی پیمان که در متد ارسال اطلاعات دریافت کردید</td>
    </tr>
  </tbody>
</table>


پاسخ برگشتی توسط این درخواست به شرح زیر است :



<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>signature</td>
      <td>String</td>
      <td>مقدار signature حاوی ۲۰۰ کاراکتر که میبایست ذخیره کنید</td>
    </tr>
    <tr>
      <td>code</td>
      <td>Integer</td>
      <td>عددی كه نشان دهنده موفق بودن یا موفق نبودن پرداخت است.</td>
    </tr>
    <tr>
      <td>message</td>
      <td>String</td>
      <td>پیام موفقیت آمیز بودن درخواست</td>
    </tr>
    <tr>
      <td>errors</td>
      <td>Array</td>
      <td>در صورت وجود خطا کد خطا و پیام آن را برمیگرداند</td>
    </tr>
  </tbody>
</table>


::: warning مهم

<div class="warning-box">


اطلاعات قرارداد اعم از : `payman_authority` و `signature` باید به صورت امن توسط پذیرنده نگهداری شود با استفاده از این
اطلاعات، پرداخت به صورت مسقیم انجام می شود.

</div>

:::

</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.zarinpal.com/pg/v4/payman/verify.json</span>
 <span class="badge post">POST</span>
</div>

##### نمونه درخواست

<div>

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.zarinpal.com/pg/v4/payman/verify.json',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "merchant_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "payman_authority": "payman_6moa"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Accept: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

```

##### نمونه پاسخ

```json
{
  "data": {
    "payman_authority": "payman_6moa",
    "code": 100,
    "message": "Success"
  },
  "errors": []
}
```

</div>

</div>

</div>

<div  class="middle">

<div class="right-section">

## انجام تراکنش مستقیم

حال جهت انجام یک تراکنش مستقیم میبایست از طریق قسمت درخواست پرداخت یک پرداخت ایجاد کرده و Authority دریافت کنید.

سپس از طریق متد Checkout که در زیر آمده است برای پرداخت تراکنش استفاده میکنید.

برای پرداخت تراکنش ایجاد شده میبایست یک درخواست با متد POST به آدرس مشخص شده ارسال نمایید که حاوی مقادیر زیر است :

<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>الزام</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>merchant_id</td>
      <td>String</td>
      <td>بله</td>
      <td>كد 36 كاراكتری اختصاصی درگاه پذیرنده</td>
    </tr>
    <tr>
      <td>authority</td>
      <td>String</td>
      <td>بله</td>
      <td>مقدار آتوریتی تراکنشی که از درخواست پرداخت دریافت کردید.</td>
    </tr>
    <tr>
      <td>signature</td>
      <td>String</td>
      <td>بله</td>
      <td>مقدار signature که از متد دریافت Signature دریافت کردید.</td>
    </tr>
  </tbody>
</table>



پاسخ برگشتی توسط این درخواست به شرح زیر است :

<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>refrence_id</td>
      <td>Integer</td>
      <td>در صورتی كه پرداخت موفق باشد، شماره تراكنش پرداخت انجام شده را بر می‌گرداند.</td>
    </tr>
    <tr>
      <td>amount</td>
      <td>Integer</td>
      <td>مبلغ تراکنش ( به ریال )</td>
    </tr>
    <tr>
      <td>code</td>
      <td>Integer</td>
      <td>عددی كه نشان دهنده موفق بودن یا موفق نبودن پرداخت است.</td>
    </tr>
    <tr>
      <td>message</td>
      <td>String</td>
      <td>پیام موفقیت آمیز بودن درخواست</td>
    </tr>
    <tr>
      <td>errors</td>
      <td>Array</td>
      <td>در صورت وجود خطا کد خطا و پیام آن را برمیگرداند</td>
    </tr>
  </tbody>
</table>

</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.zarinpal.com/pg/v4/payman/checkout.json</span>
 <span class="badge post">POST</span>
</div>

##### نمونه درخواست

<div>

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.zarinpal.com/pg/v4/payman/verify.json',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "merchant_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "authority": "A0000000000000000000000000002vm5y3lo",
  "signature": "eyJpdiI6InpoUHZoT0hPZjdNNj...",
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Accept: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

```

##### نمونه پاسخ

```json
{
  "data": {
    "payman_authority": "payman_6moa",
    "code": 100,
    "message": "Success"
  },
  "errors": []
}
```

</div>

</div>

</div>

<div  class="middle">

<div class="right-section">

## لغو قرارداد پرداخت مستقیم

برای لغو یک قرارداد پرداخت مستقیم میبایست یک درخواست با متد POST به آدرس مشخص شده حاوی مقادیر زیر ارسال کنید :

<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>الزام</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>merchant_id</td>
      <td>String</td>
      <td>بله</td>
      <td>كد 36 كاراكتری اختصاصی درگاه پذیرنده</td>
    </tr>
    <tr>
      <td>signature</td>
      <td>String</td>
      <td>بله</td>
      <td>مقدار signature که از متد دریافت Signature دریافت کردید.</td>
    </tr>
  </tbody>
</table>




پاسخ برگشتی توسط این درخواست به شرح زیر است :

<table>
  <thead>
    <tr>
      <th>نام</th>
      <th>نوع</th>
      <th>توضیحات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>code</td>
      <td>Integer</td>
      <td>عددی كه نشان دهنده موفق بودن یا موفق نبودن لغو پرداخت مستقیم است.</td>
    </tr>
    <tr>
      <td>message</td>
      <td>String</td>
      <td>پیام موفقیت آمیز بودن درخواست</td>
    </tr>
    <tr>
      <td>errors</td>
      <td>Array</td>
      <td>در صورت وجود خطا کد خطا و پیام آن را برمیگرداند</td>
    </tr>
  </tbody>
</table>


::: warning مهم

<div class="warning-box">

پذیرنده حتما میبایست با این API یک بخشی برای خریداران خود ایجاد کند تا کاربرانی که پرداخت مستقیم ثبت کرده اند در هر زمان
دلخواهی که تمایل به لغو پرداخت مستقیم خود داشتند سرویس پرداخت مستقیم را برای قرارداد خود غیرفعال کند در صورت عدم پیاده
سازی این بخش، زرین پال میتواند کل سرویس را غیرفعال کند
</div>

:::

</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.zarinpal.com/pg/v4/payman/cancelContract.json</span>
 <span class="badge post">POST</span>
</div>

##### نمونه درخواست

<div>

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.zarinpal.com/pg/v4/payman/verify.json',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "merchant_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "authority": "A0000000000000000000000000002vm5y3lo",
  "signature": "eyJpdiI6InpoUHZoT0hPZjdNNj...",
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Accept: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

```

##### نمونه پاسخ

```json
{
  "data": {
    "code": 100,
    "message": "Success"
  },
  "errors": []
}
```

</div>

</div>

</div>

<div  class="middle">

<div class="right-section">

#### اعتبارسنجی تراکنش

برای وریفای کردن تراکنش مورد نظر میتوانید از متد اعتبارسنجی در مستندات بخش [راهنمای اتصالات](Connections) استفاده کنید

</div>

</div>


</div>

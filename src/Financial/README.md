---
title: مالی 
index: true
sidebarDepth: 2
---

<div class="container">

# مالی  
<hr>
توضیحاتی راجع به بخش های مالی


<div  class="middle">

<div class="right-section">

<h2 id="bankPortal">درگاه بانکی</h2>

 توضیحاتی راجع به دریافت لینک جهت پرداخت وجه 
 
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
      <td>string</td>
      <td>شناسه فروشگاه</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>shop_id</td>
    </tr>
    <tr>
      <td>int</td>
      <td>مبلغ تراکنش</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>price</td>
    </tr>
    <tr>
      <td>string</td>
      <td>آدرس برگشت از پرداخت</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>redirect_page</td>
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
      <th>field</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>int</td>
      <td>مشخص میکند که آیا عملیات موفق بوده یا خیر</td>
      <td>false</td>
      <td>success</td>
    </tr>
    <tr>
      <td>string</td>
      <td>نام فروشگاه (درصورت موفق بودن تراکنش)</td>
      <td>true</td>
      <td>shopTitle</td>
    </tr>
    <tr>
      <td>int</td>
      <td>مبلغ (در صورت موفق بودن تراکنش)</td>
      <td>true</td>
      <td>amount</td>
    </tr>
    <tr>
      <td>string</td>
      <td>شناسه پرداخت (‌در صورت موفق بودن تراکنش)</td>
      <td>true</td>
      <td>tranId</td>
    </tr>
    <tr>
      <td>string</td>
      <td>توضیحات</td>
      <td>false</td>
      <td>message</td>
    </tr>
  </tbody>
</table>
<!-- closing right section -->
</div>

<div class="left-section">

<br/>
<br/>
<br/>

<div class="tokenWithHeader ">
<span style="text-align: left; font-family: 'Vazir', sans-serif;">
  https://api.tapin.ir/api/v2/public/order/post/detail
</span>
<span class="badge post">POST</span>
</div>

<div class="tokenWithHeader">
  <span style="text-align: left; font-family: 'Vazir', sans-serif;">
    {'... Authorization': "JWT eyJ0eXAiOiJ"}
  </span>
  <span class="badge header">HEADER</span>
</div>


##### نمونه جیسون جهت ارسال
```json
{
    "shop_id": "3d65e6eb-ca0d-47b3-9934-6295a355872f",
    "price": "100000",
    "redirect_page": "https://yourdomain.ir/"
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
        "url": "https://domain.ir/api/v2/public/transaction/indirect/pay/?hs=83d9asd98dd",
        "transaction_pk": "c21e9d24-ebf3-43b9-8fca-2593084358dd"

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

<h2 id="shopCredit">اعتبار پنل فروشگاه</h2>
توضیحاتی راجع به پنل فروشگاه
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
    <tr>
      <td>int</td>
      <td>اعتبار پنل</td>
      <td>false</td>
      <td>false</td>
      <td>credit</td>
    </tr>
  </tbody>
</table>

<!-- closing right-section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/transaction/credit</span>
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
        "credit": 4492059
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

<h2 id="onlineTransactionList">لیست تراکنشات افزایش اعتبار</h2>

توضیحاتی راجع به لیست تراکنشات افزایش اعتبار

<div style="display: flex; gap: 2rem; justify-content: start; direction: rtl;">
  <!-- جدول وضعیت -->
  <table style="border-collapse: collapse; text-align: center;">
    <thead>
      <tr>
        <th colspan="2">وضعیت</th>
      </tr>
      <tr>
        <th>value</th>
        <th>key</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>منتظر پرداخت</td>
        <td>0</td>
      </tr>
      <tr>
        <td>پرداخت شده</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>

  <!-- جدول نوع پرداخت -->
  <table  style="border-collapse: collapse; text-align: center; width: 400px;
 ">
    <thead>
      <tr>
        <th colspan="2">نوع پرداخت</th>
      </tr>
      <tr>
        <th>value</th>
        <th>key</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>نامشخص</td>
        <td>-1</td>
      </tr>
      <tr>
        <td>چک</td>
        <td>0</td>
      </tr>
      <tr>
        <td>فیش</td>
        <td>1</td>
      </tr>
      <tr>
        <td>آسان پرداخت</td>
        <td>2</td>
      </tr>
    </tbody>
  </table>
</div>
<!-- ---------------- -->
<!-- closing right-section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/transaction/online-increase-credit/list</span>
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
                "id": "faf3fdf5-f2d7-443c-8d52-e7cc36fbd536",
                "price": 100000,
                "pay_type_description": "آسان پرداخت",
                "pay_type": 2,
                "status": 0,
                "status_description": "متظر پرداخت",
                "create_at": "2022-06-06T12:05:35.015276"
            }
        ],
        "count": 1,
        "page": 1,
        "total_count": 88
    }
}

```
<!-- closing left section -->
</div>

<!-- closing middle -->
<!-- closing part_3 -->
</div>

<!-- closing container -->
</div>












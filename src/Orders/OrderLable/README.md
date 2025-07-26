---
title: لیبل و فاکتور   
index: true
sidebarDepth: 2
---

<div class="container">

# لیبل و فاکتور     
<hr>
توضیحاتی راجع به این صفحه و لیست هایی که میتوان گرفت 

<div  class="middle">

<div class="right-section">

<h2 id="orderLable">لیبل سفارشات</h2>

 توضیحات برای گرفت لیست فروشگاه ها   
 
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
      <td>list</td>
      <td>شناسه یکتا سفارشات</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>orders</td>
    </tr>
  </tbody>
</table>
<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/detail/label</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json
{
	"shop_id":"fc45949a-921d-4b4f-1ade-ab5180f7dcve",
	"orders":["0053a338-7958-45a8-b8b9-5bd721ae5218","5549024c-f9f6-4ed3-be10-043a254a5df8"]
}
```
<!-- closing left -->
</div> 
<!-- closing middle -->. 
<!-- closing part_1 -->
</div>
<div class="middle">

<div class="right-section">

<h2 id="lableWithDate">لیبل سفارشات بر اساس تاریخ</h2>
تضویحاتی راجع به لیبل سفارشات بر اساس تاریخ

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
      <td>str</td>
      <td>از تاریخ</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>from_date</td>
    </tr>
    <tr>
      <td>str</td>
      <td>تا تاریخ</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>to_date</td>
    </tr>
  </tbody>
</table>

<br/>
 
<!-- closing right section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/detail/label/date</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{
    "shop_id": "fc45949a-921d-4b4f-1ade-ab5180f7dcve",
    "from_date": "1403-12-1",
    "to_date": "1404-02-02"
}
```

<!-- closing left section -->
</div>
<!-- closing middle -->
<!-- closing part_2 -->
</div>

<div class="middle">
<div class="right-section">

<h2 id="productOrdersHTML">لیست محصولات سفارشات به صورت HTML</h2>
توضیحاتی راجع به گذفتن لیست محصولات سفارش به صورت HTML


<!-- closing right-section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/detail/list/html/{order_id}</span>
 <span class="badge post">GET</span>
</div>

<!-- closing left section -->
</div>

<!-- closing middle -->
<!-- closing part_3 -->
</div>


<div class="middle">

<div class="right-section">

<h2 id="barcodeOfReadyOrders">لیست بارکد سفارشات آماده به ارسال به صورت HTML</h2>
توضیاحاتی راجع به بارکد سفارشاتی که آماده ارسال هستند 

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
      <td>str</td>
      <td>از تاریخ</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>from_date</td>
    </tr>
    <tr>
      <td>str</td>
      <td>به تاریخ</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>to_date</td>
    </tr>
  </tbody>
</table>

<br/>
 
<!-- closing right section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/order/post/barcode/html</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{
	"shop_id":"fc45949a-921d-4b4f-1ade-ab5180f7dcve",
	"from_date": "1400-02-01 12:00",
	"to_date": "1400-02-08 13:45",
}

```

<!-- closing left section -->
</div>
<!-- closing middle -->
<!-- closing part_4 -->
</div>
<!-- closing container -->
</div>












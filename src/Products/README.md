---
title: محصولات  
index: true
sidebarDepth: 2
---

<div class="container">

# محصولات    
<hr>
توضیحاتی راجع به محصولات 

<div  class="middle">

<div class="right-section">

<h2 id="createProduct">ساخت محصول</h2>

توضیحاتی راجع به ساخت محصول    
 
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
      <td>string</td>
      <td>نام محصول</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>title</td>
    </tr>
    <tr>
      <td>string</td>
      <td>شناسه گروه محصول</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>category_id</td>
    </tr>
    <tr>
      <td>int</td>
      <td>وزن</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>weight</td>
    </tr>
    <tr>
      <td>int</td>
      <td>قیمت</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>price</td>
    </tr>
    <tr>
      <td>string</td>
      <td>توضیحات</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>description</td>
    </tr>
  </tbody>
</table>

<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/product/create</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json
{
    "shop_id": "f429ee63...",
    "title": "TEST_PRODUCT",
    "price": 100,
    "weight": 100,
    "description": null,
    "category_id":"3d65e6eb-ca0d-47b3-9934-6295a355872f"
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
        "product_id": 3670,
        "title": "TEST_PRODUCT",
        "category_id": "3d65e6eb-ca0d-47b3-9934-6295a355872f",
        "weight": 100,
        "price": 100,
        "created_at": "1399-02-26 23:26"
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

<h2 id="editProduct">ویرایش محصول</h2>

توضیحاتی برای ویرایش یک محصول 
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
      <td>شناسه محصول</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>product_id</td>
    </tr>
    <tr>
      <td>string</td>
      <td>نام محصول</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>title</td>
    </tr>
    <tr>
      <td>string</td>
      <td>شناسه گروه محصول</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>category_id</td>
    </tr>
    <tr>
      <td>int</td>
      <td>وزن</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>weight</td>
    </tr>
    <tr>
      <td>int</td>
      <td>قیمت</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>price</td>
    </tr>
    <tr>
      <td>string</td>
      <td>توضیحات</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>description</td>
    </tr>
  </tbody>
</table>

 
<!-- closing right section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/product/update</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{
    "shop_id": "f429ee...",
    "product_id": 3670,
    "title": "TEST_PRODUCT 2",
    "price": 1000,
    "weight": 1000,
    "description": null,
    "category_id":"3d65e6eb-ca0d-47b3-9934-6295a355872f"
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
        "product_id": 3670,
        "title": "TEST_PRODUCT 2",
        "category_id": "3d65e6eb-ca0d-47b3-9934-6295a355872f",
        "weight": 1000,
        "price": 1000,
        "created_at": "1399-02-26 23:26"
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

<h2 id="deleteProduct">حذف محصول</h2>

توضیحاتی راجع به حذف محصول

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
      <td>شناسه محصول</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>product_id</td>
    </tr>
  </tbody>
</table>

<!-- closing right-section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/product/delete</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{
    "shop_id": "f429ee63-bcb4-4783-bee2-676e51ba907f",
    "product_id": 3669
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
        "product_id": null,
        "title": "",
        "category_id": "",
        "weight": null,
        "price": null,
        "created_at": null
    }
}

```

<!-- closing left section -->
</div>

<!-- closing middle -->
<!-- closing part_3 -->
</div>
<div class="middle">
<div class="right-section">

<h2 id="productList">لیست محصولات</h2>

توضیحاتی راجع به گرفتن لیست محصولات

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
      <td>str</td>
      <td>شناسه فروشگاه</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>shop_id</td>
    </tr>
    <tr>
      <td>int</td>
      <td>شناسه یکتای محصول</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>product_id</td>
    </tr>
    <tr>
      <td>string</td>
      <td>نام</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>title</td>
    </tr>
    <tr>
      <td>string</td>
      <td>شناسه گروه محصول</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>category_id</td>
    </tr>
    <tr>
      <td>int</td>
      <td>وزن</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>weight</td>
    </tr>
    <tr>
      <td>int</td>
      <td>قیمت</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>price</td>
    </tr>
    <tr>
      <td>string</td>
      <td>تاریخ ایجاد</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>created_at</td>
    </tr>
  </tbody>
</table>

<!-- closing right-section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/product/list</span>
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
برای اعمال فیلتر بیشتر روی لیست محصولات میتوانید فیلد های بالا رو ارسال کنید 
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
                "product_id": 1924,
                "title": "product_title",
                "category_id": "3d65e6eb-ca0d-47b3-9934-6295a355872f",
                "weight": 500,
                "price": 800000,
                "created_at": "1398-04-19 17:07"
            }
        ],
        "count": 1,
        "page": 1,
        "total_count": 3
    }
}


```
<!-- closing left section -->
</div>

<!-- closing middle -->
<!-- closing part_4 -->
</div>

<div class="middle">
<div class="right-section">

<h2 id="productCTGList">لیست دسته‌بندی محصولات</h2>

توضیحاتی راجع به گرفتن لیست دسته بندی محصولات

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
  </tbody>
</table>
<!-- ------------- -->
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
      <td>str</td>
      <td>شناسه گروه پدر</td>
      <td>false</td>
      <td>true</td>
      <td>parent_category_id</td>
    </tr>
    <tr>
      <td>int</td>
      <td>شماره صفحه</td>
      <td>false</td>
      <td>false</td>
      <td>count</td>
    </tr>
    <tr>
      <td>int</td>
      <td>تعداد آیتم ها در صفحه</td>
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
<!-- closing right-section -->
</div>
<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/product/category/list</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{
    "count":10,
    "page":1
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
                "category_id": "3d65e6eb-ca0d-47b3-9934-6295a355872f",
                "title": "مجلات",
                "parent_category_id": null
            },
            {
                "category_id": "3421e007-1b61-4130-a1ed-7e52d8f6260f",
                "title": "کتاب",
                "parent_category_id": null
            },
            {
                "category_id": "e1a522ce-1fae-435e-ab6e-7a67799ce359",
                "title": "بدون دسته بندی",
                "parent_category_id": null
            }
        ],
        "count": 3,
        "page": 1,
        "total_count": 3
    }
}


```
<!-- closing left section -->
</div>

<!-- closing middle -->
<!-- closing part_5 -->
</div>

<!-- closing container -->
</div>












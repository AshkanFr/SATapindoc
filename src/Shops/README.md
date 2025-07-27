---
title: گرفتن لیست فروشگاه‌ها  
index: true
sidebarDepth: 2
---

<div class="container">
<div  class="middle">

<div class="right-section">

<h2 id="getShopsList">گرفتن لیست‌ فروشگاه‌ها</h2>

 به منظور دریافت لیست و شناسه فروشگاه های دیگر خود،میتوانید به وب سرویس روبرو با متد درج شده درخواست ارسال کنید 
 
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
      <td>تعداد آیتم‌ها جهت نمایش در صفحه</td>
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
      <td>شناسه فروشگاه‌ها</td>
      <td>false</td>
      <td>false</td>
      <td>id</td>
    </tr>
    <tr>
      <td>str</td>
      <td>نام فروشگاه</td>
      <td>false</td>
      <td>false</td>
      <td>title</td>
    </tr>
    <tr>
      <td>str</td>
      <td>تعداد آیتم‌ها در صفحه</td>
      <td>false</td>
      <td>false</td>
      <td>count</td>
    </tr>
    <tr>
      <td>str</td>
      <td>شماره صفحه</td>
      <td>false</td>
      <td>false</td>
      <td>page</td>
    </tr>
    <tr>
      <td>str</td>
      <td>تعداد کل آیتم‌ها</td>
      <td>false</td>
      <td>false</td>
      <td>total_count</td>
    </tr>
  </tbody>
</table>
<!-- closing right section -->
</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/shop/list</span>
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
                "id": "7c42379...",
                "title": "My Shop Title"
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

<h2 id="createShop">ثبت فروشگاه</h2>

توضیحاتی برای ثبت فروشگاه 
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
    <td>str</td><td>نام فروشگاه</td>
    <td>false</td><td>false</td>
    <td>shop_name</td></tr>
    <tr><td>str</td><td>نام</td><td>false</td><td>false</td><td>first_name</td></tr>
    <tr><td>str</td><td>نام خانوادگی</td><td>false</td><td>false</td><td>last_name</td></tr>
    <tr><td>str</td><td>ایمیل</td><td>false</td><td>false</td><td>email</td></tr>
    <tr><td>str</td><td>نام پدر</td><td>false</td><td>false</td><td>father_name</td></tr>
    <tr><td>str</td><td>تلفن</td><td>false</td><td>true</td><td>phone</td></tr>
    <tr><td>str</td><td>موبایل</td><td>false</td><td>false</td><td>mobile</td></tr>
    <tr><td>str</td><td>تاریخ تولد (میلادی)</td><td>false</td><td>false</td><td>birth_date</td></tr>
    <tr><td>str</td><td>شماره شناسنامه</td><td>false</td><td>false</td><td>certificate_code</td></tr>
    <tr><td>str</td><td>سریال شناسنامه</td><td>false</td><td>false</td><td>certificate_serial_number</td></tr>
    <tr><td>str</td><td>محل تولد</td><td>false</td><td>false</td><td>birthday_location</td></tr>
    <tr><td>str</td><td>کد ملی</td><td>false</td><td>false</td><td>national_code</td></tr>
    <tr><td>str</td><td>آدرس</td><td>false</td><td>false</td><td>address</td></tr>
    <tr><td>int</td><td><a class="linktoguide" href="/ProvinceAndCitiesList/#getProvinceList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         کد استان
      </a></td><td>false</td><td>false</td><td><a class="linktoguide" href="/ProvinceAndCitiesList/#getProvinceList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         province
      </a></td></tr>
    <tr><td>int</td><td>شهر</td><td>false</td><td>false</td><td>city</td></tr>
    <tr><td>str</td><td>کد پستی</td><td>false</td><td>false</td><td>postal_code</td></tr>
    <tr><td>str</td><td>واحد</td><td>false</td><td>false</td><td>unit</td></tr>
    <tr><td>str</td><td>طبقه</td><td>false</td><td>false</td><td>floor</td></tr>
    <tr><td>str</td><td>پلاک</td><td>false</td><td>false</td><td>plaque</td></tr>
    <tr><td>float</td><td>عرض جغرافیایی</td><td>false</td><td>false</td><td>latitude</td></tr>
    <tr><td>float</td><td>طول جغرافیایی</td><td>false</td><td>false</td><td>longitude</td></tr>
    <tr><td>str</td><td>وبسایت</td><td>false</td><td>false</td><td>website</td></tr>
    <tr><td>str</td><td>ساعت کاری فروشگاه</td><td>false</td><td>false</td><td>available_hours</td></tr>
    <tr><td>str</td><td>شناسه اینستاگرام</td><td>false</td><td>false</td><td>instagram_id</td></tr>
    <tr><td>str</td><td>توضیحات فروشگاه</td><td>false</td><td>true</td><td>shop_description</td></tr>
    <tr><td>str</td><td>لوگو فروشگاه (به صورت base64 ) حداکثر ۱ مگابایت</td><td>false</td><td>false</td><td>logo_image</td></tr>
    <tr><td>str</td><td>عکس کارت ملی (به صورت base64 ) حداکثر ۱ مگابایت</td><td>false</td><td>false</td><td>id_cart_image</td></tr>
    <tr><td>bool</td><td>آیا فروشگاه حقوقی هست</td><td>false</td><td>false</td><td>is_legal_shop</td></tr>
    <tr><td>str</td><td>نام شرکت (درصورت حقوقی بودن فروشگاه)</td><td>false</td><td>true</td><td>company_name</td></tr>
    <tr><td>str</td><td>کد اقتصادی شرکت (درصورت حقوقی بودن فروشگاه)</td><td>false</td><td>true</td><td>economic_code</td></tr>
    <tr><td>str</td><td>کد ملی شرکت (درصورت حقوقی بودن فروشگاه)</td><td>false</td><td>true</td><td>company_national_code</td></tr>
    <tr><td>str</td><td>شناسه ثبت شرکت (درصورت حقوقی بودن فروشگاه)</td><td>false</td><td>true</td><td>register_code</td></tr>
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
    "shop_name": "فروشگاه تست",
    "first_name": "نام",
    "last_name": "نام خانوادگی",
    "email": "test@gmail.com",
    "father_name": "نام پدر",
    "phone": "02166666666",
    "mobile": "09120000000",
    "birth_date": "1997-01-31",
    "certificate_code": "1111111111",
    "certificate_serial_number": "1111111111",
    "birthday_location": "تهران",
    "national_code": "1111111111",
    "address": "تهران",
    "province": 1,
    "city": 1,
    "postal_code": "1311111111",
    "unit": 1,
    "floor": 1,
    "plaque": 1,
    "latitude": 56.25,
    "longitude": 46.574,
    "website": "test.com",
    "available_hours": "12-24",
    "instagram_id": "@tapin",
    "shop_description": "توضیحات",
    "logo_image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAIAAACwQdIgAAAAA3NCSVQICAjb4U/gAAAA10lEQVQokWN0tjFxNBfg5mRmwAtY3GyE2FgY8StiYGBggivCr5YJzpLWllIykmNiwq4eoY6JiUHJVN48xEhAghefOgjgFuQy9tPXsFVhYWXGp46BgYGRkVFGS9Iy3ERUXgifOghg52bT99DWc9Nk52JjYGBgwaUOAsQURYSkBO+cvI/TPDhgYWcWkOInYN73zz9uHr775vE7nOr+//v/+Oqzu6cf/P39D6f7vrz5ev3Q7Y+vPyNsR1Px78+/e2cfPbz0+P8/VFcic94//XD90O1vn35g2gAAJh45fIebGSgAAAAASUVORK5CYII=",
    "id_cart_image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAIAAACwQdIgAAAAA3NCSVQICAjb4U/gAAAA10lEQVQokWN0tjFxNBfg5mRmwAtY3GyE2FgY8StiYGBggivCr5YJzpLWllIykmNiwq4eoY6JiUHJVN48xEhAghefOgjgFuQy9tPXsFVhYWXGp46BgYGRkVFGS9Iy3ERUXgifOghg52bT99DWc9Nk52JjYGBgwaUOAsQURYSkBO+cvI/TPDhgYWcWkOInYN73zz9uHr775vE7nOr+//v/+Oqzu6cf/P39D6f7vrz5ev3Q7Y+vPyNsR1Px78+/e2cfPbz0+P8/VFcic94//XD90O1vn35g2gAAJh45fIebGSgAAAAASUVORK5CYII=",
    "is_legal_shop": true,
    "company_name": "تاپین",
    "economic_code": "11111111",
    "company_national_code": "11111111",
    "register_code": "11111111"
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
        "id": "09443182-ccd7-4631-ae51-5dde361a06f6"
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
    <tr><td>int</td><td><a class="linktoguide" href="/ProvinceAndCitiesList/#getProvinceList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         کد استان
      </a></td><td>false</td><td>false</td><td><a class="linktoguide" href="/ProvinceAndCitiesList/#getProvinceList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         Province_code
      </a></td></tr>
    <tr><td>int</td><td><a class="linktoguide" href="/ProvinceAndCitiesList/#getCitiesList">
         <img src="/assets/images/icons8-external-link-96.png" alt="link icon" class="link-icon" />
         کد شهرستان
      </a></td><td>false</td><td>false</td><td>city_code</td></tr>
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
::: info راهنمایی
وضعیت فروشگاه ها
<div class="info-box">
  <table style="border-collapse: collapse; text-align: center;">
    <thead>
      <tr>
        <th colspan="2">status</th>
      </tr>
      <tr>
        <th>value</th>
        <th>key</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>غیرفعال</td>
        <td>0</td>
      </tr>
      <tr>
        <td>فعال</td>
        <td>1</td>
      </tr>
      <tr>
        <td>مسدود شده</td>
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












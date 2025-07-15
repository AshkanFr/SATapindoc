---
title: گرفتن لیست استان‌ها و شهرها  
index: true
sidebarDepth: 2
---

<div class="container">

# لیست استان‌ها و شهرها 
<hr>
توضیحاتی راجع به این صفحه و لیست هایی که میتوان گرفت 

<div  class="middle">

<div class="right-section">

<h2 id="getProvinceAndCitiesList">گرفتن لیست‌ استان‌ها و شهر‌ها</h2>

 توضیحات برای گرفت لیست استان ها شهرها همراه یکدیگر 
 
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
      <td>کد استان</td>
      <td>false</td>
      <td>false</td>
      <td>code</td>
    </tr>
    <tr>
      <td>str</td>
      <td>نام استان</td>
      <td>false</td>
      <td>false</td>
      <td>title</td>
    </tr>
    <tr>
      <td>list</td>
      <td>لیست شهرها</td>
      <td>false</td>
      <td>false</td>
      <td>cities</td>
    </tr>
  </tbody>
</table>

</div>

<div class="left-section">

<div class="token">
<span style="text-align: left">https://api.tapin.ir/api/v2/public/state/tree</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال
```json
{}
```

##### نمونه جیسون خروجی 
```json
{
    "returns": {
        "status": 200,
        "message": "عملیات با موفقیت انجام شد."
    },
    "entries": [
        {
            "code": 1,
            "title": "تهران",
            "cities": [
                {
                    "code": 1,
                    "title": "تهران"
                },
                {
                    "code": 331,
                    "title": "اسلام شهر"
                },
                {
                    "code": 1011,
                    "title": "منطقه 11 پستي تهران"
                },
                {
                    "code": 1013,
                    "title": "منطقه 13 پستي تهران"
                },
                {
                    "code": 1014,
                    "title": "منطقه 14 پستي تهران"
                },
                {
                    "code": 1015,
                    "title": "منطقه 15 پستي تهران"
                },
                {
                    "code": 1016,
                    "title": "منطقه 16 پستي تهران"
                },
                {
                    "code": 1017,
                    "title": "منطقه 17 پستي تهران\r\n"
                }
            ]
        }
    ]
}
```
<!-- closing left -->
</div> 
<!-- closing middle -->
</div>
<div class="middle">

<div class="right-section">

<h2 id="getProvinceList">گرفتن لیست استان‌ها</h2>

توضیحات برای گرفتن لیست استان ها 
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
      <td>تعداد آیتم‌های جهت نمایش در صفحه</td>
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


<br/>

<!-- ----------- -->

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
      <td>کد استان</td>
      <td>false</td>
      <td>false</td>
      <td>code</td>
    </tr>
    <tr>
      <td>str</td>
      <td>نام استان</td>
      <td>false</td>
      <td>false</td>
      <td>title</td>
    </tr>
    <tr>
      <td>int</td>
      <td>تعداد آیتم‌ها در صفحه </td>
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
      <td>تعداد کل آیتم‌ها </td>
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
<span style="text-align: left">https://api.tapin.ir/'/api/v2/public/state/list</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{ 
  "count":4,
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
                "code": 1,
                "title": "تهران"
            },
            {
                "code": 2,
                "title": "گيلان"
            },
            {
                "code": 4,
                "title": "خوزستان"
            },
            {
                "code": 5,
                "title": "فارس"
            }
        ],
        "count": 4,
        "page": 1,
        "total_count": 31
    }
}
```


<!-- closing left section -->
</div>
<!-- closing middle -->
</div>
<div class="middle">
<div class="right-section">

<h2 id="getCitiesList">گرفتن لیست شهرها</h2>
توضیحاتی راجع به چگونگی گرفتن لیست شهر ها 

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
      <td>تعداد آیتم‌های جهت نمایش در صفحه</td>
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
      <td>کد استان</td>
      <td>false</td>
      <td>false</td>
      <td>state_code</td>
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
      <td>int</td>
      <td>کد شهرستان</td>
      <td>false</td>
      <td>false</td>
      <td>code</td>
    </tr>
    <tr>
      <td>int</td>
      <td>نام شهرستان</td>
      <td>false</td>
      <td>false</td>
      <td>title</td>
    </tr>
    <tr>
      <td>int</td>
      <td>تعداد آیتم‌ها در صفحه</td>
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
      <td>تعداد کل آیتم‌ها</td>
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
<span style="text-align: left">https://api.tapin.ir/'/api/v2/public/city/list</span>
 <span class="badge post">POST</span>
</div>

##### نمونه جیسون جهت ارسال 

```json
{
    "count":4,
    "page":1,
    "state_code": 1
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
                "code": 1,
                "title": "تهران"
            },
            {
                "code": 331,
                "title": "اسلام شهر"
            },
            {
                "code": 1011,
                "title": "منطقه 11 پستي تهران"
            },
            {
                "code": 1013,
                "title": "منطقه 13 پستي تهران"
            },
            {
                "code": 1014,
                "title": "منطقه 14 پستي تهران"
            }
        ],
        "count": 5,
        "page": 1,
        "total_count": 115
    }
}

```

<!-- closing left section -->
</div>

<!-- closing middle -->
</div>

</div>











